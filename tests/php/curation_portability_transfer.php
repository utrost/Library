<?php
declare(strict_types=1);
// Cross-account/database archive fixture. All files and users are synthetic.
define('OC_CONSOLE',true);
require '/var/www/html/lib/base.php';
if(getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1')throw new RuntimeException('Disposable fixture opt-in required');
set_exception_handler(static function(Throwable $e):void{fwrite(STDERR,get_class($e).': '.$e->getMessage()."\n".$e->getTraceAsString()."\n");exit(1);});
function service(string $name):object{return \OC::$server->get('OCA\\Library\\Service\\'.$name);}
function check(bool $ok,string $message):void{if(!$ok)throw new RuntimeException($message);echo "PASS $message\n";}
function rows(string $sql,array $params=[]):array{global $db;$r=$db->executeQuery($sql,$params);try{return $r->fetchAll();}finally{$r->closeCursor();}}
function settle(string $uid,string $id,string $status):array{global $archives;for($n=0;$n<1000 && $archives->show($uid,$id)['status']===$status;$n++)$archives->advance();return $archives->show($uid,$id);}
$mode=$argv[1] ?? '';$directory='/tmp/library-portability-transfer';
$db=\OC::$server->get(\OCP\IDBConnection::class);$users=\OC::$server->get(\OCP\IUserManager::class);$session=\OC::$server->get(\OCP\IUserSession::class);$rootFiles=\OC::$server->get(\OCP\Files\IRootFolder::class);$config=\OC::$server->get(\OCP\IConfig::class);
$items=service('ItemService');$archives=service('CurationPortabilityService');$history=service('ChangeHistoryService');$lists=service('PersonalListService');$genres=service('GenreService');
if(!in_array($mode,['export','restore'],true))throw new InvalidArgumentException('Unknown mode');
if($mode==='export'){
 if(!is_dir($directory))mkdir($directory,0700);
 $uid='library-export-'.bin2hex(random_bytes(4));$user=$users->createUser($uid,'Disposable-portability-2026');$session->setUser($user);$files=$rootFiles->getUserFolder($uid);
 $folder=$files->newFolder('PortableBooks');$pdf=file_get_contents('/tmp/library-fixture.pdf');$folder->newFile('portable.pdf',$pdf);$folder->newFile('missing-at-destination.pdf',$pdf);
 $root=service('RootService')->saveRoot($uid,'/PortableBooks','Source fixture shelf',true);service('LibraryScanner')->scan($uid,$root['id']);service('AuthorStorageService')->advance($uid,200,5);service('SeriesStorageService')->advance($uid,200,5);
 $bookRows=rows('SELECT i.id,f.cached_path FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=?',[$uid]);
 $bookId=(int)array_values(array_filter($bookRows,fn($row)=>str_ends_with($row['cached_path'],'/portable.pdf')))[0]['id'];
 $author=service('AuthorDirectoryService')->create($uid,'Portable Fixture Author');service('AuthorDirectoryService')->update($uid,(int)$author['id'],(int)$author['revision'],['display_name'=>$author['display_name'],'sort_name'=>'Fixture, Portable Author','given_name'=>'Portable','family_name'=>'Fixture Author','biography'=>'Cross-database biography']);
 $series=service('SeriesStorageService')->create($uid,'Portable Fixture Series');$parent=$genres->create($uid,'Portable Fiction');$child=$genres->create($uid,'Portable Mystery');$genres->updateHierarchy($uid,(int)$child['id'],$child['display_name'],(int)$parent['id'],(int)$genres->genre($uid,(int)$child['id'])['treeRevision']);
 $book=$items->findItem($uid,$bookId);$links=$history->links($book);foreach($links as $key=>$value)$links['before'.ucfirst($key)]=$value;$links['authors']=[(int)$author['id']];$links['series']=$series;$links['part']='3';$links['genres']=[(int)$child['id']];
 $items->updateItem($uid,$bookId,['title'=>'Portable reviewed title','publisher'=>'Portable publisher','classifications'=>'DDC: 823.92','personalRating'=>4],$book['metadataRevision'],$links,['publisher'=>'open-library']);$items->setStarred($uid,$bookId,true);$items->setWorkflowStatus($uid,$bookId,'to-read');
 $list=$lists->create($uid,'Portable reading list','Retains order and missing entries');$lists->add($uid,$list['id'],$list['revision'],array_merge([$bookId],array_map('intval',array_column(array_filter($bookRows,fn($row)=>(int)$row['id']!==$bookId),'id'))));
 service('HomeDashboardService')->save($uid,['upNext','health'],(int)$list['id']);service('SavedCollectionService')->saveCollection($uid,'Portable collection',['shelf'=>'Source fixture shelf','genreId'=>(string)$parent['id']]);
 $notes=service('BookNotesService')->create($uid,$bookId);$note=$files->getById($notes[0]['id'])[0];$note->move($note->getParent()->getPath().'/Portable note.md');
 $pattern=['version'=>1,'name'=>'Portable title-author','kind'=>'pattern','pattern'=>'%folders%/%title% - %author%.%extension%'];
 $config->setUserValue($uid,'library','inference_pattern_'.str_repeat('a',32),json_encode($pattern));
 $config->setUserValue($uid,'library','inference_folder_rule_'.str_repeat('b',32),json_encode(['version'=>1,'definition'=>$pattern,'folder'=>'','rootId'=>$root['id'],'rootFileId'=>$folder->getId(),'folderFileId'=>$folder->getId()]));
 $config->setUserValue($uid,'library','metadata_lookup_provider','googlebooks');$config->setUserValue($uid,'library','google_books_api_key','fixture-secret-must-not-export');
 $db->insertIfNotExist('*PREFIX*library_genre_mappings',['user_id'=>$uid,'candidate_key'=>hash('sha256','portable source genre'),'genre_id'=>(int)$child['id']],['user_id','candidate_key']);
 $job=$archives->create($uid,'export');check(settle($uid,$job['id'],'exporting')['status']==='complete','cross-account export completes');$content=implode('',iterator_to_array($archives->download($uid,$job['id'])));
 check(!str_contains($content,'fixture-secret-must-not-export'),'archive excludes provider credential');
 file_put_contents($directory.'/archive.jsonl',$content);file_put_contents($directory.'/portable.pdf',$pdf);file_put_contents($directory.'/note.md',$note->getContent());file_put_contents($directory.'/evidence.json',json_encode(['sourceAccount'=>$uid,'sourceBookId'=>$bookId,'sourceAuthorId'=>$author['id'],'sourceSeriesId'=>$series,'sourceListId'=>$list['id'],'sourceGenreId'=>$child['id'],'sourceFileHash'=>hash('sha256',$pdf),'sourceNoteHash'=>hash('sha256',$note->getContent())]));
 $archives->control($uid,$job['id'],'delete');for($n=0;$n<10;$n++)$archives->expire();exit;
}
$evidence=json_decode(file_get_contents($directory.'/evidence.json'),true,32,JSON_THROW_ON_ERROR);$uid='library-restore-'.bin2hex(random_bytes(4));$user=$users->createUser($uid,'Disposable-portability-2026');$session->setUser($user);$files=$rootFiles->getUserFolder($uid);
$folder=$files->newFolder('PortableBooks');$file=$folder->newFile('portable.pdf',file_get_contents($directory.'/portable.pdf'));$noteFolder=$files->newFolder('Library notes');$note=$noteFolder->newFile('Portable note.md',file_get_contents($directory.'/note.md'));
$root=service('RootService')->saveRoot($uid,'/PortableBooks','Destination fixture shelf',true);service('LibraryScanner')->scan($uid,$root['id']);service('AuthorStorageService')->advance($uid,200,5);service('SeriesStorageService')->advance($uid,200,5);
$bookId=(int)rows('SELECT id FROM *PREFIX*library_items WHERE user_id=?',[$uid])[0]['id'];$book=$items->findItem($uid,$bookId);$items->updateItem($uid,$bookId,['publisher'=>'Destination original'],$book['metadataRevision']);
$image=imagecreatetruecolor(2,2);ob_start();imagepng($image);$png=ob_get_clean();imagedestroy($image);$items->setManualCoverOverride($uid,$bookId,base64_encode($png),'image/png');
$records=array_map(fn($line)=>json_decode($line,true,64,JSON_THROW_ON_ERROR),file($directory.'/archive.jsonl',FILE_IGNORE_NEW_LINES|FILE_SKIP_EMPTY_LINES));$manifest=array_shift($records);check($manifest['records']===count($records),'transferred manifest count matches');
$job=$archives->create($uid,'restore');foreach(array_chunk($records,20) as $batch)$archives->upload($uid,$job['id'],$batch);$archives->control($uid,$job['id'],'finish',count($records));$review=settle($uid,$job['id'],'validating');check($review['status']==='review','cross-database restore reaches review');
check(count(array_filter($review['rows'],fn($row)=>$row['kind']==='book' && $row['status']==='conflict'))===1,'missing destination file is a review conflict');
$bookReview=array_values(array_filter($review['rows'],fn($row)=>$row['kind']==='book' && $row['status']==='ready'))[0]['review'];
check($bookReview['after']['assignedAuthors']===['Portable Fixture Author'] && $bookReview['after']['assignedSeries']===['Portable Fixture Series'] && $bookReview['after']['assignedGenres']===['Portable Mystery'],'review names canonical assignments before creating destination identities');
check($bookReview['beforeDisplay']['coverOverrideIncluded']===true && $bookReview['after']['coverOverrideIncluded']===false,'review explicitly shows removal of the destination custom cover');
$archives->control($uid,$job['id'],'approve');$result=settle($uid,$job['id'],'applying');check($result['status']==='complete','cross-database restore completes');
$missingKeys=array_column(array_filter($records,fn($record)=>$record['kind']==='book' && str_ends_with($record['data']['cachedPath'],'/missing-at-destination.pdf')),'key');
foreach($result['rows'] as $row)if($row['status']!=='applied' && $row['kind']!=='book'){
 $source=array_values(array_filter($records,fn($record)=>$record['kind']===$row['kind'] && (string)$record['key']===(string)$row['source_key']))[0] ?? null;
 check($row['kind']==='history' && in_array((string)($source['data']['item_id'] ?? ''),array_map('strval',$missingKeys),true),'only missing-book history is retained as a conflict');
}
$book=$items->findItem($uid,$bookId);check($book['title']==='Portable reviewed title' && $book['publisher']==='Portable publisher','metadata follows destination file matching');check($book['fieldSources']['publisher']==='open-library','changed field provenance survives transfer');check(empty($book['coverOverrideData']),'explicitly empty archived cover clears destination override');check($book['starred']===true && $book['workflowStatus']==='to-read','personal statuses survive transfer');
$links=$history->links($book);check(count($links['authors'])===1 && $links['series']!==null && $links['part']==='3' && count($links['genres'])===1,'canonical links remap to destination identities');
$author=rows('SELECT user_id,display_name,biography FROM *PREFIX*library_authors WHERE id=?',[$links['authors'][0]])[0];check($author['user_id']===$uid && $author['display_name']==='Portable Fixture Author' && $author['biography']==='Cross-database biography','author profile belongs to destination');
$genre=$genres->genre($uid,$links['genres'][0]);check($genre['display_name']==='Portable Mystery' && $genres->genre($uid,(int)$genre['parent_id'])['display_name']==='Portable Fiction','genre hierarchy remaps');
$savedLists=$lists->lists($uid);check(count($savedLists)===1,'one destination reading list created');$page=$lists->page($uid,$savedLists[0]['id']);check($page['total']===2 && $page['entries'][0]['book']['id']===$bookId && $page['entries'][1]['book']===null,'list order and unavailable entry retained');
$preferences=json_decode($config->getUserValue($uid,'library','dashboard_preferences'),true);check((int)$preferences['listId']===$savedLists[0]['id'],'Home selected list remaps');check($config->getUserValue($uid,'library','metadata_lookup_provider')==='googlebooks','default provider preference transfers');check($config->getUserValue($uid,'library','google_books_api_key','')==='','credentials do not transfer');
$collections=service('SavedCollectionService')->listCollections($uid);check(count($collections)===1 && $collections[0]['filters']['shelf']==='Destination fixture shelf','collection resolves destination shelf label');check((int)$collections[0]['filters']['genreId']===(int)$genre['parent_id'],'collection genre filter remaps');
$restoredNotes=service('BookNotesService')->list($uid,$bookId);check(count($restoredNotes)===1 && $restoredNotes[0]['id']===$note->getId(),'note link resolves destination file');
$patterns=array_values(array_filter(service('PortablePreferences')->entries($uid),fn($row)=>str_starts_with($row['key'],'inference_')));check(count($patterns)===2,'pattern and folder rule transferred');foreach($patterns as $pattern)if(str_starts_with($pattern['key'],'inference_folder_rule_')){$rule=json_decode($pattern['value'],true);check((int)$rule['rootId']===(int)$root['id'] && (int)$rule['rootFileId']===$folder->getId(),'folder rule resolves destination identities');}
$mapping=rows('SELECT genre_id FROM *PREFIX*library_genre_mappings WHERE user_id=?',[$uid]);check(count($mapping)===1 && (int)$mapping[0]['genre_id']===$links['genres'][0],'genre mapping remaps');
check(count(array_filter($history->page($uid,$bookId)['rows'],fn($row)=>$row['kind']==='imported_evidence'))>0,'original history retained as evidence');check(hash('sha256',$file->getContent())===$evidence['sourceFileHash'] && hash('sha256',$note->getContent())===$evidence['sourceNoteHash'],'archive restore does not rewrite book or note bytes');
$archives->control($uid,$job['id'],'delete');for($n=0;$n<10;$n++)$archives->expire();
