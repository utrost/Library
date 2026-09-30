<?php
declare(strict_types=1);
// Invoked only by the labelled disposable-instance harness.
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$uid = 'library-smoke';
$db = \OC::$server->get(\OCP\IDBConnection::class);
$items = \OC::$server->get(\OCA\Library\Service\ItemService::class);
$snapshot = '/tmp/library-upgrade-fixture.json';
$read = static function () use ($db, $uid): array {
    $qb = $db->getQueryBuilder();
    $result = $qb->select('id', 'user_id', 'library_file_id', 'title', 'creators', 'description')
        ->from('library_items')->where($qb->expr()->eq('user_id', $qb->createNamedParameter($uid)))
        ->orderBy('id')->executeQuery();
    $rows = $result->fetchAll();
    $result->closeCursor();
    return $rows;
};
if (($argv[1] ?? '') === 'seed') {
    $rows = $read();
    if (count($rows) !== 40) throw new RuntimeException('Expected 40 books before upgrade');
    $id = (int)end($rows)['id'];
    $metadata = $items->findItem($uid, $id);
    $metadata['description'] = 'User correction retained across Library upgrades.';
    $items->updateItem($uid, $id, $metadata);
    file_put_contents($snapshot, json_encode($read(), JSON_THROW_ON_ERROR));
    echo "upgrade_fixture_seeded=true\n";
} else {
    $before = json_decode(file_get_contents($snapshot), true, 512, JSON_THROW_ON_ERROR);
    if ($read() != $before) throw new RuntimeException('Catalogue changed during upgrade or rescan');
    echo "upgrade_fixture_preserved=true books=40 manual_description=true\n";
}
