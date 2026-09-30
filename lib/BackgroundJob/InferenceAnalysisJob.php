<?php
declare(strict_types=1);
namespace OCA\Library\BackgroundJob;
use OCP\BackgroundJob\QueuedJob;
use OCP\AppFramework\Utility\ITimeFactory;
use OCA\Library\Service\InferenceAnalysisService;
use Psr\Log\LoggerInterface;
final class InferenceAnalysisJob extends QueuedJob {
    public function __construct(ITimeFactory $time,private InferenceAnalysisService $analysis,private LoggerInterface $logger) { parent::__construct($time); $this->setAllowParallelRuns(false); }
    public function run($argument): void {
        if (!is_array($argument) || !is_string($argument['userId']??null) || !is_string($argument['id']??null)) return;
        try { $this->analysis->advance($argument['userId'],$argument['id'],40); }
        catch (\OutOfBoundsException) { try { $this->analysis->stop($argument['userId'],$argument['id'],'failed'); } catch (\OutOfBoundsException) {} }
        catch (\Throwable $e) { $this->logger->error('Library inference analysis failed',['exception'=>$e]); try { $this->analysis->stop($argument['userId'],$argument['id'],'failed'); } catch (\OutOfBoundsException) {} }
    }
}
