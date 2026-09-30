<?php
declare(strict_types=1);
$n=0;function suggestionCheck(bool $ok,string $message):void{global $n;if(!$ok)throw new RuntimeException($message);$n++;}
$index=\OC::$server->get(\OCA\Library\Service\DuplicateIndexService::class);$suggestions=\OC::$server->get(\OCA\Library\Service\DuplicateSuggestionService::class);
$left=$state['files']['original.epub']['itemId'];$right=$state['files']['alternative.pdf']['itemId'];
suggestionCheck($index->status($user)['enabled'],'Real account suggestions enabled');
$lookup=$suggestions->lookup($user,[$left]);$entry=((array)$lookup['items'])[$left];suggestionCheck(in_array($right,array_column($entry['matches'],'id'),true),'Scanner/edit hooks indexed newly added PDF alternative');
suggestionCheck(!in_array($state['files']['renamed.epub']['itemId'],array_column($entry['matches'],'id'),true),'Automatic lookup never hashes renamed content');
$pair=$duplicates->compare($user,$left,$right);$duplicates->decideBooks($user,$left,$right,$pair['signature'],'dismissed',0);
$lookup=$suggestions->lookup($user,[$left]);suggestionCheck(!in_array($right,array_column(((array)$lookup['items'])[$left]['matches'],'id'),true),'Dismissal suppresses opportunistic suggestion');
$duplicates->decideBooks($user,$left,$right,$pair['signature'],'unreviewed',0);$lookup=$suggestions->lookup($user,[$left]);suggestionCheck(in_array($right,array_column(((array)$lookup['items'])[$left]['matches'],'id'),true),'Reset restores suggestion');
$start=microtime(true);$items->applyBatchMetadataEdit($user,[$right],'title','Completely Different Fixture Book');$changeMs=(microtime(true)-$start)*1000;
$lookup=$suggestions->lookup($user,[$left]);suggestionCheck(!in_array($right,array_column(((array)$lookup['items'])[$left]['matches'],'id'),true),'Metadata changes immediately update matching index');
try{$duplicates->decideBooks($user,$left,$right,$pair['signature'],'keep',0);throw new RuntimeException('Stale choice accepted');}catch(DomainException){}
$items->applyBatchMetadataEdit($user,[$right],'title','The Secret Life of Walter Mitty');
$original=$state['files']['alternative.pdf']['snapshot']['state'];$items->writeInferenceState($user,$right,array_intersect_key($original,array_flip(['title','metadata_source','user_edited','field_sources'])));
$lookup=$suggestions->lookup($user,[$left]);suggestionCheck(in_array($right,array_column(((array)$lookup['items'])[$left]['matches'],'id'),true),'Restored title immediately reindexed');
try{$suggestions->lookup($user,array_fill(0,101,$left));throw new RuntimeException('Oversized lookup accepted');}catch(InvalidArgumentException){}
try{$suggestions->lookup($user,[(string)$left]);throw new RuntimeException('String ID accepted');}catch(InvalidArgumentException){}
$lookup=$suggestions->lookup($user,[2147483647]);suggestionCheck(((array)$lookup['items'])[2147483647]['status']==='unavailable','Foreign/missing IDs unavailable');
$before=$db->executeQuery('SELECT COUNT(*) AS n FROM *PREFIX*library_dup_index WHERE user_id = ?',[$user])->fetchOne();
$index->changed($user,$left);$after=$db->executeQuery('SELECT COUNT(*) AS n FROM *PREFIX*library_dup_index WHERE user_id = ?',[$user])->fetchOne();suggestionCheck((int)$before===(int)$after,'Incremental update replaces one entry without growing index');
echo json_encode(['passed'=>true,'assertions'=>$n,'incrementalMetadataSaveMs'=>$changeMs,'newItemsIndexed'=>true,'noAutomaticHash'=>true,'dismissAndReset'=>true,'metadataChangesImmediate'=>true,'staleRejected'=>true,'boundedInput'=>true,'missingUnavailable'=>true]),PHP_EOL;
