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

    /** Only deterministic, successfully persisted warnings can be retained. */
    public static function deterministicWarning(?string $error): bool {
        return in_array($error,['Unsupported or corrupt EPUB archive','Unsupported or corrupt CBZ archive'],true)
            || (is_string($error) && preg_match('/^metadata_(?:authors|fields)_invalid: [^\r\n]{1,160} \(diagnostic: libdiag-[a-f0-9]{16}\)$/D',$error)===1);
    }

    public static function shouldSkipWarning(bool $force,string $changeStatus,?string $previousStatus,?string $error,?string $currentFingerprint,?string $storedFingerprint,string $revision,?string $storedRevision,callable $itemExists): bool {
        return self::deterministicWarning($error) && $previousStatus==='metadata_error'
            && self::shouldSkip($force,$changeStatus,'indexed',$currentFingerprint,$storedFingerprint,$revision,$storedRevision,$itemExists);
    }

    public static function shouldMarkProcessed(?string $preFingerprint, ?string $postFingerprint, ?string $metadataError): bool {
        return $preFingerprint !== null
            && $postFingerprint !== null
            && hash_equals($preFingerprint, $postFingerprint)
            && $metadataError === null;
    }
}
