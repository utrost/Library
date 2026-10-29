<?php

declare(strict_types=1);

namespace OCP\Files {
    abstract class Node {}
    class File extends Node {
        private bool $metadataHookCalled = false;
        public function __construct(private int $id, private string $path, private $metadataHook = null) {}
        public function getId(): int { return $this->id; }
        public function getPath(): string { return $this->path; }
        public function setPath(string $path): void { $this->path = $path; }
        public function getName(): string { return basename($this->path); }
        public function getMimetype(): string { return 'application/pdf'; }
        public function getEtag(): string { return 'etag'; }
        public function getMTime(): int { return 1; }
        public function getSize(): int {
            if (!$this->metadataHookCalled && is_callable($this->metadataHook)) {
                $this->metadataHookCalled = true;
                ($this->metadataHook)();
            }
            return 10;
        }
        public function getParent(): ?Folder { return null; }
    }
    class Folder extends Node {
        public function __construct(private array $nodesById = []) {}
        public function getById(int $id): array { return $this->nodesById[$id] ?? []; }
    }
    interface IRootFolder { public function getUserFolder(string $userId); }
}

namespace OCA\Library\Metadata {
    class PublicationMetadataService {
        public const PIPELINE_REVISION = 'test';
        public function metadataInputFingerprint($node, int $rootId): string { return 'fingerprint'; }
        public function extractWithSidecar($node): array { return []; }
        public function getLastError(): ?string { return null; }
    }
    class MetadataFastPathDecision { public static function shouldSkipWarning(...$args):bool{return false;} public static function deterministicWarning(...$args):bool{return false;}
        public static function shouldSkip(...$args): bool { return false; }
        public static function shouldMarkProcessed(...$args): bool { return true; }
    }
}

namespace OCA\Library\Service {
    class RootService {
        /** @param array<int, array<string, mixed>>|array<int, array<int, array<string, mixed>>> $rootSnapshots */
        public function __construct(private array $rootSnapshots) {}
        public function listEnabledRoots(string $userId): array {
            $roots = isset($this->rootSnapshots[0]['id']) ? $this->rootSnapshots : array_shift($this->rootSnapshots);
            if ($this->rootSnapshots === []) { $this->rootSnapshots = [$roots]; }
            return array_values(array_filter($roots, static fn (array $root): bool => $root['userId'] === $userId && $root['enabled']));
        }
        public function disableRoot(int $rootId): void {
            foreach ($this->rootSnapshots as &$snapshot) {
                if (isset($snapshot['id'])) {
                    if ((int)$snapshot['id'] === $rootId) { $snapshot['enabled'] = false; }
                    continue;
                }
                foreach ($snapshot as &$root) {
                    if ((int)$root['id'] === $rootId) { $root['enabled'] = false; }
                }
            }
        }
    }
    class FileIndexService {
        public array $upserts = [];
        public array $missingErrors = [];
        public array $metadataErrors = [];
        public function __construct(private array $missing, private array $metadata) {}
        public function hasFilesForRoot(string $userId, int $rootId): bool { return true; }
        public function missingFiles(string $userId): array { return $this->missing[$userId] ?? []; }
        public function metadataErrorFiles(string $userId): array { return $this->metadata[$userId] ?? []; }
        public function upsertFile(string $userId, int $rootId, array $file): array {
            $this->upserts[] = [$userId, $rootId, $file['fileId'], $file['cachedPath']];
            return ['id' => $file['fileId'], 'changeStatus' => 'path_updated'];
        }
        public function markMissingRecheckError(string $userId, int $id, string $error): void { $this->missingErrors[] = [$userId, $id, $error]; }
        public function markScanError(string $userId, int $id, string $error): void { $this->metadataErrors[] = [$userId, $id, $error]; }
        public function markMetadataProcessed(string $userId, int $id, string $fingerprint, string $revision): void {}
    }
    class ItemService {
        public function ensureItemForFile(string $userId, array $file, array $metadata): void {}
        public function hasItemForLibraryFile(string $userId, int $id): bool { return false; }
    }
}

namespace {
    require_once __DIR__ . '/../../lib/Exception/ScanCancelledException.php';
    require_once __DIR__ . '/../../lib/Instrumentation/MonotonicClock.php';
    require_once __DIR__ . '/../../lib/Service/LibraryScanner.php';

    use OCA\Library\Metadata\PublicationMetadataService;
    use OCA\Library\Service\{FileIndexService, ItemService, LibraryScanner, RootService};
    use OCP\Files\{File, Folder, IRootFolder};

    function repairExpect(bool $condition, string $message): void {
        if (!$condition) { throw new RuntimeException($message); }
    }

    final class RepairRootFolderStub implements IRootFolder {
        public array $requestedUsers = [];
        public function __construct(private array $folders) {}
        public function getUserFolder(string $userId): Folder {
            $this->requestedUsers[] = $userId;
            return $this->folders[$userId];
        }
    }

    $rows = [
        ['id' => 101, 'rootId' => 1, 'fileId' => 11, 'cachedPath' => '/Books/Outside.pdf'],
        ['id' => 102, 'rootId' => 3, 'fileId' => 12, 'cachedPath' => '/Disabled/Move.pdf'],
        ['id' => 103, 'rootId' => 1, 'fileId' => 13, 'cachedPath' => '/Books/Inside.pdf'],
        ['id' => 104, 'rootId' => 1, 'fileId' => 14, 'cachedPath' => '/Books/Moved.pdf'],
    ];
    $roots = new RootService([
        ['id' => 1, 'userId' => 'example-user', 'path' => '/Books', 'enabled' => true],
        ['id' => 2, 'userId' => 'example-user', 'path' => '/Books/Comics', 'enabled' => true],
        ['id' => 3, 'userId' => 'example-user', 'path' => '/Disabled', 'enabled' => false],
        ['id' => 4, 'userId' => 'bob', 'path' => '/Bookshelf', 'enabled' => true],
        ['id' => 5, 'userId' => 'example-user', 'path' => '/Other', 'enabled' => true],
    ]);
    $rootFolder = new RepairRootFolderStub([
        'example-user' => new Folder([
            11 => [new File(11, '/example-user/files/Bookshelf/Outside.pdf')],
            12 => [new File(12, '/example-user/files/Disabled/Move.pdf')],
            13 => [new File(13, '/example-user/files/Books/Comics/Inside.pdf')],
            14 => [new File(14, '/example-user/files/Other/Moved.pdf')],
        ]),
        'bob' => new Folder([]),
    ]);

    foreach (['missing', 'metadata'] as $repairType) {
        $index = new FileIndexService($repairType === 'missing' ? ['example-user' => $rows] : [], $repairType === 'metadata' ? ['example-user' => $rows] : []);
        $scanner = new LibraryScanner($roots, $index, new ItemService(), new PublicationMetadataService(), $rootFolder);
        $result = $repairType === 'missing' ? $scanner->recheckMissingFiles('example-user') : $scanner->retryMetadataErrors('example-user');

        repairExpect($result['indexed'] === 2, "$repairType repair admits only files currently inside an enabled user root");
        repairExpect($result['roots'] === 3, "$repairType repair reports enabled roots in the repair scope, not historical candidate root IDs");
        repairExpect($index->upserts === [
            ['example-user', 1, 13, '/Books/Comics/Inside.pdf'],
            ['example-user', 5, 14, '/Other/Moved.pdf'],
        ], "$repairType repair preserves overlapping-root ownership and reassigns a stable-ID move to its current enabled root");
        $scopeErrors = $index->missingErrors;
        repairExpect(count($scopeErrors) === 2, "$repairType repair leaves boundary and disabled-root moves out of scope");
        repairExpect(str_contains($scopeErrors[0][2], 'outside enabled Library roots'), "$repairType repair records a conservative out-of-scope error");
    }

    repairExpect($rootFolder->requestedUsers === ['example-user', 'example-user'], 'repair resolves stable IDs only within the requested user folder');

    foreach (['missing', 'metadata'] as $repairType) {
        $raceRows = [['id' => 201, 'rootId' => 1, 'fileId' => 21, 'cachedPath' => '/Books/Race.pdf']];
        $raceIndex = new FileIndexService($repairType === 'missing' ? ['example-user' => $raceRows] : [], $repairType === 'metadata' ? ['example-user' => $raceRows] : []);
        $enabled = [['id' => 1, 'userId' => 'example-user', 'path' => '/Books', 'enabled' => true]];
        $handoffPathIndex = new FileIndexService($repairType === 'missing' ? ['example-user' => $raceRows] : [], $repairType === 'metadata' ? ['example-user' => $raceRows] : []);
        $handoffPathNode = new File(21, '/example-user/files/Books/Race.pdf', static function () use (&$handoffPathNode): void {
            $handoffPathNode->setPath('/example-user/files/Outside/Race.pdf');
        });
        $handoffPathScanner = new LibraryScanner(
            new RootService($enabled),
            $handoffPathIndex,
            new ItemService(),
            new PublicationMetadataService(),
            new RepairRootFolderStub(['example-user' => new Folder([21 => [$handoffPathNode]])]),
        );
        $handoffPathResult = $repairType === 'missing' ? $handoffPathScanner->recheckMissingFiles('example-user') : $handoffPathScanner->retryMetadataErrors('example-user');
        repairExpect($handoffPathResult['indexed'] === 0 && $handoffPathIndex->upserts === [], "$repairType repair rejects a path change during scanFile metadata evaluation");
        repairExpect(count($handoffPathIndex->missingErrors) === 1, "$repairType scanFile path race remains missing instead of being re-admitted");

        $handoffRootIndex = new FileIndexService($repairType === 'missing' ? ['example-user' => $raceRows] : [], $repairType === 'metadata' ? ['example-user' => $raceRows] : []);
        $mutableRoots = new RootService($enabled);
        $handoffRootNode = new File(21, '/example-user/files/Books/Race.pdf', static function () use ($mutableRoots): void {
            $mutableRoots->disableRoot(1);
        });
        $handoffRootScanner = new LibraryScanner(
            $mutableRoots,
            $handoffRootIndex,
            new ItemService(),
            new PublicationMetadataService(),
            new RepairRootFolderStub(['example-user' => new Folder([21 => [$handoffRootNode]])]),
        );
        $handoffRootResult = $repairType === 'missing' ? $handoffRootScanner->recheckMissingFiles('example-user') : $handoffRootScanner->retryMetadataErrors('example-user');
        repairExpect($handoffRootResult['indexed'] === 0 && $handoffRootIndex->upserts === [], "$repairType repair rejects a root disabled after handoff to scanFile");
        repairExpect(count($handoffRootIndex->missingErrors) === 1, "$repairType scanFile root race remains missing instead of being re-admitted");
    }

    fwrite(STDOUT, "library scanner repair scope runtime tests: OK\n");
}
