<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCA\Library\Metadata\PublicationMetadataService;
use OCA\Library\Metadata\MetadataFastPathDecision;
use OCA\Library\Exception\ScanCancelledException;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\Files\Node;
use Throwable;
use OCA\Library\Instrumentation\MonotonicClock;

final class LibraryScanner {
    private MonotonicClock $clock;
    /** @var array<string,int> */
    private array $metrics = [];
    private int $scanStartedAt = 0;
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
        ?MonotonicClock $clock = null,
    ) {
        $this->clock = $clock ?? new MonotonicClock();
    }

    /**
     * @return array{roots:int,indexed:int,errors:array<int,string>}
     */
    public function scan(string $userId, ?int $onlyRootId = null, ?callable $progress = null): array {
        $scanStarted = $this->beginMetrics();
        $indexed = 0;
        $summary = $this->emptyChangeSummary();
        $errors = [];
        $scopeRootId = $onlyRootId;
        $roots = $this->filterRootsForScope($userId, $scopeRootId);
        $rootsTotal = count($roots);
        $traversalUnits = 0;
        $userFolder = $this->rootFolder->getUserFolder($userId);
        $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Scanning enabled roots…', [], $traversalUnits);

        foreach ($roots as $root) {
            try {
                $rootId = (int)$root['id'];
                $folder = $this->resolveRootFolder($userFolder, (string)$root['path']);
                $seenLibraryFileIds = [];
                $this->scanFolder($userId, $rootId, $folder, $seenLibraryFileIds, $summary, $indexed, $traversalUnits, function (int $filesIndexed, int $units) use ($progress, $rootsTotal, &$errors, $root, &$summary): void {
                    $this->reportProgress($progress, $rootsTotal, $filesIndexed, count($errors), 'Scanning ' . (string)$root['path'], $summary, $units);
                });
                $missingStarted = $this->clock->now();
                try {
                    $summary['filesMissing'] += $this->fileIndexService->markMissingExcept($userId, $rootId, $seenLibraryFileIds);
                } finally {
                    $this->metrics['missingUpdateDurationMs'] += $this->clock->elapsedMs($missingStarted);
                }
                $this->rootService->markScanned($rootId);
                $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Finished ' . (string)$root['path'], $summary, $traversalUnits);
            } catch (ScanCancelledException $e) {
                throw $e;
            } catch (Throwable $e) {
                $errors[] = sprintf('%s: %s', (string)$root['path'], $e->getMessage());
                $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Scan error: ' . (string)$root['path'], $summary, $traversalUnits);
            }
        }

        return [
            'roots' => $rootsTotal,
            'indexed' => $indexed,
            'errors' => $errors,
            ...$summary,
            ...$this->finishMetrics($scanStarted),
        ];
    }

    /**
     * @return array{roots:int,indexed:int,errors:array<int,string>}
     */
    public function retryMetadataErrors(string $userId, ?callable $progress = null): array {
        $scanStarted = $this->beginMetrics();
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
            ...$this->finishMetrics($scanStarted),
        ];
    }

    /**
     * @return array{roots:int,indexed:int,errors:array<int,string>}
     */
    public function recheckMissingFiles(string $userId, ?callable $progress = null): array {
        $scanStarted = $this->beginMetrics();
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
            ...$this->finishMetrics($scanStarted),
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

    private function scanFolder(string $userId, int $rootId, Folder $folder, array &$seenLibraryFileIds, array &$summary, int &$indexed, int &$traversalUnits, ?callable $progress = null): void {
        $nodes = $folder->getDirectoryListing();
        $traversalUnits++;
        if ($progress !== null) { $progress($indexed, $traversalUnits); }
        foreach ($nodes as $node) {
            $traversalUnits++;
            if ($progress !== null) { $progress($indexed, $traversalUnits); }
            if ($node instanceof Folder) {
                $this->scanFolder($userId, $rootId, $node, $seenLibraryFileIds, $summary, $indexed, $traversalUnits, $progress);
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
                        $progress($indexed, $traversalUnits);
                    }
                }
                continue;
            }

            if ($this->scanFile($userId, $rootId, $node, $seenLibraryFileIds, false, $summary)) {
                $indexed++;
                if ($progress !== null) {
                    $progress($indexed, $traversalUnits);
                }
            }
        }
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

    private function beginMetrics(): int {
        $this->metrics = [
            'fingerprintSkips' => 0, 'metadataExtractions' => 0, 'itemRefreshes' => 0,
            'fileIndexDurationMs' => 0, 'fingerprintDurationMs' => 0,
            'metadataExtractionDurationMs' => 0, 'itemRefreshDurationMs' => 0,
            'missingUpdateDurationMs' => 0,
        ];
        $this->scanStartedAt = $this->clock->now();
        return $this->scanStartedAt;
    }

    private function finishMetrics(int $startedAt): array {
        return [...$this->metrics, 'scannerDurationMs' => $this->clock->elapsedMs($startedAt)];
    }

    private function incrementChangeCount(array &$summary, string $changeStatus): void {
        match ($changeStatus) {
            'added' => $summary['filesAdded']++,
            'path_updated' => $summary['pathsUpdated']++,
            default => $summary['filesUnchanged']++,
        };
    }

    private function reportProgress(?callable $progress, int $rootsTotal, int $filesIndexed, int $errorCount, string $summary, array $changeSummary = [], int $traversalUnits = 0): void {
        if ($progress === null) {
            return;
        }

        $progress([
            'roots' => $rootsTotal,
            'indexed' => $filesIndexed,
            'traversalUnits' => $traversalUnits,
            'errors' => $errorCount,
            'summary' => $summary,
            'filesAdded' => (int)($changeSummary['filesAdded'] ?? 0),
            'pathsUpdated' => (int)($changeSummary['pathsUpdated'] ?? 0),
            'filesUnchanged' => (int)($changeSummary['filesUnchanged'] ?? 0),
            'filesMissing' => (int)($changeSummary['filesMissing'] ?? 0),
            'metadataErrors' => (int)($changeSummary['metadataErrors'] ?? 0),
            'fingerprintSkips' => $this->metrics['fingerprintSkips'],
            'metadataExtractions' => $this->metrics['metadataExtractions'],
            'itemRefreshes' => $this->metrics['itemRefreshes'],
            'fileIndexDurationMs' => $this->metrics['fileIndexDurationMs'],
            'fingerprintDurationMs' => $this->metrics['fingerprintDurationMs'],
            'metadataExtractionDurationMs' => $this->metrics['metadataExtractionDurationMs'],
            'itemRefreshDurationMs' => $this->metrics['itemRefreshDurationMs'],
            'missingUpdateDurationMs' => $this->metrics['missingUpdateDurationMs'],
            'scannerDurationMs' => $this->scanStartedAt > 0 ? $this->clock->elapsedMs($this->scanStartedAt) : 0,
        ]);
    }

    private function scanFile(string $userId, int $rootId, File $node, array &$seenLibraryFileIds, bool $force = false, ?array &$summary = null): bool {
        $fileIndexStarted = $this->clock->now();
        try {
            $indexedFile = $this->fileIndexService->upsertFile($userId, $rootId, [
                'fileId' => $node->getId(),
                'cachedPath' => $this->displayPath($node, $userId),
                'mimeType' => $node->getMimetype(),
                'extension' => strtolower(pathinfo($node->getName(), PATHINFO_EXTENSION)),
                'etag' => $node->getEtag(),
                'mtime' => $node->getMTime(),
                'size' => $node->getSize(),
            ]);
        } finally {
            $this->metrics['fileIndexDurationMs'] += $this->clock->elapsedMs($fileIndexStarted);
        }
        $seenLibraryFileIds[] = (int)$indexedFile['id'];
        if ($summary !== null) {
            $this->incrementChangeCount($summary, (string)($indexedFile['changeStatus'] ?? 'unchanged'));
        }

        try {
            $fingerprintStarted = $this->clock->now();
            try { $fingerprint = $this->metadataService->metadataInputFingerprint($node, $rootId); }
            finally { $this->metrics['fingerprintDurationMs'] += $this->clock->elapsedMs($fingerprintStarted); }
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
                $this->metrics['fingerprintSkips']++;
                return true;
            }

            $this->metrics['metadataExtractions']++;
            $metadataStarted = $this->clock->now();
            try { $metadata = $this->metadataService->extractWithSidecar($node); }
            finally { $this->metrics['metadataExtractionDurationMs'] += $this->clock->elapsedMs($metadataStarted); }
            $itemStarted = $this->clock->now();
            try { $this->itemService->ensureItemForFile($userId, $indexedFile, $metadata); }
            finally { $this->metrics['itemRefreshDurationMs'] += $this->clock->elapsedMs($itemStarted); }
            $this->metrics['itemRefreshes']++;

            $fingerprintStarted = $this->clock->now();
            try { $postExtractionFingerprint = $this->metadataService->metadataInputFingerprint($node, $rootId); }
            finally { $this->metrics['fingerprintDurationMs'] += $this->clock->elapsedMs($fingerprintStarted); }
            $metadataError = $this->metadataService->getLastError();
            if ($metadataError !== null) {
                if ($summary !== null) {
                    $summary['metadataErrors']++;
                }
                $this->fileIndexService->markScanError($userId, (int)$indexedFile['id'], $metadataError);
            } elseif (MetadataFastPathDecision::shouldMarkProcessed($fingerprint, $postExtractionFingerprint, $metadataError)) {
                $this->fileIndexService->markMetadataProcessed($userId, (int)$indexedFile['id'], $fingerprint, $revision);
            }
        } catch (ScanCancelledException $e) {
            throw $e;
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
