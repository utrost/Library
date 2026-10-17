<?php
declare(strict_types=1);
/** Disposable instance only: php scripts/benchmark-journal-pages.php [count]. */
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';

$count = max(1, min(100000, (int)($argv[1] ?? 100000)));
$uid = 'library-journal-bench-' . bin2hex(random_bytes(5));
$db = \OC::$server->get(\OCP\IDBConnection::class);
$journal = \OC::$server->get(\OCA\Library\Service\ScanChangeJournal::class);
$planner = new \OCA\Library\Service\IncrementalScanPlanner();
$started = hrtime(true);
$peak = memory_get_peak_usage(true);
$pages = 0;
$processed = 0;
$cursor = '';
try {
    for ($base = 0; $base < $count; $base += 100) {
        $rows = [];
        $params = [];
        for ($i = $base; $i < min($base + 100, $count); $i++) {
            $path = '/Benchmark/' . sprintf('%06d', $i) . '.epub';
            $rows[] = '(?,?,?,?,?)';
            array_push($params, $uid, hash('sha256', 'f:' . $path), $path, 0, 1);
        }
        $db->executeStatement('INSERT INTO *PREFIX*library_scan_changes (user_id,path_hash,target_path,is_directory,generation) VALUES ' . implode(',', $rows), $params);
    }
    $seededAt = hrtime(true);
    $survivorHash = null;
    while ($journal->hasPending($uid)) {
        $page = $journal->page($uid, $cursor);
        if ($page === [] || count($page) > \OCA\Library\Service\ScanChangeJournal::PAGE_SIZE) throw new RuntimeException('Unbounded journal page');
        if ($survivorHash === null) {
            $survivorHash = $page[0]['hash'];
            // A concurrent event must survive acknowledgement of the older generation.
            $db->executeStatement('UPDATE *PREFIX*library_scan_changes SET generation=generation+1 WHERE user_id=? AND path_hash=?', [$uid, $survivorHash]);
        }
        $targets = $planner->plan($page, [['id' => 1, 'path' => '/Benchmark']]);
        if (count($targets) > count($page)) throw new RuntimeException('Planner expanded a page without bound');
        $journal->acknowledge($uid, $page);
        $cursor = $page[array_key_last($page)]['hash'];
        $processed += count($page);
        $pages++;
        if ($pages > (int)ceil($count / \OCA\Library\Service\ScanChangeJournal::PAGE_SIZE) + 2) throw new RuntimeException('Cursor failed to converge');
    }
    if ($processed !== $count + 1) throw new RuntimeException("Processed $processed entries instead of " . ($count + 1));
    echo json_encode(['passed' => true, 'engine' => $db->getDatabaseProvider(), 'changes' => $count,
        'pages' => $pages, 'maxPageSize' => \OCA\Library\Service\ScanChangeJournal::PAGE_SIZE,
        'seedMs' => (int)(($seededAt - $started) / 1000000),
        'drainMs' => (int)((hrtime(true) - $seededAt) / 1000000),
        'peakAddedMiB' => round((memory_get_peak_usage(true) - $peak) / 1048576, 2)], JSON_THROW_ON_ERROR), PHP_EOL;
} finally {
    $db->executeStatement('DELETE FROM *PREFIX*library_scan_changes WHERE user_id=?', [$uid]);
}
