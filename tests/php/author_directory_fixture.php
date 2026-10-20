<?php
// Owned fixture account; used by smoke-opf-series.mjs on developer and disposable servers.
declare(strict_types=1);define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
$statePath='/tmp/library-author-directory-fixture.json';$action=$argv[1]??'status';
$db=\OCP\Server::get(\OCP\IDBConnection::class);$users=\OCP\Server::get(\OCP\IUserManager::class);$roots=\OCP\Server::get(\OCA\Library\Service\RootService::class);$scanner=\OCP\Server::get(\OCA\Library\Service\LibraryScanner::class);
if($action==='setup'){
 if(file_exists($statePath))throw new RuntimeException('Existing fixture must be cleaned up first');
 $uid='library-author-'.bin2hex(random_bytes(6));$account=$users->createUser($uid,bin2hex(random_bytes(24)));
 \OCP\Server::get(\OCP\IConfig::class)->setUserValue($uid,'firstrunwizard','show',implode('.',\OCP\Util::getVersion()));
 file_put_contents($statePath,json_encode(['uid'=>$uid]));chmod($statePath,0600);
 $folder=\OCP\Server::get(\OCP\Files\IRootFolder::class)->getUserFolder($uid)->newFolder('Author fixtures');
 foreach(['calibre','epub3'] as $kind){
  $meta=$kind==='calibre'?'<meta name="calibre:series" content="Calibre fixture"/><meta name="calibre:series_index" content="2.5"/>':'<meta property="belongs-to-collection" id="series">EPUB 3 fixture</meta><meta property="collection-type" refines="#series">series</meta><meta property="group-position" refines="#series">01</meta>';
  $tmp=tempnam('/tmp','series-');try{$z=new ZipArchive();$z->open($tmp,ZipArchive::OVERWRITE);$z->addFromString('META-INF/container.xml','<container><rootfiles><rootfile full-path="book.opf"/></rootfiles></container>');$z->addFromString('book.opf','<package xmlns="http://www.idpf.org/2007/opf" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata><dc:title>'.$kind.' fixture</dc:title><dc:language>en</dc:language><dc:creator>John Doe</dc:creator>'.$meta.'</metadata></package>');$z->close();$folder->newFile($kind.'.epub',file_get_contents($tmp));}finally{unlink($tmp);}
 }
 $root=$roots->saveRoot($uid,'/Author fixtures','Author fixtures',true);$state=['uid'=>$uid,'rootId'=>(int)$root['id']];file_put_contents($statePath,json_encode($state));$scanner->scan($uid,$state['rootId']);
}else{$state=json_decode(file_get_contents($statePath),true,512,JSON_THROW_ON_ERROR);$uid=$state['uid'];}
if($action==='cleanup'){$users->get($uid)?->delete();unlink($statePath);echo json_encode(['cleanup'=>true]),PHP_EOL;exit;}
if($action==='rescan'){
 // Simulate a version upgrade on unchanged files to exercise revision invalidation.
 $db->executeStatement('UPDATE *PREFIX*library_files SET metadata_extractor_revision=? WHERE user_id=?',['metadata-pipeline-v7',$uid]);
 $scan=$scanner->scan($uid,$state['rootId']);if($scan['metadataExtractions']!==2)throw new RuntimeException('Expected both unchanged fixture files to re-extract');
}
$storage=\OCP\Server::get(\OCA\Library\Service\AuthorStorageService::class);$storage->advance($uid);
\OCP\Server::get(\OCA\Library\Service\SeriesStorageService::class)->advance($uid);
if ($action === 'setup') {
 $genres=\OCP\Server::get(\OCA\Library\Service\GenreService::class);
 $books=$db->executeQuery('SELECT id FROM *PREFIX*library_items WHERE user_id=? ORDER BY id',[$uid])->fetchAll();
 foreach (['Fixture genre Alpha','Fixture genre Zulu'] as $name) { $genre=$genres->create($uid,$name); foreach($books as $book) $genres->assign($uid,(int)$book['id'],(int)$genre['id'],true); }
}

$r=$db->executeQuery('SELECT i.id,i.title,i.series_name,i.series_number,i.field_values,i.user_edited,f.etag,f.size,f.mtime FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=? ORDER BY i.title',[$uid]);$rows=$r->fetchAll();$r->closeCursor();echo json_encode(['uid'=>$uid,'items'=>$rows,'scan'=>$scan??null,'directory'=>\OCP\Server::get(\OCA\Library\Service\AuthorDirectoryService::class)->directory($uid)]),PHP_EOL;
