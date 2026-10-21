<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\IDBConnection;
final class DirectoryPreviewService {
    public function __construct(private IDBConnection $db) {}
    private function rows(string $sql, array $params): array {
        $r = $this->db->executeQuery($sql, $params);
        try { return $r->fetchAll(); } finally { $r->closeCursor(); }
    }
    /** One bounded batch: indexed top-three link lookups, at most 150 preview rows. */
    public function books(string $uid, array $ids, string $kind): array {
        [$table, $column, $extra] = match ($kind) {
            'author' => ['library_item_authors', 'author_id', ''],
            'series' => ['library_item_series', 'series_id', ''],
            'genre' => ['library_item_genres', 'genre_id', ' AND active=1'],
            default => throw new \InvalidArgumentException('directory_kind'),
        };
        if (count($ids) > 50) throw new \InvalidArgumentException('directory_limit');
        if ($ids === []) return [];
        $parts = []; $params = [];
        foreach ($ids as $index => $id) {
            $parts[] = 'SELECT ' . (int)$id . ' AS entry_id,p.item_id FROM (SELECT DISTINCT l.item_id FROM *PREFIX*' . $table . ' l INNER JOIN *PREFIX*library_items visible ON visible.id=l.item_id AND visible.user_id=l.user_id AND visible.marked_for_deletion_at IS NULL WHERE l.user_id=? AND l.' . $column . '=?' . $extra . ' ORDER BY l.item_id LIMIT 3) p';
            array_push($params, $uid, (int)$id);
        }
        $sql = 'SELECT previews.entry_id,i.id,i.title,i.cover_revision,f.etag FROM (' . implode(' UNION ALL ', $parts) . ') previews'
            . ' INNER JOIN *PREFIX*library_items i ON i.id=previews.item_id AND i.user_id=? AND i.marked_for_deletion_at IS NULL'
            . ' INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id ORDER BY previews.entry_id,i.id';
        $params[] = $uid;
        $result = [];
        foreach ($this->rows($sql, $params) as $book) {
            $authorId = (int)$book['entry_id']; unset($book['entry_id']);
            $result[$authorId][] = $book;
        }
        return $result;
    }
}
