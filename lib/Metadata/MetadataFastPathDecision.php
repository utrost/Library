<?php

declare(strict_types=1);

namespace OCA\Library\Metadata;

final class MetadataFastPathDecision {
    public static function shouldSkip(
        bool $force,
        string $changeStatus,
        ?string $previousScanStatus,
        ?string $currentFingerprint,
        ?string $storedFingerprint,
        string $currentRevision,
        ?string $storedRevision,
        callable $itemExists,
    ): bool {
        return !$force
            && $changeStatus === 'unchanged'
            && $previousScanStatus === 'indexed'
            && $currentFingerprint !== null
            && $storedFingerprint !== null
            && hash_equals($storedFingerprint, $currentFingerprint)
            && $storedRevision === $currentRevision
            && $itemExists();
    }

    public static function shouldMarkProcessed(?string $preFingerprint, ?string $postFingerprint, ?string $metadataError): bool {
        return $preFingerprint !== null
            && $postFingerprint !== null
            && hash_equals($preFingerprint, $postFingerprint)
            && $metadataError === null;
    }
}
