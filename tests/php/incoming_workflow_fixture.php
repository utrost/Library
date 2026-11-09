<?php
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
if (getenv('LIBRARY_DISPOSABLE_FIXTURE') !== '1') throw new RuntimeException('Disposable fixture opt-in required');
set_exception_handler(static function(Throwable $e):void { fwrite(STDERR,get_class($e).': '.$e->getMessage().'\n'.$e->getTraceAsString());exit(1); });
$uid='library-smoke';
$users=\OC::$server->get(\OCP\IUserManager::class);
\OC::$server->get(\OCP\IUserSession::class)->setUser($users->get($uid));
$db=\OC::$server->get(\OCP\IDBConnection::class);
function service(string $name): object { return \OC::$server->get('OCA\\Library\\Service\\'.$name); }
$mode=$argv[1] ?? 'seed';
if($mode==='worker') { for($i=0;$i<12;$i++) service('CurationJobService')->advance(); echo "curation_worker_complete=true\n";exit; }
$files=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid);
if($mode==='seed') {
    if(!$files->nodeExists('IncomingPilot')) {
        $folder=$files->newFolder('IncomingPilot');$pdf=file_get_contents('/tmp/library-fixture.pdf');
        for($i=1;$i<=60;$i++)$folder->newFile(sprintf('incoming-%03d.pdf',$i),$pdf);
    }
    $root=service('RootService')->saveRoot($uid,'/IncomingPilot','Incoming pilot',true);
    service('LibraryScanner')->scan($uid,(int)$root['id']);
    service('AuthorStorageService')->advance($uid,200,5);service('SeriesStorageService')->advance($uid,200,5);
    $config=\OC::$server->get(\OCP\IConfig::class);$config->setAppValue('library','openlibrary_lookup_enabled','yes');
    \OC::$server->get(\OCP\Config\IUserConfig::class)->setValueString($uid,'core','defaultapp','library');
    \OC::$server->get(\OCP\Config\IUserConfig::class)->setValueString($uid,'firstrunwizard','show',implode('.',\OC::$server->get(\OCP\ServerVersion::class)->getVersion()));
    $ids=$db->executeQuery('SELECT i.id FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON i.library_file_id=f.id WHERE i.user_id=? AND f.root_id=? ORDER BY i.id DESC',[$uid,(int)$root['id']])->fetchAll();
    foreach($ids as $index=>$entry) {
        $id=(int)$entry['id'];$item=service('ItemService')->findItem($uid,$id);
        service('ItemService')->updateItem($uid,$id,['title'=>sprintf('Incoming fixture %03d',$index+1)],$item['metadataRevision']);
    }
    file_put_contents('/tmp/library-incoming-fixture.json',json_encode(['rootId'=>(int)$root['id'],'ids'=>array_map('intval',array_column($ids,'id'))],JSON_THROW_ON_ERROR));
}
$state=json_decode(file_get_contents('/tmp/library-incoming-fixture.json'),true,32,JSON_THROW_ON_ERROR);
if($mode==='reset' || $mode==='seed') {
    $db->executeStatement('DELETE FROM *PREFIX*library_inbox_state WHERE user_id=?',[$uid]);
    $inbox=service('CurationInboxService');$page=$inbox->page($uid,0,'all','',$state['rootId']);
    foreach($page['rows'] as $row)$inbox->decide($uid,(int)$row['id'],$row['revision'],'done');
    // The first 50 newest books are Done; older pending books prove bounded traversal.
}
echo json_encode($state,JSON_THROW_ON_ERROR),"\n";
