<?php
declare(strict_types=1);
// Disposable Nextcloud only. Provider responses are synthetic; no external requests.
define('OC_CONSOLE',true);
require '/var/www/html/lib/base.php';
set_exception_handler(static function(Throwable $e): void { fwrite(STDERR,get_class($e).': '.$e->getMessage().' at '.$e->getFile().':'.$e->getLine()."\n".$e->getTraceAsString()."\n"); exit(1); });
if (getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1') throw new RuntimeException('disposable opt-in required');
use OCA\Library\Service\{MetadataBatchService,OpenLibraryLookupService,GoogleBooksLookupService,ItemService,InferenceBatchService,RootService,LibraryScanner,PersonalListService};
use OCA\Library\Exception\MetadataConflictException;
use OCP\{ICache,ICacheFactory,IMemcache,IDBConnection,IConfig,IUserManager,IUserSession};
use OCP\Files\IRootFolder;
use OCP\Http\Client\IClientService;
use OCP\Lock\ILockingProvider;
function check(bool $ok,string $message): void { if (!$ok) throw new RuntimeException($message); }
function rejects(string $type,callable $work): void { try { $work(); } catch(Throwable $e) { check($e instanceof $type,'Expected '.$type.', got '.get_class($e).': '.$e->getMessage()); return; } throw new RuntimeException('Expected '.$type); }
function review(MetadataBatchService $service,string $uid,string $jobId,int $itemId,string $action,array $data): array {
    $rows=$service->get($uid,$jobId)['rows'];
    $row=array_values(array_filter($rows,static fn($row)=>$row['id']===$itemId))[0];
    return $service->review($uid,$jobId,$itemId,$action,$data+['reviewVersion'=>$row['reviewVersion']]);
}
$db=\OC::$server->get(IDBConnection::class); $config=\OC::$server->get(IConfig::class);
$migration=new \OCA\Library\Migration\Version000400Date20261107120000();
$schema=new \OC\DB\SchemaWrapper(\OC::$server->get(\OC\DB\Connection::class),new \Doctrine\DBAL\Schema\Schema());
$output=new \OC\Migration\ConsoleOutput(new \Symfony\Component\Console\Output\NullOutput());
$migration->changeSchema($output,static fn()=>$schema,[]);
$beforeSchema=serialize($schema->getWrappedSchema());
$migration->changeSchema($output,static fn()=>$schema,[]);
check(serialize($schema->getWrappedSchema())===$beforeSchema,'migration schema rerun is idempotent');
$uid='library-smoke'; $user=\OC::$server->get(IUserManager::class)->get($uid);
\OC::$server->get(IUserSession::class)->setUser($user);
$home=\OC::$server->get(IRootFolder::class)->getUserFolder($uid);
$items=\OC::$server->get(ItemService::class);
if (!$home->nodeExists('LookupFixtures')) {
    $folder=$home->newFolder('LookupFixtures');
    for ($i=1;$i<=50;$i++) {
        $tmp=tempnam('/tmp','lookup'); $z=new ZipArchive(); $z->open($tmp,ZipArchive::OVERWRITE);
        $z->addFromString('META-INF/container.xml','<container><rootfiles><rootfile full-path="book.opf"/></rootfiles></container>');
        $z->addFromString('book.opf','<package xmlns="http://www.idpf.org/2007/opf" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata><dc:title>Lookup fixture '.sprintf('%02d',$i).'</dc:title><dc:creator>Example Writer</dc:creator></metadata></package>');
        $z->close(); $folder->newFile(sprintf('book-%02d.epub',$i),file_get_contents($tmp)); unlink($tmp);
    }
    $root=\OC::$server->get(RootService::class)->saveRoot($uid,'/LookupFixtures','Lookup fixtures',true);
    \OC::$server->get(LibraryScanner::class)->scan($uid,$root['id']);
}
$r=$db->executeQuery('SELECT id FROM *PREFIX*library_items WHERE user_id=? ORDER BY id',[$uid]); $ids=array_map('intval',$r->fetchAll(\PDO::FETCH_COLUMN)); $r->closeCursor();
check(count($ids)===50,'50 fixture books');
$db->executeStatement('DELETE FROM *PREFIX*library_lookup_jobs WHERE user_id=?',[$uid]);
foreach ($ids as $i=>$id) $items->updateItem($uid,$id,['title'=>sprintf('Lookup fixture %02d',$i+1),'publisher'=>'','description'=>'','language'=>'','identifiers'=>[]]);

$cache=new class extends \OC\Memcache\ArrayCache {
    public ?string $failure=null;
    public $duringRequest=null;
    public function get($key) { if ($this->duringRequest) { $callback=$this->duringRequest; $this->duringRequest=null; $callback(); } if ($this->failure) throw new RuntimeException($this->failure); $value=parent::get($key); if ($value===null) throw new RuntimeException('unseeded_provider_request'); return $value; }
};
$caches=new class($cache) implements ICacheFactory {
    public function __construct(private IMemcache $cache) {}
    public function isAvailable(): bool { return true; }
    public function isLocalCacheAvailable(): bool { return true; }
    public function createLocking(string $prefix=''): IMemcache { return $this->cache; }
    public function createDistributed(string $prefix=''): ICache { return $this->cache; }
    public function createLocal(string $prefix=''): ICache { return $this->cache; }
    public function createInMemory(int $capacity=512): ICache { return $this->cache; }
};
$config->setAppValue('library','openlibrary_lookup_enabled','yes');
$provider=new OpenLibraryLookupService(\OC::$server->get(IClientService::class),$caches,$db,$config);
$service=new MetadataBatchService($db,$items,\OC::$server->get(InferenceBatchService::class),$provider,\OC::$server->get(GoogleBooksLookupService::class),$config,\OC::$server->get(ILockingProvider::class));
foreach ($ids as $id) {
    $item=$items->findItem($uid,$id);
    $query=['title'=>$item['title'],'author'=>'Example Writer','fields'=>'key,title,author_name,first_publish_year,edition_key,editions,editions.key,editions.title,editions.publish_date,editions.publisher,editions.language,editions.isbn,editions.physical_format','limit'=>'6'];
    $cache->set(hash('sha256',$uid."\0".json_encode($query,JSON_THROW_ON_ERROR)),[['editionId'=>'OL1M','title'=>'Synthetic edition','authors'=>['Example Writer'],'publisher'=>'Example Press','year'=>'2025','isbn'=>['9780306406157'],'languages'=>['en'],'url'=>'https://openlibrary.org/books/OL1M','match'=>'title_author']]);
}
$cache->set(hash('sha256',$uid."\0edition\0OL1M"),['editionId'=>'OL1M','fields'=>['publisher'=>'Example Press','description'=>'Synthetic description'],'isbn'=>['9780306406157'],'url'=>'https://openlibrary.org/books/OL1M']);
rejects(InvalidArgumentException::class,fn()=>$service->create($uid,array_fill(0,51,$ids[0]),'openlibrary',['publisher'],'missing'));
rejects(OutOfBoundsException::class,fn()=>$service->create('library-outsider',[$ids[0]],'openlibrary',['publisher'],'missing'));
$requestId=bin2hex(random_bytes(16));
$start=microtime(true); $job=$service->create($uid,$ids,'openlibrary',['publisher','description','isbn'],'missing',$requestId);
$createMs=round((microtime(true)-$start)*1000,1);
check(count($job['rows'])===50,'bounded selected snapshot');
check($service->create($uid,$ids,'openlibrary',['publisher','description','isbn'],'missing',$requestId)['id']===$job['id'],'lost create response does not duplicate run');
rejects(OutOfBoundsException::class,fn()=>$service->get('library-outsider',$job['id']));
$service->control($uid,$job['id'],'pause'); check(!$service->advance(),'pause prevents new requests');
$service->control($uid,$job['id'],'resume');
for($i=0;$i<50;$i++) check($service->advance(),'worker row '.$i);
$job=$service->get($uid,$job['id']);
check(count(array_filter($job['rows'],fn($row)=>$row['status']==='matches'))===50,'all results persisted');
check($items->findItem($uid,$ids[0])['publisher']==='','search writes no book metadata');
foreach (array_slice($ids,0,3) as $id) {
    review($service,$uid,$job['id'],$id,'choose',['editionId'=>'OL1M']);
    check($service->advance(),'edition worker');
    review($service,$uid,$job['id'],$id,'select',['fields'=>['publisher','isbn']]);
}
$items->updateItem($uid,$ids[1],['description'=>'A later manual edit']);
$result=$service->applySelected($uid,$job['id']);
check(array_column($result['outcomes'],'status')===['applied','conflict','applied'],'partial success preserves successful rows');
check($items->findItem($uid,$ids[0])['publisher']==='Example Press','applied publisher');
check(count($items->findItem($uid,$ids[0])['identifiers'])===1,'explicit ISBN added');
check($items->findItem($uid,$ids[0])['fieldSources']['publisher']==='provider:openlibrary','provider provenance');
review($service,$uid,$job['id'],$ids[0],'apply',[]);
check(count($items->findItem($uid,$ids[0])['identifiers'])===1,'apply retry idempotent');
review($service,$uid,$job['id'],$ids[0],'undo',[]);
check($items->findItem($uid,$ids[0])['publisher']==='' && !$items->findItem($uid,$ids[0])['identifiers'],'undo restores selected values');
review($service,$uid,$job['id'],$ids[0],'undo',[]);
$items->updateItem($uid,$ids[2],['description'=>'Keep later correction']);
rejects(MetadataConflictException::class,fn()=>review($service,$uid,$job['id'],$ids[2],'undo',[]));
review($service,$uid,$job['id'],$ids[3],'skip',[]);
check($service->get($uid,$job['id'])['rows'][3]['status']==='skipped','skip persists');
$service->control($uid,$job['id'],'cancel'); check(!$service->advance(),'cancel stops new work');

// Transaction rollback protects metadata when receipt persistence fails.
$job2=$service->create($uid,[$ids[4]],'openlibrary',['publisher'],'missing'); $service->advance();
review($service,$uid,$job2['id'],$ids[4],'choose',['editionId'=>'OL1M']); $service->advance();
review($service,$uid,$job2['id'],$ids[4],'select',['fields'=>['publisher']]);
// Force a receipt-write failure and require the nested metadata writer to roll back too.
if ($db->getDatabaseProvider()==='sqlite') {
    $prefix=$config->getSystemValue('dbtableprefix','oc_');
    $db->executeStatement("CREATE TRIGGER lookup_receipt_failure BEFORE UPDATE ON ".$prefix."library_lookup_jobs WHEN NEW.payload LIKE '%appliedAt%' BEGIN SELECT RAISE(ABORT, 'fixture receipt failure'); END");
    rejects(Throwable::class,fn()=>review($service,$uid,$job2['id'],$ids[4],'apply',[]));
    $db->executeStatement('DROP TRIGGER lookup_receipt_failure');
    check($items->findItem($uid,$ids[4])['publisher']==='', 'receipt failure rolls back book edit');
    check($service->get($uid,$job2['id'])['rows'][0]['status']==='ready','receipt failure preserves review');
}
// A new source revision invalidates the approval even if metadata is unchanged.
$file=$home->get('LookupFixtures/book-05.epub'); $file->touch(time()+5);
rejects(MetadataConflictException::class,fn()=>review($service,$uid,$job2['id'],$ids[4],'apply',[]));
$service->control($uid,$job2['id'],'delete');
rejects(OutOfBoundsException::class,fn()=>$service->get($uid,$job2['id']));
$service->control($uid,$job['id'],'delete');

// Retry limits, stale worker recovery and decisions made during provider I/O.
$retry=$service->create($uid,[$ids[9]],'openlibrary',['publisher'],'missing');
$cache->failure='rate_limited';
for ($attempt=1;$attempt<=4;$attempt++) {
    check($service->advance(),'retry attempt');
    $current=$service->get($uid,$retry['id']);
    check($current['rows'][0]['attempts']===$attempt,'attempt counter persists');
    if ($attempt<4) {
        check(!$service->advance(),'backoff prevents immediate retry');
        $r=$db->executeQuery('SELECT payload FROM *PREFIX*library_lookup_jobs WHERE id=?',[$retry['id']]); $payload=json_decode($r->fetchOne(),true); $r->closeCursor();
        $payload['rows'][0]['retryAt']=0;
        $db->executeStatement('UPDATE *PREFIX*library_lookup_jobs SET payload=?,wake_at=0 WHERE id=?',[json_encode($payload),$retry['id']]);
    }
}
check($current['rows'][0]['status']==='failed','finite retry exhaustion');
$cache->failure=null; $service->control($uid,$retry['id'],'delete');
$crashed=$service->create($uid,[$ids[10]],'openlibrary',['publisher'],'missing');
$r=$db->executeQuery('SELECT payload FROM *PREFIX*library_lookup_jobs WHERE id=?',[$crashed['id']]); $payload=json_decode($r->fetchOne(),true); $r->closeCursor();
$payload['rows'][0]['status']='working'; $payload['rows'][0]['attempts']=1;
$db->executeStatement('UPDATE *PREFIX*library_lookup_jobs SET payload=?,lease_until=?,lease_token=? WHERE id=?',[json_encode($payload),time()-1,str_repeat('a',32),$crashed['id']]);
check($service->advance(),'reclaimed crashed worker');
check($service->get($uid,$crashed['id'])['rows'][0]['status']==='matches','recovery stores one logical result');
$service->control($uid,$crashed['id'],'delete');
$cancel=$service->create($uid,[$ids[11],$ids[12]],'openlibrary',['publisher'],'missing');
$cache->duringRequest=fn()=>$service->control($uid,$cancel['id'],'cancel');
$service->advance(); $cancelled=$service->get($uid,$cancel['id']);
check($cancelled['status']==='cancelled' && $cancelled['rows'][0]['status']==='matches' && $cancelled['rows'][1]['status']==='cancelled','in-flight result retained, queued work cancelled');
check(!$service->advance(),'cancel prevents subsequent work');
$service->control($uid,$cancel['id'],'delete');
$skip=$service->create($uid,[$ids[13]],'openlibrary',['publisher'],'missing');
$cache->duringRequest=fn()=>review($service,$uid,$skip['id'],$ids[13],'skip',[]);
$service->advance(); check($service->get($uid,$skip['id'])['rows'][0]['status']==='skipped','in-flight result cannot overwrite skip');
$service->control($uid,$skip['id'],'delete');

// Per-row refinement, stale-tab approval, provider identity, and retained Undo evidence.
$googleKey='DisposableFixtureKey'; $config->setAppValue('library','google_books_api_key',$googleKey);
$google=new GoogleBooksLookupService(\OC::$server->get(IClientService::class),$caches,$db,$config);
$service=new MetadataBatchService($db,$items,\OC::$server->get(InferenceBatchService::class),$provider,$google,$config,\OC::$server->get(ILockingProvider::class));
$refined=$service->create($uid,[$ids[15],$ids[16]],'openlibrary',['publisher','description'],'missing');
$service->advance(); $service->advance();
review($service,$uid,$refined['id'],$ids[15],'choose',['editionId'=>'OL1M']); $service->advance();
review($service,$uid,$refined['id'],$ids[15],'select',['fields'=>['publisher']]);
$beforeRefine=$service->get($uid,$refined['id']);
$oldVersion=$beforeRefine['rows'][0]['reviewVersion'];
$otherRow=$beforeRefine['rows'][1];
$query='intitle:"Corrected title" inauthor:"Example Writer"';
$googleResult=['editionId'=>'fixtureVolume','title'=>'Corrected title','authors'=>['Example Writer'],'publisher'=>'Second Press','year'=>'2025','isbn'=>[],'languages'=>['de'],'url'=>'https://books.google.com/books?id=fixtureVolume','match'=>'title_author'];
$cache->set(hash('sha256',$uid."\0".hash('sha256',$googleKey)."\0search\0".$query),[$googleResult]);
$cache->set(hash('sha256',$uid."\0".hash('sha256',$googleKey)."\0volume\0fixtureVolume"),['editionId'=>'fixtureVolume','fields'=>['publisher'=>'Second Press'],'isbn'=>[],'url'=>'https://books.google.com/books?id=fixtureVolume']);
review($service,$uid,$refined['id'],$ids[15],'search',['provider'=>'googlebooks','title'=>'Corrected title','author'=>'Example Writer','isbn'=>'']);
$current=$service->get($uid,$refined['id']);
check($current['rows'][0]['selected']===[] && $current['rows'][0]['results']===[] && !isset($current['rows'][0]['edition']),'refinement invalidates candidates and approvals');
check($current['rows'][1]===$otherRow,'refining one row preserves other rows');
rejects(DomainException::class,fn()=>$service->review($uid,$refined['id'],$ids[15],'select',['reviewVersion'=>$oldVersion,'fields'=>['publisher']]));
$service->advance();
review($service,$uid,$refined['id'],$ids[15],'choose',['editionId'=>'fixtureVolume']); $service->advance();
review($service,$uid,$refined['id'],$ids[15],'select',['fields'=>['publisher']]);
check($service->applySelected($uid,$refined['id'],[['id'=>$ids[15],'reviewVersion'=>$oldVersion]])['outcomes'][0]['status']==='conflict','stale bulk approvals rejected');
review($service,$uid,$refined['id'],$ids[15],'apply',[]);
check($items->findItem($uid,$ids[15])['fieldSources']['publisher']==='provider:googlebooks','row provider controls attribution');
$deleted=$service->control($uid,$refined['id'],'delete');
$archived=$service->get($uid,$refined['id']);
check($deleted['receiptsRetained'] && $archived['status']==='archived' && count($archived['rows'])===1,'deleting suggestions retains only receipts');
check(!isset($archived['rows'][0]['edition'],$archived['rows'][0]['query']) && $archived['rows'][0]['results']===[],'archive removes unapproved provider data');
review($service,$uid,$refined['id'],$ids[15],'undo',[]);
check($items->findItem($uid,$ids[15])['publisher']==='','undo remains after deleting suggestions');
$service->control($uid,$refined['id'],'delete_receipts');
rejects(OutOfBoundsException::class,fn()=>$service->get($uid,$refined['id']));

// A result that finishes after a refined search must not restore old approvals.
$racing=$service->create($uid,[$ids[17]],'openlibrary',['publisher'],'missing');
$cache->duringRequest=fn()=>review($service,$uid,$racing['id'],$ids[17],'search',['provider'=>'googlebooks','title'=>'Corrected title','author'=>'Example Writer','isbn'=>'']);
$service->advance();
$raceRow=$service->get($uid,$racing['id'])['rows'][0];
check($raceRow['provider']==='googlebooks' && $raceRow['status']==='queued' && $raceRow['results']===[],'late old-provider result discarded');
$service->advance(); check($service->get($uid,$racing['id'])['rows'][0]['results'][0]['editionId']==='fixtureVolume','new provider result persists');
$service->control($uid,$racing['id'],'delete');

// Selection shortcut requires reviewed, unique ISBN evidence and never writes metadata.
$items->updateItem($uid,$ids[18],['identifiers'=>[['scheme'=>'isbn','displayValue'=>'9780306406157']]]);
$isbnQuery=['isbn'=>'9780306406157','fields'=>'key,title,author_name,first_publish_year,edition_key,editions,editions.key,editions.title,editions.publish_date,editions.publisher,editions.language,editions.isbn,editions.physical_format','limit'=>'6'];
$match=['editionId'=>'OL2M','title'=>'Lookup fixture 19','authors'=>['Example Writer'],'publisher'=>'Example Press','year'=>'2025','isbn'=>['9780306406157'],'languages'=>['en'],'url'=>'https://openlibrary.org/books/OL2M','match'=>'isbn'];
$cache->set(hash('sha256',$uid."\0".json_encode($isbnQuery,JSON_THROW_ON_ERROR)),[$match]);
$cache->set(hash('sha256',$uid."\0edition\0OL2M"),['editionId'=>'OL2M','fields'=>['title'=>'Lookup fixture 19','publisher'=>'Example Press'],'isbn'=>['9780306406157'],'url'=>'https://openlibrary.org/books/OL2M']);
$strong=$service->create($uid,[$ids[18]],'openlibrary',['publisher'],'missing'); $service->advance();
check($service->control($uid,$strong['id'],'select_missing')['rows'][0]['selected']===[],'unreviewed editions stay unselected');
review($service,$uid,$strong['id'],$ids[18],'choose',['editionId'=>'OL2M']); $service->advance();
check($service->control($uid,$strong['id'],'select_missing')['rows'][0]['selected']===['publisher'],'unique matching edition allows explicit missing-field selection');
check($items->findItem($uid,$ids[18])['publisher']==='','selection shortcut writes no book values');
review($service,$uid,$strong['id'],$ids[18],'apply',[]);
$db->executeStatement('UPDATE *PREFIX*library_lookup_jobs SET expires_at=? WHERE id=?',[time()-1,$strong['id']]);
$expired=$service->get($uid,$strong['id']);
check($expired['status']==='archived','suggestion expiry preserves receipts');
review($service,$uid,$strong['id'],$ids[18],'undo',[]);
$payload=$db->executeQuery('SELECT payload FROM *PREFIX*library_lookup_jobs WHERE id=?',[$strong['id']])->fetchOne();
$payload=json_decode($payload,true); $payload['rows'][0]['receipt']['expiresAt']=time()-1;
$db->executeStatement('UPDATE *PREFIX*library_lookup_jobs SET payload=?,expires_at=? WHERE id=?',[json_encode($payload),time()-1,$strong['id']]);
rejects(OutOfBoundsException::class,fn()=>$service->get($uid,$strong['id']));

// RFC Retry-After seconds/date parsing and instance-wide cooldown are bounded.
check(\OCA\Library\Exception\MetadataProviderRetryException::fromHeader('120',1000)->retryAfter===120,'retry seconds');
check(\OCA\Library\Exception\MetadataProviderRetryException::fromHeader(gmdate('D, d M Y H:i:s \G\M\T',1120),1000)->retryAfter===120,'retry HTTP date');
check(\OCA\Library\Exception\MetadataProviderRetryException::fromHeader('invalid',1000)->retryAfter===60,'malformed retry fallback');
check(\OCA\Library\Exception\MetadataProviderRetryException::fromHeader('999999999',1000)->retryAfter===604800,'retry bounded');
$db->executeStatement('DELETE FROM *PREFIX*library_lookup_quota WHERE provider=?',['googlebooks']);
$db->executeStatement('INSERT INTO *PREFIX*library_lookup_quota (provider,next_at_ms) VALUES (?,?)',['googlebooks',(int)(microtime(true)*1000)+120000]);
$reserve=new ReflectionMethod($google,'reserveRequestSlot');
$started=microtime(true);
rejects(\OCA\Library\Exception\MetadataProviderRetryException::class,fn()=>$reserve->invoke($google));
check(microtime(true)-$started<0.5,'provider cooldown acknowledges without blocking wait');
$db->executeStatement('DELETE FROM *PREFIX*library_lookup_quota WHERE provider=?',['googlebooks']);

// Shared language normalization is exposed in both adapters and uses the normal metadata writer.
$googleNormalize=new ReflectionMethod($google,'volumeResult');
foreach (['EN-us'=>'en-US','GER'=>'de','deu'=>'de'] as $raw=>$expected) {
    $volume=$googleNormalize->invoke($google,['volumeInfo'=>['title'=>'Language example','language'=>$raw]],'fixtureLanguage');
    check(($volume['fields']['language'] ?? '')===$expected,'Google language alias/region normalization');
}
$unknown=$googleNormalize->invoke($google,['volumeInfo'=>['title'=>'Language example','language'=>'3ng']], 'fixtureLanguage');
check(!isset($unknown['fields']['language']) && $unknown['languages']===['3ng'],'unknown language retained as evidence only');
$openNormalize=new ReflectionMethod($provider,'editionResult');
$languageEdition=$openNormalize->invoke($provider,['title'=>'Language example','languages'=>[['key'=>'/languages/ger'],['key'=>'/languages/deu'],['key'=>'/languages/eng']]],'OL3M');
check($languageEdition['fields']['language']==='de; en','Open Library aliases deduplicate with multiple languages');
$cache->set(hash('sha256',$uid."\0edition\0OL1M"),['editionId'=>'OL1M','fields'=>['language'=>'de; en'],'isbn'=>[],'languages'=>['ger','eng'],'url'=>'https://openlibrary.org/books/OL1M']);
$items->updateItem($uid,$ids[19],['language'=>'']);
$languageJob=$service->create($uid,[$ids[19]],'openlibrary',['language'],'missing'); $service->advance();
review($service,$uid,$languageJob['id'],$ids[19],'choose',['editionId'=>'OL1M']); $service->advance();
review($service,$uid,$languageJob['id'],$ids[19],'select',['fields'=>['language']]);
review($service,$uid,$languageJob['id'],$ids[19],'apply',[]);
check($items->findItem($uid,$ids[19])['language']==='de; en','explicit multiple-language application');
review($service,$uid,$languageJob['id'],$ids[19],'undo',[]);
check($items->findItem($uid,$ids[19])['language']==='','language Undo restores prior value');
$service->control($uid,$languageJob['id'],'delete');
$items->updateItem($uid,$ids[20],['language'=>'fr; en']);
$languageJob=$service->create($uid,[$ids[20]],'openlibrary',['language'],'missing'); $service->advance();
review($service,$uid,$languageJob['id'],$ids[20],'choose',['editionId'=>'OL1M']); $service->advance();
check($service->get($uid,$languageJob['id'])['rows'][0]['proposals']===[],'fill-missing protects existing language set');
$service->control($uid,$languageJob['id'],'delete');
$cache->set(hash('sha256',$uid."\0edition\0OL1M"),['editionId'=>'OL1M','fields'=>['publisher'=>'Example Press','description'=>'Synthetic description'],'isbn'=>['9780306406157'],'url'=>'https://openlibrary.org/books/OL1M']);

// Explicit alternative-edition browsing invalidates prior selections and remains tied to the original work.
$editionBook=$ids[45];$editionItem=$items->findItem($uid,$editionBook);
$query=['title'=>$editionItem['title'],'author'=>'Example Writer','fields'=>'key,title,author_name,first_publish_year,edition_key,editions,editions.key,editions.title,editions.publish_date,editions.publisher,editions.language,editions.isbn,editions.physical_format','limit'=>'6'];
$candidate=['editionId'=>'OL1M','workId'=>'OL1W','title'=>'Original fixture edition','authors'=>['Example Writer'],'isbn'=>[],'languages'=>['en'],'url'=>'https://openlibrary.org/books/OL1M','match'=>'title_author'];
$cache->set(hash('sha256',$uid."\0".json_encode($query,JSON_THROW_ON_ERROR)),[$candidate]);
$alternate=['editionId'=>'OL4M','workId'=>'OL1W','title'=>'Alternate fixture edition','authors'=>[],'isbn'=>[],'languages'=>['de'],'url'=>'https://openlibrary.org/books/OL4M','match'=>'work_edition'];
$cache->set(hash('sha256',$uid."\0editions\0OL1W\0" . '0'),['workId'=>'OL1W','offset'=>0,'results'=>[$alternate],'previousOffset'=>null,'nextOffset'=>8,'limited'=>false]);
$cache->set(hash('sha256',$uid."\0edition\0OL4M"),['editionId'=>'OL4M','fields'=>['publisher'=>'Alternate Fixture Press'],'isbn'=>[],'url'=>'https://openlibrary.org/books/OL4M']);
$editionJob=$service->create($uid,[$editionBook],'openlibrary',['publisher'],'missing');$service->advance();
rejects(InvalidArgumentException::class,fn()=>review($service,$uid,$editionJob['id'],$editionBook,'editions',['workId'=>'OL999W','offset'=>0]));
rejects(InvalidArgumentException::class,fn()=>review($service,$uid,$editionJob['id'],$editionBook,'editions',['workId'=>'OL1W','offset'=>1]));
rejects(InvalidArgumentException::class,fn()=>review($service,$uid,$editionJob['id'],$editionBook,'choose',['editionId'=>'OL4M']));
review($service,$uid,$editionJob['id'],$editionBook,'choose',['editionId'=>'OL1M']);$service->advance();review($service,$uid,$editionJob['id'],$editionBook,'select',['fields'=>['publisher']]);
$oldReview=$service->get($uid,$editionJob['id'])['rows'][0]['reviewVersion'];
review($service,$uid,$editionJob['id'],$editionBook,'editions',['workId'=>'OL1W','offset'=>0]);$service->advance();
$row=$service->get($uid,$editionJob['id'])['rows'][0];check($row['selected']===[] && !isset($row['edition']),'edition browsing removes previous approvals');
check($row['editionPage']['results'][0]['editionId']==='OL4M','alternative edition page persisted');
rejects(DomainException::class,fn()=>$service->review($uid,$editionJob['id'],$editionBook,'select',['fields'=>['publisher'],'reviewVersion'=>$oldReview]));
review($service,$uid,$editionJob['id'],$editionBook,'choose',['editionId'=>'OL4M']);$service->advance();review($service,$uid,$editionJob['id'],$editionBook,'select',['fields'=>['publisher']]);review($service,$uid,$editionJob['id'],$editionBook,'apply',[]);
check($items->findItem($uid,$editionBook)['publisher']==='Alternate Fixture Press','reviewed alternative edition can be applied');review($service,$uid,$editionJob['id'],$editionBook,'undo',[]);check($items->findItem($uid,$editionBook)['publisher']==='','alternative edition Undo restores original');$service->control($uid,$editionJob['id'],'delete');

// Leave one deterministic persisted run for installed-browser checks.
$job=$service->create($uid,[$ids[5],$ids[6]],'openlibrary',['publisher','description'],'missing');
$service->advance(); $service->advance();
foreach ([$ids[5],$ids[6]] as $id) { review($service,$uid,$job['id'],$id,'choose',['editionId'=>'OL1M']); $service->advance(); }
$lists=\OC::$server->get(PersonalListService::class);
$existing=array_values(array_filter($lists->lists($uid),static fn($list)=>$list['name']==='Lookup selection fixture'));
$list=$existing[0] ?? $lists->create($uid,'Lookup selection fixture','Synthetic books for batch selection');
if (!$existing) $lists->add($uid,$list['id'],$list['revision'],[$ids[5],$ids[6]]);
$bulkIds=array_slice($ids,30,11);
$bulkJob=$service->create($uid,$bulkIds,'openlibrary',['publisher'],'missing');
foreach ($bulkIds as $_) $service->advance();
foreach ($bulkIds as $id) { review($service,$uid,$bulkJob['id'],$id,'choose',['editionId'=>'OL1M']); $service->advance(); review($service,$uid,$bulkJob['id'],$id,'select',['fields'=>['publisher']]); }
file_put_contents('/tmp/library-bulk-fixture.json',json_encode(['jobId'=>$job['id'],'bulkJobId'=>$bulkJob['id'],'listId'=>$list['id'],'ids'=>[$ids[5],$ids[6]]],JSON_THROW_ON_ERROR));
echo json_encode(['passed'=>true,'books'=>50,'createMs'=>$createMs,'jobId'=>$job['id']],JSON_THROW_ON_ERROR)."\n";
