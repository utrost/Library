<?php
declare(strict_types=1);
namespace OCA\Library\BackgroundJob;
use OCP\BackgroundJob\TimedJob;
use OCP\AppFramework\Utility\ITimeFactory;
use OCA\Library\Service\ScheduledScanService;
final class ScheduledScanJob extends TimedJob {
    public function __construct(ITimeFactory $time, private ScheduledScanService $schedules) {
        parent::__construct($time);
        $this->setInterval(300);
        $this->setAllowParallelRuns(false);
    }
    public function run($argument): void { $this->schedules->runDue(); }
}
