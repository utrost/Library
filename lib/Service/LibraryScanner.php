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
use OCP\Files\NotFoundException;
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
        private ?ScanChangeJournal $changeJournal = null,
    ) {
        $this->clock = $clock ?? new MonotonicClock();
    }

    /** Scan coalesced changed directories, leaving event generations intact on failure. */
    public function scanIncremental(string $userId, ?callable $progress = null): array {
        $started = $this->beginMetrics();
        $snapshot = $this->journal()->snapshot($userId);
        $roots = $this->rootService->listEnabledRoots($userId);
        $userFolder = $this->rootFolder->getUserFolder($userId);
        $summary = $this->emptyChangeSummary();
        $indexed = 0; $units = 0; $errors = [];
        $targets = [];
        foreach ($snapshot as $entry) {
            $dirty = $entry['path'];
            foreach ($roots as $root) {
                $rootPath = rtrim((string)$root['path'], '/') ?: '/';
                if ($dirty !== '/' && $rootPath !== '/' && $dirty !== $rootPath
                    && !str_starts_with($dirty, $rootPath . '/') && !str_starts_with($rootPath, rtrim($dirty, '/') . '/')) continue;
                $aboveRoot = $dirty === '/' || str_starts_with($rootPath, rtrim($dirty, '/') . '/');
                $path = $aboveRoot ? $rootPath : $dirty;
                $folder = $aboveRoot || $entry['folder'];
                $targets[(int)$root['id']][($folder ? 'd:' : 'f:') . $path] = ['path'=>$path,'folder'=>$folder];
            }
        }
        $work = [];
        foreach ($targets as $rootId => $entries) {
            $sorted = array_values($entries);
            usort($sorted, static fn($a, $b) => strlen($a['path']) <=> strlen($b['path']) ?: ((int)$b['folder'] <=> (int)$a['folder']));
            $kept = [];
            foreach ($sorted as $entry) {
                $path = $entry['path'];
                $covered = false;
                foreach ($kept as $parent) {
                    if (($parent['folder'] && ($parent['path'] === '/' || $path === $parent['path'] || str_starts_with($path, rtrim($parent['path'], '/') . '/')))
                        || ($path === $parent['path'] && $entry['folder'] === $parent['folder'])) { $covered = true; break; }
                }
                if ($covered) continue;
                $kept[] = $entry;
            }
            foreach ($kept as $entry) {
                $entry['rootId'] = (int)$rootId;
                $entry['priority'] = $entry['folder'] ? 1 : 2;
                if (!$entry['folder']) try {
                    $live = $userFolder->get(ltrim($entry['path'], '/'));
                    if ($live instanceof File && $live->getStorage()->file_exists($live->getInternalPath())) $entry['priority'] = 0;
                } catch (Throwable) {}
                $work[] = $entry;
            }
        }
        // Resolve live destinations before old/missing paths, including cross-root moves.
        usort($work, static fn($a, $b) => $a['priority'] <=> $b['priority']);
        foreach ($work as $entry) {
            $path = $entry['path']; $rootId = $entry['rootId'];
            try {
                $seen = [];
                if ($entry['folder']) {
                    try {
                        $folder = $this->resolveRootFolder($userFolder, $path);
                    } catch (NotFoundException) {
                        // A configured root can itself be deleted. The node event
                        // proves that path changed, so mark its indexed subtree missing.
                        $summary['filesMissing'] += $this->fileIndexService->markMissingUnderPathExcept($userId, $rootId, $path, []);
                        continue;
                    }
                    $this->scanFolder($userId, $rootId, $folder, $seen, $summary, $indexed, $units,
                        function (int $count, int $traversal, string $current) use ($progress, $roots, &$errors, &$summary): void {
                            $this->reportProgress($progress, count($roots), $count, count($errors), 'Scanning changed directory', $summary, $traversal, $current);
                        });
                    $summary['filesMissing'] += $this->fileIndexService->markMissingUnderPathExcept($userId, $rootId, $path, $seen);
                } else {
                    $this->scanChangedFileTarget($userId, $rootId, $userFolder, $path, $summary, $indexed, $units, $progress, count($roots));
                }
            } catch (ScanCancelledException $e) { throw $e;
            } catch (Throwable $e) {
                $diagnostic = SafeDiagnostics::fromThrowable('root_scan_failed','Changed directory scan failed. Retry or run a full scan.', $e,
                    ['userId'=>$userId,'rootId'=>$rootId,'path'=>$path]);
                SafeDiagnostics::log($diagnostic);
                $errors[] = SafeDiagnostics::publicText($diagnostic);
            }
        }
        return ['roots'=>count($roots),'indexed'=>$indexed,'errors'=>$errors,...$summary,...$this->finishMetrics($started),'journalSnapshot'=>$snapshot];
    }

    private function journal(): ScanChangeJournal {
        return $this->changeJournal ??= \OC::$server->get(ScanChangeJournal::class);
    }

    private function scanChangedFileTarget(string $userId, int $rootId, Folder $userFolder, string $path, array &$summary,
        int &$indexed, int &$units, ?callable $progress, int $rootsTotal): void {
        $parent = $this->resolveRootFolder($userFolder, dirname($path));
        $name = basename($path);
        $names = [$name];
        $extension = strtolower(pathinfo($name, PATHINFO_EXTENSION));
        $stem = pathinfo($name, PATHINFO_FILENAME);
        if ($extension === 'opf') {
            foreach (['pdf','epub','cbz'] as $ext) $names[] = $stem . '.' . $ext;
        } elseif (in_array($extension, ['pdf','epub','cbz'], true)) {
            $names[] = $stem . '.opf';
        }
        foreach (array_unique($names) as $candidate) {
            $candidatePath = (dirname($path) === '/' ? '' : dirname($path)) . '/' . $candidate;
            $units++;
            if ($progress) $this->reportProgress($progress, $rootsTotal, $indexed, 0, 'Checking changed publication', $summary, $units, $candidatePath);
            $node = $parent->nodeExists($candidate) ? $parent->get($candidate) : null;
            if (!$node instanceof File || !$node->getStorage()->file_exists($node->getInternalPath())) {
                $summary['filesMissing'] += $this->fileIndexService->markMissingAtPath($userId, $rootId, $candidatePath);
                continue;
            }
            if (!$node->isReadable()) throw new \RuntimeException('Changed publication is no longer readable');
            if (!$this->isSupported($node)) continue;
            if ($this->isSuppressedOpfSidecar($node)) {
                if ($this->cleanupSuppressedOpfSidecar($userId, $rootId, $node) !== null) $indexed++;
            } else {
                $seen = [];
                if ($this->scanFile($userId, $rootId, $node, $seen, false, null, $summary)) $indexed++;
            }
        }
    }

    /**
     * @return array{roots:int,indexed:int,errors:array<int,string>}
     */
    public function scan(string $userId, ?int $onlyRootId = null, ?callable $progress = null): array {
        $scanStarted = $this->beginMetrics();
        $journalSnapshot = $onlyRootId === null && ($this->changeJournal !== null || class_exists(\OC::class))
            ? $this->journal()->snapshot($userId) : null;
        $indexed = 0;
        $summary = $this->emptyChangeSummary();
        $errors = [];
        $scopeRootId = $onlyRootId;
        $roots = $this->filterRootsForScope($userId, $scopeRootId);
        $rootsDigest = $onlyRootId === null ? hash('sha256', implode("\n", array_map(static fn($root) => (int)$root['id'] . "\0" . (string)$root['path'], $roots)) . ($roots === [] ? '' : "\n")) : null;
        $rootsTotal = count($roots);
        $traversalUnits = 0;
        $userFolder = $this->rootFolder->getUserFolder($userId);
        $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Scanning enabled roots…', [], $traversalUnits);

        foreach ($roots as $root) {
            try {
                $rootId = (int)$root['id'];
                $folder = $this->resolveRootFolder($userFolder, (string)$root['path']);
                $seenLibraryFileIds = [];
                $this->scanFolder($userId, $rootId, $folder, $seenLibraryFileIds, $summary, $indexed, $traversalUnits, function (int $filesIndexed, int $units, string $currentPath) use ($progress, $rootsTotal, &$errors, $root, &$summary): void {
                    $this->reportProgress($progress, $rootsTotal, $filesIndexed, count($errors), 'Scanning ' . (string)$root['path'], $summary, $units, $currentPath);
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
                $diagnostic = SafeDiagnostics::fromThrowable(
                    'root_scan_failed',
                    'Library root scan failed. Check server logs with the diagnostic id.',
                    $e,
                    ['userId' => $userId, 'rootId' => (int)$root['id'], 'path' => (string)$root['path']],
                );
                SafeDiagnostics::log($diagnostic);
                $errors[] = sprintf('%s: %s', (string)$root['path'], SafeDiagnostics::publicText($diagnostic));
                $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Scan error: ' . (string)$root['path'], $summary, $traversalUnits);
            }
        }

        return [
            'roots' => $rootsTotal,
            'indexed' => $indexed,
            'errors' => $errors,
            ...$summary,
            ...$this->finishMetrics($scanStarted),
            'journalSnapshot' => $journalSnapshot,
            'rootsDigest' => $rootsDigest,
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
        $rootsTotal = count($this->rootService->listEnabledRoots($userId));
        $userFolder = $this->rootFolder->getUserFolder($userId);
        $traversalUnits = 0;
        $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Retrying metadata errors…');

        foreach ($files as $file) {
            $traversalUnits++;
            $currentPath = (string)$file['cachedPath'];
            $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Retrying metadata errors: ' . $currentPath, [], $traversalUnits, $currentPath);
            $nodes = $userFolder->getById((int)$file['fileId']);
            $node = $nodes[0] ?? null;
            if (!$node instanceof File) {
                $this->fileIndexService->markScanError($userId, (int)$file['id'], 'metadata retry failed: source file not found');
                $errors[] = (string)$file['cachedPath'] . ': source file not found';
                $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Retrying metadata errors');
                continue;
            }

            $seenLibraryFileIds = [];
            if (!$this->scanFile($userId, (int)$file['rootId'], $node, $seenLibraryFileIds, true, (int)$file['rootId'])) {
                $message = 'repair failed: source file is outside enabled Library roots';
                $this->fileIndexService->markMissingRecheckError($userId, (int)$file['id'], $message);
                $errors[] = (string)$file['cachedPath'] . ': source file is outside enabled Library roots';
                $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Retrying metadata errors');
                continue;
            }
            $indexed++;
            $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Retrying metadata errors: ' . (string)$file['cachedPath'], [], 0, (string)$file['cachedPath']);
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
        $rootsTotal = count($this->rootService->listEnabledRoots($userId));
        $userFolder = $this->rootFolder->getUserFolder($userId);
        $traversalUnits = 0;
        $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Rechecking missing files…');

        foreach ($files as $file) {
            $traversalUnits++;
            $currentPath = (string)$file['cachedPath'];
            $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Rechecking missing files: ' . $currentPath, [], $traversalUnits, $currentPath);
            $nodes = $userFolder->getById((int)$file['fileId']);
            $node = $nodes[0] ?? null;
            if (!$node instanceof File) {
                $this->fileIndexService->markMissingRecheckError($userId, (int)$file['id'], 'missing recheck failed: source file not found');
                $errors[] = (string)$file['cachedPath'] . ': source file not found';
                $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Rechecking missing files');
                continue;
            }

            $seenLibraryFileIds = [];
            if (!$this->scanFile($userId, (int)$file['rootId'], $node, $seenLibraryFileIds, true, (int)$file['rootId'])) {
                $message = 'missing recheck failed: source file is outside enabled Library roots';
                $this->fileIndexService->markMissingRecheckError($userId, (int)$file['id'], $message);
                $errors[] = (string)$file['cachedPath'] . ': source file is outside enabled Library roots';
                $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Rechecking missing files');
                continue;
            }
            $indexed++;
            $this->reportProgress($progress, $rootsTotal, $indexed, count($errors), 'Rechecking missing files: ' . (string)$file['cachedPath'], [], 0, (string)$file['cachedPath']);
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

    /**
     * @param array<int, array<string, mixed>> $enabledRoots
     */
    private function repairRootId(array $enabledRoots, int $originalRootId, string $currentPath): ?int {
        $fallbackRootId = null;
        foreach ($enabledRoots as $root) {
            if (!$this->pathIsWithinRoot($currentPath, (string)$root['path'])) {
                continue;
            }

            $rootId = (int)$root['id'];
            if ($rootId === $originalRootId) {
                return $rootId;
            }
            $fallbackRootId ??= $rootId;
        }

        return $fallbackRootId;
    }

    /** @return array{rootId:int,path:string}|null */
    private function repairObservation(string $userId, int $originalRootId, File $node): ?array {
        $path = $this->displayPath($node, $userId);
        $enabledRoots = $this->rootService->listEnabledRoots($userId);
        $rootId = $this->repairRootId($enabledRoots, $originalRootId, $path);
        if ($rootId === null) {
            return null;
        }

        return ['rootId' => $rootId, 'path' => $path];
    }

    private function pathIsWithinRoot(string $path, string $rootPath): bool {
        $normalizedPath = '/' . trim($path, '/');
        $normalizedRoot = '/' . trim($rootPath, '/');
        if ($normalizedRoot === '/') {
            return true;
        }

        return $normalizedPath === $normalizedRoot || str_starts_with($normalizedPath, $normalizedRoot . '/');
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
        if (method_exists($folder, 'search')) {
            $this->scanPagedFolder($userId, $rootId, $folder, $seenLibraryFileIds, $summary, $indexed, $traversalUnits, $progress);
            return;
        }
        $nodes = $folder->getDirectoryListing();
        $currentPath = $this->displayPath($folder, $userId);
        $traversalUnits++;
        if ($progress !== null) { $progress($indexed, $traversalUnits, $currentPath); }
        // Retain only names for deferred subfolders, never an ancestor's Node array.
        // Public Folder listing is eager: peak still includes the widest single folder.
        $subfolders = [];
        while ($nodes !== []) {
            $key = array_key_first($nodes);
            $node = $nodes[$key]; unset($nodes[$key]);
            $traversalUnits++;
            if ($node instanceof Folder) {
                $subfolders[] = $node->getName();
                unset($node);
                continue;
            }

            if (!$node instanceof File || !$this->isSupported($node)) {
                continue;
            }

            $currentPath = $this->displayPath($node, $userId);
            if ($progress !== null) { $progress($indexed, $traversalUnits, $currentPath); }

            if ($this->isSuppressedOpfSidecar($node)) {
                $preservedSidecarId = $this->cleanupSuppressedOpfSidecar($userId, $rootId, $node);
                if ($preservedSidecarId !== null) {
                    $seenLibraryFileIds[] = $preservedSidecarId;
                    $indexed++;
                    if ($progress !== null) {
                        $progress($indexed, $traversalUnits, $currentPath);
                    }
                }
                continue;
            }

            if ($this->scanFile($userId, $rootId, $node, $seenLibraryFileIds, false, null, $summary)) {
                $indexed++;
                if ($progress !== null) {
                    $progress($indexed, $traversalUnits, $currentPath);
                }
            }
        }
        unset($node, $nodes);
        foreach ($subfolders as $name) {
            $child = $folder->get($name);
            if (!$child instanceof Folder) throw new \RuntimeException('Folder changed during scan');
            $this->scanFolder($userId, $rootId, $child, $seenLibraryFileIds, $summary, $indexed, $traversalUnits, $progress);
            unset($child);
        }
    }

    /** Enumerate registered Nextcloud files with bounded public search pages, including submounts. */
    private function scanPagedFolder(string $userId, int $rootId, Folder $folder, array &$seenLibraryFileIds, array &$summary, int &$indexed, int &$traversalUnits, ?callable $progress): void {
        if (!$folder->isReadable()) throw new \RuntimeException('Root is no longer readable');
        $offset = 0;
        $etag = $folder->getEtag();
        $traversalUnits++;
        if ($progress) $progress($indexed,$traversalUnits,$this->displayPath($folder,$userId));
        while (true) {
            $nodes = $folder->search(new ScanSearchQuery($offset));
            if ($nodes === []) break;
            $observations = $this->fileIndexService->findByFileIds($userId,array_map(static fn($node)=>(int)$node->getId(),$nodes));
            foreach ($nodes as $node) {
                $traversalUnits++;
                $path = $this->displayPath($node,$userId);
                if ($progress) $progress($indexed,$traversalUnits,$path);
                if (!$node->isReadable()) throw new \RuntimeException('Source access changed during scan');
                if (!$node instanceof File || !$this->isSupported($node)) continue;
                $expectedId = $node->getId();
                $relative = $folder->getRelativePath($node->getPath());
                if ($relative === null) throw new \RuntimeException('Search result outside root');
                try { $node = $folder->get($relative); }
                catch (\OCP\Files\NotFoundException) { continue; }
                if (!$node instanceof File || $node->getId() !== $expectedId || !$node->isReadable()) throw new \RuntimeException('Source identity changed during scan');
                // Resolve the live node: search cache-jail entries can carry relative storage paths.
                // Search uses Nextcloud's registered file cache. Check physical existence
                // so direct storage deletions cannot take the unchanged-fingerprint path.
                if (!$node->getStorage()->file_exists($node->getInternalPath())) continue;
                if ($this->isSuppressedOpfSidecar($node)) {
                    $id = $this->cleanupSuppressedOpfSidecar($userId,$rootId,$node);
                    if ($id !== null) { $seenLibraryFileIds[]=$id; $indexed++; }
                } elseif ($this->scanFile($userId,$rootId,$node,$seenLibraryFileIds,false,null,$summary,$observations[(int)$node->getId()] ?? null)) $indexed++;
                unset($observations[(int)$node->getId()]);
                if ($progress) $progress($indexed,$traversalUnits,$path);
            }
            unset($node,$nodes,$observations);
            $offset += 200;
            // A changing root invalidates offset enumeration: never sweep missing
            // entries from a traversal that could have skipped a shifted row.
            $fresh = $folder->getParent()->get($folder->getName());
            if ($fresh->getEtag() !== $etag) throw new \RuntimeException('Root changed during scan; retry');
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
            'fingerprintSkips' => 0, 'cachedWarningSkips'=>0, 'metadataExtractions' => 0, 'itemRefreshes' => 0,
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

    private function reportProgress(?callable $progress, int $rootsTotal, int $filesIndexed, int $errorCount, string $summary, array $changeSummary = [], int $traversalUnits = 0, ?string $currentPath = null): void {
        if ($progress === null) {
            return;
        }

        $progress([
            'roots' => $rootsTotal,
            'indexed' => $filesIndexed,
            'traversalUnits' => $traversalUnits,
            'errors' => $errorCount,
            'summary' => $summary,
            'currentPath' => $currentPath,
            'filesAdded' => (int)($changeSummary['filesAdded'] ?? 0),
            'pathsUpdated' => (int)($changeSummary['pathsUpdated'] ?? 0),
            'filesUnchanged' => (int)($changeSummary['filesUnchanged'] ?? 0),
            'filesMissing' => (int)($changeSummary['filesMissing'] ?? 0),
            'metadataErrors' => (int)($changeSummary['metadataErrors'] ?? 0),
            'fingerprintSkips' => $this->metrics['fingerprintSkips'],
            'cachedWarningSkips'=>$this->metrics['cachedWarningSkips'],
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

    private function scanFile(string $userId, int $rootId, File $node, array &$seenLibraryFileIds, bool $force = false, ?int $repairOriginalRootId = null, ?array &$summary = null, ?array $observation = null): bool {
        $fileIndexStarted = $this->clock->now();
        try {
            $file = [
                'fileId' => $node->getId(),
                'mimeType' => $node->getMimetype(),
                'extension' => strtolower(pathinfo($node->getName(), PATHINFO_EXTENSION)),
                'etag' => $node->getEtag(),
                'mtime' => $node->getMTime(),
                'size' => $node->getSize(),
            ];
            if ($repairOriginalRootId !== null) {
                $repair = $this->repairObservation($userId, $repairOriginalRootId, $node);
                if ($repair === null) {
                    return false;
                }
                $rootId = $repair['rootId'];
                $file['cachedPath'] = $repair['path'];
            } else {
                $file['cachedPath'] = $this->displayPath($node, $userId);
            }
            $indexedFile = $this->fileIndexService->upsertFile($userId, $rootId, [
                ...$file,
            ], $observation);
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
            // Adopt v6 only for unchanged sources whose saved proposals already satisfy v7 bounds.
            if ($revision==='metadata-pipeline-v7' && ($indexedFile['previousMetadataExtractorRevision']??null)==='metadata-pipeline-v6'
                && MetadataFastPathDecision::shouldSkip($force,(string)($indexedFile['changeStatus']??'unchanged'),$indexedFile['previousScanStatus']??null,
                    $fingerprint,$indexedFile['previousMetadataInputFingerprint']??null,'metadata-pipeline-v6','metadata-pipeline-v6',
                    fn()=>$this->itemService->canReuseV6ScannerMetadata($userId,(int)$indexedFile['id']))) {
                $this->fileIndexService->markMetadataProcessed($userId,(int)$indexedFile['id'],$fingerprint,$revision);
                $indexedFile['previousMetadataExtractorRevision']=$revision;
            }
            if (MetadataFastPathDecision::shouldSkipWarning($force,(string)($indexedFile['changeStatus']??'unchanged'),
                $indexedFile['previousScanStatus']??null,$indexedFile['previousScanError']??null,$fingerprint,
                $indexedFile['previousMetadataInputFingerprint']??null,$revision,$indexedFile['previousMetadataExtractorRevision']??null,
                fn()=>$this->itemService->hasItemForLibraryFile($userId,(int)$indexedFile['id']))) {
                $this->fileIndexService->markScanError($userId,(int)$indexedFile['id'],$indexedFile['previousScanError'],$fingerprint,$revision);
                if ($summary!==null) $summary['metadataErrors']++;
                $this->metrics['fingerprintSkips']++;
                $this->metrics['cachedWarningSkips']++;
                return true;
            }
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
                $cacheable=MetadataFastPathDecision::deterministicWarning($metadataError)
                    && MetadataFastPathDecision::shouldMarkProcessed($fingerprint,$postExtractionFingerprint,null);
                $this->fileIndexService->markScanError($userId, (int)$indexedFile['id'], $metadataError,
                    $cacheable?$fingerprint:null,$cacheable?$revision:null);
            } elseif (MetadataFastPathDecision::shouldMarkProcessed($fingerprint, $postExtractionFingerprint, $metadataError)) {
                $this->fileIndexService->markMetadataProcessed($userId, (int)$indexedFile['id'], $fingerprint, $revision);
            }
        } catch (ScanCancelledException $e) {
            throw $e;
        } catch (Throwable $e) {
            if ($summary !== null) {
                $summary['metadataErrors']++;
            }
            $diagnostic = SafeDiagnostics::fromThrowable(
                'metadata_extraction_failed',
                'Metadata extraction failed. Review the source file or retry later.',
                $e,
                ['userId' => $userId, 'fileId' => (int)$indexedFile['fileId'], 'path' => (string)$indexedFile['cachedPath'], 'extension' => (string)$indexedFile['extension']],
            );
            SafeDiagnostics::log($diagnostic);
            $this->fileIndexService->markScanError($userId, (int)$indexedFile['id'], SafeDiagnostics::publicText($diagnostic));
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
