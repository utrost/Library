<?php
declare(strict_types=1);
namespace OCA\Library\BackgroundJob;
use OCA\Library\Service\MetadataBatchService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;
use Psr\Log\LoggerInterface;

final class MetadataLookupJob extends TimedJob {
    public function __construct(ITimeFactory $time,private MetadataBatchService $batches,private LoggerInterface $logger) {
        parent::__construct($time); $this->setInterval(30); $this->setAllowParallelRuns(false);
    }
    public function run($argument): void {
        $deadline=microtime(true)+20;
        try { while (microtime(true)<$deadline && $this->batches->advance()) { sleep(1); /* Shared provider pacing also protects other workers. */ } }
        catch (\Throwable) { $this->logger->warning('Library metadata lookup worker interrupted; persisted work will retry.'); }
    }
}
