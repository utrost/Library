<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCA\Library\Exception\ListConflictException;
use OCP\IDBConnection;

/** Paged series directory and revision-checked preferred metadata. */
final class SeriesDirectoryService {
    public function __construct(private IDBConnection $db, private SeriesStorageService $storage) {}
    private function rows(string $sql, array $params = []): array {
        $r = $this->db->executeQuery($sql, $params);
        try { return $r->fetchAll(); } finally { $r->closeCursor(); }
    }
    public function directory(string $uid, string $search = '', int $page = 1): array {
        if ($page < 1 || $page > 100000 || mb_strlen($search) > 255) throw new \InvalidArgumentException('search_or_page');
        $where = 's.user_id=?'; $params = [$uid];
        if (trim($search) !== '') {
            $where .= " AND LOWER(s.display_name) LIKE ? ESCAPE '!'";
            $params[] = str_replace(['!', '%', '_'], ['!!', '!%', '!_'], mb_strtolower(trim($search))) . '%';
        }
        $list = $this->rows('SELECT s.id,s.display_name,s.revision,(SELECT COUNT(*) FROM *PREFIX*library_item_series l WHERE l.user_id=s.user_id AND l.series_id=s.id) AS book_count FROM *PREFIX*library_series s WHERE ' . $where . ' ORDER BY s.display_name,s.id LIMIT 51 OFFSET ' . (($page - 1) * 50), $params);
        return ['series' => array_slice($list, 0, 50), 'page' => $page, 'hasNext' => count($list) > 50, 'migration' => $this->storage->status($uid)];
    }
    public function show(string $uid, int $id, int $page = 1): array {
        if ($page < 1 || $page > 100000) throw new \InvalidArgumentException('page');
        $series = $this->rows('SELECT id,display_name,description,revision FROM *PREFIX*library_series WHERE user_id=? AND id=?', [$uid, $id])[0] ?? null;
        if ($series === null) throw new \OutOfBoundsException('series');
        $count = $this->rows('SELECT COUNT(*) AS n FROM *PREFIX*library_item_series WHERE user_id=? AND series_id=?', [$uid, $id])[0];
        $books = $this->rows('SELECT i.id,i.title,i.creators,l.part_number,l.source_name,i.cover_revision,f.etag,f.extension,f.scan_status FROM *PREFIX*library_item_series l INNER JOIN *PREFIX*library_items i ON i.id=l.item_id AND i.user_id=l.user_id INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id WHERE l.user_id=? AND l.series_id=? ORDER BY CASE WHEN l.part_number IS NULL THEN 1 ELSE 0 END,l.part_number,i.title,i.id LIMIT 51 OFFSET ' . (($page - 1) * 50), [$uid, $id]);
        return ['series' => $series, 'books' => array_slice($books, 0, 50), 'bookCount' => (int)$count['n'], 'page' => $page, 'hasNext' => count($books) > 50];
    }
    public function update(string $uid, int $id, int $revision, string $name, string $description): void {
        if ($revision < 1 || mb_strlen($name) > 255 || mb_strlen($description) > 10000 || !mb_check_encoding($name . $description, 'UTF-8') || preg_match('/[\p{Cc}]/u', $name)) throw new \InvalidArgumentException('series');
        $name = trim($name);
        if ($name === '') throw new \InvalidArgumentException('series');
        $this->db->beginTransaction();
        try {
            $this->db->executeStatement('UPDATE *PREFIX*library_series_state SET updated_at=? WHERE user_id=?', [time(), $uid]);
            $affected = $this->db->executeStatement('UPDATE *PREFIX*library_series SET display_name=?,description=?,revision=revision+1 WHERE user_id=? AND id=? AND revision=?', [$name, trim($description) === '' ? null : trim($description), $uid, $id, $revision]);
            if ($affected !== 1) {
                $exists = $this->rows('SELECT id FROM *PREFIX*library_series WHERE user_id=? AND id=?', [$uid, $id]);
                if (!$exists) throw new \OutOfBoundsException('series');
                throw new ListConflictException('series_revision');
            }
            $this->db->commit();
        } catch (\Throwable $error) { $this->db->rollBack(); throw $error; }
    }
}
