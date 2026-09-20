<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\IRequest;
use Psr\Log\LoggerInterface;
use Throwable;

final class SecurityAuditLogger {
    private const SCHEMA_VERSION = 1;
    private const MAX_STRING_BYTES = 96;
    private const ALLOWED_KEYS = [
        'event_schema' => true,
        'app' => true,
        'event' => true,
        'actor_id' => true,
        'operation' => true,
        'target_type' => true,
        'target_id' => true,
        'target_count' => true,
        'outcome' => true,
        'reason' => true,
        'request_id' => true,
        'correlation_id' => true,
        'http_status' => true,
        'limit_name' => true,
        'limit_value' => true,
        'duration_ms' => true,
    ];
    private const SECRET_KEY_PATTERN = '/(token|secret|password|credential|comment|metadata|json|path|filename|bytes|content|data)/i';

    public function __construct(private LoggerInterface $logger, private ?IRequest $request = null) {
    }

    /** @param array<string,mixed> $context */
    public function info(string $event, string $actorId, string $operation, string $targetType, string $outcome, array $context = []): void {
        $this->log('info', $event, $actorId, $operation, $targetType, $outcome, $context);
    }

    /** @param array<string,mixed> $context */
    public function warning(string $event, string $actorId, string $operation, string $targetType, string $outcome, array $context = []): void {
        $this->log('warning', $event, $actorId, $operation, $targetType, $outcome, $context);
    }

    /** @param array<string,mixed> $context */
    public function log(string $level, string $event, string $actorId, string $operation, string $targetType, string $outcome, array $context = []): void {
        try {
            $safe = $this->safeContext($event, $actorId, $operation, $targetType, $outcome, $context);
            $method = in_array($level, ['debug', 'info', 'notice', 'warning', 'error', 'critical', 'alert', 'emergency'], true) ? $level : 'info';
            $this->logger->{$method}('library.security_audit.' . $this->sanitizeEventName($event), $safe);
        } catch (Throwable) {
            // Security logging must never break the protected user operation.
        }
    }

    /** @param array<string,mixed> $context */
    public function safeContext(string $event, string $actorId, string $operation, string $targetType, string $outcome, array $context = []): array {
        $safe = [
            'event_schema' => self::SCHEMA_VERSION,
            'app' => 'library',
            'event' => $this->sanitizeEventName($event),
            'actor_id' => $this->boundedString($actorId === '' ? 'unknown' : $actorId),
            'operation' => $this->sanitizeToken($operation),
            'target_type' => $this->sanitizeToken($targetType),
            'outcome' => $this->sanitizeOutcome($outcome),
            'request_id' => $this->requestId(),
        ];
        $safe['correlation_id'] = $this->correlationId((string)$safe['event'], (string)$safe['request_id']);

        foreach ($context as $key => $value) {
            if (!is_string($key) || !isset(self::ALLOWED_KEYS[$key]) || preg_match(self::SECRET_KEY_PATTERN, $key) === 1) {
                continue;
            }
            if (in_array($key, ['event_schema', 'app', 'event', 'actor_id', 'operation', 'target_type', 'outcome', 'request_id', 'correlation_id'], true)) {
                continue;
            }
            $safe[$key] = $this->sanitizeValue($value);
        }
        return $safe;
    }

    private function sanitizeValue(mixed $value): int|float|string|bool|null {
        if (is_bool($value) || $value === null) { return $value; }
        if (is_int($value)) { return max(-1_000_000_000, min(1_000_000_000, $value)); }
        if (is_float($value)) { return max(-1_000_000_000.0, min(1_000_000_000.0, $value)); }
        if (is_scalar($value)) { return $this->boundedString((string)$value); }
        return 'non_scalar_redacted';
    }

    private function sanitizeEventName(string $event): string {
        $event = strtolower($event);
        $event = preg_replace('/[^a-z0-9_.-]+/', '_', $event) ?? 'unknown';
        $event = trim($event, '._-');
        return $event === '' ? 'unknown' : substr($event, 0, 80);
    }

    private function sanitizeToken(string $value): string {
        $value = strtolower(trim($value));
        $value = preg_replace('/[^a-z0-9_.-]+/', '_', $value) ?? 'unknown';
        $value = trim($value, '._-');
        return $value === '' ? 'unknown' : substr($value, 0, 64);
    }

    private function sanitizeOutcome(string $outcome): string {
        $outcome = $this->sanitizeToken($outcome);
        return in_array($outcome, ['success', 'failure', 'rejected', 'blocked', 'not_authenticated', 'not_authorized', 'partial'], true) ? $outcome : 'unknown';
    }

    private function boundedString(string $value): string {
        $value = preg_replace('/[\x00-\x1F\x7F]+/', ' ', $value) ?? '';
        $value = trim($value);
        if (strlen($value) <= self::MAX_STRING_BYTES) {
            return $value;
        }
        return substr($value, 0, self::MAX_STRING_BYTES) . '…';
    }

    private function requestId(): string {
        try {
            if ($this->request !== null && method_exists($this->request, 'getId')) {
                $id = (string)$this->request->getId();
                if ($id !== '') { return $this->boundedString($id); }
            }
        } catch (Throwable) {
        }
        return 'unavailable';
    }

    private function correlationId(string $event, string $requestId): string {
        return 'libaudit-' . substr(hash('sha256', $event . '|' . $requestId . '|' . random_int(0, PHP_INT_MAX)), 0, 16);
    }
}
