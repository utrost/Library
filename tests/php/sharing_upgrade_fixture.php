<?php
declare(strict_types=1);

// Only the labelled disposable harness may invoke this fixture.
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
set_exception_handler(static function (Throwable $error): void {
    fwrite(STDERR, get_class($error) . ': ' . $error->getMessage() . "\n");
    exit(1);
});

use OCA\Library\Service\LibraryScanner;
use OCA\Library\Service\PersonalListService;
use OCA\Library\Service\RootService;
use OCA\Library\Service\RootShareService;
use OCP\Constants;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;
use OCP\IUserManager;
use OCP\IUserSession;
use OCP\Share\IManager;
use OCP\Share\IShare;

if (getenv('LIBRARY_DISPOSABLE_FIXTURE') !== '1') throw new RuntimeException('disposable fixture opt-in required');
$owner = 'library-smoke';
$users = \OC::$server->get(IUserManager::class);
\OC::$server->get(IUserSession::class)->setUser($users->get($owner));
$db = \OC::$server->get(IDBConnection::class);
$files = \OC::$server->get(IRootFolder::class)->getUserFolder($owner);
$lists = \OC::$server->get(PersonalListService::class);
$sharing = \OC::$server->get(RootShareService::class);
$shares = \OC::$server->get(IManager::class);
$mode = $argv[1] ?? '';
$statePath = '/tmp/library-sharing-upgrade.json';

function rows(string $sql, array $params = []): array {
    global $db;
    $result = $db->executeQuery($sql, $params);
    $rows = $result->fetchAll(); $result->closeCursor(); return $rows;
}
function snapshot(): array {
    global $owner;
    $out = [];
    foreach (['library_items', 'library_files', 'library_lists'] as $table) {
        $out[$table] = rows('SELECT * FROM *PREFIX*' . $table . ' WHERE user_id=? ORDER BY id', [$owner]);
    }
    $out['entries'] = rows('SELECT e.* FROM *PREFIX*library_list_entries e JOIN *PREFIX*library_lists l ON l.id=e.list_id WHERE l.user_id=? ORDER BY e.id', [$owner]);
    $out['grants'] = rows('SELECT id,owner_user_id,recipient_user_id,root_id,root_file_id,managed_share_id,recovery_token,revoked_at,created_at FROM *PREFIX*library_root_shares WHERE owner_user_id=? ORDER BY id', [$owner]);
    return $out;
}
function check(bool $ok, string $message): void { if (!$ok) throw new RuntimeException($message); }

if ($mode === 'seed') {
    foreach (['library-recipient', 'library-other', 'library-outsider'] as $uid) {
        if (!$users->userExists($uid)) $users->createUser($uid, 'Disposable-sharing-2026');
    }
    $folder = $files->newFolder('LibraryLifecycle');
    $pdf = file_get_contents('/tmp/library-fixture.pdf');
    foreach (['example.pdf', 'excluded.pdf', 'third.pdf'] as $name) $folder->newFile($name, $pdf);
    $root = \OC::$server->get(RootService::class)->saveRoot($owner, '/LibraryLifecycle', 'Lifecycle fixture', true);
    $scan = \OC::$server->get(LibraryScanner::class)->scan($owner, $root['id']);
    check(empty($scan['errors']), 'seed scan failed');
    $books = rows('SELECT i.id,f.cached_path FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=? ORDER BY i.id', [$owner]);
    check(count($books) === 3, 'three seed books required');
    $list = $lists->create($owner, 'Upgrade preserved list', 'Private fixture description');
    $lists->add($owner, $list['id'], $list['revision'], array_map('intval', array_column($books, 'id')));
    $first = (int)$books[0]['id'];
    $db->executeStatement('UPDATE *PREFIX*library_items SET description=?,personal_rating=4,starred=TRUE WHERE id=? AND user_id=?', ['Private fixture correction', $first, $owner]);
    $share = $shares->newShare();
    $share->setShareType(IShare::TYPE_USER)->setSharedBy($owner)->setShareOwner($owner)
        ->setSharedWith('library-recipient')->setNode($folder)->setPermissions(Constants::PERMISSION_READ);
    $created = $shares->createShare($share); $shares->acceptShare($created, 'library-recipient');
    $review = $sharing->previewGrant($owner, $root['id'], 'library-recipient');
    $sharing->grant($owner, $root['id'], 'library-recipient', $review['rootFileId'], 'reuse');
    file_put_contents($statePath, json_encode(['snapshot' => snapshot(), 'rootId' => $root['id'], 'filesShareId' => $created->getFullId()], JSON_THROW_ON_ERROR));
    echo "populated_alpha2_seeded=true books=3 list_entries=3 files_grants=1\n";
} elseif ($mode === 'verify') {
    $state = json_decode(file_get_contents($statePath), true, 512, JSON_THROW_ON_ERROR);
    $current = snapshot();
    // Additive alpha.6 field: pre-existing list entries must retain its empty default.
    foreach ($current['entries'] as &$entry) {
        if (array_key_exists('unavailable_title', $entry)) {
            check($entry['unavailable_title'] === null, 'upgrade changed unavailable entry title');
            unset($entry['unavailable_title']);
        }
    }
    unset($entry);
    check($current == $state['snapshot'], 'upgrade changed existing catalogue, lists or grants');
    check($shares->getShareById($state['filesShareId'])->getPermissions() === Constants::PERMISSION_READ, 'Files share changed');
    $grant = $sharing->received('library-recipient')[0] ?? null;
    check($grant !== null && $grant['accessMode'] === 'files', 'existing grant lost Files-backed mode');
    check(count($sharing->books('library-recipient', $grant['id'])['items']) === 3, 'existing recipient lost books');
    check((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_share_books')->fetchOne() === 0, 'migration created unexpected snapshot membership');
    // Exercise the schema migration again against its already-migrated schema.
    $schema = new \OC\DB\SchemaWrapper(\OC::$server->get(\OC\DB\Connection::class));
    $before = serialize($schema->getWrappedSchema());
    $migration = new \OCA\Library\Migration\Version000400Date20261106190000();
    $output = new class implements \OCP\Migration\IOutput {
        public function debug(string $message): void {}
        public function info($message) {} public function warning($message) {}
        public function startProgress($max = 0) {} public function advance($step = 1, $description = '') {}
        public function finishProgress() {}
    };
    $migration->changeSchema($output, static fn () => $schema, []);
    check(serialize($schema->getWrappedSchema()) === $before, 'migration rerun changed schema');
    echo "populated_upgrade_preserved=true migration_rerun_safe=true books=3 list_entries=3 files_grants=1\n";
} elseif ($mode === 'browser') {
    $books = rows('SELECT i.id,f.cached_path FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=? ORDER BY i.id', [$owner]);
    $selected = array_values(array_filter($books, static fn ($b) => str_ends_with($b['cached_path'], '/example.pdf')))[0];
    $excluded = array_values(array_filter($books, static fn ($b) => str_ends_with($b['cached_path'], '/excluded.pdf')))[0];
    $list = $lists->create($owner, 'One selected fixture book', '');
    $lists->add($owner, $list['id'], $list['revision'], [(int)$selected['id']]);
    echo json_encode(['excludedId' => (int)$excluded['id']]), "\n";
} elseif ($mode === 'scale') {
    $state = json_decode(file_get_contents($statePath), true, 512, JSON_THROW_ON_ERROR);
    $folder = $files->get('LibraryLifecycle');
    $pdf = file_get_contents('/tmp/library-fixture.pdf');
    for ($n = 3; $n < 100; $n++) {
        $name = sprintf('selected-%03d.pdf', $n);
        if (!$folder->nodeExists($name)) $folder->newFile($name, $pdf);
    }
    $scan = \OC::$server->get(LibraryScanner::class)->scan($owner, $state['rootId']);
    check(empty($scan['errors']), 'scale scan failed');
    $books = rows('SELECT i.id,f.file_id FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=? ORDER BY i.id', [$owner]);
    check(count($books) === 100, '100 physical books required');
    // The unshared background catalogue has synthetic metadata only. Every shared book is real.
    $now = time();
    for ($start = 100; $start < 100000; $start += 500) {
        $values = []; $params = [];
        for ($n = $start; $n < min(100000, $start + 500); $n++) {
            $values[] = '(?,?,?,?,?,?,?,?,?,?)';
            array_push($params, $owner, $state['rootId'], 900000000 + $n, '/LibraryLifecycle/synthetic-' . $n . '.pdf', 'application/pdf', 'pdf', 'indexed', $now, $now, $now);
        }
        $db->executeStatement('INSERT INTO *PREFIX*library_files (user_id,root_id,file_id,cached_path,mime_type,extension,scan_status,last_scanned_at,created_at,updated_at) VALUES ' . implode(',', $values), $params);
    }
    $db->executeStatement('INSERT INTO *PREFIX*library_items (user_id,library_file_id,publication_type,title,creators,metadata_source,created_at,updated_at) '
        . 'SELECT user_id,id,?,?,?, ?,?,? FROM *PREFIX*library_files WHERE user_id=? AND file_id>=?',
        ['book', 'Synthetic background book', 'Synthetic Author', 'fixture', $now, $now, $owner, 900000100]);
    $list = $lists->create($owner, 'Maximum selected-book fixture', '');
    $lists->add($owner, $list['id'], $list['revision'], array_map('intval', array_column($books, 'id')));
    $review = $sharing->previewGrant($owner, $state['rootId'], 'library-other', 'library_only', $list['id']);
    $grant = $sharing->grant($owner, $state['rootId'], 'library-other', $review['rootFileId'], 'library_only', $list['id'], $review['selectionHash']);
    // Append inert bytes to one PDF without changing its identity, for bounded-memory streaming.
    $large = $folder->get('selected-099.pdf');
    $stream = $large->fopen('ab');
    $chunk = str_repeat("\0", 1024 * 1024);
    for ($n = 0; $n < 512; $n++) check(fwrite($stream, $chunk) === strlen($chunk), 'large fixture write failed');
    fclose($stream); unset($chunk);
    $large->getStorage()->getUpdater()->update($large->getInternalPath());
    $largeId = (int)rows('SELECT i.id FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=? AND f.file_id=?', [$owner, $large->getId()])[0]['id'];
    $count = (int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_items WHERE user_id=?', [$owner])->fetchOne();
    check($count === 100000, 'incorrect scale count');
    $scale = ['grantId' => $grant['id'], 'rootId' => $state['rootId'], 'largeItemId' => $largeId, 'count' => $count, 'selected' => count($books)];
    file_put_contents('/tmp/library-sharing-scale.json', json_encode($scale, JSON_THROW_ON_ERROR));
    echo json_encode($scale), "\n";
} elseif ($mode === 'measure') {
    $state = json_decode(file_get_contents('/tmp/library-sharing-scale.json'), true, 512, JSON_THROW_ON_ERROR);
    foreach (['' => 'listing', 'Mixed' => 'matching_search', 'nonexistent' => 'empty_search'] as $query => $label) {
        for ($run = 0; $run < 6; $run++) {
            $start = hrtime(true);
            $page = $sharing->books('library-other', $state['grantId'], 0, $query);
            echo json_encode(['case' => $label, 'run' => $run, 'ms' => (hrtime(true) - $start) / 1e6, 'items' => count($page['items']), 'next' => $page['nextCursor'] !== null]), "\n";
        }
    }
    $first = $sharing->books('library-other', $state['grantId']);
    $second = $sharing->books('library-other', $state['grantId'], $first['nextCursor']);
    check(count($first['items']) === 80 && count($second['items']) === 20 && $second['nextCursor'] === null, 'maximum selection pagination failed');
    echo "scale_pagination_passed=true\n";
} elseif ($mode === 'revoke-scale') {
    $state = json_decode(file_get_contents('/tmp/library-sharing-scale.json'), true, 512, JSON_THROW_ON_ERROR);
    check($sharing->revoke($owner, $state['grantId']), 'scale grant not revoked');
    echo "scale_revoked=true\n";
} else {
    throw new InvalidArgumentException('unknown fixture mode');
}
