<?php
/** Private developer benchmark: fixed real publications, forced refresh, aggregate output only. */
declare(strict_types=1);
define('OC_CONSOLE', true);
// Optional archived baseline class, loaded only into this CLI process for an A/B/A check.
if(getenv('OLD_ITEM_SERVICE')==='1')require '/tmp/library-index-speed-old-ItemService.php';
require '/var/www/html/lib/base.php';
require '/tmp/library-performance-sql-profiler.php';
try {
 $uid=getenv('LIBRARY_BENCHMARK_USER')?:'uwe';$path='/tmp/library-index-speed-selection.json';
 $db=\OC::$server->get(\OCP\IDBConnection::class);
 $r=$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_scan_jobs WHERE user_id=? AND status IN (?,?)',[$uid,'queued','running']);$active=(int)$r->fetchOne();$r->closeCursor();if($active)throw new RuntimeException('A real scan is active');
 if(($argv[1]??'run')==='select'){
  $selected=[];
  foreach(['epub'=>250,'pdf'=>230,'cbz'=>20] as $extension=>$limit){
   $r=$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_files f INNER JOIN *PREFIX*library_items i ON i.library_file_id=f.id AND i.user_id=f.user_id WHERE f.user_id=? AND f.extension=? AND f.scan_status=? AND i.user_edited=0',[$uid,$extension,'indexed']);$total=(int)$r->fetchOne();$r->closeCursor();
   $part=(int)($limit/5);for($bucket=0;$bucket<5;$bucket++){$offset=max(0,(int)floor($total*($bucket+.1)/5)-intdiv($part,2));$r=$db->executeQuery('SELECT f.id,f.file_id,f.root_id FROM *PREFIX*library_files f INNER JOIN *PREFIX*library_items i ON i.library_file_id=f.id AND i.user_id=f.user_id WHERE f.user_id=? AND f.extension=? AND f.scan_status=? AND i.user_edited=0 ORDER BY f.id LIMIT '.$part.' OFFSET '.$offset,[$uid,$extension,'indexed']);foreach($r->fetchAll() as $row)$selected[(int)$row['id']]=$row;$r->closeCursor();}
  }
  file_put_contents($path,json_encode(array_values($selected),JSON_THROW_ON_ERROR));echo json_encode(['selected'=>count($selected),'formats'=>['epub'=>250,'pdf'=>230,'cbz'=>20]]),PHP_EOL;exit;
 }
 $selected=json_decode(file_get_contents($path),true,512,JSON_THROW_ON_ERROR);
 if(getenv('RESET_INDEX_HASH')==='1'||getenv('FORCE_INDEX_REBUILD')==='1'){foreach(array_chunk(array_column($selected,'id'),200) as $ids)$db->executeStatement('UPDATE *PREFIX*library_items SET scanner_index_hash=? WHERE user_id=? AND library_file_id IN ('.implode(',',array_fill(0,count($ids),'?')).')',[getenv('FORCE_INDEX_REBUILD')==='1'?'benchmark-force-rebuild':null,$uid,...$ids]);}$nodes=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid);$scanner=\OC::$server->get(\OCA\Library\Service\LibraryScanner::class);
 (new ReflectionMethod($scanner,'beginMetrics'))->invoke($scanner);$scan=new ReflectionMethod($scanner,'scanFile');
 $connection=libraryBenchmarkConnection();$config=$connection->getConfiguration();$logger=new LibraryBenchmarkSql();$old=$config->getSQLLogger();$profile=getenv('SKIP_SQL')!=='1';if($profile)$config->setSQLLogger($logger);
 $summary=['filesAdded'=>0,'pathsUpdated'=>0,'filesUnchanged'=>0,'filesMissing'=>0,'metadataErrors'=>0];$seen=[];$count=0;$start=hrtime(true);if(function_exists('memory_reset_peak_usage'))memory_reset_peak_usage();
 try{foreach($selected as $row){$node=$nodes->getById((int)$row['file_id'])[0]??null;if(!$node instanceof \OCP\Files\File)throw new RuntimeException('Selected source unavailable');$args=[$uid,(int)$row['root_id'],$node,&$seen,true,null,&$summary];if(!$scan->invokeArgs($scanner,$args))throw new RuntimeException('Refresh rejected');$count++;if($count%50===0)echo json_encode(['event'=>'progress','processed'=>$count,'seconds'=>round((hrtime(true)-$start)/1e9,1)]),PHP_EOL;}}
 finally{$config->setSQLLogger($old);}
 $elapsed=(hrtime(true)-$start)/1e6;$metrics=(new ReflectionProperty($scanner,'metrics'))->getValue($scanner);
 echo json_encode(['event'=>'result','processed'=>$count,'durationMs'=>$elapsed,'filesPerSecond'=>$count/($elapsed/1000),'peakMemoryBytes'=>memory_get_peak_usage(true),'sqlProfilingEnabled'=>$profile,'derivedIndexWriteStatements'=>$logger->derivedIndexWrites,'sqlCount'=>$logger->count,'sqlMs'=>$logger->ms,'metrics'=>$metrics,'metadataWarnings'=>$summary['metadataErrors'],'sql'=>$logger->summary($connection,false)],JSON_THROW_ON_ERROR),PHP_EOL;
} catch(Throwable $e){fwrite(STDERR,get_class($e).': benchmark failed'.PHP_EOL);exit(1);}
