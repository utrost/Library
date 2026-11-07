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
foreach ($ids as $i=>$id) $items->updateItem($uid,$id,['title'=>sprintf('Lookup fixture %02d',$i+1),'publisher'=>'','description'=>'','identifiers'=>[]]);

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
    $query=['title'=>$item['title'],'author'=>'Example Writer','fields'=>'key,title,author_name,first_publish_year,edition_key,editions,editions.key,editions.title,editions.publish_date,editions.publisher,editions.language,editions.isbn','limit'=>'6'];
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
    $service->review($uid,$job['id'],$id,'choose',['editionId'=>'OL1M']);
    check($service->advance(),'edition worker');
    $service->review($uid,$job['id'],$id,'select',['fields'=>['publisher','isbn']]);
}
$items->updateItem($uid,$ids[1],['description'=>'A later manual edit']);
$result=$service->applySelected($uid,$job['id']);
check(array_column($result['outcomes'],'status')===['applied','conflict','applied'],'partial success preserves successful rows');
check($items->findItem($uid,$ids[0])['publisher']==='Example Press','applied publisher');
check(count($items->findItem($uid,$ids[0])['identifiers'])===1,'explicit ISBN added');
check($items->findItem($uid,$ids[0])['fieldSources']['publisher']==='provider:openlibrary','provider provenance');
$service->review($uid,$job['id'],$ids[0],'apply',[]);
check(count($items->findItem($uid,$ids[0])['identifiers'])===1,'apply retry idempotent');
$service->review($uid,$job['id'],$ids[0],'undo',[]);
check($items->findItem($uid,$ids[0])['publisher']==='' && !$items->findItem($uid,$ids[0])['identifiers'],'undo restores selected values');
$service->review($uid,$job['id'],$ids[0],'undo',[]);
$items->updateItem($uid,$ids[2],['description'=>'Keep later correction']);
rejects(MetadataConflictException::class,fn()=>$service->review($uid,$job['id'],$ids[2],'undo',[]));
$service->review($uid,$job['id'],$ids[3],'skip',[]);
check($service->get($uid,$job['id'])['rows'][3]['status']==='skipped','skip persists');
$service->control($uid,$job['id'],'cancel'); check(!$service->advance(),'cancel stops new work');

// Transaction rollback protects metadata when receipt persistence fails.
$job2=$service->create($uid,[$ids[4]],'openlibrary',['publisher'],'missing'); $service->advance();
$service->review($uid,$job2['id'],$ids[4],'choose',['editionId'=>'OL1M']); $service->advance();
$service->review($uid,$job2['id'],$ids[4],'select',['fields'=>['publisher']]);
// Force a receipt-write failure and require the nested metadata writer to roll back too.
if ($db->getDatabaseProvider()==='sqlite') {
    $prefix=$config->getSystemValue('dbtableprefix','oc_');
    $db->executeStatement("CREATE TRIGGER lookup_receipt_failure BEFORE UPDATE ON ".$prefix."library_lookup_jobs WHEN NEW.payload LIKE '%appliedAt%' BEGIN SELECT RAISE(ABORT, 'fixture receipt failure'); END");
    rejects(Throwable::class,fn()=>$service->review($uid,$job2['id'],$ids[4],'apply',[]));
    $db->executeStatement('DROP TRIGGER lookup_receipt_failure');
    check($items->findItem($uid,$ids[4])['publisher']==='', 'receipt failure rolls back book edit');
    check($service->get($uid,$job2['id'])['rows'][0]['status']==='ready','receipt failure preserves review');
}
// A new source revision invalidates the approval even if metadata is unchanged.
$file=$home->get('LookupFixtures/book-05.epub'); $file->touch(time()+5);
rejects(MetadataConflictException::class,fn()=>$service->review($uid,$job2['id'],$ids[4],'apply',[]));
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
$cache->duringRequest=fn()=>$service->review($uid,$skip['id'],$ids[13],'skip',[]);
$service->advance(); check($service->get($uid,$skip['id'])['rows'][0]['status']==='skipped','in-flight result cannot overwrite skip');
$service->control($uid,$skip['id'],'delete');

// Leave one deterministic persisted run for installed-browser checks.
$job=$service->create($uid,[$ids[5],$ids[6]],'openlibrary',['publisher','description'],'missing');
$service->advance(); $service->advance();
foreach ([$ids[5],$ids[6]] as $id) { $service->review($uid,$job['id'],$id,'choose',['editionId'=>'OL1M']); $service->advance(); }
$lists=\OC::$server->get(PersonalListService::class);
$existing=array_values(array_filter($lists->lists($uid),static fn($list)=>$list['name']==='Lookup selection fixture'));
$list=$existing[0] ?? $lists->create($uid,'Lookup selection fixture','Synthetic books for batch selection');
if (!$existing) $lists->add($uid,$list['id'],$list['revision'],[$ids[5],$ids[6]]);
file_put_contents('/tmp/library-bulk-fixture.json',json_encode(['jobId'=>$job['id'],'listId'=>$list['id'],'ids'=>[$ids[5],$ids[6]]],JSON_THROW_ON_ERROR));
echo json_encode(['passed'=>true,'books'=>50,'createMs'=>$createMs,'jobId'=>$job['id']],JSON_THROW_ON_ERROR)."\n";
