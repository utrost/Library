<?php

declare(strict_types=1);

require_once __DIR__ . '/../../lib/Service/ManualCoverValidationException.php';
require_once __DIR__ . '/../../lib/Service/ManualCoverValidator.php';
require_once __DIR__ . '/../../lib/Service/ArchiveCoverService.php';

use OCA\Library\Service\ArchiveCoverService;
use OCA\Library\Service\ManualCoverValidator;

function archiveExpect(bool $condition, string $message): void {
    if (!$condition) {
        throw new RuntimeException($message);
    }
}

function archivePng(int $width = 1, int $height = 1): string {
    $chunk = static fn (string $type, string $data): string => pack('N', strlen($data)) . $type . $data
        . pack('N', (int)hexdec(hash('crc32b', $type . $data)));
    return "\x89PNG\r\n\x1a\n"
        . $chunk('IHDR', pack('NNCCCCC', $width, $height, 8, 2, 0, 0, 0))
        . $chunk('IDAT', gzcompress("\x00\x00\x00\x00"))
        . $chunk('IEND', '');
}

$root = sys_get_temp_dir() . '/library-archive-hardening-' . bin2hex(random_bytes(6));
archiveExpect(mkdir($root, 0700), 'create isolated test directory');
$tool = $root . '/7z';
$validPng = archivePng();
$toolSource = '#!' . PHP_BINARY . "\n" . <<<'PHP'
<?php
$arguments = array_slice($argv, 1);
$archiveArgument = '';
$kind = basename($argv[0]);
$listing = in_array('l', $arguments, true) || in_array('lb', $arguments, true) || in_array('-tf', $arguments, true);
$archive = '';
foreach ($arguments as $argument) {
    if (is_file($argument) && $argument !== __FILE__) {
        $archive = $argument;
        $archiveArgument = $argument;
        break;
    }
}
$mode = $archive !== '' ? trim((string)file_get_contents($archive)) : '';
if ($archiveArgument !== '') {
    file_put_contents($archive . '.argv', json_encode($arguments, JSON_UNESCAPED_SLASHES) . "\n", FILE_APPEND);
}
if ($mode === 'timeout') {
    file_put_contents($archive . '.pid', (string)getmypid());
    $childCode = <<<'CHILD'
file_put_contents($argv[1], (string)getmypid());
if (function_exists('pcntl_async_signals')) {
    pcntl_async_signals(true);
    pcntl_signal(SIGTERM, SIG_IGN);
}
while (true) { usleep(10000); }
CHILD;
    $childProcess = proc_open([PHP_BINARY, '-r', $childCode, $archive . '.child-pid'], [
        0 => ['file', '/dev/null', 'r'],
        1 => ['file', '/dev/null', 'w'],
        2 => ['file', '/dev/null', 'w'],
    ], $childPipes, null, null, ['bypass_shell' => true]);
    if (!is_resource($childProcess)) { exit(70); }
    while (!file_exists($archive . '.child-pid')) { usleep(1_000); }
    if (function_exists('pcntl_async_signals')) {
        pcntl_async_signals(true);
        pcntl_signal(SIGTERM, SIG_IGN);
    }
    while (true) { usleep(10_000); }
}
if ($listing) {
    if ($mode === 'stderr-flood') {
        fwrite(STDERR, str_repeat('e', 1024 * 1024));
        echo "Path = cover.png\nSize = 70\n";
        exit(0);
    }
    if ($mode === 'oversized-metadata') {
        echo str_repeat('x', 8192);
        exit(0);
    }
    if ($mode === 'unsafe-option') { echo "Path = -danger.png\nSize = 70\n"; exit(0); }
    if ($mode === 'unsafe-control') { echo "Path = bad\tname.png\nSize = 70\n"; exit(0); }
    if ($mode === 'unsafe-at') { echo "Path = @covers.txt\nSize = 70\n"; exit(0); }
    if ($mode === 'unsafe-glob') { echo "Path = pages/[01]*?.png\nSize = 70\n"; exit(0); }
    if ($mode === 'unsafe-drive') { echo "Path = C:cover.png\nSize = 70\n"; exit(0); }
    if ($mode === 'unsafe-unicode-control') { echo "Path = bad\u{200B}name.png\nSize = 70\n"; exit(0); }
    if ($mode === 'unsafe-utf8') { echo "Path = bad\xFFname.png\nSize = 70\n"; exit(0); }
    if ($mode === 'excessive-entries') {
        for ($i = 0; $i < 12; $i++) { echo "Path = page-$i.png\nSize = 70\n"; }
        exit(0);
    }
    if ($mode === 'expansion') { echo "Path = cover.png\nSize = 5000\n"; exit(0); }
    if (str_starts_with($mode, 'aggregate')) {
        echo "Path = one.bin\nSize = 900\nPath = two.bin\nSize = 900\nPath = cover.png\nSize = 900\n";
        exit(0);
    }
    if ($kind === '7z') { echo "Path = cover.png\nSize = 70\n"; }
    else { echo "cover.png\n"; }
    exit(0);
}
if ($mode === 'oversized-cover') { echo str_repeat('z', 2048); exit(0); }
if ($mode === 'invalid-image') { echo '<html>not an image</html>'; exit(0); }
echo base64_decode('__PNG__');
PHP;
$toolSource = str_replace('__PNG__', base64_encode($validPng), $toolSource);
archiveExpect(file_put_contents($tool, $toolSource) !== false && chmod($tool, 0700), 'create fake extractor');
$oldPath = getenv('PATH');
// Keep extractor branch selection deterministic. PHP_BINARY and setsid are
// invoked by verified absolute paths, so the fixtures need no inherited PATH.
putenv('PATH=' . $root);

$decoder = static function (string $bytes) use ($validPng): ?array {
    return $bytes === $validPng ? ['mimeType' => 'image/png', 'width' => 1, 'height' => 1] : null;
};
$service = new ArchiveCoverService(new ManualCoverValidator($decoder), [
    'wallTimeoutSeconds' => 0.20,
    'terminateGraceSeconds' => 0.05,
    'maxSourceBytes' => 1024,
    'maxEntries' => 10,
    'maxMetadataBytes' => 4096,
    'maxExtractedBytes' => 1024,
    'maxUncompressedBytes' => 4096,
    'maxExpansionRatio' => 20,
]);
$archive = $root . '/fixture.7z';
$run = static function (string $mode) use ($service, $archive): array {
    file_put_contents($archive, $mode);
    return $service->firstImageCover($archive, 'application/x-7z-compressed');
};

try {
    $capabilities = $service->environmentCapabilities();
    archiveExpect(($capabilities['sevenZipCommand'] ?? null) === realpath($tool), 'verified absolute extractor path is retained');

    $result = $run('unsafe-option');
    archiveExpect($result['content'] === null, 'option-like archive entry is rejected');
    archiveExpect($result['status'] === 'blocked-unsafe-entry', 'unsafe option has a specific status');
    archiveExpect($run('unsafe-control')['status'] === 'blocked-unsafe-entry', 'control-character entry is rejected');
    archiveExpect($run('unsafe-at')['status'] === 'blocked-unsafe-entry', '7z listfile-like entry is rejected');
    archiveExpect($run('unsafe-glob')['status'] === 'blocked-unsafe-entry', 'glob metacharacters are rejected');
    archiveExpect($run('unsafe-drive')['status'] === 'blocked-unsafe-entry', 'drive/colon entry is rejected');
    archiveExpect($run('unsafe-unicode-control')['status'] === 'blocked-unsafe-entry', 'Unicode format controls are rejected');
    archiveExpect($run('unsafe-utf8')['status'] === 'blocked-unsafe-entry', 'invalid UTF-8 is rejected');
    archiveExpect($service->isSafeEntryName('Art/été cover 01.png'), 'legitimate spaces and Unicode names remain accepted');
    archiveExpect($run('excessive-entries')['status'] === 'blocked-resource-limit', 'entry count is bounded');
    archiveExpect($run('oversized-metadata')['status'] === 'blocked-resource-limit', 'listing metadata is bounded');
    archiveExpect($run('expansion')['status'] === 'blocked-resource-limit', 'declared uncompressed expansion is bounded');
    archiveExpect($run(str_pad('aggregate', 100, '.'))['status'] === 'blocked-resource-limit', 'aggregate declared uncompressed/source ratio is bounded');
    $overflowService = new ArchiveCoverService(new ManualCoverValidator($decoder), [
        'maxUncompressedBytes' => PHP_INT_MAX,
        'maxExpansionRatio' => PHP_INT_MAX,
    ]);
    archiveExpect($overflowService->addUncompressedToAggregate(PHP_INT_MAX, 1, PHP_INT_MAX) === null, 'aggregate byte accounting rejects integer overflow');
    archiveExpect($run('oversized-cover')['status'] === 'blocked-resource-limit', 'extracted cover bytes are bounded');
    archiveExpect($run('invalid-image')['status'] === 'blocked-invalid-cover', 'archive image uses manual cover validation policy');

    $started = microtime(true);
    $timeoutResult = $run('timeout');
    $elapsed = microtime(true) - $started;
    archiveExpect($timeoutResult['status'] === 'blocked-extractor-timeout', 'hung extractor reaches timeout status');
    archiveExpect($elapsed < 2.0, 'hard wall timeout returns promptly');
    $timeoutPid = (int)file_get_contents($archive . '.pid');
    $timeoutChildPid = (int)file_get_contents($archive . '.child-pid');
    $goneDeadline = microtime(true) + 1.0;
    while (microtime(true) < $goneDeadline && (is_dir('/proc/' . $timeoutPid) || is_dir('/proc/' . $timeoutChildPid))) { usleep(10_000); }
    archiveExpect($timeoutPid > 0 && !is_dir('/proc/' . $timeoutPid), 'timed-out extractor is terminated and reaped');
    $childStat = @file_get_contents('/proc/' . $timeoutChildPid . '/stat');
    $childTerminated = !is_string($childStat)
        || preg_match('/^\d+ \(.*\) Z /', $childStat) === 1;
    archiveExpect($timeoutChildPid > 0 && $childTerminated, 'signal-ignoring extractor descendant is terminated promptly');

    $floodResult = $run('stderr-flood');
    archiveExpect($floodResult['content'] === $validPng, 'stdout and flooding stderr are drained concurrently');
    archiveExpect($floodResult['mimeType'] === 'image/png', 'validated MIME, not filename MIME, is returned');

    @unlink($archive . '.argv');
    archiveExpect($run('valid')['content'] === $validPng, 'normal external archive extraction remains functional');
    $argvLines = file($archive . '.argv', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
    $actualArgv = array_map(static fn (string $line): array => json_decode($line, true, 512, JSON_THROW_ON_ERROR), $argvLines);
    archiveExpect($actualArgv === [
        ['l', '-slt', '--', $archive],
        ['x', '-so', '--', $archive, 'cover.png'],
    ], '7z listing and extraction argv are exact and option-delimited');

    archiveExpect(chmod($tool, 0600), 'disable 7z branch fixture');
    $unrar = $root . '/unrar';
    archiveExpect(file_put_contents($unrar, $toolSource) !== false && chmod($unrar, 0700), 'create unrar branch fixture');
    clearstatcache(true);
    @unlink($archive . '.argv');
    file_put_contents($archive, 'valid');
    archiveExpect($service->firstImageCover($archive, 'application/x-rar-compressed')['content'] === $validPng, 'unrar branch remains functional');
    $unrarArgv = array_map(static fn (string $line): array => json_decode($line, true, 512, JSON_THROW_ON_ERROR), file($archive . '.argv', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: []);
    archiveExpect($unrarArgv === [['lb', $archive], ['p', '-inul', $archive, 'cover.png']], 'unrar listing and extraction argv are exact');
    @unlink($unrar);

    $bsdtar = $root . '/bsdtar';
    archiveExpect(file_put_contents($bsdtar, $toolSource) !== false && chmod($bsdtar, 0700), 'create bsdtar branch fixture');
    clearstatcache(true);
    @unlink($archive . '.argv');
    archiveExpect($run('valid')['content'] === $validPng, 'bsdtar branch remains functional');
    $bsdtarArgv = array_map(static fn (string $line): array => json_decode($line, true, 512, JSON_THROW_ON_ERROR), file($archive . '.argv', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: []);
    archiveExpect($bsdtarArgv === [['-tf', $archive, '--'], ['-xOf', $archive, '--', 'cover.png']], 'bsdtar listing and extraction argv are exact and option-delimited');

    file_put_contents($archive, str_repeat('a', 1025));
    archiveExpect($service->firstImageCover($archive, 'application/x-7z-compressed')['status'] === 'blocked-resource-limit', 'archive source bytes are bounded');

    $source = fopen('php://temp', 'w+b');
    archiveExpect(is_resource($source), 'source stream fixture');
    fwrite($source, str_repeat('a', 1025));
    rewind($source);
    $copy = $root . '/bounded-copy';
    archiveExpect($service->copyArchiveSource($source, $copy) === false, 'bounded source copy rejects excess bytes');
    fclose($source);
    archiveExpect(!file_exists($copy), 'rejected temporary source copy is cleaned');
} finally {
    putenv($oldPath === false ? 'PATH' : 'PATH=' . $oldPath);
    foreach (glob($root . '/*') ?: [] as $path) { @unlink($path); }
    @rmdir($root);
}
archiveExpect(!is_dir($root), 'test temporary files are cleaned after success and rejection');

echo "archive cover hardening runtime tests passed\n";
