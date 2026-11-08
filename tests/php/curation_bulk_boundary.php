<?php
declare(strict_types=1);
// A maximum-size organisation run against generated files, never existing catalogue data.
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
if(getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1')throw new RuntimeException('Disposable fixture opt-in required');
set_exception_handler(static function(Throwable $e):void{fwrite(STDERR,get_class($e).': '.$e->getMessage()."\n".$e->getTraceAsString()."\n");exit(1);});
function service(string $name):object{return \OC::$server->get('OCA\\Library\\Service\\'.$name);}
function check(bool $ok,string $message):void{if(!$ok)throw new RuntimeException($message);echo "PASS $message\n";}
$db=\OC::$server->get(\OCP\IDBConnection::class);$users=\OC::$server->get(\OCP\IUserManager::class);$session=\OC::$server->get(\OCP\IUserSession::class);$state='/tmp/library-curation-bulk.json';$mode=$argv[1] ?? 'seed';
if($mode==='seed'){
 $uid='library-bulk-boundary-'.bin2hex(random_bytes(4));$user=$users->createUser($uid,'Disposable-boundary-2026');$session->setUser($user);file_put_contents($state,json_encode(['uid'=>$uid]));
 $folder=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid)->newFolder('Boundary books');$root=service('RootService')->saveRoot($uid,'/Boundary books','Boundary fixture',true);$pdf=file_get_contents('/tmp/library-fixture.pdf');$start=microtime(true);
 for($n=1;$n<=5000;$n++){$folder->newFile(sprintf('Book %04d.pdf',$n),$pdf);if($n%500===0)echo "seeded_files=$n\n";}
 service('LibraryScanner')->scan($uid,$root['id']);
 foreach(['AuthorStorageService','SeriesStorageService'] as $storage){for($n=0;$n<100 && service($storage)->status($uid)['pending']>0;$n++)service($storage)->advance($uid,500,30);$status=service($storage)->status($uid);check($status['pending']===0 && $status['failed']===0,'all generated relationships finish indexing');}
 $r=$db->executeQuery('SELECT id FROM *PREFIX*library_items WHERE user_id=? ORDER BY id',[$uid]);$ids=array_map('intval',array_column($r->fetchAll(),'id'));$r->closeCursor();check(count($ids)===5000,'five thousand generated books are indexed');
 $jobService=service('CurationJobService');$caught=false;try{$jobService->create($uid,array_merge($ids,[$ids[0]]),['field'=>'publisher','value'=>'Boundary publisher'],bin2hex(random_bytes(16)));}catch(InvalidArgumentException){$caught=true;}check($caught,'selection above five thousand is rejected');
 $request=bin2hex(random_bytes(16));$began=microtime(true);$job=$jobService->create($uid,$ids,['field'=>'publisher','value'=>'Boundary publisher'],$request);$createMs=(microtime(true)-$began)*1000;
 check($job['count']===5000 && $job['status']==='preparing','maximum selection is queued without synchronously editing books');check($jobService->create($uid,$ids,['field'=>'publisher','value'=>'Boundary publisher'],$request)['id']===$job['id'],'large create retry is idempotent');
 file_put_contents($state,json_encode(['uid'=>$uid,'ids'=>$ids,'job'=>$job['id'],'rootId'=>$root['id']],JSON_THROW_ON_ERROR));echo json_encode(['seedMs'=>round((microtime(true)-$start)*1000,1),'createMs'=>round($createMs,1),'jsonBytes'=>strlen(json_encode($job))]),"\n";exit;
}
$fixture=json_decode(file_get_contents($state),true,32,JSON_THROW_ON_ERROR);$uid=$fixture['uid'];if(!str_starts_with($uid,'library-bulk-boundary-'))throw new RuntimeException('Unexpected fixture owner');$session->setUser($users->get($uid));
if($mode==='cleanup'){
 // Deletion is an administrative operation. A stale self-session makes core
 // Files listeners request the deleted user's home during appdata cleanup.
 $session->setUser(null);$user=$users->get($uid);
 if($user)$user->delete();else{service('LibraryCleanupService')->deleteAccount($uid);service('LookupCoverService')->deleteUser($uid);service('CoverThumbnailService')->deleteUser($uid);}
 unlink($state);echo "boundary_fixture_removed=true\n";exit;
}
$jobs=service('CurationJobService');$jobId=$fixture['job'];$start=microtime(true);$steps=0;$samples=[];
function sample():array{global $jobs,$uid,$jobId;$start=microtime(true);$data=$jobs->show($uid,$jobId,100);return ['ms'=>round((microtime(true)-$start)*1000,2),'bytes'=>strlen(json_encode($data))];}
if($mode==='prepare'){
 for(;$steps<5002;$steps++){if($steps%100===0 && $jobs->show($uid,$jobId)['status']!=='preparing')break;$jobs->advance();}
 $last=$jobs->show($uid,$jobId,100);check($last['status']==='review' && $last['prepared']===5000,'all five thousand proposals reach review');check(count($last['rows'])===50 && !$last['hasNext'],'last review page has fifty rows and no next link');
 $seen=[];for($page=1;$page<=100;$page++){foreach($jobs->show($uid,$jobId,$page)['rows'] as $row){check($row['status']==='ready','review row is ready');$seen[]=$row['id'];}}check($seen===$fixture['ids'],'review pagination preserves every selected book exactly once');
 $jobs->control($uid,$jobId,'skip',$fixture['ids'][0]);$jobs->control($uid,$jobId,'include',$fixture['ids'][0]);for($n=0;$n<6;$n++)$samples[]=sample();$jobs->control($uid,$jobId,'approve');
}elseif($mode==='apply'){
 for($n=0;$n<100;$n++)$jobs->advance();$paused=$jobs->control($uid,$jobId,'pause');check($paused['status']==='paused','large applying run pauses between books');$before=(int)$db->executeQuery("SELECT COUNT(*) FROM *PREFIX*library_items WHERE user_id=? AND publisher='Boundary publisher'",[$uid])->fetchOne();$jobs->advance();check((int)$db->executeQuery("SELECT COUNT(*) FROM *PREFIX*library_items WHERE user_id=? AND publisher='Boundary publisher'",[$uid])->fetchOne()===$before,'paused job makes no additional changes');$jobs->control($uid,$jobId,'resume');
 for(;$steps<5002;$steps++){if($steps%100===0 && $jobs->show($uid,$jobId)['status']!=='applying')break;$jobs->advance();}
 $done=$jobs->show($uid,$jobId);check($done['status']==='complete','maximum-size run completes');check((int)$db->executeQuery("SELECT COUNT(*) FROM *PREFIX*library_items WHERE user_id=? AND publisher='Boundary publisher'",[$uid])->fetchOne()===5000,'all reviewed publishers are applied');check((int)$db->executeQuery("SELECT COUNT(*) FROM *PREFIX*library_change_history WHERE user_id=? AND kind='organisation'",[$uid])->fetchOne()===5000,'one organisation receipt exists per book');for($n=0;$n<6;$n++)$samples[]=sample();$jobs->control($uid,$jobId,'undo');
}elseif($mode==='undo'){
 for(;$steps<5002;$steps++){if($steps%100===0 && $jobs->show($uid,$jobId)['status']!=='undoing')break;$jobs->advance();}
 check($jobs->show($uid,$jobId)['status']==='undone','maximum-size run is undoable');check((int)$db->executeQuery("SELECT COUNT(*) FROM *PREFIX*library_items WHERE user_id=? AND publisher='Boundary publisher'",[$uid])->fetchOne()===0,'Undo restores all original publishers');check((int)$db->executeQuery("SELECT COUNT(*) FROM *PREFIX*library_curation_rows WHERE user_id=? AND status='undone'",[$uid])->fetchOne()===5000,'each organisation row records its Undo');for($n=0;$n<6;$n++)$samples[]=sample();
}else throw new InvalidArgumentException('Unknown boundary mode');
echo json_encode(['phase'=>$mode,'workerMs'=>round((microtime(true)-$start)*1000,1),'steps'=>$steps,'showLastPage'=>$samples,'phpPeakBytes'=>memory_get_peak_usage(true)]),"\n";
