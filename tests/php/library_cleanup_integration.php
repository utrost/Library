<?php
// Explicitly disposable users; exercise the real account deletion event and cron cleanup.
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
function verify(bool $value, string $message): void { if (!$value) throw new RuntimeException($message); }
$manager = \OC::$server->get(\OCP\IUserManager::class);
$db = \OC::$server->get(\OCP\IDBConnection::class);
$config = \OC::$server->get(\OCP\IConfig::class);
$jobs = \OC::$server->get(\OCP\BackgroundJob\IJobList::class);
$cleanup = \OC::$server->get(\OCA\Library\Service\LibraryCleanupService::class);
$prefix = 'library-cleanup-smoke-'.bin2hex(random_bytes(6));
$owned = []; $listIds = []; $failed = false;
$tables = ['library_dup_state','library_dup_index','library_dup_terms','library_dup_hints','library_dup_jobs','library_dup_books','library_dup_keys','library_dup_pairs','library_dup_choices','library_infer_jobs','library_infer_results','library_roots','library_files','library_items','library_item_facets','library_item_search_grams','library_item_identifiers','library_scan_jobs','library_saved_collections','library_lists','library_inference_batches'];
$count = function(string $table, string $uid) use ($db): int {
    $q=$db->getQueryBuilder(); $r=$q->selectAlias($q->createFunction('COUNT(*)'),'n')->from($table)->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->executeQuery(); $n=(int)$r->fetchOne(); $r->closeCursor(); return $n;
};
try {
    foreach (['a','b'] as $suffix) {
        $uid=$prefix.'-'.$suffix; verify(!$manager->userExists($uid),'Unique disposable user');
        $account=$manager->createUser($uid,bin2hex(random_bytes(24))); verify($account!==false,'Disposable user created'); $owned[$uid]=$account;
        $folder=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid)->newFolder('Cleanup fixture');
        $file=$folder->newFile('Ada Quill - Small book.txt','Private disposable fixture');
        $root=\OC::$server->get(\OCA\Library\Service\RootService::class)->saveRoot($uid,'/Cleanup fixture','Cleanup fixture',true);
        $q=$db->getQueryBuilder(); $q->insert('library_files')->values(array_map(fn($v)=>$q->createNamedParameter($v),['user_id'=>$uid,'root_id'=>$root['id'],'file_id'=>$file->getId(),'cached_path'=>'/Cleanup fixture/Ada Quill - Small book.txt','mime_type'=>'text/plain','extension'=>'txt','etag'=>$file->getEtag(),'mtime'=>$file->getMTime(),'size'=>$file->getSize(),'scan_status'=>'indexed','last_scanned_at'=>time(),'created_at'=>time(),'updated_at'=>time()]))->executeStatement();
        $fileRow=['id'=>(int)$db->lastInsertId('library_files'),'cachedPath'=>'/Cleanup fixture/Ada Quill - Small book.txt','extension'=>'txt'];
        $items=\OC::$server->get(\OCA\Library\Service\ItemService::class); $items->ensureItemForFile($uid,$fileRow,['title'=>'Cleanup book','creators'=>'Ada Quill','subjects'=>['Fixture'],'identifiers'=>[['scheme'=>'isbn','displayValue'=>'9780306406157']]]);
        $q=$db->getQueryBuilder(); $id=(int)$q->select('id')->from('library_items')->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->executeQuery()->fetchOne();
        $lists=\OC::$server->get(\OCA\Library\Service\PersonalListService::class); $list=$lists->create($uid,'Private list','Note'); $listIds[$uid]=$list['id']; $lists->add($uid,$list['id'],$list['revision'],[$id]);
        \OC::$server->get(\OCA\Library\Service\SavedCollectionService::class)->saveCollection($uid,'Saved filter',['creator'=>'Ada Quill']);
        $scan=\OC::$server->get(\OCA\Library\Service\ScanJobService::class)->queueJob($uid,'root',$root['id']);
        $argument=['userId'=>$uid,'jobId'=>$scan['id'],'rootId'=>$root['id']]; $jobs->add(\OCA\Library\BackgroundJob\ScanJob::class,$argument);
        $q=$db->getQueryBuilder(); $q->insert('library_inference_batches')->values(array_map(fn($v)=>$q->createNamedParameter($v),['id'=>bin2hex(random_bytes(16)),'user_id'=>$uid,'status'=>'prepared','payload'=>'{}','created_at'=>time(),'expires_at'=>time()+1800]))->executeStatement();
        $config->setUserValue($uid,'library','inference_pattern_fixture','{}');
        $analysis=\OC::$server->get(\OCA\Library\Service\InferenceAnalysisService::class);
        $analysisJob=$analysis->start($uid,['rootId'=>$root['id'],'folder'=>'','recursive'=>true,'mode'=>'pattern','pattern'=>'%folders%/%title%.%extension%']); $analysis->advance($uid,$analysisJob['id'],1);
        $duplicates=\OC::$server->get(\OCA\Library\Service\DuplicateService::class);
        $duplicateJob=$duplicates->start($uid,$root['id'],false); $duplicates->advance($uid,$duplicateJob['id'],1);
        foreach (['library_dup_pairs'=>['job_id'=>$duplicateJob['id'],'user_id'=>$uid,'pair_id'=>str_repeat('a',64),'signature'=>str_repeat('b',64),'decision'=>'keep','payload'=>'{}'], 'library_dup_choices'=>['user_id'=>$uid,'signature'=>str_repeat('b',64),'decision'=>'keep','preferred_id'=>0,'updated_at'=>time()]] as $table=>$values) { $q=$db->getQueryBuilder(); $q->insert($table)->values(array_map(fn($v)=>$q->createNamedParameter($v),$values))->executeStatement(); }
        $index=\OC::$server->get(\OCA\Library\Service\DuplicateIndexService::class);$index->configure($uid,true);$index->advance($uid);
        $q=$db->getQueryBuilder();$q->insert('library_dup_hints')->values(array_map(fn($v)=>$q->createNamedParameter($v),['user_id'=>$uid,'left_id'=>$id,'right_id'=>$id+1,'signature'=>str_repeat('c',64),'decision'=>'keep','preferred_id'=>0]))->executeStatement();
        foreach ($tables as $table) verify($count($table,$uid)>0,'Seeded '.$table);
    }
    $a=$prefix.'-a'; $b=$prefix.'-b';
    // Bounded legacy migration: unknown conventions stay opaque; trusted extractor semicolons split.
    $q=$db->getQueryBuilder(); $bId=(int)$q->select('id')->from('library_items')->where($q->expr()->eq('user_id',$q->createNamedParameter($b)))->executeQuery()->fetchOne();
    $suggestions=\OC::$server->get(\OCA\Library\Service\DuplicateSuggestionService::class);
    $lookup=$suggestions->lookup($a,[$bId]); verify(((array)$lookup['items'])[$bId]['status']==='unavailable','Foreign owned book is unavailable to enabled account');
    $index->configure($b,false); $lookup=$suggestions->lookup($b,[$bId]); verify(!$lookup['enabled'] && !(array)$lookup['items'],'Disabled account does no lookups');
    $index->configure($b,true);$index->advance($b);
    $before=$items->findItem($b,$bId); $searchBefore=$count('library_item_search_grams',$b);
    $q=$db->getQueryBuilder(); $q->update('library_items')->set('authors_json',$q->createNamedParameter(null))->set('creators',$q->createNamedParameter('Surname, Given & Other'))->set('user_edited',$q->createNamedParameter(1))->where($q->expr()->eq('id',$q->createNamedParameter($bId)))->executeStatement();
    verify($items->backfillAuthors(1,$b)===1,'Bounded legacy backfill');
    verify($items->findItem($b,$bId)['authors']===['Surname, Given & Other'],'Opaque legacy name preserved');
    verify($items->findItem($b,$bId)['fieldSources']===$before['fieldSources'],'Backfill preserves provenance');
    verify($items->findItem($b,$bId)['subjects']===$before['subjects'],'Backfill preserves subjects');
    verify($count('library_item_search_grams',$b)===$searchBefore,'Backfill leaves search index intact');
    $q=$db->getQueryBuilder(); $q->update('library_items')->set('authors_json',$q->createNamedParameter(null))->set('creators',$q->createNamedParameter('First, Person; Second'))->set('user_edited',$q->createNamedParameter(0))->set('field_sources',$q->createNamedParameter('{"creators":"epub-opf"}'))->where($q->expr()->eq('id',$q->createNamedParameter($bId)))->executeStatement();
    verify($items->backfillAuthors(1,$b)===1,'Trusted legacy backfill');
    verify($items->findItem($b,$bId)['authors']===['First, Person','Second'],'Trusted semicolon convention');
    verify($items->backfillAuthors(1,$b)===0,'Backfill idempotent');
    $otherBefore=[]; foreach ($tables as $table) $otherBefore[$table]=$count($table,$b);
    // Real deletion triggers Application's registered UserDeletedListener.
    verify($owned[$a]->delete(),'Deleted disposable account'); unset($owned[$a]);
    foreach ($tables as $table) { verify($count($table,$a)===0,'Removed '.$table); verify($count($table,$b)===$otherBefore[$table],'Other user preserved '.$table); }
    $q=$db->getQueryBuilder(); verify((int)$q->selectAlias($q->createFunction('COUNT(*)'),'n')->from('library_list_entries')->where($q->expr()->eq('list_id',$q->createNamedParameter($listIds[$a])))->executeQuery()->fetchOne()===0,'List entries removed');
    foreach ($jobs->getJobsIterator(\OCA\Library\BackgroundJob\ScanJob::class,null,0) as $job) verify(($job->getArgument()['userId']??'')!==$a,'Scoped queued scan removed');
    foreach ($jobs->getJobsIterator(\OCA\Library\BackgroundJob\InferenceAnalysisJob::class,null,0) as $job) verify(($job->getArgument()['userId']??'')!==$a,'Scoped queued analysis removed');
    foreach ($jobs->getJobsIterator(\OCA\Library\BackgroundJob\DuplicateJob::class,null,0) as $job) verify(($job->getArgument()['userId']??'')!==$a,'Scoped queued duplicate scan removed');
    verify($config->getUserValue($a,'library','inference_pattern_fixture','')==='','Private preference removed');
    // Global expiry leaves unexpired records and catalogue metadata intact.
    $q=$db->getQueryBuilder(); $q->insert('library_inference_batches')->values(array_map(fn($v)=>$q->createNamedParameter($v),['id'=>bin2hex(random_bytes(16)),'user_id'=>$b,'status'=>'undone','payload'=>'{}','created_at'=>time(),'expires_at'=>1]))->executeStatement();
    verify($cleanup->expireHistory(1)===1,'Bounded expiry run'); verify($count('library_inference_batches',$b)===1,'Unexpired history retained'); verify($count('library_items',$b)===$otherBefore['library_items'],'Metadata unchanged');
    echo json_encode(['accountDeletionEvent'=>true,'allAppTables'=>true,'listEntries'=>true,'preferences'=>true,'scopedQueuedScans'=>true,'otherUserPreserved'=>true,'boundedExpiry'=>true,'unexpiredHistoryPreserved'=>true,'boundedAuthorBackfill'=>true,'opaqueLegacyNames'=>true,'trustedSemicolonConvention'=>true,'backfillPreservesOtherIndexes'=>true]),PHP_EOL;
} catch (Throwable $e) { fwrite(STDERR,get_class($e).': '.$e->getMessage().' line '.$e->getLine().PHP_EOL); $failed = true; }
finally {
    foreach ($owned as $uid=>$account) {
        if (str_starts_with($uid,$prefix.'-')) { $cleanup->deleteAccount($uid); $account->delete(); }
    }
}

if ($failed) exit(1);
