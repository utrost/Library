<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;

/** Reversible, account-owned vocabulary mappings; publication source values stay untouched. */
final class MetadataValueMappingService {
    public function __construct(private IDBConnection $db) {}

    private function field(string $field): string {
        if (!in_array($field, ['publisher', 'subject'], true)) throw new \InvalidArgumentException('field');
        return $field;
    }
    private function value(string $value): string {
        if (!mb_check_encoding($value, 'UTF-8')) throw new \InvalidArgumentException('value');
        $value = trim($value);
        if ($value === '' || mb_strlen($value) > 255 || preg_match('/[\p{Cc}]/u', $value)) throw new \InvalidArgumentException('value');
        return $value;
    }
    private function key(string $field, string $source): string {
        return hash('sha256', 'metadata-value-v1:' . $field . ':' . $source);
    }
    private function rows(string $sql, array $parameters = []): array {
        $result = $this->db->executeQuery($sql, $parameters);
        try { return $result->fetchAll(); } finally { $result->closeCursor(); }
    }
    public function mappings(string $uid, string $field): array {
        $field = $this->field($field);
        return $this->rows('SELECT source_key,source_value,target_value FROM *PREFIX*library_value_mappings WHERE user_id=? AND field_type=? ORDER BY source_value LIMIT 201', [$uid, $field]);
    }
    /** Actual books that would be grouped; no write is performed. */
    public function preview(string $uid, string $field, string $source, string $target): array {
        $field = $this->field($field);
        $source = $this->value($source);
        $target = $this->value($target);
        if ($source === $target) throw new \InvalidArgumentException('same_value');
        if ($field === 'publisher') {
            $count = $this->rows('SELECT COUNT(*) AS n FROM *PREFIX*library_items WHERE user_id=? AND publisher=?', [$uid, $source]);
            $books = $this->rows('SELECT id,title FROM *PREFIX*library_items WHERE user_id=? AND publisher=? ORDER BY id LIMIT 10', [$uid, $source]);
        } else {
            $count = $this->rows('SELECT COUNT(DISTINCT item_id) AS n FROM *PREFIX*library_item_facets WHERE user_id=? AND facet_type=? AND facet_value=?', [$uid, 'subject', $source]);
            $books = $this->rows('SELECT i.id,i.title FROM *PREFIX*library_item_facets f INNER JOIN *PREFIX*library_items i ON i.id=f.item_id AND i.user_id=f.user_id WHERE f.user_id=? AND f.facet_type=? AND f.facet_value=? GROUP BY i.id,i.title ORDER BY i.id LIMIT 10', [$uid, 'subject', $source]);
        }
        return ['field'=>$field, 'source'=>$source, 'target'=>$target, 'count'=>(int)($count[0]['n'] ?? 0), 'books'=>$books];
    }
    public function save(string $uid, string $field, string $source, string $target): void {
        $preview = $this->preview($uid, $field, $source, $target);
        if ($preview['count'] === 0) throw new \OutOfBoundsException('source');
        $field = $preview['field']; $source = $preview['source']; $target = $preview['target'];
        // Chains make deletion ambiguous. Require a single hop to the preferred label.
        if ($this->rows('SELECT source_key FROM *PREFIX*library_value_mappings WHERE user_id=? AND field_type=? AND source_value=? AND source_key<>? LIMIT 1',
            [$uid, $field, $target, $this->key($field, $source)]) !== []) throw new \InvalidArgumentException('target_is_source');
        if ($this->rows('SELECT source_key FROM *PREFIX*library_value_mappings WHERE user_id=? AND field_type=? AND target_value=? AND source_key<>? LIMIT 1',
            [$uid, $field, $source, $this->key($field, $source)]) !== []) throw new \InvalidArgumentException('source_is_target');
        $key = $this->key($field, $source);
        $this->db->insertIfNotExist('*PREFIX*library_value_mappings',
            ['user_id'=>$uid, 'field_type'=>$field, 'source_key'=>$key, 'source_value'=>$source, 'target_value'=>$target, 'created_at'=>time()],
            ['user_id','field_type','source_key']);
        $this->db->executeStatement('UPDATE *PREFIX*library_value_mappings SET target_value=? WHERE user_id=? AND field_type=? AND source_key=?',
            [$target, $uid, $field, $key]);
    }
    public function remove(string $uid, string $field, string $key): bool {
        $field = $this->field($field);
        if (preg_match('/^[a-f0-9]{64}$/D', $key) !== 1) throw new \InvalidArgumentException('key');
        return $this->db->executeStatement('DELETE FROM *PREFIX*library_value_mappings WHERE user_id=? AND field_type=? AND source_key=?',
            [$uid, $field, $key]) > 0;
    }
    /** Exact source variants for one selected preferred label. */
    public function sourcesForTarget(string $uid, string $field, string $target): array {
        $field = $this->field($field);
        $rows = $this->rows('SELECT source_value FROM *PREFIX*library_value_mappings WHERE user_id=? AND field_type=? AND target_value=? ORDER BY source_value LIMIT 500',
            [$uid, $field, $target]);
        return array_values(array_unique([$target, ...array_column($rows, 'source_value')]));
    }
    /** A book's raw-value link follows its chosen preferred label too. */
    public function sourcesForSelection(string $uid, string $field, string $selected): array {
        $field = $this->field($field);
        $rows = $this->rows('SELECT target_value FROM *PREFIX*library_value_mappings WHERE user_id=? AND field_type=? AND source_key=? LIMIT 1',
            [$uid, $field, $this->key($field, $selected)]);
        return $this->sourcesForTarget($uid, $field, (string)($rows[0]['target_value'] ?? $selected));
    }
    /** Collapse visible suggestions and expose canonical labels typed by the user. */
    public function suggestions(string $uid, string $field, array $values, string $query, int $limit = 20): array {
        $field = $this->field($field);
        $keys = [];
        foreach ($values as $value) $keys[$this->key($field, $value)] = $value;
        $targets = [];
        if ($keys !== []) {
            $marks = implode(',', array_fill(0, count($keys), '?'));
            foreach ($this->rows('SELECT source_key,target_value FROM *PREFIX*library_value_mappings WHERE user_id=? AND field_type=? AND source_key IN (' . $marks . ')',
                [$uid, $field, ...array_keys($keys)]) as $row) $targets[(string)$row['source_key']] = (string)$row['target_value'];
        }
        $mapped = [];
        foreach ($values as $value) {
            $key = $this->key($field, $value);
            $label = $targets[$key] ?? $value;
            $mapped[mb_strtolower($label)] = $label;
        }
        $query = trim($query);
        if ($query !== '') {
            $escaped = str_replace(['!', '%', '_'], ['!!', '!%', '!_'], mb_strtolower($query));
            foreach ($this->rows("SELECT DISTINCT target_value FROM *PREFIX*library_value_mappings WHERE user_id=? AND field_type=? AND LOWER(target_value) LIKE ? ESCAPE '!' ORDER BY target_value LIMIT 20",
                [$uid, $field, $escaped . '%']) as $row) $mapped[mb_strtolower((string)$row['target_value'])] = (string)$row['target_value'];
        }
        $suggestions = array_values($mapped);
        sort($suggestions, SORT_NATURAL | SORT_FLAG_CASE);
        return array_slice($suggestions, 0, max(1, min(25, $limit)));
    }
    public function popularValues(string $uid, string $field, string $query = ''): array {
        $field = $this->field($field);
        $query = trim($query);
        if (mb_strlen($query) > 255) throw new \InvalidArgumentException('query');
        $sql = 'SELECT facet_value,COUNT(DISTINCT item_id) AS book_count FROM *PREFIX*library_item_facets WHERE user_id=? AND facet_type=?';
        $params = [$uid, $field];
        if ($query !== '') {
            $escaped = str_replace(['!', '%', '_'], ['!!', '!%', '!_'], mb_strtolower($query));
            $sql .= " AND normalized_value LIKE ? ESCAPE '!'";
            $params[] = $escaped . '%';
        }
        return $this->rows($sql . ' GROUP BY facet_value ORDER BY COUNT(DISTINCT item_id) DESC,facet_value LIMIT 30', $params);
    }
}
