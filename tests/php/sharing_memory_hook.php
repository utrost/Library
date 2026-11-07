<?php
// auto_prepend_file on a disposable instance only. Never installed on a developer/user instance.
$tag = $_SERVER['HTTP_X_LIBRARY_FIXTURE_MEASURE'] ?? '';
if (getenv('LIBRARY_DISPOSABLE_FIXTURE') !== '1' || !preg_match('/^[a-z0-9-]{1,40}$/D', $tag)) return;
$started = hrtime(true);
register_shutdown_function(static function () use ($tag, $started): void {
    file_put_contents('/tmp/library-sharing-memory.jsonl', json_encode([
        'tag' => $tag, 'ms' => (hrtime(true) - $started) / 1e6,
        'peakBytes' => memory_get_peak_usage(true), 'usedPeakBytes' => memory_get_peak_usage(false),
        'status' => http_response_code(),
    ], JSON_THROW_ON_ERROR) . "\n", FILE_APPEND | LOCK_EX);
});
