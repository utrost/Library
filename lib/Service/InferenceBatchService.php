<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;
use OCP\Files\IRootFolder;
use OCP\Files\File;
use OCP\Files\Folder;

/** Durable, bounded user approvals. All metadata writes and batch transitions are atomic. */
final class InferenceBatchService {
    public function __construct(private IDBConnection $db, private ItemService $items, private IRootFolder $files) {}

    public function snapshot(string $uid, int $id, bool $lock = false): array {
        if (!$lock) return $this->snapshots($uid,[$id])[$id] ?? throw new \OutOfBoundsException('missing_item');
        $state = $this->items->inferenceState($uid, $id, $lock);
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('f.file_id', 'f.cached_path', 'f.root_id', 'r.path')->from('library_files', 'f')
            ->innerJoin('f', 'library_roots', 'r', $qb->expr()->eq('f.root_id', 'r.id'))
            ->where($qb->expr()->eq('f.id', $qb->createNamedParameter((int)$state['library_file_id'])))
            ->andWhere($qb->expr()->eq('f.user_id', $qb->createNamedParameter($uid)))
            ->andWhere($qb->expr()->eq('r.user_id', $qb->createNamedParameter($uid)))->executeQuery();
        $row = $result->fetch(); $result->closeCursor();
        if (!$row) throw new \OutOfBoundsException('missing_item');
        return $this->liveSnapshot($uid, $state, $row);
    }

    /** Missing/revoked records are omitted; every returned snapshot checks the live Files API. */
    public function snapshots(string $uid, array $ids): array {
        if (count($ids) > 40) throw new \InvalidArgumentException('selection_limit');
        $snapshots = [];
        foreach ($this->items->inferenceReadRows($uid, $ids) as $row) {
            $id = (int)$row['id'];
            $context = array_intersect_key($row, array_fill_keys(['file_id','cached_path','root_id','path'],true));
            $state = array_diff_key($row, array_fill_keys(['id','file_id','cached_path','root_id','path'],true));
            $state['user_edited'] = in_array($state['user_edited'],[true,1,'1','t','true'],true) ? '1' : '0';
            $state = array_map(static fn($value) => $value === null ? null : (string)$value,$state);
            try { $snapshots[$id] = $this->liveSnapshot($uid,$state,$context); }
            catch (\OutOfBoundsException) { /* permission/identity changes are unavailable */ }
        }
        return $snapshots;
    }

    private function liveSnapshot(string $uid, array $state, array $row): array {
        try {
            $home = $this->files->getUserFolder($uid);
            $root = $home->get(ltrim($row['path'], '/') ?: '/');
            $file = $home->get(ltrim($row['cached_path'], '/'));
            if (!$root instanceof Folder || !$root->isReadable() || !$file instanceof File || !$file->isReadable()
                || $file->getId() !== (int)$row['file_id']
                || !str_starts_with('/'.ltrim($row['cached_path'], '/'), rtrim('/'.ltrim($row['path'], '/'), '/').'/')) throw new \OutOfBoundsException('missing_item');
            $identity = ['id' => $file->getId(), 'path' => $row['cached_path'], 'rootId' => (int)$row['root_id'],
                'rootPath' => $row['path'], 'rootFileId' => $root->getId(), 'etag' => $file->getEtag(), 'mtime' => $file->getMTime(), 'size' => $file->getSize()];
        } catch (\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException $e) { throw new \OutOfBoundsException('missing_item'); }
        return ['state' => $state, 'file' => $identity];
    }

    public function prepare(string $uid, mixed $proposals, mixed $context): array {
        if (!is_array($proposals) || !array_is_list($proposals) || !$proposals || count($proposals) > 40
            || !is_string($context) || strlen($context) > 65536) throw new \InvalidArgumentException('invalid_proposals');
        $this->prune($uid);
        $qb = $this->db->getQueryBuilder();
        $count = $qb->selectAlias($qb->createFunction('COUNT(*)'), 'n')->from('library_inference_batches')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($uid)))->executeQuery()->fetchOne();
        if ((int)$count >= 100) throw new \InvalidArgumentException('history_limit');
        $ids = array_column($proposals,'id');
        foreach ($ids as $itemId) if (!is_int($itemId) || $itemId < 1) throw new \InvalidArgumentException('invalid_proposals');
        $snapshots = $this->snapshots($uid,$ids);
        $entries = []; $seen = [];
        foreach ($proposals as $proposal) {
            if (!is_array($proposal) || !is_int($proposal['id'] ?? null) || $proposal['id'] < 1
                || !is_string($proposal['revision'] ?? null) || !preg_match('/^[a-f0-9]{64}$/D', $proposal['revision'])
                || isset($seen[$proposal['id']])) throw new \InvalidArgumentException('invalid_proposals');
            $seen[$proposal['id']] = true;
            $changes = InferenceChangeSet::normalize($proposal['changes'] ?? null);
            $before = $snapshots[$proposal['id']] ?? throw new \OutOfBoundsException('missing_item');
            if (!hash_equals(InferenceChangeSet::fingerprint($before), $proposal['revision'])) throw new \DomainException('stale_preview');
            $after = $before['state']; $review = []; $write = [];
            foreach ($changes as $field => $value) {
                $column = InferenceChangeSet::FIELDS[$field][0];
                $current = $field === 'author' ? AuthorNames::encode(AuthorNames::read($after[$column], $after['creators'])) : $after[$column];
                if ((string)$current === $value) continue;
                $review[] = ['field' => $field, 'before' => InferenceChangeSet::display($field, $current), 'after' => InferenceChangeSet::display($field, $value)];
                $write[$column] = $value;
                if ($field === 'author') $write['creators'] = InferenceChangeSet::display('author', $value);
            }
            if (!$write) continue;
            $sources = json_decode($after['field_sources'] ?: '{}', true) ?: [];
            foreach ($review as $change) $sources[InferenceChangeSet::sourceField($change['field'])] = 'path-inference';
            $write += ['metadata_source' => 'user', 'user_edited' => '1', 'field_sources' => json_encode($sources, JSON_THROW_ON_ERROR)];
            $entries[] = ['id' => $proposal['id'], 'before' => $before, 'write' => $write, 'review' => $review];
        }
        if (!$entries) throw new \InvalidArgumentException('no_changes');
        usort($entries, static fn($a, $b) => $a['id'] <=> $b['id']);
        $payload = json_encode(['version' => 1, 'context' => $context, 'entries' => $entries], JSON_THROW_ON_ERROR);
        if (strlen($payload) > 262144) throw new \InvalidArgumentException('plan_too_large');
        $id = bin2hex(random_bytes(16)); $now = time();
        $qb = $this->db->getQueryBuilder();
        $qb->insert('library_inference_batches')->values([
            'id' => $qb->createNamedParameter($id), 'user_id' => $qb->createNamedParameter($uid),
            'status' => $qb->createNamedParameter('prepared'), 'payload' => $qb->createNamedParameter($payload),
            'created_at' => $qb->createNamedParameter($now), 'expires_at' => $qb->createNamedParameter($now + 1800),
        ])->executeStatement();
        return $this->get($uid, $id);
    }

    private function row(string $uid, string $id, bool $lock = false): array {
        if (!preg_match('/^[a-f0-9]{32}$/D', $id)) throw new \OutOfBoundsException('missing_batch');
        if ($lock && $this->db->getDatabaseProvider() === 'sqlite') {
            $claim = $this->db->getQueryBuilder();
            $claim->update('library_inference_batches')->set('status', $claim->createFunction('status'))
                ->where($claim->expr()->eq('id', $claim->createNamedParameter($id)))
                ->andWhere($claim->expr()->eq('user_id', $claim->createNamedParameter($uid)))->executeStatement();
        }
        $qb = $this->db->getQueryBuilder();
        $qb->select('*')->from('library_inference_batches')->where($qb->expr()->eq('id', $qb->createNamedParameter($id)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($uid)));
        if ($lock && $this->db->getDatabaseProvider() !== 'sqlite') $qb->forUpdate();
        $result = $qb->executeQuery(); $row = $result->fetch(); $result->closeCursor();
        if (!$row) throw new \OutOfBoundsException('missing_batch');
        if ((int)$row['expires_at'] <= time()) throw new \DomainException('expired_batch');
        return $row;
    }

    public function get(string $uid, string $id): array {
        $row = $this->row($uid, $id); $payload = json_decode($row['payload'], true, 64, JSON_THROW_ON_ERROR);
        $entries = [];
        foreach ($payload['entries'] as $entry) {
            $live = $this->snapshot($uid, $entry['id']); // Recheck access before disclosing paths/history.
            if ($live['file'] !== $entry['before']['file']) throw new \DomainException('stale_preview');
            $entries[] = ['id' => $entry['id'], 'path' => $entry['before']['file']['path'], 'changes' => $entry['review']];
        }
        return ['id' => $id, 'status' => $row['status'], 'expiresAt' => (int)$row['expires_at'], 'createdAt' => (int)$row['created_at'], 'entries' => $entries];
    }

    public function history(string $uid): array {
        $this->prune($uid);
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('id', 'status', 'created_at', 'expires_at')->from('library_inference_batches')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($uid)))->orderBy('created_at', 'DESC')->addOrderBy('id', 'DESC')->setMaxResults(100)->executeQuery();
        $rows = $result->fetchAll(); $result->closeCursor(); return $rows;
    }

    public function mutate(string $uid, string $id, bool $undo): array {
        $this->db->beginTransaction();
        try {
            $row = $this->row($uid, $id, true);
            $target = $undo ? 'undone' : 'applied';
            // Safe retries: a lost response never applies or undoes a batch twice.
            if ($row['status'] === $target) { $this->db->commit(); return ['id' => $id, 'status' => $target, 'expiresAt' => (int)$row['expires_at']]; }
            if ($row['status'] !== ($undo ? 'applied' : 'prepared')) throw new \DomainException('invalid_transition');
            $payload = json_decode($row['payload'], true, 64, JSON_THROW_ON_ERROR);
            foreach ($payload['entries'] as &$entry) {
                $live = $this->snapshot($uid, $entry['id'], true);
                $expected = $undo ? $entry['after'] : $entry['before'];
                if (!hash_equals(InferenceChangeSet::fingerprint($expected), InferenceChangeSet::fingerprint($live))) throw new \DomainException('stale_preview');
                $write = $undo ? array_intersect_key($entry['before']['state'], $entry['write']) : $entry['write'];
                $this->items->writeInferenceState($uid, $entry['id'], $write);
                if (!$undo) $entry['after'] = $this->snapshot($uid, $entry['id']);
            }
            unset($entry);
            $qb = $this->db->getQueryBuilder();
            $qb->update('library_inference_batches')->set('status', $qb->createNamedParameter($target))
                ->set('payload', $qb->createNamedParameter(json_encode($payload, JSON_THROW_ON_ERROR)))
                ->set('expires_at', $qb->createNamedParameter(time() + 604800))
                ->where($qb->expr()->eq('id', $qb->createNamedParameter($id)))->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($uid)))->executeStatement();
            $this->db->commit(); return ['id' => $id, 'status' => $target, 'expiresAt' => time() + 604800];
        } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
    }

    public function discard(string $uid, string $id): void {
        $qb = $this->db->getQueryBuilder();
        // Applied history is retained for undo; only un-applied or undone plans can be removed.
        $qb->delete('library_inference_batches')->where($qb->expr()->eq('id', $qb->createNamedParameter($id)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($uid)))
            ->andWhere($qb->expr()->neq('status', $qb->createNamedParameter('applied')))->executeStatement();
    }
    private function prune(string $uid): void {
        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_inference_batches')->where($qb->expr()->eq('user_id', $qb->createNamedParameter($uid)))
            ->andWhere($qb->expr()->lte('expires_at', $qb->createNamedParameter(time())))->executeStatement();
    }
}
