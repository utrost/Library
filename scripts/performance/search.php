<?php
declare(strict_types=1);
// Read-only CLI probe. Copy this file and sql-profiler.php into /tmp in Nextcloud.
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
require '/tmp/library-performance-sql-profiler.php';
// Explicit candidate class loading affects this CLI process only, never installed assets.
if (getenv('LIBRARY_SEARCH_CANDIDATE') === '1') require '/tmp/library-search-candidate.php';
$uid = getenv('LIBRARY_BENCHMARK_USER') ?: 'uwe';
$query = getenv('LIBRARY_SEARCH_QUERY') ?: 'Heinlein';
$db = \OCP\Server::get(\OCP\IDBConnection::class);
$connection = libraryBenchmarkConnection();
$config = $connection->getConfiguration();
$items = \OCP\Server::get(\OCA\Library\Service\ItemService::class);
echo json_encode(['books' => $items->countCatalogue($uid, [])]), PHP_EOL;
foreach (['content' => ['q' => $query], 'author' => ['creator' => $query], 'suggestions' => []] as $label => $filters) {
    for ($repeat = 0; $repeat < 3; $repeat++) {
        $logger = new LibraryBenchmarkSql();
        $previous = $config->getSQLLogger();
        $config->setSQLLogger($logger);
        $start = hrtime(true);
        try {
            $value = $label === 'suggestions' ? $items->creatorSuggestions($uid, [], $query)
                : $items->queryCatalogue($uid, $filters, ['page' => 1, 'limit' => 100], false);
        } finally {
            $elapsed = (hrtime(true) - $start) / 1e6;
            $config->setSQLLogger($previous);
        }
        echo json_encode(['label' => $label, 'repeat' => $repeat, 'ms' => round($elapsed, 2),
            'total' => $label === 'suggestions' ? count($value) : $value['total'],
            'resultHash' => hash('sha256', json_encode($label === 'suggestions' ? $value : array_column($value['items'], 'id'))),
            'sql' => $logger->summary($connection, $repeat === 0)], JSON_THROW_ON_ERROR), PHP_EOL;
    }
}
