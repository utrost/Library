<?php
declare(strict_types=1);
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';require '/tmp/library-performance-sql-profiler.php';
$uid=getenv('LIBRARY_BENCHMARK_USER')?:'uwe';$mode=$argv[1]??'services';$connection=libraryBenchmarkConnection();$config=$connection->getConfiguration();$db=\OC::$server->get(\OCP\IDBConnection::class);
$items=\OC::$server->get(\OCA\Library\Service\ItemService::class);$roots=\OC::$server->get(\OCA\Library\Service\RootService::class);
function measureLibrary(string $label,callable $fn,bool $explain=true):mixed {
 global $connection,$config;
 $logger=new LibraryBenchmarkSql();$previous=$config->getSQLLogger();$config->setSQLLogger(getenv('SKIP_SQL')==='1' ? $previous : $logger);if(function_exists('memory_reset_peak_usage'))memory_reset_peak_usage();$start=hrtime(true);$value=null;$error=null;
 try{$value=$fn();}catch(Throwable $e){$GLOBALS['libraryBenchmarkHadError']=true;$error=['class'=>get_class($e),'message'=>preg_replace('/[\r\n]+/',' ',substr(preg_replace("/Duplicate entry '[^']*'/", 'Duplicate entry [redacted]', $e->getMessage()),0,180))];}
 finally{$elapsed=(hrtime(true)-$start)/1e6;$memory=memory_get_peak_usage(true);$config->setSQLLogger($previous);echo json_encode(['label'=>$label,'ms'=>$elapsed,'peakMemoryBytes'=>$memory,'error'=>$error,'sql'=>$logger->summary($connection,$explain)],JSON_INVALID_UTF8_SUBSTITUTE),PHP_EOL;}
 return $value;
}
if($mode==='probes'){
 foreach(['thin_deep_ids'=>'SELECT i.id FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id INNER JOIN *PREFIX*library_roots r ON r.id=f.root_id WHERE i.user_id=? AND f.scan_status<>? ORDER BY i.title LIMIT 100 OFFSET 39900', 'missing_file_candidates'=>'SELECT id FROM *PREFIX*library_files WHERE user_id=? AND scan_status=? LIMIT 100'] as $label=>$sql){
  for($repeat=0;$repeat<3;$repeat++)measureLibrary($label, function()use($db,$uid,$sql,$label){$r=$db->executeQuery($sql,[$uid,$label==='thin_deep_ids'?'sidecar':'missing']);$rows=$r->fetchAll();$r->closeCursor();return $rows;});
 }
 $r=$db->executeQuery('SELECT title,id FROM *PREFIX*library_items WHERE user_id=? ORDER BY title,id LIMIT 1 OFFSET 39899',[$uid]);$cursor=$r->fetch();$r->closeCursor();
 if($cursor)for($repeat=0;$repeat<3;$repeat++)measureLibrary('keyset_page_prototype',function()use($db,$uid,$cursor){$r=$db->executeQuery('SELECT i.*,f.file_id FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id INNER JOIN *PREFIX*library_roots r ON r.id=f.root_id WHERE i.user_id=? AND f.scan_status<>? AND (i.title>? OR (i.title=? AND i.id>?)) ORDER BY i.title,i.id LIMIT 100',[$uid,'sidecar',$cursor['title'],$cursor['title'],(int)$cursor['id']]);$rows=$r->fetchAll();$r->closeCursor();return $rows;});
} elseif($mode==='services'){
 foreach(['default'=>[],'deep_page'=>[],'search'=>['q'=>'science'],'missing'=>['status'=>'missing'],'conflicts'=>['scannerConflicts'=>'1']] as $label=>$filters){measureLibrary('catalogue_'.$label,fn()=>$items->queryCatalogue($uid,$filters,['page'=>$label==='deep_page'?400:1,'limit'=>100],false));}
 measureLibrary('home_rows',fn()=>$items->homeRows($uid));
 measureLibrary('home_shelves',fn()=>$items->homeShelfSummaries($uid));
 measureLibrary('corrected_metadata_export',fn()=>$items->exportCorrectedMetadata($uid));
 measureLibrary('sidecar_manifest',fn()=>$items->exportCorrectedMetadataSidecarManifest($uid));
 measureLibrary('settings_root_counts',fn()=>\OC::$server->get(\OCA\Library\Service\FileIndexService::class)->publicationCountsByRoot($uid));
 measureLibrary('cleanup_expired_history',function(){ $c=\OC::$server->get(\OCA\Library\Service\LibraryCleanupService::class);$c->expireHistory();$c->expireAnalyses();$c->expireDuplicates();});
 measureLibrary('scheduled_scans_check',fn()=>\OC::$server->get(\OCA\Library\Service\ScheduledScanService::class)->runDue());
} elseif($mode==='maintenance'){
 measureLibrary('maintenance_job',fn()=>\OC::$server->get(\OCA\Library\BackgroundJob\MaintenanceJob::class)->run(null));
 measureLibrary('scheduled_scan_dispatcher',fn()=>\OC::$server->get(\OCA\Library\Service\ScheduledScanService::class)->runDue());
} elseif($mode==='scan'){
 $rootId=(int)($argv[2]??0);$budget=(int)(getenv('SCAN_BUDGET_SECONDS')?:180);$scans=\OC::$server->get(\OCA\Library\Service\ScanJobService::class);$job=$scans->startJob($uid,$rootId?'root':'all',$rootId?:null);$start=microtime(true);$last=0;$latest=[];$result=null;$cancelled=false;
 measureLibrary('scan_'.($rootId?'root_'.$rootId:'all'),function()use($uid,$rootId,$budget,$start,&$last,&$latest,&$result,&$cancelled,$scans,$job){
  try{$result=\OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan($uid,$rootId?:null,function($progress)use($start,$budget,&$last,&$latest){$latest=$progress;$elapsed=microtime(true)-$start;if($elapsed-$last>=5){$last=$elapsed;echo json_encode(['event'=>'progress','seconds'=>$elapsed,'indexed'=>$progress['indexed']??0,'traversalUnits'=>$progress['traversalUnits']??0,'extractions'=>$progress['metadataExtractions']??0,'skips'=>$progress['fingerprintSkips']??0,'peakMemoryBytes'=>memory_get_peak_usage(true)]),PHP_EOL;}if($elapsed>$budget)throw new \OCA\Library\Exception\ScanCancelledException();});$scans->finishJob($uid,$job['id'],$result);}
  catch(\OCA\Library\Exception\ScanCancelledException){$cancelled=true;$scans->cancelJob($uid,$job['id']);}
  catch(\Throwable $e){$scans->failJob($uid,$job['id'],'Benchmark scan failed: '.get_class($e));throw $e;}
 },false);
 $safe=$result??$latest;$safe['rootErrors']=is_array($safe['errors']??null)?count($safe['errors']):(int)($safe['errors']??0);if($safe['rootErrors']>0)$GLOBALS['libraryBenchmarkHadError']=true;foreach(['currentPath','summary','errors'] as $key)unset($safe[$key]);echo json_encode(['event'=>'scan_result','jobId'=>$job['id'],'budgetSeconds'=>$budget,'budgetCancelled'=>$cancelled,'seconds'=>microtime(true)-$start,'metrics'=>$safe]),PHP_EOL;
} else throw new RuntimeException('Unknown benchmark mode');

if($GLOBALS['libraryBenchmarkHadError']??false)exit(2);
