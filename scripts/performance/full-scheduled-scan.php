<?php
// NC34 developer acceptance: advance an existing enabled schedule once; never write source files.
declare(strict_types=1);
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
$uid=getenv('LIBRARY_BENCHMARK_USER')?:'uwe';$db=\OC::$server->get(\OCP\IDBConnection::class);$schedules=\OC::$server->get(\OCA\Library\Service\ScheduledScanService::class);$scans=\OC::$server->get(\OCA\Library\Service\ScanJobService::class);$action=$argv[1]??'status';
function scanDigest(string $sql,array $params):array{global $db;$h=hash_init('sha256');$n=0;$r=$db->executeQuery($sql,$params);while($row=$r->fetch()){hash_update($h,json_encode($row,JSON_THROW_ON_ERROR)."\n");$n++;}$r->closeCursor();return ['count'=>$n,'sha256'=>hash_final($h)];}
function scanBaselines(string $uid,int $preparedAt=0):array{
 $sources=scanDigest('SELECT DISTINCT fc.fileid,fc.etag,fc.mtime,fc.size FROM *PREFIX*library_files f INNER JOIN *PREFIX*filecache fc ON fc.fileid=f.file_id WHERE f.user_id=?'.($preparedAt>0?' AND f.created_at<=?':'').' ORDER BY fc.fileid',$preparedAt>0?[$uid,$preparedAt]:[$uid]);
 $corrections=scanDigest('SELECT id,publication_type,title,subtitle,creators,authors_json,publication,series_name,series_number,genre,publication_date,language,publisher,description,subjects_json,classifications_json,personal_rating,workflow_status,starred,last_opened_at,cover_override_url,cover_override_data,cover_override_mime_type,cover_revision FROM *PREFIX*library_items WHERE user_id=? AND user_edited=1 ORDER BY id',[$uid]);
 return ['sourceIdentityMarkers'=>$sources,'userCorrections'=>$corrections];
}
try{
 $state=$schedules->status($uid);
 if($action==='prepare'){
  if($state['interval']===0)throw new RuntimeException('An enabled schedule is required; this check does not enable it.');
  $r=$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_scan_jobs WHERE user_id=? AND status IN (?,?)',[$uid,'queued','running']);$active=(int)$r->fetchOne();$r->closeCursor();if($active)throw new RuntimeException('Existing scan is active');
  $baseline=scanBaselines($uid);$preparedAt=time();$db->executeStatement('UPDATE *PREFIX*library_scan_schedule SET next_run_at=? WHERE user_id=? AND interval_seconds=?',[time()-1,$uid,$state['interval']]);
  echo json_encode(['preparedAt'=>$preparedAt,'originalSchedule'=>$state,'baselines'=>$baseline]),PHP_EOL;
 }elseif($action==='status'||$action==='final'){
  $job=$state['lastJobId']?$scans->getJob($uid,$state['lastJobId']):null;$safe=$job?array_intersect_key($job,array_flip(['id','status','scopeType','rootId','rootsTotal','filesIndexed','filesAdded','pathsUpdated','filesUnchanged','filesMissing','errorCount','metadataErrors','startedAt','finishedAt','runStartedAt','durationMs','fingerprintSkips','cachedWarningSkips','metadataExtractions','itemRefreshes','lastProgressAt'])):null;
  $r=$db->executeQuery('SELECT id,last_scan_at FROM *PREFIX*library_roots WHERE user_id=? AND enabled=1 ORDER BY id',[$uid]);$roots=$r->fetchAll();$r->closeCursor();
  $r=$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_items WHERE user_id=?',[$uid]);$books=(int)$r->fetchOne();$r->closeCursor();
  $r=$db->executeQuery('SELECT j.id,j.reserved_at,j.argument FROM *PREFIX*jobs j WHERE j.class=?',[\OCA\Library\BackgroundJob\ScanJob::class]);$queued=[];while($row=$r->fetch()){$arg=json_decode($row['argument'],true);if(($arg['userId']??null)===$uid&&($arg['jobId']??null)===$state['lastJobId'])$queued[]=['nextcloudJobId'=>(int)$row['id'],'reservedAt'=>(int)$row['reserved_at'],'scheduled'=>($arg['scheduled']??false)===true];}$r->closeCursor();
  $r=$db->executeQuery('SELECT r.run_id,r.pid,r.status,r.duration,r.ram_peak_usage FROM *PREFIX*job_runs r INNER JOIN *PREFIX*job_classes_registry c ON c.class_id=r.class_id WHERE c.class_name=? ORDER BY r.run_id DESC LIMIT 1',[\OCA\Library\BackgroundJob\ScanJob::class]);$run=$r->fetch();$r->closeCursor();
  if($run){$run['run_id']=(string)$run['run_id'];$process=@file_get_contents('/proc/'.(int)$run['pid'].'/status');foreach(['VmRSS'=>'rssKb','VmHWM'=>'highWaterKb'] as $key=>$field)if(is_string($process)&&preg_match('/^'.$key.':\\s+(\\d+) kB/m',$process,$m))$run[$field]=(int)$m[1];}
  $out=['at'=>time(),'schedule'=>$state,'job'=>$safe,'roots'=>$roots,'books'=>$books,'nextcloudQueue'=>$queued,'latestNextcloudRun'=>$run?:null];
  if($action==='final'){$cutoff=(int)(getenv('LIBRARY_BENCHMARK_PREPARED_AT')?:0);$out['baselines']=scanBaselines($uid,$cutoff);$out['sourceMarkersScope']=$cutoff>0?'pre-existing-at-prepare':'all-current';$r=$db->executeQuery('SELECT COUNT(DISTINCT fc.fileid) FROM *PREFIX*library_files f INNER JOIN *PREFIX*filecache fc ON fc.fileid=f.file_id WHERE f.user_id=?',[$uid]);$out['currentSourceIdentityCount']=(int)$r->fetchOne();$r->closeCursor();$r=$db->executeQuery('SELECT scan_status,COUNT(*) AS n FROM *PREFIX*library_files WHERE user_id=? GROUP BY scan_status',[$uid]);$out['fileStatuses']=$r->fetchAll();$r->closeCursor();$r=$db->executeQuery("SELECT CASE WHEN scan_error LIKE 'metadata_authors_invalid:%' THEN 'authors_review' ELSE 'other_metadata' END AS category,COUNT(*) AS n FROM *PREFIX*library_files WHERE user_id=? AND scan_status=? GROUP BY category",[$uid,'metadata_error']);$out['warnings']=$r->fetchAll();$r->closeCursor();}
  echo json_encode($out,JSON_THROW_ON_ERROR),PHP_EOL;
 }else throw new RuntimeException('Unknown action');
}catch(Throwable $e){fwrite(STDERR,get_class($e).': '.$e->getMessage().PHP_EOL);exit(1);}
