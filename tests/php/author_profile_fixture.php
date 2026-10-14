<?php
declare(strict_types=1);
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
$path='/tmp/library-author-directory-fixture.json';$state=json_decode(file_get_contents($path),true,512,JSON_THROW_ON_ERROR);$uid=$state['uid'];
if(!preg_match('/^library-author-[a-f0-9]{12}$/D',$uid))throw new RuntimeException('Owned fixture required');
$users=\OCP\Server::get(\OCP\IUserManager::class);
if(($argv[1]??'')==='cleanup'){
 if(isset($state['otherUid'])&&preg_match('/^library-author-check-[a-f0-9]{12}$/D',$state['otherUid']))$users->get($state['otherUid'])?->delete();
 $photos=\OCP\Server::get(\OCA\Library\Service\AuthorPhotoService::class);
 $key=is_file('/tmp/library-author-profile-upload.png')?$photos->store($uid,$photos->thumbnail(file_get_contents('/tmp/library-author-profile-upload.png'))):null;
 $users->get($uid)?->delete();
 if($key!==null){try{$photos->get($uid,$key);throw new RuntimeException('Portrait remains after account deletion');}catch(\OCP\Files\NotFoundException){}}
 @unlink('/tmp/library-author-profile-upload.png');echo json_encode(['cleanup'=>true,'portraitDeleted'=>true]),PHP_EOL;exit;
}
$other='library-author-check-'.bin2hex(random_bytes(6));$users->createUser($other,bin2hex(random_bytes(24)));$state['otherUid']=$other;file_put_contents($path,json_encode($state));
$folder=\OCP\Server::get(\OCP\Files\IRootFolder::class)->getUserFolder($uid)->get('Author fixtures');
for($i=1;$i<=51;$i++){
 $tmp=tempnam('/tmp','author-profile-');
 try{$z=new ZipArchive();$z->open($tmp,ZipArchive::OVERWRITE);$z->addFromString('META-INF/container.xml','<container><rootfiles><rootfile full-path="book.opf"/></rootfiles></container>');
 $z->addFromString('book.opf','<package xmlns="http://www.idpf.org/2007/opf" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata><dc:title>Profile fixture '.sprintf('%02d',$i).'</dc:title><dc:creator>John Doe</dc:creator><dc:date>'.(2020+$i%5).'</dc:date><meta name="calibre:series" content="Profile series"/><meta name="calibre:series_index" content="'.$i.'"/></metadata></package>');$z->close();$folder->newFile('profile-'.$i.'.epub',file_get_contents($tmp));}finally{unlink($tmp);}
}
\OCP\Server::get(\OCA\Library\Service\LibraryScanner::class)->scan($uid,$state['rootId']);
\OCP\Server::get(\OCA\Library\Service\AuthorStorageService::class)->advance($uid,100,30);
$directory=\OCP\Server::get(\OCA\Library\Service\AuthorDirectoryService::class);$author=$directory->directory($uid)['authors'][0];$id=(int)$author['id'];
$assertions=0;$assert=function($value,$message)use(&$assertions){if(!$value)throw new RuntimeException($message);$assertions++;};
$page=$directory->page($uid,$id);$assert($page['bookCount']===53&&count($page['books'])===50&&$page['hasNext'],'pagination');
$assert(count($directory->page($uid,$id,2)['books'])===3,'last page');
$assert($directory->page($uid,$id,1,'fixture 51')['matchingCount']===1,'title search');
$assert($directory->page($uid,$id,1,'%')['matchingCount']===0,'literal search');
$assert(str_starts_with($directory->page($uid,$id,1,'','newest')['books'][0]['publication_date'],'2024'),'date sorting');
try{$directory->profile($other,$id);$assert(false,'ownership');}catch(OutOfBoundsException){$assert(true,'ownership');}
$fields=['display_name'=>'John Doe','sort_name'=>'Doe, John','given_name'=>'John','family_name'=>'Doe','biography'=>str_repeat('x',10001)];
try{$directory->update($uid,$id,(int)$author['revision'],$fields);$assert(false,'biography bound');}catch(InvalidArgumentException){$assert(true,'biography bound');}
$img=imagecreatetruecolor(640,480);imagefill($img,0,0,imagecolorallocate($img,42,89,122));imagefilledellipse($img,320,170,160,160,imagecolorallocate($img,236,224,201));imagefilledellipse($img,320,440,360,340,imagecolorallocate($img,236,224,201));imagepng($img,'/tmp/library-author-profile-upload.png');imagedestroy($img);chmod('/tmp/library-author-profile-upload.png',0600);
echo json_encode(['uid'=>$uid,'otherUid'=>$other,'authorId'=>$id,'assertions'=>$assertions,'books'=>53]),PHP_EOL;
