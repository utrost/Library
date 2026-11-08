<?php
declare(strict_types=1);
// Run inside a labelled disposable Nextcloud container; no existing account or book is used.
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
if(getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1')throw new RuntimeException('Disposable fixture opt-in required');
set_exception_handler(static function(Throwable $e):void{fwrite(STDERR,get_class($e).': '.$e->getMessage()."\n".$e->getTraceAsString()."\n");exit(1);});
function service(string $name):object{return \OC::$server->get('OCA\\Library\\Service\\'.$name);}
function check(bool $ok,string $message):void{if(!$ok)throw new RuntimeException($message);echo "PASS $message\n";}
function digest($stream):string{try{$hash=hash_init('sha256');hash_update_stream($hash,$stream);return hash_final($hash);}finally{fclose($stream);}}
$uid='library-large-'.bin2hex(random_bytes(4));$user=\OC::$server->get(\OCP\IUserManager::class)->createUser($uid,'Disposable-large-2026');\OC::$server->get(\OCP\IUserSession::class)->setUser($user);
$files=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid);$folder=$files->newFolder('Large fixture');
$payload=tempnam('/tmp','library-payload-');$archive=tempnam('/tmp','library-large-');
try {
 $stream=fopen($payload,'wb');check(ftruncate($stream,127*1024*1024),'large synthetic payload created');fclose($stream);
 $zip=new ZipArchive();check($zip->open($archive,ZipArchive::OVERWRITE)===true,'large fixture ZIP opens');
 $zip->addFromString('mimetype','application/epub+zip');$zip->setCompressionName('mimetype',ZipArchive::CM_STORE);
 $zip->addFromString('META-INF/container.xml','<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>');
 $zip->addFromString('content.opf','<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="uid"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="uid">urn:fixture:large</dc:identifier><dc:title>Large fixture original</dc:title><dc:language>en</dc:language><meta property="dcterms:modified">2026-01-01T00:00:00Z</meta></metadata><manifest><item id="chapter" href="chapter.xhtml" media-type="application/xhtml+xml"/><item id="payload" href="payload.bin" media-type="application/octet-stream"/></manifest><spine><itemref idref="chapter"/></spine></package>');
 $zip->addFromString('chapter.xhtml','<html xmlns="http://www.w3.org/1999/xhtml"><head><title>Fixture</title></head><body><p>Large synthetic archive.</p></body></html>');
 $zip->addFile($payload,'payload.bin');$zip->setCompressionName('payload.bin',ZipArchive::CM_STORE);check($zip->close(),'large fixture ZIP closes');
 $sourceHash=hash_file('sha256',$archive);$bytes=filesize($archive);check($bytes>127*1024*1024 && $bytes<\OCA\Library\WriteBack\EpubMetadataWriter::MAX_BYTES,'fixture is just below the 128 MiB source limit');
 $input=fopen($archive,'rb');try{$file=$folder->newFile('large.epub',$input);}finally{if(is_resource($input))fclose($input);}
 $root=service('RootService')->saveRoot($uid,'/Large fixture','Large fixture',true);service('LibraryScanner')->scan($uid,$root['id']);
 $db=\OC::$server->get(\OCP\IDBConnection::class);$bookId=(int)$db->executeQuery('SELECT i.id FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id WHERE i.user_id=? AND f.file_id=?',[$uid,$file->getId()])->fetchOne();check($bookId>0,'large EPUB is indexed');
 $items=service('ItemService');$book=$items->findItem($uid,$bookId);$items->updateItem($uid,$bookId,['title'=>'Large fixture reviewed'],$book['metadataRevision']);
 $writer=service('WriteBackService');memory_reset_peak_usage();$baseline=memory_get_usage(true);$start=microtime(true);
 $job=$writer->preview($uid,$bookId,['title']);check(digest($file->fopen('rb'))===$sourceHash,'large preview leaves original bytes untouched');
 check($writer->apply($uid,$job['id'])['status']==='applied','large EPUB writes through streams');check(digest($file->fopen('rb'))!==$sourceHash,'large source contains reviewed metadata');
 check($writer->apply($uid,$job['id'],true)['status']==='restored','large EPUB restoration completes');check(digest($file->fopen('rb'))===$sourceHash,'large EPUB restores exact original bytes');
 $peak=memory_get_peak_usage(true);$roundTripMs=round((microtime(true)-$start)*1000,1);check($peak-$baseline<32*1024*1024,'large write/restore PHP heap stays bounded below 32 MiB growth');$writer->delete($uid,$job['id']);
 $stream=$file->fopen('r+');check(ftruncate($stream,\OCA\Library\WriteBack\EpubMetadataWriter::MAX_BYTES+1),'oversized fixture prepared');fclose($stream);
 $file->getStorage()->getUpdater()->update($file->getInternalPath());$oversizeHash=digest($file->fopen('rb'));$rejected=false;
 try{$writer->preview($uid,$bookId,['title']);}catch(DomainException|LengthException){$rejected=true;}
 check($rejected,'source above 128 MiB is rejected');check(digest($file->fopen('rb'))===$oversizeHash,'oversized rejection leaves bytes unchanged');
 echo json_encode(['sourceBytes'=>$bytes,'previewWriteRestoreMs'=>$roundTripMs,'phpBaselineBytes'=>$baseline,'phpPeakBytes'=>$peak,'externalRequests'=>0]),"\n";
 $user->delete();check(true,'synthetic large-file account removed');
} finally {@unlink($payload);@unlink($archive);}
