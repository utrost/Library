<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\IDBConnection;
use Psr\Log\LoggerInterface;
use Throwable;

final class ScanJobService {
    public function __construct(
        private IDBConnection $db,
        private LoggerInterface $logger,
    ) {
    }

    public function queueJob(string $userId, string $scopeType = 'all', ?int $rootId = null): array {
        return $this->createJob($userId, 'queued', $scopeType, $rootId);
    }

    public function startJob(string $userId, string $scopeType = 'all', ?int $rootId = null): array {
        return $this->createJob($userId, 'running', $scopeType, $rootId);
    }

    public function markRunning(string $userId, int $jobId): bool {
        $qb = $this->db->getQueryBuilder();
        return $qb->update('library_scan_jobs')
            ->set('status', $qb->createNamedParameter('running'))
            ->set('run_started_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($jobId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('status', $qb->createNamedParameter('queued')))
            ->executeStatement() > 0;
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
            ->set('metadata_errors', $qb->createNamedParameter((int)($progress['metadataErrors'] ?? 0)))
            ->set('fingerprint_skips', $qb->createNamedParameter((int)($progress['fingerprintSkips'] ?? 0)))
            ->set('metadata_extractions', $qb->createNamedParameter((int)($progress['metadataExtractions'] ?? 0)))
            ->set('item_refreshes', $qb->createNamedParameter((int)($progress['itemRefreshes'] ?? 0)))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($jobId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('status', $qb->createNamedParameter('running')))
            ->executeStatement();
    }

    public function finishJob(string $userId, int $jobId, array $result): bool {
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
        return $this->updateJob($userId, $jobId, 'completed', (int)($result['roots'] ?? 0), (int)($result['indexed'] ?? 0), count($errors), $summary, $result);
    }

    public function failJob(string $userId, int $jobId, string $error, array $metrics = []): bool {
        $qb = $this->db->getQueryBuilder();
        return $qb->update('library_scan_jobs')
            ->set('status', $qb->createNamedParameter('failed'))
            ->set('roots_total', $qb->createNamedParameter((int)($metrics['roots'] ?? 0)))
            ->set('files_indexed', $qb->createNamedParameter((int)($metrics['indexed'] ?? 0)))
            ->set('error_count', $qb->createNamedParameter(max(1, (int)($metrics['errors'] ?? 1))))
            ->set('summary', $qb->createNamedParameter(mb_substr($error, 0, 4000)))
            ->set('files_added', $qb->createNamedParameter((int)($metrics['filesAdded'] ?? 0)))
            ->set('paths_updated', $qb->createNamedParameter((int)($metrics['pathsUpdated'] ?? 0)))
            ->set('files_unchanged', $qb->createNamedParameter((int)($metrics['filesUnchanged'] ?? 0)))
            ->set('files_missing', $qb->createNamedParameter((int)($metrics['filesMissing'] ?? 0)))
            ->set('metadata_errors', $qb->createNamedParameter((int)($metrics['metadataErrors'] ?? 0)))
            ->set('fingerprint_skips', $qb->createNamedParameter((int)($metrics['fingerprintSkips'] ?? 0)))
            ->set('metadata_extractions', $qb->createNamedParameter((int)($metrics['metadataExtractions'] ?? 0)))
            ->set('item_refreshes', $qb->createNamedParameter((int)($metrics['itemRefreshes'] ?? 0)))
            ->set('duration_ms', $qb->createNamedParameter(max(0, (int)($metrics['scannerDurationMs'] ?? 0))))
            ->set('finished_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($jobId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('status', $qb->createNamedParameter('running')))
            ->executeStatement() > 0;
    }

    public function cancelQueuedJob(string $userId, int $jobId): bool {
        return $this->cancelJob($userId, $jobId);
    }

    public function cancelJob(string $userId, int $jobId): bool {
        $affected = $this->cancelJobInStatus($userId, $jobId, 'queued', 0);
        if ($affected === 0) {
            $job = $this->jobById($userId, $jobId);
            if ($job === null || $job['status'] !== 'running') {
                return false;
            }
            $durationMs = $job['runStartedAt'] !== null
                ? max(0, (time() - (int)$job['runStartedAt']) * 1000)
                : 0;
            $affected = $this->cancelJobInStatus($userId, $jobId, 'running', $durationMs);
        }

        if ($affected > 0) {
            $persisted = $this->jobById($userId, $jobId) ?? [];
            try {
                $this->logger->info('library.scan.cancelled', $this->terminalContext('cancelled', $persisted));
            } catch (Throwable) {
                // Observability must never change the successful cancellation result.
            }
        }

        return $affected > 0;
    }

    private function cancelJobInStatus(string $userId, int $jobId, string $status, int $durationMs): int {
        $qb = $this->db->getQueryBuilder();
        return $qb->update('library_scan_jobs')
            ->set('status', $qb->createNamedParameter('cancelled'))
            ->set('summary', $qb->createNamedParameter('Scan cancellation requested'))
            ->set('duration_ms', $qb->createNamedParameter($durationMs))
            ->set('finished_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($jobId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('status', $qb->createNamedParameter($status)))
            ->executeStatement();
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

    public function getJob(string $userId, int $jobId): ?array {
        return $this->jobById($userId, $jobId);
    }

    public function recentJobs(string $userId, int $limit = 5): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('*')
            ->from('library_scan_jobs')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->orderBy('started_at', 'DESC')
            ->addOrderBy('id', 'DESC')
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
                'metadata_errors' => $qb->createNamedParameter(0),
                'fingerprint_skips' => $qb->createNamedParameter(0),
                'metadata_extractions' => $qb->createNamedParameter(0),
                'item_refreshes' => $qb->createNamedParameter(0),
                'started_at' => $qb->createNamedParameter($now),
                'run_started_at' => $qb->createNamedParameter($status === 'running' ? $now : null),
                'duration_ms' => $qb->createNamedParameter(null),
                'finished_at' => $qb->createNamedParameter(null),
            ])
            ->executeStatement();

        $insertedId = (int)$this->db->lastInsertId('library_scan_jobs');
        if ($insertedId <= 0) {
            throw new \RuntimeException('Unable to resolve inserted scan job');
        }
        $job = $this->jobById($userId, $insertedId);
        if ($job === null) {
            throw new \RuntimeException('Inserted scan job could not be loaded');
        }
        return $job;
    }

    private function updateJob(string $userId, int $jobId, string $status, int $rootsTotal, int $filesIndexed, int $errorCount, string $summary, array $changeSummary = []): bool {
        $qb = $this->db->getQueryBuilder();
        return $qb->update('library_scan_jobs')
            ->set('status', $qb->createNamedParameter($status))
            ->set('roots_total', $qb->createNamedParameter($rootsTotal))
            ->set('files_indexed', $qb->createNamedParameter($filesIndexed))
            ->set('error_count', $qb->createNamedParameter($errorCount))
            ->set('summary', $qb->createNamedParameter(mb_substr($summary, 0, 4000)))
            ->set('files_added', $qb->createNamedParameter((int)($changeSummary['filesAdded'] ?? 0)))
            ->set('paths_updated', $qb->createNamedParameter((int)($changeSummary['pathsUpdated'] ?? 0)))
            ->set('files_unchanged', $qb->createNamedParameter((int)($changeSummary['filesUnchanged'] ?? 0)))
            ->set('files_missing', $qb->createNamedParameter((int)($changeSummary['filesMissing'] ?? 0)))
            ->set('metadata_errors', $qb->createNamedParameter((int)($changeSummary['metadataErrors'] ?? 0)))
            ->set('fingerprint_skips', $qb->createNamedParameter((int)($changeSummary['fingerprintSkips'] ?? 0)))
            ->set('metadata_extractions', $qb->createNamedParameter((int)($changeSummary['metadataExtractions'] ?? 0)))
            ->set('item_refreshes', $qb->createNamedParameter((int)($changeSummary['itemRefreshes'] ?? 0)))
            ->set('duration_ms', $qb->createNamedParameter((int)($changeSummary['scannerDurationMs'] ?? 0)))
            ->set('finished_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($jobId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('status', $qb->createNamedParameter('running')))
            ->executeStatement() > 0;
    }

    private function jobById(string $userId, int $jobId): ?array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('*')->from('library_scan_jobs')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($jobId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))->executeQuery();
        $row = $result->fetch(); $result->closeCursor();
        return $row === false ? null : $this->normalizeRow($row);
    }

    private function normalizeRow(array $row): array {
        $startedAt = (int)$row['started_at'];
        $finishedAt = $row['finished_at'] !== null ? (int)$row['finished_at'] : null;
        $status = (string)$row['status'];
        $runStartedAt = isset($row['run_started_at']) && $row['run_started_at'] !== null ? (int)$row['run_started_at'] : null;
        $storedDurationMs = isset($row['duration_ms']) && $row['duration_ms'] !== null ? max(0, (int)$row['duration_ms']) : null;
        $durationMs = match (true) {
            $status === 'queued' => 0,
            $status === 'running' && $runStartedAt !== null => max(0, (time() - $runStartedAt) * 1000),
            in_array($status, ['completed', 'failed', 'cancelled'], true) => $storedDurationMs ?? ($runStartedAt !== null && $finishedAt !== null ? max(0, ($finishedAt - $runStartedAt) * 1000) : 0),
            default => $storedDurationMs ?? 0,
        };
        return [
            'id' => (int)$row['id'],
            'userId' => (string)$row['user_id'],
            'status' => $status,
            'scopeType' => isset($row['scope_type']) ? (string)$row['scope_type'] : 'all',
            'rootId' => isset($row['root_id']) && $row['root_id'] !== null ? (int)$row['root_id'] : null,
            'rootsTotal' => (int)$row['roots_total'],
            'filesIndexed' => (int)$row['files_indexed'],
            'errorCount' => (int)$row['error_count'],
            'filesAdded' => (int)($row['files_added'] ?? 0),
            'pathsUpdated' => (int)($row['paths_updated'] ?? 0),
            'filesUnchanged' => (int)($row['files_unchanged'] ?? 0),
            'filesMissing' => (int)($row['files_missing'] ?? 0),
            'metadataErrors' => (int)($row['metadata_errors'] ?? 0),
            'fingerprintSkips' => (int)($row['fingerprint_skips'] ?? 0),
            'metadataExtractions' => (int)($row['metadata_extractions'] ?? 0),
            'itemRefreshes' => (int)($row['item_refreshes'] ?? 0),
            'summary' => $row['summary'] !== null ? (string)$row['summary'] : '',
            'startedAt' => $startedAt,
            'finishedAt' => $finishedAt,
            'runStartedAt' => $runStartedAt,
            'durationMs' => $durationMs,
            'durationSeconds' => intdiv($durationMs, 1000),
        ];
    }

    private function terminalContext(string $outcome, array $job): array {
        $queueEndAt = ($job['runStartedAt'] ?? null) ?? ($job['finishedAt'] ?? null);
        $queueWaitMs = $queueEndAt !== null
            ? max(0, ((int)$queueEndAt - (int)($job['startedAt'] ?? $queueEndAt)) * 1000)
            : 0;
        return [
            'event_schema' => 1,
            'scope_type' => in_array(($job['scopeType'] ?? 'all'), ['all', 'root', 'metadata_errors', 'missing_files'], true) ? $job['scopeType'] : 'all',
            'outcome' => $outcome,
            'worker_metrics_available' => false,
            'queue_wait_ms' => $queueWaitMs,
            'progress_writes' => null,
            'cancel_checks' => null,
            'roots' => max(0, (int)($job['rootsTotal'] ?? 0)),
            'indexed' => max(0, (int)($job['filesIndexed'] ?? 0)),
            'fingerprint_skips' => max(0, (int)($job['fingerprintSkips'] ?? 0)),
            'metadata_extractions' => max(0, (int)($job['metadataExtractions'] ?? 0)),
            'item_refreshes' => max(0, (int)($job['itemRefreshes'] ?? 0)),
            'scanner_duration_ms' => max(0, (int)($job['durationMs'] ?? 0)),
            'file_index_duration_ms' => null,
            'fingerprint_duration_ms' => null,
            'metadata_extraction_duration_ms' => null,
            'item_refresh_duration_ms' => null,
            'missing_update_duration_ms' => null,
        ];
    }
}
