<?php
declare(strict_types=1);
// Run only inside scripts/smoke-shared-lifecycle.sh's disposable instance.
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
set_exception_handler(static function (Throwable $error): void {
    fwrite(STDERR, get_class($error) . ': ' . $error->getMessage() . "\n");
    exit(1);
});

use OCA\Library\Service\RootService;
use OCA\Library\Service\RootShareService;
use OCP\Constants;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;
use OCP\Share\IManager;
use OCP\Share\IShare;

$owner = 'library-smoke';
$recipient = 'library-recipient';
$mode = $argv[1] ?? '';
$files = \OC::$server->get(IRootFolder::class)->getUserFolder($owner);
$shares = \OC::$server->get(IManager::class);
$db = \OC::$server->get(IDBConnection::class);

function folder(string $name): \OCP\Files\Folder {
    global $files;
    return $files->nodeExists($name) ? $files->get($name) : $files->newFolder($name);
}
function grants(): array {
    global $db, $owner;
    $result = $db->executeQuery('SELECT id,root_id,root_file_id,managed_share_id,recovery_token,revoked_at FROM *PREFIX*library_root_shares WHERE owner_user_id=? ORDER BY id', [$owner]);
    $rows = $result->fetchAll();
    $result->closeCursor();
    return $rows;
}
function fileShares(string $folder): array {
    global $owner, $shares;
    $found = [];
    foreach ($shares->getSharesBy($owner, IShare::TYPE_USER, folder($folder), false, 100, 0, false) as $share) {
        $found[] = ['id' => $share->getFullId(), 'recipient' => $share->getSharedWith(),
            'note' => $share->getNote(), 'permissions' => $share->getPermissions()];
    }
    return $found;
}

if ($mode === 'seed') {
    \OC::$server->get(\OCP\IUserSession::class)->setUser(
        \OC::$server->get(\OCP\IUserManager::class)->get($owner));
    $root = folder('LibraryLifecycle');
    if (!$root->nodeExists('example.pdf')) {
        $root->newFile('example.pdf', "%PDF-1.4\n1 0 obj<</Type/Catalog>>endobj\n%%EOF\n");
    }
    $manual = folder('ManualControl');
    if (!$manual->nodeExists('keep.txt')) {
        $manual->newFile('keep.txt', 'manual share must remain');
    }
    if (fileShares('ManualControl') === []) {
        $share = $shares->newShare();
        $share->setShareType(IShare::TYPE_USER)->setSharedBy($owner)->setShareOwner($owner)
            ->setSharedWith($recipient)->setNode($manual)->setPermissions(Constants::PERMISSION_READ)
            ->setNote('manual-control');
        $shares->createShare($share);
    }
    $libraryRoot = \OC::$server->get(RootService::class)->saveRoot($owner, '/LibraryLifecycle', 'Lifecycle fixture', true);
    $review = \OC::$server->get(RootShareService::class)->previewGrant($owner, (int)$libraryRoot['id'], $recipient);
    $grant = \OC::$server->get(RootShareService::class)->grant($owner, (int)$libraryRoot['id'], $recipient,
        (int)$review['rootFileId'], (string)$review['filesMode']);
    echo json_encode(['review' => $review, 'grant' => $grant, 'rootShares' => fileShares('LibraryLifecycle'),
        'manual' => fileShares('ManualControl')], JSON_THROW_ON_ERROR), "\n";
} elseif ($mode === 'share-root') {
    $share = $shares->newShare();
    $share->setShareType(IShare::TYPE_USER)->setSharedBy($owner)->setShareOwner($owner)
        ->setSharedWith($recipient)->setNode(folder('LibraryLifecycle'))
        ->setPermissions(Constants::PERMISSION_READ)->setNote('manual-root-share');
    $created = $shares->createShare($share);
    $shares->acceptShare($created, $recipient);
    echo json_encode(['manualRootShare' => $created->getFullId(),
        'rootShares' => fileShares('LibraryLifecycle')], JSON_THROW_ON_ERROR), "\n";
} elseif ($mode === 'unshare-root') {
    foreach ($shares->getSharesBy($owner, IShare::TYPE_USER, folder('LibraryLifecycle'), false, 100, 0, false) as $share) {
        if ($share->getSharedWith() === $recipient) {
            $shares->deleteShare($share);
        }
    }
    $grant = grants()[0] ?? null;
    if ($grant === null) throw new RuntimeException('missing Library grant');
    $visible = \OC::$server->get(RootShareService::class)->visibleGrant($recipient, (int)$grant['id']);
    if ($visible !== null) throw new RuntimeException('Library access survived Files share removal');
    echo json_encode(['grantId' => (int)$grant['id'], 'rootShares' => fileShares('LibraryLifecycle'),
        'manual' => fileShares('ManualControl'), 'libraryVisible' => false], JSON_THROW_ON_ERROR), "\n";
} elseif ($mode === 'inspect') {
    echo json_encode(['grants' => grants(), 'rootShares' => fileShares('LibraryLifecycle'),
        'manual' => fileShares('ManualControl')], JSON_THROW_ON_ERROR), "\n";
} elseif ($mode === 'revoke') {
    $row = grants()[0] ?? null;
    if ($row === null) throw new RuntimeException('missing Library grant');
    $removed = \OC::$server->get(RootShareService::class)->revoke($owner, (int)$row['id']);
    echo json_encode(['removed' => $removed, 'grants' => grants(),
        'rootShares' => fileShares('LibraryLifecycle')], JSON_THROW_ON_ERROR), "\n";
} elseif ($mode === 'search') {
    $grant = grants()[0] ?? null;
    if ($grant === null) throw new RuntimeException('missing Library grant');
    $scan = \OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan($owner, (int)$grant['root_id']);
    if (!empty($scan['errors'])) throw new RuntimeException('fixture scan failed');
    $item = $db->executeQuery('SELECT i.id FROM *PREFIX*library_items i '
        . 'JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id '
        . 'WHERE i.user_id=? AND f.root_id=? ORDER BY i.id LIMIT 1',
        [$owner, $grant['root_id']])->fetch();
    if (!is_array($item)) throw new RuntimeException('fixture book was not indexed');
    $db->executeStatement('UPDATE *PREFIX*library_items SET authors_json=?,creators=?,author_sync_status=1 '
        . 'WHERE user_id=? AND id=?', ['["Original Fixture Credit"]', 'Original Fixture Credit', $owner, $item['id']]);
    \OC::$server->get(\OCA\Library\Service\AuthorStorageService::class)->advance($owner);
    $author = $db->executeQuery('SELECT a.id,a.revision FROM *PREFIX*library_authors a '
        . 'JOIN *PREFIX*library_item_authors l ON l.author_id=a.id AND l.user_id=a.user_id '
        . 'WHERE l.user_id=? AND l.item_id=? LIMIT 1', [$owner, $item['id']])->fetch();
    if (!is_array($author)) throw new RuntimeException('canonical author link missing');
    \OC::$server->get(\OCA\Library\Service\AuthorDirectoryService::class)->update(
        $owner, (int)$author['id'], (int)$author['revision'], [
            'display_name' => 'Canonical Fixture Name', 'sort_name' => 'Fixture, Canonical',
            'given_name' => '', 'family_name' => '',
        ]);
    $shared = \OC::$server->get(RootShareService::class);
    $canonical = $shared->books($recipient, (int)$grant['id'], 0, 'Canonical Fixture Name');
    $old = $shared->books($recipient, (int)$grant['id'], 0, 'Original Fixture Credit');
    $result = $canonical['items'][0] ?? null;
    if (!is_array($result) || (int)$result['id'] !== (int)$item['id']
        || $result['creators'] !== 'Canonical Fixture Name' || $old['items'] !== []) {
        throw new RuntimeException('shared canonical-author search disagrees with displayed author');
    }
    echo json_encode(['canonicalSearch' => true, 'sourceCreditExcluded' => true,
        'matchingBooks' => count($canonical['items'])], JSON_THROW_ON_ERROR), "\n";
} else {
    throw new InvalidArgumentException('unknown fixture mode');
}
