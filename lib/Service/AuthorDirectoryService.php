<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;
use OCA\Library\Exception\ListConflictException;

/** Account-scoped author directory. Legacy book credits remain source observations. */
final class AuthorDirectoryService {
    public function __construct(private IDBConnection $db, private AuthorStorageService $storage) {}
    private function rows(string $sql, array $params): array {
        $r = $this->db->executeQuery($sql, $params);
        try { return $r->fetchAll(); } finally { $r->closeCursor(); }
    }
    public function directory(string $uid, string $search = '', int $page = 1, bool $unused = false): array {
        if (mb_strlen($search) > 255 || $page < 1 || $page > 100000) throw new \InvalidArgumentException('page_or_search');
        $where = 'a.user_id = ?'; $params = [$uid];
        if ($search !== '') {
            // Literal prefix search avoids an unbounded leading-wildcard scan.
            $where .= " AND (LOWER(a.sort_name) LIKE ? ESCAPE '!' OR LOWER(a.display_name) LIKE ? ESCAPE '!')";
            $query = str_replace(['!', '%', '_'], ['!!', '!%', '!_'], mb_strtolower(trim($search))) . '%';
            array_push($params, $query, $query);
        }
        if ($unused) $where .= ' AND NOT EXISTS (SELECT 1 FROM *PREFIX*library_item_authors l WHERE l.user_id=a.user_id AND l.author_id=a.id)';
        $rows = $this->rows('SELECT a.id,a.display_name,a.sort_name,a.revision,(SELECT COUNT(DISTINCT l.item_id) FROM *PREFIX*library_item_authors l WHERE l.user_id=a.user_id AND l.author_id=a.id) AS book_count FROM *PREFIX*library_authors a WHERE ' . $where . ' ORDER BY a.sort_name,a.id LIMIT 51 OFFSET ' . (($page - 1) * 50), $params);
        return ['authors' => array_slice($rows, 0, 50), 'hasNext' => count($rows) > 50, 'page' => $page, 'migration' => $this->storage->status($uid)];
    }
    public function page(string $uid, int $id, int $page = 1): array {
        if ($page < 1 || $page > 100000) throw new \InvalidArgumentException('page');
        $author = $this->rows('SELECT * FROM *PREFIX*library_authors WHERE user_id=? AND id=?', [$uid, $id])[0] ?? null;
        if ($author === null) throw new \OutOfBoundsException('author');
        $rows = $this->rows('SELECT DISTINCT i.id,i.title,i.creators FROM *PREFIX*library_item_authors l INNER JOIN *PREFIX*library_items i ON i.id=l.item_id AND i.user_id=l.user_id WHERE l.user_id=? AND l.author_id=? ORDER BY i.id LIMIT 51 OFFSET ' . (($page - 1) * 50), [$uid, $id]);
        $count = $this->rows('SELECT COUNT(DISTINCT item_id) AS n FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=?', [$uid, $id])[0];
        $migration = $this->storage->status($uid);
        return ['canEdit' => $migration['pending'] === 0 && $migration['failed'] === 0, 'author' => $author, 'books' => array_slice($rows, 0, 50), 'bookCount' => (int)$count['n'], 'hasNext' => count($rows) > 50, 'page' => $page];
    }
    public function update(string $uid, int $id, int $revision, array $fields): void {
        $migration = $this->storage->status($uid);
        if ($migration['pending'] > 0 || $migration['failed'] > 0) throw new \OCA\Library\Exception\AuthorMigrationPendingException();
        if ($revision < 1) throw new \InvalidArgumentException('revision');
        $values = [];
        foreach (['display_name', 'sort_name', 'given_name', 'family_name'] as $field) {
            $value = $fields[$field] ?? null;
            if (!is_string($value)) throw new \InvalidArgumentException($field);
            $value = trim($value);
            if ($value !== '') AuthorNames::normalize([$value]);
            elseif ($field === 'display_name' || $field === 'sort_name') throw new \InvalidArgumentException($field);
            $values[$field] = $value === '' ? null : $value;
        }
        $normalized = AuthorIdentity::name($values['display_name']);
        $values['comparison_key'] = $normalized['comparison_key'];
        $values['normalization_version'] = AuthorIdentity::VERSION;
        $values['revision'] = $revision + 1;
        $values['field_sources'] = json_encode(array_fill_keys(['display_name','sort_name','given_name','family_name'], 'manual'), JSON_THROW_ON_ERROR);
        $this->db->beginTransaction();
        try {
            // Serializes with migration's identity lookup, without rewriting source credits.
            $this->db->executeStatement('UPDATE *PREFIX*library_author_state SET updated_at=? WHERE user_id=?', [time(), $uid]);
            $qb = $this->db->getQueryBuilder();
            $qb->update('library_authors')->where($qb->expr()->eq('user_id', $qb->createNamedParameter($uid)))
                ->andWhere($qb->expr()->eq('id', $qb->createNamedParameter($id)))
                ->andWhere($qb->expr()->eq('revision', $qb->createNamedParameter($revision)));
            foreach ($values as $key => $value) $qb->set($key, $qb->createNamedParameter($value));
            if ($qb->executeStatement() !== 1) {
                $exists = $this->rows('SELECT id FROM *PREFIX*library_authors WHERE user_id=? AND id=?', [$uid, $id]);
                if (!$exists) throw new \OutOfBoundsException('author');
                throw new ListConflictException('author_revision');
            }
            $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
    }
}
