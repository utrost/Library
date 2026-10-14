<?php
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$state = json_decode(file_get_contents('/tmp/library-author-directory-fixture.json'), true, 512, JSON_THROW_ON_ERROR);
$uid = $state['uid'] ?? '';
if (!preg_match('/^library-author-[a-f0-9]{12}$/D', $uid)) throw new RuntimeException('Owned fixture account required');
$db = \OC::$server->get(\OCP\IDBConnection::class);
$source = (int)$db->executeQuery('SELECT author_id FROM *PREFIX*library_item_authors WHERE user_id=? ORDER BY item_id LIMIT 1', [$uid])->fetchOne();
if ($source < 1) throw new RuntimeException('Fixture author missing');
$id = bin2hex(random_bytes(16));
$now = time();
$db->executeStatement('INSERT INTO *PREFIX*library_author_tasks (id,user_id,action,source_id,target_id,operation_id,preview_token,claim_token,book_count,status,error_code,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [$id, $uid, 'merge', $source, null, null, null, null, 503, 'queued', null, $now, $now]);
echo json_encode(['uid' => $uid, 'source' => $source, 'task' => $id]), PHP_EOL;
