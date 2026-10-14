<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;
use OCA\Library\Exception\ListConflictException;

/** Explicit, bounded author changes. Source book metadata is never rewritten. */
final class AuthorAssignmentService {
    public const MAX_BOOKS = 500;
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
        $ids = array_map('intval', array_column($this->rows('SELECT DISTINCT item_id FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=? ORDER BY item_id LIMIT 501', [$uid, $source]), 'item_id'));
        if (count($ids) > self::MAX_BOOKS) throw new \LengthException('author_operation_limit');
        return $ids;
    }
    private function snapshot(string $uid, int $source, int $target, array $selected, bool $lock = false): array {
        if ($source === $target || $source < 1 || $target < 1) throw new \InvalidArgumentException('authors');
        $ids = $this->ids($uid, $source, $selected);
        // Same lock order as backfill: ascending items, then account state, then authors/links.
        $items = [];
        foreach ($ids as $id) {
            if ($lock && $this->db->getDatabaseProvider() === 'sqlite') $this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id=? AND id=?', [$uid, $id]);
            $item = $this->rows('SELECT id,title,authors_json,creators,author_sync_status FROM *PREFIX*library_items WHERE user_id=? AND id=?', [$uid, $id], $lock)[0] ?? null;
            if (!$item) throw new ListConflictException('book_missing');
            if ((int)$item['author_sync_status'] !== AuthorStorageService::SYNCED) throw new \OCA\Library\Exception\AuthorMigrationPendingException();
            $items[] = $item;
        }
        if ($lock) $this->db->executeStatement('UPDATE *PREFIX*library_author_state SET updated_at=? WHERE user_id=?', [time(), $uid]);
        $a = $this->author($uid, $source, $lock); $b = $this->author($uid, $target, $lock);
        if ($a['merged_into'] !== null || $b['merged_into'] !== null) throw new ListConflictException('author_retired');
        // Reject arrivals/deletions between collecting the book locks and the identity lock.
        if (!$selected && $ids !== $this->idsCurrent($uid, $source, $lock)) throw new ListConflictException('books_changed');
        $links = [];
        foreach ($ids as $id) {
            $rows = $this->rows('SELECT * FROM *PREFIX*library_item_authors WHERE user_id=? AND item_id=? ORDER BY position', [$uid, $id], $lock);
            if (!in_array($source, array_map('intval', array_column($rows, 'author_id')), true)) throw new ListConflictException('assignment_changed');
            $links[(string)$id] = $rows;
        }
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
            'merge' => $s['merge'], 'books' => array_map(fn($i) => ['id' => (int)$i['id'], 'title' => $i['title'], 'credit' => $i['creators']], $s['items'])];
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
        $this->db->beginTransaction();
        try {
            $s = $this->snapshot($uid, $source, $target, $selected, true);
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
            $this->db->commit();
            return ['id' => $id, 'books' => count($s['items'])];
        } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
    }
    public function history(string $uid): array {
        return $this->rows('SELECT id,created_at,undone,source_name AS source,target_name AS target,book_count AS books,is_merge FROM *PREFIX*library_author_operations WHERE user_id=? ORDER BY created_at DESC,id DESC LIMIT 20', [$uid]);
    }
    public function undo(string $uid, string $id): void {
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
            $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
    }
}
