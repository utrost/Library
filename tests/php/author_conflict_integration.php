<?php
declare(strict_types=1);
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
set_exception_handler(function(Throwable $e){fwrite(STDERR,get_class($e).': '.$e->getMessage().PHP_EOL);exit(1);});
$state=json_decode(file_get_contents('/tmp/library-author-directory-fixture.json'),true,512,JSON_THROW_ON_ERROR);$uid=$state['uid'];
if(!preg_match('/^library-author-[a-f0-9]{12}$/D',$uid))throw new RuntimeException('Owned fixture required');
$db=\OCP\Server::get(\OCP\IDBConnection::class);$storage=\OCP\Server::get(\OCA\Library\Service\AuthorStorageService::class);$directory=\OCP\Server::get(\OCA\Library\Service\AuthorDirectoryService::class);
$rows=function($sql,$params=[])use($db){$r=$db->executeQuery($sql,$params);try{return $r->fetchAll();}finally{$r->closeCursor();}};
$books=$rows('SELECT id FROM *PREFIX*library_items WHERE user_id=? ORDER BY id',[$uid]);$id=(int)$books[0]['id'];$second=(int)$books[1]['id'];
$assertions=0;$assert=function($ok,$label)use(&$assertions){if(!$ok)throw new RuntimeException($label);$assertions++;};
$reject=function($fn,$class,$label)use($assert){try{$fn();}catch(Throwable $e){$assert($e instanceof $class,$label.': '.get_class($e));return;}$assert(false,$label);};
$change=function($item,$names)use($db,$uid,$storage){$db->executeStatement('UPDATE *PREFIX*library_items SET authors_json=?,creators=?,author_sync_status=1 WHERE user_id=? AND id=?',[json_encode($names),implode('; ',$names),$uid,$item]);$storage->advance($uid);};
$links=fn($item)=>$rows('SELECT author_id,position,source_name,assignment_source,revision FROM *PREFIX*library_item_authors WHERE user_id=? AND item_id=? ORDER BY position',[$uid,$item]);
$source=fn($item)=>$rows('SELECT authors_json,creators FROM *PREFIX*library_items WHERE user_id=? AND id=?',[$uid,$item])[0];
if(($argv[1]??'')==='seed'){
 // Repeatable browser fixture; source-only synthetic changes never touch real user records.
 $db->executeStatement('UPDATE *PREFIX*library_items SET author_source_hash=NULL WHERE user_id=?',[$uid]);
 $db->executeStatement('DELETE FROM *PREFIX*library_item_authors WHERE user_id=?',[$uid]);
 $change($id,['John Doe']);$change($second,['John Doe']);
 $db->executeStatement("UPDATE *PREFIX*library_item_authors SET assignment_source='manual' WHERE user_id=?",[$uid]);
 $change($id,['Incoming Writer']);$change($second,['Another Writer']);

 echo json_encode(['uid'=>$uid,'books'=>[$id,$second]]),PHP_EOL;exit;
}
$originalFiles=$rows('SELECT id,etag,size,mtime FROM *PREFIX*library_files WHERE user_id=? ORDER BY id',[$uid]);
$db->executeStatement("UPDATE *PREFIX*library_item_authors SET assignment_source='manual' WHERE user_id=? AND item_id=?",[$uid,$id]);
$change($id,['Imported Person','Second Person']);
$assert($storage->status($uid)['conflict']===1,'changed protected credits flagged');
$assert(count($storage->conflicts($uid)['books'])===1,'review queue');
$assert($storage->conflicts($uid.'-other')['books']===[],'private queue');
$reject(fn()=>$storage->previewConflict($uid.'-other',$id),OutOfBoundsException::class,'private preview');
$reject(fn()=>$storage->resolveConflict($uid.'-other',$id,'keep','x'),OutOfBoundsException::class,'private write');
$reject(fn()=>$storage->conflicts($uid,0),InvalidArgumentException::class,'page validation');
$p=$storage->previewConflict($uid,$id);$assert($p['current'][0]['name']==='John Doe'&&count($p['incoming'])===2,'comparison');
$reject(fn()=>$storage->resolveConflict($uid,$id,'guess',$p['token']),InvalidArgumentException::class,'choice validation');
$reject(fn()=>$storage->resolveConflict($uid,$id,'keep','wrong'),\OCA\Library\Exception\ListConflictException::class,'stale token');
$prior=$links($id);$before=$source($id);$storage->resolveConflict($uid,$id,'keep',$p['token']);
$assert($links($id)[0]['author_id']===$prior[0]['author_id'],'keep identity');
$assert($links($id)[0]['source_name']==='John Doe','keep original credit');
$assert($source($id)===$before,'keep source unchanged');
$assert($storage->status($uid)['conflict']===0,'keep clears queue');
$reject(fn()=>$storage->resolveConflict($uid,$id,'keep',$p['token']),\OCA\Library\Exception\ListConflictException::class,'double submit');
$change($id,['Imported Person','Second Person']);$assert($storage->status($uid)['conflict']===0,'unchanged source stays resolved');
$change($id,['New Person']);$assert($storage->status($uid)['conflict']===1,'new source reopens review');
$p=$storage->previewConflict($uid,$id);$db->executeStatement('UPDATE *PREFIX*library_authors SET revision=revision+1 WHERE user_id=? AND id=?',[$uid,$prior[0]['author_id']]);
$reject(fn()=>$storage->resolveConflict($uid,$id,'import',$p['token']),\OCA\Library\Exception\ListConflictException::class,'renamed author invalidates preview');
$p=$storage->previewConflict($uid,$id);$change($id,['Newest Person']);
$reject(fn()=>$storage->resolveConflict($uid,$id,'import',$p['token']),\OCA\Library\Exception\ListConflictException::class,'changed source invalidates preview');
// A resolver failure after DELETE must roll back the whole decision.
$cycle=$directory->create($uid,'Cycle Person');$db->executeStatement('UPDATE *PREFIX*library_authors SET merged_into=id WHERE user_id=? AND id=?',[$uid,$cycle['id']]);
$change($id,['Cycle Person']);$p=$storage->previewConflict($uid,$id);$priorLinks=$links($id);
$reject(fn()=>$storage->resolveConflict($uid,$id,'import',$p['token']),RuntimeException::class,'resolver failure');
$assert($links($id)===$priorLinks,'failed apply restores relationships');
$assert($storage->status($uid)['conflict']===1,'failed apply keeps conflict');
$db->executeStatement('UPDATE *PREFIX*library_authors SET merged_into=NULL WHERE user_id=? AND id=?',[$uid,$cycle['id']]);
$change($id,['Newest Person']);
$p=$storage->previewConflict($uid,$id);$before=$source($id);$storage->resolveConflict($uid,$id,'import',$p['token']);
$assert($links($id)[0]['source_name']==='Newest Person','use incoming');
$assert($source($id)===$before,'import source unchanged');
$change($id,['Newest Person']);$assert($storage->status($uid)['conflict']===0,'accepted import stays resolved');
$change($id,[]);$p=$storage->previewConflict($uid,$id);$assert($p['incoming']===[],'empty authors preview');$storage->resolveConflict($uid,$id,'import',$p['token']);
$assert($links($id)===[],'accept empty removes assignments');
$change($id,[]);$assert($storage->status($uid)['conflict']===0,'empty unchanged stays resolved');
$change($id,['Returned Person']);$assert($storage->status($uid)['conflict']===1,'empty assignment decision protected');
$p=$storage->previewConflict($uid,$id);$storage->resolveConflict($uid,$id,'keep',$p['token']);$change($id,['Returned Person']);$assert($links($id)===[]&&$storage->status($uid)['conflict']===0,'keep empty persists');
// Unreviewed, unedited books must continue updating automatically.
$change($second,['Automatic Person']);$assert($links($second)[0]['source_name']==='Automatic Person','ordinary import remains automatic');
$change($second,['Automatic Person Two']);$assert($links($second)[0]['source_name']==='Automatic Person Two','ordinary subsequent import automatic');
$assert($originalFiles===$rows('SELECT id,etag,size,mtime FROM *PREFIX*library_files WHERE user_id=? ORDER BY id',[$uid]),'files unchanged');
// Exercise the real EPUB → scanner → pending queue → review path as well.
$file=\OCP\Server::get(\OCP\Files\IRootFolder::class)->getUserFolder($uid)->get('Author fixtures/calibre.epub');
$tmp=tempnam('/tmp','author-changed-');
try{file_put_contents($tmp,$file->getContent());$zip=new ZipArchive();$zip->open($tmp);$opf=$zip->getFromName('book.opf');$zip->addFromString('book.opf',str_replace('<dc:creator>John Doe</dc:creator>','<dc:creator>Scanned Writer</dc:creator>',$opf));$zip->close();$file->putContent(file_get_contents($tmp));}finally{unlink($tmp);}
$scanner=\OCP\Server::get(\OCA\Library\Service\LibraryScanner::class);$scan=$scanner->scan($uid,$state['rootId']);$storage->advance($uid);
$assert($scan['metadataErrors']===0,'real EPUB scan');
$p=$storage->previewConflict($uid,$id);$assert($p['incoming']===['Scanned Writer'],'real scanner queues changed authors');
$sourceBefore=$source($id);$fileHash=hash('sha256',$file->getContent());$storage->resolveConflict($uid,$id,'keep',$p['token']);
$assert($source($id)===$sourceBefore,'resolution preserves scanned metadata');
$assert(hash('sha256',$file->getContent())===$fileHash,'resolution preserves actual EPUB');
$scanner->scan($uid,$state['rootId']);$storage->advance($uid);$assert($storage->status($uid)['conflict']===0,'real unchanged rescan stays resolved');
$items=\OCP\Server::get(\OCA\Library\Service\ItemService::class);
$items->updateItem($uid,$id,['title'=>'Edited fixture','authors'=>['Edited Writer']]);
$assert(json_decode($source($id)['authors_json'],true)===['Edited Writer'],'real metadata edit binds pending status');
$storage->advance($uid);$p=$storage->previewConflict($uid,$id);$assert($p['incoming']===['Edited Writer'],'manual source edit enters review');
$storage->resolveConflict($uid,$id,'import',$p['token']);
$assert($items->resetFieldToScannerCandidate($uid,$id,'creators'),'reset scanner candidate binds pending status');
$storage->advance($uid);$assert($storage->previewConflict($uid,$id)['incoming']===['Scanned Writer'],'reset candidate enters review');
echo json_encode(['uid'=>$uid,'assertions'=>$assertions,'books'=>[$id,$second]]),PHP_EOL;
