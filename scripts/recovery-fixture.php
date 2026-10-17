<?php
declare(strict_types=1);
/** Seed or verify the isolated backup/restore fixture. */
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';

$uid = 'library-recovery-smoke';
$db = \OC::$server->get(\OCP\IDBConnection::class);
$server = \OC::$server;
$expectedFile = '/tmp/library-recovery-expected.json';
$rows = static function (string $sql, array $args = []) use ($db): array {
    $result = $db->executeQuery($sql, $args);
    try { return $result->fetchAll(); } finally { $result->closeCursor(); }
};
$snapshot = static function () use ($uid, $rows, $server): array {
    $authors = $rows('SELECT id,display_name,sort_name,biography,photo_key,merged_into FROM *PREFIX*library_authors WHERE user_id=? ORDER BY id', [$uid]);
    $photos = $server->get(\OCA\Library\Service\AuthorPhotoService::class);
    foreach ($authors as &$author) $author['photo_sha256'] = $author['photo_key'] ? hash('sha256', $photos->get($uid, $author['photo_key'])) : null;
    unset($author);
    return [
        'books' => $rows('SELECT id,title,description,creators,series_name,series_number FROM *PREFIX*library_items WHERE user_id=? ORDER BY id', [$uid]),
        'authors' => $authors,
        'authorLinks' => $rows('SELECT item_id,author_id,position,assignment_source FROM *PREFIX*library_item_authors WHERE user_id=? ORDER BY item_id,position', [$uid]),
        'authorOperations' => $rows('SELECT id,source_name,target_name,book_count,is_merge,undone FROM *PREFIX*library_author_operations WHERE user_id=? ORDER BY id', [$uid]),
        'series' => $rows('SELECT id,display_name,description,merged_into FROM *PREFIX*library_series WHERE user_id=? ORDER BY id', [$uid]),
        'seriesLinks' => $rows('SELECT item_id,series_id,part_number,assignment_source FROM *PREFIX*library_item_series WHERE user_id=? ORDER BY item_id,slot', [$uid]),
        'seriesOperations' => $rows('SELECT id,source_name,target_name,book_count,is_merge,undone FROM *PREFIX*library_series_operations WHERE user_id=? ORDER BY id', [$uid]),
        'lists' => $rows('SELECT id,name,description,revision FROM *PREFIX*library_lists WHERE user_id=? ORDER BY id', [$uid]),
        'listEntries' => $rows('SELECT e.list_id,e.item_id,e.position,e.note FROM *PREFIX*library_list_entries e JOIN *PREFIX*library_lists l ON l.id=e.list_id WHERE l.user_id=? ORDER BY e.list_id,e.position', [$uid]),
    ];
};

if (($argv[1] ?? '') === 'verify') {
    $expected = json_decode((string)file_get_contents($expectedFile), true, 512, JSON_THROW_ON_ERROR);
    $actual = $snapshot();
    if ($actual !== $expected) throw new RuntimeException('Restored Library state differs from backup fixture');
    echo json_encode(['passed' => true, 'books' => count($actual['books']), 'authors' => count($actual['authors']),
        'series' => count($actual['series']), 'lists' => count($actual['lists']),
        'portrait' => count(array_filter(array_column($actual['authors'], 'photo_sha256'))) > 0], JSON_THROW_ON_ERROR), PHP_EOL;
    exit;
}
if (($argv[1] ?? '') !== 'seed') throw new InvalidArgumentException('seed_or_verify');
if ($server->get(\OCP\IUserManager::class)->get($uid)) throw new RuntimeException('Fixture user already exists');
$server->get(\OCP\IUserManager::class)->createUser($uid, bin2hex(random_bytes(24)));
$folder = $server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid)->newFolder('Recovery books');
foreach ([['One', 'Jane Example', 'Chronicles', '1'], ['Two', 'J. Example', 'Chronicles', '2']] as [$title, $author, $series, $number]) {
    $path = tempnam('/tmp', 'library-recovery-');
    $zip = new ZipArchive();
    $zip->open($path, ZipArchive::OVERWRITE);
    $zip->addFromString('mimetype', 'application/epub+zip');
    $zip->addFromString('META-INF/container.xml', '<container><rootfiles><rootfile full-path="book.opf"/></rootfiles></container>');
    $zip->addFromString('book.opf', '<package xmlns="http://www.idpf.org/2007/opf" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata><dc:title>' . $title . '</dc:title><dc:creator>' . $author . '</dc:creator><dc:language>en</dc:language><meta name="calibre:series" content="' . $series . '"/><meta name="calibre:series_index" content="' . $number . '"/></metadata></package>');
    $zip->close();
    $folder->newFile($title . '.epub', (string)file_get_contents($path));
    unlink($path);
}
$server->get(\OCA\Library\Service\RootService::class)->saveRoot($uid, '/Recovery books', 'Recovery books', true);
$scan = $server->get(\OCA\Library\Service\LibraryScanner::class)->scan($uid);
if ($scan['errors'] !== []) throw new RuntimeException('Fixture scan failed');
$items = $server->get(\OCA\Library\Service\ItemService::class);
$books = $rows('SELECT id FROM *PREFIX*library_items WHERE user_id=? ORDER BY id', [$uid]);
if (count($books) !== 2) throw new RuntimeException('Fixture books missing');
$first = (int)$books[0]['id'];
$metadata = $items->findItem($uid, $first);
$metadata['description'] = 'Corrected before backup';
$items->updateItem($uid, $first, $metadata);
$server->get(\OCA\Library\Service\AuthorStorageService::class)->advance($uid);
$server->get(\OCA\Library\Service\SeriesStorageService::class)->advance($uid);
$authorDirectory = $server->get(\OCA\Library\Service\AuthorDirectoryService::class);
$authors = $authorDirectory->directory($uid)['authors'];
if (count($authors) !== 2) throw new RuntimeException('Fixture authors missing');
$authorIds = array_column($authors, 'id', 'display_name');
$authorAssignments = $server->get(\OCA\Library\Service\AuthorAssignmentService::class);
$preview = $authorAssignments->preview($uid, (int)$authorIds['J. Example'], (int)$authorIds['Jane Example']);
$authorAssignments->apply($uid, (int)$authorIds['J. Example'], (int)$authorIds['Jane Example'], [], $preview['token']);
$profile = $authorDirectory->profile($uid, (int)$authorIds['Jane Example']);
$img = imagecreatetruecolor(10, 10);
imagefill($img, 0, 0, imagecolorallocate($img, 30, 80, 120));
ob_start(); imagejpeg($img); $photo = (string)ob_get_clean(); imagedestroy($img);
$authorDirectory->update($uid, (int)$profile['id'], (int)$profile['revision'], [
    'display_name' => 'Jane Example', 'sort_name' => 'Example, Jane', 'given_name' => 'Jane',
    'family_name' => 'Example', 'biography' => 'Fixture biography'], $photo);
$seriesStorage = $server->get(\OCA\Library\Service\SeriesStorageService::class);
$source = (int)$rows('SELECT id FROM *PREFIX*library_series WHERE user_id=? AND display_name=?', [$uid, 'Chronicles'])[0]['id'];
$target = $seriesStorage->create($uid, 'Preferred Chronicles');
$seriesAssignments = $server->get(\OCA\Library\Service\SeriesAssignmentService::class);
$preview = $seriesAssignments->preview($uid, $source, $target);
$seriesAssignments->apply($uid, $source, $target, [], $preview['token']);
$lists = $server->get(\OCA\Library\Service\PersonalListService::class);
$list = $lists->create($uid, 'Recover me', 'A private reading note');
$lists->add($uid, (int)$list['id'], (int)$list['revision'], [$first]);
$page = $lists->page($uid, (int)$list['id']);
$list = $page['list'];
$lists->note($uid, (int)$list['id'], (int)$list['revision'], (int)$page['entries'][0]['id'], 'Read again');
$actual = $snapshot();
file_put_contents($expectedFile, json_encode($actual, JSON_THROW_ON_ERROR));
echo json_encode(['seeded' => true, 'books' => count($actual['books']), 'authors' => count($actual['authors']),
    'series' => count($actual['series']), 'lists' => count($actual['lists'])], JSON_THROW_ON_ERROR), PHP_EOL;
