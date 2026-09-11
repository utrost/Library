<?php

declare(strict_types=1);

require_once __DIR__ . '/../../lib/Metadata/MetadataInputFingerprint.php';
require_once __DIR__ . '/../../lib/Metadata/MetadataFastPathDecision.php';

use OCA\Library\Metadata\MetadataFastPathDecision;
use OCA\Library\Metadata\MetadataInputFingerprint;

function expect(bool $condition, string $message): void {
    if (!$condition) {
        throw new RuntimeException($message);
    }
}

function primary(array $overrides = []): array {
    return array_replace([
        'rootId' => 7,
        'fileId' => 42,
        'path' => '/Books/Example.pdf',
        'etag' => 'stable-primary-etag',
        'mimeType' => 'application/pdf',
        'extension' => 'pdf',
        'mtime' => 1_725_000_001,
        'size' => 12345,
    ], $overrides);
}

function sidecar(array $overrides = []): array {
    return array_replace([
        'rootId' => 7,
        'fileId' => 43,
        'path' => '/Books/Example.opf',
        'etag' => 'stable-sidecar-etag',
        'mimeType' => 'application/oebps-package+xml',
        'extension' => 'opf',
        'mtime' => 1_725_000_002,
        'size' => 456,
    ], $overrides);
}

$baseline = MetadataInputFingerprint::fromObservations(primary(), null);
expect(is_string($baseline) && strlen($baseline) === 64, 'valid primary returns sha256');
expect($baseline === MetadataInputFingerprint::fromObservations(primary(), null), 'same canonical input is deterministic');
expect(MetadataInputFingerprint::fromObservations(primary(['path' => "/Books/Invalid-\xFF.pdf"]), null) === null, 'invalid UTF-8 fails closed');
foreach (['path', 'etag'] as $identityKey) {
    $identityValue = primary()[$identityKey];
    expect(
        MetadataInputFingerprint::fromObservations(primary([$identityKey => " {$identityValue}"]), null) !== $baseline,
        "primary {$identityKey} leading whitespace changes hash",
    );
    expect(
        MetadataInputFingerprint::fromObservations(primary([$identityKey => "{$identityValue} "]), null) !== $baseline,
        "primary {$identityKey} trailing whitespace changes hash",
    );
}

$invalidPrimarySignals = [
    ['rootId', 0], ['rootId', -1], ['fileId', 0], ['fileId', -1],
    ['path', ''], ['path', '   '], ['etag', ''], ['etag', '   '],
    ['mimeType', ''], ['mimeType', '   '], ['extension', ''], ['extension', '   '],
    ['mtime', 0], ['mtime', -1], ['size', -1],
];
foreach ($invalidPrimarySignals as [$key, $value]) {
    expect(MetadataInputFingerprint::fromObservations(primary([$key => $value]), null) === null, "invalid primary {$key}");
}
foreach ([['rootId', '7'], ['fileId', '42'], ['mtime', '1725000001'], ['size', '12345'], ['path', 123], ['etag', 123], ['mimeType', 123], ['extension', 123]] as [$key, $value]) {
    expect(MetadataInputFingerprint::fromObservations(primary([$key => $value]), null) === null, "wrong primary type {$key}");
}
foreach (array_keys(primary()) as $key) {
    $missing = primary();
    unset($missing[$key]);
    expect(MetadataInputFingerprint::fromObservations($missing, null) === null, "missing primary {$key}");
}

foreach (array_keys(primary()) as $key) {
    $changed = primary();
    $changed[$key] = match ($key) {
        'rootId', 'fileId', 'mtime', 'size' => $changed[$key] + 1,
        default => $changed[$key] . '-changed',
    };
    expect(MetadataInputFingerprint::fromObservations($changed, null) !== $baseline, "primary {$key} changes hash");
}

$withSidecar = MetadataInputFingerprint::fromObservations(primary(), sidecar());
expect($withSidecar !== null && $withSidecar !== $baseline, 'sidecar addition changes hash');
expect(MetadataInputFingerprint::fromObservations(primary(), null) !== $withSidecar, 'sidecar removal changes hash');
foreach (['path', 'etag'] as $identityKey) {
    $identityValue = sidecar()[$identityKey];
    expect(
        MetadataInputFingerprint::fromObservations(primary(), sidecar([$identityKey => " {$identityValue}"])) !== $withSidecar,
        "sidecar {$identityKey} leading whitespace changes hash",
    );
    expect(
        MetadataInputFingerprint::fromObservations(primary(), sidecar([$identityKey => "{$identityValue} "])) !== $withSidecar,
        "sidecar {$identityKey} trailing whitespace changes hash",
    );
}
foreach (array_keys(sidecar()) as $key) {
    $changed = sidecar();
    $changed[$key] = match ($key) {
        'rootId', 'fileId', 'mtime', 'size' => $changed[$key] + 1,
        default => $changed[$key] . '-changed',
    };
    expect(MetadataInputFingerprint::fromObservations(primary(), $changed) !== $withSidecar, "sidecar {$key} changes hash");
}
foreach (array_keys(sidecar()) as $key) {
    $missing = sidecar();
    unset($missing[$key]);
    expect(MetadataInputFingerprint::fromObservations(primary(), $missing) === null, "missing sidecar {$key}");
}
foreach ([['rootId', 0], ['fileId', 0], ['path', ' '], ['etag', ' '], ['mimeType', ' '], ['extension', ' '], ['mtime', 0], ['size', -1]] as [$key, $value]) {
    expect(MetadataInputFingerprint::fromObservations(primary(), sidecar([$key => $value])) === null, "invalid sidecar {$key}");
}

$itemCalls = 0;
$skipArgs = [false, 'unchanged', 'indexed', $baseline, $baseline, 'metadata-pipeline-v1', 'metadata-pipeline-v1'];
$existingItem = static function () use (&$itemCalls): bool {
    $itemCalls++;
    return true;
};
expect(MetadataFastPathDecision::shouldSkip(...[...$skipArgs, $existingItem]), 'all skip guards permit unchanged fast path');
expect($itemCalls === 1, 'successful fast path checks item existence exactly once');

$itemCalls = 0;
$missingItem = static function () use (&$itemCalls): bool {
    $itemCalls++;
    return false;
};
expect(!MetadataFastPathDecision::shouldSkip(...[...$skipArgs, $missingItem]), 'missing item blocks unchanged fast path');
expect($itemCalls === 1, 'missing item is checked exactly once');

$guardFailures = [
    'force' => [0, true],
    'added' => [1, 'added'],
    'path updated' => [1, 'path_updated'],
    'null current fingerprint' => [3, null],
    'null stored fingerprint' => [4, null],
    'mismatched fingerprint' => [4, str_repeat('f', 64)],
    'current revision mismatch' => [5, 'metadata-pipeline-v2'],
    'stored revision mismatch' => [6, 'metadata-pipeline-v0'],
];
foreach ($guardFailures as $label => [$position, $guardFailure]) {
    $args = $skipArgs;
    $args[$position] = $guardFailure;
    $itemCalls = 0;
    $itemLookup = static function () use (&$itemCalls): bool {
        $itemCalls++;
        return true;
    };
    expect(!MetadataFastPathDecision::shouldSkip(...[...$args, $itemLookup]), "{$label} blocks");
    expect($itemCalls === 0, "{$label} does not check item existence");
}

foreach (['metadata_error', 'missing', 'sidecar', null] as $previousStatus) {
    $args = $skipArgs;
    $args[2] = $previousStatus;
    $itemCalls = 0;
    $itemLookup = static function () use (&$itemCalls): bool {
        $itemCalls++;
        return true;
    };
    expect(!MetadataFastPathDecision::shouldSkip(...[...$args, $itemLookup]), 'non-indexed or null previous status blocks');
    expect($itemCalls === 0, 'non-indexed or null previous status remains lazy');
}

$itemCalls = 0;
$caseMismatchLookup = static function () use (&$itemCalls): bool {
    $itemCalls++;
    return true;
};
expect(!MetadataFastPathDecision::shouldSkip(false, 'unchanged', 'indexed', $baseline, strtoupper($baseline), 'metadata-pipeline-v1', 'metadata-pipeline-v1', $caseMismatchLookup), 'fingerprint comparison is exact/hash_equals-compatible');
expect($itemCalls === 0, 'case-mismatched fingerprint does not check item existence');

expect(MetadataFastPathDecision::shouldMarkProcessed($baseline, $baseline, null), 'stable successful extraction permits marker write');
expect(!MetadataFastPathDecision::shouldMarkProcessed(null, $baseline, null), 'null pre-extraction fingerprint blocks marker write');
expect(!MetadataFastPathDecision::shouldMarkProcessed($baseline, null, null), 'failed post-extraction observation blocks marker write');
expect(!MetadataFastPathDecision::shouldMarkProcessed($baseline, str_repeat('f', 64), null), 'concurrent input change blocks marker write');
expect(!MetadataFastPathDecision::shouldMarkProcessed($baseline, strtoupper($baseline), null), 'marker fingerprint comparison is exact');
expect(!MetadataFastPathDecision::shouldMarkProcessed($baseline, $baseline, 'extractor warning'), 'getLastError blocks marker write');

fwrite(STDOUT, "metadata fast-path runtime tests: OK\n");
