<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\Files\File;
use OCP\Lock\ILockingProvider;

/** Hold the source path stable from the final identity check through reading. */
final class SharedFileLease {
    private bool $locked = false;

    public function __construct(public readonly File $file) {
        $file->lock(ILockingProvider::LOCK_SHARED);
        $this->locked = true;
        try {
            // Node objects cache FileInfo. Read the storage cache again under the lock.
            $entry = $file->getStorage()->getCache()->get($file->getInternalPath());
            if (!$entry || (int)$entry['fileid'] !== (int)$file->getId()
                || (string)$entry['etag'] !== $file->getEtag()) {
                throw new \RuntimeException('shared_source_changed');
            }
        } catch (\Throwable $error) {
            $this->close();
            throw $error;
        }
    }

    public function close(): void {
        if ($this->locked) {
            $this->locked = false;
            $this->file->unlock(ILockingProvider::LOCK_SHARED);
        }
    }

    public function __destruct() {
        $this->close();
    }
}
