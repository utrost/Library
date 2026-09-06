<?php

declare(strict_types=1);

namespace OCA\Library\Reader;

use OCP\IURLGenerator;

final class DefaultNextcloudFileProvider {
    public function __construct(
        private IURLGenerator $urlGenerator,
    ) {
    }

    public function getOpenUrl(int $fileId): string {
        return $this->urlGenerator->getAbsoluteURL('/f/' . $fileId);
    }

    public function getShowInFilesUrl(int $fileId, string $cachedPath = ''): string {
        $dir = '/';
        if ($cachedPath !== '') {
            $normalizedPath = '/' . ltrim($cachedPath, '/');
            $candidate = dirname($normalizedPath);
            if ($candidate !== '.' && $candidate !== '') {
                $dir = $candidate;
            }
        }

        $encodedDir = str_replace('%2F', '/', rawurlencode($dir));
        return $this->urlGenerator->getAbsoluteURL('/apps/files/files/' . $fileId . '?dir=' . $encodedDir . '&openfile=false');
    }

    public function getDownloadUrl(string $userId, string $cachedPath): string {
        $path = '/' . ltrim($cachedPath, '/');
        return $this->urlGenerator->getAbsoluteURL('/remote.php/dav/files/' . rawurlencode($userId) . $this->encodePathSegments($path));
    }

    private function encodePathSegments(string $path): string {
        $segments = array_filter(explode('/', $path), static fn (string $segment): bool => $segment !== '');
        if ($segments === []) {
            return '/';
        }

        return '/' . implode('/', array_map(static fn (string $segment): string => rawurlencode($segment), $segments));
    }
}
