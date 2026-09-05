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
        if ($userId === '' || $jobId <= 0) {
            return;
        }

        $this->scanJobService->markRunning($userId, $jobId);
        try {
            $result = $this->scanner->scan($userId, function (array $progress) use ($userId, $jobId): void {
                $this->scanJobService->updateProgress($userId, $jobId, $progress);
            });
            $this->scanJobService->finishJob($userId, $jobId, $result);
        } catch (Throwable $e) {
            $this->scanJobService->failJob($userId, $jobId, $e->getMessage());
        }
    }
}
