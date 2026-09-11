<?php

declare(strict_types=1);

namespace OCA\Library\Metadata;

final class MetadataInputFingerprint {
    private const KEYS = ['rootId', 'fileId', 'path', 'etag', 'mimeType', 'extension', 'mtime', 'size'];

    /**
     * @param array<string, mixed> $primary
     * @param array<string, mixed>|null $sidecar
     */
    public static function fromObservations(array $primary, ?array $sidecar): ?string {
        $canonicalPrimary = self::canonicalObservation($primary);
        if ($canonicalPrimary === null) {
            return null;
        }

        $canonicalSidecar = $sidecar === null ? null : self::canonicalObservation($sidecar);
        if ($sidecar !== null && $canonicalSidecar === null) {
            return null;
        }

        try {
            $encoded = json_encode([
                'primary' => $canonicalPrimary,
                'sidecar' => $canonicalSidecar,
            ], JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR);
        } catch (\Throwable) {
            return null;
        }

        return hash('sha256', $encoded);
    }

    /** @param array<string, mixed> $observation */
    private static function canonicalObservation(array $observation): ?array {
        foreach (self::KEYS as $key) {
            if (!array_key_exists($key, $observation)) {
                return null;
            }
        }

        if (!is_int($observation['rootId']) || !is_int($observation['fileId']) || !is_int($observation['mtime']) || !is_int($observation['size'])) {
            return null;
        }
        $rootId = $observation['rootId'];
        $fileId = $observation['fileId'];
        $mtime = $observation['mtime'];
        $size = $observation['size'];
        if ($rootId <= 0 || $fileId <= 0 || $mtime <= 0 || $size < 0) {
            return null;
        }

        $strings = [];
        foreach (['path', 'etag', 'mimeType', 'extension'] as $key) {
            if (!is_string($observation[$key])) {
                return null;
            }
            if (trim($observation[$key]) === '') {
                return null;
            }
            $strings[$key] = in_array($key, ['path', 'etag'], true)
                ? $observation[$key]
                : trim($observation[$key]);
        }

        return [
            'rootId' => $rootId,
            'fileId' => $fileId,
            'path' => $strings['path'],
            'etag' => $strings['etag'],
            'mimeType' => strtolower($strings['mimeType']),
            'extension' => strtolower($strings['extension']),
            'mtime' => $mtime,
            'size' => $size,
        ];
    }
}
