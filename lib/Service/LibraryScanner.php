<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCA\Library\Metadata\PublicationMetadataService;
use OCA\Library\Metadata\MetadataFastPathDecision;
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
        $summary = $this->emptyChangeSummary();
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
                $indexed += $this->scanFolder($userId, $rootId, $folder, $seenLibraryFileIds, $summary, function (int $filesIndexed) use (&$indexed, $progress, $rootsTotal, &$errors, $root, &$summary): void {
                    $this->reportProgress($progress, $rootsTotal, $indexed + $filesIndexed, count($errors), 'Scanning ' . (string)$root['path'], $summary);
                });
                $summary['filesMissing'] += $this->fileIndexService->markMissingExcept($userId, $rootId, $seenLibraryFileIds);
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
            ...$summary,
        ];
    }

    /**
     * @return array{roots:int,indexed:int,errors:array<int,string>}
     */
    public function retryMetadataErrors(string $userId, ?callable $progress = null): array {
        $files = $this->fileIndexService->metadataErrorFiles($userId);
        $indexed = 0;
        $errors = [];
        $rootsTotal = count(array_unique(array_map(fn (array $file): int => (int)$file['rootId'], $files)));
        $userFolder = $this->rootFolder->getUserFolder($userId);
        $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Retrying metadata errors…');

        foreach ($files as $file) {
            $nodes = $userFolder->getById((int)$file['fileId']);
            $node = $nodes[0] ?? null;
            if (!$node instanceof File) {
                $this->fileIndexService->markScanError($userId, (int)$file['id'], 'metadata retry failed: source file not found');
                $errors[] = (string)$file['cachedPath'] . ': source file not found';
                $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Retrying metadata errors');
                continue;
            }

            $seenLibraryFileIds = [];
            if ($this->scanFile($userId, (int)$file['rootId'], $node, $seenLibraryFileIds, true)) {
                $indexed++;
            }
            $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Retrying metadata errors: ' . (string)$file['cachedPath']);
        }

        return [
            'roots' => $rootsTotal,
            'indexed' => $indexed,
            'errors' => $errors,
        ];
    }

    /**
     * @return array{roots:int,indexed:int,errors:array<int,string>}
     */
    public function recheckMissingFiles(string $userId, ?callable $progress = null): array {
        $files = $this->fileIndexService->missingFiles($userId);
        $indexed = 0;
        $errors = [];
        $rootsTotal = count(array_unique(array_map(fn (array $file): int => (int)$file['rootId'], $files)));
        $userFolder = $this->rootFolder->getUserFolder($userId);
        $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Rechecking missing files…');

        foreach ($files as $file) {
            $nodes = $userFolder->getById((int)$file['fileId']);
            $node = $nodes[0] ?? null;
            if (!$node instanceof File) {
                $this->fileIndexService->markMissingRecheckError($userId, (int)$file['id'], 'missing recheck failed: source file not found');
                $errors[] = (string)$file['cachedPath'] . ': source file not found';
                $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Rechecking missing files');
                continue;
            }

            $seenLibraryFileIds = [];
            if ($this->scanFile($userId, (int)$file['rootId'], $node, $seenLibraryFileIds, true)) {
                $indexed++;
            }
            $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Rechecking missing files: ' . (string)$file['cachedPath']);
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

    private function scanFolder(string $userId, int $rootId, Folder $folder, array &$seenLibraryFileIds, array &$summary, ?callable $progress = null): int {
        $indexed = 0;
        foreach ($folder->getDirectoryListing() as $node) {
            if ($node instanceof Folder) {
                $indexed += $this->scanFolder($userId, $rootId, $node, $seenLibraryFileIds, $summary, $progress);
                continue;
            }

            if (!$node instanceof File || !$this->isSupported($node)) {
                continue;
            }

            if ($this->isSuppressedOpfSidecar($node)) {
                $preservedSidecarId = $this->cleanupSuppressedOpfSidecar($userId, $rootId, $node);
                if ($preservedSidecarId !== null) {
                    $seenLibraryFileIds[] = $preservedSidecarId;
                    $indexed++;
                    if ($progress !== null) {
                        $progress($indexed);
                    }
                }
                continue;
            }

            if ($this->scanFile($userId, $rootId, $node, $seenLibraryFileIds, false, $summary)) {
                $indexed++;
                if ($progress !== null) {
                    $progress($indexed);
                }
            }
        }

        return $indexed;
    }

    private function emptyChangeSummary(): array {
        return [
            'filesAdded' => 0,
            'pathsUpdated' => 0,
            'filesUnchanged' => 0,
            'filesMissing' => 0,
            'metadataErrors' => 0,
        ];
    }

    private function incrementChangeCount(array &$summary, string $changeStatus): void {
        match ($changeStatus) {
            'added' => $summary['filesAdded']++,
            'path_updated' => $summary['pathsUpdated']++,
            default => $summary['filesUnchanged']++,
        };
    }

    private function reportProgress(?callable $progress, int $rootsTotal, int $filesIndexed, int $errorCount, string $summary, array $changeSummary = []): void {
        if ($progress === null) {
            return;
        }

        $progress([
            'roots' => $rootsTotal,
            'indexed' => $filesIndexed,
            'errors' => $errorCount,
            'summary' => $summary,
            'filesAdded' => (int)($changeSummary['filesAdded'] ?? 0),
            'pathsUpdated' => (int)($changeSummary['pathsUpdated'] ?? 0),
            'filesUnchanged' => (int)($changeSummary['filesUnchanged'] ?? 0),
            'filesMissing' => (int)($changeSummary['filesMissing'] ?? 0),
            'metadataErrors' => (int)($changeSummary['metadataErrors'] ?? 0),
        ]);
    }

    private function scanFile(string $userId, int $rootId, File $node, array &$seenLibraryFileIds, bool $force = false, ?array &$summary = null): bool {
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
        if ($summary !== null) {
            $this->incrementChangeCount($summary, (string)($indexedFile['changeStatus'] ?? 'unchanged'));
        }

        try {
            $fingerprint = $this->metadataService->metadataInputFingerprint($node, $rootId);
            $revision = PublicationMetadataService::PIPELINE_REVISION;
            if (MetadataFastPathDecision::shouldSkip(
                $force,
                (string)($indexedFile['changeStatus'] ?? 'unchanged'),
                $indexedFile['previousScanStatus'] ?? null,
                $fingerprint,
                $indexedFile['previousMetadataInputFingerprint'] ?? null,
                $revision,
                $indexedFile['previousMetadataExtractorRevision'] ?? null,
                fn () => $this->itemService->hasItemForLibraryFile($userId, (int)$indexedFile['id']),
            )) {
                return true;
            }

            $metadata = $this->metadataService->extractWithSidecar($node);
            $this->itemService->ensureItemForFile($userId, $indexedFile, $metadata);

            $postExtractionFingerprint = $this->metadataService->metadataInputFingerprint($node, $rootId);
            $metadataError = $this->metadataService->getLastError();
            if ($metadataError !== null) {
                if ($summary !== null) {
                    $summary['metadataErrors']++;
                }
                $this->fileIndexService->markScanError($userId, (int)$indexedFile['id'], $metadataError);
            } elseif (MetadataFastPathDecision::shouldMarkProcessed($fingerprint, $postExtractionFingerprint, $metadataError)) {
                $this->fileIndexService->markMetadataProcessed($userId, (int)$indexedFile['id'], $fingerprint, $revision);
            }
        } catch (Throwable $e) {
            if ($summary !== null) {
                $summary['metadataErrors']++;
            }
            $this->fileIndexService->markScanError($userId, (int)$indexedFile['id'], 'metadata extraction failed: ' . $e->getMessage());
        }

        return true;
    }

    private function cleanupSuppressedOpfSidecar(string $userId, int $rootId, File $file): ?int {
        $indexedFile = $this->fileIndexService->upsertFile($userId, $rootId, [
            'fileId' => $file->getId(),
            'cachedPath' => $this->displayPath($file, $userId),
            'mimeType' => $file->getMimetype(),
            'extension' => strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION)),
            'etag' => $file->getEtag(),
            'mtime' => $file->getMTime(),
            'size' => $file->getSize(),
        ]);

        if ($this->itemService->hasUserEditedItemForLibraryFile($userId, (int)$indexedFile['id'])) {
            return (int)$indexedFile['id'];
        }

        $this->fileIndexService->markAsSidecar($userId, (int)$indexedFile['id']);
        $this->itemService->deleteItemForLibraryFile($userId, (int)$indexedFile['id']);
        return null;
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
