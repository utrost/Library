<?php
declare(strict_types=1);
// Synthetic files only; pair with the independent conformance fixture generator.
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
if(getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1')throw new RuntimeException('Disposable fixture opt-in required');
$users=\OC::$server->get(\OCP\IUserManager::class);$state='/tmp/library-reader-fixture.json';
if(($argv[1]??'')==='cleanup'){$data=json_decode(file_get_contents($state),true,32,JSON_THROW_ON_ERROR);if(!str_starts_with($data['user'],'library-reader-'))throw new RuntimeException('Invalid fixture owner');$users->get($data['user'])?->delete();unlink($state);echo "reader_fixture_removed=true\n";exit;}
if(is_file($state))throw new RuntimeException('Clean the previous reader fixture first');
$input=getenv('LIBRARY_EPUBCHECK_OUTPUT');if(!$input||!is_dir($input))throw new RuntimeException('Supply the generated conformance fixture directory');
$uid='library-reader-'.bin2hex(random_bytes(4));$password='Disposable-reader-2026';$user=$users->createUser($uid,$password);\OC::$server->get(\OCP\IUserSession::class)->setUser($user);\OC::$server->get(\OCP\IConfig::class)->setUserValue($uid,'core','lang','en');
$folder=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid)->newFolder('Reader fixtures');$data=['user'=>$uid,'password'=>$password,'books'=>[]];file_put_contents($state,json_encode($data,JSON_THROW_ON_ERROR));
foreach([2,3] as $version)foreach(['original','reviewed','cleared-authors'] as $kind){$name="epub-$version-$kind.epub";$content=file_get_contents($input.'/'.$name);$file=$folder->newFile($name,$content);$data['books'][]=['name'=>$name,'fileId'=>$file->getId(),'hash'=>hash('sha256',$content),'title'=>$kind==='reviewed'?'Reviewed & literal <title>':'Original synthetic publication'];}
$root=\OC::$server->get(\OCA\Library\Service\RootService::class)->saveRoot($uid,'/Reader fixtures','Reader fixtures',true);\OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan($uid,$root['id']);$db=\OC::$server->get(\OCP\IDBConnection::class);
foreach($data['books'] as &$book){$book['itemId']=(int)$db->executeQuery('SELECT i.id FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id WHERE i.user_id=? AND f.file_id=?',[$uid,$book['fileId']])->fetchOne();if(!$book['itemId'])throw new RuntimeException('Reader fixture missing from catalogue');}unset($book);
file_put_contents($state,json_encode($data,JSON_THROW_ON_ERROR));echo "reader_fixture_ready=true\n";
