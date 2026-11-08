<?php
declare(strict_types=1);
// Synthetic account only. Exercise review state, Home list removal and private-data cleanup.
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
if(getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1')throw new RuntimeException('Disposable fixture opt-in required');
set_exception_handler(static function(Throwable $e):void{fwrite(STDERR,get_class($e).': '.$e->getMessage()."\n".$e->getTraceAsString()."\n");exit(1);});
function service(string $name):object{return \OC::$server->get('OCA\\Library\\Service\\'.$name);}
function check(bool $ok,string $message):void{if(!$ok)throw new RuntimeException($message);echo "PASS $message\n";}
$db=\OC::$server->get(\OCP\IDBConnection::class);$config=\OC::$server->get(\OCP\IConfig::class);$users=\OC::$server->get(\OCP\IUserManager::class);$rootFiles=\OC::$server->get(\OCP\Files\IRootFolder::class);
$uid='library-lifecycle-'.bin2hex(random_bytes(4));$user=$users->createUser($uid,'Disposable-lifecycle-2026');\OC::$server->get(\OCP\IUserSession::class)->setUser($user);
 $files=$rootFiles->getUserFolder($uid);$folder=$files->newFolder('Lifecycle');$pdf=file_get_contents('/tmp/library-fixture.pdf');$deleted=false;
try {
 for($n=1;$n<=52;$n++)$folder->newFile(sprintf('book-%02d.pdf',$n),$pdf);
 $root=service('RootService')->saveRoot($uid,'/Lifecycle','Lifecycle fixture',true);service('LibraryScanner')->scan($uid,$root['id']);service('AuthorStorageService')->advance($uid,200,5);
 $inbox=service('CurationInboxService');$items=service('ItemService');$first=$inbox->page($uid);check(count($first['rows'])===50 && $first['next']!==null,'incoming scan window is bounded to fifty books');
 $second=$inbox->page($uid,$first['next']);check(count($second['rows'])===2 && $second['next']===null,'incoming cursor reaches the remaining books without duplicates');
 check(count(array_unique(array_column(array_merge($first['rows'],$second['rows']),'id')))===52,'incoming windows contain every fixture book exactly once');
 foreach($first['rows'] as $row)$inbox->decide($uid,$row['id'],$row['revision'],'done');
 $pending=$inbox->page($uid);check($pending['rows']===[] && $pending['next']===$first['next'],'empty filtered scan window retains an older-books cursor');
 $bookId=$first['rows'][0]['id'];$before=$items->findItem($uid,$bookId);$file=$files->getById((int)$before['fileId'])[0];
 service('LibraryScanner')->scan($uid,$root['id']);$done=$inbox->page($uid,0,'done');check(count($done['rows'])===50,'unchanged rescan preserves Done decisions');
 check($done['rows'][0]['batchDay']===$first['rows'][0]['batchDay'],'unchanged rescan preserves first-indexed batch date');
 $items->setStarred($uid,$bookId,true);$items->setWorkflowStatus($uid,$bookId,'to-read');check(count($inbox->page($uid,0,'done')['rows'])===50,'favorite and reading status do not reopen metadata review');
 $current=$items->findItem($uid,$bookId);$items->updateItem($uid,$bookId,['publisher'=>'Lifecycle reviewed publisher'],$current['metadataRevision']);$pending=$inbox->page($uid);check(array_column($pending['rows'],'id')===[$bookId],'metadata edit reopens only its reviewed book');
 $row=$pending['rows'][0];$inbox->decide($uid,$bookId,$row['revision'],'deferred');check(array_column($inbox->page($uid,0,'deferred')['rows'],'id')===[$bookId],'deferred book appears in the deferred filter');
 $db->executeStatement('UPDATE *PREFIX*library_inbox_state SET until_at=? WHERE user_id=? AND item_id=?',[time()-1,$uid,$bookId]);check(array_column($inbox->page($uid)['rows'],'id')===[$bookId],'expired deferral returns to review');
 $items->setMarkedForDeletion($uid,$bookId,true);check(!in_array($bookId,array_column($inbox->page($uid,0,'all')['rows'],'id'),true),'hidden book is excluded from all incoming filters');$items->setMarkedForDeletion($uid,$bookId,false);
 check(count($inbox->page($uid,0,'all',$row['batchDay'],(int)$root['id'])['rows'])===50,'batch day and owned shelf filters combine');
 $invalid=false;try{$inbox->page($uid,0,'all','2026-02-31');}catch(InvalidArgumentException){$invalid=true;}check($invalid,'invalid calendar date is rejected');
 $lists=service('PersonalListService');$list=$lists->create($uid,'Lifecycle list','');$lists->add($uid,$list['id'],$list['revision'],[$bookId]);$home=service('HomeDashboardService');$home->save($uid,['upNext'],(int)$list['id']);check(array_column($home->upNext($uid),'id')===[$bookId],'Home uses the selected owned list');
 $list=$lists->find($uid,$list['id']);$lists->delete($uid,$list['id'],$list['revision']);check($home->preferences($uid)['listId']===0,'deleted Home list falls back to To-read books');check(array_column($home->upNext($uid),'id')===[$bookId],'fallback keeps the next book available');
 $removedId=$second['rows'][0]['id'];$removed=$items->findItem($uid,$removedId);$removedFile=$files->getById((int)$removed['fileId'])[0];$items->updateItem($uid,$removedId,['publisher'=>'Removed catalogue fixture'],$removed['metadataRevision']);$removedNote=service('BookNotesService')->create($uid,$removedId)[0];$removedNoteFile=$files->getById($removedNote['id'])[0];$removedNoteHash=hash('sha256',$removedNoteFile->getContent());
 $tombstoneList=$lists->create($uid,'Unavailable fixture','');$lists->add($uid,$tombstoneList['id'],$tombstoneList['revision'],[$removedId]);$reviewRow=$inbox->page($uid,$first['next'],'all')['rows'][0];$inbox->decide($uid,$removedId,$reviewRow['revision'],'done');
 check(service('ItemDeletionService')->deleteItem($uid,$removedId),'catalogue-only deletion removes the fixture book');
 foreach(['library_change_history','library_book_notes','library_inbox_state'] as $table)check((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*'.$table.' WHERE user_id=? AND item_id=?',[$uid,$removedId])->fetchOne()===0,'book deletion removes '.$table);
 check($lists->page($uid,$tombstoneList['id'])['entries'][0]['book']===null,'reading-list entry remains unavailable after book deletion');check(hash('sha256',$removedFile->getContent())===hash('sha256',$pdf) && hash('sha256',$removedNoteFile->getContent())===$removedNoteHash,'catalogue-only deletion leaves source and linked note bytes intact');
 $notes=service('BookNotesService')->create($uid,$bookId);$note=$files->getById($notes[0]['id'])[0];$noteHash=hash('sha256',$note->getContent());
 $genres=service('GenreService');$parent=$genres->create($uid,'Lifecycle fiction');$child=$genres->create($uid,'Lifecycle mystery');$genres->updateHierarchy($uid,(int)$child['id'],$child['display_name'],(int)$parent['id'],(int)$genres->genre($uid,(int)$child['id'])['treeRevision']);
 service('CurationJobService')->create($uid,[$bookId],['field'=>'publisher','value'=>'Never applied'],bin2hex(random_bytes(16)));$archive=service('CurationPortabilityService')->create($uid,'restore');service('CurationPortabilityService')->upload($uid,$archive['id'],[['kind'=>'genre','key'=>'1','data'=>['display_name'=>'Private uploaded record']]]);
 $data=\OC::$server->get(\OCP\Files\AppData\IAppDataFactory::class)->get('library');$stagingName='writeback-'.hash('sha256',$uid);$data->newFolder($stagingName)->newFile('private-backup.epub','Synthetic private recovery bytes');
 $db->executeStatement('INSERT INTO *PREFIX*library_writeback_jobs (id,user_id,item_id,status,payload,created_at,expires_at) VALUES (?,?,?,?,?,?,?)',[bin2hex(random_bytes(16)),$uid,$bookId,'recovery_required','{}',time(),time()+3600]);
 $tables=['library_items','library_files','library_roots','library_lists','library_authors','library_genres','library_genre_tree','library_genre_tree_state','library_inbox_state','library_change_history','library_book_notes','library_curation_jobs','library_curation_rows','library_portable_jobs','library_portable_rows','library_writeback_jobs'];$others=[];
 foreach($tables as $table)$others[$table]=(int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*'.$table.' WHERE user_id<>?',[$uid])->fetchOne();
 service('LibraryCleanupService')->deleteAccount($uid);
 foreach($tables as $table){check((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*'.$table.' WHERE user_id=?',[$uid])->fetchOne()===0,'account cleanup removes '.$table);check((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*'.$table.' WHERE user_id<>?',[$uid])->fetchOne()===$others[$table],'account cleanup preserves other owners in '.$table);}
 // AppData caches folder handles even after deletion; inspect the underlying root instead.
 check(!$rootFiles->nodeExists('appdata_'.$config->getSystemValue('instanceid').'/library/'.$stagingName),'account cleanup removes its private recovery directory');
 check($config->getUserKeys($uid,'library')===[],'account cleanup removes Library preferences');check(hash('sha256',$file->getContent())===hash('sha256',$pdf) && hash('sha256',$note->getContent())===$noteHash,'Library cleanup leaves publication and note files unchanged');
 service('LibraryCleanupService')->deleteAccount($uid);check(true,'account cleanup is safe to repeat');
 // Exercise the actual Nextcloud event with private work still present.
 service('CurationPortabilityService')->create($uid,'restore');$config->setUserValue($uid,'library','lifecycle_private_fixture','private');$data->newFolder($stagingName)->newFile('event-backup.epub','Synthetic event cleanup bytes');
 check($user->delete(),'Nextcloud deletes the synthetic account');$deleted=true;
 check((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_portable_jobs WHERE user_id=?',[$uid])->fetchOne()===0,'account deletion event removes pending private archive jobs');
 check(!$rootFiles->nodeExists('appdata_'.$config->getSystemValue('instanceid').'/library/'.$stagingName),'account deletion event removes recovery files');
 foreach($tables as $table)check((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*'.$table.' WHERE user_id<>?',[$uid])->fetchOne()===$others[$table],'account deletion event preserves other owners in '.$table);
} finally { if(!$deleted)$user->delete(); }
