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
}
