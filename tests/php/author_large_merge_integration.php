<?php
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
try {
    $state = json_decode(file_get_contents('/tmp/library-author-directory-fixture.json'), true, 512, JSON_THROW_ON_ERROR);
    $uid = $state['uid'] ?? '';
    if (!preg_match('/^library-author-[a-f0-9]{12}$/D', $uid)) throw new RuntimeException('Owned fixture account required');
    $db = \OC::$server->get(\OCP\IDBConnection::class);
    $folder = \OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid)->get('Author fixtures');
    $content = $folder->get('calibre.epub')->getContent();
    for ($i = 0; $i < 501; $i++) $folder->newFile(sprintf('large-%04d.epub', $i), $content);
    $scan = \OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan($uid, (int)$state['rootId']);
    if ($scan['errors']) throw new RuntimeException('Large fixture scan errors');
    $storage = \OC::$server->get(\OCA\Library\Service\AuthorStorageService::class);
    while ($storage->status($uid)['pending'] > 0) $storage->advance($uid, 500, 30);
    $source = (int)$db->executeQuery('SELECT author_id FROM *PREFIX*library_item_authors WHERE user_id=? ORDER BY item_id LIMIT 1', [$uid])->fetchOne();
    $directory = \OC::$server->get(\OCA\Library\Service\AuthorDirectoryService::class);
    $target = (int)$directory->create($uid, 'Large merge destination')['id'];
    $count = (int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=?', [$uid, $source])->fetchOne();
    if ($count !== 503) throw new RuntimeException('Expected 503 linked source books, got ' . $count);
    $index = \OC::$server->get(\OCA\Library\Service\DuplicateIndexService::class);
    $index->configure($uid, true);
    while ($index->status($uid)['status'] === 'building') $index->advance($uid, 500);
    $service = \OC::$server->get(\OCA\Library\Service\AuthorAssignmentService::class);
    $start = microtime(true);
    $preview = $service->preview($uid, $source, $target);
    $previewMs = round((microtime(true) - $start) * 1000, 2);
    if (!$preview['queued'] || $preview['bookCount'] !== 503 || count($preview['books']) !== 20) throw new RuntimeException('Large preview must be bounded');
    $start = microtime(true);
    $queued = $service->apply($uid, $source, $target, [], $preview['token']);
    $queueMs = round((microtime(true) - $start) * 1000, 2);
    if (!$queued['queued'] || $queued['books'] !== 503) throw new RuntimeException('Large merge was not queued');
    if ((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=?', [$uid, $source])->fetchOne() !== 503) throw new RuntimeException('Queued merge changed visible links');
    // A killed worker leaves a running task; the timed worker must reclaim it.
    $db->executeStatement("UPDATE *PREFIX*library_author_tasks SET status='running',updated_at=?,claim_token=? WHERE id=? AND user_id=?", [time() - 901, 'abandoned-worker', $queued['id'], $uid]);
    $start = microtime(true);
    if (!$service->advanceTask()) throw new RuntimeException('Stale task was not reclaimed');
    $mergeMs = round((microtime(true) - $start) * 1000, 2);
    $task = $db->executeQuery('SELECT status,operation_id FROM *PREFIX*library_author_tasks WHERE id=? AND user_id=?', [$queued['id'], $uid])->fetch();
    if ($task['status'] !== 'completed' || !$task['operation_id']) throw new RuntimeException('Merge task did not complete');
    if ((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=?', [$uid, $target])->fetchOne() !== 503) throw new RuntimeException('Merged books missing');
    if ((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=?', [$uid, $source])->fetchOne() !== 0) throw new RuntimeException('Source books remained after merge');
    $undo = $service->undo($uid, $task['operation_id']);
    if (!$undo['queued'] || $undo['books'] !== 503) throw new RuntimeException('Large undo was not queued');
    if ((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=?', [$uid, $source])->fetchOne() !== 0) throw new RuntimeException('Queued undo changed visible links');
    $start = microtime(true);
    if (!$service->advanceTask()) throw new RuntimeException('Undo task was not processed');
    $undoMs = round((microtime(true) - $start) * 1000, 2);
    $undoTask = $db->executeQuery('SELECT status FROM *PREFIX*library_author_tasks WHERE id=? AND user_id=?', [$undo['id'], $uid])->fetch();
    if ($undoTask['status'] !== 'completed') throw new RuntimeException('Undo task did not complete');
    if ((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=?', [$uid, $source])->fetchOne() !== 503) throw new RuntimeException('Undo did not restore all books');
    $preview = $service->preview($uid, $source, $target);
    $cancelled = $service->apply($uid, $source, $target, [], $preview['token']);
    try { $service->cancelTask($uid . '-other', $cancelled['id']); throw new RuntimeException('Cross-account cancellation succeeded'); }
    catch (OutOfBoundsException) {}
    $service->cancelTask($uid, $cancelled['id']);
    if ($db->executeQuery('SELECT status FROM *PREFIX*library_author_tasks WHERE id=?', [$cancelled['id']])->fetchOne() !== 'cancelled') throw new RuntimeException('Queued task was not cancelled');
    $queued = $service->apply($uid, $source, $target, [], $preview['token']);
    $bookId = (int)$db->executeQuery('SELECT item_id FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=? ORDER BY item_id LIMIT 1', [$uid, $source])->fetchOne();
    $db->executeStatement('UPDATE *PREFIX*library_items SET title=? WHERE user_id=? AND id=?', ['Changed after review', $uid, $bookId]);
    $service->advanceTask();
    $conflict = $db->executeQuery('SELECT status FROM *PREFIX*library_author_tasks WHERE id=? AND user_id=?', [$queued['id'], $uid])->fetch();
    if ($conflict['status'] !== 'conflict') throw new RuntimeException('Stale preview did not stop merge');
    if ((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=?', [$uid, $source])->fetchOne() !== 503) throw new RuntimeException('Conflicted task changed links');
    if ($service->tasks($uid . '-other')) throw new RuntimeException('Cross-account task leak');
    echo json_encode(['passed' => true, 'books' => 503, 'previewMs' => $previewMs, 'queueMs' => $queueMs, 'mergeMs' => $mergeMs, 'undoMs' => $undoMs,
        'staleWorkerRecovered' => true, 'queuedCancellation' => true, 'conflictAtomic' => true, 'crossAccountPrivate' => true]), PHP_EOL;
} catch (Throwable $error) {
    fwrite(STDERR, get_class($error) . ': ' . $error->getMessage() . ' at ' . $error->getFile() . ':' . $error->getLine() . PHP_EOL);
    exit(1);
}
