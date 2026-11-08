<?php
declare(strict_types=1);
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
if(getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1')throw new RuntimeException('Disposable fixture opt-in required');
set_exception_handler(static function(Throwable $e):void{fwrite(STDERR,get_class($e).': '.$e->getMessage()."\n".$e->getTraceAsString()."\n");exit(1);});
function service(string $name):object{return \OC::$server->get('OCA\\Library\\Service\\'.$name);}
function check(bool $ok,string $message):void{if(!$ok)throw new RuntimeException($message);echo "PASS $message\n";}
$state='/tmp/library-writeback-permissions.json';$mode=$argv[1]??'';$users=\OC::$server->get(\OCP\IUserManager::class);$shares=\OC::$server->get(\OCP\Share\IManager::class);$session=\OC::$server->get(\OCP\IUserSession::class);$root=\OC::$server->get(\OCP\Files\IRootFolder::class);
if($mode==='seed'){
 if(file_exists($state))throw new RuntimeException('Clean the previous permission fixture first');$suffix=bin2hex(random_bytes(4));$f=['owner'=>'library-permission-owner-'.$suffix,'recipient'=>'library-permission-recipient-'.$suffix];file_put_contents($state,json_encode($f));
 $owner=$users->createUser($f['owner'],'Disposable-permission-2026');$users->createUser($f['recipient'],'Disposable-permission-2026');$session->setUser($owner);$folder=$root->getUserFolder($f['owner'])->newFolder('Writeback permission fixture');
 $tmp=tempnam('/tmp','permission-epub-');$z=new ZipArchive();$z->open($tmp,ZipArchive::OVERWRITE);$z->addFromString('mimetype','application/epub+zip');$z->setCompressionName('mimetype',ZipArchive::CM_STORE);$z->addFromString('META-INF/container.xml','<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>');$z->addFromString('content.opf','<package xmlns="http://www.idpf.org/2007/opf" version="2.0" unique-identifier="uid"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="uid">urn:fixture:permission</dc:identifier><dc:title>Permission original</dc:title><dc:language>en</dc:language><dc:creator>Original creator</dc:creator></metadata><manifest><item id="body" href="chapter.xhtml" media-type="application/xhtml+xml"/></manifest><spine><itemref idref="body"/></spine></package>');$z->addFromString('chapter.xhtml','<html xmlns="http://www.w3.org/1999/xhtml"><body><p>Fixture.</p></body></html>');$z->close();$bytes=file_get_contents($tmp);unlink($tmp);$file=$folder->newFile('permission.epub',$bytes);
 $share=$shares->newShare();$share->setShareType(\OCP\Share\IShare::TYPE_USER)->setSharedBy($f['owner'])->setSharedWith($f['recipient'])->setNode($folder)->setPermissions(\OCP\Constants::PERMISSION_ALL);$created=$shares->createShare($share);$shares->acceptShare($created,$f['recipient']);
 $f+=['shareId'=>$created->getFullId(),'fileId'=>$file->getId(),'hash'=>hash('sha256',$bytes)];file_put_contents($state,json_encode($f));echo "permission_fixture_seeded=true\n";exit;
}
$f=json_decode(file_get_contents($state),true,32,JSON_THROW_ON_ERROR);foreach(['owner','recipient'] as $key)if(!str_starts_with($f[$key],'library-permission-'.$key.'-'))throw new RuntimeException('Invalid fixture account');
if($mode==='cleanup'){
 if(isset($f['shareId']))try{$shares->deleteShare($shares->getShareById($f['shareId']));}catch(\OCP\Share\Exceptions\ShareNotFound){}
 foreach(['recipient','owner'] as $key)$users->get($f[$key])?->delete();unlink($state);echo "permission_fixture_removed=true\n";exit;
}
if($mode==='revoke'||$mode==='grant'){$session->setUser($users->get($f['owner']));$share=$shares->getShareById($f['shareId']);$share->setPermissions($mode==='revoke'?\OCP\Constants::PERMISSION_READ:\OCP\Constants::PERMISSION_ALL);$shares->updateShare($share);echo "permission_changed=true\n";exit;}
$uid=$f['recipient'];$session->setUser($users->get($uid));\OC_Util::setupFS($uid);$file=$root->getUserFolder($uid)->getById($f['fileId'])[0];$items=service('ItemService');$writer=service('WriteBackService');
if($mode==='preview'){
 check($file->isUpdateable(),'source is writable when preview is prepared');$shelf=service('RootService')->saveRoot($uid,'/Writeback permission fixture','Permission fixture',true);service('LibraryScanner')->scan($uid,$shelf['id']);$db=\OC::$server->get(\OCP\IDBConnection::class);$id=(int)$db->executeQuery('SELECT id FROM *PREFIX*library_items WHERE user_id=?',[$uid])->fetchOne();
 $book=$items->findItem($uid,$id);$items->updateItem($uid,$id,['title'=>'Reviewed permission fixture'],$book['metadataRevision']);
 // The title remains writable while author indexing is pending; selected authors must wait.
 $db->executeStatement('UPDATE *PREFIX*library_items SET author_sync_status=1 WHERE user_id=? AND id=?',[$uid,$id]);$blocked=false;try{$writer->preview($uid,$id,['authors']);}catch(DomainException $e){$blocked=$e->getMessage()==='authors_not_ready';}check($blocked,'author write-back waits for canonical indexing');service('AuthorStorageService')->advance($uid,500,30);
 $job=$writer->preview($uid,$id,['title']);$f+=['itemId'=>$id,'jobId'=>$job['id']];file_put_contents($state,json_encode($f));check($job['status']==='preview','title write-back preview is retained');exit;
}
if($mode==='blocked'){
 check($file->isReadable()&&!$file->isUpdateable(),'changed share is readable but no longer writable');$blocked=false;try{$writer->apply($uid,$f['jobId']);}catch(OutOfBoundsException|\OCP\Files\NotPermittedException){$blocked=true;}check($blocked,'Apply rechecks permissions after confirmation');check(hash('sha256',$file->getContent())===$f['hash'],'revoked Apply leaves exact source bytes unchanged');check($writer->list($uid,$f['itemId'])[0]['status']==='preview','revoked Apply does not claim success');check(hash('sha256',$writer->backup($uid,$f['jobId'])->getContent())===$f['hash'],'original remains available after permission refusal');check($items->findItem($uid,$f['itemId'])['title']==='Reviewed permission fixture','permission refusal preserves Library-only edits');exit;
}
if($mode==='retry'){
 check($writer->apply($uid,$f['jobId'])['status']==='applied','unchanged preview can apply after permission is restored');check($writer->apply($uid,$f['jobId'],true)['status']==='restored','shared local source can restore its original');check(hash('sha256',$file->getContent())===$f['hash'],'permission recovery restores exact original bytes');$writer->delete($uid,$f['jobId']);exit;
}
throw new InvalidArgumentException('Unknown permission fixture mode');
