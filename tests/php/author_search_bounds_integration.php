<?php
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$state = json_decode(file_get_contents('/tmp/library-author-directory-fixture.json'), true, 512, JSON_THROW_ON_ERROR);
$uid = $state['uid'] ?? '';
if (!preg_match('/^library-author-[a-f0-9]{12}$/D', $uid)) throw new RuntimeException('Owned fixture account required');
$db = \OCP\Server::get(\OCP\IDBConnection::class);
$items = \OCP\Server::get(\OCA\Library\Service\ItemService::class);
function insertSearchFixture($db, string $table, array $values): int {
    unset($values['id']);
    $qb = $db->getQueryBuilder()->insert($table);
    foreach ($values as $key => $value) $qb->setValue($key, $qb->createNamedParameter($value, $value === null ? \OCP\DB\QueryBuilder\IQueryBuilder::PARAM_NULL : \OCP\DB\QueryBuilder\IQueryBuilder::PARAM_STR));
    $qb->executeStatement();
    return (int)$db->lastInsertId('*PREFIX*' . $table);
}
$db->beginTransaction();
try {
    $author = $db->executeQuery('SELECT * FROM *PREFIX*library_authors WHERE user_id=? AND merged_into IS NULL ORDER BY id LIMIT 1', [$uid])->fetch();
    $book = $db->executeQuery('SELECT * FROM *PREFIX*library_items WHERE user_id=? ORDER BY id LIMIT 1', [$uid])->fetch();
    $file = $db->executeQuery('SELECT * FROM *PREFIX*library_files WHERE user_id=? AND id=?', [$uid, $book['library_file_id']])->fetch();
    $link = $db->executeQuery('SELECT * FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=? ORDER BY item_id LIMIT 1', [$uid, $author['id']])->fetch();
    // More names than the bounded probe, with a book only on the last name.
    for ($n = 0; $n < 501; $n++) {
        $copy = $author;
        $copy['display_name'] = $copy['sort_name'] = 'Boundarycandidate ' . $n;
        $copy['comparison_key'] = 'boundarycandidate ' . $n;
        $id = insertSearchFixture($db, 'library_authors', $copy);
    }
    $copy = $link; $copy['author_id'] = $id; $copy['position'] = 99;
    insertSearchFixture($db, 'library_item_authors', $copy);
    foreach (['q', 'creator'] as $filter) {
        if ($items->queryCatalogue($uid, [$filter => 'Boundarycandidate'], ['page' => 1, 'limit' => 100], false)['total'] !== 1) throw new RuntimeException('Broad author names were truncated');
    }
    // More linked books than the bounded item probe. These index rows have no
    // backing files and exist only inside this rolled-back fixture transaction.
    for ($n = 0; $n < 501; $n++) {
        $copy = $file; $copy['file_id'] = 1000000000 + $n;
        $copy['cached_path'] = '/Author fixtures/bounded-' . $n . '.epub';
        $fileId = insertSearchFixture($db, 'library_files', $copy);
        $copy = $book; $copy['library_file_id'] = $fileId;
        $itemId = insertSearchFixture($db, 'library_items', $copy);
        $copy = $link; $copy['item_id'] = $itemId;
        insertSearchFixture($db, 'library_item_authors', $copy);
    }
    foreach (['q', 'creator'] as $filter) {
        $result = $items->queryCatalogue($uid, [$filter => 'Preferred'], ['page' => 6, 'limit' => 100], false);
        if ($result['total'] !== 503 || count($result['items']) !== 3) throw new RuntimeException('Broad author books or pagination were truncated');
    }
    echo json_encode(['passed' => true, 'authorOverflow' => 501, 'bookOverflow' => 503, 'lastPage' => 3]), PHP_EOL;
} finally {
    $db->rollBack();
}
