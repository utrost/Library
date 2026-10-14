<?php
// Run only with the temporary account created by opf_series_integration.php.
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';

$state = json_decode(file_get_contents('/tmp/library-opf-series-fixture.json'), true, 512, JSON_THROW_ON_ERROR);
$uid = $state['uid'];
$db = \OCP\Server::get(\OCP\IDBConnection::class);
$storage = \OCP\Server::get(\OCA\Library\Service\SeriesStorageService::class);
$assignments = \OCP\Server::get(\OCA\Library\Service\SeriesAssignmentService::class);
$directory = \OCP\Server::get(\OCA\Library\Service\SeriesDirectoryService::class);
$storage->advance($uid, 50, 30);

$rows = static function (string $sql, array $params = []) use ($db): array {
    $result = $db->executeQuery($sql, $params);
    try { return $result->fetchAll(); } finally { $result->closeCursor(); }
};
$check = static function (bool $condition, string $message): void {
    if (!$condition) throw new RuntimeException($message);
};
$expectConflict = static function (callable $operation) use ($check): void {
    try { $operation(); } catch (\OCA\Library\Exception\ListConflictException $error) { return; }
    $check(false, 'expected stale operation to be rejected');
};
$series = $rows('SELECT id,display_name FROM *PREFIX*library_series WHERE user_id=? ORDER BY id', [$uid]);
$check(count($series) === 2, 'expected two imported series');
$byName = array_column($series, 'id', 'display_name');
$source = (int)$byName['Calibre fixture']; $target = (int)$byName['EPUB 3 fixture'];
$item = $rows('SELECT id,series_name,series_number FROM *PREFIX*library_items WHERE user_id=? AND series_name=?', [$uid, 'Calibre fixture'])[0];
$itemId = (int)$item['id'];
$link = static fn() => $rows('SELECT * FROM *PREFIX*library_item_series WHERE user_id=? AND item_id=? AND slot=0', [$uid, $itemId])[0];

$preview = $assignments->preview($uid, $source, $target, [$itemId]);
$check($preview['bookCount'] === 1 && !$preview['merge'], 'selected move preview');
$assignments->apply($uid, $source, $target, [$itemId], $preview['token']);
$check((int)$link()['series_id'] === $target && $link()['assignment_source'] === 'manual', 'selected move applied');
$check($rows('SELECT series_name FROM *PREFIX*library_items WHERE id=?', [$itemId])[0]['series_name'] === 'Calibre fixture', 'source metadata unchanged');
$db->executeStatement('UPDATE *PREFIX*library_items SET series_sync_status=? WHERE user_id=? AND id=?', [1, $uid, $itemId]);
$storage->synchronize($uid, $itemId);
$check((int)$link()['series_id'] === $target, 'manual move survives unchanged rescan');
$operation = $assignments->history($uid)[0];
$assignments->undo($uid, $operation['id']);
$check((int)$link()['series_id'] === $source && $link()['assignment_source'] === 'import', 'selected move undone with original provenance');
$check((int)$assignments->history($uid)[0]['undone'] === 1, 'history records undo');

$mergePreview = $assignments->preview($uid, $source, $target);
$check($mergePreview['merge'] && $mergePreview['bookCount'] === 1, 'whole-series merge preview');
$expectConflict(static fn() => $assignments->apply($uid, $source, $target, [], str_repeat('0', 64)));
$assignments->apply($uid, $source, $target, [], $mergePreview['token']);
$check((int)$link()['series_id'] === $target, 'merge moved book');
$check((int)$rows('SELECT merged_into FROM *PREFIX*library_series WHERE id=?', [$source])[0]['merged_into'] === $target, 'old identity redirects');
$check(count($directory->directory($uid)['series']) === 1, 'retired series hidden from directory');

// A new imported book with the retired source name must join the destination.
$folder = \OCP\Server::get(\OCP\Files\IRootFolder::class)->getUserFolder($uid)->get('Series fixtures');
$tmp = tempnam('/tmp', 'library-series-');
try {
    $zip = new ZipArchive(); $zip->open($tmp, ZipArchive::OVERWRITE);
    $zip->addFromString('META-INF/container.xml', '<container><rootfiles><rootfile full-path="book.opf"/></rootfiles></container>');
    $zip->addFromString('book.opf', '<package xmlns="http://www.idpf.org/2007/opf" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata><dc:title>redirect fixture</dc:title><dc:language>en</dc:language><meta name="calibre:series" content="Calibre fixture"/></metadata></package>');
    $zip->close(); $folder->newFile('redirect.epub', file_get_contents($tmp));
} finally { unlink($tmp); }
\OCP\Server::get(\OCA\Library\Service\LibraryScanner::class)->scan($uid, (int)$state['rootId']);
$storage->advance($uid, 50, 30);
$redirected = $rows('SELECT l.series_id,l.assignment_source FROM *PREFIX*library_item_series l JOIN *PREFIX*library_items i ON i.id=l.item_id WHERE i.user_id=? AND i.title=?', [$uid, 'redirect fixture'])[0];
$check((int)$redirected['series_id'] === $target && $redirected['assignment_source'] === 'import', 'future import follows redirect');

$mergeOperation = $assignments->history($uid)[0];
$db->executeStatement('UPDATE *PREFIX*library_items SET series_name=?,series_sync_status=? WHERE user_id=? AND id=?', ['Changed source series', 1, $uid, $itemId]);
$storage->synchronize($uid, $itemId);
$check($storage->status($uid)['conflict'] === 1, 'changed import needs review');
$conflict = $storage->conflictPreview($uid, $itemId);
$expectConflict(static fn() => $storage->resolveConflict($uid, $itemId, 'keep', str_repeat('0', 64)));
$storage->resolveConflict($uid, $itemId, 'keep', $conflict['token']);
$check((int)$link()['series_id'] === $target && $link()['assignment_source'] === 'manual', 'keep decision retained');
$expectConflict(static fn() => $assignments->undo($uid, $mergeOperation['id']));
$db->executeStatement('UPDATE *PREFIX*library_items SET series_name=?,series_sync_status=? WHERE user_id=? AND id=?', ['Another imported series', 1, $uid, $itemId]);
$storage->synchronize($uid, $itemId);
$conflict = $storage->conflictPreview($uid, $itemId);
$storage->resolveConflict($uid, $itemId, 'import', $conflict['token']);
$check($link()['assignment_source'] === 'import' && (int)$link()['series_id'] !== $target, 'use imported series decision');
$check($storage->status($uid)['conflict'] === 0, 'all import conflicts resolved');

$empty = $storage->create($uid, 'Empty series fixture');
$emptyPreview = $assignments->preview($uid, $empty, $target);
$check($emptyPreview['merge'] && $emptyPreview['bookCount'] === 0, 'empty source merge preview');
$emptyOperation = $assignments->apply($uid, $empty, $target, [], $emptyPreview['token']);
$check((int)$rows('SELECT merged_into FROM *PREFIX*library_series WHERE id=?', [$empty])[0]['merged_into'] === $target, 'empty source redirects');
$assignments->undo($uid, $emptyOperation['id']);
$check($rows('SELECT merged_into FROM *PREFIX*library_series WHERE id=?', [$empty])[0]['merged_into'] === null, 'empty merge undo');

echo json_encode(['passed' => true, 'uid' => $uid, 'source' => $source, 'target' => $target, 'item' => $itemId,
    'tested' => ['selected_move', 'undo', 'whole_merge', 'redirect', 'stale_preview', 'rescan_preservation', 'conflict_keep', 'conflict_import', 'stale_undo', 'empty_merge_and_undo']]), PHP_EOL;
