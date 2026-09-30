<?php
declare(strict_types=1);
namespace OCA\Library\BackgroundJob;
use OCP\BackgroundJob\TimedJob;
use OCP\AppFramework\Utility\ITimeFactory;
use OCA\Library\Service\LibraryCleanupService;
use OCA\Library\Service\ItemService;
use OCA\Library\Service\ScanJobService;
final class MaintenanceJob extends TimedJob {
    public function __construct(ITimeFactory $time, private LibraryCleanupService $cleanup, private ItemService $items, private ScanJobService $scans, private \OCA\Library\Service\CoverThumbnailService $covers) {
        parent::__construct($time); $this->setInterval(300); $this->setAllowParallelRuns(false);
    }
    public function run($argument): void { $this->scans->recoverStaleRunningJobs(); $this->cleanup->expireHistory(); $this->cleanup->expireAnalyses(); $this->cleanup->expireDuplicates(); $this->items->backfillAuthors(200); $this->covers->cleanupExpired(); }
}
