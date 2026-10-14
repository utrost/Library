<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCA\Library\Exception\ListConflictException;
use OCP\IDBConnection;

/** Reviewed moves and merges of the primary series identity; source metadata stays intact. */
final class SeriesAssignmentService {
    public const MAX_BOOKS = 500;
    public function __construct(private IDBConnection $db) {}
    private function rows(string $sql, array $params = [], bool $lock = false): array {
        $result = $this->db->executeQuery($sql . ($lock && $this->db->getDatabaseProvider() !== 'sqlite' ? ' FOR UPDATE' : ''), $params);
        try { return $result->fetchAll(); } finally { $result->closeCursor(); }
    }
    private function series(string $uid, int $id, bool $lock = false): array {
        $row = $this->rows('SELECT * FROM *PREFIX*library_series WHERE user_id=? AND id=?', [$uid, $id], $lock)[0] ?? null;
        if ($row === null) throw new \OutOfBoundsException('series');
        return $row;
    }
    private function ids(string $uid, int $source, array $selected): array {
        if (count($selected) > self::MAX_BOOKS) throw new \LengthException('series_operation_limit');
        foreach ($selected as $id) if (!is_int($id) || $id < 1) throw new \InvalidArgumentException('item_ids');
        if ($selected) { $ids = array_values(array_unique($selected)); sort($ids, SORT_NUMERIC); return $ids; }
        $ids = array_map('intval', array_column($this->rows('SELECT item_id FROM *PREFIX*library_item_series WHERE user_id=? AND series_id=? AND slot=0 ORDER BY item_id LIMIT 501', [$uid, $source]), 'item_id'));
        if (count($ids) > self::MAX_BOOKS) throw new \LengthException('series_operation_limit');
        return $ids;
    }
    private function snapshot(string $uid, int $source, int $target, array $selected, bool $lock = false): array {
        if ($source < 1 || $target < 1 || $source === $target) throw new \InvalidArgumentException('series');
        $ids = $this->ids($uid, $source, $selected);
        $items = [];
        foreach (array_chunk($ids, 400) as $chunk) {
            $marks = implode(',', array_fill(0, count($chunk), '?'));
            if ($lock && $this->db->getDatabaseProvider() === 'sqlite') $this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id=? AND id IN (' . $marks . ')', [$uid, ...$chunk]);
            $rows = $this->rows('SELECT id,title,series_name,series_number,series_sync_status FROM *PREFIX*library_items WHERE user_id=? AND id IN (' . $marks . ') ORDER BY id', [$uid, ...$chunk], $lock);
            if (count($rows) !== count($chunk)) throw new ListConflictException('book_missing');
            foreach ($rows as $row) {
                if ((int)$row['series_sync_status'] !== SeriesStorageService::SYNCED) throw new ListConflictException('series_migration_pending');
                $items[] = $row;
            }
        }
        if ($lock) $this->db->executeStatement('UPDATE *PREFIX*library_series_state SET updated_at=? WHERE user_id=?', [time(), $uid]);
        $series = [];
        foreach ([$source < $target ? $source : $target, $source < $target ? $target : $source] as $id) $series[$id] = $this->series($uid, $id, $lock);
        if ($series[$source]['merged_into'] !== null || $series[$target]['merged_into'] !== null) throw new ListConflictException('series_retired');
        if (!$selected && $ids !== $this->idsCurrent($uid, $source, $lock)) throw new ListConflictException('books_changed');
        $links = [];
        foreach (array_chunk($ids, 400) as $chunk) {
            $marks = implode(',', array_fill(0, count($chunk), '?'));
            foreach ($this->rows('SELECT * FROM *PREFIX*library_item_series WHERE user_id=? AND item_id IN (' . $marks . ') AND slot=0 ORDER BY item_id', [$uid, ...$chunk], $lock) as $link) $links[(string)$link['item_id']] = $link;
        }
        foreach ($ids as $id) if (!isset($links[(string)$id]) || (int)$links[(string)$id]['series_id'] !== $source) throw new ListConflictException('assignment_changed');
        return ['source' => $series[$source], 'target' => $series[$target], 'items' => $items, 'links' => $links, 'merge' => !$selected];
    }
    private function idsCurrent(string $uid, int $source, bool $lock): array {
        return array_map('intval', array_column($this->rows('SELECT item_id FROM *PREFIX*library_item_series WHERE user_id=? AND series_id=? AND slot=0 ORDER BY item_id', [$uid, $source], $lock), 'item_id'));
    }
    private function fingerprint(array $snapshot): string { return hash('sha256', json_encode($snapshot, JSON_THROW_ON_ERROR)); }
    public function preview(string $uid, int $source, int $target, array $selected = []): array {
        $snapshot = $this->snapshot($uid, $source, $target, $selected);
        return ['token' => $this->fingerprint($snapshot), 'source' => $snapshot['source']['display_name'], 'target' => $snapshot['target']['display_name'],
            'merge' => $snapshot['merge'], 'bookCount' => count($snapshot['items']),
            'books' => array_map(fn($item) => ['id' => (int)$item['id'], 'title' => $item['title']], $snapshot['items'])];
    }
    private function insert(string $table, array $values): void {
        $qb = $this->db->getQueryBuilder();
        $qb->insert($table)->values(array_map(fn($value) => $qb->createNamedParameter($value), $values))->executeStatement();
    }
    public function apply(string $uid, int $source, int $target, array $selected, string $token): array {
        $this->db->beginTransaction();
        try {
            $snapshot = $this->snapshot($uid, $source, $target, $selected, true);
            if (!hash_equals($this->fingerprint($snapshot), $token)) throw new ListConflictException('series_preview_stale');
            $after = [];
            foreach ($snapshot['links'] as $itemId => $link) {
                $this->db->executeStatement('UPDATE *PREFIX*library_item_series SET series_id=?,assignment_source=?,revision=revision+1 WHERE user_id=? AND item_id=? AND slot=0',
                    [$target, 'manual', $uid, (int)$itemId]);
                $after[$itemId] = $this->rows('SELECT * FROM *PREFIX*library_item_series WHERE user_id=? AND item_id=? AND slot=0', [$uid, (int)$itemId])[0];
            }
            if ($snapshot['merge']) $this->db->executeStatement('UPDATE *PREFIX*library_series SET merged_into=?,revision=revision+1 WHERE user_id=? AND id=?', [$target, $uid, $source]);
            $payload = ['before' => $snapshot, 'after' => $after, 'sourceAfter' => $this->series($uid, $source)];
            $encoded = json_encode($payload, JSON_THROW_ON_ERROR);
            if (strlen($encoded) > 8 * 1024 * 1024) throw new \LengthException('series_operation_limit');
            $id = bin2hex(random_bytes(16));
            $this->insert('library_series_operations', ['id' => $id, 'user_id' => $uid, 'created_at' => time(), 'undone' => 0,
                'source_name' => $snapshot['source']['display_name'], 'target_name' => $snapshot['target']['display_name'],
                'book_count' => count($snapshot['items']), 'is_merge' => (int)$snapshot['merge'], 'payload' => $encoded]);
            $this->db->commit();
            return ['id' => $id, 'books' => count($snapshot['items'])];
        } catch (\Throwable $error) { $this->db->rollBack(); throw $error; }
    }
    public function history(string $uid): array {
        return $this->rows('SELECT id,created_at,undone,source_name AS source,target_name AS target,book_count AS books,is_merge FROM *PREFIX*library_series_operations WHERE user_id=? ORDER BY created_at DESC,id DESC LIMIT 20', [$uid]);
    }
    public function undo(string $uid, string $id): void {
        if (!preg_match('/^[a-f0-9]{32}$/D', $id)) throw new \InvalidArgumentException('operation');
        $this->db->beginTransaction();
        try {
            $operation = $this->rows('SELECT * FROM *PREFIX*library_series_operations WHERE user_id=? AND id=?', [$uid, $id])[0] ?? null;
            if ($operation === null) throw new \OutOfBoundsException('operation');
            $payload = json_decode($operation['payload'], true, 512, JSON_THROW_ON_ERROR);
            $before = $payload['before'];
            foreach ($before['items'] as $item) {
                if ($this->db->getDatabaseProvider() === 'sqlite') $this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id=? AND id=?', [$uid, (int)$item['id']]);
                $current = $this->rows('SELECT id,title,series_name,series_number,series_sync_status FROM *PREFIX*library_items WHERE user_id=? AND id=?', [$uid, (int)$item['id']], true)[0] ?? null;
                if ($current !== $item) throw new ListConflictException('book_changed');
            }
            $this->db->executeStatement('UPDATE *PREFIX*library_series_state SET updated_at=? WHERE user_id=?', [time(), $uid]);
            $fresh = $this->rows('SELECT undone FROM *PREFIX*library_series_operations WHERE user_id=? AND id=?', [$uid, $id], true)[0] ?? null;
            if ($fresh === null || (int)$fresh['undone'] !== 0) throw new ListConflictException('already_undone');
            if ($this->series($uid, (int)$before['source']['id'], true) !== $payload['sourceAfter']) throw new ListConflictException('series_changed');
            if ($this->series($uid, (int)$before['target']['id'], true)['merged_into'] !== null) throw new ListConflictException('target_retired');
            foreach ($payload['after'] as $itemId => $link) {
                $current = $this->rows('SELECT * FROM *PREFIX*library_item_series WHERE user_id=? AND item_id=? AND slot=0', [$uid, (int)$itemId], true)[0] ?? null;
                if ($current !== $link) throw new ListConflictException('assignment_changed');
            }
            foreach ($before['links'] as $itemId => $link) {
                $link['revision'] = (int)$payload['after'][$itemId]['revision'] + 1;
                $this->db->executeStatement('DELETE FROM *PREFIX*library_item_series WHERE user_id=? AND item_id=? AND slot=0', [$uid, (int)$itemId]);
                $this->insert('library_item_series', $link);
            }
            if ($before['merge']) $this->db->executeStatement('UPDATE *PREFIX*library_series SET merged_into=NULL,revision=revision+1 WHERE user_id=? AND id=?', [$uid, (int)$before['source']['id']]);
            $this->db->executeStatement('UPDATE *PREFIX*library_series_operations SET undone=1 WHERE user_id=? AND id=?', [$uid, $id]);
            $this->db->commit();
        } catch (\Throwable $error) { $this->db->rollBack(); throw $error; }
    }
}
