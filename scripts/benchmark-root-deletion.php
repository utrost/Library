<?php
declare(strict_types=1);
/** Disposable instance only: synthetic SQL scale for atomic root deletion. */
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$count = max(1, min(100000, (int)($argv[1] ?? 10000)));
$uid = 'library-root-bench-' . bin2hex(random_bytes(5));
$db = \OC::$server->get(\OCP\IDBConnection::class);
$users = \OC::$server->get(\OCP\IUserManager::class);
$account = $users->createUser($uid, bin2hex(random_bytes(24)));
$folder = \OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid)->newFolder('Bench');
$root = \OC::$server->get(\OCA\Library\Service\RootService::class)->saveRoot($uid, '/Bench', 'Bench', true);
$rootId = (int)$root['id'];
$seededAt = hrtime(true);
try {
    for ($base = 0; $base < $count; $base += 75) {
        $values = []; $params = [];
        for ($i = $base; $i < min($base + 75, $count); $i++) {
            $values[] = '(?,?,?,?,?,?,?,?)';
            array_push($params, $uid, $rootId, 1000000000 + $i, '/Bench/' . $i . '.epub',
                'application/epub+zip', time(), time(), time());
        }
        $db->executeStatement('INSERT INTO *PREFIX*library_files (user_id,root_id,file_id,cached_path,mime_type,last_scanned_at,created_at,updated_at) VALUES ' . implode(',', $values), $params);
        $r = $db->executeQuery('SELECT id,file_id FROM *PREFIX*library_files WHERE user_id=? AND root_id=? AND file_id>=? AND file_id<? ORDER BY file_id',
            [$uid, $rootId, 1000000000 + $base, 1000000000 + min($base + 75, $count)]);
        $files = $r->fetchAll(); $r->closeCursor();
        $values = []; $params = [];
        foreach ($files as $file) {
            $values[] = '(?,?,?,?,?,?,?)';
            array_push($params, $uid, (int)$file['id'], 'Book ' . $file['file_id'], '{}', '{}', time(), time());
        }
        $db->executeStatement('INSERT INTO *PREFIX*library_items (user_id,library_file_id,title,field_sources,field_values,created_at,updated_at) VALUES ' . implode(',', $values), $params);
    }
    $deleteStarted = hrtime(true);
    \OC::$server->get(\OCA\Library\Service\RootService::class)->deleteRoot($uid, $rootId);
    $deleteMs = (int)((hrtime(true) - $deleteStarted) / 1000000);
    $r = $db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_items WHERE user_id=?', [$uid]);
    $remaining = (int)$r->fetchOne(); $r->closeCursor();
    if ($remaining !== 0) throw new RuntimeException('Root deletion left items');
    echo json_encode(['passed' => true, 'engine' => $db->getDatabaseProvider(), 'items' => $count,
        'seedMs' => (int)(($deleteStarted - $seededAt) / 1000000), 'deleteMs' => $deleteMs,
        'peakMiB' => round(memory_get_peak_usage(true) / 1048576, 2)], JSON_THROW_ON_ERROR), PHP_EOL;
} finally {
    $account->delete();
}
