<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

final class ScanJobService {
    public function __construct(
        private IDBConnection $db,
    ) {
    }

    public function queueJob(string $userId, string $scopeType = 'all', ?int $rootId = null): array {
        return $this->createJob($userId, 'queued', $scopeType, $rootId);
    }

    public function startJob(string $userId, string $scopeType = 'all', ?int $rootId = null): array {
        return $this->createJob($userId, 'running', $scopeType, $rootId);
    }

    public function markRunning(string $userId, int $jobId): void {
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_scan_jobs')
            ->set('status', $qb->createNamedParameter('running'))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($jobId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    public function updateProgress(string $userId, int $jobId, array $progress): void {
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_scan_jobs')
            ->set('status', $qb->createNamedParameter('running'))
            ->set('roots_total', $qb->createNamedParameter((int)($progress['roots'] ?? 0)))
            ->set('files_indexed', $qb->createNamedParameter((int)($progress['indexed'] ?? 0)))
            ->set('error_count', $qb->createNamedParameter((int)($progress['errors'] ?? 0)))
            ->set('summary', $qb->createNamedParameter(mb_substr((string)($progress['summary'] ?? 'Scanning…'), 0, 4000)))
            ->set('files_added', $qb->createNamedParameter((int)($progress['filesAdded'] ?? 0)))
            ->set('paths_updated', $qb->createNamedParameter((int)($progress['pathsUpdated'] ?? 0)))
            ->set('files_unchanged', $qb->createNamedParameter((int)($progress['filesUnchanged'] ?? 0)))
            ->set('files_missing', $qb->createNamedParameter((int)($progress['filesMissing'] ?? 0)))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($jobId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->neq('status', $qb->createNamedParameter('cancelled')))
            ->executeStatement();
    }

    public function finishJob(string $userId, int $jobId, array $result): void {
        if ($this->isCancelled($userId, $jobId)) {
            return;
        }

        $errors = $result['errors'] ?? [];
        $summary = $errors !== []
            ? implode("\n", array_map('strval', $errors))
            : sprintf(
                'Scan completed: %d added, %d moved/renamed, %d unchanged, %d missing, %d metadata errors',
                (int)($result['filesAdded'] ?? 0),
                (int)($result['pathsUpdated'] ?? 0),
                (int)($result['filesUnchanged'] ?? 0),
                (int)($result['filesMissing'] ?? 0),
                (int)($result['metadataErrors'] ?? 0),
            );
        $this->updateJob($userId, $jobId, 'completed', (int)($result['roots'] ?? 0), (int)($result['indexed'] ?? 0), count($errors), $summary, $result);
    }

    public function failJob(string $userId, int $jobId, string $error): void {
        if ($this->isCancelled($userId, $jobId)) {
            return;
        }

        $this->updateJob($userId, $jobId, 'failed', 0, 0, 1, $error);
    }

    public function cancelQueuedJob(string $userId, int $jobId): bool {
        return $this->cancelJob($userId, $jobId);
    }

    public function cancelJob(string $userId, int $jobId): bool {
        $qb = $this->db->getQueryBuilder();
        $affected = $qb->update('library_scan_jobs')
            ->set('status', $qb->createNamedParameter('cancelled'))
            ->set('summary', $qb->createNamedParameter('Scan cancellation requested'))
            ->set('finished_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($jobId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->in('status', $qb->createNamedParameter(['queued', 'running'], IQueryBuilder::PARAM_STR_ARRAY)))
            ->executeStatement();

        return $affected > 0;
    }

    public function isCancelled(string $userId, int $jobId): bool {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('status')
            ->from('library_scan_jobs')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($jobId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();

        $row = $result->fetch();
        $result->closeCursor();

        return $row !== false && (string)$row['status'] === 'cancelled';
    }

    public function latestJob(string $userId): ?array {
        $jobs = $this->recentJobs($userId, 1);
        return $jobs[0] ?? null;
    }

    public function recentJobs(string $userId, int $limit = 5): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('*')
            ->from('library_scan_jobs')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->orderBy('started_at', 'DESC')
            ->setMaxResults(max(1, min(20, $limit)))
            ->executeQuery();

        $rows = [];
        while ($row = $result->fetch()) {
            $rows[] = $row;
        }
        $result->closeCursor();

        return array_map(fn (array $row): array => $this->normalizeRow($row), $rows);
    }

    private function createJob(string $userId, string $status, string $scopeType = 'all', ?int $rootId = null): array {
        $now = time();
        $scopeType = match (true) {
            $scopeType === 'root' && $rootId !== null && $rootId > 0 => 'root',
            $scopeType === 'metadata_errors' => 'metadata_errors',
            $scopeType === 'missing_files' => 'missing_files',
            default => 'all',
        };
        $rootId = $scopeType === 'root' ? $rootId : null;
        $qb = $this->db->getQueryBuilder();
        $qb->insert('library_scan_jobs')
            ->values([
                'user_id' => $qb->createNamedParameter($userId),
                'status' => $qb->createNamedParameter($status),
                'scope_type' => $qb->createNamedParameter($scopeType),
                'root_id' => $qb->createNamedParameter($rootId),
                'roots_total' => $qb->createNamedParameter(0),
                'files_indexed' => $qb->createNamedParameter(0),
                'error_count' => $qb->createNamedParameter(0),
                'summary' => $qb->createNamedParameter(null),
                'files_added' => $qb->createNamedParameter(0),
                'paths_updated' => $qb->createNamedParameter(0),
                'files_unchanged' => $qb->createNamedParameter(0),
                'files_missing' => $qb->createNamedParameter(0),
                'started_at' => $qb->createNamedParameter($now),
                'finished_at' => $qb->createNamedParameter(null),
            ])
            ->executeStatement();

        return $this->latestJob($userId) ?? [
            'id' => 0,
            'userId' => $userId,
            'status' => $status,
            'scopeType' => $scopeType,
            'rootId' => $rootId,
            'rootsTotal' => 0,
            'filesIndexed' => 0,
            'errorCount' => 0,
            'filesAdded' => 0,
            'pathsUpdated' => 0,
            'filesUnchanged' => 0,
            'filesMissing' => 0,
            'summary' => '',
            'startedAt' => $now,
            'finishedAt' => null,
            'durationSeconds' => 0,
        ];
    }

    private function updateJob(string $userId, int $jobId, string $status, int $rootsTotal, int $filesIndexed, int $errorCount, string $summary, array $changeSummary = []): void {
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_scan_jobs')
            ->set('status', $qb->createNamedParameter($status))
            ->set('roots_total', $qb->createNamedParameter($rootsTotal))
            ->set('files_indexed', $qb->createNamedParameter($filesIndexed))
            ->set('error_count', $qb->createNamedParameter($errorCount))
            ->set('summary', $qb->createNamedParameter(mb_substr($summary, 0, 4000)))
            ->set('files_added', $qb->createNamedParameter((int)($changeSummary['filesAdded'] ?? 0)))
            ->set('paths_updated', $qb->createNamedParameter((int)($changeSummary['pathsUpdated'] ?? 0)))
            ->set('files_unchanged', $qb->createNamedParameter((int)($changeSummary['filesUnchanged'] ?? 0)))
            ->set('files_missing', $qb->createNamedParameter((int)($changeSummary['filesMissing'] ?? 0)))
            ->set('finished_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($jobId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    private function normalizeRow(array $row): array {
        $startedAt = (int)$row['started_at'];
        $finishedAt = $row['finished_at'] !== null ? (int)$row['finished_at'] : null;
        $end = $finishedAt ?? time();
        return [
            'id' => (int)$row['id'],
            'userId' => (string)$row['user_id'],
            'status' => (string)$row['status'],
            'scopeType' => isset($row['scope_type']) ? (string)$row['scope_type'] : 'all',
            'rootId' => isset($row['root_id']) && $row['root_id'] !== null ? (int)$row['root_id'] : null,
            'rootsTotal' => (int)$row['roots_total'],
            'filesIndexed' => (int)$row['files_indexed'],
            'errorCount' => (int)$row['error_count'],
            'filesAdded' => (int)($row['files_added'] ?? 0),
            'pathsUpdated' => (int)($row['paths_updated'] ?? 0),
            'filesUnchanged' => (int)($row['files_unchanged'] ?? 0),
            'filesMissing' => (int)($row['files_missing'] ?? 0),
            'summary' => $row['summary'] !== null ? (string)$row['summary'] : '',
            'startedAt' => $startedAt,
            'finishedAt' => $finishedAt,
            'durationSeconds' => max(0, $end - $startedAt),
        ];
    }
}
