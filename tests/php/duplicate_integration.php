<?php
// Loaded only by duplicate-books-fixture.php inside the developer instance.
declare(strict_types=1);
$count=0;function dupCheck(bool $ok,string $message):void {global $count;if(!$ok)throw new RuntimeException($message);$count++;}
$all=function($id)use($duplicates,$user){$pairs=[];$page=1;do{$result=$duplicates->get($user,$id,$page++,'all');$pairs=[...$pairs,...$result['pairs']];}while($result['hasNext']);return $pairs;};
$finish=function($id)use($duplicates,$user){for($i=0;$i<30&&$duplicates->get($user,$id)['status']==='running';$i++)$duplicates->advance($user,$id,100);dupCheck($duplicates->get($user,$id)['status']==='completed','Scan completed');};
$job=$duplicates->start($user,$state['rootId'],true);$id=$job['id'];dupCheck($job['total']===14,'All 14 fixture books counted');
try{$duplicates->get('library-non-owner',$id);throw new RuntimeException('Cross-owner access accepted');}catch(OutOfBoundsException){}
$duplicates->advance($user,$id,2);dupCheck($duplicates->get($user,$id)['processed']>=2,'Bounded progress');$duplicates->stop($user,$id);$duplicates->advance($user,$id);dupCheck($duplicates->get($user,$id)['status']==='cancelled','Cancellation');$duplicates->discard($user,$id);
$job=$duplicates->start($user,$state['rootId'],true);$id=$job['id'];$finish($id);$pairs=$all($id);dupCheck(count($pairs)>10,'Pagination');dupCheck(count(array_unique(array_column($pairs,'id')))===count($pairs),'No repeated pairs');
$find=function($left,$right)use($state){return static fn($pair)=>in_array($state['files'][$left]['itemId'],array_column($pair['books'],'id'),true)&&in_array($state['files'][$right]['itemId'],array_column($pair['books'],'id'),true);};
$pick=function($left,$right)use($pairs,$find){$matching=array_values(array_filter($pairs,$find($left,$right)));dupCheck(count($matching)===1,"Found comparison $left / $right");return $matching[0];};
$exact=$pick('original.epub','renamed.epub');dupCheck(in_array('identical',$exact['reasons'],true),'Identical contents despite unrelated catalogue metadata');
$alternative=$pick('original.epub','alternative.pdf');dupCheck(in_array('formats',$alternative['flags'],true)&&!in_array('identical',$alternative['reasons'],true),'PDF alternative not identical');
$near=$pick('original.epub','near.epub');dupCheck(in_array('similar_title_author',$near['reasons'],true),'Near title and reversed author');
$edition=$pick('original.epub','edition.epub');dupCheck(in_array('languages',$edition['flags'],true)&&in_array('years',$edition['flags'],true),'Different language/year flagged');
$isbn=$pick('isbn-one.epub','isbn-two.epub');dupCheck(in_array('isbn',$isbn['reasons'],true),'Valid ISBN matching');
$unrelated=$state['files']['unrelated.epub']['itemId'];dupCheck(count(array_filter($pairs,fn($p)=>in_array($unrelated,array_column($p['books'],'id'),true)))===0,'Equal-size unrelated content does not match');
try{$duplicates->decide($user,$id,$exact['id'],$exact['signature'],'preferred',-1);throw new RuntimeException('Invalid preference accepted');}catch(InvalidArgumentException){}
$duplicates->decide($user,$id,$exact['id'],$exact['signature'],'preferred',$exact['books'][0]['id']);dupCheck($duplicates->get($user,$id,1,'preferred')['pairs'][0]['preferredId']===$exact['books'][0]['id'],'Preference saved');
$duplicates->decide($user,$id,$alternative['id'],$alternative['signature'],'keep',0);$duplicates->decide($user,$id,$isbn['id'],$isbn['signature'],'dismissed',0);dupCheck(count($duplicates->get($user,$id,1,'keep')['pairs'])===1,'Keep filter');dupCheck(count($duplicates->get($user,$id,1,'dismissed')['pairs'])===1,'Dismiss filter');
$second=$duplicates->start($user,$state['rootId'],true);$finish($second['id']);dupCheck(($duplicates->get($user,$second['id'])['counts']['preferred']??0)===1,'Decisions reused across scans');
$duplicates->decide($user,$second['id'],$exact['id'],$exact['signature'],'unreviewed',0);dupCheck(($duplicates->get($user,$id)['counts']['preferred']??0)===0,'Reset synchronizes saved scans');
$items->applyBatchMetadataEdit($user,[$state['files']['original.epub']['itemId']],'genre','Later duplicate test edit');
try{$duplicates->decide($user,$id,$exact['id'],$exact['signature'],'keep',0);throw new RuntimeException('Stale decision accepted');}catch(DomainException){}finally{$items->writeInferenceState($user,$state['files']['original.epub']['itemId'],array_intersect_key($state['files']['original.epub']['snapshot']['state'],array_flip(['genre','metadata_source','user_edited','field_sources'])));}
$third=$duplicates->start($user,$state['rootId'],false);try{$duplicates->start($user,$state['rootId'],false);throw new RuntimeException('Quota exceeded');}catch(InvalidArgumentException $e){dupCheck($e->getMessage()==='history_limit','History quota');}
$duplicates->stop($user,$third['id']);$duplicates->discard($user,$third['id']);
// Expired parent and child snapshots are pruned in bounded maintenance passes.
$q=$db->getQueryBuilder();$q->update('library_dup_jobs')->set('expires_at',$q->createNamedParameter(1))->where($q->expr()->eq('id',$q->createNamedParameter($second['id'])))->executeStatement();
try{$duplicates->get($user,$second['id']);throw new RuntimeException('Expired scan readable');}catch(OutOfBoundsException){}
$cleanup=\OC::$server->get(\OCA\Library\Service\LibraryCleanupService::class);$cleanup->expireDuplicates();$cleanup->expireDuplicates();
foreach(['library_dup_books','library_dup_keys','library_dup_pairs','library_dup_jobs'] as $table){$q=$db->getQueryBuilder();$r=$q->select($q->func()->count('*','n'))->from($table)->where($q->expr()->eq($table==='library_dup_jobs'?'id':'job_id',$q->createNamedParameter($second['id'])))->executeQuery();dupCheck((int)$r->fetchOne()===0,'Expired table cleaned '.$table);$r->closeCursor();}
foreach([$alternative,$isbn] as $pair)$duplicates->decide($user,$id,$pair['id'],$pair['signature'],'unreviewed',0);
$duplicates->discard($user,$id);
echo json_encode(['passed'=>true,'assertions'=>$count,'scope14'=>true,'ownership'=>true,'cancel'=>true,'exactRenamed'=>true,'alternativeFormats'=>true,'fuzzyTitle'=>true,'isbn'=>true,'editionFlags'=>true,'falsePositiveExcluded'=>true,'pagination'=>true,'persistentDecisions'=>true,'staleRejected'=>true,'quota'=>true,'expiryCleanup'=>true]),PHP_EOL;
