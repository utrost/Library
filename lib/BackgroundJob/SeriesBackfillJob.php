<?php
declare(strict_types=1);
namespace OCA\Library\BackgroundJob;

use OCA\Library\Service\SeriesStorageService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;

final class SeriesBackfillJob extends TimedJob {
    public function __construct(ITimeFactory $time, private SeriesStorageService $series) {
        parent::__construct($time);
        $this->setInterval(60);
        $this->setAllowParallelRuns(false);
    }
    public function run($argument): void {
        $deadline = microtime(true) + 5;
        do { $processed = $this->series->advance(null, 500, max(0.1, $deadline - microtime(true))); }
        while ($processed === 500 && microtime(true) < $deadline);
    }
}
