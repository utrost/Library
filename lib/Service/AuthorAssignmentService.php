<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;
use OCA\Library\Exception\ListConflictException;

/** Explicit, bounded author changes. Source book metadata is never rewritten. */
final class AuthorAssignmentService {
    public const MAX_BOOKS = 500;
    public const MAX_LARGE_BOOKS = 5000;
    public function __construct(private IDBConnection $db, private DuplicateIndexService $duplicateIndex) {}
    private function rows(string $sql, array $params = [], bool $lock = false): array {
        $r = $this->db->executeQuery($sql . ($lock && $this->db->getDatabaseProvider() !== 'sqlite' ? ' FOR UPDATE' : ''), $params);
        try { return $r->fetchAll(); } finally { $r->closeCursor(); }
    }
    private function author(string $uid, int $id, bool $lock = false): array {
        $a = $this->rows('SELECT * FROM *PREFIX*library_authors WHERE user_id=? AND id=?', [$uid, $id], $lock)[0] ?? null;
        if (!$a) throw new \OutOfBoundsException('author');
        return $a;
    }
    private function ids(string $uid, int $source, array $selected): array {
        if (count($selected) > self::MAX_BOOKS) throw new \LengthException('author_operation_limit');
        foreach ($selected as $id) if (!is_int($id) || $id < 1) throw new \InvalidArgumentException('item_ids');
        if ($selected) { $ids = array_values(array_unique($selected)); sort($ids, SORT_NUMERIC); return $ids; }
        $ids = array_map('intval', array_column($this->rows('SELECT DISTINCT item_id FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=? ORDER BY item_id LIMIT ' . (self::MAX_LARGE_BOOKS + 1), [$uid, $source]), 'item_id'));
        if (count($ids) > self::MAX_LARGE_BOOKS) throw new \LengthException('author_operation_limit');
        return $ids;
    }
    private function snapshot(string $uid, int $source, int $target, array $selected, bool $lock = false): array {
        if ($source === $target || $source < 1 || $target < 1) throw new \InvalidArgumentException('authors');
        $ids = $this->ids($uid, $source, $selected);
        // Same lock order as backfill: ascending items, then account state, then authors/links.
        $items = [];
        foreach (array_chunk($ids, 400) as $chunk) {
            $marks = implode(',', array_fill(0, count($chunk), '?'));
            if ($lock && $this->db->getDatabaseProvider() === 'sqlite') $this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id=? AND id IN (' . $marks . ')', [$uid, ...$chunk]);
            $rows = $this->rows('SELECT id,title,authors_json,creators,author_sync_status FROM *PREFIX*library_items WHERE user_id=? AND id IN (' . $marks . ') ORDER BY id', [$uid, ...$chunk], $lock);
            if (count($rows) !== count($chunk)) throw new ListConflictException('book_missing');
            foreach ($rows as $item) {
                if ((int)$item['author_sync_status'] !== AuthorStorageService::SYNCED) throw new \OCA\Library\Exception\AuthorMigrationPendingException();
                $items[] = $item;
            }
        }
        if ($lock) $this->db->executeStatement('UPDATE *PREFIX*library_author_state SET updated_at=? WHERE user_id=?', [time(), $uid]);
        $authors = [];
        foreach ([$source < $target ? $source : $target, $source < $target ? $target : $source] as $authorId) $authors[$authorId] = $this->author($uid, $authorId, $lock);
        $a = $authors[$source]; $b = $authors[$target];
        if ($a['merged_into'] !== null || $b['merged_into'] !== null) throw new ListConflictException('author_retired');
        // Reject arrivals/deletions between collecting the book locks and the identity lock.
        if (!$selected && $ids !== $this->idsCurrent($uid, $source, $lock)) throw new ListConflictException('books_changed');
        $links = array_fill_keys(array_map('strval', $ids), []);
        foreach (array_chunk($ids, 400) as $chunk) {
            $marks = implode(',', array_fill(0, count($chunk), '?'));
            foreach ($this->rows('SELECT * FROM *PREFIX*library_item_authors WHERE user_id=? AND item_id IN (' . $marks . ') ORDER BY item_id,position', [$uid, ...$chunk], $lock) as $link) $links[(string)$link['item_id']][] = $link;
        }
        foreach ($links as $rows) if (!in_array($source, array_map('intval', array_column($rows, 'author_id')), true)) throw new ListConflictException('assignment_changed');
        return ['source' => $a, 'target' => $b, 'items' => $items, 'links' => $links, 'merge' => !$selected];
    }
    private function idsCurrent(string $uid, int $source, bool $lock): array {
        // No DISTINCT with FOR UPDATE: PostgreSQL disallows that combination.
        $rows = $this->rows('SELECT item_id FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=? ORDER BY item_id', [$uid, $source], $lock);
        return array_values(array_unique(array_map('intval', array_column($rows, 'item_id'))));
    }
    private function fingerprint(array $snapshot): string { return hash('sha256', json_encode($snapshot, JSON_THROW_ON_ERROR)); }
    public function preview(string $uid, int $source, int $target, array $selected = []): array {
        $s = $this->snapshot($uid, $source, $target, $selected);
        return ['token' => $this->fingerprint($s), 'source' => $s['source']['display_name'], 'target' => $s['target']['display_name'],
            'merge' => $s['merge'], 'queued' => count($s['items']) > self::MAX_BOOKS, 'bookCount' => count($s['items']),
            'books' => array_map(fn($i) => ['id' => (int)$i['id'], 'title' => $i['title'], 'credit' => $i['creators']], array_slice($s['items'], 0, count($s['items']) > self::MAX_BOOKS ? 20 : null))];
    }
    private function insert(string $table, array $values): void {
        $qb = $this->db->getQueryBuilder();
        $qb->insert($table)->values(array_map(fn($v) => $qb->createNamedParameter($v), $values))->executeStatement();
    }
    private function replace(string $uid, int $item, array $links): void {
        $this->db->executeStatement('DELETE FROM *PREFIX*library_item_authors WHERE user_id=? AND item_id=?', [$uid, $item]);
        foreach ($links as $link) $this->insert('library_item_authors', $link);
    }
    private function invalidateDuplicateHints(string $uid, array $itemIds): void {
        foreach (array_chunk($itemIds, 400) as $ids) {
            $marks = implode(',', array_fill(0, count($ids), '?'));
            $this->db->executeStatement('DELETE FROM *PREFIX*library_dup_hints WHERE user_id=? AND (left_id IN (' . $marks . ') OR right_id IN (' . $marks . '))', [$uid, ...$ids, ...$ids]);
        }
    }
    public function apply(string $uid, int $source, int $target, array $selected, string $token): array {
        if (!$selected && count($this->ids($uid, $source, [])) > self::MAX_BOOKS) {
            $snapshot = $this->snapshot($uid, $source, $target, []);
            if (!hash_equals($this->fingerprint($snapshot), $token)) throw new ListConflictException('preview_stale');
            return $this->queue($uid, 'merge', $source, $target, null, $token, count($snapshot['items']));
        }
        return $this->applyImmediate($uid, $source, $target, $selected, $token);
    }
    private function applyImmediate(string $uid, int $source, int $target, array $selected, string $token, ?string $taskId = null, ?string $claimToken = null): array {
        $this->db->beginTransaction();
        try {
            $s = $this->snapshot($uid, $source, $target, $selected, true);
            if ($taskId === null && count($s['items']) > self::MAX_BOOKS) throw new ListConflictException('books_changed');
            if (!hash_equals($this->fingerprint($s), $token)) throw new ListConflictException('preview_stale');
            $after = [];
            foreach ($s['links'] as $item => $links) {
                $new = []; $seenTarget = false;
                foreach ($links as $link) {
                    if (in_array((int)$link['author_id'], [$source, $target], true)) {
                        if ($seenTarget) continue;
                        $seenTarget = true; $link['author_id'] = $target;
                        $link['assignment_source'] = 'manual';
                    }
                    $link['position'] = count($new); $link['revision'] = (int)$link['revision'] + 1;
                    $new[] = $link;
                }
                $this->replace($uid, (int)$item, $new);
                // Read DB representations for stable hashes across drivers (int/string differences).
                $after[$item] = $this->rows('SELECT * FROM *PREFIX*library_item_authors WHERE user_id=? AND item_id=? ORDER BY position', [$uid, $item]);
            }
            if ($s['merge']) $this->db->executeStatement('UPDATE *PREFIX*library_authors SET merged_into=?,revision=revision+1 WHERE user_id=? AND id=?', [$target, $uid, $source]);
            // A reviewed identity change can alter duplicate evidence even when
            // source credits remain identical. Drop only decisions touching the
            // affected books; the other account's choices are untouched.
            $this->invalidateDuplicateHints($uid, array_map('intval', array_keys($s['links'])));
            $this->duplicateIndex->changedMany($uid, array_map('intval', array_keys($s['links'])));
            $id = bin2hex(random_bytes(16));
            $payload = ['before' => $s, 'after' => $after, 'sourceAfter' => $this->author($uid, $source)];
            $encoded = json_encode($payload, JSON_THROW_ON_ERROR);
            if (strlen($encoded) > 8 * 1024 * 1024) throw new \LengthException('author_operation_limit');
            $this->insert('library_author_operations', ['source_name' => $s['source']['display_name'], 'target_name' => $s['target']['display_name'], 'book_count' => count($s['items']), 'is_merge' => (int)$s['merge'], 'id' => $id, 'user_id' => $uid, 'created_at' => time(), 'undone' => 0, 'payload' => $encoded]);
            if ($taskId !== null) $this->finishTask($uid, $taskId, $id, $claimToken);
            $this->db->commit();
            return ['id' => $id, 'books' => count($s['items'])];
        } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
    }
    private function finishTask(string $uid, string $taskId, string $operationId, ?string $claimToken): void {
        $affected = $this->db->executeStatement('UPDATE *PREFIX*library_author_tasks SET status=?,operation_id=?,updated_at=? WHERE id=? AND user_id=? AND status=? AND claim_token=?', ['completed', $operationId, time(), $taskId, $uid, 'running', $claimToken]);
        if ($affected !== 1) throw new ListConflictException('task_changed');
    }
    private function queue(string $uid, string $action, ?int $source, ?int $target, ?string $operationId, ?string $token, int $count): array {
        $id = bin2hex(random_bytes(16)); $now = time();
        $this->db->beginTransaction();
        try {
            $this->db->executeStatement('UPDATE *PREFIX*library_author_state SET updated_at=? WHERE user_id=?', [$now, $uid]);
            $this->db->executeStatement("DELETE FROM *PREFIX*library_author_tasks WHERE user_id=? AND created_at<? AND status IN ('completed','cancelled','conflict','failed')", [$uid, $now - 30 * 86400]);
            $active = $this->rows("SELECT id FROM *PREFIX*library_author_tasks WHERE user_id=? AND status IN ('queued','running') LIMIT 1", [$uid]);
            if ($active) throw new ListConflictException('task_active');
            $this->insert('library_author_tasks', ['id' => $id, 'user_id' => $uid, 'action' => $action, 'source_id' => $source, 'target_id' => $target,
                'operation_id' => $operationId, 'preview_token' => $token, 'claim_token' => null, 'book_count' => $count, 'status' => 'queued', 'error_code' => null,
                'created_at' => $now, 'updated_at' => $now]);
            $this->db->commit();
        } catch (\Throwable $error) { $this->db->rollBack(); throw $error; }
        return ['id' => $id, 'books' => $count, 'queued' => true];
    }
    public function tasks(string $uid): array {
        return $this->rows('SELECT id,action,source_id,target_id,operation_id,book_count,status,error_code,created_at,updated_at FROM *PREFIX*library_author_tasks WHERE user_id=? ORDER BY created_at DESC,id DESC LIMIT 10', [$uid]);
    }
    public function cancelTask(string $uid, string $id): void {
        if (!preg_match('/^[a-f0-9]{32}$/D', $id)) throw new \OutOfBoundsException('task');
        $affected = $this->db->executeStatement("UPDATE *PREFIX*library_author_tasks SET status='cancelled',updated_at=? WHERE id=? AND user_id=? AND status='queued'", [time(), $id, $uid]);
        if ($affected === 1) return;
        $exists = $this->rows('SELECT id FROM *PREFIX*library_author_tasks WHERE id=? AND user_id=?', [$id, $uid]);
        if (!$exists) throw new \OutOfBoundsException('task');
        throw new ListConflictException('task_started');
    }
    public function advanceTask(): bool {
        $now = time(); $stale = $now - 900;
        $task = $this->rows("SELECT * FROM *PREFIX*library_author_tasks WHERE status='queued' OR (status='running' AND updated_at<?) ORDER BY created_at,id LIMIT 1", [$stale])[0] ?? null;
        if ($task === null) return false;
        $claimToken = bin2hex(random_bytes(16));
        $claimed = $this->db->executeStatement("UPDATE *PREFIX*library_author_tasks SET status='running',claim_token=?,updated_at=? WHERE id=? AND (status='queued' OR (status='running' AND updated_at<?))", [$claimToken, $now, $task['id'], $stale]);
        if ($claimed !== 1) return false;
        try {
            if ($task['action'] === 'merge') $this->applyImmediate($task['user_id'], (int)$task['source_id'], (int)$task['target_id'], [], $task['preview_token'], $task['id'], $claimToken);
            elseif ($task['action'] === 'undo') $this->undoImmediate($task['user_id'], $task['operation_id'], $task['id'], $claimToken);
            else throw new \RuntimeException('invalid_author_task');
        } catch (ListConflictException|\OCA\Library\Exception\AuthorMigrationPendingException|\OutOfBoundsException $error) {
            $this->db->executeStatement("UPDATE *PREFIX*library_author_tasks SET status='conflict',error_code=?,updated_at=? WHERE id=? AND status='running' AND claim_token=?", ['changed', time(), $task['id'], $claimToken]);
        } catch (\Throwable $error) {
            $this->db->executeStatement("UPDATE *PREFIX*library_author_tasks SET status='failed',error_code=?,updated_at=? WHERE id=? AND status='running' AND claim_token=?", ['operation_failed', time(), $task['id'], $claimToken]);
            throw $error;
        }
        return true;
    }
    public function history(string $uid): array {
        return $this->rows('SELECT id,created_at,undone,source_name AS source,target_name AS target,book_count AS books,is_merge FROM *PREFIX*library_author_operations WHERE user_id=? ORDER BY created_at DESC,id DESC LIMIT 20', [$uid]);
    }
    public function undo(string $uid, string $id): array {
        $operation = $this->rows('SELECT book_count,undone FROM *PREFIX*library_author_operations WHERE user_id=? AND id=?', [$uid, $id])[0] ?? null;
        if (!$operation) throw new \OutOfBoundsException('operation');
        if ((int)$operation['undone'] !== 0) throw new ListConflictException('already_undone');
        if ((int)$operation['book_count'] > self::MAX_BOOKS) return $this->queue($uid, 'undo', null, null, $id, null, (int)$operation['book_count']);
        $this->undoImmediate($uid, $id);
        return ['undone' => true];
    }
    private function undoImmediate(string $uid, string $id, ?string $taskId = null, ?string $claimToken = null): void {
        $this->db->beginTransaction();
        try {
            $operation = $this->rows('SELECT * FROM *PREFIX*library_author_operations WHERE user_id=? AND id=?', [$uid, $id])[0] ?? null;
            if (!$operation) throw new \OutOfBoundsException('operation');
            $p = json_decode($operation['payload'], true, 512, JSON_THROW_ON_ERROR); $s = $p['before'];
            foreach ($s['items'] as $item) {
                if ($this->db->getDatabaseProvider() === 'sqlite') $this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id=? AND id=?', [$uid, $item['id']]);
                $current = $this->rows('SELECT id,title,authors_json,creators,author_sync_status FROM *PREFIX*library_items WHERE user_id=? AND id=?', [$uid, $item['id']], true)[0] ?? null;
                if ($current !== $item) throw new ListConflictException('book_changed');
            }
            $this->db->executeStatement('UPDATE *PREFIX*library_author_state SET updated_at=? WHERE user_id=?', [time(), $uid]);
            $operation = $this->rows('SELECT undone FROM *PREFIX*library_author_operations WHERE user_id=? AND id=?', [$uid, $id], true)[0] ?? null;
            if (!$operation || (int)$operation['undone'] !== 0) throw new ListConflictException('already_undone');
            if ($this->author($uid, (int)$s['source']['id'], true) !== $p['sourceAfter']) throw new ListConflictException('author_changed');
            if ($this->author($uid, (int)$s['target']['id'], true)['merged_into'] !== null) throw new ListConflictException('target_retired');
            foreach ($p['after'] as $item => $links) {
                $current = $this->rows('SELECT * FROM *PREFIX*library_item_authors WHERE user_id=? AND item_id=? ORDER BY position', [$uid, $item], true);
                if ($current !== $links) throw new ListConflictException('assignment_changed');
            }
            foreach ($s['links'] as $item => $links) {
                // Never restore an old revision (prevents stale-preview ABA acceptance).
                $maxRevision = max(array_map('intval', array_column($p['after'][$item], 'revision')));
                foreach ($links as &$link) { $link['revision'] = $maxRevision + 1; $link['assignment_source'] = 'manual'; } unset($link);
                $this->replace($uid, (int)$item, $links);
            }
            if ($s['merge']) $this->db->executeStatement('UPDATE *PREFIX*library_authors SET merged_into=NULL,revision=revision+1 WHERE user_id=? AND id=?', [$uid, $s['source']['id']]);
            $this->invalidateDuplicateHints($uid, array_map('intval', array_keys($s['links'])));
            $this->duplicateIndex->changedMany($uid, array_map('intval', array_keys($s['links'])));
            $this->db->executeStatement('UPDATE *PREFIX*library_author_operations SET undone=1 WHERE user_id=? AND id=?', [$uid, $id]);
            if ($taskId !== null) $this->finishTask($uid, $taskId, $id, $claimToken);
            $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
    }
}
