<?php
// Test-only derived review evidence for the disposable Gutenberg matrix.
// Source files and saved bibliographic fields remain untouched; container cleanup removes it.
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$uid = $argv[1] ?? '';
$excluded = filter_var($argv[2] ?? '', FILTER_VALIDATE_INT, ['options' => ['min_range' => 1]]);
if ($uid === '' || $excluded === false) throw new InvalidArgumentException('Provide fixture account and the main GUI book ID');
$db = \OCP\Server::get(\OCP\IDBConnection::class);
$result = $db->executeQuery('SELECT id FROM *PREFIX*library_items WHERE user_id=? AND id<>? ORDER BY id DESC', [$uid, $excluded]);
try { $id = $result->fetchOne(); } finally { $result->closeCursor(); }
if ($id === false) throw new RuntimeException('Language review requires a second disposable book');
\OCP\Server::get(\OCA\Library\Service\LanguageReviewService::class)->record($uid, (int)$id, '3ng');
echo json_encode(['language_review_fixture' => true, 'itemId' => (int)$id]), PHP_EOL;
