<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCA\Library\Metadata\PublicationMetadataService;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\Files\Node;
use Throwable;

final class LibraryScanner {
    private const SUPPORTED_MIME_TYPES = [
        'application/pdf',
        'application/epub+zip',
        'application/comicbook+zip',
        'application/x-cbz',
        'application/oebps-package+xml',
    ];

    public function __construct(
        private RootService $rootService,
        private FileIndexService $fileIndexService,
        private ItemService $itemService,
        private PublicationMetadataService $metadataService,
        private IRootFolder $rootFolder,
    ) {
    }

    /**
     * @return array{roots:int,indexed:int,errors:array<int,string>}
     */
    public function scan(string $userId, ?int $onlyRootId = null, ?callable $progress = null): array {
        $indexed = 0;
        $errors = [];
        $scopeRootId = $onlyRootId;
        $roots = $this->filterRootsForScope($userId, $scopeRootId);
        $rootsTotal = count($roots);
        $userFolder = $this->rootFolder->getUserFolder($userId);
        $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Scanning enabled roots…');

        foreach ($roots as $root) {
            try {
                $rootId = (int)$root['id'];
                $folder = $this->resolveRootFolder($userFolder, (string)$root['path']);
                $seenLibraryFileIds = [];
                $indexed += $this->scanFolder($userId, $rootId, $folder, $seenLibraryFileIds, function (int $filesIndexed) use (&$indexed, $progress, $rootsTotal, &$errors, $root): void {
                    $this->reportProgress($progress, $rootsTotal, $indexed + $filesIndexed, count($errors), 'Scanning ' . (string)$root['path']);
                });
                $this->fileIndexService->markMissingExcept($userId, $rootId, $seenLibraryFileIds);
                $this->rootService->markScanned($rootId);
                $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Finished ' . (string)$root['path']);
            } catch (Throwable $e) {
                $errors[] = sprintf('%s: %s', (string)$root['path'], $e->getMessage());
                $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Scan error: ' . (string)$root['path']);
            }
        }

        return [
            'roots' => $rootsTotal,
            'indexed' => $indexed,
            'errors' => $errors,
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private function filterRootsForScope(string $userId, ?int $scopeRootId): array {
        $roots = $this->rootService->listEnabledRoots($userId);
        if ($scopeRootId === null || $scopeRootId <= 0) {
            return $roots;
        }

        foreach ($roots as $root) {
            if ((int)$root['id'] === $scopeRootId) {
                return [$root];
            }
        }

        throw new \RuntimeException('Scoped root not found or disabled');
    }

    private function resolveRootFolder(Folder $userFolder, string $path): Folder {
        if ($path === '/' || $path === '') {
            return $userFolder;
        }

        $node = $userFolder->get(ltrim($path, '/'));
        if (!$node instanceof Folder) {
            throw new \RuntimeException('Configured root is not a folder');
        }

        return $node;
    }

    private function scanFolder(string $userId, int $rootId, Folder $folder, array &$seenLibraryFileIds, ?callable $progress = null): int {
        $indexed = 0;
        foreach ($folder->getDirectoryListing() as $node) {
            if ($node instanceof Folder) {
                $indexed += $this->scanFolder($userId, $rootId, $node, $seenLibraryFileIds, $progress);
                continue;
            }

            if (!$node instanceof File || !$this->isSupported($node)) {
                continue;
            }

            if ($this->isSuppressedOpfSidecar($node)) {
                $this->cleanupSuppressedOpfSidecar($userId, $rootId, $node);
                continue;
            }

            if ($this->scanFile($userId, $rootId, $node, $seenLibraryFileIds)) {
                $indexed++;
                if ($progress !== null) {
                    $progress($indexed);
                }
            }
        }

        return $indexed;
    }

    private function reportProgress(?callable $progress, int $rootsTotal, int $filesIndexed, int $errorCount, string $summary): void {
        if ($progress === null) {
            return;
        }

        $progress([
            'roots' => $rootsTotal,
            'indexed' => $filesIndexed,
            'errors' => $errorCount,
            'summary' => $summary,
        ]);
    }

    private function scanFile(string $userId, int $rootId, File $node, array &$seenLibraryFileIds): bool {
        $indexedFile = $this->fileIndexService->upsertFile($userId, $rootId, [
            'fileId' => $node->getId(),
            'cachedPath' => $this->displayPath($node, $userId),
            'mimeType' => $node->getMimetype(),
            'extension' => strtolower(pathinfo($node->getName(), PATHINFO_EXTENSION)),
            'etag' => $node->getEtag(),
            'mtime' => $node->getMTime(),
            'size' => $node->getSize(),
        ]);
        $seenLibraryFileIds[] = (int)$indexedFile['id'];

        try {
            $metadata = $this->metadataService->extractWithSidecar($node);
            $this->itemService->ensureItemForFile($userId, $indexedFile, $metadata);

            $metadataError = $this->metadataService->getLastError();
            if ($metadataError !== null) {
                $this->fileIndexService->markScanError($userId, (int)$indexedFile['id'], $metadataError);
            }
        } catch (Throwable $e) {
            $this->fileIndexService->markScanError($userId, (int)$indexedFile['id'], 'metadata extraction failed: ' . $e->getMessage());
        }

        return true;
    }

    private function cleanupSuppressedOpfSidecar(string $userId, int $rootId, File $file): void {
        $indexedFile = $this->fileIndexService->upsertFile($userId, $rootId, [
            'fileId' => $file->getId(),
            'cachedPath' => $this->displayPath($file, $userId),
            'mimeType' => $file->getMimetype(),
            'extension' => strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION)),
            'etag' => $file->getEtag(),
            'mtime' => $file->getMTime(),
            'size' => $file->getSize(),
        ]);
        $this->fileIndexService->markAsSidecar($userId, (int)$indexedFile['id']);
        $this->itemService->deleteItemForLibraryFile($userId, (int)$indexedFile['id']);
    }

    private function isSupported(File $file): bool {
        $mimeType = $file->getMimetype();
        if (in_array($mimeType, self::SUPPORTED_MIME_TYPES, true)) {
            return true;
        }

        return in_array(strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION)), ['epub', 'pdf', 'cbz', 'opf'], true);
    }

    private function isSuppressedOpfSidecar(File $file): bool {
        if (strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION)) !== 'opf') {
            return false;
        }

        $parent = $file->getParent();
        if (!$parent instanceof Folder) {
            return false;
        }

        if ($file->getName() === 'metadata.opf') {
            foreach ($parent->getDirectoryListing() as $node) {
                if (!$node instanceof File) {
                    continue;
                }

                $extension = strtolower(pathinfo($node->getName(), PATHINFO_EXTENSION));
                if (in_array($extension, ['pdf', 'epub', 'cbz'], true)) {
                    return true;
                }
            }

            return false;
        }

        $basename = pathinfo($file->getName(), PATHINFO_FILENAME);
        if ($parent->nodeExists($basename . '.pdf') || $parent->nodeExists($basename . '.epub') || $parent->nodeExists($basename . '.cbz')) {
            return true;
        }

        return false;
    }

    private function displayPath(Node $node, string $userId): string {
        $prefix = '/' . $userId . '/files';
        $path = $node->getPath();
        if (str_starts_with($path, $prefix)) {
            return substr($path, strlen($prefix)) ?: '/';
        }
        return $path;
    }
}
