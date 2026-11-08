<?php
declare(strict_types=1);
namespace OCA\Library\BackgroundJob;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;
use OCA\Library\Service\{CurationJobService,ChangeHistoryService};
use Psr\Log\LoggerInterface;
final class CurationJob extends TimedJob {
    public function __construct(ITimeFactory $time,private CurationJobService $jobs,private ChangeHistoryService $history,private LoggerInterface $logger,private \OCA\Library\Service\WriteBackService $writeBack,private \OCA\Library\Service\CurationPortabilityService $portability,private \OCA\Library\Service\HomeHealthSnapshot $homeHealth) { parent::__construct($time);$this->setInterval(30);$this->setAllowParallelRuns(false); }
    public function run($argument): void {
        // One unavailable storage or cleanup task must not stall unrelated reviewed work.
        foreach ([
            'Home health refresh'=>fn()=>$this->homeHealth->refreshOne(),
            'archive cleanup'=>fn()=>$this->portability->expire(),
            'write-back cleanup'=>fn()=>$this->writeBack->expire(),
            'organisation cleanup'=>fn()=>$this->jobs->expire(),
            'history cleanup'=>fn()=>$this->history->expire(),
        ] as $name=>$work) {
            try { $work(); } catch (\Throwable) { $this->logger->warning('Library '.$name.' interrupted; it will retry.'); }
        }
        $deadline=microtime(true)+20;$organisationAvailable=true;$archivesAvailable=true;
        while (microtime(true)<$deadline) {
            $organisationProgress=false;$archiveProgress=false;
            if ($organisationAvailable) {
                try { $organisationProgress=$this->jobs->advance(); }
                catch (\Throwable) { $organisationAvailable=false;$this->logger->warning('Library organisation worker interrupted; inspect its private status.'); }
            }
            if ($archivesAvailable && microtime(true)<$deadline) {
                try { $archiveProgress=$this->portability->advance(); }
                catch (\Throwable) { $archivesAvailable=false;$this->logger->warning('Library archive worker interrupted; inspect its private status.'); }
            }
            if (!$organisationProgress && !$archiveProgress) break;
        }
    }
}
