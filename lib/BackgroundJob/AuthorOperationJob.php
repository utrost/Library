<?php
declare(strict_types=1);
namespace OCA\Library\BackgroundJob;

use OCA\Library\Service\AuthorAssignmentService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;
use Psr\Log\LoggerInterface;

/** Poll persisted work; a stale running task is retried after a worker crash. */
final class AuthorOperationJob extends TimedJob {
    public function __construct(ITimeFactory $time, private AuthorAssignmentService $assignments, private LoggerInterface $logger) {
        parent::__construct($time);
        $this->setInterval(60);
        $this->setAllowParallelRuns(false);
    }
    public function run($argument): void {
        try { $this->assignments->advanceTask(); }
        catch (\Throwable $error) { $this->logger->error('Library author operation worker failed', ['exception' => $error]); }
    }
}
