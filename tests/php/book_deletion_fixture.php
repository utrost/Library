<?php
/** Destructive tests are confined to a fresh, explicitly owned disposable account. */
declare(strict_types=1);
define('OC_CONSOLE', true); require '/var/www/html/lib/base.php';
set_exception_handler(static function (Throwable $error): void { fwrite(STDERR, get_class($error).': '.$error->getMessage().PHP_EOL.$error->getTraceAsString().PHP_EOL); exit(1); });
use OCA\Library\Service\BookFileDeletionService;
$statePath = '/tmp/library-book-deletion-fixture.json'; $action = $argv[1] ?? 'status';
$users = \OCP\Server::get(\OCP\IUserManager::class); $db = \OCP\Server::get(\OCP\IDBConnection::class);
$rootService = \OCP\Server::get(\OCA\Library\Service\RootService::class);
$scanner = \OCP\Server::get(\OCA\Library\Service\LibraryScanner::class);
$service = \OCP\Server::get(BookFileDeletionService::class);
function check(bool $value, string $label): void { if (!$value) throw new RuntimeException($label); }
if ($action === 'setup') {
    check(!file_exists($statePath), 'Clean the previous fixture first');
    $uid = 'library-delete-' . bin2hex(random_bytes(6));
    $users->createUser($uid, bin2hex(random_bytes(24)));
    file_put_contents($statePath, json_encode(['uid' => $uid])); chmod($statePath, 0600);
    \OCP\Server::get(\OCP\IConfig::class)->setUserValue($uid, 'firstrunwizard', 'show', implode('.', \OCP\Util::getVersion()));
    \OCP\Server::get(\OCA\UserStatus\Service\StatusService::class)->setStatus($uid, 'online', null, false);
    $home = \OCP\Server::get(\OCP\Files\IRootFolder::class)->getUserFolder($uid);
    $shelf = $home->newFolder('Delete fixtures');
    $opf = '<package xmlns="http://www.idpf.org/2007/opf" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata><dc:title>Deletion fixture</dc:title><dc:creator>Fixture Author</dc:creator></metadata></package>';
    foreach (['exclusive', 'shared', 'same-stem', 'hidden', 'cover', 'standalone', 'changed', 'replaced', 'readonly', 'opf-failure', 'source-failure', 'folder-race', 'opf-readonly', 'root-only', 'cleanup-failure', 'race', 'browser-chromium', 'browser-firefox', 'browser-mobile'] as $name) {
        $folder = $shelf->newFolder($name);
        if ($name === 'standalone') $folder->newFile('book.opf', $opf);
        else {
            $folder->newFile('book.pdf', "%PDF-1.4\n1 0 obj << /Title (Deletion fixture) >> endobj\n%%EOF");
            $folder->newFile($name === 'same-stem' ? 'book.opf' : 'metadata.opf', $opf);
        }
        if (in_array($name, ['shared', 'same-stem'], true)) $folder->newFile('book.epub', 'Another format must survive');
        if ($name === 'hidden') $folder->newFile('.keep', 'Keep hidden files');
        if ($name === 'cover') $folder->newFile('cover.jpg', 'Keep covers');
    }
    $shelf->newFile('root.pdf', "%PDF-1.4\n%%EOF");
    $root = $rootService->saveRoot($uid, '/Delete fixtures', 'Delete fixtures', true);
    file_put_contents($statePath, json_encode(['uid' => $uid, 'rootId' => (int)$root['id']]));
    $rootService->saveRoot($uid, '/Delete fixtures/root-only', 'Protected root', false);
    $scanner->scan($uid, (int)$root['id']);
    \OCP\Server::get(\OCA\Library\Service\AuthorStorageService::class)->advance($uid);
    \OCP\Server::get(\OCA\Library\Service\SeriesStorageService::class)->advance($uid);
}
$state = json_decode(file_get_contents($statePath), true, 32, JSON_THROW_ON_ERROR); $uid = $state['uid'];
check((bool)preg_match('/^library-delete-[a-f0-9]{12}$/D', $uid), 'Only fixture accounts are allowed');
if ($action === 'cleanup') { $users->get($uid)?->delete(); unlink($statePath); echo '{"cleaned":true}', PHP_EOL; exit; }
$home = \OCP\Server::get(\OCP\Files\IRootFolder::class)->getUserFolder($uid);
$shelf = $home->get('Delete fixtures');
$items = \OCP\Server::get(\OCA\Library\Service\ItemService::class);
$rows = $db->executeQuery('SELECT i.id,f.cached_path FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id WHERE i.user_id=?', [$uid])->fetchAll();
$byCase = [];
foreach ($rows as $row) { if (str_ends_with($row['cached_path'], '.pdf') || str_ends_with($row['cached_path'], '/standalone/book.opf')) $byCase[basename(dirname($row['cached_path']))] = (int)$row['id']; }
if ($action === 'verify') {
    \OCP\Server::get(\OCP\IUserSession::class)->setUser($users->get($uid));
    $results = [];
    $lists = \OCP\Server::get(\OCA\Library\Service\PersonalListService::class);
    $list = $lists->create($uid, 'Deletion fixture list', '');
    $lists->add($uid, $list['id'], $list['revision'], [$byCase['exclusive']]);
    foreach (['exclusive', 'shared', 'same-stem', 'hidden', 'cover', 'standalone', 'root-only', 'Delete fixtures'] as $case) {
        $id = $byCase[$case]; $plan = $service->preview($uid, $id);
        if (in_array($case, ['shared', 'same-stem'], true)) check($plan['keepOpf'] === 'shared', 'Shared sidecar preview');
        if (in_array($case,['root-only','Delete fixtures'],true)) check($plan['parent'] === null, 'Shelf root protected');
        $result = $service->delete($uid, $id, $plan['token']);
        check($result['deleted'] && $result['warnings'] === [], $case . ' deletion/cleanup: ' . json_encode($result));
        check($items->findItem($uid, $id) === null, 'Catalogue cleanup');
        check($service->delete($uid, $id, $plan['token'])['alreadyDeleted'], 'Replay');
        foreach (['library_item_authors','library_item_series','library_item_genres','library_item_identifiers','library_item_facets','library_item_search_grams','library_dup_index','library_dup_terms'] as $table) check((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*'.$table.' WHERE user_id=? AND item_id=?',[$uid,$id])->fetchOne() === 0, 'Derived cleanup '.$table);
        if (in_array($case, ['exclusive','standalone'], true)) check(!$shelf->nodeExists($case), 'Empty parent removed');
        elseif ($case !== 'Delete fixtures') {
            check($shelf->nodeExists($case), 'Nonempty parent kept');
            $folder = $shelf->get($case); check(!$folder->nodeExists('book.pdf'), 'Book removed');
            if (in_array($case,['shared','same-stem'],true)) check($folder->nodeExists('book.epub') && $folder->nodeExists($case==='same-stem'?'book.opf':'metadata.opf'),'Other format and shared OPF preserved');
        }
        if ($case === 'exclusive') {
            $trash=\OCP\Server::get(\OCA\Files_Trashbin\Trash\ITrashManager::class);
            $matches=array_values(array_filter($trash->listTrashRoot($users->get($uid)),static fn($entry)=>$entry->getOriginalLocation()==='Delete fixtures/exclusive/book.pdf'));
            check(count($matches)===1,'Source moved to Nextcloud trash');
            foreach($trash->listTrashRoot($users->get($uid)) as $entry) if($entry->getOriginalLocation()==='Delete fixtures/exclusive') $trash->restoreItem($entry);
            $trash->restoreItem($matches[0]);
            check($shelf->nodeExists('exclusive/book.pdf'),'Nextcloud trash restore');
        }
        $results[] = $case;
    }
    check($lists->page($uid, $list['id'])['entries'][0]['book'] === null, 'Unavailable list entry retained');
    $id=$byCase['opf-readonly'];$opf=$shelf->get('opf-readonly/metadata.opf');$opf->getStorage()->getCache()->update((int)$opf->getId(),['permissions'=>1]);
    $plan=$service->preview($uid,$id);check($plan['keepOpf']==='permission','OPF permissions');$service->delete($uid,$id,$plan['token']);check($shelf->nodeExists('opf-readonly/metadata.opf'),'Read-only OPF retained');
    $id=$byCase['changed'];$plan=$service->preview($uid,$id);$saved=$items->findItem($uid,$id);
    $items->updateItem($uid,$id,['title'=>'Changed after preview'],$saved['metadataRevision']);
    try {$service->delete($uid,$id,$plan['token']);throw new RuntimeException('Stale metadata accepted');}catch(DomainException){}
    $id=$byCase['changed'];$plan=$service->preview($uid,$id);$shelf->get('changed/book.pdf')->putContent('%PDF-1.4 changed');
    try {$service->delete($uid,$id,$plan['token']);throw new RuntimeException('Stale file accepted');}catch(DomainException){}
    $id=$byCase['replaced'];$plan=$service->preview($uid,$id);$shelf->get('replaced/book.pdf')->delete();$shelf->get('replaced')->newFile('book.pdf','Replacement');
    try {$service->delete($uid,$id,$plan['token']);throw new RuntimeException('Replacement deleted');}catch(OutOfBoundsException){}
    check($shelf->get('replaced/book.pdf')->getContent()==='Replacement','Replacement survived');
    $id=$byCase['readonly'];$file=$shelf->get('readonly/book.pdf');$storage=$file->getStorage();$fid=(int)$file->getId();
    $storage->getCache()->update($fid,['permissions'=>1]);
    try {$service->preview($uid,$id);throw new RuntimeException('Read-only accepted');}catch(\OCP\Files\NotPermittedException){}
    finally {$storage->getCache()->update($fid,['permissions'=>31]);}
    $plan=$service->preview($uid,$id);
    try {$service->delete($uid,$id,substr($plan['token'],0,-8).'tampered');throw new RuntimeException('Tampered token');}catch(DomainException){}
    $crypto=\OCP\Server::get(\OCP\Security\ICrypto::class);$claim=json_decode($crypto->decrypt($plan['token']),true);$claim['expires']=time()-1;
    try {$service->delete($uid,$id,$crypto->encrypt(json_encode($claim)));throw new RuntimeException('Expired token');}catch(DomainException){}
    try {$service->preview($uid.'-other',$id);throw new RuntimeException('Ownership leak');}catch(OutOfBoundsException){}
    try {$service->delete($uid.'-other',$id,$plan['token']);throw new RuntimeException('Cross-account token');}catch(DomainException){}
    $dispatcher=\OCP\Server::get(\OCP\EventDispatcher\IEventDispatcher::class);
    $dispatcher->addListener('\\OCP\\Files::preDelete',static function($event)use($uid){
        $node=$event->getSubject();$path=$node->getPath();
        if($path==='/'.$uid.'/files/Delete fixtures/folder-race')$node->newFile('.late','Created by a pre-delete hook');
        if($path==='/'.$uid.'/files/Delete fixtures/source-failure/book.pdf')throw new RuntimeException('Injected source failure');
        if($path==='/'.$uid.'/files/Delete fixtures/opf-failure/metadata.opf')throw new RuntimeException('Injected OPF failure');
        if($path==='/'.$uid.'/files/Delete fixtures/race/book.pdf')$node->getParent()->newFile('.arrived','Concurrent arrival');
    });
    $id=$byCase['source-failure'];$plan=$service->preview($uid,$id);
    try {$service->delete($uid,$id,$plan['token']);throw new LogicException('Expected source failure');}catch(RuntimeException $e){check($e->getMessage()==='Injected source failure','Source failure preserved');}
    check($items->findItem($uid,$id)!==null && $shelf->nodeExists('source-failure/metadata.opf'),'No cleanup after source failure');
    $id=$byCase['folder-race'];$plan=$service->preview($uid,$id);$result=$service->delete($uid,$id,$plan['token']);
    check(in_array('folder_retained',$result['warnings'],true)&&$shelf->nodeExists('folder-race/.late'),'Storage guard protects late child');
    $id=$byCase['opf-failure'];$plan=$service->preview($uid,$id);$result=$service->delete($uid,$id,$plan['token']);
    check($result['deleted']&&in_array('opf_retained',$result['warnings'],true),'Partial result '.json_encode($result));check($shelf->nodeExists('opf-failure/metadata.opf'),'Failed OPF retained');
    $id=$byCase['race'];$plan=$service->preview($uid,$id);$service->delete($uid,$id,$plan['token']);check($shelf->nodeExists('race/.arrived'),'Concurrent child preserved');
    if ($db->getDatabaseProvider()==='sqlite') {
        $id=$byCase['cleanup-failure'];$plan=$service->preview($uid,$id);
        $db->executeStatement('CREATE TEMP TRIGGER library_delete_fixture_failure BEFORE DELETE ON *PREFIX*library_items WHEN OLD.id='.(int)$id.' BEGIN SELECT RAISE(ABORT, \'injected cleanup failure\'); END');
        try {$result=$service->delete($uid,$id,$plan['token']);check($result['deleted']&&in_array('catalogue_cleanup',$result['warnings'],true),'Catalogue failure reports deleted file');}
        finally {$db->executeStatement('DROP TRIGGER library_delete_fixture_failure');}
        check(!$shelf->nodeExists('cleanup-failure'),'Cleanup failure does not undo file deletion');
    }
    // Restored source is a newly imported catalogue record; removed local edits are not resurrected.
    $scanner->scan($uid,$state['rootId']);
    check((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=? AND f.cached_path=?',[$uid,'/Delete fixtures/exclusive/book.pdf'])->fetchOne()===1,'Restored file indexed');
    echo json_encode(['passed'=>true,'cases'=>$results,'stale'=>true,'replacement'=>true,'permissions'=>true,'tokens'=>true,'ownership'=>true,'partial'=>true,'concurrentChild'=>true,'rescan'=>true]),PHP_EOL;exit;
}
echo json_encode(['uid'=>$uid,'items'=>$byCase]), PHP_EOL;
