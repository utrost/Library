<?php
declare(strict_types=1);
namespace OCA\Library\Instrumentation;

final class ScanProgressPolicy {
    private ?int $lastFiles = null;
    private ?int $lastAt = null;

    public function __construct(private MonotonicClock $clock) {}

    public function shouldPersist(int $files): bool {
        $now = $this->clock->now();
        if ($this->lastFiles === null || $files - $this->lastFiles >= 100 || $now - (int)$this->lastAt >= 1_000_000_000) {
            $this->lastFiles = $files;
            $this->lastAt = $now;
            return true;
        }
        return false;
    }
}
