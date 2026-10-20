<?php
/** Read-only author directory measurements; no names, paths or credentials in output. */
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
require __DIR__ . '/sql-profiler.php';
$uid = $argv[1] ?? '';
if ($uid === '') throw new InvalidArgumentException('user required');
$service = \OCP\Server::get(\OCA\Library\Service\AuthorDirectoryService::class);
$connection = libraryBenchmarkConnection();
$enhanced = (new ReflectionMethod($service, 'directory'))->getNumberOfParameters() >= 6;
$report = ['enhanced' => $enhanced, 'cases' => []];
foreach (['first' => ['', 1, false, 'name'], 'second' => ['', 2, false, 'name'], 'reverse' => ['', 1, false, 'name_desc'], 'surname' => ['', 1, false, 'surname'], 'search' => ['Hein', 1, false, 'name'], 'unused' => ['', 1, true, 'name']] as $name => $args) {
    $samples = [];
    for ($n = 0; $n < 6; $n++) {
        $logger = new LibraryBenchmarkSql();
        $connection->getConfiguration()->setSQLLogger($logger);
        $start = hrtime(true);
        try { $result = $service->directory($uid, ...($enhanced ? [...$args, true] : array_slice($args, 0, 3))); }
        finally { $connection->getConfiguration()->setSQLLogger(null); }
        $samples[] = (hrtime(true) - $start) / 1e6;
    }
    $first = array_shift($samples); sort($samples);
    $report['cases'][$name] = ['firstMs' => $first, 'warmMedianMs' => $samples[2], 'warmMaxMs' => max($samples), 'authors' => count($result['authors']), 'previews' => array_sum(array_map(fn($a) => count($a['books'] ?? []), $result['authors'])), 'responseBytes' => strlen(json_encode($result)), 'sql' => $logger->summary($connection, true)];
}
echo json_encode($report, JSON_PRETTY_PRINT), PHP_EOL;
