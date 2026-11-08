<?php
declare(strict_types=1);
// Deterministic edition browsing on the disposable 50-book lookup fixture only.
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
if(getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1')throw new RuntimeException('Disposable fixture opt-in required');
set_exception_handler(static function(Throwable $e):void{fwrite(STDERR,get_class($e).': '.$e->getMessage()."\n".$e->getTraceAsString()."\n");exit(1);});
use OCP\{ICache,ICacheFactory,IMemcache};
use OCA\Library\Service\{MetadataBatchService,ItemService,InferenceBatchService,OpenLibraryLookupService,GoogleBooksLookupService};
$uid='library-smoke';$session=\OC::$server->get(\OCP\IUserSession::class);$session->setUser(\OC::$server->get(\OCP\IUserManager::class)->get($uid));
$db=\OC::$server->get(\OCP\IDBConnection::class);$config=\OC::$server->get(\OCP\IConfig::class);$items=\OC::$server->get(ItemService::class);
$cache=new class extends \OC\Memcache\ArrayCache {public function get($key){$value=parent::get($key);if($value===null)throw new RuntimeException('unseeded_provider_request');return $value;}};
$caches=new class($cache) implements ICacheFactory {
 public function __construct(private IMemcache $cache){}public function isAvailable():bool{return true;}public function isLocalCacheAvailable():bool{return true;}
 public function createLocking(string $prefix=''):IMemcache{return $this->cache;}public function createDistributed(string $prefix=''):ICache{return $this->cache;}public function createLocal(string $prefix=''):ICache{return $this->cache;}public function createInMemory(int $capacity=512):ICache{return $this->cache;}
};
$http=new class implements \OCP\Http\Client\IClientService {public function newClient():\OCP\Http\Client\IClient{throw new RuntimeException('external_request_forbidden');}};
$provider=new OpenLibraryLookupService($http,$caches,$db,$config);
$service=new MetadataBatchService($db,$items,\OC::$server->get(InferenceBatchService::class),$provider,\OC::$server->get(GoogleBooksLookupService::class),$config,\OC::$server->get(\OCP\Lock\ILockingProvider::class));
$candidate=['editionId'=>'OL1M','workId'=>'OL1W','title'=>'Original fixture edition','authors'=>['Example Writer'],'isbn'=>[],'languages'=>['en'],'format'=>'Paperback','url'=>'https://openlibrary.org/books/OL1M','match'=>'title_author'];
$alternate=['editionId'=>'OL4M','workId'=>'OL1W','title'=>'Alternate fixture edition','authors'=>['Example Writer'],'isbn'=>[],'languages'=>['fr'],'format'=>'Ebook','year'=>'2024','url'=>'https://openlibrary.org/books/OL4M','match'=>'work_edition'];
$page=['workId'=>'OL1W','offset'=>0,'results'=>[$alternate],'previousOffset'=>null,'nextOffset'=>8,'limited'=>false];
$lastPage=['workId'=>'OL1W','offset'=>8,'results'=>[],'previousOffset'=>0,'nextOffset'=>null,'limited'=>false];
$edition=['editionId'=>'OL4M','fields'=>['publisher'=>'Alternate Fixture Press','language'=>'fr'],'isbn'=>[],'url'=>'https://openlibrary.org/books/OL4M'];
foreach([0=>$page,8=>$lastPage] as $offset=>$value)$cache->set(hash('sha256',$uid."\0editions\0OL1W\0".$offset),$value);
$cache->set(hash('sha256',$uid."\0edition\0OL4M"),$edition);$cache->set(hash('sha256',$uid."\0edition\0OL1M"),['editionId'=>'OL1M','fields'=>['publisher'=>'Original Fixture Press'],'isbn'=>[],'url'=>'https://openlibrary.org/books/OL1M']);
$mode=$argv[1] ?? 'seed';
if($mode==='seed'){
 $r=$db->executeQuery('SELECT id FROM *PREFIX*library_items WHERE user_id=? ORDER BY id LIMIT 2 OFFSET 24',[$uid]);$ids=array_map('intval',array_column($r->fetchAll(),'id'));$r->closeCursor();if(count($ids)!==2)throw new RuntimeException('Seed the disposable 50-book lookup fixture first');
 $db->executeStatement('DELETE FROM *PREFIX*library_lookup_jobs WHERE user_id=?',[$uid]);
 foreach($ids as $id){$items->updateItem($uid,$id,['publisher'=>'','language'=>'']);$item=$items->findItem($uid,$id);$query=['title'=>$item['title'],'author'=>'Example Writer','fields'=>'key,title,author_name,first_publish_year,edition_key,editions,editions.key,editions.title,editions.publish_date,editions.publisher,editions.language,editions.isbn,editions.physical_format','limit'=>'6'];$cache->set(hash('sha256',$uid."\0".json_encode($query,JSON_THROW_ON_ERROR)),[$candidate]);}
 $editor=$service->prepareEditor($uid,$ids[0],'openlibrary','OL4M');
 $batch=$service->create($uid,[$ids[1]],'openlibrary',['publisher','language'],'review');$service->advance();$batch=$service->get($uid,$batch['id']);
 $service->review($uid,$batch['id'],$ids[1],'choose',['editionId'=>'OL1M','reviewVersion'=>$batch['rows'][0]['reviewVersion']]);$service->advance();$batch=$service->get($uid,$batch['id']);
 $batch=$service->review($uid,$batch['id'],$ids[1],'select',['fields'=>['publisher'],'reviewVersion'=>$batch['rows'][0]['reviewVersion']]);
 file_put_contents('/tmp/library-editions-browser.json',json_encode(['itemId'=>$ids[0],'batchItemId'=>$ids[1],'jobId'=>$batch['id'],'candidate'=>$candidate,'page'=>$page,'lastPage'=>$lastPage,'edition'=>$editor],JSON_THROW_ON_ERROR));
 echo "edition_browser_fixture_ready=true external_requests=0\n";
}elseif($mode==='advance'){
 $fixture=json_decode(file_get_contents('/tmp/library-editions-browser.json'),true,32,JSON_THROW_ON_ERROR);
 for($n=0;$n<10 && $service->get($uid,$fixture['jobId'])['status']==='running';$n++)$service->advance();
 $job=$service->get($uid,$fixture['jobId']);if(in_array($job['rows'][0]['status'],['failed','retry','queued','working'],true))throw new RuntimeException('Edition worker did not finish the requested fixture phase');
 echo "edition_worker_complete=true external_requests=0\n";
}else throw new InvalidArgumentException('invalid_mode');
