<?php
declare(strict_types=1);

namespace OCP\AppFramework\Utility { interface ITimeFactory {} }
namespace OCP\BackgroundJob {
    abstract class QueuedJob {
        public function __construct(mixed $time) {}
        protected function setAllowParallelRuns(bool $allow): void {}
        abstract public function run($argument): void;
    }
}
namespace Psr\Log {
    interface LoggerInterface {
        public function emergency(string|\Stringable $message, array $context = []): void;
        public function alert(string|\Stringable $message, array $context = []): void;
        public function critical(string|\Stringable $message, array $context = []): void;
        public function error(string|\Stringable $message, array $context = []): void;
        public function warning(string|\Stringable $message, array $context = []): void;
        public function notice(string|\Stringable $message, array $context = []): void;
        public function info(string|\Stringable $message, array $context = []): void;
        public function debug(string|\Stringable $message, array $context = []): void;
        public function log($level, string|\Stringable $message, array $context = []): void;
    }
}
namespace OCA\Library\Service {
    class LibraryScanner {
        public array $calls = [];
        public ?\Closure $duringScan = null;
        public array $progressUnits = [0];
        public function scan(string $userId, ?int $rootId, ?callable $progress): array {
            $this->calls[] = ['scan', $userId, $rootId];
            if ($progress !== null) { foreach ($this->progressUnits as $unit) { $progress(['roots' => 1, 'indexed' => 0, 'traversalUnits' => $unit, 'errors' => 0]); } }
            if ($this->duringScan !== null) { ($this->duringScan)(); }
            return ['roots' => 1, 'indexed' => 1, 'errors' => []];
        }
        public function retryMetadataErrors(string $userId, ?callable $progress): array { $this->calls[] = ['retry', $userId, null]; return ['roots' => 1, 'indexed' => 1, 'errors' => []]; }
        public function recheckMissingFiles(string $userId, ?callable $progress): array { $this->calls[] = ['missing', $userId, null]; return ['roots' => 1, 'indexed' => 1, 'errors' => []]; }
    }
    class ScanJobService {
        public array $job = [];
        public string $status = 'queued';
        public int $finishes = 0;
        public int $failures = 0;
        public int $cancelChecks = 0;
        public function isCancelled(string $userId, int $jobId): bool { $this->cancelChecks++; return $this->status === 'cancelled'; }
        public function getJob(string $userId, int $jobId): ?array { return $this->job === [] ? null : $this->job; }
        public function markRunning(string $userId, int $jobId): bool { if ($this->status !== 'queued') return false; $this->status = 'running'; return true; }
        public function updateProgress(string $userId, int $jobId, array $progress): void {}
        public function finishJob(string $userId, int $jobId, array $result): bool { $this->finishes++; if ($this->status !== 'running') return false; $this->status = 'completed'; return true; }
        public function failJob(string $userId, int $jobId, string $error, array $metrics = []): bool { $this->failures++; if ($this->status !== 'running') return false; $this->status = 'failed'; return true; }
    }
}
namespace {
    require_once __DIR__ . '/../../lib/Exception/ScanCancelledException.php';
    require_once __DIR__ . '/../../lib/Instrumentation/MonotonicClock.php';
    require_once __DIR__ . '/../../lib/Instrumentation/ScanProgressPolicy.php';
    require_once __DIR__ . '/../../lib/BackgroundJob/ScanJob.php';

    use OCA\Library\BackgroundJob\ScanJob;
    use OCA\Library\Instrumentation\MonotonicClock;
    use OCA\Library\Service\LibraryScanner;
    use OCA\Library\Service\ScanJobService;
    use Psr\Log\LoggerInterface;

    function scanJobExpect(bool $condition, string $message): void { if (!$condition) throw new RuntimeException($message); }
    final class TimeStub implements \OCP\AppFramework\Utility\ITimeFactory {}
    final class LoggerStub implements LoggerInterface {
        public array $events = []; public bool $throw = false;
        private function add(string $level, string|\Stringable $message, array $context): void { if ($this->throw) throw new RuntimeException('logger failed'); $this->events[] = [$level, (string)$message, $context]; }
        public function emergency(string|\Stringable $message, array $context = []): void {$this->add('emergency',$message,$context);} public function alert(string|\Stringable $message, array $context = []): void {$this->add('alert',$message,$context);} public function critical(string|\Stringable $message, array $context = []): void {$this->add('critical',$message,$context);} public function error(string|\Stringable $message, array $context = []): void {$this->add('error',$message,$context);} public function warning(string|\Stringable $message, array $context = []): void {$this->add('warning',$message,$context);} public function notice(string|\Stringable $message, array $context = []): void {$this->add('notice',$message,$context);} public function info(string|\Stringable $message, array $context = []): void {$this->add('info',$message,$context);} public function debug(string|\Stringable $message, array $context = []): void {$this->add('debug',$message,$context);} public function log($level, string|\Stringable $message, array $context = []): void {$this->add((string)$level,$message,$context);}
    }
    function executeJob(array $persisted, array $argument, ?callable $during = null, bool $loggerThrows = false): array {
        $scanner = new LibraryScanner(); $service = new ScanJobService(); $logger = new LoggerStub();
        $service->job = $persisted + ['startedAt' => time(), 'scopeType' => 'all', 'rootId' => null];
        $scanner->duringScan = $during === null ? null : \Closure::fromCallable($during);
        $logger->throw = $loggerThrows; $now = 1_000_000_000;
        $job = new ScanJob(new TimeStub(), $scanner, $service, $logger, new MonotonicClock(static fn (): int => $now));
        $job->run($argument);
        return [$scanner, $service, $logger];
    }

    [$scanner, $service] = executeJob(['scopeType' => 'root', 'rootId' => 41], ['userId' => 'alice', 'jobId' => 7, 'scopeType' => 'all', 'rootId' => 99]);
    scanJobExpect($scanner->calls === [['scan', 'alice', 41]], 'persisted root is the only root authority');
    scanJobExpect($service->cancelChecks === 3, 'initial progress run checks before start, at persisted progress, and before completion');
    [$scanner] = executeJob(['scopeType' => 'all', 'rootId' => 41], ['userId' => 'alice', 'jobId' => 7, 'rootId' => 99]);
    scanJobExpect($scanner->calls === [['scan', 'alice', null]], 'non-root persisted scope forces null root');
    [$scanner, $service, $logger] = executeJob(['scopeType' => 'root', 'rootId' => 0], ['userId' => 'alice', 'jobId' => 7]);
    scanJobExpect($scanner->calls === [] && $service->status === 'failed' && $service->failures === 1, 'invalid persisted root fails without scanning');
    scanJobExpect(count($logger->events) === 1 && $logger->events[0][1] === 'library.scan.failed', 'invalid root emits one failed terminal event');
    scanJobExpect(!array_intersect(array_keys($logger->events[0][2]), ['user_id','job_id','root_id','path','error']), 'failed event is privacy safe');

    $raceService = null;
    $scanner = new LibraryScanner(); $raceService = new ScanJobService(); $logger = new LoggerStub();
    $raceService->job = ['startedAt' => time(), 'scopeType' => 'all', 'rootId' => null];
    $scanner->duringScan = static function () use (&$raceService): void { $raceService->status = 'cancelled'; };
    (new ScanJob(new TimeStub(), $scanner, $raceService, $logger))->run(['userId' => 'alice', 'jobId' => 8]);
    scanJobExpect($raceService->finishes === 0 && $raceService->failures === 0 && $logger->events === [], 'cancellation owns terminal state after final callback');
    scanJobExpect($raceService->cancelChecks === 3, 'final cancellation is counted as an actual check');

    $scanner = new LibraryScanner(); $scanner->progressUnits = [0, 1, 99, 100];
    $throttledService = new ScanJobService(); $throttledService->job = ['startedAt' => time(), 'scopeType' => 'all', 'rootId' => null];
    $throttledLogger = new LoggerStub();
    (new ScanJob(new TimeStub(), $scanner, $throttledService, $throttledLogger))->run(['userId' => 'alice', 'jobId' => 10]);
    scanJobExpect($throttledService->cancelChecks === 4, 'only initial, throttled, and final progress boundaries check cancellation');
    scanJobExpect($throttledLogger->events[0][2]['cancel_checks'] === 4, 'logged cancellation checks exactly match runtime calls');

    [$scanner, $service, $logger] = executeJob(['scopeType' => 'all'], ['userId' => 'alice', 'jobId' => 9], null, true);
    scanJobExpect($service->status === 'completed' && $service->finishes === 1 && $service->failures === 0, 'logger failure cannot retry or strand completed work');
    fwrite(STDOUT, "scan job production runtime tests: OK\n");
}
