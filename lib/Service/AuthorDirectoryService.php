<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;
use OCA\Library\Exception\ListConflictException;

/** Account-scoped author directory. Legacy book credits remain source observations. */
final class AuthorDirectoryService {
    public function __construct(private IDBConnection $db, private AuthorStorageService $storage, private ?AuthorPhotoService $photos = null) {}
    private function rows(string $sql, array $params): array {
        $r = $this->db->executeQuery($sql, $params);
        try { return $r->fetchAll(); } finally { $r->closeCursor(); }
    }
    public function directory(string $uid, string $search = '', int $page = 1, bool $unused = false): array {
        if (mb_strlen($search) > 255 || $page < 1 || $page > 100000) throw new \InvalidArgumentException('page_or_search');
        $where = 'a.user_id = ? AND a.merged_into IS NULL'; $params = [$uid];
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
    public function profile(string $uid, int $id): array {
        $author = $this->rows('SELECT * FROM *PREFIX*library_authors WHERE user_id=? AND id=?', [$uid, $id])[0] ?? null;
        if ($author === null) throw new \OutOfBoundsException('author');
        return $author;
    }
    public function page(string $uid, int $id, int $page = 1, string $search = '', string $sort = 'title'): array {
        if ($page < 1 || $page > 100000 || mb_strlen($search) > 255) throw new \InvalidArgumentException('page_or_search');
        $order = match ($sort) {
            'title' => 'i.title,i.id',
            'newest' => "CASE WHEN COALESCE(i.publication_date,'')='' THEN 1 ELSE 0 END,i.publication_date DESC,i.title,i.id",
            'series' => "CASE WHEN COALESCE(i.series_name,'')='' THEN 1 ELSE 0 END,i.series_name,i.title,i.id",
            default => throw new \InvalidArgumentException('sort'),
        };
        $author = $this->profile($uid, $id);
        // Drive the bounded book lookup from the indexed account/author relationships.
        $from = ' FROM (SELECT DISTINCT item_id FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=?) links INNER JOIN *PREFIX*library_items i ON i.id=links.item_id INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id WHERE i.user_id=?';
        $params = [$uid, $id, $uid];
        $total = $this->rows('SELECT COUNT(*) AS n' . $from, $params)[0];
        if (trim($search) !== '') {
            $from .= " AND LOWER(i.title) LIKE ? ESCAPE '!'";
            $params[] = '%' . str_replace(['!', '%', '_'], ['!!', '!%', '!_'], mb_strtolower(trim($search))) . '%';
        }
        $count = trim($search) === '' ? $total : $this->rows('SELECT COUNT(*) AS n' . $from, $params)[0];
        $rows = $this->rows('SELECT i.id,i.title,i.creators,i.series_name,i.series_number,i.publication_date,i.cover_revision,f.etag,f.extension,f.scan_status' . $from . ' ORDER BY ' . $order . ' LIMIT 51 OFFSET ' . (($page - 1) * 50), $params);
        $migration = $this->storage->status($uid);
        return ['canEdit' => $author['merged_into'] === null && $migration['pending'] === 0 && $migration['failed'] === 0, 'author' => $author, 'books' => array_slice($rows, 0, 50), 'bookCount' => (int)$total['n'], 'matchingCount' => (int)$count['n'], 'hasNext' => count($rows) > 50, 'page' => $page];
    }
    /** Explicit creation allows homonyms; no automatic name-based reuse. */
    public function create(string $uid, string $name): array {
        $values = AuthorIdentity::name($name) + ['user_id' => $uid, 'revision' => 1,
            'field_sources' => json_encode(['display_name' => 'manual', 'sort_name' => 'manual'], JSON_THROW_ON_ERROR)];
        $this->db->beginTransaction();
        try {
            $this->db->insertIfNotExist('*PREFIX*library_author_state', ['user_id' => $uid, 'updated_at' => 0], ['user_id']);
            $this->db->executeStatement('UPDATE *PREFIX*library_author_state SET updated_at=? WHERE user_id=?', [time(), $uid]);
            $q = $this->db->getQueryBuilder();
            $q->insert('library_authors')->values(array_map(fn($v) => $q->createNamedParameter($v), $values))->executeStatement();
            $id = (int)$this->db->lastInsertId('library_authors');
            $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
        return $this->page($uid, $id)['author'];
    }
    public function update(string $uid, int $id, int $revision, array $fields, ?string $photo = null, bool $removePhoto = false): void {
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
        if (array_key_exists('biography', $fields)) {
            if (!is_string($fields['biography']) || !mb_check_encoding($fields['biography'], 'UTF-8') || mb_strlen($fields['biography']) > 10000) throw new \InvalidArgumentException('biography');
            $values['biography'] = trim($fields['biography']) === '' ? null : trim($fields['biography']);
        }
        if ($photo !== null && $removePhoto) throw new \InvalidArgumentException('photo');
        $portrait = $photo === null ? null : $this->photos?->thumbnail($photo);
        if ($photo !== null && $portrait === null) throw new \RuntimeException('photo_storage_unavailable');
        $newPhoto = null; $oldPhoto = null;
        $normalized = AuthorIdentity::name($values['display_name']);
        $values['comparison_key'] = $normalized['comparison_key'];
        $values['normalization_version'] = AuthorIdentity::VERSION;
        $values['revision'] = $revision + 1;
        $this->db->beginTransaction();
        try {
            // Serializes with migration's identity lookup, without rewriting source credits.
            $this->db->executeStatement('UPDATE *PREFIX*library_author_state SET updated_at=? WHERE user_id=?', [time(), $uid]);
            $old = $this->rows('SELECT revision,photo_key,display_name,sort_name,given_name,family_name,field_sources FROM *PREFIX*library_authors WHERE user_id=? AND id=?' . ($this->db->getDatabaseProvider() === 'sqlite' ? '' : ' FOR UPDATE'), [$uid, $id])[0] ?? null;
            if ($old === null) throw new \OutOfBoundsException('author');
            if ((int)$old['revision'] !== $revision) throw new ListConflictException('author_revision');
            $oldPhoto = $old['photo_key'];
            $sources = json_decode($old['field_sources'] ?: '{}', true);
            if (!is_array($sources)) $sources = [];
            foreach (['display_name', 'sort_name', 'given_name', 'family_name'] as $field) {
                if ($values[$field] !== $old[$field]) $sources[$field] = 'manual';
            }
            $values['field_sources'] = json_encode($sources, JSON_THROW_ON_ERROR);
            if ($portrait !== null) $values['photo_key'] = $newPhoto = $this->photos->store($uid, $portrait);
            elseif ($removePhoto) $values['photo_key'] = null;
            $qb = $this->db->getQueryBuilder();
            $qb->update('library_authors')->where($qb->expr()->eq('user_id', $qb->createNamedParameter($uid)))
                ->andWhere($qb->expr()->eq('id', $qb->createNamedParameter($id)))
                ->andWhere($qb->expr()->eq('revision', $qb->createNamedParameter($revision)))
                ->andWhere($qb->expr()->isNull('merged_into'));
            foreach ($values as $key => $value) $qb->set($key, $qb->createNamedParameter($value));
            if ($qb->executeStatement() !== 1) {
                $exists = $this->rows('SELECT id FROM *PREFIX*library_authors WHERE user_id=? AND id=?', [$uid, $id]);
                if (!$exists) throw new \OutOfBoundsException('author');
                throw new ListConflictException('author_revision');
            }
            $this->db->commit();
        } catch (\Throwable $e) {
            $this->db->rollBack();
            if ($newPhoto !== null) $this->photos?->remove($uid, $newPhoto);
            throw $e;
        }
        if ($newPhoto !== null || $removePhoto) $this->photos?->remove($uid, $oldPhoto);
    }

    /** Delete only an unassigned identity with no live redirects or undo dependency. */
    public function removeUnused(string $uid, int $id, int $revision): void {
        if ($id < 1 || $revision < 1) throw new \InvalidArgumentException('author');
        $migration = $this->storage->status($uid);
        if ($migration['pending'] > 0 || $migration['failed'] > 0) throw new \OCA\Library\Exception\AuthorMigrationPendingException();
        $photoKey = null;
        $this->db->beginTransaction();
        try {
            $this->db->insertIfNotExist('*PREFIX*library_author_state', ['user_id' => $uid, 'updated_at' => 0], ['user_id']);
            $this->db->executeStatement('UPDATE *PREFIX*library_author_state SET updated_at=? WHERE user_id=?', [time(), $uid]);
            $author = $this->rows('SELECT revision,merged_into,photo_key FROM *PREFIX*library_authors WHERE user_id=? AND id=?' . ($this->db->getDatabaseProvider() === 'sqlite' ? '' : ' FOR UPDATE'), [$uid, $id])[0] ?? null;
            if ($author === null) throw new \OutOfBoundsException('author');
            if ((int)$author['revision'] !== $revision || $author['merged_into'] !== null) throw new ListConflictException('author_changed');
            if ($this->rows('SELECT id FROM *PREFIX*library_item_authors WHERE user_id=? AND author_id=? LIMIT 1', [$uid, $id])
                || $this->rows('SELECT id FROM *PREFIX*library_authors WHERE user_id=? AND merged_into=? LIMIT 1', [$uid, $id])) throw new ListConflictException('author_in_use');
            // Old operations predate explicit source/target ID columns. Read only
            // active undo records and fail closed on malformed journal payloads.
            $result = $this->db->executeQuery('SELECT payload FROM *PREFIX*library_author_operations WHERE user_id=? AND undone=0', [$uid]);
            try {
                while ($row = $result->fetch()) {
                    $payload = json_decode($row['payload'], true, 512, JSON_THROW_ON_ERROR);
                    if (!is_array($payload) || !isset($payload['before']['source']['id'], $payload['before']['target']['id'])) throw new ListConflictException('history_unreadable');
                    if ((int)$payload['before']['source']['id'] === $id || (int)$payload['before']['target']['id'] === $id) throw new ListConflictException('author_in_history');
                }
            } finally { $result->closeCursor(); }
            $deleted = $this->db->executeStatement('DELETE FROM *PREFIX*library_authors WHERE user_id=? AND id=? AND revision=? AND merged_into IS NULL', [$uid, $id, $revision]);
            if ($deleted !== 1) throw new ListConflictException('author_changed');
            $photoKey = $author['photo_key'];
            $this->db->commit();
        } catch (\Throwable $error) { $this->db->rollBack(); throw $error; }
        if ($photoKey !== null) $this->photos?->remove($uid, $photoKey);
    }
}
