<?php
// Loaded by the owned developer fixture after Nextcloud bootstrap.
declare(strict_types=1);
function checkAnalysis(bool $ok,string $message): void { if (!$ok) throw new RuntimeException($message); }
$analysis=\OC::$server->get(\OCA\Library\Service\InferenceAnalysisService::class);
$batches=\OC::$server->get(\OCA\Library\Service\InferenceBatchService::class);
$store=\OC::$server->get(\OCA\Library\Service\InferenceFolderRuleStore::class);
$cleanup=\OC::$server->get(\OCA\Library\Service\LibraryCleanupService::class);
$definition=['rootId'=>$state['rootId'],'folder'=>'','recursive'=>true,'mode'=>'pattern','pattern'=>'%folders%/%seriesNumber%_%title%.%extension%'];
$before=$batches->snapshot($user,$state['itemId']);
$job=$analysis->start($user,$definition); $id=$job['id'];
checkAnalysis($job['total']===83 && $job['processed']===0,'Entire indexed folder counted');
checkAnalysis($batches->snapshot($user,$state['itemId'])===$before,'Start is read-only');
try { $analysis->get('library-non-owner',$id); throw new RuntimeException('Cross-owner access accepted'); } catch (OutOfBoundsException) {}
try { $analysis->start($user,array_replace($definition,['folder'=>'../'])); throw new RuntimeException('Traversal accepted'); } catch (InvalidArgumentException) {}
$analysis->advance($user,$id,20); $first=$analysis->get($user,$id); checkAnalysis($first['processed']>0 && $first['processed']<=20,'Bounded progress '.json_encode([$first['processed'],$first['total'],$first['status']]));
$analysis->stop($user,$id); $analysis->advance($user,$id); $cancelled=$analysis->get($user,$id);
checkAnalysis($cancelled['status']==='cancelled' && $cancelled['processed']===$first['processed'],'Cancellation prevents further results');
checkAnalysis($batches->snapshot($user,$state['itemId'])===$before,'Cancelled analysis does not write metadata');
$analysis->discard($user,$id);
$job=$analysis->start($user,$definition); $id=$job['id'];
// Run the actual background worker without any browser polling.
$worker=\OC::$server->get(\OCA\Library\BackgroundJob\InferenceAnalysisJob::class);
for ($i=0;$i<6 && $analysis->get($user,$id)['status']==='running';$i++) $worker->run(['userId'=>$user,'id'=>$id,'cursor'=>0]);
$job=$analysis->get($user,$id); checkAnalysis($job['status']==='completed' && $job['processed']===83,'Background worker finishes entire folder '.json_encode([$job['status'],$job['processed'],$job['total']]));
checkAnalysis(count($job['items'])===40 && $job['hasNext'],'First result page bounded');
$second=$analysis->get($user,$id,2); $third=$analysis->get($user,$id,3);
checkAnalysis(count($second['items'])===40 && count($third['items'])===3 && !$third['hasNext'],'All 83 results reachable');
checkAnalysis(count(array_unique(array_column([...$job['items'],...$second['items'],...$third['items']],'id')))===83,'No duplicate or skipped pages');
checkAnalysis(($job['counts']['conflict']??0)===83,'Conflict summary covers whole folder');
checkAnalysis($analysis->get($user,$id,1,'unmatched')['items']===[],'Result status filtering');
$proposals=[];
foreach ($job['items'] as $entry) $proposals[]=['id'=>$entry['id'],'revision'=>$entry['revision'],'changes'=>['seriesNumber'=>array_values(array_filter($entry['changes'],fn($c)=>$c['field']==='seriesNumber'))[0]['value']]];
$plan=$batches->prepare($user,$proposals,json_encode(['analysisId'=>$id]));
$batches->mutate($user,$plan['id'],false);
checkAnalysis($items->findItem($user,$state['itemId'])['seriesNumber']==='01','Reviewed first page applied');
checkAnalysis($analysis->get($user,$id)['items'][0]['status']==='unavailable','Changed result cannot be applied again');
checkAnalysis($items->findItem($user,$second['items'][0]['id'])['seriesNumber']==='' ,'Later page untouched');
$batches->mutate($user,$plan['id'],true); checkAnalysis($batches->snapshot($user,$state['itemId'])===$before,'Exact Undo for approved page');
// Changing an item after analysis blocks prepare, before any metadata is written.
$items->applyBatchMetadataEdit($user,[$state['itemId']],'genre','Later analysis edit');
try { $batches->prepare($user,[$proposals[0]],''); throw new RuntimeException('Stale analysis accepted'); } catch (DomainException) {}
$items->resetFieldToScannerCandidate($user,$state['itemId'],'genre');
$analysis->discard($user,$id);
// Direct children only: books are nested three levels below the root.
$empty=$analysis->start($user,array_replace($definition,['recursive'=>false])); checkAnalysis($empty['total']===0 && $empty['status']==='completed','Nonrecursive folder scope'); $analysis->discard($user,$empty['id']);
// Root folder assignments are server-owned, with deeper rules winning and frozen definitions.
$rootFile=$folder->getId(); $child=$folder->get('Science fiction/Orchard Notes');
$outer=$store->save($user,['version'=>1,'rootId'=>$state['rootId'],'rootFileId'=>$rootFile,'folderFileId'=>$rootFile,'folder'=>'','recursive'=>true,'definition'=>['id'=>'outer','kind'=>'pattern','name'=>'Outer author','pattern'=>'%folders%/%author%.%extension%']]);
$inner=$store->save($user,['version'=>1,'rootId'=>$state['rootId'],'rootFileId'=>$rootFile,'folderFileId'=>$child->getId(),'folder'=>'Science fiction/Orchard Notes','recursive'=>true,'definition'=>['id'=>'inner','kind'=>'pattern','name'=>'Inner title','pattern'=>'%seriesNumber%_%title%.%extension%']]);
try {
 $nested=$analysis->start($user,array_replace($definition,['mode'=>'folders'])); $store->delete($user,$inner['id']);
 $analysis->advance($user,$nested['id'],1); $entry=$analysis->get($user,$nested['id'])['items'][0];
 checkAnalysis(!in_array('author',array_column($entry['changes'],'field'),true) && in_array('seriesNumber',array_column($entry['changes'],'field'),true),'Frozen deepest folder rule wins');
 $analysis->discard($user,$nested['id']);
} finally { $store->delete($user,$inner['id']); $store->delete($user,$outer['id']); }
// History quota and expired results cleanup remain private and bounded.
$quota=[]; for ($i=0;$i<5;$i++) $quota[]=$analysis->start($user,$definition)['id'];
try { $analysis->start($user,$definition); throw new RuntimeException('History quota exceeded'); } catch (InvalidArgumentException $e) { checkAnalysis($e->getMessage()==='analysis_history_limit','Explicit quota error'); }
$analysis->advance($user,$quota[0],1); $q=$db->getQueryBuilder(); $q->update('library_infer_jobs')->set('expires_at',$q->createNamedParameter(1))->where($q->expr()->eq('id',$q->createNamedParameter($quota[0])))->executeStatement();
$cleanup->expireAnalyses();
$q=$db->getQueryBuilder(); $r=$q->select($q->func()->count('*','n'))->from('library_infer_results')->where($q->expr()->eq('job_id',$q->createNamedParameter($quota[0])))->executeQuery(); checkAnalysis((int)$r->fetchOne()===0,'Expired result cleanup'); $r->closeCursor();
foreach (array_slice($quota,1) as $quotaId) $analysis->discard($user,$quotaId);
foreach ($child->getDirectoryListing() as $source) checkAnalysis(hash('sha256',$source->getContent())===$state['sha256'],'Source file unchanged');
echo json_encode(['entireFolder83'=>true,'boundedProgress'=>true,'cancel'=>true,'ownership'=>true,'pathValidation'=>true,'workerWithoutBrowser'=>true,'threePages'=>true,'noDuplicates'=>true,'filter'=>true,'approved40Apply'=>true,'laterPageUntouched'=>true,'exactUndo'=>true,'staleRejected'=>true,'nonrecursive'=>true,'nestedFrozenRules'=>true,'historyQuota'=>true,'expiryCleanup'=>true,'sourceFilesUnchanged'=>true]),PHP_EOL;
