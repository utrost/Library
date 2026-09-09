<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\Files\File;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;
use Throwable;
use ZipArchive;

final class LibraryHealthService {
    /** @var array<string,string> */
    private array $containerTypeCache = [];

    public function __construct(
        private IDBConnection $db,
        private IRootFolder $rootFolder,
    ) {
    }

    /**
     * @return array<string, mixed>
     */
    public function importHealthSummary(string $userId): array {
        if ($userId === '') {
            return $this->emptySummary();
        }

        $metadataErrorReview = $this->metadataErrorReview($userId);
        $archiveMagicSummary = $this->archiveMagicSummary($userId);
        $coverHealthSummary = $this->coverHealthSummary($userId, $archiveMagicSummary);

        return [
            'totalFiles' => $this->countFiles($userId),
            'metadataErrorReview' => $metadataErrorReview,
            'archiveMagicSummary' => $archiveMagicSummary,
            'coverHealthSummary' => $coverHealthSummary,
        ];
    }

    /**
     * @return array{total:int,byExtension:array<int,array<string,mixed>>,byError:array<int,array<string,mixed>>,examples:array<int,array<string,mixed>>,reviewUrl:string}
     */
    public function metadataErrorReview(string $userId): array {
        $total = 0;
        $byExtension = [];
        $byError = [];
        $examples = [];

        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('f.id', 'f.file_id', 'f.cached_path', 'f.extension', 'f.mime_type', 'f.scan_status', 'f.scan_error')
            ->from('library_files', 'f')
            ->innerJoin('f', 'library_items', 'i', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('f.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->orX(
                $qb->expr()->eq('f.scan_status', $qb->createNamedParameter('metadata_error')),
                $qb->expr()->neq('f.scan_error', $qb->createNamedParameter(''))
            ))
            ->orderBy('f.extension', 'ASC')
            ->addOrderBy('f.cached_path', 'ASC')
            ->setMaxResults(5000)
            ->executeQuery();

        while ($row = $result->fetch()) {
            $total++;
            $extension = strtolower((string)($row['extension'] ?? '')) ?: 'unknown';
            $scanError = trim((string)($row['scan_error'] ?? '')) ?: (string)($row['scan_status'] ?? 'metadata_error');
            $byExtension[$extension] = ($byExtension[$extension] ?? 0) + 1;
            $byError[$scanError] = ($byError[$scanError] ?? 0) + 1;
            if (count($examples) < 12) {
                $actualContainerType = $this->actualContainerType($userId, (string)($row['cached_path'] ?? ''));
                $examples[] = [
                    'fileId' => (int)($row['file_id'] ?? 0),
                    'path' => (string)($row['cached_path'] ?? ''),
                    'extension' => $extension,
                    'scanStatus' => (string)($row['scan_status'] ?? ''),
                    'scanError' => $scanError,
                    'actualContainerType' => $actualContainerType,
                    'suggestedRepairAction' => $this->suggestedRepairAction($extension, $scanError, $actualContainerType),
                ];
            }
        }
        $result->closeCursor();

        return [
            'total' => $total,
            'byExtension' => $this->countMapRows($byExtension, 'extension'),
            'byError' => $this->countMapRows($byError, 'scanError'),
            'examples' => $examples,
            'reviewUrl' => '?status=metadata_error',
        ];
    }

    /**
     * @return array{totalChecked:int,mismatches:int,byExtensionAndContainer:array<int,array<string,mixed>>,examples:array<int,array<string,mixed>>}
     */
    public function archiveMagicSummary(string $userId): array {
        $totalChecked = 0;
        $mismatches = 0;
        $byExtensionAndContainer = [];
        $examples = [];

        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('file_id', 'cached_path', 'extension')
            ->from('library_files')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->in('extension', $qb->createNamedParameter(['epub', 'cbz'], \Doctrine\DBAL\Connection::PARAM_STR_ARRAY)))
            ->orderBy('extension', 'ASC')
            ->addOrderBy('cached_path', 'ASC')
            ->setMaxResults(10000)
            ->executeQuery();

        while ($row = $result->fetch()) {
            $extension = strtolower((string)($row['extension'] ?? ''));
            $actualContainerType = $this->actualContainerType($userId, (string)($row['cached_path'] ?? ''));
            $totalChecked++;
            $key = $extension . '|' . $actualContainerType;
            $byExtensionAndContainer[$key] = ($byExtensionAndContainer[$key] ?? 0) + 1;
            $mismatch = ($extension === 'cbz' && $actualContainerType !== 'application/zip')
                || ($extension === 'epub' && $actualContainerType !== 'application/zip');
            if ($mismatch) {
                $mismatches++;
                if (count($examples) < 12) {
                    $examples[] = [
                        'fileId' => (int)($row['file_id'] ?? 0),
                        'path' => (string)($row['cached_path'] ?? ''),
                        'extension' => $extension,
                        'actualContainerType' => $actualContainerType,
                        'suggestedRepairAction' => $this->suggestedRepairAction($extension, 'archive/container mismatch', $actualContainerType),
                    ];
                }
            }
        }
        $result->closeCursor();

        $rows = [];
        foreach ($byExtensionAndContainer as $key => $count) {
            [$extension, $actualContainerType] = explode('|', $key, 2);
            $rows[] = [
                'extension' => $extension,
                'actualContainerType' => $actualContainerType,
                'count' => $count,
            ];
        }
        usort($rows, static fn (array $a, array $b): int => [$a['extension'], $a['actualContainerType']] <=> [$b['extension'], $b['actualContainerType']]);

        return [
            'totalChecked' => $totalChecked,
            'mismatches' => $mismatches,
            'byExtensionAndContainer' => $rows,
            'examples' => $examples,
        ];
    }

    /**
     * @param array<string,mixed> $archiveMagicSummary
     * @return array<string,mixed>
     */
    public function coverHealthSummary(string $userId, array $archiveMagicSummary = []): array {
        $byFormat = [];
        $examples = [];
        $total = 0;

        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('file_id', 'cached_path', 'extension', 'scan_status', 'scan_error')
            ->from('library_files')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->in('extension', $qb->createNamedParameter(['epub', 'cbz'], \Doctrine\DBAL\Connection::PARAM_STR_ARRAY)))
            ->orderBy('extension', 'ASC')
            ->addOrderBy('cached_path', 'ASC')
            ->setMaxResults(10000)
            ->executeQuery();

        while ($row = $result->fetch()) {
            $total++;
            $extension = strtolower((string)($row['extension'] ?? '')) ?: 'unknown';
            $actualContainerType = $this->actualContainerType($userId, (string)($row['cached_path'] ?? ''));
            $nextcloudPreview = $this->nextcloudPreviewStatus($extension, $actualContainerType, (string)($row['scan_status'] ?? ''));
            $libraryCoverRoute = $this->libraryCoverRouteStatus($extension, $actualContainerType, (string)($row['cached_path'] ?? ''));
            $key = $extension . '|' . $nextcloudPreview . '|' . $libraryCoverRoute;
            if (!isset($byFormat[$key])) {
                $byFormat[$key] = [
                    'extension' => $extension,
                    'nextcloudPreview' => $nextcloudPreview,
                    'libraryCoverRoute' => $libraryCoverRoute,
                    'count' => 0,
                ];
            }
            $byFormat[$key]['count']++;
            if (($nextcloudPreview !== 'expected-ok' || $libraryCoverRoute !== 'expected-ok') && count($examples) < 12) {
                $examples[] = [
                    'fileId' => (int)($row['file_id'] ?? 0),
                    'path' => (string)($row['cached_path'] ?? ''),
                    'extension' => $extension,
                    'actualContainerType' => $actualContainerType,
                    'nextcloudPreview' => $nextcloudPreview,
                    'libraryCoverRoute' => $libraryCoverRoute,
                    'suggestedRepairAction' => $this->suggestedRepairAction($extension, 'cover health', $actualContainerType),
                ];
            }
        }
        $result->closeCursor();

        return [
            'totalChecked' => $total,
            'byFormat' => array_values($byFormat),
            'examples' => $examples,
            'note' => 'Nextcloud preview status is separated from Library cover-route fallback status; CBZ files use Library first-image fallback when they are real ZIP archives.',
        ];
    }

    private function countFiles(string $userId): int {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->selectAlias($qb->createFunction('COUNT(*)'), 'file_count')
            ->from('library_files')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->neq('scan_status', $qb->createNamedParameter('sidecar')))
            ->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        return $row === false ? 0 : (int)$row['file_count'];
    }

    private function actualContainerType(string $userId, string $cachedPath): string {
        $path = ltrim($cachedPath, '/');
        $cacheKey = $userId . '|' . $path;
        if (isset($this->containerTypeCache[$cacheKey])) {
            return $this->containerTypeCache[$cacheKey];
        }
        if ($path === '') {
            return $this->containerTypeCache[$cacheKey] = 'unavailable';
        }
        try {
            $node = $this->rootFolder->getUserFolder($userId)->get($path);
            if (!$node instanceof File) {
                return $this->containerTypeCache[$cacheKey] = 'unavailable';
            }
            $handle = $node->fopen('r');
            if (!is_resource($handle)) {
                return $this->containerTypeCache[$cacheKey] = 'unavailable';
            }
            $magic = (string)fread($handle, 8);
            fclose($handle);
        } catch (Throwable) {
            return $this->containerTypeCache[$cacheKey] = 'unavailable';
        }

        if (str_starts_with($magic, "PK\x03\x04")) {
            return $this->containerTypeCache[$cacheKey] = 'application/zip';
        }
        if (str_starts_with($magic, "7z\xBC\xAF\x27\x1C")) {
            return $this->containerTypeCache[$cacheKey] = 'application/x-7z-compressed';
        }
        if (str_starts_with($magic, "Rar!\x1A\x07")) {
            return $this->containerTypeCache[$cacheKey] = 'application/x-rar-compressed';
        }
        return $this->containerTypeCache[$cacheKey] = 'unknown:' . bin2hex($magic);
    }

    private function libraryCoverRouteStatus(string $extension, string $actualContainerType, string $cachedPath): string {
        if ($extension === 'epub') {
            return $actualContainerType === 'application/zip' ? 'expected-ok' : 'blocked-bad-epub-container';
        }
        if ($extension === 'cbz') {
            if ($actualContainerType !== 'application/zip') {
                return 'blocked-non-zip-cbz';
            }
            return class_exists(ZipArchive::class) ? 'expected-ok' : 'blocked-missing-ziparchive';
        }
        return 'unknown-format';
    }

    private function nextcloudPreviewStatus(string $extension, string $actualContainerType, string $scanStatus): string {
        if ($extension === 'cbz') {
            return 'unsupported-cbz-preview-provider';
        }
        if ($extension === 'epub') {
            return $actualContainerType === 'application/zip' && $scanStatus !== 'metadata_error' ? 'expected-ok' : 'preview-risk';
        }
        return 'unknown-format';
    }

    private function suggestedRepairAction(string $extension, string $scanError, string $actualContainerType): string {
        if ($extension === 'cbz' && $actualContainerType === 'application/x-7z-compressed') {
            return 'Convert 7z archive to real ZIP/CBZ or add 7z extraction support before expecting metadata and covers.';
        }
        if ($extension === 'cbz' && $actualContainerType === 'application/x-rar-compressed') {
            return 'Convert RAR archive to real ZIP/CBZ or add RAR extraction support before expecting metadata and covers.';
        }
        if ($extension === 'cbz' && $actualContainerType === 'application/zip') {
            return 'ZIP CBZ is structurally usable; add or repair ComicInfo.xml for richer metadata and use Library cover fallback for first-page covers.';
        }
        if ($extension === 'epub' && $actualContainerType !== 'application/zip') {
            return 'Replace or repair the EPUB container; it is not readable as a normal EPUB ZIP.';
        }
        if ($extension === 'epub') {
            return 'EPUB container is readable; inspect OPF/container parsing and add a regression fixture for this shape.';
        }
        return $scanError !== '' ? 'Review scan error and source file.' : 'Review source file.';
    }

    /**
     * @param array<string,int> $map
     * @return array<int,array<string,mixed>>
     */
    private function countMapRows(array $map, string $labelKey): array {
        ksort($map);
        $rows = [];
        foreach ($map as $label => $count) {
            $rows[] = [$labelKey => $label, 'count' => $count];
        }
        return $rows;
    }

    /**
     * @return array<string,mixed>
     */
    private function emptySummary(): array {
        return [
            'totalFiles' => 0,
            'metadataErrorReview' => ['total' => 0, 'byExtension' => [], 'byError' => [], 'examples' => [], 'reviewUrl' => '?status=metadata_error'],
            'archiveMagicSummary' => ['totalChecked' => 0, 'mismatches' => 0, 'byExtensionAndContainer' => [], 'examples' => []],
            'coverHealthSummary' => ['totalChecked' => 0, 'byFormat' => [], 'examples' => [], 'note' => ''],
        ];
    }
}
