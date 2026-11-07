<?php
declare(strict_types=1);
// Run after metadata_batch_integration in a labelled disposable instance only.
define('OC_CONSOLE',true);
require '/var/www/html/lib/base.php';
if(getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1') throw new RuntimeException('disposable opt-in required');
set_exception_handler(static function(Throwable $e): void { fwrite(STDERR,get_class($e).': '.$e->getMessage().' line '.$e->getLine()."\n"); exit(1); });
use OCA\Library\Service\{MetadataBatchService,ItemService};
use OCP\{IDBConnection,IUserSession,IUserManager};
$db=\OC::$server->get(IDBConnection::class); $uid='library-smoke';
\OC::$server->get(IUserSession::class)->setUser(\OC::$server->get(IUserManager::class)->get($uid));
$read=static function(string $sql,array $params=[]) use($db): array { $r=$db->executeQuery($sql,$params); $rows=$r->fetchAll();$r->closeCursor();return $rows; };
$books=$read('SELECT i.id,f.root_id FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=? AND f.file_id<? ORDER BY i.id',[$uid,900000000]);
if(count($books)!==50) throw new RuntimeException('Expected 50 real fixture books');
$root=(int)$books[0]['root_id']; $now=time();
$count=(int)$read('SELECT COUNT(*) AS n FROM *PREFIX*library_items WHERE user_id=?',[$uid])[0]['n'];
if ($count===50) {
    $db->beginTransaction();
    try {
        for($start=50;$start<100000;$start+=500) {
            $values=[];$params=[];
            for($n=$start;$n<min(100000,$start+500);$n++) { $values[]='(?,?,?,?,?,?,?,?,?,?)'; array_push($params,$uid,$root,900000000+$n,'/LookupFixtures/synthetic-'.$n.'.epub','application/epub+zip','epub','indexed',$now,$now,$now); }
            $db->executeStatement('INSERT INTO *PREFIX*library_files (user_id,root_id,file_id,cached_path,mime_type,extension,scan_status,last_scanned_at,created_at,updated_at) VALUES '.implode(',',$values),$params);
        }
        $db->executeStatement('INSERT INTO *PREFIX*library_items (user_id,library_file_id,publication_type,title,creators,metadata_source,created_at,updated_at) SELECT user_id,id,?,?,?,?,?,? FROM *PREFIX*library_files WHERE user_id=? AND file_id>=?',['book','Synthetic background book','Example Writer','fixture',$now,$now,$uid,900000050]);
        $db->commit();
    } catch(Throwable $e) { $db->rollBack(); throw $e; }
}
$count=(int)$read('SELECT COUNT(*) AS n FROM *PREFIX*library_items WHERE user_id=?',[$uid])[0]['n'];
if($count!==100000) throw new RuntimeException('Expected 100k catalogue');
$service=\OC::$server->get(MetadataBatchService::class);$items=\OC::$server->get(ItemService::class);$ids=array_map('intval',array_column($books,'id'));
foreach($ids as $id) $items->updateItem($uid,$id,['publisher'=>'','description'=>'']);
for($run=0;$run<6;$run++) {
    $measure=static function(string $name,callable $work) use($run): mixed { $start=hrtime(true);$result=$work();echo json_encode(['case'=>$name,'run'=>$run,'ms'=>round((hrtime(true)-$start)/1e6,2),'peakBytes'=>memory_get_peak_usage(true)],JSON_THROW_ON_ERROR),"\n";return $result; };
    $job=$measure('create_50',fn()=>$service->create($uid,$ids,'openlibrary',['publisher','description'],'missing'));
    $payload=json_decode($read('SELECT payload FROM *PREFIX*library_lookup_jobs WHERE id=?',[$job['id']])[0]['payload'],true);
    foreach($payload['rows'] as &$row) {
        $row['status']='ready';$row['editionId']='OL1M';$row['selected']=['publisher','description'];
        $row['edition']=['editionId'=>'OL1M','fields'=>['publisher'=>str_repeat('P',255),'description'=>str_repeat('D',5000)],'isbn'=>[],'url'=>'https://openlibrary.org/books/OL1M'];
        $row['results']=array_fill(0,8,['editionId'=>'OL1M','title'=>str_repeat('T',500),'authors'=>array_fill(0,5,str_repeat('A',160)),'publisher'=>str_repeat('P',255),'year'=>'2025','isbn'=>[],'languages'=>['en'],'url'=>'https://openlibrary.org/books/OL1M','match'=>'title_author']);
    }
    unset($row);
    $db->executeStatement('UPDATE *PREFIX*library_lookup_jobs SET status=?,payload=? WHERE id=?',['review',json_encode($payload,JSON_THROW_ON_ERROR),$job['id']]);
    $view=$measure('status_50',fn()=>$service->get($uid,$job['id']));
    echo json_encode(['case'=>'response_bytes','run'=>$run,'bytes'=>strlen(json_encode($view,JSON_THROW_ON_ERROR))]),"\n";
    $measure('history',fn()=>$service->history($uid));
    $row=$view['rows'][0];
    $measure('select_fields',fn()=>$service->review($uid,$job['id'],$row['id'],'select',['fields'=>['publisher','description'],'reviewVersion'=>$row['reviewVersion']]));
    $selected=$service->get($uid,$job['id'])['rows']; $outcomes=[];
    foreach(array_chunk($selected,10) as $chunk) {
        $result=$measure('apply_10',fn()=>$service->applySelected($uid,$job['id'],array_map(static fn($row)=>['id'=>$row['id'],'reviewVersion'=>$row['reviewVersion']],$chunk)));
        $outcomes=array_merge($outcomes,$result['outcomes']);
    }
    $result['outcomes']=$outcomes;
    if(count(array_filter($result['outcomes'],fn($r)=>$r['status']==='applied'))!==50) throw new RuntimeException('Batch did not apply 50 rows');
    $measure('undo_50',function() use($result,$service,$uid,$job): void { foreach($result['job']['rows'] as $row) $service->review($uid,$job['id'],$row['id'],'undo',['reviewVersion'=>$row['reviewVersion']]); });
    $service->control($uid,$job['id'],'delete');$service->control($uid,$job['id'],'delete_receipts');
}
echo json_encode(['catalogue'=>100000,'selected'=>50,'externalRequests'=>0,'passed'=>true]),"\n";
