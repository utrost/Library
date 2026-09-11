<?php
declare(strict_types=1);
require_once __DIR__ . '/../../lib/Instrumentation/MonotonicClock.php';
require_once __DIR__ . '/../../lib/Instrumentation/ScanProgressPolicy.php';
use OCA\Library\Instrumentation\MonotonicClock;
use OCA\Library\Instrumentation\ScanProgressPolicy;
function instrumentationExpect(bool $condition, string $message): void { if (!$condition) { throw new RuntimeException($message); } }
$now = 5_000_000_000;
$clock = new MonotonicClock(static function () use (&$now): int { return $now; });
$start = $clock->now();
$now -= 1_000_000;
instrumentationExpect($clock->elapsedMs($start) === 0, 'duration clamps a regressing fake clock');
$now = $start + 1_999_999;
instrumentationExpect($clock->elapsedMs($start) === 1, 'duration is integer floor milliseconds');
$policy = new ScanProgressPolicy($clock);
instrumentationExpect($policy->shouldPersist(0), 'initial observation persists');
instrumentationExpect(!$policy->shouldPersist(99), 'under both thresholds is throttled');
instrumentationExpect($policy->shouldPersist(100), '100 additional files persists');
$now += 999_000_000;
instrumentationExpect(!$policy->shouldPersist(199), '999ms and 99 files stays throttled');
$now += 1_000_000;
instrumentationExpect($policy->shouldPersist(199), '1000ms persists');
$now = 10_000_000_000;
$bounded = new ScanProgressPolicy($clock);
$writes = 0;
for ($i = 0; $i <= 10_000; $i++) { if ($bounded->shouldPersist($i)) { $writes++; } }
instrumentationExpect($writes === 101, '10k files needs initial plus 100 threshold writes');
fwrite(STDOUT, "performance instrumentation runtime tests: OK\n");
