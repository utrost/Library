<?php
declare(strict_types=1);
namespace OCA\Library\BackgroundJob;

use OCP\BackgroundJob\TimedJob;
use OCP\AppFramework\Utility\ITimeFactory;
use OCA\Library\Service\AuthorStorageService;

final class AuthorBackfillJob extends TimedJob {
    public function __construct(ITimeFactory $time, private AuthorStorageService $authors) {
        parent::__construct($time);
        $this->setInterval(60);
        $this->setAllowParallelRuns(false);
    }
    public function run($argument): void {
        $deadline = microtime(true) + 5;
        do {
            $processed = $this->authors->advance(null, 500, max(0.1, $deadline - microtime(true)));
        } while ($processed === 500 && microtime(true) < $deadline);
    }
}
