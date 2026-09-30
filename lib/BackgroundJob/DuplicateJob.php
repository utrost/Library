<?php
declare(strict_types=1);
namespace OCA\Library\BackgroundJob;
use OCP\BackgroundJob\QueuedJob;
use OCP\AppFramework\Utility\ITimeFactory;
use OCA\Library\Service\DuplicateService;
use Psr\Log\LoggerInterface;
final class DuplicateJob extends QueuedJob {
    public function __construct(ITimeFactory $time,private DuplicateService $duplicates,private LoggerInterface $logger) { parent::__construct($time); $this->setAllowParallelRuns(false); }
    public function run($argument): void {
        if (!is_array($argument) || !is_string($argument['userId']??null) || !is_string($argument['id']??null)) return;
        try { $this->duplicates->advance($argument['userId'],$argument['id'],100); }
        catch (\OutOfBoundsException) {}
        catch (\Throwable $e) { $this->logger->error('Library duplicate scan failed',['exception'=>$e]); try { $this->duplicates->stop($argument['userId'],$argument['id'],'failed'); } catch (\OutOfBoundsException) {} }
    }
}
