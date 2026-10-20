<?php
/** Isolated fixture account only; generated catalogue rows are rolled back. */
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$state = json_decode(file_get_contents('/tmp/library-author-directory-fixture.json'), true, 512, JSON_THROW_ON_ERROR);
$uid = $state['uid'] ?? '';
if (!preg_match('/^library-author-[a-f0-9]{12}$/D', $uid)) throw new RuntimeException('Owned fixture account required');
$db = \OCP\Server::get(\OCP\IDBConnection::class);
$storage = \OCP\Server::get(\OCA\Library\Service\SeriesStorageService::class);
$storage->advance($uid, 50, 30);
$service = \OCP\Server::get(\OCA\Library\Service\SeriesDirectoryService::class);
function checkSeries(bool $value, string $message): void { if (!$value) throw new RuntimeException($message); }
function insertSeriesFixture($db, string $table, array $row): int {
    unset($row['id']); $qb = $db->getQueryBuilder()->insert($table);
    foreach ($row as $name => $value) $qb->setValue($name, $qb->createNamedParameter($value, $value === null ? \OCP\DB\QueryBuilder\IQueryBuilder::PARAM_NULL : \OCP\DB\QueryBuilder\IQueryBuilder::PARAM_STR));
    $qb->executeStatement(); return (int)$db->lastInsertId('*PREFIX*' . $table);
}
$db->beginTransaction();
try {
    $link = $db->executeQuery('SELECT * FROM *PREFIX*library_item_series WHERE user_id=? LIMIT 1', [$uid])->fetch();
    $id = (int)$link['series_id'];
    $book = $db->executeQuery('SELECT * FROM *PREFIX*library_items WHERE user_id=? AND id=?', [$uid, $link['item_id']])->fetch();
    $file = $db->executeQuery('SELECT * FROM *PREFIX*library_files WHERE user_id=? AND id=?', [$uid, $book['library_file_id']])->fetch();
    for ($i = 0; $i < 55; $i++) {
        $f = $file; $f['file_id'] = 1900000000 + $i; $f['cached_path'] = '/Author fixtures/series-browse-' . $i . '.epub';
        $b = $book; $b['library_file_id'] = insertSeriesFixture($db, 'library_files', $f); $b['title'] = sprintf('Browse %03d', $i); $b['publication_date'] = sprintf('%04d', 1950 + $i);
        $l = $link; $l['item_id'] = insertSeriesFixture($db, 'library_items', $b); $l['part_number'] = (string)(55 - $i); insertSeriesFixture($db, 'library_item_series', $l);
    }
    $first = $service->show($uid, $id, 1, 'Browse', 'title');
    $second = $service->show($uid, $id, 2, 'Browse', 'title');
    checkSeries(count($first['books']) === 50 && $first['hasNext'] && count($second['books']) === 5 && !$second['hasNext'], 'Series pagination');
    checkSeries($first['matchingCount'] === 55 && $second['books'][0]['title'] === 'Browse 050', 'Search covers the full series');
    checkSeries(array_column(array_slice($service->show($uid, $id, 1, 'Browse', 'part')['books'], 0, 3), 'title') === ['Browse 054', 'Browse 053', 'Browse 052'], 'Numeric part ordering');
    checkSeries($service->show($uid, $id, 1, 'Browse', 'newest')['books'][0]['title'] === 'Browse 054', 'Date ordering');
    checkSeries($service->show($uid, $id, 1, '%')['books'] === [], 'Literal wildcard escaped');
    try { $service->show($uid, $id, 1, '', 'unsafe'); throw new RuntimeException('Bad sort accepted'); } catch (InvalidArgumentException) {}
    try { $service->show($uid . '-other', $id); throw new RuntimeException('Ownership bypass'); } catch (OutOfBoundsException) {}
    echo "series_profile_browse_ok=true\n";
} finally { $db->rollBack(); }
