<?php
declare(strict_types=1);
// Run only against a disposable instance with a scanned library-smoke account.
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
if (getenv('LIBRARY_DISPOSABLE') !== '1') throw new RuntimeException('Disposable fixture opt-in required');

$uid = 'library-smoke';
$db = \OC::$server->get(\OCP\IDBConnection::class);
$row = $db->executeQuery('SELECT a.id,a.revision,l.item_id,l.source_name FROM *PREFIX*library_authors a JOIN *PREFIX*library_item_authors l ON l.author_id=a.id AND l.user_id=a.user_id WHERE a.user_id=? AND a.merged_into IS NULL ORDER BY a.id LIMIT 1', [$uid])->fetch();
if (!$row) throw new RuntimeException('A scanned disposable fixture is required');
$name = 'Canonical fixture ' . bin2hex(random_bytes(6));
$directory = \OC::$server->get(\OCA\Library\Service\AuthorDirectoryService::class);
$directory->update($uid, (int)$row['id'], (int)$row['revision'], [
    'display_name' => $name, 'sort_name' => 'Fixture, Canonical', 'given_name' => '', 'family_name' => '',
]);
$items = \OC::$server->get(\OCA\Library\Service\ItemService::class);
$search = $items->queryCatalogue($uid, ['q' => $name], ['page' => 1, 'limit' => 100], false);
if (!in_array((int)$row['item_id'], array_map('intval', array_column($search['items'], 'id')), true)) throw new RuntimeException('Preferred author missing from search');
$filtered = $items->queryCatalogue($uid, ['authorId' => (string)$row['id']], ['page' => 1, 'limit' => 100], false);
if (!in_array((int)$row['item_id'], array_map('intval', array_column($filtered['items'], 'id')), true)) throw new RuntimeException('Author ID filter failed');
$profile = $db->executeQuery('SELECT revision,field_sources FROM *PREFIX*library_authors WHERE user_id=? AND id=?', [$uid, $row['id']])->fetch();
$sources = json_decode($profile['field_sources'], true, 512, JSON_THROW_ON_ERROR);
$sources['sort_name'] = 'file-as';
$db->executeStatement('UPDATE *PREFIX*library_authors SET field_sources=? WHERE user_id=? AND id=?', [json_encode($sources, JSON_THROW_ON_ERROR), $uid, $row['id']]);
$directory->update($uid, (int)$row['id'], (int)$profile['revision'], [
    'display_name' => $name, 'sort_name' => 'Fixture, Canonical', 'given_name' => '', 'family_name' => '', 'biography' => 'Biography edit',
]);
$after = $db->executeQuery('SELECT field_sources,biography FROM *PREFIX*library_authors WHERE user_id=? AND id=?', [$uid, $row['id']])->fetch();
$afterSources = json_decode($after['field_sources'], true, 512, JSON_THROW_ON_ERROR);
if (($afterSources['sort_name'] ?? null) !== 'file-as' || $after['biography'] !== 'Biography edit') throw new RuntimeException('Biography edit replaced sort provenance');
$credit = $db->executeQuery('SELECT source_name FROM *PREFIX*library_item_authors WHERE user_id=? AND item_id=? AND author_id=?', [$uid, $row['item_id'], $row['id']])->fetch();
if (!$credit || $credit['source_name'] !== $row['source_name']) throw new RuntimeException('Original credit changed');
echo json_encode(['passed' => true, 'searchTotal' => $search['total'], 'authorFilterTotal' => $filtered['total'], 'sourceCreditPreserved' => true, 'sortSourcePreserved' => true]), PHP_EOL;
