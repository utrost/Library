<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;
use Psr\Log\LoggerInterface;

/** Private curated genres; scans only propose evidence, never create identities. */
final class GenreService {
    private const HINTS = [
        'Science fiction' => '/\b(?:science[\s_-]*fiction|sci[\s_-]*fi)\b/iu',
        'Fantasy' => '/\bfantasy\b/iu',
        'Mystery' => '/\bmyster(?:y|ies)\b/iu',
        'Romance' => '/\bromance\b/iu',
        'Horror' => '/\bhorror\b/iu',
        'Thriller' => '/\bthrillers?\b/iu',
        'Biography' => '/\bbiograph(?:y|ies|ical)\b/iu',
        'History' => '/\bhistory\b/iu',
        'Mathematics' => '/\bmathematics?\b/iu',
        'Comics' => '/\bcomics?\b/iu',
        'Non-fiction' => '/\bnon[\s_-]*fiction\b/iu',
        'Fiction' => '/\bfiction\b/iu',
    ];
    public function __construct(private IDBConnection $db, private LoggerInterface $logger) {}

    private function rows(string $sql, array $params = []): array {
        $result = $this->db->executeQuery($sql, $params);
        try { return $result->fetchAll(); } finally { $result->closeCursor(); }
    }
    private function name(string $name): string {
        if (!mb_check_encoding($name, 'UTF-8') || !class_exists(\Normalizer::class)) throw new \InvalidArgumentException('genre_name');
        $name = \Normalizer::normalize($name, \Normalizer::FORM_C);
        if ($name === false) throw new \InvalidArgumentException('genre_name');
        $name = trim(preg_replace('/[\p{Z}\s]+/u', ' ', $name));
        if ($name === '' || mb_strlen($name) > 255 || preg_match('/[\p{Cc}]/u', $name)) throw new \InvalidArgumentException('genre_name');
        return $name;
    }
    private function key(string $name): string { return hash('sha256', 'genre-v1:' . mb_convert_case($this->name($name), MB_CASE_FOLD, 'UTF-8')); }
    private function genre(string $uid, int $genreId): array {
        $genre = $this->rows('SELECT id,display_name FROM *PREFIX*library_genres WHERE user_id=? AND id=?', [$uid, $genreId])[0] ?? null;
        if ($genre === null) throw new \OutOfBoundsException('genre');
        return $genre;
    }
    public function directory(string $uid, string $search = '', int $page = 1, string $sort = 'name', bool $previews = false): array {
        if (mb_strlen($search) > 255 || $page < 1 || $page > 100000) throw new \InvalidArgumentException('search_or_page');
        $order = match ($sort) { 'name' => 'g.display_name,g.id', 'name_desc' => 'g.display_name DESC,g.id DESC', default => throw new \InvalidArgumentException('sort') };
        $sql = 'SELECT g.id,g.display_name,(SELECT COUNT(*) FROM *PREFIX*library_item_genres l WHERE l.user_id=g.user_id AND l.genre_id=g.id AND l.active=1) AS book_count FROM *PREFIX*library_genres g WHERE g.user_id=?';
        $params = [$uid];
        if (trim($search) !== '') {
            $sql .= " AND LOWER(g.display_name) LIKE ? ESCAPE '!'";
            $params[] = str_replace(['!', '%', '_'], ['!!', '!%', '!_'], mb_strtolower(trim($search))) . '%';
        }
        $list = $this->rows($sql . ' ORDER BY ' . $order . ' LIMIT 51 OFFSET ' . (($page - 1) * 50), $params);
        $entries = array_slice($list, 0, 50);
        if ($previews) {
            $books = (new DirectoryPreviewService($this->db))->books($uid, array_column($entries, 'id'), 'genre');
            foreach ($entries as &$entry) $entry['books'] = $books[(int)$entry['id']] ?? [];
            unset($entry);
        }
        return ['genres' => $entries, 'page' => $page, 'hasNext' => count($list) > 50];
    }
    public function create(string $uid, string $name): array {
        $name = $this->name($name); $key = $this->key($name);
        $this->db->insertIfNotExist('*PREFIX*library_genres', ['user_id' => $uid, 'display_name' => $name, 'comparison_key' => $key], ['user_id', 'comparison_key']);
        return $this->rows('SELECT id,display_name FROM *PREFIX*library_genres WHERE user_id=? AND comparison_key=?', [$uid, $key])[0];
    }
    public function assign(string $uid, int $itemId, int $genreId, bool $active): array {
        if ($itemId < 1) throw new \InvalidArgumentException('item');
        $genre = $this->genre($uid, $genreId);
        if (!$this->rows('SELECT id FROM *PREFIX*library_items WHERE user_id=? AND id=?', [$uid, $itemId])) throw new \OutOfBoundsException('book');
        $this->db->insertIfNotExist('*PREFIX*library_item_genres', ['user_id' => $uid, 'item_id' => $itemId,
            'genre_id' => $genreId, 'active' => (int)$active, 'assignment_source' => 'manual'], ['user_id', 'item_id', 'genre_id']);
        $this->db->executeStatement('UPDATE *PREFIX*library_item_genres SET active=?,assignment_source=? WHERE user_id=? AND item_id=? AND genre_id=?',
            [(int)$active, 'manual', $uid, $itemId, $genreId]);
        return ['genre' => $genre, 'active' => $active];
    }
    public function suggestions(string $uid): array {
        $rows = $this->rows('SELECT c.candidate_key,MIN(c.display_name) AS display_name,MIN(c.source_kind) AS source_kind,COUNT(*) AS book_count FROM *PREFIX*library_genre_candidates c LEFT JOIN *PREFIX*library_genre_mappings m ON m.user_id=c.user_id AND m.candidate_key=c.candidate_key WHERE c.user_id=? AND m.candidate_key IS NULL GROUP BY c.candidate_key ORDER BY COUNT(*) DESC,c.candidate_key LIMIT 51', [$uid]);
        return ['suggestions' => array_slice($rows, 0, 50), 'hasNext' => count($rows) > 50,
            'remaining' => (int)($this->rows('SELECT COUNT(*) AS n FROM *PREFIX*library_items WHERE user_id=? AND genre_suggestion_hash IS NULL', [$uid])[0]['n'] ?? 0)];
    }
    public function decide(string $uid, string $key, ?int $genreId): array {
        if (preg_match('/^[a-f0-9]{64}$/D', $key) !== 1) throw new \InvalidArgumentException('candidate');
        $example = $this->rows('SELECT display_name FROM *PREFIX*library_genre_candidates WHERE user_id=? AND candidate_key=? LIMIT 1', [$uid, $key])[0] ?? null;
        if ($example === null) throw new \OutOfBoundsException('candidate');
        if ($genreId !== null) $this->genre($uid, $genreId);
        $this->db->insertIfNotExist('*PREFIX*library_genre_mappings', ['user_id' => $uid, 'candidate_key' => $key, 'genre_id' => $genreId], ['user_id', 'candidate_key']);
        $this->db->executeStatement('UPDATE *PREFIX*library_genre_mappings SET genre_id=? WHERE user_id=? AND candidate_key=?', [$genreId, $uid, $key]);
        $applied = $genreId === null ? 0 : $this->applyMapped($uid, 200);
        return ['name' => $example['display_name'], 'applied' => $applied, 'queued' => $genreId !== null];
    }
    /** A missing or inactive link is an explicit user decision and is never reactivated by a scan. */
    private function linkMapped(string $uid, int $itemId, int $genreId): bool {
        $existing = $this->rows('SELECT active FROM *PREFIX*library_item_genres WHERE user_id=? AND item_id=? AND genre_id=?', [$uid, $itemId, $genreId]);
        if ($existing !== []) return false;
        $this->db->insertIfNotExist('*PREFIX*library_item_genres', ['user_id' => $uid, 'item_id' => $itemId,
            'genre_id' => $genreId, 'active' => 1, 'assignment_source' => 'approved'], ['user_id', 'item_id', 'genre_id']);
        return true;
    }
    public function applyMapped(?string $uid = null, int $limit = 200): int {
        $limit = max(1, min(500, $limit));
        $sql = 'SELECT c.user_id,c.item_id,m.genre_id FROM *PREFIX*library_genre_candidates c INNER JOIN *PREFIX*library_genre_mappings m ON m.user_id=c.user_id AND m.candidate_key=c.candidate_key WHERE m.genre_id IS NOT NULL AND NOT EXISTS (SELECT 1 FROM *PREFIX*library_item_genres l WHERE l.user_id=c.user_id AND l.item_id=c.item_id AND l.genre_id=m.genre_id)';
        $params = [];
        if ($uid !== null) { $sql .= ' AND c.user_id=?'; $params[] = $uid; }
        $count = 0;
        foreach ($this->rows($sql . ' ORDER BY c.item_id LIMIT ' . $limit, $params) as $row) {
            if ($this->linkMapped((string)$row['user_id'], (int)$row['item_id'], (int)$row['genre_id'])) $count++;
        }
        return $count;
    }
    private function candidates(string $genre, array $subjects, string $path): array {
        $candidates = [];
        $add = function (string $name, string $source) use (&$candidates): void {
            try { $name = $this->name($name); } catch (\InvalidArgumentException) { return; }
            $key = $this->key($name);
            if (!isset($candidates[$key]) && count($candidates) < 8) $candidates[$key] = ['name' => $name, 'source' => $source];
        };
        if (trim($genre) !== '') $add($genre, 'metadata');
        foreach (array_slice($subjects, 0, 30) as $subject) {
            if (!is_string($subject)) continue;
            foreach (self::HINTS as $label => $pattern) {
                if ($label === 'Fiction' && preg_match('/\b(?:non[\s_-]*fiction|science[\s_-]*fiction)\b/iu', $subject)) continue;
                if (preg_match($pattern, $subject)) $add($label, 'subject');
            }
        }
        $segments = explode('/', str_replace('\\', '/', dirname($path)));
        foreach (array_slice($segments, -8) as $segment) {
            if (mb_strlen($segment) > 80) continue;
            $folder = mb_strtolower(trim(preg_replace('/[_-]+/u', ' ', $segment)));
            $folder = preg_replace('/^(?:english|german|french|spanish|deutsch|eng|de|en|fr|es)\s+/u', '', $folder);
            $folder = preg_replace('/\s+(?:books|ebooks|bücher)$/u', '', $folder);
            foreach (array_keys(self::HINTS) as $label) {
                if ($folder === mb_strtolower($label)) $add($label, 'folder');
            }
        }
        return $candidates;
    }
    /** Called only when scanner source changes, and by bounded discovery for pre-existing books. */
    public function record(string $uid, int $itemId, string $genre, array $subjects, string $path): void {
        $candidates = $this->candidates($genre, $subjects, $path);
        $hash = hash('sha256', json_encode($candidates, JSON_THROW_ON_ERROR));
        $current = $this->rows('SELECT genre_suggestion_hash FROM *PREFIX*library_items WHERE user_id=? AND id=?', [$uid, $itemId])[0] ?? null;
        if ($current === null || $current['genre_suggestion_hash'] === $hash) return;
        $this->db->executeStatement('DELETE FROM *PREFIX*library_genre_candidates WHERE user_id=? AND item_id=?', [$uid, $itemId]);
        foreach ($candidates as $key => $candidate) {
            $this->db->insertIfNotExist('*PREFIX*library_genre_candidates', ['user_id' => $uid, 'item_id' => $itemId,
                'candidate_key' => $key, 'display_name' => $candidate['name'], 'source_kind' => $candidate['source']], ['user_id', 'item_id', 'candidate_key']);
        }
        if ($candidates !== []) {
            $marks = implode(',', array_fill(0, count($candidates), '?'));
            foreach ($this->rows('SELECT candidate_key,genre_id FROM *PREFIX*library_genre_mappings WHERE user_id=? AND candidate_key IN (' . $marks . ') AND genre_id IS NOT NULL', [$uid, ...array_keys($candidates)]) as $mapped) {
                $this->linkMapped($uid, $itemId, (int)$mapped['genre_id']);
            }
        }
        $this->db->executeStatement('UPDATE *PREFIX*library_items SET genre_suggestion_hash=? WHERE user_id=? AND id=?', [$hash, $uid, $itemId]);
    }
    public function discover(?string $uid = null, int $limit = 200): int {
        $limit = max(1, min(500, $limit));
        $sql = 'SELECT i.id,i.user_id,i.genre,i.subjects_json,f.cached_path FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id WHERE i.genre_suggestion_hash IS NULL';
        $params = [];
        if ($uid !== null) { $sql .= ' AND i.user_id=?'; $params[] = $uid; }
        $count = 0;
        foreach ($this->rows($sql . ' ORDER BY i.id LIMIT ' . $limit, $params) as $row) {
            try {
                $subjects = json_decode((string)($row['subjects_json'] ?? '[]'), true);
                $this->record((string)$row['user_id'], (int)$row['id'], (string)($row['genre'] ?? ''), is_array($subjects) ? $subjects : [], (string)$row['cached_path']);
                $count++;
            } catch (\Throwable $error) {
                $this->logger->error('Library genre discovery failed for item {itemId}', ['itemId' => (int)$row['id'], 'exception' => $error]);
                // Keep one malformed item from blocking the entire ordered backfill.
                $this->db->executeStatement('UPDATE *PREFIX*library_items SET genre_suggestion_hash=? WHERE user_id=? AND id=? AND genre_suggestion_hash IS NULL',
                    [hash('sha256', 'genre-discovery-error-v1:' . $row['id']), (string)$row['user_id'], (int)$row['id']]);
                $count++;
            }
        }
        return $count;
    }
}
