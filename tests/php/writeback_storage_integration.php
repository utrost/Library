<?php
declare(strict_types=1);
// Real external/encrypted storage fixtures. Only use labelled disposable instances.
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
if(getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1')throw new RuntimeException('Disposable fixture opt-in required');
set_exception_handler(static function(Throwable $e):void{fwrite(STDERR,get_class($e).': '.$e->getMessage()."\n".$e->getTraceAsString()."\n");exit(1);});
function service(string $name):object{return \OC::$server->get('OCA\\Library\\Service\\'.$name);}
function check(bool $ok,string $message):void{if(!$ok)throw new RuntimeException($message);echo "PASS $message\n";}
function epub():string {
 $path=tempnam('/tmp','storage-epub-');$z=new ZipArchive();$z->open($path,ZipArchive::OVERWRITE);
 $z->addFromString('mimetype','application/epub+zip');$z->setCompressionName('mimetype',ZipArchive::CM_STORE);
 $z->addFromString('META-INF/container.xml','<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>');
 $z->addFromString('content.opf','<package xmlns="http://www.idpf.org/2007/opf" version="2.0" unique-identifier="uid"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="uid">urn:fixture:storage</dc:identifier><dc:title>Storage fixture</dc:title><dc:language>en</dc:language></metadata><manifest><item id="body" href="chapter.xhtml" media-type="application/xhtml+xml"/></manifest><spine><itemref idref="body"/></spine></package>');
 $z->addFromString('chapter.xhtml','<html xmlns="http://www.w3.org/1999/xhtml"><body><p>Disposable storage fixture.</p></body></html>');$z->close();$data=file_get_contents($path);unlink($path);return $data;
}
$mode=$argv[1] ?? '';$suffix=getenv('LIBRARY_STORAGE_FIXTURE_SUFFIX');if(!is_string($suffix)||!preg_match('/^[a-f0-9]{8}$/D',$suffix))throw new RuntimeException('Invalid fixture suffix');
$kind=str_starts_with($mode,'source')?'source':($mode==='encrypted'?'encrypted':'client');$uid='library-storage-'.$kind.'-'.$suffix;$users=\OC::$server->get(\OCP\IUserManager::class);$db=\OC::$server->get(\OCP\IDBConnection::class);
if(in_array($mode,['source-seed','client-seed','encrypted'],true)){if($users->userExists($uid))throw new RuntimeException('Fixture owner already exists');$user=$users->createUser($uid,'Disposable-storage-2026');}else{$user=$users->get($uid);if(!$user)throw new RuntimeException('Fixture owner missing');}
\OC::$server->get(\OCP\IUserSession::class)->setUser($user);\OC_Util::setupFS($uid);$home=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid);
if($mode==='client-seed'){echo "client_created=true\n";exit;}
if($mode==='source-seed'){$folder=$home->newFolder('Source');$file=$folder->newFile('storage.epub',epub());file_put_contents('/tmp/library-storage-original.json',json_encode(['hash'=>hash('sha256',$file->getContent()),'etag'=>$file->getEtag()]));echo "source_created=true\n";exit;}
if($mode==='source-verify'){$expected=json_decode(file_get_contents('/tmp/library-storage-original.json'),true);$file=$home->get('Source/storage.epub');check(hash('sha256',$file->getContent())===$expected['hash'],'remote original bytes remain unchanged');check($file->getEtag()===$expected['etag'],'remote original etag remains unchanged');exit;}
if($mode==='source-cleanup'||$mode==='client-cleanup'){$user->delete();echo "storage_fixture_account_removed=true\n";exit;}
if($mode==='encrypted'){$folder=$home->newFolder('Encrypted fixture');$file=$folder->newFile('storage.epub',epub());$path='/Encrypted fixture';check($file->isEncrypted(),'fixture source is encrypted by Nextcloud');}
else{$path='/Remote books';$file=$home->get('Remote books/storage.epub');}
check($file instanceof \OCP\Files\File && $file->isReadable(),'storage source is readable');$hash=hash('sha256',$file->getContent());
if($mode==='read-only')check(!$file->isUpdateable(),'mount enforces read-only permissions');else check($file->isUpdateable(),'storage fixture is otherwise writable');
check(!$file->getStorage()->isLocal(),'storage exposes buffered or encrypted semantics');
$root=service('RootService')->saveRoot($uid,$path,'Storage fixture',true);service('LibraryScanner')->scan($uid,$root['id']);
$id=(int)$db->executeQuery('SELECT id FROM *PREFIX*library_items WHERE user_id=? ORDER BY id LIMIT 1',[$uid])->fetchOne();check($id>0,'external or encrypted EPUB remains browsable in Library');
$items=service('ItemService');$book=$items->findItem($uid,$id);$items->updateItem($uid,$id,['title'=>'Local metadata edit on storage fixture'],$book['metadataRevision']);check($items->findItem($uid,$id)['title']==='Local metadata edit on storage fixture','Library-only metadata edits remain available');
$writer=service('WriteBackService');$rejected=false;try{$writer->preview($uid,$id,['title']);}catch(DomainException $e){$rejected=$e->getMessage()==='storage_not_supported';}catch(OutOfBoundsException){$rejected=$mode==='read-only';}
check($rejected,'source write is refused before opening a writable storage stream');check($writer->list($uid,$id)===[],'unsupported storage creates no misleading preview or recovery job');check(hash('sha256',$file->getContent())===$hash,'refused source write preserves original bytes');
if($mode==='encrypted'){$user->delete();echo "encrypted_fixture_account_removed=true\n";}
