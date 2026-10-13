<?php
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$db=\OCP\Server::get(\OCP\IDBConnection::class);
$storage=\OCP\Server::get(\OCA\Library\Service\AuthorStorageService::class);
$directory=\OCP\Server::get(\OCA\Library\Service\AuthorDirectoryService::class);
$uid=$argv[1]??'library-smoke';
// This destructive fixture is restricted to the disposable smoke account.
if ($uid !== 'library-smoke' || !file_exists('/tmp/library-author-disposable')) throw new RuntimeException('Disposable fixture only');
function rows($sql,$p=[]){global $db;$r=$db->executeQuery($sql,$p);$v=$r->fetchAll();$r->closeCursor();return $v;}
$n=0;function check($v,$label){global $n;if(!$v)throw new RuntimeException($label);$n++;}
$ids=array_column(rows('SELECT id FROM *PREFIX*library_items WHERE user_id=? ORDER BY id LIMIT 8',[$uid]),'id');
check(count($ids)===8,'8 fixture books');
$inputs=[['John Doe'],['  John   Doe  '],['Doe, John'],['J. Doe'],['Elizabeth Bear','John Doe'],[],['José Doe'],['Jose Doe']];
foreach($ids as $i=>$id)$db->executeStatement('UPDATE *PREFIX*library_items SET authors_json=?,creators=?,author_sync_status=1 WHERE user_id=? AND id=?',[json_encode($inputs[$i]),implode('; ',$inputs[$i]),$uid,$id]);
$before=rows('SELECT id,authors_json,creators,user_edited,description FROM *PREFIX*library_items WHERE user_id=? ORDER BY id',[$uid]);
try{$directory->update($uid,1,1,['display_name'=>'Blocked','sort_name'=>'Blocked','given_name'=>'','family_name'=>'']);throw new RuntimeException('edit allowed during migration');}catch(\OCA\Library\Exception\AuthorMigrationPendingException){$n++;}
$storage->advance($uid,2,5);check($storage->status($uid)['pending']===6,'bounded interrupt');
while($storage->status($uid)['pending'])$storage->advance($uid,500,5);
$links=rows('SELECT * FROM *PREFIX*library_item_authors WHERE user_id=? ORDER BY item_id,position',[$uid]);
$get=fn($id)=>array_values(array_filter($links,fn($l)=>(int)$l['item_id']===(int)$id));
check($get($ids[0])[0]['author_id']===$get($ids[1])[0]['author_id'],'whitespace normalization');
check($get($ids[0])[0]['author_id']!==$get($ids[2])[0]['author_id'],'comma convention not guessed');
check($get($ids[0])[0]['author_id']!==$get($ids[3])[0]['author_id'],'initials not expanded');
check($get($ids[6])[0]['author_id']!==$get($ids[7])[0]['author_id'],'accents retained');
check(array_column($get($ids[4]),'source_name')===['Elizabeth Bear','John Doe'],'ordered credits');
check($get($ids[5])===[],'empty authors');
$storage->advance($uid);check($links===rows('SELECT * FROM *PREFIX*library_item_authors WHERE user_id=? ORDER BY item_id,position',[$uid]),'idempotence');
check($before===rows('SELECT id,authors_json,creators,user_edited,description FROM *PREFIX*library_items WHERE user_id=? ORDER BY id',[$uid]),'legacy metadata preserved');
$id=(int)$get($ids[0])[0]['author_id'];$a=$directory->page($uid,$id)['author'];
$fields=['display_name'=>'John Doe corrected','sort_name'=>'Doe, John','given_name'=>'John','family_name'=>'Doe'];
$directory->update($uid,$id,(int)$a['revision'],$fields);
check($directory->page($uid,$id)['author']['display_name']==='John Doe corrected','shared edit');
try{$directory->update($uid,$id,(int)$a['revision'],$fields);throw new RuntimeException('stale accepted');}catch(\OCA\Library\Exception\ListConflictException){$n++;}
try{$directory->page('someone-else',$id);throw new RuntimeException('cross user read');}catch(OutOfBoundsException){$n++;}
try{$directory->update('someone-else',$id,2,$fields);throw new RuntimeException('cross user edit');}catch(OutOfBoundsException){$n++;}
check(count($directory->directory($uid,'John Doe corrected')['authors'])===1,'search edited name');
check($directory->directory($uid,'%')['authors']===[],'literal search');
$db->executeStatement('UPDATE *PREFIX*library_items SET author_sync_status=1 WHERE user_id=? AND id=?',[$uid,$ids[0]]);$storage->advance($uid);
check($directory->page($uid,$id)['author']['display_name']==='John Doe corrected','rescan preserves preferred name');
$db->executeStatement('UPDATE *PREFIX*library_items SET authors_json=?,author_sync_status=1 WHERE user_id=? AND id=?',['["Changed source"]',$uid,$ids[0]]);$storage->advance($uid);
check($storage->status($uid)['conflict']===1,'changed manually corrected identity protected');
$db->executeStatement('UPDATE *PREFIX*library_items SET authors_json=?,author_sync_status=1 WHERE user_id=? AND id=?',['broken',$uid,$ids[5]]);$storage->advance($uid);
check($storage->status($uid)['failed']===1,'invalid data isolated');
$db->executeStatement('UPDATE *PREFIX*library_items SET authors_json=? WHERE user_id=? AND id=?',['[]',$uid,$ids[5]]);$storage->retryFailed($uid);$storage->advance($uid);
check($storage->status($uid)['failed']===0,'retry');
$normal=\OCA\Library\Service\AuthorIdentity::name('Doe, John',true);
check($normal['display_name']==='John Doe'&&$normal['family_name']==='Doe','explicit inverted convention');
check(\OCA\Library\Service\AuthorIdentity::name("Jose\u{0301}")['comparison_key']===\OCA\Library\Service\AuthorIdentity::name('José')['comparison_key'],'NFC');
echo json_encode(['assertions'=>$n,'status'=>$storage->status($uid)]),PHP_EOL;
