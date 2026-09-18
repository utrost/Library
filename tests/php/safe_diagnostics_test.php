<?php

declare(strict_types=1);

require_once __DIR__ . '/../../lib/Service/SafeDiagnostics.php';

use OCA\Library\Service\SafeDiagnostics;

function safeDiagnosticsExpect(bool $condition, string $message): void {
    if (!$condition) {
        throw new RuntimeException($message);
    }
}

$secretMessage = 'failed at /var/www/html/data/alice/files/Books/private.epub while running SELECT * FROM oc_users WHERE token=sk_live_1234567890abcdef';
$exception = new RuntimeException($secretMessage);
$diagnostic = SafeDiagnostics::fromThrowable('metadata_extraction_failed', 'Metadata extraction failed. Review the source file or retry later.', $exception, [
    'userId' => 'alice',
    'path' => '/Books/private.epub',
    'title' => 'Private Book Title',
]);

safeDiagnosticsExpect($diagnostic['code'] === 'metadata_extraction_failed', 'diagnostic code is stable');
safeDiagnosticsExpect($diagnostic['message'] === 'Metadata extraction failed. Review the source file or retry later.', 'safe diagnostic message is preserved');
safeDiagnosticsExpect(preg_match('/^libdiag-[a-f0-9]{16}$/', $diagnostic['id']) === 1, 'diagnostic id is bounded and correlatable');

$publicText = SafeDiagnostics::publicText($diagnostic);
safeDiagnosticsExpect(str_contains($publicText, 'metadata_extraction_failed'), 'public text contains the stable code');
safeDiagnosticsExpect(str_contains($publicText, $diagnostic['id']), 'public text contains the diagnostic id');
safeDiagnosticsExpect(!str_contains($publicText, '/var/www/html'), 'public text does not expose absolute paths');
safeDiagnosticsExpect(!str_contains($publicText, 'SELECT *'), 'public text does not expose SQL fragments');
safeDiagnosticsExpect(!str_contains($publicText, 'sk_live_'), 'public text does not expose token-looking text');
safeDiagnosticsExpect(!str_contains($publicText, 'Private Book Title'), 'public text does not expose publication metadata');

$logContext = SafeDiagnostics::logContext($diagnostic);
safeDiagnosticsExpect($logContext['diagnostic_id'] === $diagnostic['id'], 'log context carries diagnostic id');
safeDiagnosticsExpect($logContext['diagnostic_code'] === 'metadata_extraction_failed', 'log context carries diagnostic code');
safeDiagnosticsExpect($logContext['exception_class'] === RuntimeException::class, 'log context carries exception class');
safeDiagnosticsExpect(str_contains($logContext['exception_message'], '/var/www/html'), 'server log context keeps raw exception detail');
safeDiagnosticsExpect(str_contains($logContext['exception_message'], 'SELECT *'), 'server log context keeps parser/database detail');
safeDiagnosticsExpect(str_contains($logContext['exception_message'], 'sk_live_'), 'server log context keeps raw token-like detail for server-only debugging');
safeDiagnosticsExpect(!array_key_exists('title', $logContext), 'publication metadata is not copied to log context');
safeDiagnosticsExpect(($logContext['user_id'] ?? '') === 'alice', 'low-risk context keeps user id');
safeDiagnosticsExpect(($logContext['path'] ?? '') === '/Books/private.epub', 'low-risk context keeps app-relative path');

$short = SafeDiagnostics::fromThrowable('root_scan_failed', 'Library root scan failed. Check server logs with the diagnostic id.', $exception);
safeDiagnosticsExpect(strlen(SafeDiagnostics::publicText($short)) < 180, 'public text stays bounded');

echo "safe diagnostics tests passed\n";
