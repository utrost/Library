<?php

declare(strict_types=1);

namespace OCA\Library\BackgroundJob;

use OCA\Library\Service\LibraryScanner;
use OCA\Library\Service\ScanJobService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\QueuedJob;
use Throwable;

class ScanJob extends QueuedJob {
    public function __construct(
        ITimeFactory $time,
        private LibraryScanner $scanner,
        private ScanJobService $scanJobService,
    ) {
        parent::__construct($time);
        $this->setAllowParallelRuns(false);
    }

    #[\Override]
    public function run($argument): void {
        $userId = (string)($argument['userId'] ?? '');
        $jobId = (int)($argument['jobId'] ?? 0);
        $rootId = isset($argument['rootId']) ? (int)$argument['rootId'] : null;
        $scopeType = (string)($argument['scopeType'] ?? '');
        $retryMetadataErrors = (bool)($argument['retryMetadataErrors'] ?? false) || $scopeType === 'metadata_errors';
        $recheckMissingFiles = (bool)($argument['recheckMissingFiles'] ?? false) || $scopeType === 'missing_files';
        if ($userId === '' || $jobId <= 0) {
            return;
        }

        if ($this->scanJobService->isCancelled($userId, $jobId)) {
            return;
        }

        $this->scanJobService->markRunning($userId, $jobId);
        try {
            $progress = function (array $progress) use ($userId, $jobId): void {
                $this->scanJobService->updateProgress($userId, $jobId, $progress);
            };
            $result = match (true) {
                $retryMetadataErrors => $this->scanner->retryMetadataErrors($userId, $progress),
                $recheckMissingFiles => $this->scanner->recheckMissingFiles($userId, $progress),
                default => $this->scanner->scan($userId, $rootId, $progress),
            };
            $this->scanJobService->finishJob($userId, $jobId, $result);
        } catch (Throwable $e) {
            $this->scanJobService->failJob($userId, $jobId, $e->getMessage());
        }
    }
}
