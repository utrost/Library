<?php
declare(strict_types=1);
// Run inside a Nextcloud container: php /tmp/author-suggestions.php [user-id].
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$db = \OC::$server->get(\OCP\IDBConnection::class);
$uid = $argv[1] ?? (string)$db->executeQuery('SELECT user_id FROM *PREFIX*library_items GROUP BY user_id ORDER BY COUNT(*) DESC LIMIT 1')->fetchOne();
if ($uid === '') throw new RuntimeException('No catalogue owner found');
$books = (int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_items WHERE user_id=?', [$uid])->fetchOne();
$items = \OC::$server->get(\OCA\Library\Service\ItemService::class);
$results = [];
foreach ([['prefix' => 'Joh', 'filters' => []], ['prefix' => 'Joh', 'filters' => ['language' => 'en']]] as $case) {
    $times = [];
    $count = 0;
    for ($i = 0; $i < 6; $i++) {
        $start = microtime(true);
        $count = count($items->creatorSuggestions($uid, $case['filters'], $case['prefix']));
        if ($i > 0) $times[] = round((microtime(true) - $start) * 1000, 2);
    }
    sort($times, SORT_NUMERIC);
    $results[] = ['prefix' => $case['prefix'], 'filtered' => $case['filters'] !== [], 'choices' => $count,
        'warmMedianMs' => $times[2], 'warmMaxMs' => max($times)];
}
echo json_encode(['books' => $books, 'samples' => $results]), PHP_EOL;
