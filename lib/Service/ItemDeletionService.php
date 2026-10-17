<?php
declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\IDBConnection;

/** Removes catalogue rows and their derived data; reading-list entries remain tombstones. */
final class ItemDeletionService {
    private const ITEM_CHILDREN = [
        'library_item_facets', 'library_item_search_grams', 'library_item_identifiers',
        'library_item_authors', 'library_item_series', 'library_infer_results',
        'library_dup_terms', 'library_dup_index',
    ];

    public function __construct(private IDBConnection $db, private ?DuplicateIndexService $duplicateIndex = null) {}

    public function deleteItem(string $uid, int $itemId, ?string $requiredStatus = null, bool $requireUnedited = false, bool $deleteMissingFile = false): bool {
        $this->db->beginTransaction();
        try {
            RootLifetimeGuard::lockFirst($this->db, $uid);
            if ($this->db->getDatabaseProvider() === 'sqlite') {
                $this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id=? AND id=?', [$uid, $itemId]);
            }
            $sql = 'SELECT i.library_file_id,i.user_edited,f.scan_status FROM *PREFIX*library_items i '
                . 'INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id '
                . 'WHERE i.user_id=? AND i.id=?';
            if ($this->db->getDatabaseProvider() !== 'sqlite') $sql .= ' FOR UPDATE';
            $result = $this->db->executeQuery($sql, [$uid, $itemId]);
            $row = $result->fetch();
            $result->closeCursor();
            if ($row === false || ($requiredStatus !== null && $row['scan_status'] !== $requiredStatus)
                || ($requireUnedited && in_array($row['user_edited'], [true, 1, '1', 't', 'true'], true))) {
                $this->db->commit();
                return false;
            }
            // Keep the duplicate worker's account lock until this deletion commits.
            $this->duplicateIndex?->lockForDeletion($uid);
            $this->deleteChildren($uid, 'item_id=?', [$itemId]);
            $this->db->executeStatement('DELETE FROM *PREFIX*library_dup_hints WHERE user_id=? AND (left_id=? OR right_id=?)', [$uid, $itemId, $itemId]);
            $this->clearDuplicateSnapshots($uid);
            $this->db->executeStatement('DELETE FROM *PREFIX*library_items WHERE user_id=? AND id=?', [$uid, $itemId]);
            if ($deleteMissingFile) {
                $this->db->executeStatement('DELETE FROM *PREFIX*library_files WHERE user_id=? AND id=? AND scan_status=?', [$uid, (int)$row['library_file_id'], 'missing']);
            }
            $this->db->commit();
            return true;
        } catch (\Throwable $error) { $this->db->rollBack(); throw $error; }
    }

    /** One set-based transaction avoids partial root removal and per-file delete loops. */
    public function deleteRoot(string $uid, int $rootId): bool {
        $this->db->beginTransaction();
        try {
            RootLifetimeGuard::lockFirst($this->db, $uid);
            if ($this->db->getDatabaseProvider() === 'sqlite') {
                $this->db->executeStatement('UPDATE *PREFIX*library_roots SET id=id WHERE user_id=? AND id=?', [$uid, $rootId]);
            }
            $sql = 'SELECT id FROM *PREFIX*library_roots WHERE user_id=? AND id=?';
            if ($this->db->getDatabaseProvider() !== 'sqlite') $sql .= ' FOR UPDATE';
            $result = $this->db->executeQuery($sql, [$uid, $rootId]);
            $found = $result->fetch() !== false;
            $result->closeCursor();
            if (!$found) { $this->db->commit(); return false; }
            if ($this->db->getDatabaseProvider() !== 'sqlite') {
                // Scanner metadata transactions lock an item before duplicate state.
                // Take root items in that order before fencing the duplicate worker.
                $locked = $this->db->executeQuery('SELECT i.id FROM *PREFIX*library_items i '
                    . 'INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id '
                    . 'WHERE i.user_id=? AND f.root_id=? ORDER BY i.id FOR UPDATE', [$uid, $rootId]);
                while ($locked->fetch() !== false) {}
                $locked->closeCursor();
            }
            $this->duplicateIndex?->lockForDeletion($uid);

            $itemSql = 'SELECT i.id FROM *PREFIX*library_items i WHERE i.user_id=? AND i.library_file_id IN '
                . '(SELECT f.id FROM *PREFIX*library_files f WHERE f.user_id=? AND f.root_id=?)';
            $itemArgs = [$uid, $uid, $rootId];
            $this->deleteChildren($uid, 'item_id IN (' . $itemSql . ')', $itemArgs);
            $this->db->executeStatement('DELETE FROM *PREFIX*library_dup_hints WHERE user_id=? AND '
                . '(left_id IN (' . $itemSql . ') OR right_id IN (' . $itemSql . '))',
                [$uid, ...$itemArgs, ...$itemArgs]);
            $this->clearDuplicateSnapshots($uid);
            $this->db->executeStatement('DELETE FROM *PREFIX*library_items WHERE user_id=? AND library_file_id IN '
                . '(SELECT id FROM *PREFIX*library_files WHERE user_id=? AND root_id=?)', [$uid, $uid, $rootId]);
            $this->db->executeStatement('DELETE FROM *PREFIX*library_files WHERE user_id=? AND root_id=?', [$uid, $rootId]);
            $this->db->executeStatement('DELETE FROM *PREFIX*library_roots WHERE user_id=? AND id=?', [$uid, $rootId]);
            $this->db->executeStatement('DELETE FROM *PREFIX*library_scan_changes WHERE user_id=?', [$uid]);
            $this->db->commit();
            return true;
        } catch (\Throwable $error) { $this->db->rollBack(); throw $error; }
    }

    private function deleteChildren(string $uid, string $condition, array $args): void {
        foreach (self::ITEM_CHILDREN as $table) {
            $this->db->executeStatement('DELETE FROM *PREFIX*' . $table . ' WHERE user_id=? AND ' . $condition, [$uid, ...$args]);
        }
    }

    /** A comparison payload embeds books, so item-key deletion alone leaves stale UI. */
    private function clearDuplicateSnapshots(string $uid): void {
        foreach (['library_dup_pairs', 'library_dup_books', 'library_dup_keys', 'library_dup_jobs'] as $table) {
            $this->db->executeStatement('DELETE FROM *PREFIX*' . $table . ' WHERE user_id=?', [$uid]);
        }
    }
}
