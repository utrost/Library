<?php
declare(strict_types=1);
namespace OCA\Library\Instrumentation;

final class MonotonicClock {
    private \Closure $reader;

    public function __construct(?callable $reader = null) {
        $this->reader = $reader !== null ? \Closure::fromCallable($reader) : static fn (): int => hrtime(true);
    }

    public function now(): int { return (int)($this->reader)(); }

    public function elapsedMs(int $startedAt): int {
        return max(0, intdiv($this->now() - $startedAt, 1_000_000));
    }
}
