<?php
// Disposable account only. Exercise real scheduled discovery, not the developer's catalogue.
declare(strict_types=1);
define('OC_CONSOLE', true); require '/var/www/html/lib/base.php';
$manager=\OC::$server->get(\OCP\IUserManager::class);$db=\OC::$server->get(\OCP\IDBConnection::class);
$schedules=\OC::$server->get(\OCA\Library\Service\ScheduledScanService::class);$scans=\OC::$server->get(\OCA\Library\Service\ScanJobService::class);$jobs=\OC::$server->get(\OCP\BackgroundJob\IJobList::class);
$uid='library-schedule-smoke-'.bin2hex(random_bytes(6));$account=null;$checks=0;$failed=false;
function checkSchedule(bool $ok,string $why):void{global $checks;if(!$ok)throw new RuntimeException($why);$checks++;}
function scheduleOpf(string $title):string{return '<?xml version="1.0"?><package xmlns="http://www.idpf.org/2007/opf" version="3.0"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>'.$title.'</dc:title><dc:creator>Ada Quill</dc:creator><dc:language>en</dc:language></metadata></package>';}
function scheduleEpub(string $title):string{$path=tempnam('/tmp','schedule-');$zip=new ZipArchive();$zip->open($path,ZipArchive::OVERWRITE);$zip->addFromString('mimetype','application/epub+zip');$zip->addFromString('META-INF/container.xml','<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>');$zip->addFromString('content.opf',scheduleOpf($title));$zip->close();$bytes=file_get_contents($path);unlink($path);return $bytes;}
$due=function()use($db,$uid){$db->executeStatement('UPDATE *PREFIX*library_scan_schedule SET next_run_at = ? WHERE user_id = ?',[time()-1,$uid]);};
$work=function()use($uid,$schedules,$scans,$jobs){$state=$schedules->status($uid);$id=$state['lastJobId'];$arg=['userId'=>$uid,'jobId'=>$id,'scheduled'=>true];\OC::$server->get(\OCA\Library\BackgroundJob\ScanJob::class)->run($arg);$jobs->remove(\OCA\Library\BackgroundJob\ScanJob::class,$arg);$job=$scans->getJob($uid,$id);checkSchedule($job['status']==='completed'&&$job['errorCount']===0,'Scheduled worker completed without errors');return $job;};
$book=function(string $name)use($db,$uid){$r=$db->executeQuery('SELECT i.id,i.title,i.field_values,f.scan_status FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=? AND f.cached_path=?',[$uid,'/Schedule fixture/'.$name]);$row=$r->fetch();$r->closeCursor();return $row;};
try{
 $account=$manager->createUser($uid,bin2hex(random_bytes(24)));checkSchedule((bool)$account,'Created disposable account');
 $home=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid);$folder=$home->newFolder('Schedule fixture');$destination=$home->newFolder('Schedule destination');
 foreach(['stable','changed','deleted','protected'] as $name)$folder->newFile($name.'.epub',scheduleEpub(ucfirst($name).' book'));
 $nested=$folder->newFolder('nested');
 $sidecar=$folder->newFile('protected.opf',scheduleOpf('Original sidecar title'));
 \OC::$server->get(\OCA\Library\Service\RootService::class)->saveRoot($uid,'/Schedule fixture','Schedule fixture',true);
 $destinationRoot=\OC::$server->get(\OCA\Library\Service\RootService::class)->saveRoot($uid,'/Schedule destination','Schedule destination',true);
 checkSchedule($schedules->status($uid)['interval']===0,'Default off');
 try{$schedules->configure($uid,1);throw new RuntimeException('Invalid interval accepted');}catch(InvalidArgumentException){}
 $state=$schedules->configure($uid,3600);checkSchedule($state['nextRunAt']>=time()+3598,'First run after interval');$same=$schedules->configure($uid,3600);checkSchedule($same['nextRunAt']===$state['nextRunAt'],'Repeated save does not postpone');
 $schedules->runDue();checkSchedule($schedules->status($uid)['lastJobId']===0,'Not queued early');
 $due();$result=$schedules->runDue();checkSchedule($result['queued']===1,'Due account queued');$id=$schedules->status($uid)['lastJobId'];
 $due();$result=$schedules->runDue();checkSchedule($result['deferred']===1&&$schedules->status($uid)['lastJobId']===$id,'No overlap with pending scan');
 $first=$work();checkSchedule($first['scopeType']==='all'&&$schedules->status($uid)['lastFullAt']>0,'First scheduled run establishes a full checkpoint');checkSchedule($first['filesMissing']===0,'Sidecars do not count as missing books');checkSchedule($book('stable.epub')['title']==='Stable book','New files discovered');
 $items=\OC::$server->get(\OCA\Library\Service\ItemService::class);$items->applyBatchMetadataEdit($uid,[(int)$book('protected.epub')['id']],'title','My correction');
 $folder->newFile('added.epub',scheduleEpub('Newly added book'));$folder->get('changed.epub')->putContent(scheduleEpub('Updated embedded title'));$folder->get('deleted.epub')->delete();$sidecar->putContent(scheduleOpf('Changed sidecar title'));
 $hashes=[];foreach($folder->getDirectoryListing() as $file)if($file instanceof \OCP\Files\File)$hashes[$file->getName()]=hash('sha256',$file->getContent());
 $journal=\OC::$server->get(\OCA\Library\Service\ScanChangeJournal::class);checkSchedule(count($journal->snapshot($uid))>=4,'Nextcloud file events recorded source and sidecar changes');
 $due();$schedules->runDue();$second=$work();checkSchedule($second['scopeType']==='incremental','Subsequent scheduled run uses change journal');checkSchedule($second['filesIndexed']===3,'Only three changed publications visited');checkSchedule($second['filesMissing']===1,'Only the deleted book counts as missing');checkSchedule($book('added.epub')['title']==='Newly added book','Added file picked up');checkSchedule($book('changed.epub')['title']==='Updated embedded title','Embedded metadata updated');checkSchedule($book('deleted.epub')['scan_status']==='missing','Deleted file marked missing');checkSchedule($book('protected.epub')['title']==='My correction','User correction preserved');checkSchedule(str_contains($book('protected.epub')['field_values'],'Changed sidecar title'),'Changed sidecar becomes review candidate');checkSchedule(count($journal->snapshot($uid))===0,'Completed scan acknowledges captured events');
 $due();$schedules->runDue();$empty=$work();checkSchedule($empty['scopeType']==='incremental'&&$empty['filesIndexed']===0,'No-change scheduled run enumerates no books');
 $folder->get('stable.epub')->move($nested->getPath().'/stable.epub');$moveEvents=$journal->snapshot($uid);checkSchedule(count($moveEvents)===2,'Rename records old and new file targets');$due();$schedules->runDue();$moved=$work();
 $r=$db->executeQuery('SELECT cached_path,scan_status FROM *PREFIX*library_files WHERE user_id=? AND file_id=?',[$uid,$nested->get('stable.epub')->getId()]);$movedRow=$r->fetch();$r->closeCursor();
 checkSchedule($moved['scopeType']==='incremental'&&$moved['pathsUpdated']>=1,'Rename stays on incremental path');
 checkSchedule($moved['filesMissing']===0,'Rename does not count as a missing publication');
 checkSchedule($movedRow['cached_path']==='/Schedule fixture/nested/stable.epub'&&$movedRow['scan_status']==='indexed','Moved publication keeps its identity and remains indexed');
 $folder->get('nested')->move($folder->getPath().'/nested-renamed');checkSchedule(count($journal->snapshot($uid))===1,'Folder rename coalesces to its parent directory');$due();$schedules->runDue();$movedFolder=$work();
 $renamed=$folder->get('nested-renamed');$r=$db->executeQuery('SELECT cached_path,scan_status FROM *PREFIX*library_files WHERE user_id=? AND file_id=?',[$uid,$renamed->get('stable.epub')->getId()]);$folderMoveRow=$r->fetch();$r->closeCursor();
 checkSchedule($movedFolder['scopeType']==='incremental'&&$movedFolder['pathsUpdated']>=1,'Folder rename schedules its containing subtree');
 checkSchedule($movedFolder['filesMissing']===0,'Folder rename does not count as missing');
 checkSchedule($folderMoveRow['cached_path']==='/Schedule fixture/nested-renamed/stable.epub'&&$folderMoveRow['scan_status']==='indexed','Folder move updates contained publication path');
 $sharedFile=$folder->newFile('metadata.opf',scheduleOpf('Shared sidecar title'));$sharedBytes=hash('sha256',$sharedFile->getContent());$due();$schedules->runDue();$sharedSidecar=$work();
 checkSchedule($sharedSidecar['scopeType']==='incremental'&&$sharedSidecar['filesIndexed']>=3,'Shared metadata sidecar scans its containing folder');
 checkSchedule($book('changed.epub')['title']==='Shared sidecar title','Shared OPF change reaches affected books');
 $renamed->get('stable.epub')->move($destination->getPath().'/stable.epub');$due();$schedules->runDue();$crossRoot=$work();
 $r=$db->executeQuery('SELECT root_id,cached_path,scan_status FROM *PREFIX*library_files WHERE user_id=? AND file_id=?',[$uid,$destination->get('stable.epub')->getId()]);$crossRow=$r->fetch();$r->closeCursor();
 checkSchedule($crossRoot['scopeType']==='incremental'&&$crossRoot['pathsUpdated']>=1&&$crossRoot['filesMissing']===0,'Cross-root move does not create a false missing book');
 checkSchedule((int)$crossRow['root_id']===(int)$destinationRoot['id']&&$crossRow['cached_path']==='/Schedule destination/stable.epub'&&$crossRow['scan_status']==='indexed','Cross-root move keeps the catalogue identity');
 $db->executeStatement('UPDATE *PREFIX*library_scan_schedule SET last_full_at=? WHERE user_id=?',[time()-8*86400,$uid]);$due();$schedules->runDue();$weekly=$work();checkSchedule($weekly['scopeType']==='all','Seven-day age forces full reconciliation');
 $db->executeStatement('UPDATE *PREFIX*library_scan_schedule SET last_full_revision=? WHERE user_id=?',['older-generator',$uid]);$due();$schedules->runDue();$revisionRun=$work();checkSchedule($revisionRun['scopeType']==='all','Metadata or index generator revision forces full reconciliation');
 $home->newFolder('New root');$newRoot=\OC::$server->get(\OCA\Library\Service\RootService::class)->saveRoot($uid,'/New root','New root',true);$due();$schedules->runDue();$rootRun=$work();checkSchedule($rootRun['scopeType']==='all','Enabled-root configuration change forces full reconciliation');
 $journal->recordDirectory($uid,'/Schedule fixture');$rootsService=\OC::$server->get(\OCA\Library\Service\RootService::class);$rootsService->deleteRoot($uid,-999);checkSchedule(count($journal->snapshot($uid))===1,'Unknown root does not clear pending changes');$rootsService->deleteRoot($uid,(int)$newRoot['id']);checkSchedule($journal->snapshot($uid)===[],'Root removal discards stale journal targets');
 $due();$schedules->runDue();$removedRootRun=$work();checkSchedule($removedRootRun['scopeType']==='all','Root removal forces full reconciliation');
 $deletedFileId=$destination->get('stable.epub')->getId();$destination->delete();checkSchedule(count($journal->snapshot($uid))>=1,'Before-delete event records configured folder removal');$due();$schedules->runDue();$deletedRootRun=$work();checkSchedule($deletedRootRun['scopeType']==='incremental'&&$deletedRootRun['filesMissing']===1,'Deleted configured folder marks its publication missing');
 $r=$db->executeQuery('SELECT scan_status FROM *PREFIX*library_files WHERE user_id=? AND file_id=?',[$uid,$deletedFileId]);$deletedRootStatus=$r->fetchOne();$r->closeCursor();checkSchedule($deletedRootStatus==='missing','Deleted configured folder publication is marked missing');
 $journal->recordDirectory($uid,'/Schedule fixture');$capture=$journal->snapshot($uid);$journal->recordDirectory($uid,'/Schedule fixture');$journal->acknowledge($uid,$capture);checkSchedule(count($journal->snapshot($uid))===1,'Events arriving after snapshot survive acknowledgement');$journal->acknowledge($uid,$journal->snapshot($uid));
 foreach($folder->getDirectoryListing() as $file)if($file instanceof \OCP\Files\File && isset($hashes[$file->getName()]))checkSchedule(hash('sha256',$file->getContent())===$hashes[$file->getName()],'Scanner does not alter source files');
 checkSchedule(hash('sha256',$sharedFile->getContent())===$sharedBytes,'Scanner does not alter shared sidecar');
 $stale=$scans->startJob($uid);$fresh=$scans->startJob($uid);
 $db->executeStatement('UPDATE *PREFIX*library_scan_jobs SET last_progress_at=?, files_indexed=17 WHERE id=?',[time()-1800,$stale['id']]);
 checkSchedule($scans->recoverStaleRunningJobs($uid)===1,'Only abandoned heartbeat recovered');
 checkSchedule($scans->getJob($uid,$stale['id'])['status']==='failed','Stale worker becomes failed');
 checkSchedule($scans->getJob($uid,$stale['id'])['filesIndexed']===17,'Recovery preserves progress counters');
 checkSchedule($scans->isCancelled($uid,$stale['id']),'Recovered worker is fenced');
 $scans->updateProgress($uid,$stale['id'],['indexed'=>999]);
 checkSchedule($scans->getJob($uid,$stale['id'])['status']==='failed','Late progress cannot resurrect worker');
 checkSchedule($scans->getJob($uid,$fresh['id'])['status']==='running','Fresh worker remains running');$scans->cancelJob($uid,$fresh['id']);
 $stale=$scans->startJob($uid);$db->executeStatement('UPDATE *PREFIX*library_scan_jobs SET last_progress_at=? WHERE id=?',[time()-1800,$stale['id']]);
 $due();$result=$schedules->runDue();checkSchedule($result['queued']===1,'Scheduler recovers stale scan and queues replacement');$work();
 $manual=$scans->queueJob($uid);$due();$result=$schedules->runDue();checkSchedule($result['deferred']===1,'Manual pending scan prevents automatic queue');$scans->cancelJob($uid,$manual['id']);
 $due();$schedules->runDue();$queued=$schedules->status($uid)['lastJobId'];$schedules->configure($uid,0);checkSchedule($scans->getJob($uid,$queued)['status']==='cancelled','Off cancels scheduled pending scan');checkSchedule($schedules->status($uid)['nextRunAt']===0,'Off clears due time');
 $schedules->configure($uid,3600);$account->setEnabled(false);$due();$result=$schedules->runDue();checkSchedule($result['skipped']===1,'Disabled account skipped');$account->setEnabled(true);
 $journal->recordDirectory($uid,'/Schedule fixture');checkSchedule(count($journal->snapshot($uid))===1,'Pending journal entry exists before account deletion');
 $db->executeStatement('UPDATE *PREFIX*library_roots SET enabled=0 WHERE user_id=?',[$uid]);$due();$result=$schedules->runDue();checkSchedule($result['skipped']===1,'No enabled roots skipped');
 echo json_encode(['passed'=>true,'assertions'=>$checks,'firstFilesMissing'=>$first['filesMissing'],
    'incrementalFilesMissing'=>$second['filesMissing'],'incrementalFilesIndexed'=>$second['filesIndexed'],
    'incrementalDurationMs'=>$second['durationMs'],'emptyFilesIndexed'=>$empty['filesIndexed'],
    'emptyDurationMs'=>$empty['durationMs'],'movedFilesIndexed'=>$moved['filesIndexed'],
    'movedPathsUpdated'=>$moved['pathsUpdated'],'movedFilesMissing'=>$moved['filesMissing'],
    'folderMovePathsUpdated'=>$movedFolder['pathsUpdated'],'folderMoveFilesMissing'=>$movedFolder['filesMissing'],
    'sharedSidecarFilesIndexed'=>$sharedSidecar['filesIndexed'],
    'crossRootPathsUpdated'=>$crossRoot['pathsUpdated'],'crossRootFilesMissing'=>$crossRoot['filesMissing']], JSON_THROW_ON_ERROR),PHP_EOL;
}catch(Throwable $error){
 fwrite(STDERR, get_class($error).': '.$error->getMessage().' at '.$error->getFile().':'.$error->getLine().PHP_EOL);
 $failed=true;
}finally{
 if($account)$account->delete();$r=$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_scan_schedule WHERE user_id=?',[$uid]);checkSchedule((int)$r->fetchOne()===0,'Schedule removed on account deletion');$r->closeCursor();$r=$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_scan_changes WHERE user_id=?',[$uid]);checkSchedule((int)$r->fetchOne()===0,'Change journal removed on account deletion');$r->closeCursor();echo json_encode(['cleanup'=>true]),PHP_EOL;
}

if($failed)exit(1);
