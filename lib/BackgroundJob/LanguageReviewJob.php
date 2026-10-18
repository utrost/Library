<?php
declare(strict_types=1);
namespace OCA\Library\BackgroundJob;

use OCA\Library\Service\ItemService;
use OCA\Library\Service\LanguageReviewService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;

final class LanguageReviewJob extends TimedJob {
    public function __construct(ITimeFactory $time, private LanguageReviewService $review, private ItemService $items) {
        parent::__construct($time);
        $this->setInterval(60);
        $this->setAllowParallelRuns(false);
    }
    public function run($argument): void {
        $deadline = microtime(true) + 5;
        do { $processed = $this->review->discover($this->items, null, 200); }
        while ($processed === 200 && microtime(true) < $deadline);
        do { $applied = $this->review->applyMapped($this->items, null, 100); }
        while ($applied === 100 && microtime(true) < $deadline);
    }
}
