<?php
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$uid = $argv[1] ?? '';
if ($uid === '' || strlen($uid) > 64) throw new InvalidArgumentException('USER_ID required');
$db = \OC::$server->get(\OCP\IDBConnection::class);
$result = $db->executeQuery('SELECT i.id FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id INNER JOIN *PREFIX*library_dup_index d ON d.item_id=i.id AND d.user_id=i.user_id WHERE i.user_id=? AND f.scan_status<>? ORDER BY i.id LIMIT 100', [$uid, 'missing']);
try { $ids = array_map('intval', array_column($result->fetchAll(), 'id')); }
finally { $result->closeCursor(); }
if (!$ids) throw new RuntimeException('No indexed books available');
$index = \OC::$server->get(\OCA\Library\Service\DuplicateIndexService::class);
$measurements = [];
for ($run = 0; $run < 5; $run++) {
    $startStatements = $index->statements;
    $start = microtime(true);
    $data = $index->candidates($uid, $ids);
    $milliseconds = round((microtime(true) - $start) * 1000, 2);
    $measurements[] = ['milliseconds' => $milliseconds, 'statements' => $index->statements - $startStatements,
        'sources' => count($data['items']), 'matches' => array_sum(array_map(static fn($entry) => count($entry['matches']), $data['items'])),
        'limited' => count(array_filter($data['items'], static fn($entry) => $entry['limited']))];
}
$times = array_column($measurements, 'milliseconds'); sort($times, SORT_NUMERIC);
echo json_encode(['books' => count($ids), 'warmMedianMs' => $times[2], 'runs' => $measurements]), PHP_EOL;
