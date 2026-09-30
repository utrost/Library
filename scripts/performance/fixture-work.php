<?php
// Included by the owned duplicate fixture after bootstrap. Mutations touch only its disposable account.
require '/tmp/library-performance-sql-profiler.php';
$connection=libraryBenchmarkConnection();$config=$connection->getConfiguration();
function fixtureMeasure(string $label,callable $fn):mixed{global $connection,$config;$logger=new LibraryBenchmarkSql();$config->setSQLLogger($logger);$start=hrtime(true);if(function_exists('memory_reset_peak_usage'))memory_reset_peak_usage();try{return $fn();}finally{$ms=(hrtime(true)-$start)/1e6;$config->setSQLLogger(null);echo json_encode(['label'=>$label,'ms'=>$ms,'peakMemoryBytes'=>memory_get_peak_usage(true),'sql'=>$logger->summary($connection,true)]),PHP_EOL;}}
// Expand the disposable fixture to the normal 40-book metadata review batch size.
for($i=14;$i<40;$i++)$folder->newFile('benchmark-'.$i.'.epub',epub('Benchmark title '.$i,'Benchmark Author'));
\OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan($user,$state['rootId']);
$r=$db->executeQuery('SELECT i.id FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=? AND f.root_id=?',[$user,$state['rootId']]);$ids=array_map('intval',array_column($r->fetchAll(),'id'));$r->closeCursor();
$lists=\OC::$server->get(\OCA\Library\Service\PersonalListService::class);$batches=\OC::$server->get(\OCA\Library\Service\InferenceBatchService::class);$analysis=\OC::$server->get(\OCA\Library\Service\InferenceAnalysisService::class);$index=\OC::$server->get(\OCA\Library\Service\DuplicateIndexService::class);
$index->configure($user,true);$index->advance($user);
$scan=fixtureMeasure('unchanged_scan_40',fn()=>\OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan($user,$state['rootId']));echo json_encode(['scanMetrics'=>array_intersect_key($scan,array_flip(['indexed','metadataExtractions','fingerprintSkips','itemRefreshes','filesMissing']))]),PHP_EOL;
$list=fixtureMeasure('list_create',fn()=>$lists->create($user,'Performance fixture',''));
try{
 fixtureMeasure('list_add_40',fn()=>$lists->add($user,$list['id'],$list['revision'],$ids));
 fixtureMeasure('list_index',fn()=>$lists->lists($user));$page=fixtureMeasure('list_page',fn()=>$lists->page($user,$list['id']));
 $current=$lists->find($user,$list['id']);$entry=$page['entries'][0]['id'];
 fixtureMeasure('list_note',fn()=>$lists->note($user,$list['id'],$current['revision'],$entry,'Performance note'));
 $current=$lists->find($user,$list['id']);fixtureMeasure('list_move',fn()=>$lists->move($user,$list['id'],$current['revision'],$entry,null,'down'));
}finally{$current=$lists->find($user,$list['id']);$lists->delete($user,$list['id'],$current['revision']);}
$proposals=[];foreach($ids as $id)$proposals[]=['id'=>$id,'revision'=>\OCA\Library\Service\InferenceChangeSet::fingerprint($batches->snapshot($user,$id)),'changes'=>['genre'=>'Benchmark genre']];
$batch=fixtureMeasure('metadata_prepare_40',fn()=>$batches->prepare($user,$proposals,'Performance fixture'));
fixtureMeasure('metadata_apply_40',fn()=>$batches->mutate($user,$batch['id'],false));fixtureMeasure('metadata_undo_40',fn()=>$batches->mutate($user,$batch['id'],true));$batches->discard($user,$batch['id']);
$job=fixtureMeasure('inference_start_40',fn()=>$analysis->start($user,['rootId'=>$state['rootId'],'folder'=>'','recursive'=>true,'mode'=>'pattern','pattern'=>'%folders%/%title%.%extension%']));
fixtureMeasure('inference_analyse_40',function()use($analysis,$user,$job,$db){for($n=0;$n<10;$n++){$analysis->advance($user,$job['id'],20);$r=$db->executeQuery('SELECT status FROM *PREFIX*library_infer_jobs WHERE id=? AND user_id=?',[$job['id'],$user]);$status=$r->fetchOne();$r->closeCursor();if($status==='completed')return;}throw new RuntimeException('Analysis did not complete');});fixtureMeasure('inference_results_40',fn()=>$analysis->get($user,$job['id']));$analysis->discard($user,$job['id']);
foreach([false,true] as $contents){$job=fixtureMeasure('duplicates_start_'.($contents?'hash':'metadata'),fn()=>$duplicates->start($user,$state['rootId'],$contents));fixtureMeasure('duplicates_complete_'.($contents?'hash':'metadata'),function()use($duplicates,$user,$job){for($i=0;$i<40&&$duplicates->get($user,$job['id'])['status']==='running';$i++)$duplicates->advance($user,$job['id'],100);});$duplicates->discard($user,$job['id']);}

// Setup outside timing: representative high list count, 150 lists × 40 entries.
$r=$db->executeQuery('SELECT i.id,f.file_id FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=?',[$user]);$books=$r->fetchAll();$r->closeCursor();
$db->beginTransaction();
try{for($n=0;$n<150;$n++){$l=$lists->create($user,'Scale list '.$n,'');$values=[];$params=[];foreach($books as $pos=>$book){$values[]='(?,?,?,?,?,?)';array_push($params,$l['id'],(int)$book['id'],(int)$book['file_id'],$pos+1,'',time());}$db->executeStatement('INSERT INTO *PREFIX*library_list_entries (list_id,item_id,file_id,position,note,created_at) VALUES '.implode(',',$values),$params);}$db->commit();}catch(\Throwable $e){$db->rollBack();throw $e;}
fixtureMeasure('list_index_150_lists_6000_entries',fn()=>$lists->lists($user));fixtureMeasure('list_membership_150_lists',fn()=>$lists->lists($user,$ids[0]));fixtureMeasure('list_page_150_lists',fn()=>$lists->page($user,$l['id']));
