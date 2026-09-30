<?php
declare(strict_types=1);

// Run only inside scripts/dev-lists-instance.sh's disposable Nextcloud.
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
set_exception_handler(static function (Throwable $e): void {
    fwrite(STDERR, (string)$e . "\n");
    exit(1);
});

use OCA\Library\Exception\ListConflictException;
use OCA\Library\Service\PersonalListService;
use OCA\Library\Service\RootService;
use OCA\Library\Service\LibraryScanner;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;
use OCP\IUserManager;
use OCP\Share\IManager;

function check(bool $ok, string $message): void { if (!$ok) throw new RuntimeException($message); }
function rejects(string $type, callable $fn): void {
    try { $fn(); } catch (Throwable $e) { check($e instanceof $type, 'Wrong error: ' . get_class($e)); return; }
    throw new RuntimeException('Expected rejection: ' . $type);
}

$uid = 'library-smoke';
$other = 'library-lists-other';
$lists = \OC::$server->get(PersonalListService::class);
$db = \OC::$server->get(IDBConnection::class);
$users = \OC::$server->get(IUserManager::class);
if (!$users->userExists($other)) $users->createUser($other, 'Disposable-lists-other-2026');
$qb = $db->getQueryBuilder();
$result = $qb->select('i.id', 'f.file_id')->from('library_items', 'i')
    ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
    ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($uid)))->orderBy('i.id', 'ASC')->executeQuery();
$books = $result->fetchAll(); $result->closeCursor();
check(count($books) === 40, 'Expected exactly 40 Gutenberg books');
$ids = array_map('intval', array_column($books, 'id'));
$cleanup = [];
$share = null;
$otherRoot = null;
$files = \OC::$server->get(IRootFolder::class);
$node = $files->getUserFolder($uid)->getById((int)$books[0]['file_id'])[0];
$originalHash = hash('sha256', $node->getContent());
try {
    $first = $lists->create($uid, 'Integration reading plan', 'Private list description'); $cleanup[] = [$uid, $first['id']];
    $second = $lists->create($uid, 'Integration second list', ''); $cleanup[] = [$uid, $second['id']];
    rejects(OutOfBoundsException::class, fn () => $lists->find($other, $first['id']));
    rejects(OutOfBoundsException::class, fn () => $lists->add($other, $first['id'], 1, [$ids[0]]));
    rejects(InvalidArgumentException::class, fn () => $lists->add($uid, $first['id'], 1, []));
    rejects(InvalidArgumentException::class, fn () => $lists->add($uid, $first['id'], 1, [$ids[0], $ids[0]]));
    check($lists->find($uid, $first['id'])['revision'] === 1, 'Invalid selection changed revision');
    $added = $lists->add($uid, $first['id'], 1, $ids);
    check($added['added'] === 40 && $added['skipped'] === 0, 'Batch add failed');
    rejects(ListConflictException::class, fn () => $lists->update($uid, $first['id'], 1, 'Stale name', ''));
    $page = $lists->page($uid, $first['id']);
    check(count($page['entries']) === 25 && $page['pages'] === 2 && $page['total'] === 40, 'Pagination failed');
    $entry = $page['entries'][0];
    $lists->note($uid, $first['id'], 2, $entry['id'], 'Read chapters 1–3 <script>literal</script>');
    $duplicate = $lists->add($uid, $first['id'], 3, [$ids[0]]);
    check($duplicate['alreadyPresent'] === 1 && $duplicate['added'] === 0, 'Duplicate added');
    $lists->move($uid, $first['id'], 4, $entry['id'], null, 'down');
    $page = $lists->page($uid, $first['id']);
    check($page['entries'][1]['id'] === $entry['id'], 'Keyboard reordering failed');
    $lists->move($uid, $first['id'], 5, $entry['id'], null);
    $lastPage = $lists->page($uid, $first['id'], 2);
    check(end($lastPage['entries'])['id'] === $entry['id'], 'Cross-page reorder failed');
    $lists->add($uid, $second['id'], 1, [$ids[0]]);
    $secondEntry = $lists->page($uid, $second['id'])['entries'][0];
    $lists->note($uid, $second['id'], 2, $secondEntry['id'], 'Different purpose');
    check(end($lastPage['entries'])['note'] !== 'Different purpose', 'Notes leaked across lists');
    rejects(OutOfBoundsException::class, fn () => $lists->note($uid, $first['id'], 6, $secondEntry['id'], 'wrong list'));
    check($lists->find($uid, $first['id'])['revision'] === 6, 'Failed mutation did not roll back');
    $lists->update($uid, $first['id'], 6, 'Renamed reading plan', 'Updated description');
    check($lists->find($uid, $first['id'])['name'] === 'Renamed reading plan', 'Rename did not persist');

    $scan = \OC::$server->get(LibraryScanner::class)->scan($uid);
    check($scan['indexed'] === 40, 'Rescan failed');
    $after = $lists->page($uid, $first['id'], 2);
    check(end($after['entries'])['note'] === 'Read chapters 1–3 <script>literal</script>', 'Rescan lost note');
    check(end($after['entries'])['id'] === $entry['id'], 'Rescan lost order');

    // Actual Files sharing and revocation, before the recipient has rescanned.
    $shares = \OC::$server->get(IManager::class);
    \OC::$server->get(\OCP\IUserSession::class)->setUser($users->get($uid));
    $proposedShare = $shares->newShare();
    $proposedShare->setNode($node)->setShareType(\OCP\Share\IShare::TYPE_USER)->setSharedBy($uid)->setSharedWith($other)->setPermissions(\OCP\Constants::PERMISSION_READ);
    $share = $shares->createShare($proposedShare);
    $otherRoot = \OC::$server->get(RootService::class)->saveRoot($other, '/', 'Shared test files', true);
    \OC::$server->get(LibraryScanner::class)->scan($other);
    $qb = $db->getQueryBuilder();
    $result = $qb->select('i.id')->from('library_items', 'i')->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
        ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($other)))
        ->andWhere($qb->expr()->eq('f.file_id', $qb->createNamedParameter((int)$books[0]['file_id'])))->executeQuery();
    $sharedItemId = (int)$result->fetchOne(); $result->closeCursor();
    check($sharedItemId > 0, 'Recipient did not index shared book');
    $sharedList = $lists->create($other, 'Shared source, private note', ''); $cleanup[] = [$other, $sharedList['id']];
    $lists->add($other, $sharedList['id'], 1, [$sharedItemId]);
    $sharedEntry = $lists->page($other, $sharedList['id'])['entries'][0];
    check($sharedEntry['book'] !== null, 'Readable shared book hidden');
    $lists->note($other, $sharedList['id'], 2, $sharedEntry['id'], 'Keep this private note');
    $shares->deleteShare($share); $share = null;
    $unavailable = $lists->page($other, $sharedList['id'])['entries'][0];
    check($unavailable['book'] === null && $unavailable['note'] === 'Keep this private note', 'Revoked share leaked metadata or lost note');
    $blocked = $lists->add($uid, $second['id'], 3, [$sharedItemId]);
    check($blocked['skipped'] === 1, 'Added a foreign catalogue item');
    \OC::$server->get(RootService::class)->deleteRoot($other, (int)$otherRoot['id']); $otherRoot = null;
    $orphan = $lists->page($other, $sharedList['id'])['entries'][0];
    check($orphan['book'] === null && $orphan['note'] === 'Keep this private note', 'Root deletion lost list notes');
    check(hash('sha256', $node->getContent()) === $originalHash, 'List operations changed publication content');
    $lists->remove($uid, $first['id'], 7, $entry['id']);
    check($lists->page($uid, $first['id'])['total'] === 39, 'Remove failed');
    echo "personal_lists_integration_ok=true books=40 pagination=true revisions=true rescan=true share_revocation=true orphan_notes=true source_unchanged=true\n";
} finally {
    if ($share !== null) \OC::$server->get(IManager::class)->deleteShare($share);
    if ($otherRoot !== null) \OC::$server->get(RootService::class)->deleteRoot($other, (int)$otherRoot['id']);
    foreach ($cleanup as [$owner, $id]) {
        try { $lists->delete($owner, $id, $lists->find($owner, $id)['revision']); } catch (OutOfBoundsException $e) {}
    }
}
