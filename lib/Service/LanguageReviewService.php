<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;
use Psr\Log\LoggerInterface;

/** Per-account review of source language values that cannot be normalized safely. */
final class LanguageReviewService {
    public function __construct(private IDBConnection $db, private LoggerInterface $logger) {}

    private function rows(string $sql, array $params = []): array {
        $result = $this->db->executeQuery($sql, $params);
        try { return $result->fetchAll(); } finally { $result->closeCursor(); }
    }
    private function key(string $raw): string { return hash('sha256', 'language-v1:' . mb_strtolower(trim($raw), 'UTF-8')); }

    public function record(string $uid, int $itemId, string $raw): void {
        if (!mb_check_encoding($raw, 'UTF-8')) $raw = '';
        $raw = trim($raw);
        $hash = hash('sha256', 'language-review-v1:' . $raw);
        $current = $this->rows('SELECT language_review_hash FROM *PREFIX*library_items WHERE user_id=? AND id=?', [$uid, $itemId])[0] ?? null;
        if ($current === null || $current['language_review_hash'] === $hash) return;
        $normalized = LanguageNormalizer::normalize($raw);
        if ($normalized === null && $raw !== '') {
            $raw = mb_substr($raw, 0, 255, 'UTF-8');
            $key = $this->key($raw);
            $this->db->executeStatement('DELETE FROM *PREFIX*library_language_candidates WHERE user_id=? AND item_id=? AND source_key<>?', [$uid, $itemId, $key]);
            $this->db->insertIfNotExist('*PREFIX*library_language_candidates',
                ['user_id'=>$uid, 'item_id'=>$itemId, 'source_key'=>$key, 'source_value'=>$raw, 'applied_code'=>null],
                ['user_id', 'item_id']);
        } else {
            $this->db->executeStatement('DELETE FROM *PREFIX*library_language_candidates WHERE user_id=? AND item_id=?', [$uid, $itemId]);
        }
        $this->db->executeStatement('UPDATE *PREFIX*library_items SET language_review_hash=? WHERE user_id=? AND id=?', [$hash, $uid, $itemId]);
    }

    public function suggestions(string $uid): array {
        $rows = $this->rows('SELECT c.source_key,MIN(c.source_value) AS source_value,COUNT(*) AS book_count FROM *PREFIX*library_language_candidates c LEFT JOIN *PREFIX*library_language_mappings m ON m.user_id=c.user_id AND m.source_key=c.source_key WHERE c.user_id=? AND m.source_key IS NULL GROUP BY c.source_key ORDER BY COUNT(*) DESC,c.source_key LIMIT 51', [$uid]);
        return ['suggestions'=>array_slice($rows, 0, 50), 'hasNext'=>count($rows)>50,
            'remaining'=>(int)($this->rows('SELECT COUNT(*) AS n FROM *PREFIX*library_items WHERE user_id=? AND language_review_hash IS NULL', [$uid])[0]['n'] ?? 0)];
    }

    public function decide(string $uid, string $key, ?string $codes): void {
        if (preg_match('/^[a-f0-9]{64}$/D', $key) !== 1) throw new \InvalidArgumentException('source_key');
        if ($this->rows('SELECT item_id FROM *PREFIX*library_language_candidates WHERE user_id=? AND source_key=? LIMIT 1', [$uid, $key]) === []) throw new \OutOfBoundsException('source');
        if ($codes !== null) $codes = LanguageNormalizer::reviewedCodes($codes);
        $this->db->insertIfNotExist('*PREFIX*library_language_mappings', ['user_id'=>$uid, 'source_key'=>$key, 'language_codes'=>$codes], ['user_id','source_key']);
        $this->db->executeStatement('UPDATE *PREFIX*library_language_mappings SET language_codes=? WHERE user_id=? AND source_key=?', [$codes, $uid, $key]);
    }

    public function discover(ItemService $items, ?string $uid = null, int $limit = 200): int {
        $sql = 'SELECT id,user_id,language,field_values FROM *PREFIX*library_items WHERE language_review_hash IS NULL';
        $params = [];
        if ($uid !== null) { $sql .= ' AND user_id=?'; $params[] = $uid; }
        $count = 0;
        foreach ($this->rows($sql . ' ORDER BY id LIMIT ' . max(1, min(500, $limit)), $params) as $row) {
            try {
                $values = json_decode((string)($row['field_values'] ?? '{}'), true);
                $source = is_array($values) ? ($values['languageOriginal'] ?? $values['language'] ?? null) : null;
                $raw = is_string($source) ? $source : (string)($row['language'] ?? '');
                $this->record((string)$row['user_id'], (int)$row['id'], $raw);
                $normalized = LanguageNormalizer::normalize($raw);
                if ($normalized !== null && $normalized !== (string)($row['language'] ?? ''))
                    $items->normalizeImportedLanguage((string)$row['user_id'], (int)$row['id'], hash('sha256', 'language-review-v1:' . trim($raw)), $normalized);
                $count++;
            } catch (\Throwable $error) {
                $this->logger->error('Library language discovery failed for item {itemId}', ['itemId'=>(int)$row['id'], 'exception'=>$error]);
                $this->db->executeStatement('UPDATE *PREFIX*library_items SET language_review_hash=? WHERE user_id=? AND id=? AND language_review_hash IS NULL',
                    [hash('sha256', 'language-review-error-v1:' . $row['id']), (string)$row['user_id'], (int)$row['id']]);
                $count++;
            }
        }
        return $count;
    }

    /** A bounded slice. Explicitly corrected books are recorded as skipped. */
    public function applyMapped(ItemService $items, ?string $uid = null, int $limit = 100): int {
        $sql = 'SELECT c.user_id,c.item_id,c.source_key,m.language_codes FROM *PREFIX*library_language_candidates c INNER JOIN *PREFIX*library_language_mappings m ON m.user_id=c.user_id AND m.source_key=c.source_key WHERE c.applied_code IS NULL AND m.language_codes IS NOT NULL';
        $params = [];
        if ($uid !== null) { $sql .= ' AND c.user_id=?'; $params[] = $uid; }
        $count = 0;
        foreach ($this->rows($sql . ' ORDER BY c.item_id LIMIT ' . max(1, min(200, $limit)), $params) as $row) {
            try {
                $state = $items->applyReviewedLanguage((string)$row['user_id'], (int)$row['item_id'], (string)$row['language_codes']);
                $this->db->executeStatement('UPDATE *PREFIX*library_language_candidates SET applied_code=? WHERE user_id=? AND item_id=? AND source_key=? AND applied_code IS NULL',
                    [$state === 'applied' ? $row['language_codes'] : 'manual', (string)$row['user_id'], (int)$row['item_id'], (string)$row['source_key']]);
                $count++;
            } catch (\Throwable $error) {
                $this->logger->error('Library language mapping failed for item {itemId}', ['itemId'=>(int)$row['item_id'], 'exception'=>$error]);
            }
        }
        return $count;
    }
}
