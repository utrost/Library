<?php
declare(strict_types=1);
namespace OCA\Library\BackgroundJob;
use OCP\BackgroundJob\QueuedJob;
use OCP\BackgroundJob\IJobList;
use OCP\AppFramework\Utility\ITimeFactory;
use OCA\Library\Service\DuplicateIndexService;
use Psr\Log\LoggerInterface;
final class DuplicateIndexJob extends QueuedJob {
    public function __construct(ITimeFactory $time,private DuplicateIndexService $index,private IJobList $jobs,private LoggerInterface $logger){parent::__construct($time);$this->setAllowParallelRuns(false);}
    public function run($argument):void {
        if(!is_string($argument['userId']??null))return;$uid=$argument['userId'];
        try{$deadline=microtime(true)+5;do{$state=$this->index->advance($uid);}while($state['status']==='building'&&microtime(true)<$deadline);if($state['status']==='building')$this->jobs->add(self::class,['userId'=>$uid,'cursor'=>$state['cursor']]);}
        catch(\Throwable $e){$this->index->fail($uid);$this->logger->error('Library duplicate suggestion index failed',['exception'=>$e]);}
    }
}
