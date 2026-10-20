<?php
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$state = json_decode(file_get_contents('/tmp/library-author-directory-fixture.json'), true, 512, JSON_THROW_ON_ERROR);
$uid = $state['uid'] ?? '';
if (!preg_match('/^library-author-[a-f0-9]{12}$/D', $uid)) throw new RuntimeException('Owned fixture account required');
$db = \OCP\Server::get(\OCP\IDBConnection::class);
$service = \OCP\Server::get(\OCA\Library\Service\AuthorDirectoryService::class);
function browseAssert(bool $condition, string $message): void { if (!$condition) throw new RuntimeException($message); }
function browseInsert($db, string $table, array $values): int {
    unset($values['id']); $qb = $db->getQueryBuilder()->insert($table);
    foreach ($values as $key => $value) $qb->setValue($key, $qb->createNamedParameter($value, $value === null ? \OCP\DB\QueryBuilder\IQueryBuilder::PARAM_NULL : \OCP\DB\QueryBuilder\IQueryBuilder::PARAM_STR));
    $qb->executeStatement(); return (int)$db->lastInsertId('*PREFIX*' . $table);
}
$db->beginTransaction();
try {
    $author = $db->executeQuery('SELECT * FROM *PREFIX*library_authors WHERE user_id=? ORDER BY id LIMIT 1', [$uid])->fetch();
    $link = $db->executeQuery('SELECT * FROM *PREFIX*library_item_authors WHERE user_id=? ORDER BY id LIMIT 1', [$uid])->fetch();
    $book = $db->executeQuery('SELECT * FROM *PREFIX*library_items WHERE user_id=? ORDER BY id LIMIT 1', [$uid])->fetch();
    $file = $db->executeQuery('SELECT * FROM *PREFIX*library_files WHERE user_id=? AND id=?', [$uid, $book['library_file_id']])->fetch();
    $copy = $link; $copy['position'] = 99; browseInsert($db, 'library_item_authors', $copy);
    for ($n = 0; $n < 4; $n++) {
        $copy = $file; $copy['file_id'] = 1000000000 + $n; $copy['cached_path'] = '/Author fixtures/preview-' . $n . '.epub';
        $fileId = browseInsert($db, 'library_files', $copy);
        $copy = $book; $copy['library_file_id'] = $fileId; $itemId = browseInsert($db, 'library_items', $copy);
        $copy = $link; $copy['item_id'] = $itemId; browseInsert($db, 'library_item_authors', $copy);
    }
    for ($n = 0; $n < 55; $n++) {
        $copy = $author; $copy['display_name'] = sprintf('Browse %03d', $n); $copy['sort_name'] = sprintf('Sort %03d', 54 - $n);
        $copy['comparison_key'] = 'browse-' . $n;
        browseInsert($db, 'library_authors', $copy);
    }
    $first = $service->directory($uid, 'Browse', 1, false, 'name', true);
    $second = $service->directory($uid, 'Browse', 2, false, 'name', true);
    browseAssert(count($first['authors']) === 50 && $first['hasNext'] && count($second['authors']) === 5 && !$second['hasNext'], 'Pagination');
    browseAssert($first['authors'][0]['display_name'] === 'Browse 000' && $second['authors'][0]['display_name'] === 'Browse 050', 'Display order');
    browseAssert($service->directory($uid, 'Browse', 1, false, 'name_desc')['authors'][0]['display_name'] === 'Browse 054', 'Reverse order');
    browseAssert($service->directory($uid, 'Browse', 1, false, 'surname')['authors'][0]['display_name'] === 'Browse 054', 'Surname order');
    browseAssert(!array_key_exists('books', $service->directory($uid)['authors'][0]), 'Typeahead stays lightweight');
    $withBooks = $service->directory($uid, $author['display_name'], 1, false, 'name', true)['authors'][0];
    browseAssert(count($withBooks['books']) === 3 && count(array_unique(array_column($withBooks['books'], 'id'))) === 3, 'Distinct capped previews');
    browseAssert((int)$withBooks['book_count'] === 6, 'Distinct book count');
    browseAssert($service->directory($uid, $author['display_name'], 1, true, 'name', true)['authors'] === [], 'Unused excludes books');
    browseAssert(count($service->directory($uid, 'Browse', 1, true, 'name', true)['authors']) === 50, 'Unused includes empty authors');
    browseAssert($service->directory($uid . '-other', '', 1, false, 'name', true)['authors'] === [], 'Owner isolation');
    browseAssert($service->directory($uid, '%', 1, false, 'name', true)['authors'] === [], 'Literal wildcard search');
    try { $service->directory($uid, '', 1, false, 'bad'); throw new RuntimeException('Invalid sort accepted'); } catch (InvalidArgumentException) {}
    $genreService = \OCP\Server::get(\OCA\Library\Service\GenreService::class);
    for ($n = 0; $n < 55; $n++) $genreService->create($uid, sprintf('Browsegenre %03d', $n));
    $genreFirst = $genreService->directory($uid, 'Browsegenre', 1, 'name', true);
    $genreSecond = $genreService->directory($uid, 'Browsegenre', 2, 'name', true);
    browseAssert(count($genreSecond['genres']) === 5 && !$genreSecond['hasNext'], 'Genre pagination');
    browseAssert($genreService->directory($uid, 'Browsegenre', 1, 'name_desc')['genres'][0]['display_name'] === 'Browsegenre 054', 'Genre reverse order');
    $genreId = (int)$genreFirst['genres'][0]['id'];
    $ownedBooks = $db->executeQuery('SELECT id FROM *PREFIX*library_items WHERE user_id=? ORDER BY id', [$uid])->fetchAll();
    foreach ($ownedBooks as $ownedBook) $genreService->assign($uid, (int)$ownedBook['id'], $genreId, true);
    $genreService->assign($uid, (int)$ownedBooks[0]['id'], $genreId, false);
    $genreBooks = $genreService->directory($uid, 'Browsegenre 000', 1, 'name', true)['genres'][0];
    browseAssert(count($genreBooks['books']) === 3 && (int)$genreBooks['book_count'] === 5, 'Genre active preview cap');
    browseAssert(!in_array($ownedBooks[0]['id'], array_column($genreBooks['books'], 'id')), 'Inactive genre link excluded');
    browseAssert($genreService->directory($uid . '-other', '', 1, 'name', true)['genres'] === [], 'Genre ownership');
    $seriesStorage = \OCP\Server::get(\OCA\Library\Service\SeriesStorageService::class);
    $seriesStorage->advance($uid);
    $seriesService = \OCP\Server::get(\OCA\Library\Service\SeriesDirectoryService::class);
    $seriesFirst = $seriesService->directory($uid, '', 1, 'name', true);
    $seriesReverse = $seriesService->directory($uid, '', 1, 'name_desc', true);
    browseAssert(count($seriesFirst['series']) >= 2, 'Series fixtures');
    browseAssert($seriesFirst['series'][0]['id'] === $seriesReverse['series'][count($seriesReverse['series']) - 1]['id'], 'Series reverse order');
    browseAssert(count($seriesFirst['series'][0]['books']) >= 1 && count($seriesFirst['series'][0]['books']) <= 3, 'Series previews');
    browseAssert($seriesService->directory($uid . '-other', '', 1, 'name', true)['series'] === [], 'Series ownership');
    echo json_encode(['passed' => true, 'pagination' => [50, 5], 'previewCap' => 3, 'distinctBooks' => 6, 'ownership' => true]), PHP_EOL;
} finally { $db->rollBack(); }
