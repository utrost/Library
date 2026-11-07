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
use OCA\Library\Service\PersonalListService;
use OCP\Constants;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;
use OCP\Share\IManager;
use OCP\Share\IShare;

$owner = 'library-smoke';
$recipient = 'library-recipient';
$otherRecipient = 'library-other';
$mode = $argv[1] ?? '';
$files = \OC::$server->get(IRootFolder::class)->getUserFolder($owner);
$shares = \OC::$server->get(IManager::class);
$db = \OC::$server->get(IDBConnection::class);
\OC::$server->get(\OCP\IUserSession::class)->setUser(
    \OC::$server->get(\OCP\IUserManager::class)->get($owner));

function folder(string $name): \OCP\Files\Folder {
    global $files;
    return $files->nodeExists($name) ? $files->get($name) : $files->newFolder($name);
}
function grants(): array {
    global $db, $owner;
    $result = $db->executeQuery('SELECT id,root_id,root_file_id,managed_share_id,recovery_token,access_mode,revoked_at FROM *PREFIX*library_root_shares WHERE owner_user_id=? ORDER BY id', [$owner]);
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
} elseif ($mode === 'share-other') {
    $share = $shares->newShare();
    $share->setShareType(IShare::TYPE_USER)->setSharedBy($owner)->setShareOwner($owner)
        ->setSharedWith($otherRecipient)->setNode(folder('LibraryLifecycle'))
        ->setPermissions(Constants::PERMISSION_READ)->setNote('other-files-only');
    $created = $shares->createShare($share);
    $shares->acceptShare($created, $otherRecipient);
    echo json_encode(['otherFilesOnly' => $created->getFullId(),
        'rootShares' => fileShares('LibraryLifecycle')], JSON_THROW_ON_ERROR), "\n";
} elseif ($mode === 'unshare-other') {
    foreach ($shares->getSharesBy($owner, IShare::TYPE_USER, folder('LibraryLifecycle'), false, 100, 0, false) as $share) {
        if ($share->getSharedWith() === $otherRecipient) {
            $shares->deleteShare($share);
        }
    }
    echo json_encode(['rootShares' => fileShares('LibraryLifecycle')], JSON_THROW_ON_ERROR), "\n";
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
        'snapshotCount' => (int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_share_books')->fetchOne(),
        'manual' => fileShares('ManualControl')], JSON_THROW_ON_ERROR), "\n";
} elseif ($mode === 'revoke') {
    $row = grants()[0] ?? null;
    if ($row === null) throw new RuntimeException('missing Library grant');
    $removed = \OC::$server->get(RootShareService::class)->revoke($owner, (int)$row['id']);
    if ((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_share_books WHERE grant_id=?', [(int)$row['id']])->fetchOne() !== 0
        || \OC::$server->get(RootShareService::class)->visibleGrant($otherRecipient, (int)$row['id']) !== null) {
        throw new RuntimeException('revoked share retained access or snapshot rows');
    }
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
} elseif ($mode === 'library-only-list') {
    $root = array_values(array_filter(\OC::$server->get(RootService::class)->listRoots($owner),
        static fn (array $entry): bool => $entry['path'] === '/LibraryLifecycle'))[0] ?? null;
    if ($root === null) throw new RuntimeException('fixture shelf missing');
    $shelf = folder('LibraryLifecycle');
    if (!$shelf->nodeExists('excluded.pdf')) {
        $shelf->newFile('excluded.pdf', $shelf->get('example.pdf')->getContent());
    }
    $scan = \OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan($owner, (int)$root['id']);
    if (!empty($scan['errors'])) throw new RuntimeException('fixture scan failed');
    $result = $db->executeQuery('SELECT i.id,f.cached_path FROM *PREFIX*library_items i '
        . 'JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id '
        . 'WHERE i.user_id=? AND f.root_id=? AND f.scan_status=? ORDER BY i.id',
        [$owner, (int)$root['id'], 'indexed']);
    $books = $result->fetchAll();
    $result->closeCursor();
    if (count($books) !== 2) throw new RuntimeException('expected exactly two indexed fixture books');
    $selected = array_values(array_filter($books,
        static fn (array $book): bool => str_ends_with((string)$book['cached_path'], '/example.pdf')))[0] ?? null;
    $excluded = array_values(array_filter($books,
        static fn (array $book): bool => str_ends_with((string)$book['cached_path'], '/excluded.pdf')))[0] ?? null;
    if ($selected === null || $excluded === null) throw new RuntimeException('fixture book identities missing');
    $lists = \OC::$server->get(PersonalListService::class);
    $list = $lists->create($owner, 'One selected fixture book', 'Disposable sharing acceptance');
    $lists->add($owner, (int)$list['id'], (int)$list['revision'], [(int)$selected['id']]);
    $shared = \OC::$server->get(RootShareService::class);
    $stale = $lists->create($owner, 'Stale selection fixture', '');
    try {
        $shared->previewGrant($owner, (int)$root['id'], $otherRecipient, 'library_only', (int)$stale['id']);
        throw new RuntimeException('empty selected list was accepted');
    } catch (InvalidArgumentException $error) {
        if ($error->getMessage() !== 'invalid_selection') throw $error;
    }
    $lists->add($owner, (int)$stale['id'], (int)$stale['revision'], [(int)$selected['id']]);
    $preview = $shared->previewGrant($owner, (int)$root['id'], $otherRecipient, 'library_only', (int)$stale['id']);
    $stale = $lists->find($owner, (int)$stale['id']);
    $lists->add($owner, (int)$stale['id'], (int)$stale['revision'], [(int)$excluded['id']]);
    try {
        $shared->grant($owner, (int)$root['id'], $otherRecipient, (int)$preview['rootFileId'],
            'library_only', (int)$stale['id'], $preview['selectionHash']);
        throw new RuntimeException('stale selection was accepted');
    } catch (InvalidArgumentException $error) {
        if ($error->getMessage() !== 'share_changed') throw $error;
    }
    $stale = $lists->find($owner, (int)$stale['id']);
    $lists->delete($owner, (int)$stale['id'], (int)$stale['revision']);
    echo json_encode(['listId' => (int)$list['id'], 'selectedItemId' => (int)$selected['id'],
        'excludedItemId' => (int)$excluded['id']], JSON_THROW_ON_ERROR), "\n";
} elseif ($mode === 'library-only-check') {
    $grant = array_values(array_filter(grants(), static fn (array $entry): bool => $entry['access_mode'] === 'library_only'))[0] ?? null;
    if ($grant === null) throw new RuntimeException('Library-only grant missing');
    $lists = \OC::$server->get(PersonalListService::class);
    $list = array_values(array_filter($lists->lists($owner),
        static fn (array $entry): bool => $entry['name'] === 'One selected fixture book'))[0] ?? null;
    if ($list === null) throw new RuntimeException('selected list missing');
    $books = $db->executeQuery('SELECT i.id,f.cached_path FROM *PREFIX*library_items i '
        . 'JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id '
        . 'WHERE i.user_id=? AND f.root_id=? ORDER BY i.id', [$owner, (int)$grant['root_id']])->fetchAll();
    $excluded = array_values(array_filter($books,
        static fn (array $book): bool => str_ends_with((string)$book['cached_path'], '/excluded.pdf')))[0] ?? null;
    if ($excluded === null) throw new RuntimeException('excluded fixture book missing');
    $lists->add($owner, (int)$list['id'], (int)$list['revision'], [(int)$excluded['id']]);
    $shared = \OC::$server->get(RootShareService::class);
    $visible = $shared->books($otherRecipient, (int)$grant['id']);
    if (count($visible['items']) !== 1 || $shared->book($otherRecipient, (int)$grant['id'], (int)$excluded['id']) !== null
        || $shared->bookFile($otherRecipient, (int)$grant['id'], (int)$excluded['id']) !== null
        || $shared->bookCover($otherRecipient, (int)$grant['id'], (int)$excluded['id']) !== null
        || $shared->visibleGrant($recipient, (int)$grant['id']) !== null) {
        throw new RuntimeException('Library-only share broadened or leaked to another user');
    }
    $selectedId = (int)$visible['items'][0]['id'];
    $selectedFile = $shared->bookFile($otherRecipient, (int)$grant['id'], $selectedId);
    if ($selectedFile === null) throw new RuntimeException('selected source unavailable');
    $lease = $shared->leaseBookFile($otherRecipient, (int)$grant['id'], $selectedId);
    if ($lease === null) throw new RuntimeException('selected source could not be locked');
    try {
        $selectedFile->move(folder('LibraryLifecycle')->getPath() . '/must-not-move.pdf');
        throw new RuntimeException('source moved while download lease was held');
    } catch (\OCP\Lock\LockedException) {
        // The shared lease prevents replacement before the response opens its stream.
    } finally {
        $lease->close();
    }
    $config = \OC::$server->get(\OCP\IConfig::class);
    $enabled = $config->getAppValue('core', 'shareapi_enabled', 'yes');
    $config->setAppValue('core', 'shareapi_enabled', 'no');
    try {
        if ($shared->visibleGrant($otherRecipient, (int)$grant['id']) !== null
            || $shared->bookFile($otherRecipient, (int)$grant['id'], $selectedId) !== null) {
            throw new RuntimeException('disabled sharing policy was bypassed');
        }
    } finally {
        $config->setAppValue('core', 'shareapi_enabled', $enabled);
    }
    $originalPath = $selectedFile->getPath();
    // Keep a separate cached Node to reproduce the check/open race.
    $staleNode = clone $selectedFile;
    $selectedFile->move(folder('LibraryLifecycle')->getPath() . '/moved-source.pdf');
    $replacement = folder('LibraryLifecycle')->newFile('example.pdf', 'Replacement must never be shared');
    try {
        try {
            $staleLease = new \OCA\Library\Service\SharedFileLease($staleNode);
            $staleLease->close();
            throw new RuntimeException('cached source node authorized a replacement');
        } catch (\RuntimeException $error) {
            if ($error->getMessage() !== 'shared_source_changed') throw $error;
        }
        if ($shared->bookFile($otherRecipient, (int)$grant['id'], $selectedId) !== null
            || $shared->books($otherRecipient, (int)$grant['id'])['items'] !== []) {
            throw new RuntimeException('replacement at old path inherited access');
        }
    } finally {
        $replacement->delete();
        $selectedFile->move($originalPath);
    }
    if ($shared->bookFile($otherRecipient, (int)$grant['id'], $selectedId) === null) {
        throw new RuntimeException('restored selected source unavailable');
    }
    echo json_encode(['grantId' => (int)$grant['id'], 'selectedItemId' => (int)$visible['items'][0]['id'],
        'excludedItemId' => (int)$excluded['id'], 'rootShares' => fileShares('LibraryLifecycle')], JSON_THROW_ON_ERROR), "\n";
} elseif ($mode === 'library-only-grant') {
    $root = array_values(array_filter(\OC::$server->get(RootService::class)->listRoots($owner),
        static fn (array $entry): bool => $entry['path'] === '/LibraryLifecycle'))[0] ?? null;
    $list = array_values(array_filter(\OC::$server->get(PersonalListService::class)->lists($owner),
        static fn (array $entry): bool => $entry['name'] === 'One selected fixture book'))[0] ?? null;
    if ($root === null || $list === null) throw new RuntimeException('sharing fixture missing');
    $shared = \OC::$server->get(RootShareService::class);
    $preview = $shared->previewGrant($owner, (int)$root['id'], $otherRecipient, 'library_only', (int)$list['id']);
    $grant = $shared->grant($owner, (int)$root['id'], $otherRecipient, (int)$preview['rootFileId'],
        'library_only', (int)$list['id'], (string)$preview['selectionHash']);
    echo json_encode(['grant' => $grant, 'rootShares' => fileShares('LibraryLifecycle')], JSON_THROW_ON_ERROR), "\n";
} elseif ($mode === 'library-only-account-cleanup') {
    $grant = array_values(array_filter(grants(), static fn (array $entry): bool => $entry['access_mode'] === 'library_only'))[0] ?? null;
    if ($grant === null) throw new RuntimeException('Library-only grant missing');
    \OC::$server->get(\OCA\Library\Service\LibraryCleanupService::class)->deleteAccount($otherRecipient);
    if ((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_share_books WHERE grant_id=?', [(int)$grant['id']])->fetchOne() !== 0
        || \OC::$server->get(RootShareService::class)->visibleGrant($otherRecipient, (int)$grant['id']) !== null) {
        throw new RuntimeException('account cleanup retained access or snapshot rows');
    }
    echo json_encode(['accountCleanup' => true, 'rootShares' => fileShares('LibraryLifecycle')], JSON_THROW_ON_ERROR), "\n";
} else {
    throw new InvalidArgumentException('unknown fixture mode');
}
