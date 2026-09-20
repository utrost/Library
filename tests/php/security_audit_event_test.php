<?php

declare(strict_types=1);

namespace Psr\Log {
    if (!interface_exists(LoggerInterface::class)) {
        interface LoggerInterface {
            public function emergency($message, array $context = []): void;
            public function alert($message, array $context = []): void;
            public function critical($message, array $context = []): void;
            public function error($message, array $context = []): void;
            public function warning($message, array $context = []): void;
            public function notice($message, array $context = []): void;
            public function info($message, array $context = []): void;
            public function debug($message, array $context = []): void;
            public function log($level, $message, array $context = []): void;
        }
    }
}

namespace {
require_once dirname(__DIR__, 2) . '/lib/Service/SecurityAuditLogger.php';

use OCA\Library\Service\SecurityAuditLogger;
use Psr\Log\LoggerInterface;

final class CapturingAuditLogger implements LoggerInterface {
    /** @var array<int,array{level:string,message:string,context:array<string,mixed>}> */
    public array $records = [];
    public function emergency($message, array $context = []): void { $this->records[] = ['level' => 'emergency', 'message' => (string)$message, 'context' => $context]; }
    public function alert($message, array $context = []): void { $this->records[] = ['level' => 'alert', 'message' => (string)$message, 'context' => $context]; }
    public function critical($message, array $context = []): void { $this->records[] = ['level' => 'critical', 'message' => (string)$message, 'context' => $context]; }
    public function error($message, array $context = []): void { $this->records[] = ['level' => 'error', 'message' => (string)$message, 'context' => $context]; }
    public function warning($message, array $context = []): void { $this->records[] = ['level' => 'warning', 'message' => (string)$message, 'context' => $context]; }
    public function notice($message, array $context = []): void { $this->records[] = ['level' => 'notice', 'message' => (string)$message, 'context' => $context]; }
    public function info($message, array $context = []): void { $this->records[] = ['level' => 'info', 'message' => (string)$message, 'context' => $context]; }
    public function debug($message, array $context = []): void { $this->records[] = ['level' => 'debug', 'message' => (string)$message, 'context' => $context]; }
    public function log($level, $message, array $context = []): void { $this->records[] = ['level' => (string)$level, 'message' => (string)$message, 'context' => $context]; }
}

function auditExpect(bool $condition, string $message): void {
    if (!$condition) {
        fwrite(STDERR, "Security audit event test failed: {$message}\n");
        exit(1);
    }
}

$logger = new CapturingAuditLogger();
$audit = new SecurityAuditLogger($logger, null);
$audit->warning('metadata.import.preview', 'alice', 'preview', 'metadata_import', 'rejected', [
    'target_count' => 250,
    'http_status' => 413,
    'reason' => 'payload_too_large',
    'metadataJson' => '{"secret":"raw metadata must not appear"}',
    'path' => '/alice/files/private.pdf',
    'filename' => '=payload.csv',
    'token' => 'abc123',
]);

auditExpect(count($logger->records) === 1, 'event is emitted');
$record = $logger->records[0];
auditExpect($record['level'] === 'warning', 'rejection uses warning level');
auditExpect($record['message'] === 'library.security_audit.metadata.import.preview', 'event name is structured');
$context = $record['context'];
foreach (['event_schema', 'app', 'event', 'actor_id', 'operation', 'target_type', 'target_count', 'outcome', 'reason', 'request_id', 'correlation_id', 'http_status'] as $key) {
    auditExpect(array_key_exists($key, $context), "context contains {$key}");
}
auditExpect($context['app'] === 'library', 'app is identified');
auditExpect($context['actor_id'] === 'alice', 'actor is identified');
auditExpect($context['outcome'] === 'rejected', 'outcome is distinguishable');
auditExpect(str_starts_with((string)$context['correlation_id'], 'libaudit-'), 'correlation id is bounded and recognizable');
$json = json_encode($context, JSON_THROW_ON_ERROR);
foreach (['raw metadata', '/alice/files', '=payload', 'abc123', 'metadataJson', 'filename', 'path', 'token'] as $secret) {
    auditExpect(strpos($json, $secret) === false, "privacy allowlist excludes {$secret}");
}

$throwingLogger = new class implements LoggerInterface {
    public function emergency($message, array $context = []): void { throw new RuntimeException('boom'); }
    public function alert($message, array $context = []): void { throw new RuntimeException('boom'); }
    public function critical($message, array $context = []): void { throw new RuntimeException('boom'); }
    public function error($message, array $context = []): void { throw new RuntimeException('boom'); }
    public function warning($message, array $context = []): void { throw new RuntimeException('boom'); }
    public function notice($message, array $context = []): void { throw new RuntimeException('boom'); }
    public function info($message, array $context = []): void { throw new RuntimeException('boom'); }
    public function debug($message, array $context = []): void { throw new RuntimeException('boom'); }
    public function log($level, $message, array $context = []): void { throw new RuntimeException('boom'); }
};
(new SecurityAuditLogger($throwingLogger, null))->info('root.delete', 'alice', 'delete', 'root', 'success', ['target_id' => 12]);

auditExpect(true, 'logging failures do not break callers');
echo "security audit event runtime tests passed\n";
}

