<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use Throwable;

final class SafeDiagnostics {
    private const SAFE_CONTEXT_KEYS = ['userId', 'path', 'fileId', 'itemId', 'rootId', 'jobId', 'extension'];

    /**
     * @param array<string,mixed> $context
     * @return array<string,mixed>
     */
    public static function fromThrowable(string $code, string $message, Throwable $throwable, array $context = []): array {
        return [
            'id' => self::diagnosticId($code, $throwable, $context),
            'code' => self::safeToken($code, 'unexpected_error'),
            'message' => self::boundedMessage($message),
            'throwable' => $throwable,
            'context' => self::safeContext($context),
        ];
    }

    /** @param array<string,mixed> $diagnostic */
    public static function publicText(array $diagnostic): string {
        $code = self::safeToken((string)($diagnostic['code'] ?? 'unexpected_error'), 'unexpected_error');
        $message = self::boundedMessage((string)($diagnostic['message'] ?? 'An unexpected Library error occurred.'));
        $id = self::safeToken((string)($diagnostic['id'] ?? ''), 'libdiag-unavailable');
        return sprintf('%s: %s (diagnostic: %s)', $code, $message, $id);
    }

    public static function sanitizePublicError(string $error): string {
        $error = trim($error);
        if ($error === '') {
            return '';
        }
        if (preg_match('/^([a-z0-9_]{3,80}): [^\r\n]{1,160} \(diagnostic: libdiag-[a-f0-9]{16}\)$/D', $error) === 1) {
            return $error;
        }
        if (self::looksSensitive($error)) {
            return 'metadata_extraction_failed: Metadata extraction failed. Review the source file or retry later. (diagnostic: libdiag-legacy)';
        }
        return self::truncate(preg_replace('/[\r\n\t]+/', ' ', $error) ?? $error, 160);
    }

    /** @param array<string,mixed> $diagnostic */
    public static function log(array $diagnostic): void {
        $payload = json_encode(self::logContext($diagnostic), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PARTIAL_OUTPUT_ON_ERROR);
        if (is_string($payload)) {
            error_log('library.safe_diagnostic ' . $payload);
        }
    }

    /**
     * @param array<string,mixed> $diagnostic
     * @return array<string,mixed>
     */
    public static function logContext(array $diagnostic): array {
        $throwable = $diagnostic['throwable'] ?? null;
        $context = is_array($diagnostic['context'] ?? null) ? $diagnostic['context'] : [];
        $log = [
            'diagnostic_id' => self::safeToken((string)($diagnostic['id'] ?? ''), 'libdiag-unavailable'),
            'diagnostic_code' => self::safeToken((string)($diagnostic['code'] ?? 'unexpected_error'), 'unexpected_error'),
        ];
        if ($throwable instanceof Throwable) {
            $log['exception_class'] = $throwable::class;
            $log['exception_message'] = self::truncate($throwable->getMessage(), 2000);
            $log['exception_file'] = self::truncate($throwable->getFile(), 500);
            $log['exception_line'] = $throwable->getLine();
        }
        foreach ($context as $key => $value) {
            $log[self::normalizeContextKey((string)$key)] = is_scalar($value) || $value === null
                ? self::truncate((string)$value, 500)
                : '[non-scalar]';
        }
        return $log;
    }

    /** @param array<string,mixed> $context */
    private static function diagnosticId(string $code, Throwable $throwable, array $context): string {
        $material = $code . "\n" . $throwable::class . "\n" . $throwable->getMessage() . "\n" . json_encode(self::safeContext($context), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        return 'libdiag-' . substr(hash('sha256', $material), 0, 16);
    }

    /** @param array<string,mixed> $context @return array<string,mixed> */
    private static function safeContext(array $context): array {
        $safe = [];
        foreach (self::SAFE_CONTEXT_KEYS as $key) {
            if (!array_key_exists($key, $context)) {
                continue;
            }
            $safe[self::normalizeContextKey($key)] = is_scalar($context[$key]) || $context[$key] === null
                ? self::truncate((string)$context[$key], 500)
                : '[non-scalar]';
        }
        return $safe;
    }

    private static function boundedMessage(string $message): string {
        $message = trim(preg_replace('/\s+/u', ' ', $message) ?? $message);
        return self::truncate($message, 120);
    }

    private static function safeToken(string $token, string $fallback): string {
        $token = strtolower(trim($token));
        if (!preg_match('/^[a-z0-9_.:-]{1,80}$/D', $token)) {
            return $fallback;
        }
        return $token;
    }

    private static function normalizeContextKey(string $key): string {
        $key = (string)preg_replace('/(?<!^)[A-Z]/', '_$0', $key);
        return strtolower($key);
    }

    private static function truncate(string $value, int $limit): string {
        if (strlen($value) <= $limit) {
            return $value;
        }
        return substr($value, 0, max(0, $limit - 1)) . '…';
    }

    private static function looksSensitive(string $value): bool {
        return preg_match('~(?:/[A-Za-z0-9._ -]+){2,}|[A-Za-z]:\\\\|\b(?:SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|JOIN)\b|(?:token|secret|password|passwd|api[_-]?key)\s*[=:]|\b(?:sk|ghp|github_pat|xox[baprs])_[A-Za-z0-9_\-]{6,}|Stack trace|Traceback|Exception:|\.php:\d+~i', $value) === 1;
    }
}
