<?php
declare(strict_types=1);

namespace OCP\Files {
    abstract class Node {}
    class File extends Node {
        public function __construct(private string $name, private string $mime = 'text/plain') {}
        public function getName(): string { return $this->name; } public function getMimetype(): string { return $this->mime; }
        public function getId(): int { return crc32($this->name); } public function getPath(): string { return '/alice/files/'.$this->name; }
        public function getEtag(): string { return 'etag'; } public function getMTime(): int { return 1; } public function getSize(): int { return 10; }
        public function getParent(): ?Folder { return null; }
    }
    class Folder extends Node {
        public function __construct(private array $children, private ?\Closure $onListing = null, private array $paths = []) {}
        public function getDirectoryListing(): array { if ($this->onListing) ($this->onListing)(); return $this->children; }
        public function get(string $path): Node { return $this->paths[$path] ?? throw new \RuntimeException('missing path'); }
    }
    interface IRootFolder { public function getUserFolder(string $userId); }
}
namespace OCA\Library\Metadata {
    class PublicationMetadataService {
        public const PIPELINE_REVISION = 1; public bool $failExtraction = false;
        public function metadataInputFingerprint($node, int $root): string { return 'fp'; }
        public function extractWithSidecar($node): array { if ($this->failExtraction) throw new \RuntimeException('extract failed'); return []; }
        public function getLastError(): ?string { return null; }
    }
    class MetadataFastPathDecision { public static function shouldSkip(...$args): bool { return false; } public static function shouldMarkProcessed(...$args): bool { return true; } }
}
namespace OCA\Library\Service {
    class RootService {
        public array $marked = [];
        public function __construct(private array $roots = [['id'=>3,'path'=>'/']]) {}
        public function listEnabledRoots(string $userId): array { return $this->roots; }
        public function markScanned(int $id): void { $this->marked[] = $id; }
    }
    class FileIndexService {
        public array $missingRoots = [];
        public function markMissingExcept(string $u,int $r,array $ids): int { $this->missingRoots[] = $r; return 0; }
        public function upsertFile(string $u,int $r,array $file): array { return ['id'=>$file['fileId'],'changeStatus'=>'added']; }
        public function markScanError(string $u,int $id,string $error): void {} public function markMetadataProcessed(string $u,int $id,string $fp,int $rev): void {}
    }
    class ItemService {
        public bool $failRefresh = false;
        public function ensureItemForFile(string $u,array $file,array $metadata): void { if ($this->failRefresh) throw new \RuntimeException('refresh failed'); }
        public function hasItemForLibraryFile(string $u,int $id): bool { return false; }
    }
}
namespace {
    require_once __DIR__ . '/../../lib/Exception/ScanCancelledException.php';
    require_once __DIR__ . '/../../lib/Instrumentation/MonotonicClock.php';
    require_once __DIR__ . '/../../lib/Service/LibraryScanner.php';
    use OCA\Library\Instrumentation\MonotonicClock; use OCA\Library\Service\{LibraryScanner,RootService,FileIndexService,ItemService}; use OCP\Files\{File,Folder,IRootFolder};
    function traversalExpect(bool $condition,string $message): void { if(!$condition) throw new RuntimeException($message); }
    final class RootFolderStub implements IRootFolder { public function __construct(private Folder $folder) {} public function getUserFolder(string $userId): Folder { return $this->folder; } }
    $now = 0; $listing = static function () use (&$now): void { $now += 1_000_000_000; };
    $nested = new Folder([new Folder([], $listing), new Folder([new File('ignored.txt')], $listing)], $listing);
    $scanner = new LibraryScanner(new RootService(), new FileIndexService(), new ItemService(), new \OCA\Library\Metadata\PublicationMetadataService(), new RootFolderStub($nested), new MonotonicClock(static function () use (&$now): int { return $now; }));
    $progress = []; $result = $scanner->scan('alice', null, static function(array $p) use (&$progress): void { $progress[]=$p; });
    traversalExpect($result['indexed'] === 0, 'unsupported and empty traversal does not alter indexed count');
    traversalExpect(count(array_filter($progress, static fn(array $p): bool => ($p['traversalUnits'] ?? 0) > 0)) >= 3, 'time checkpoints occur through nested and empty folders');
    $now = 0; $files = []; for($i=0;$i<205;$i++) $files[]=new File("ignored-$i.txt");
    $scanner = new LibraryScanner(new RootService(), new FileIndexService(), new ItemService(), new \OCA\Library\Metadata\PublicationMetadataService(), new RootFolderStub(new Folder($files)), new MonotonicClock(static fn(): int => $now));
    $progress=[]; $scanner->scan('alice', null, static function(array $p) use (&$progress): void { $progress[]=$p; });
    $units=array_column($progress,'traversalUnits');
    traversalExpect(in_array(100,$units,true) && in_array(200,$units,true), 'count checkpoints occur every 100 unsupported nodes');
    traversalExpect(max(array_column($progress,'indexed')) === 0, 'checkpoint payload preserves indexed count');

    $metadata = new \OCA\Library\Metadata\PublicationMetadataService(); $metadata->failExtraction = true;
    $scanner = new LibraryScanner(new RootService(), new FileIndexService(), new ItemService(), $metadata, new RootFolderStub(new Folder([new File('broken.pdf','application/pdf')])));
    $result = $scanner->scan('alice');
    traversalExpect($result['metadataExtractions'] === 1 && $result['itemRefreshes'] === 0, 'failed extraction counts an extraction attempt but no refresh success');
    $items = new ItemService(); $items->failRefresh = true;
    $scanner = new LibraryScanner(new RootService(), new FileIndexService(), $items, new \OCA\Library\Metadata\PublicationMetadataService(), new RootFolderStub(new Folder([new File('refresh.pdf','application/pdf')])));
    $result = $scanner->scan('alice');
    traversalExpect($result['metadataExtractions'] === 1 && $result['itemRefreshes'] === 0, 'failed ensureItem is not a successful item refresh');

    $failure = new Folder([], static function (): void { throw new \RuntimeException('late listing failed'); });
    $firstRoot = new Folder([
        new Folder([new File('first.pdf', 'application/pdf')]),
        new Folder([new File('second.pdf', 'application/pdf'), $failure]),
    ]);
    $secondRoot = new Folder([new File('third.pdf', 'application/pdf')]);
    $userFolder = new Folder([], null, ['first' => $firstRoot, 'second' => $secondRoot]);
    $roots = new RootService([['id'=>1,'path'=>'/first'], ['id'=>2,'path'=>'/second']]);
    $fileIndex = new FileIndexService();
    $scanner = new LibraryScanner($roots, $fileIndex, new ItemService(), new \OCA\Library\Metadata\PublicationMetadataService(), new RootFolderStub($userFolder));
    $progress = [];
    $result = $scanner->scan('alice', null, static function(array $p) use (&$progress): void { $progress[] = $p; });
    $indexedProgress = array_column($progress, 'indexed');
    $unitProgress = array_column($progress, 'traversalUnits');
    traversalExpect($indexedProgress === (function(array $values): array { $sorted=$values; sort($sorted); return $sorted; })($indexedProgress), 'indexed progress is globally monotonic across nested siblings and roots');
    traversalExpect($unitProgress === (function(array $values): array { $sorted=$values; sort($sorted); return $sorted; })($unitProgress), 'traversal progress is globally monotonic across nested siblings and roots');
    traversalExpect($result['indexed'] === 3, 'terminal result preserves successful files before and after a partial-root failure');
    traversalExpect($result['filesAdded'] === 3, 'terminal change summary preserves successful files from the partial root');
    traversalExpect(count($result['errors']) === 1, 'partial-root listing failure is reported once');
    $errorProgress = array_values(array_filter($progress, static fn(array $p): bool => str_starts_with($p['summary'], 'Scan error:')));
    traversalExpect(count($errorProgress) === 1 && $errorProgress[0]['indexed'] === 2 && $errorProgress[0]['filesAdded'] === 2 && $errorProgress[0]['traversalUnits'] > 0, 'root-error progress preserves global count, summary, and traversal units');
    traversalExpect($fileIndex->missingRoots === [2] && $roots->marked === [2], 'missing sweep and mark-scanned run only for the successfully traversed root');
    fwrite(STDOUT,"library scanner traversal runtime tests: OK\n");
}
