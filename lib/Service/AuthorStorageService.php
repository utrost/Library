<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;
use Psr\Log\LoggerInterface;

/** Shadow author relationships during the 0.3 transition; legacy metadata stays authoritative. */
final class AuthorStorageService {
    public const SYNCED = 0;
    public const PENDING = 1;
    public const CONFLICT = 2;
    public const FAILED = 3;

    public function __construct(private IDBConnection $db, private LoggerInterface $logger) {}

    private function rows(string $sql, array $params = []): array {
        $result = $this->db->executeQuery($sql, $params);
        try { return $result->fetchAll(); } finally { $result->closeCursor(); }
    }

    /** Each item commits independently. A crash resumes from indexed pending rows. */
    public function advance(?string $uid = null, int $limit = 200, float $seconds = 5): int {
        $limit = max(1, min(500, $limit));
        $deadline = microtime(true) + max(0.1, min(30, $seconds));
        $sql = 'SELECT id,user_id,authors_json,creators FROM *PREFIX*library_items WHERE author_sync_status = ?';
        $params = [self::PENDING];
        if ($uid !== null) { $sql .= ' AND user_id = ?'; $params[] = $uid; }
        $rows = $this->rows($sql . ' ORDER BY id LIMIT ' . $limit, $params);
        $processed = 0;
        foreach ($rows as $row) {
            if (microtime(true) >= $deadline) break;
            try {
                $this->synchronize((string)$row['user_id'], (int)$row['id']);
            } catch (\Throwable $error) {
                // A bad record must not block every subsequent book. Retry is explicit via occ.
                $qb = $this->db->getQueryBuilder();
                $qb->update('library_items')->set('author_sync_status', $qb->createNamedParameter(self::FAILED))
                    ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($row['user_id'])))
                    ->andWhere($qb->expr()->eq('id', $qb->createNamedParameter((int)$row['id'])))
                    ->andWhere($qb->expr()->eq('author_sync_status', $qb->createNamedParameter(self::PENDING)));
                // A concurrent correction after rollback must keep its own pending work.
                foreach (['authors_json', 'creators'] as $column) {
                    $qb->andWhere($row[$column] === null ? $qb->expr()->isNull($column) : $qb->expr()->eq($column, $qb->createNamedParameter($row[$column])));
                }
                $qb->executeStatement();
                $this->logger->error('Library author migration failed for item {itemId}', ['itemId' => (int)$row['id'], 'exception' => $error]);
            }
            $processed++;
        }
        return $processed;
    }

    /** Item lock first, then per-user identity lock, for all relationship writers. */
    public function synchronize(string $uid, int $itemId): void {
        $this->db->beginTransaction();
        try {
            $sqlite = $this->db->getDatabaseProvider() === 'sqlite';
            if ($sqlite) $this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id = ? AND id = ?', [$uid, $itemId]);
            $item = $this->rows('SELECT authors_json,creators,author_sync_status FROM *PREFIX*library_items WHERE user_id = ? AND id = ?' . ($sqlite ? '' : ' FOR UPDATE'), [$uid, $itemId])[0] ?? null;
            if ($item === null || (int)$item['author_sync_status'] !== self::PENDING) { $this->db->commit(); return; }
            // Legacy parsing must not turn corrupt data into a successful empty author migration.
            $names = $item['authors_json'] !== null
                ? AuthorNames::normalize(json_decode($item['authors_json'], true, 64, JSON_THROW_ON_ERROR))
                : AuthorNames::fromText($item['creators']);
            $this->db->insertIfNotExist('*PREFIX*library_author_state', ['user_id' => $uid, 'updated_at' => 0], ['user_id']);
            // Serialize exact-name reuse across workers without a unique constraint on names.
            $this->db->executeStatement('UPDATE *PREFIX*library_author_state SET updated_at = ? WHERE user_id = ?', [time(), $uid]);
            $links = $this->rows('SELECT l.*,a.field_sources AS author_sources FROM *PREFIX*library_item_authors l INNER JOIN *PREFIX*library_authors a ON a.id=l.author_id AND a.user_id=l.user_id WHERE l.user_id = ? AND l.item_id = ? ORDER BY l.position', [$uid, $itemId]);
            $oldNames = array_column($links, 'source_name');
            if ($oldNames === $names) {
                $this->setStatus($uid, $itemId, self::SYNCED);
                $this->db->commit();
                return;
            }
            foreach ($links as $link) {
                if ($link['assignment_source'] !== 'import' || in_array('manual', json_decode($link['author_sources'] ?: '{}', true) ?: [], true)) {
                    // Future manual merges/reassignments must survive changed source metadata.
                    $this->setStatus($uid, $itemId, self::CONFLICT);
                    $this->db->commit();
                    return;
                }
            }
            $byCredit = [];
            foreach ($links as $link) $byCredit[$link['source_name']] = $link;
            // Remove the old ordering atomically, then retain identities for unchanged credits.
            $this->db->executeStatement('DELETE FROM *PREFIX*library_item_authors WHERE user_id = ? AND item_id = ?', [$uid, $itemId]);
            foreach ($names as $position => $credit) {
                $old = $byCredit[$credit] ?? null;
                $authorId = $old === null ? $this->resolve($uid, $credit) : (int)$old['author_id'];
                $qb = $this->db->getQueryBuilder();
                $values = ['user_id' => $uid, 'item_id' => $itemId, 'author_id' => $authorId, 'position' => $position,
                    'source_name' => $credit, 'source_sort_name' => $old['source_sort_name'] ?? null,
                    'assignment_source' => 'import', 'revision' => $old === null ? 1 : (int)$old['revision'] + 1];
                // Keep relationship IDs stable for unchanged credits, even when order changes.
                if ($old !== null) $values['id'] = (int)$old['id'];
                $qb->insert('library_item_authors')->values(array_map(fn($value) => $qb->createNamedParameter($value), $values))->executeStatement();
            }
            $this->setStatus($uid, $itemId, self::SYNCED);
            $this->db->commit();
        } catch (\Throwable $error) { $this->db->rollBack(); throw $error; }
    }

    private function resolve(string $uid, string $credit): int {
        $name = AuthorIdentity::name($credit);
        $matches = $this->rows('SELECT id,merged_into FROM *PREFIX*library_authors WHERE user_id = ? AND comparison_key = ? AND normalization_version = ? ORDER BY id LIMIT 101' . ($this->db->getDatabaseProvider() === 'sqlite' ? '' : ' FOR UPDATE'), [$uid, $name['comparison_key'], AuthorIdentity::VERSION]);
        $resolved = [];
        if (count($matches) <= 100) foreach ($matches as $match) {
            $id = (int)$match['id'];
            for ($depth = 0; $depth < 32; $depth++) {
                $author = $depth === 0 ? $match : ($this->rows('SELECT id,merged_into FROM *PREFIX*library_authors WHERE user_id=? AND id=?' . ($this->db->getDatabaseProvider() === 'sqlite' ? '' : ' FOR UPDATE'), [$uid, $id])[0] ?? null);
                if ($author === null) throw new \RuntimeException('Missing merged author');
                if ($author['merged_into'] === null) { $resolved[$id] = true; break; }
                $id = (int)$author['merged_into'];
            }
            if ($depth === 32) throw new \RuntimeException('Author redirect chain too long');
            if (count($resolved) > 1) break; // Distinct homonyms must remain ambiguous.
        }
        if (count($resolved) === 1) return (int)array_key_first($resolved);
        $qb = $this->db->getQueryBuilder();
        $values = $name + ['user_id' => $uid, 'revision' => 1, 'field_sources' => json_encode(['display_name' => 'credit', 'sort_name' => 'credit'], JSON_THROW_ON_ERROR)];
        $qb->insert('library_authors')->values(array_map(fn($value) => $qb->createNamedParameter($value), $values))->executeStatement();
        return (int)$this->db->lastInsertId('library_authors');
    }

    private function setStatus(string $uid, int $itemId, int $status): void {
        $this->db->executeStatement('UPDATE *PREFIX*library_items SET author_sync_status = ? WHERE user_id = ? AND id = ?', [$status, $uid, $itemId]);
    }

    public function status(string $uid): array {
        $status = ['synced' => 0, 'pending' => 0, 'conflict' => 0, 'failed' => 0];
        $labels = [self::SYNCED => 'synced', self::PENDING => 'pending', self::CONFLICT => 'conflict', self::FAILED => 'failed'];
        foreach ($this->rows('SELECT author_sync_status,COUNT(*) AS n FROM *PREFIX*library_items WHERE user_id = ? GROUP BY author_sync_status', [$uid]) as $row) {
            $status[$labels[(int)$row['author_sync_status']]] = (int)$row['n'];
        }
        $status['authoritative'] = false; // Switchover belongs to the read/UI integration slice.
        return $status;
    }

    public function retryFailed(string $uid): int {
        return $this->db->executeStatement('UPDATE *PREFIX*library_items SET author_sync_status = ? WHERE user_id = ? AND author_sync_status = ?', [self::PENDING, $uid, self::FAILED]);
    }
}
