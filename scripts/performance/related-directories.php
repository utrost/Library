<?php
/** Aggregate-only, read-only directory performance probe for Series and Genres. */
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
require __DIR__ . '/sql-profiler.php';
$uid = $argv[1] ?? '';
if ($uid === '') throw new InvalidArgumentException('user required');
$connection = libraryBenchmarkConnection(); $report = [];
foreach (['series' => \OCA\Library\Service\SeriesDirectoryService::class, 'genres' => \OCA\Library\Service\GenreService::class] as $key => $class) {
    $service = \OCP\Server::get($class); $parameters = (new ReflectionMethod($service, 'directory'))->getNumberOfParameters();
    foreach (['name', 'name_desc'] as $sort) {
        $samples = [];
        for ($n = 0; $n < 6; $n++) {
            $logger = new LibraryBenchmarkSql(); $connection->getConfiguration()->setSQLLogger($logger); $start = hrtime(true);
            try { $result = $service->directory(...array_slice([$uid, '', 1, $sort, true], 0, $parameters)); }
            finally { $connection->getConfiguration()->setSQLLogger(null); }
            $samples[] = (hrtime(true) - $start) / 1e6;
        }
        $first = array_shift($samples); sort($samples);
        $report[$key][$sort] = ['firstMs' => $first, 'warmMedianMs' => $samples[2], 'warmMaxMs' => max($samples), 'rows' => count($result[$key]), 'responseBytes' => strlen(json_encode($result)), 'sql' => $logger->summary($connection, true)];
    }
}
echo json_encode($report, JSON_PRETTY_PRINT), PHP_EOL;
