<?php

declare(strict_types=1);

namespace OCA\Library\Http;

use OCA\Library\Service\SharedFileLease;
use OCP\AppFramework\Http\FileDisplayResponse;
use OCP\AppFramework\Http\IOutput;

/** Keep Nextcloud's range streaming while pinning the authorized source path. */
final class SharedBookDownloadResponse extends FileDisplayResponse {
    public function __construct(private SharedFileLease $lease) {
        parent::__construct($lease->file, 200, [
            'Cache-Control' => 'private, no-store',
            'Content-Type' => 'application/octet-stream',
            'X-Content-Type-Options' => 'nosniff',
        ]);
        $extension = strtolower((string)pathinfo($lease->file->getName(), PATHINFO_EXTENSION));
        $extension = preg_match('/^[a-z0-9]{1,8}$/D', $extension) === 1 ? $extension : 'bin';
        $this->addHeader('Content-Disposition', 'attachment; filename="library-book.' . $extension . '"');
    }

    public function callback(IOutput $output) {
        try {
            parent::callback($output);
        } finally {
            $this->lease->close();
        }
    }
}
