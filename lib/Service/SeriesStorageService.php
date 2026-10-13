<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;
use Psr\Log\LoggerInterface;

/** Account-owned series identities projected from the existing book metadata. */
final class SeriesStorageService {
    public const SYNCED = 0;
    public const PENDING = 1;
    public const FAILED = 2;
    public function __construct(private IDBConnection $db, private LoggerInterface $logger) {}

    private function rows(string $sql, array $params = []): array {
        $result = $this->db->executeQuery($sql, $params);
        try { return $result->fetchAll(); } finally { $result->closeCursor(); }
    }
    private function key(string $name): string {
        if (!class_exists(\Normalizer::class)) throw new \RuntimeException('series_unicode_normalizer_unavailable');
        $name = \Normalizer::normalize($name, \Normalizer::FORM_C);
        if ($name === false) throw new \InvalidArgumentException('series_name');
        $name = trim(preg_replace('/[\p{Z}\s]+/u', ' ', $name));
        if ($name === '' || mb_strlen($name) > 255 || preg_match('/[\p{Cc}]/u', $name)) throw new \InvalidArgumentException('series_name');
        return hash('sha256', 'series-v1:' . mb_convert_case($name, MB_CASE_FOLD, 'UTF-8'));
    }
    private function resolve(string $uid, string $name): int {
        $key = $this->key($name);
        $matches = $this->rows('SELECT id FROM *PREFIX*library_series WHERE user_id=? AND comparison_key=? ORDER BY id LIMIT 2', [$uid, $key]);
        if (count($matches) > 1) throw new \RuntimeException('ambiguous_series_identity');
        if ($matches) return (int)$matches[0]['id'];
        $q = $this->db->getQueryBuilder();
        $q->insert('library_series')->values([
            'user_id' => $q->createNamedParameter($uid), 'display_name' => $q->createNamedParameter(trim($name)),
            'comparison_key' => $q->createNamedParameter($key), 'revision' => $q->createNamedParameter(1),
        ])->executeStatement();
        return (int)$this->db->lastInsertId('library_series');
    }
    /** One item per transaction; a stopped worker resumes from the indexed pending queue. */
    public function advance(?string $uid = null, int $limit = 200, float $seconds = 5): int {
        $limit = max(1, min(500, $limit));
        $deadline = microtime(true) + max(0.1, min(30, $seconds));
        $sql = 'SELECT id,user_id,series_name,series_number FROM *PREFIX*library_items WHERE series_sync_status=?';
        $params = [self::PENDING];
        if ($uid !== null) { $sql .= ' AND user_id=?'; $params[] = $uid; }
        $pending = $this->rows($sql . ' ORDER BY id LIMIT ' . $limit, $params);
        // Most libraries have no series on most books. Complete those rows in one
        // guarded write instead of opening a transaction and identity lock for each.
        $blankByUser = [];
        foreach ($pending as $item) if ($item['series_name'] === null || $item['series_name'] === '') $blankByUser[(string)$item['user_id']][] = (int)$item['id'];
        $fast = [];
        foreach ($blankByUser as $account => $ids) {
            $marks = implode(',', array_fill(0, count($ids), '?'));
            $linked = array_map('intval', array_column($this->rows('SELECT item_id FROM *PREFIX*library_item_series WHERE user_id=? AND slot=0 AND item_id IN (' . $marks . ')', [$account, ...$ids]), 'item_id'));
            $eligible = array_values(array_diff($ids, $linked));
            if (!$eligible) continue;
            $eligibleMarks = implode(',', array_fill(0, count($eligible), '?'));
            $this->db->executeStatement('UPDATE *PREFIX*library_items SET series_sync_status=? WHERE user_id=? AND series_sync_status=? AND id IN (' . $eligibleMarks . ') AND (series_name IS NULL OR series_name=?) AND NOT EXISTS (SELECT 1 FROM *PREFIX*library_item_series l WHERE l.user_id=*PREFIX*library_items.user_id AND l.item_id=*PREFIX*library_items.id AND l.slot=0)',
                [self::SYNCED, $account, self::PENDING, ...$eligible, '']);
            foreach ($eligible as $id) $fast[$id] = true;
        }
        $processed = 0;
        foreach ($pending as $item) {
            if (isset($fast[(int)$item['id']])) { $processed++; continue; }
            if (microtime(true) >= $deadline) break;
            try { $this->synchronize((string)$item['user_id'], (int)$item['id']); }
            catch (\Throwable $error) {
                // Do not overwrite a concurrent correction made after the failed attempt.
                $this->db->executeStatement('UPDATE *PREFIX*library_items SET series_sync_status=? WHERE user_id=? AND id=? AND series_sync_status=? AND ' .
                    ($item['series_name'] === null ? 'series_name IS NULL' : 'series_name=?') . ' AND ' .
                    ($item['series_number'] === null ? 'series_number IS NULL' : 'series_number=?'),
                    [self::FAILED, $item['user_id'], (int)$item['id'], self::PENDING,
                        ...($item['series_name'] === null ? [] : [$item['series_name']]), ...($item['series_number'] === null ? [] : [$item['series_number']])]);
                $this->logger->error('Library series migration failed for item {itemId}', ['itemId' => (int)$item['id'], 'exception' => $error]);
            }
            $processed++;
        }
        return $processed;
    }
    public function synchronize(string $uid, int $itemId): void {
        $this->db->beginTransaction();
        try {
            $sqlite = $this->db->getDatabaseProvider() === 'sqlite';
            if ($sqlite) $this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id=? AND id=?', [$uid, $itemId]);
            $item = $this->rows('SELECT series_name,series_number,series_sync_status FROM *PREFIX*library_items WHERE user_id=? AND id=?' . ($sqlite ? '' : ' FOR UPDATE'), [$uid, $itemId])[0] ?? null;
            if ($item === null || (int)$item['series_sync_status'] !== self::PENDING) { $this->db->commit(); return; }
            $this->db->insertIfNotExist('*PREFIX*library_series_state', ['user_id' => $uid, 'updated_at' => 0], ['user_id']);
            $this->db->executeStatement('UPDATE *PREFIX*library_series_state SET updated_at=? WHERE user_id=?', [time(), $uid]);
            $old = $this->rows('SELECT * FROM *PREFIX*library_item_series WHERE user_id=? AND item_id=? AND slot=0', [$uid, $itemId])[0] ?? null;
            $name = trim((string)$item['series_name']); $number = trim((string)$item['series_number']);
            if ($old !== null && $name !== '' && $this->key($old['source_name']) === $this->key($name) && (string)$old['source_number'] === $number) {
                $this->db->executeStatement('UPDATE *PREFIX*library_items SET series_sync_status=? WHERE user_id=? AND id=?', [self::SYNCED, $uid, $itemId]);
                $this->db->commit();
                return;
            }
            if ($name === '') {
                $this->db->executeStatement('DELETE FROM *PREFIX*library_item_series WHERE user_id=? AND item_id=? AND slot=0', [$uid, $itemId]);
            } else {
                $seriesId = $old !== null && $this->key($old['source_name']) === $this->key($name)
                    ? (int)$old['series_id'] : $this->resolve($uid, $name);
                $this->db->executeStatement('DELETE FROM *PREFIX*library_item_series WHERE user_id=? AND item_id=? AND slot=0', [$uid, $itemId]);
                $q = $this->db->getQueryBuilder();
                $q->insert('library_item_series')->values([
                    'user_id' => $q->createNamedParameter($uid), 'item_id' => $q->createNamedParameter($itemId),
                    'slot' => $q->createNamedParameter(0), 'series_id' => $q->createNamedParameter($seriesId),
                    'part_number' => $q->createNamedParameter($number === '' ? null : $number),
                    'source_name' => $q->createNamedParameter($name), 'source_number' => $q->createNamedParameter($number === '' ? null : $number),
                    'revision' => $q->createNamedParameter($old === null ? 1 : (int)$old['revision'] + 1),
                ])->executeStatement();
            }
            $this->db->executeStatement('UPDATE *PREFIX*library_items SET series_sync_status=? WHERE user_id=? AND id=?', [self::SYNCED, $uid, $itemId]);
            $this->db->commit();
        } catch (\Throwable $error) { $this->db->rollBack(); throw $error; }
    }
    public function status(string $uid): array {
        $counts = ['synced' => 0, 'pending' => 0, 'failed' => 0];
        foreach ($this->rows('SELECT series_sync_status,COUNT(*) AS n FROM *PREFIX*library_items WHERE user_id=? GROUP BY series_sync_status', [$uid]) as $row) {
            $counts[[self::SYNCED => 'synced', self::PENDING => 'pending', self::FAILED => 'failed'][(int)$row['series_sync_status']]] = (int)$row['n'];
        }
        return $counts;
    }
    public function retryFailed(string $uid): int {
        return $this->db->executeStatement('UPDATE *PREFIX*library_items SET series_sync_status=? WHERE user_id=? AND series_sync_status=?', [self::PENDING, $uid, self::FAILED]);
    }
}
