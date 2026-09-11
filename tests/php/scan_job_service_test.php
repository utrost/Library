<?php
declare(strict_types=1);

namespace OCP\DB\QueryBuilder { interface IQueryBuilder { public const PARAM_STR_ARRAY = 101; } }
namespace OCP { interface IDBConnection { public function getQueryBuilder(); public function lastInsertId($table = null); } }
namespace Psr\Log { interface LoggerInterface { public function info(string $message, array $context = []): void; } }

namespace {
require_once __DIR__ . '/../../lib/Service/ScanJobService.php';

use OCA\Library\Service\ScanJobService;
use Psr\Log\LoggerInterface;

function serviceExpect(bool $condition, string $message): void { if (!$condition) { throw new RuntimeException($message); } }

final class FakeResult {
    public function __construct(private array|false $row) {}
    public function fetch(): array|false { $row = $this->row; $this->row = false; return $row; }
    public function closeCursor(): void {}
}
final class FakeExpr {
    public function eq(string $column, mixed $value): array { return ['eq', $column, $value]; }
    public function neq(string $column, mixed $value): array { return ['neq', $column, $value]; }
    public function in(string $column, mixed $value): array { return ['in', $column, $value]; }
}
final class FakeQueryBuilder {
    private string $operation = '';
    private array $sets = [];
    private array $conditions = [];
    public function __construct(private FakeDb $db) {}
    public function update(string $table): self { $this->operation = 'update'; return $this; }
    public function insert(string $table): self { $this->operation = 'insert'; return $this; }
    public function select(string ...$columns): self { $this->operation = 'select'; return $this; }
    public function from(string $table): self { return $this; }
    public function values(array $values): self { $this->sets = $values; return $this; }
    public function set(string $column, mixed $value): self { $this->sets[$column] = $value; return $this; }
    public function where(array $condition): self { $this->conditions[] = $condition; return $this; }
    public function andWhere(array $condition): self { $this->conditions[] = $condition; return $this; }
    public function orderBy(string $column, string $direction): self { return $this; }
    public function addOrderBy(string $column, string $direction): self { return $this; }
    public function setMaxResults(int $limit): self { return $this; }
    public function expr(): FakeExpr { return new FakeExpr(); }
    public function createNamedParameter(mixed $value, mixed $type = null): mixed { return $value; }
    private function matches(array $row): bool {
        foreach ($this->conditions as [$op, $column, $value]) {
            $actual = $row[$column] ?? null;
            if ($op === 'eq' && $actual !== $value) { return false; }
            if ($op === 'neq' && $actual === $value) { return false; }
            if ($op === 'in' && !in_array($actual, $value, true)) { return false; }
        }
        return true;
    }
    public function executeStatement(): int {
        if ($this->operation === 'insert') { return $this->db->insert($this->sets); }
        $this->db->injectCancellationRace($this->sets, $this->conditions);
        foreach ($this->db->rows as $id => $row) {
            if ($this->matches($row)) { $this->db->rows[$id] = [...$row, ...$this->sets]; return 1; }
        }
        return 0;
    }
    public function executeQuery(): FakeResult {
        foreach ($this->db->rows as $row) { if ($this->matches($row)) { return new FakeResult($row); } }
        return new FakeResult(false);
    }
}
final class FakeDb implements \OCP\IDBConnection {
    public array $rows = [];
    public int $lastId = 0;
    public bool $invalidLastId = false;
    public ?int $startBeforeQueuedCancellation = null;
    public ?int $finishBeforeRunningCancellation = null;
    public function getQueryBuilder(): FakeQueryBuilder { return new FakeQueryBuilder($this); }
    public function lastInsertId($table = null): int { return $this->invalidLastId ? 0 : $this->lastId; }
    public function insert(array $row): int { $this->lastId++; $row['id'] = $this->lastId; $this->rows[$this->lastId] = $row; return 1; }
    public function injectCancellationRace(array $sets, array $conditions): void {
        if (($sets['status'] ?? null) !== 'cancelled') { return; }
        $expectedStatus = null;
        foreach ($conditions as [$op, $column, $value]) {
            if ($op === 'eq' && $column === 'status') { $expectedStatus = $value; }
        }
        if ($expectedStatus === 'queued' && $this->startBeforeQueuedCancellation !== null) {
            $id = $this->startBeforeQueuedCancellation; $this->startBeforeQueuedCancellation = null;
            $this->rows[$id]['status'] = 'running'; $this->rows[$id]['run_started_at'] = time() - 2;
        }
        if ($expectedStatus === 'running' && $this->finishBeforeRunningCancellation !== null) {
            $id = $this->finishBeforeRunningCancellation; $this->finishBeforeRunningCancellation = null;
            $this->rows[$id]['status'] = 'completed'; $this->rows[$id]['duration_ms'] = 2000; $this->rows[$id]['finished_at'] = time();
        }
    }
}
final class FakeLogger implements LoggerInterface {
    public array $events = [];
    public bool $fail = false;
    public function info(string $message, array $context = []): void { if ($this->fail) { throw new RuntimeException('logger failed'); } $this->events[] = [$message, $context]; }
}

$db = new FakeDb(); $logger = new FakeLogger(); $service = new ScanJobService($db, $logger);
$queued = $service->queueJob('alice');
serviceExpect($queued['id'] === 1 && $service->markRunning('alice', 1), 'create and markRunning return concrete success');
$service->updateProgress('alice', 1, ['indexed' => 7, 'fingerprintSkips' => 3]);
serviceExpect($service->cancelJob('alice', 1), 'running cancellation succeeds');
serviceExpect(!$service->cancelJob('alice', 1), 'repeated cancellation is rejected');
serviceExpect(count($logger->events) === 1 && $logger->events[0][0] === 'library.scan.cancelled', 'successful transition owns exactly one cancellation event');
$before = $db->rows[1]; $service->updateProgress('alice', 1, ['indexed' => 99]);
serviceExpect($db->rows[1] === $before, 'stale progress cannot revive a terminal job');
serviceExpect($logger->events[0][1]['indexed'] === 7 && $logger->events[0][1]['fingerprint_skips'] === 3, 'cancel event uses persisted aggregates');
serviceExpect(!array_intersect(array_keys($logger->events[0][1]), ['user_id', 'job_id', 'root_id', 'path', 'error']), 'cancel event is privacy safe');
$expectedKeys = ['event_schema', 'scope_type', 'outcome', 'worker_metrics_available', 'queue_wait_ms', 'progress_writes', 'cancel_checks', 'roots', 'indexed', 'fingerprint_skips', 'metadata_extractions', 'item_refreshes', 'scanner_duration_ms', 'file_index_duration_ms', 'fingerprint_duration_ms', 'metadata_extraction_duration_ms', 'item_refresh_duration_ms', 'missing_update_duration_ms'];
serviceExpect(array_keys($logger->events[0][1]) === $expectedKeys, 'cancel event has the exact stable allowlist');
serviceExpect($logger->events[0][1]['worker_metrics_available'] === false, 'service-owned cancellation marks worker-only metrics unavailable');
foreach (['progress_writes', 'cancel_checks', 'file_index_duration_ms', 'fingerprint_duration_ms', 'metadata_extraction_duration_ms', 'item_refresh_duration_ms', 'missing_update_duration_ms'] as $unavailableKey) {
    serviceExpect($logger->events[0][1][$unavailableKey] === null, "cancel event does not publish unknown {$unavailableKey} as zero");
}
serviceExpect($logger->events[0][1]['queue_wait_ms'] >= 0 && $logger->events[0][1]['scanner_duration_ms'] >= 0, 'cancel event keeps derivable timing metrics numeric');
$queued2 = $service->queueJob('alice');
$db->rows[$queued2['id']]['started_at'] = time() - 3;
serviceExpect($service->cancelJob('alice', $queued2['id']) && !$service->cancelJob('alice', $queued2['id']), 'queued cancellation transitions once');
serviceExpect($db->rows[$queued2['id']]['duration_ms'] === 0, 'queued cancellation records zero duration');
serviceExpect($logger->events[1][1]['queue_wait_ms'] >= 3000, 'queued cancellation derives queue wait from persisted start and finish timestamps');
serviceExpect(count($logger->events) === 2, 'queued cancellation logs exactly once');
$runningCancellation = $service->queueJob('alice'); $service->markRunning('alice', $runningCancellation['id']);
$db->rows[$runningCancellation['id']]['run_started_at'] = time() - 2;
serviceExpect($service->cancelJob('alice', $runningCancellation['id']), 'running cancellation succeeds');
serviceExpect($db->rows[$runningCancellation['id']]['duration_ms'] >= 2000, 'running cancellation preserves elapsed duration');
$racingCancellation = $service->queueJob('alice'); $db->startBeforeQueuedCancellation = $racingCancellation['id'];
serviceExpect($service->cancelJob('alice', $racingCancellation['id']), 'queued-to-running cancellation race succeeds');
serviceExpect($db->rows[$racingCancellation['id']]['status'] === 'cancelled' && $db->rows[$racingCancellation['id']]['duration_ms'] >= 2000, 'queued-to-running cancellation race preserves elapsed duration');
serviceExpect(count($logger->events) === 4, 'each successful cancellation logs exactly once');
$terminalRace = $service->queueJob('alice'); $service->markRunning('alice', $terminalRace['id']);
$db->finishBeforeRunningCancellation = $terminalRace['id']; $eventsBeforeTerminalRace = count($logger->events);
serviceExpect(!$service->cancelJob('alice', $terminalRace['id']), 'terminal race rejects cancellation');
serviceExpect($db->rows[$terminalRace['id']]['status'] === 'completed' && count($logger->events) === $eventsBeforeTerminalRace, 'terminal race does not overwrite or log');
$running2 = $service->queueJob('alice'); $service->markRunning('alice', $running2['id']);
$service->updateProgress('alice', $running2['id'], ['roots' => 2, 'indexed' => 8, 'filesAdded' => 4, 'metadataExtractions' => 2]);
serviceExpect($service->failJob('alice', $running2['id'], 'failed', ['roots' => 2, 'indexed' => 9, 'filesAdded' => 4, 'metadataExtractions' => 3, 'scannerDurationMs' => 41]), 'running failure transitions atomically');
serviceExpect($db->rows[$running2['id']]['files_indexed'] === 9 && $db->rows[$running2['id']]['files_added'] === 4 && $db->rows[$running2['id']]['metadata_extractions'] === 3 && $db->rows[$running2['id']]['duration_ms'] === 41, 'failure preserves latest aggregate metrics and monotonic duration');
$queued3 = $service->queueJob('alice'); $logger->fail = true;
serviceExpect($service->cancelJob('alice', $queued3['id']), 'logger failure does not change queued cancellation success');
$badDb = new FakeDb(); $badDb->invalidLastId = true; $badService = new ScanJobService($badDb, new FakeLogger());
try { $badService->queueJob('alice'); throw new RuntimeException('invalid insert id did not fail closed'); }
catch (RuntimeException $e) { serviceExpect($e->getMessage() === 'Unable to resolve inserted scan job', 'invalid insert id fails closed'); }
fwrite(STDOUT, "scan job service runtime tests: OK\n");
}
