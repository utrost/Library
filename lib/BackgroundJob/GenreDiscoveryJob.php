<?php
declare(strict_types=1);
namespace OCA\Library\BackgroundJob;

use OCA\Library\Service\GenreService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;

/** Bounded discovery and application; resumable after each book or link. */
final class GenreDiscoveryJob extends TimedJob {
    public function __construct(ITimeFactory $time, private GenreService $genres) {
        parent::__construct($time);
        $this->setInterval(60);
        $this->setAllowParallelRuns(false);
    }
    public function run($argument): void {
        $deadline = microtime(true) + 5;
        do { $processed = $this->genres->discover(null, 500); }
        while ($processed === 500 && microtime(true) < $deadline);
        do { $applied = $this->genres->applyMapped(null, 500); }
        while ($applied === 500 && microtime(true) < $deadline);
    }
}
