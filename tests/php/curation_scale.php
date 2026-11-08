<?php
declare(strict_types=1);
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
if (getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1') throw new RuntimeException('Disposable fixture opt-in required');
set_exception_handler(static function(Throwable $e):void{fwrite(STDERR,get_class($e).': '.$e->getMessage()."\n".$e->getTraceAsString()."\n");exit(1);});
$db=\OC::$server->get(\OCP\IDBConnection::class);$users=\OC::$server->get(\OCP\IUserManager::class);$uid='library-scale';
if (!$users->userExists($uid))$users->createUser($uid,'Disposable-scale-2026');
\OC::$server->get(\OCP\IUserSession::class)->setUser($users->get($uid));
$home=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid);
$folder=$home->nodeExists('ScaleFixture') ? $home->get('ScaleFixture') : $home->newFolder('ScaleFixture');
$root=\OC::$server->get(\OCA\Library\Service\RootService::class)->saveRoot($uid,'/ScaleFixture','Synthetic scale fixture',true);
$count=(int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_items WHERE user_id=?',[$uid])->fetchOne();
if (!$count) {
 $now=time();$start=hrtime(true);
 for($offset=0;$offset<100000;$offset+=500){$values=[];$params=[];
  for($n=$offset;$n<$offset+500;$n++){ $values[]='(?,?,?,?,?,?,?,?,?,?)';array_push($params,$uid,$root['id'],900000000+$n,'/ScaleFixture/book-'.$n.'.epub','application/epub+zip','epub','indexed',$now,$now,$now); }
  $db->executeStatement('INSERT INTO *PREFIX*library_files (user_id,root_id,file_id,cached_path,mime_type,extension,scan_status,last_scanned_at,created_at,updated_at) VALUES '.implode(',',$values),$params);
 }
 $db->executeStatement('INSERT INTO *PREFIX*library_items (user_id,library_file_id,publication_type,title,creators,metadata_source,created_at,updated_at) SELECT user_id,id,?,?,?,?,?,? FROM *PREFIX*library_files WHERE user_id=?',['book','Synthetic scale publication','Synthetic Author','fixture',$now,$now,$uid]);
 echo json_encode(['seed_ms'=>(hrtime(true)-$start)/1e6]),"\n";
}
$items=\OC::$server->get(\OCA\Library\Service\ItemService::class);$inbox=\OC::$server->get(\OCA\Library\Service\CurationInboxService::class);$dashboard=\OC::$server->get(\OCA\Library\Service\HomeDashboardService::class);
foreach(['inbox'=>fn()=>$inbox->page($uid),'home'=>fn()=>$dashboard->data($uid),'sorted_page'=>fn()=>$items->queryCatalogue($uid,['sort'=>'title'],['page'=>1,'limit'=>50,'deferTotal'=>true],false)] as $case=>$work){
 for($run=0;$run<6;$run++){$start=hrtime(true);$data=$work();echo json_encode(['case'=>$case,'run'=>$run,'ms'=>round((hrtime(true)-$start)/1e6,2),'json_bytes'=>strlen(json_encode($data)),'peak_bytes'=>memory_get_peak_usage(true)]),"\n";}
}
$count=(int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_items WHERE user_id=?',[$uid])->fetchOne();if($count!==100000)throw new RuntimeException('Scale count differs');echo "synthetic_books=100000\n";
