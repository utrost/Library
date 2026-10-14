<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCA\Library\BackgroundJob\ScanJob;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\IJobList;
use OCP\IDBConnection;
use OCP\IUserManager;
use Psr\Log\LoggerInterface;
use OCA\Library\Metadata\PublicationMetadataService;

/** A bounded scheduler; actual file traversal is performed by the existing scan worker. */
final class ScheduledScanService {
    public const INTERVALS = [0, 3600, 21600, 86400];
    public const FULL_RECONCILIATION_SECONDS = 7 * 86400;
    public function __construct(
        private IDBConnection $db,
        private ScanJobService $scans,
        private IJobList $jobs,
        private IUserManager $users,
        private ITimeFactory $time,
        private LoggerInterface $logger,
    ) {}

    public function status(string $uid): array {
        $r = $this->db->executeQuery('SELECT interval_seconds, next_run_at, last_job_id, last_full_at, last_full_revision, last_full_roots_hash FROM *PREFIX*library_scan_schedule WHERE user_id = ?', [$uid]);
        $row = $r->fetch(); $r->closeCursor();
        return ['interval' => (int)($row['interval_seconds'] ?? 0), 'nextRunAt' => (int)($row['next_run_at'] ?? 0), 'lastJobId' => (int)($row['last_job_id'] ?? 0), 'lastFullAt' => (int)($row['last_full_at'] ?? 0), 'lastFullRevision' => $row['last_full_revision'] ?? null, 'lastFullRootsHash' => $row['last_full_roots_hash'] ?? null];
    }

    private function lock(string $uid): void {
        if ($this->db->getDatabaseProvider() === 'sqlite') {
            $this->db->executeStatement('UPDATE *PREFIX*library_scan_schedule SET next_run_at = next_run_at WHERE user_id = ?', [$uid]);
        } else {
            $r = $this->db->executeQuery('SELECT user_id FROM *PREFIX*library_scan_schedule WHERE user_id = ? FOR UPDATE', [$uid]);
            $r->fetch(); $r->closeCursor();
        }
    }

    public function configure(string $uid, int $interval): array {
        if ($uid === '' || !in_array($interval, self::INTERVALS, true)) throw new \InvalidArgumentException('invalid_scan_interval');
        $this->db->insertIfNotExist('*PREFIX*library_scan_schedule', ['user_id' => $uid, 'interval_seconds' => 0, 'next_run_at' => 0, 'last_job_id' => 0, 'last_full_at' => 0, 'last_full_revision' => null, 'last_full_roots_hash' => null], ['user_id']);
        $this->db->beginTransaction();
        try {
            $this->lock($uid); $old = $this->status($uid);
            if ($old['interval'] !== $interval) {
                $this->db->executeStatement('UPDATE *PREFIX*library_scan_schedule SET interval_seconds = ?, next_run_at = ? WHERE user_id = ?', [$interval, $interval ? $this->time->getTime() + $interval : 0, $uid]);
            }
            // Turning off cancels only our queued scan. A running scan can be cancelled in scan history.
            if ($interval === 0 && $old['lastJobId'] > 0) {
                $this->db->executeStatement('UPDATE *PREFIX*library_scan_jobs SET status = ?, summary = ?, finished_at = ? WHERE user_id = ? AND id = ? AND status = ?', ['cancelled', 'Queued scheduled scan cancelled', $this->time->getTime(), $uid, $old['lastJobId'], 'queued']);
            }
            $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
        return $this->status($uid);
    }

    public function runDue(): array {
        $now = $this->time->getTime();
        $r = $this->db->executeQuery('SELECT user_id FROM *PREFIX*library_scan_schedule WHERE next_run_at > 0 AND next_run_at <= ? ORDER BY next_run_at, user_id LIMIT 50', [$now]);
        $users = array_column($r->fetchAll(), 'user_id'); $r->closeCursor();
        $result = ['considered' => count($users), 'queued' => 0, 'deferred' => 0, 'skipped' => 0, 'errors' => 0];
        foreach ($users as $uid) {
            $this->db->beginTransaction();
            try {
                $this->lock($uid); $state = $this->status($uid);
                if (!$state['interval'] || !$state['nextRunAt'] || $state['nextRunAt'] > $now) { $this->db->commit(); continue; }
                $user = $this->users->get($uid);
                $r = $this->db->executeQuery('SELECT id FROM *PREFIX*library_roots WHERE user_id = ? AND enabled = 1 LIMIT 1', [$uid]);
                $hasRoots = (bool)$r->fetchOne(); $r->closeCursor();
                if (!$user || !$user->isEnabled() || !$hasRoots) {
                    $this->postpone($uid, $now + $state['interval']); $result['skipped']++;
                } else {
                    $this->scans->recoverStaleRunningJobs($uid);
                    $r = $this->db->executeQuery('SELECT id FROM *PREFIX*library_scan_jobs WHERE user_id = ? AND status IN (?, ?) LIMIT 1', [$uid, 'queued', 'running']);
                    $active = (bool)$r->fetchOne(); $r->closeCursor();
                    if ($active) {
                        $this->postpone($uid, $now + 300); $result['deferred']++;
                    } else {
                        $scope = $this->needsFullReconciliation($uid, $state['lastFullAt'], $state['lastFullRevision'], $state['lastFullRootsHash'], $now) ? 'all' : 'incremental';
                        $job = $this->scans->queueJob($uid, $scope);
                        $this->jobs->add(ScanJob::class, ['userId' => $uid, 'jobId' => (int)$job['id'], 'scheduled' => true]);
                        $this->db->executeStatement('UPDATE *PREFIX*library_scan_schedule SET next_run_at = ?, last_job_id = ? WHERE user_id = ?', [$now + $state['interval'], (int)$job['id'], $uid]);
                        $result['queued']++;
                    }
                }
                $this->db->commit();
            } catch (\Throwable $e) {
                $this->db->rollBack(); $result['errors']++;
                $this->logger->error('Library scheduled scan could not be queued', ['user_id' => $uid, 'exception' => $e]);
            }
        }
        return $result;
    }

    private function postpone(string $uid, int $until): void {
        $this->db->executeStatement('UPDATE *PREFIX*library_scan_schedule SET next_run_at = ? WHERE user_id = ?', [$until, $uid]);
    }

    public static function currentRevision(): string {
        return PublicationMetadataService::PIPELINE_REVISION . ':' . ItemService::SCANNER_INDEX_REVISION;
    }

    public static function rootsDigest(IDBConnection $db, string $uid): string {
        $r = $db->executeQuery('SELECT id,path FROM *PREFIX*library_roots WHERE user_id = ? AND enabled = 1 ORDER BY id', [$uid]);
        $hash = hash_init('sha256');
        while ($row = $r->fetch()) hash_update($hash, (int)$row['id'] . "\0" . (string)$row['path'] . "\n");
        $r->closeCursor();
        return hash_final($hash);
    }

    private function needsFullReconciliation(string $uid, int $lastFullAt, ?string $revision, ?string $rootsHash, int $now): bool {
        return $lastFullAt <= 0 || $revision !== self::currentRevision()
            || $rootsHash !== self::rootsDigest($this->db, $uid)
            || $now - $lastFullAt >= self::FULL_RECONCILIATION_SECONDS;
    }
}
