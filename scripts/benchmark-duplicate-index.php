<?php
declare(strict_types=1);
// Run inside Nextcloud: php /tmp/library-duplicate-performance.php status|build|lookup.
// build enables and finishes this account's derived index; it does not force a rebuild.
// No book contents are read or modified. lookup measures repeated calls in one PHP process.
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
try{
$uid=getenv('LIBRARY_BENCHMARK_USER')?:'uwe';$index=\OC::$server->get(\OCA\Library\Service\DuplicateIndexService::class);$service=\OC::$server->get(\OCA\Library\Service\DuplicateSuggestionService::class);$db=\OC::$server->get(\OCP\IDBConnection::class);$action=$argv[1]??'status';
if($action==='status'){$counts=[];foreach(['library_items','library_dup_index','library_dup_terms'] as $table)$counts[$table]=(int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*'.$table.' WHERE user_id = ?',[$uid])->fetchOne();echo json_encode(['state'=>$index->status($uid),'counts'=>$counts]),PHP_EOL;exit;}
if($action==='build'){
 $before=$index->status($uid);$start=microtime(true);$state=$index->configure($uid,true);echo json_encode(['event'=>'started','before'=>$before,'state'=>$state]),PHP_EOL;$batches=[];$index->statements=0;
 while($state['status']==='building'){$t=microtime(true);$state=$index->advance($uid,500);$batches[]=(microtime(true)-$t)*1000;if(count($batches)%10===0)echo json_encode(['event'=>'progress','processed'=>$state['processed'],'elapsedSeconds'=>microtime(true)-$start,'lastBatchMs'=>end($batches)]),PHP_EOL;}
 echo json_encode(['event'=>'complete','state'=>$state,'seconds'=>microtime(true)-$start,'batches'=>count($batches),'batchMs'=>$batches,'sqlStatements'=>$index->statements,'peakMemoryBytes'=>memory_get_peak_usage(true)]),PHP_EOL;exit;
}
if($action==='lookup'){
 $rows=$db->executeQuery('SELECT id FROM *PREFIX*library_items WHERE user_id = ? ORDER BY id',[$uid])->fetchAll();$all=array_map('intval',array_column($rows,'id'));$tests=[];$offsets=[0,(int)(count($all)/4),(int)(count($all)/2),max(0,count($all)-100)];
 foreach($offsets as $offset){foreach([1,100] as $size){$ids=array_slice($all,$offset,$size);$times=[];$counts=[];$index->statements=0;for($i=0;$i<10;$i++){$t=microtime(true);$result=$service->lookup($uid,$ids);$times[]=(microtime(true)-$t)*1000;$counts[]=array_sum(array_column((array)$result['items'],'count'));}sort($times);$tests[]=['offset'=>$offset,'books'=>count($ids),'firstId'=>$ids[0],'medianMs'=>($times[4]+$times[5])/2,'p95Ms'=>$times[9],'minMs'=>$times[0],'maxMs'=>$times[9],'matches'=>$counts,'indexSqlStatements'=>$index->statements];echo json_encode(end($tests)),PHP_EOL;}}
 echo json_encode(['event'=>'summary','catalogueBooks'=>count($all),'state'=>$index->status($uid),'tests'=>$tests,'peakMemoryBytes'=>memory_get_peak_usage(true)]),PHP_EOL;exit;
}
}catch(Throwable $e){fwrite(STDERR,get_class($e).': '.$e->getMessage().' at '.$e->getFile().':'.$e->getLine().PHP_EOL);exit(1);}
