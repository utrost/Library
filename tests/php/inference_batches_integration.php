<?php
// Included only by the owned metadata smoke fixture after Nextcloud bootstrap.
$batches = \OC::$server->get(\OCA\Library\Service\InferenceBatchService::class);
$changes = \OCA\Library\Service\InferenceChangeSet::class;
function ensure(bool $ok, string $message): void { if (!$ok) throw new RuntimeException($message); }
function rejected(callable $fn, string $class): void { try { $fn(); } catch (Throwable $e) { ensure($e instanceof $class, 'Wrong rejection: '.get_class($e)); return; } throw new RuntimeException('Unsafe operation accepted'); }
$proposal = fn(int $id, array $values) => ['id'=>$id,'revision'=>$changes::fingerprint($batches->snapshot($user,$id)),'changes'=>$values];
$id = (int)$state['itemId'];
$original = $batches->snapshot($user,$id);
$p = $batches->prepare($user,[$proposal($id,['series'=>'Integration series','seriesNumber'=>'01','genre'=>'Integration genre','subject'=>'Science; history','year'=>'2011'])],'integration test');
ensure(count($p['entries'][0]['changes'])===5,'Full review');
rejected(fn()=>$batches->mutate('not-the-owner',$p['id'],false),OutOfBoundsException::class);
rejected(fn()=>$batches->get('not-the-owner',$p['id']),OutOfBoundsException::class);
$batches->mutate($user,$p['id'],false);
$after = $batches->snapshot($user,$id);
ensure($after['state']['series_name']==='Integration series' && $after['state']['series_number']==='01','Applied values');
ensure($after['state']['subjects_json']==='["Science; history"]','Subjects are one explicit label');
ensure(str_contains($after['state']['field_sources'],'path-inference'),'Source provenance');
ensure($batches->mutate($user,$p['id'],false)['status']==='applied','Apply retry');
$batches->mutate($user,$p['id'],true);
ensure($batches->snapshot($user,$id)===$original,'Exact undo values and provenance');
ensure($batches->mutate($user,$p['id'],true)['status']==='undone','Undo retry');
rejected(fn()=>$batches->mutate($user,$p['id'],false),DomainException::class);
// Structured names survive comma and semicolon punctuation, preserve order and exact deduplication.
ensure($items->findItem($user,$id)['authors']===['Ada Quill'],'EPUB individual creators retained');
$authorOriginal = $batches->snapshot($user,$id);
$names = ['Abercrombie, Joe','Elizabeth Bear','A; B','Elizabeth Bear'];
$p = $batches->prepare($user,[$proposal($id,['author'=>$names])],'ordered author test');
$batches->mutate($user,$p['id'],false);
ensure($items->findItem($user,$id)['authors']===['Abercrombie, Joe','Elizabeth Bear','A; B'],'Ordered author identities');
$authorQueryMs=[];
foreach (['Abercrombie, Joe','Elizabeth Bear','A; B'] as $name) {
    $start=hrtime(true);
    $found=$items->queryCatalogue($user,['creator'=>$name,'shelf'=>$state['name']],[],false);
    $authorQueryMs[]=(hrtime(true)-$start)/1e6;
    ensure(in_array($id,array_column($found['items'],'id'),true),'Individual author filter: '.$name);
}
ensure(in_array('Elizabeth Bear',$items->creatorSuggestions($user,['shelf'=>$state['name']],'Elizabeth'),true),'Individual suggestion');
$legacy = $items->queryCatalogue($user,['creator'=>'Abercrombie, Joe; Elizabeth Bear; A; B','shelf'=>$state['name']],[],false);
ensure(in_array($id,array_column($legacy['items'],'id'),true),'Legacy full-field saved filter');
$batches->mutate($user,$p['id'],true);
ensure($batches->snapshot($user,$id)===$authorOriginal,'Exact author Undo');
$items->applyBatchMetadataEdit($user,[$id],'creators','Surname, Given; Second Author');
ensure($items->findItem($user,$id)['authors']===['Surname, Given','Second Author'],'Manual editor semicolon convention');
ensure(in_array('Second Author',$items->creatorSuggestions($user,['shelf'=>$state['name']],'Second'),true),'Bulk edit author index updated');
ensure($items->resetFieldToScannerCandidate($user,$id,'creators'),'Scanner creator reset');
ensure($items->findItem($user,$id)['authors']===['Ada Quill'],'Scanner reset restores structured names');
ensure(!in_array('Second Author',$items->creatorSuggestions($user,['shelf'=>$state['name']],'Second'),true),'Scanner reset removes stale author index');
// Structured-only JSON edits do not require a delimiter roundtrip.
$payload=json_encode(['cachedPath'=>$items->findItem($user,$id)['cachedPath'],'authors'=>['A; B','Surname, Given']]);
ensure($items->applyCorrectedMetadataImport($user,$payload)['appliedItems']===1,'Structured import');
ensure($items->findItem($user,$id)['authors']===['A; B','Surname, Given'],'Structured import preserves punctuation');
$items->resetFieldToScannerCandidate($user,$id,'creators');
// Undo must not overwrite a later edit, even when timestamps share a second.
$p = $batches->prepare($user,[$proposal($id,['series'=>'Before later edit'])],'undo conflict');
$batches->mutate($user,$p['id'],false);
$items->applyBatchMetadataEdit($user,[$id],'genre','Later manual edit after Apply');
rejected(fn()=>$batches->mutate($user,$p['id'],true),DomainException::class);
ensure($items->findItem($user,$id)['genre']==='Later manual edit after Apply','Later edit preserved');
$stale = $proposal($id,['series'=>'Stale proposal']);
$items->applyBatchMetadataEdit($user,[$id],'series','Changed after preview');
rejected(fn()=>$batches->prepare($user,[$stale],''),DomainException::class);
rejected(fn()=>$batches->prepare($user,[$proposal($id,['author'=>'Joe'])],''),InvalidArgumentException::class);
rejected(fn()=>$batches->prepare($user,[$proposal($id,['seriesNumber'=>str_repeat('x',65)])],''),InvalidArgumentException::class);
// Second owned file proves transaction rollback after the first row has been written.
$second = $folder->get('Science fiction/Orchard Notes')->newFile('02_Second.epub',$file->getContent());
$scanner->scan($user,(int)$state['rootId']);
$qb = $db->getQueryBuilder();
$id2 = (int)$qb->select('i.id')->from('library_items','i')->innerJoin('i','library_files','f',$qb->expr()->eq('i.library_file_id','f.id'))->where($qb->expr()->eq('f.file_id',$qb->createNamedParameter($second->getId())))->andWhere($qb->expr()->eq('i.user_id',$qb->createNamedParameter($user)))->executeQuery()->fetchOne();
ensure($id2 > $id,'Second fixture indexed');
$firstBefore = $batches->snapshot($user,$id);
$indexSnapshot = function() use ($db,$user,$id): array {
    $data=[];
    foreach (['library_item_facets','library_item_search_grams'] as $table) {
        $q=$db->getQueryBuilder();$result=$q->select('*')->from($table)->where($q->expr()->eq('user_id',$q->createNamedParameter($user)))->andWhere($q->expr()->eq('item_id',$q->createNamedParameter($id)))->orderBy('id','ASC')->executeQuery();
        $data[$table]=$result->fetchAll();$result->closeCursor();
    }
    return $data;
};
$indexBefore=$indexSnapshot();
$p = $batches->prepare($user,[$proposal($id,['title'=>'Atomic first','publisher'=>'Atomic publisher']),$proposal($id2,['series'=>'Atomic second'])],'rollback');
$items->applyBatchMetadataEdit($user,[$id2],'genre','Intervening change');
rejected(fn()=>$batches->mutate($user,$p['id'],false),DomainException::class);
ensure($batches->snapshot($user,$id)===$firstBefore,'First item rolled back');
ensure($indexSnapshot()===$indexBefore,'Derived indexes rolled back');
ensure($batches->get($user,$p['id'])['status']==='prepared','Batch status rolled back');
// Moving the file prevents both application and history disclosure of its old path.
$p = $batches->prepare($user,[$proposal($id2,['series'=>'Moved file'])],'moved');
$second->move($folder->getPath().'/Moved.epub');
rejected(fn()=>$batches->mutate($user,$p['id'],false),OutOfBoundsException::class);
rejected(fn()=>$batches->get($user,$p['id']),OutOfBoundsException::class);
// Accepted values survive forced metadata extraction.
$p = $batches->prepare($user,[$proposal($id,['series'=>'Survives scan','seriesNumber'=>'2.5','author'=>['Protected, Author','Another Person']])],'rescan');
$batches->mutate($user,$p['id'],false);
$q=$db->getQueryBuilder();$q->update('library_files')->set('metadata_extractor_revision',$q->createNamedParameter('force-smoke'))->where($q->expr()->eq('file_id',$q->createNamedParameter($file->getId())))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($user)))->executeStatement();
$scan=$scanner->scan($user,(int)$state['rootId']);
ensure($scan['metadataExtractions']>=1,'Scanner ran');
ensure($items->findItem($user,$id)['series']==='Survives scan' && $items->findItem($user,$id)['seriesNumber']==='2.5','Accepted values survive scan');
ensure($items->findItem($user,$id)['authors']===['Protected, Author','Another Person'],'Accepted authors survive scan');
// Expiry is enforced server-side.
$p = $batches->prepare($user,[$proposal($id,['series'=>'Expired'])],'expired');
$qb=$db->getQueryBuilder();$qb->update('library_inference_batches')->set('expires_at',$qb->createNamedParameter(time()-1))->where($qb->expr()->eq('id',$qb->createNamedParameter($p['id'])))->executeStatement();
rejected(fn()=>$batches->mutate($user,$p['id'],false),DomainException::class);
// A transaction-only dataset exercises the >500 candidate branch without truncation or persistent fixtures.
$q=$db->getQueryBuilder(); $itemTemplate=$q->select('*')->from('library_items')->where($q->expr()->eq('id',$q->createNamedParameter($id)))->executeQuery()->fetch();
$q=$db->getQueryBuilder(); $fileTemplate=$q->select('*')->from('library_files')->where($q->expr()->eq('id',$q->createNamedParameter((int)$itemTemplate['library_file_id'])))->executeQuery()->fetch();
unset($itemTemplate['id'],$fileTemplate['id']); $manyAuthor='Bounded author '.bin2hex(random_bytes(6)); $fileBase=random_int(1000000000,2000000000);
$db->beginTransaction();
try {
    for ($n=0;$n<501;$n++) {
        $f=$fileTemplate; $f['file_id']=$fileBase+$n; $f['cached_path']='/'.$state['name'].'/Bounded-'.$n.'.txt';
        $q=$db->getQueryBuilder(); $q->insert('library_files')->values(array_map(fn($v)=>$q->createNamedParameter($v),$f))->executeStatement(); $fId=(int)$db->lastInsertId('library_files');
        $i=$itemTemplate; $i['library_file_id']=$fId; $i['title']='Bounded '.$n; $i['creators']=$n%2===0?$manyAuthor:$manyAuthor.'; Other'; $i['authors_json']=json_encode([$manyAuthor,'Other']);
        $q=$db->getQueryBuilder(); $q->insert('library_items')->values(array_map(fn($v)=>$q->createNamedParameter($v),$i))->executeStatement(); $iId=(int)$db->lastInsertId('library_items');
        $q=$db->getQueryBuilder(); $q->insert('library_item_facets')->values(array_map(fn($v)=>$q->createNamedParameter($v),['item_id'=>$iId,'user_id'=>$user,'facet_type'=>'creator','facet_value'=>$manyAuthor,'normalized_value'=>mb_strtolower($manyAuthor)]))->executeStatement();
    }
    ensure($items->countCatalogue($user,['creator'=>$manyAuthor])===501,'Large author set complete and deduplicated');
    ensure($items->countCatalogue('not-the-owner',['creator'=>$manyAuthor])===0,'Large author set ownership');
} finally { $db->rollBack(); }
ensure(hash('sha256',$file->getContent())===$state['sha256'],'Original fixture bytes unchanged');
echo json_encode(['integration'=>true,'exactUndo'=>true,'ownership'=>true,'stalePreview'=>true,'laterEditUndoBlocked'=>true,'atomicRollback'=>true,'derivedIndexRollback'=>true,'rescanProtection'=>true,'movedFileBlocked'=>true,'expiry'=>true,'idempotentRetries'=>true,'sourceUnchanged'=>true,'orderedAuthors'=>true,'individualAuthorFilter'=>true,'legacyCreatorFilter'=>true,'authorSuggestions'=>true,'authorUndo'=>true,'authorReset'=>true,'authorImport'=>true,'authorRescanProtection'=>true,'authorQueryMs'=>$authorQueryMs,'largeAuthorCandidateSet'=>true]);
