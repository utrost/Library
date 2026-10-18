<?php
declare(strict_types=1);
namespace OCA\Library\BackgroundJob;

use OCA\Library\Service\ItemService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;

final class SearchIndexBackfillJob extends TimedJob {
    public function __construct(ITimeFactory $time, private ItemService $items) {
        parent::__construct($time);
        $this->setInterval(60);
        $this->setAllowParallelRuns(false);
    }
    public function run($argument): void {
        $deadline = microtime(true) + 5;
        do { $count = $this->items->backfillSearchIndex(50); }
        while ($count === 50 && microtime(true) < $deadline);
    }
}
