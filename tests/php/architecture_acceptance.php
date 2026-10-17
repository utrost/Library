<?php
declare(strict_types=1);
/** Run only after scripts/recovery-fixture.php seed in a disposable SQLite instance. */
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$db = \OC::$server->get(\OCP\IDBConnection::class);
if ($db->getDatabaseProvider() !== 'sqlite') throw new RuntimeException('Disposable SQLite fixture required');
$items = \OC::$server->get(\OCA\Library\Service\ItemService::class);
$roots = \OC::$server->get(\OCA\Library\Service\RootService::class);
$lists = \OC::$server->get(\OCA\Library\Service\PersonalListService::class);
$uid = 'library-recovery-smoke';
$other = 'library-smoke';
$rows = static function (string $sql, array $args = []) use ($db): array {
    $r = $db->executeQuery($sql, $args); try { return $r->fetchAll(); } finally { $r->closeCursor(); }
};
$check = static function (bool $condition, string $message): void { if (!$condition) throw new RuntimeException($message); };
$book = $rows('SELECT id FROM *PREFIX*library_items WHERE user_id=? ORDER BY id', [$uid]);
$id = (int)$book[0]['id'];
$current = $items->findItem($uid, $id);
$check($current !== null, 'fixture book unavailable');

$count = count($rows('SELECT id FROM *PREFIX*library_item_identifiers WHERE item_id=?', [$id]));
$foreign = $current;
$foreign['identifiers'] = [['scheme' => 'isbn', 'displayValue' => '9780306406157']];
try { $items->updateItem($other, $id, $foreign); throw new RuntimeException('Cross-account edit accepted'); }
catch (OutOfBoundsException) {}
$check($items->findItem($other, $id) === null, 'Cross-account detail leak');
$check(count($rows('SELECT id FROM *PREFIX*library_item_identifiers WHERE item_id=?', [$id])) === $count, 'Cross-account identifier write');

$stale = $current['metadataRevision'];
$firstDraft = $current;
$firstDraft['title'] = 'First tab wins';
$items->updateItem($uid, $id, $firstDraft, $stale);
$secondDraft = $current;
$secondDraft['title'] = 'Second stale tab';
try { $items->updateItem($uid, $id, $secondDraft, $stale); throw new RuntimeException('Stale edit accepted'); }
catch (\OCA\Library\Exception\MetadataConflictException) {}
$check($items->findItem($uid, $id)['title'] === 'First tab wins', 'Stale edit replaced newer title');

$before = $items->findItem($uid, $id);
$db->executeStatement('CREATE TRIGGER library_acceptance_fault BEFORE INSERT ON *PREFIX*library_item_facets BEGIN SELECT RAISE(ABORT, \'injected facet failure\'); END');
try {
    $draft = $before;
    $draft['title'] = 'Should roll back';
    $draft['subjects'] = ['Rollback subject'];
    try { $items->updateItem($uid, $id, $draft, $before['metadataRevision']); throw new RuntimeException('Injected failure ignored'); }
    catch (\OCP\DB\Exception | \Doctrine\DBAL\Exception $expected) {}
} finally {
    $db->executeStatement('DROP TRIGGER library_acceptance_fault');
}
$after = $items->findItem($uid, $id);
$check($after['title'] === $before['title'] && $after['subjects'] === $before['subjects'], 'Metadata transaction did not roll back');
$check($rows('SELECT id FROM *PREFIX*library_item_facets WHERE user_id=? AND item_id=? AND facet_value=?', [$uid, $id, 'Rollback subject']) === [], 'Derived facet survived rollback');

$db->executeStatement('CREATE TRIGGER library_acceptance_fault BEFORE INSERT ON *PREFIX*library_item_facets BEGIN SELECT RAISE(ABORT, \'injected batch facet failure\'); END');
try {
    $failed = false;
    try { $items->applyBatchMetadataEdit($uid, [$id], 'title', 'Batch should roll back'); }
    catch (Throwable) { $failed = true; }
    $check($failed, 'Injected batch failure ignored');
} finally {
    $db->executeStatement('DROP TRIGGER library_acceptance_fault');
}
$check($items->findItem($uid, $id)['title'] === $before['title'], 'Batch transaction did not roll back');

$root = $rows('SELECT id FROM *PREFIX*library_roots WHERE user_id=?', [$uid]);
$roots->deleteRoot($uid, (int)$root[0]['id']);
$check($items->findItem($uid, $id) === null, 'Root deletion retained a book');
foreach (['library_item_identifiers', 'library_item_facets', 'library_item_search_grams', 'library_item_authors', 'library_item_series', 'library_dup_index'] as $table)
    $check($rows('SELECT item_id FROM *PREFIX*' . $table . ' WHERE user_id=? AND item_id=?', [$uid, $id]) === [], "$table orphaned");
$list = $lists->lists($uid)[0];
$page = $lists->page($uid, (int)$list['id']);
$check($page['entries'][0]['book'] === null && $page['entries'][0]['note'] === 'Read again', 'Reading-list tombstone lost');
echo json_encode(['passed' => true, 'twoUserIsolation' => true, 'staleEditRejected' => true,
    'metadataRollback' => true, 'batchRollback' => true, 'rootDeletionCleanup' => true, 'listTombstone' => true], JSON_THROW_ON_ERROR), PHP_EOL;
