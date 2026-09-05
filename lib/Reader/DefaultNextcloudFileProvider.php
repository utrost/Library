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
        return $this->urlGenerator->linkTo('', '/f/' . $fileId);
    }

    public function getShowInFilesUrl(int $fileId): string {
        return $this->urlGenerator->linkTo('', '/apps/files/files/' . $fileId) . '?openfile=true';
    }
}
