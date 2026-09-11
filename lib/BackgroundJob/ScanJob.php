<?php

declare(strict_types=1);

namespace OCA\Library\BackgroundJob;

use OCA\Library\Service\LibraryScanner;
use OCA\Library\Service\ScanJobService;
use OCA\Library\Exception\ScanCancelledException;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\QueuedJob;
use Throwable;
use Psr\Log\LoggerInterface;
use OCA\Library\Instrumentation\MonotonicClock;
use OCA\Library\Instrumentation\ScanProgressPolicy;

class ScanJob extends QueuedJob {
    private MonotonicClock $clock;
    public function __construct(
        ITimeFactory $time,
        private LibraryScanner $scanner,
        private ScanJobService $scanJobService,
        private LoggerInterface $logger,
        ?MonotonicClock $clock = null,
    ) {
        parent::__construct($time);
        $this->setAllowParallelRuns(false);
        $this->clock = $clock ?? new MonotonicClock();
    }

    #[\Override]
    public function run($argument): void {
        $userId = (string)($argument['userId'] ?? '');
        $jobId = (int)($argument['jobId'] ?? 0);
        if ($userId === '' || $jobId <= 0) {
            return;
        }

        if ($this->scanJobService->isCancelled($userId, $jobId)) {
            return;
        }

        $queuedJob = $this->scanJobService->getJob($userId, $jobId);
        if ($queuedJob === null) {
            return;
        }
        $scopeType = (string)$queuedJob['scopeType'];
        $rootId = $scopeType === 'root' ? (int)($queuedJob['rootId'] ?? 0) : null;
        $retryMetadataErrors = $scopeType === 'metadata_errors';
        $recheckMissingFiles = $scopeType === 'missing_files';
        $queueWaitMs = $queuedJob !== null ? max(0, (time() - (int)$queuedJob['startedAt']) * 1000) : 0;
        $startedAt = $this->clock->now();
        $policy = new ScanProgressPolicy($this->clock);
        $progressWrites = 0;
        $cancelChecks = 1;
        $latestProgress = [];
        try {
            if (!$this->scanJobService->markRunning($userId, $jobId)) {
                return;
            }
            if (!in_array($scopeType, ['all', 'root', 'metadata_errors', 'missing_files'], true)
                || ($scopeType === 'root' && $rootId <= 0)) {
                throw new \RuntimeException('Invalid persisted scan scope');
            }
            $progress = function (array $progress) use ($userId, $jobId, $policy, &$progressWrites, &$cancelChecks, &$latestProgress): void {
                $latestProgress = $progress;
                if (!$policy->shouldPersist((int)($progress['traversalUnits'] ?? $progress['indexed'] ?? 0))) { return; }
                $cancelChecks++;
                if ($this->scanJobService->isCancelled($userId, $jobId)) {
                    throw new ScanCancelledException();
                }
                $this->scanJobService->updateProgress($userId, $jobId, $progress);
                $progressWrites++;
            };
            $result = match (true) {
                $retryMetadataErrors => $this->scanner->retryMetadataErrors($userId, $progress),
                $recheckMissingFiles => $this->scanner->recheckMissingFiles($userId, $progress),
                default => $this->scanner->scan($userId, $rootId, $progress),
            };
            $result['scannerDurationMs'] = max((int)($result['scannerDurationMs'] ?? 0), $this->clock->elapsedMs($startedAt));
            if ($this->scanJobService->isCancelled($userId, $jobId)) {
                return;
            }
            if ($this->scanJobService->finishJob($userId, $jobId, $result)) {
                $this->logTerminal($result['errors'] === [] ? 'completed' : 'completed_with_errors', $scopeType, $result, $progressWrites, $cancelChecks, $queueWaitMs);
            }
        } catch (ScanCancelledException) {
            return;
        } catch (Throwable $e) {
            $metrics = [...$latestProgress, 'scannerDurationMs' => $this->clock->elapsedMs($startedAt)];
            if ($this->scanJobService->failJob($userId, $jobId, $e->getMessage(), $metrics)) {
                $this->logTerminal('failed', $scopeType, $metrics, $progressWrites, $cancelChecks, $queueWaitMs);
            }
        }
    }

    private function logTerminal(string $outcome, string $scopeType, array $metrics, int $progressWrites, int $cancelChecks, int $queueWaitMs): void {
        $scope = in_array($scopeType, ['all', 'root', 'metadata_errors', 'missing_files'], true) ? $scopeType : 'all';
        $context = ['event_schema' => 1, 'scope_type' => $scope, 'outcome' => $outcome, 'worker_metrics_available' => true,
            'queue_wait_ms' => $queueWaitMs, 'progress_writes' => $progressWrites, 'cancel_checks' => $cancelChecks];
        $metricKeys = [
            'roots' => 'roots', 'indexed' => 'indexed', 'fingerprintSkips' => 'fingerprint_skips',
            'metadataExtractions' => 'metadata_extractions', 'itemRefreshes' => 'item_refreshes',
            'scannerDurationMs' => 'scanner_duration_ms', 'fileIndexDurationMs' => 'file_index_duration_ms',
            'fingerprintDurationMs' => 'fingerprint_duration_ms',
            'metadataExtractionDurationMs' => 'metadata_extraction_duration_ms',
            'itemRefreshDurationMs' => 'item_refresh_duration_ms',
            'missingUpdateDurationMs' => 'missing_update_duration_ms',
        ];
        foreach ($metricKeys as $sourceKey => $contextKey) {
            $context[$contextKey] = max(0, (int)($metrics[$sourceKey] ?? 0));
        }
        $event = match ($outcome) {
            'completed' => 'library.scan.completed',
            'completed_with_errors' => 'library.scan.completed_with_errors',
            default => 'library.scan.failed',
        };
        try {
            match ($outcome) {
                'completed' => $this->logger->info($event, $context),
                'completed_with_errors' => $this->logger->warning($event, $context),
                'failed' => $this->logger->error($event, $context),
                default => $this->logger->info($event, $context),
            };
        } catch (Throwable) {
            // Operational logging must not change terminal transition ownership.
        }
    }
}
