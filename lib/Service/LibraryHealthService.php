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
        $rowsPayload = $this->metadataErrorRows($userId, 12, 0);
        $byExtension = [];
        $byError = [];
        foreach ($this->allMetadataErrorRows($userId, 5000, 0) as $row) {
            $extension = (string)$row['extension'];
            $scanError = (string)$row['scanError'];
            $byExtension[$extension] = ($byExtension[$extension] ?? 0) + 1;
            $byError[$scanError] = ($byError[$scanError] ?? 0) + 1;
        }

        return [
            'total' => (int)$rowsPayload['total'],
            'byExtension' => $this->countMapRows($byExtension, 'extension'),
            'byError' => $this->countMapRows($byError, 'scanError'),
            'examples' => $rowsPayload['rows'],
            'reviewUrl' => '?status=metadata_error',
        ];
    }

    /**
     * @return array{schemaVersion:int,kind:string,total:int,limit:int,offset:int,nextOffset:int|null,rows:array<int,array<string,mixed>>}
     */
    public function metadataErrorRows(string $userId, int $limit = 100, int $offset = 0): array {
        $limit = max(1, min(500, $limit));
        $offset = max(0, $offset);
        $total = $this->countMetadataErrors($userId);
        $rows = $this->allMetadataErrorRows($userId, $limit, $offset);
        $nextOffset = ($offset + count($rows)) < $total ? $offset + count($rows) : null;

        return [
            'schemaVersion' => 1,
            'kind' => 'library-import-health-metadata-errors',
            'total' => $total,
            'limit' => $limit,
            'offset' => $offset,
            'nextOffset' => $nextOffset,
            'rows' => $rows,
        ];
    }

    /**
     * @return array{schemaVersion:int,kind:string,total:int,rows:array<int,array<string,mixed>>}
     */
    public function metadataErrorExport(string $userId): array {
        $total = $this->countMetadataErrors($userId);
        return [
            'schemaVersion' => 1,
            'kind' => 'library-import-health-metadata-errors',
            'total' => $total,
            'rows' => $this->allMetadataErrorRows($userId, min(20000, max(1, $total)), 0),
        ];
    }

    public function metadataErrorTsv(string $userId): string {
        $payload = $this->metadataErrorExport($userId);
        $lines = [implode("\t", ['fileId', 'itemId', 'extension', 'scanStatus', 'scanError', 'actualContainerType', 'suggestedRepairAction', 'path'])];
        foreach (($payload['rows'] ?? []) as $row) {
            $lines[] = implode("\t", array_map([$this, 'tsvCell'], [
                (string)($row['fileId'] ?? ''),
                (string)($row['itemId'] ?? ''),
                (string)($row['extension'] ?? ''),
                (string)($row['scanStatus'] ?? ''),
                (string)($row['scanError'] ?? ''),
                (string)($row['actualContainerType'] ?? ''),
                (string)($row['suggestedRepairAction'] ?? ''),
                (string)($row['path'] ?? ''),
            ]));
        }
        return implode("\n", $lines) . "\n";
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

        foreach ($this->coverCandidateRows($userId, 10000, 0) as $row) {
            $total++;
            $extension = (string)$row['extension'];
            $actualContainerType = (string)$row['actualContainerType'];
            $nextcloudPreview = $this->nextcloudPreviewStatus($extension, $actualContainerType, (string)($row['scanStatus'] ?? ''));
            $libraryCoverRoute = $this->libraryCoverRouteStatus($extension, $actualContainerType, (string)($row['path'] ?? ''));
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
                    'fileId' => (int)($row['fileId'] ?? 0),
                    'path' => (string)($row['path'] ?? ''),
                    'extension' => $extension,
                    'actualContainerType' => $actualContainerType,
                    'nextcloudPreview' => $nextcloudPreview,
                    'libraryCoverRoute' => $libraryCoverRoute,
                    'suggestedRepairAction' => $this->suggestedRepairAction($extension, 'cover health', $actualContainerType),
                ];
            }
        }

        return [
            'totalChecked' => $total,
            'byFormat' => array_values($byFormat),
            'examples' => $examples,
            'note' => 'Nextcloud preview/plugin status is separated from Library cover extraction; files are left as-is and non-ZIP CBZ archives are reported, not converted.',
        ];
    }

    /**
     * @return array{schemaVersion:int,kind:string,limit:int,totalCandidates:int,probed:int,rows:array<int,array<string,mixed>>,note:string}
     */
    public function coverProbeReport(string $userId, int $limit = 30): array {
        $limit = max(1, min(200, $limit));
        $rows = [];
        foreach ($this->coverCandidateRows($userId, $limit, 0) as $row) {
            $extension = (string)$row['extension'];
            $actualContainerType = (string)$row['actualContainerType'];
            $path = (string)$row['path'];
            $probe = $this->probeLibraryCoverExtraction($userId, $path, $extension, $actualContainerType);
            $rows[] = [
                ...$row,
                'nextcloudPreview' => $this->nextcloudPreviewStatus($extension, $actualContainerType, (string)($row['scanStatus'] ?? '')),
                'libraryExtraction' => $probe['status'],
                'libraryExtractionReason' => $probe['reason'],
                'manualOverride' => trim((string)($row['manualOverride'] ?? '')) !== '' ? 'present' : 'not-present',
                'policy' => 'inspect-only; files are left as-is',
            ];
        }

        return [
            'schemaVersion' => 1,
            'kind' => 'library-import-health-cover-probe',
            'limit' => $limit,
            'totalCandidates' => $this->countCoverCandidates($userId),
            'probed' => count($rows),
            'rows' => $rows,
            'note' => 'This probes Library cover extraction/readiness separately from Nextcloud preview providers and other plugins; files are left as-is.',
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

    private function countMetadataErrors(string $userId): int {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->selectAlias($qb->createFunction('COUNT(*)'), 'metadata_error_count')
            ->from('library_files', 'f')
            ->innerJoin('f', 'library_items', 'i', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('f.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->orX(
                $qb->expr()->eq('f.scan_status', $qb->createNamedParameter('metadata_error')),
                $qb->expr()->neq('f.scan_error', $qb->createNamedParameter(''))
            ))
            ->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        return $row === false ? 0 : (int)$row['metadata_error_count'];
    }

    /** @return array<int,array<string,mixed>> */
    private function allMetadataErrorRows(string $userId, int $limit, int $offset): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('f.id', 'f.file_id', 'f.cached_path', 'f.extension', 'f.mime_type', 'f.scan_status', 'f.scan_error')
            ->selectAlias('i.id', 'item_id')
            ->from('library_files', 'f')
            ->innerJoin('f', 'library_items', 'i', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('f.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->orX(
                $qb->expr()->eq('f.scan_status', $qb->createNamedParameter('metadata_error')),
                $qb->expr()->neq('f.scan_error', $qb->createNamedParameter(''))
            ))
            ->orderBy('f.extension', 'ASC')
            ->addOrderBy('f.cached_path', 'ASC')
            ->setFirstResult(max(0, $offset))
            ->setMaxResults(max(1, min(20000, $limit)))
            ->executeQuery();
        $rows = [];
        while ($row = $result->fetch()) {
            $extension = strtolower((string)($row['extension'] ?? '')) ?: 'unknown';
            $scanError = trim((string)($row['scan_error'] ?? '')) ?: (string)($row['scan_status'] ?? 'metadata_error');
            $actualContainerType = $this->actualContainerType($userId, (string)($row['cached_path'] ?? ''));
            $rows[] = [
                'fileId' => (int)($row['file_id'] ?? 0),
                'itemId' => (int)($row['item_id'] ?? 0),
                'path' => (string)($row['cached_path'] ?? ''),
                'extension' => $extension,
                'mimeType' => (string)($row['mime_type'] ?? ''),
                'scanStatus' => (string)($row['scan_status'] ?? ''),
                'scanError' => $scanError,
                'actualContainerType' => $actualContainerType,
                'suggestedRepairAction' => $this->suggestedRepairAction($extension, $scanError, $actualContainerType),
            ];
        }
        $result->closeCursor();
        return $rows;
    }

    /** @return array<int,array<string,mixed>> */
    private function coverCandidateRows(string $userId, int $limit, int $offset): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('f.file_id', 'f.cached_path', 'f.extension', 'f.scan_status', 'f.scan_error', 'i.cover_override_data')
            ->selectAlias('i.id', 'item_id')
            ->from('library_files', 'f')
            ->innerJoin('f', 'library_items', 'i', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('f.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->in('f.extension', $qb->createNamedParameter(['epub', 'cbz'], \Doctrine\DBAL\Connection::PARAM_STR_ARRAY)))
            ->orderBy('f.extension', 'ASC')
            ->addOrderBy('f.cached_path', 'ASC')
            ->setFirstResult(max(0, $offset))
            ->setMaxResults(max(1, min(10000, $limit)))
            ->executeQuery();
        $rows = [];
        while ($row = $result->fetch()) {
            $path = (string)($row['cached_path'] ?? '');
            $rows[] = [
                'fileId' => (int)($row['file_id'] ?? 0),
                'itemId' => (int)($row['item_id'] ?? 0),
                'path' => $path,
                'extension' => strtolower((string)($row['extension'] ?? '')) ?: 'unknown',
                'scanStatus' => (string)($row['scan_status'] ?? ''),
                'scanError' => (string)($row['scan_error'] ?? ''),
                'actualContainerType' => $this->actualContainerType($userId, $path),
                'manualOverride' => (string)($row['cover_override_data'] ?? ''),
            ];
        }
        $result->closeCursor();
        return $rows;
    }

    private function countCoverCandidates(string $userId): int {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->selectAlias($qb->createFunction('COUNT(*)'), 'cover_candidate_count')
            ->from('library_files')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->in('extension', $qb->createNamedParameter(['epub', 'cbz'], \Doctrine\DBAL\Connection::PARAM_STR_ARRAY)))
            ->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        return $row === false ? 0 : (int)$row['cover_candidate_count'];
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

    /** @return array{status:string,reason:string} */
    private function probeLibraryCoverExtraction(string $userId, string $cachedPath, string $extension, string $actualContainerType): array {
        if ($actualContainerType !== 'application/zip') {
            return ['status' => 'blocked-non-zip-cbz-left-as-is', 'reason' => 'Library does not mutate source files and the ZIP-based fallback cannot read this container.'];
        }
        $temporaryPath = $this->temporaryUserFile($userId, $cachedPath, 'library-cover-probe-');
        if ($temporaryPath === null) {
            return ['status' => 'unavailable', 'reason' => 'Could not open file through Nextcloud storage.'];
        }
        try {
            if ($extension === 'cbz') {
                return $this->probeZipForFirstImage($temporaryPath);
            }
            if ($extension === 'epub') {
                return $this->probeEpubForCover($temporaryPath);
            }
            return ['status' => 'unknown-format', 'reason' => 'Only EPUB and CBZ are probed in this bounded first pass.'];
        } finally {
            @unlink($temporaryPath);
        }
    }

    private function temporaryUserFile(string $userId, string $cachedPath, string $prefix): ?string {
        try {
            $node = $this->rootFolder->getUserFolder($userId)->get(ltrim($cachedPath, '/'));
            if (!$node instanceof File) {
                return null;
            }
            $temporaryPath = tempnam(sys_get_temp_dir(), $prefix);
            if ($temporaryPath === false) {
                return null;
            }
            file_put_contents($temporaryPath, $node->getContent());
            return $temporaryPath;
        } catch (Throwable) {
            return null;
        }
    }

    /** @return array{status:string,reason:string} */
    private function probeZipForFirstImage(string $temporaryPath): array {
        if (!class_exists(ZipArchive::class)) {
            return ['status' => 'blocked-missing-ziparchive', 'reason' => 'PHP ZipArchive is required for Library CBZ first-image fallback.'];
        }
        $zip = new ZipArchive();
        if ($zip->open($temporaryPath) !== true) {
            return ['status' => 'blocked-zip-open-failed', 'reason' => 'ZIP container could not be opened.'];
        }
        $imageCount = 0;
        for ($index = 0; $index < $zip->numFiles; $index++) {
            $name = $zip->getNameIndex($index);
            if (is_string($name) && !$this->isDirectoryEntry($name) && $this->coverMimeType($name) !== null) {
                $imageCount++;
            }
        }
        $zip->close();
        return $imageCount > 0
            ? ['status' => 'cbz-first-image-fallback', 'reason' => 'Library can extract the first ZIP image; Nextcloud preview/plugin support is not required.']
            : ['status' => 'blocked-no-image-entry', 'reason' => 'ZIP opened but no JPEG/PNG/WEBP page image was found.'];
    }

    /** @return array{status:string,reason:string} */
    private function probeEpubForCover(string $temporaryPath): array {
        if (!class_exists(ZipArchive::class)) {
            return ['status' => 'blocked-missing-ziparchive', 'reason' => 'PHP ZipArchive is required for Library EPUB cover fallback.'];
        }
        $zip = new ZipArchive();
        if ($zip->open($temporaryPath) !== true) {
            return ['status' => 'blocked-zip-open-failed', 'reason' => 'EPUB ZIP container could not be opened.'];
        }
        $container = $zip->getFromName('META-INF/container.xml');
        if (!is_string($container) || !preg_match("/full-path=[\"']([^\"']+)[\"']/i", $container, $containerMatch)) {
            $zip->close();
            return ['status' => 'blocked-epub-container-missing', 'reason' => 'No EPUB container.xml package path was found.'];
        }
        $opfPath = $containerMatch[1];
        $opf = $zip->getFromName($opfPath);
        if (!is_string($opf)) {
            $zip->close();
            return ['status' => 'blocked-epub-opf-missing', 'reason' => 'container.xml points to an OPF file that cannot be read.'];
        }
        $coverHref = null;
        if (preg_match("/<meta\s+[^>]*name=[\"']cover[\"'][^>]*content=[\"']([^\"']+)[\"'][^>]*>/i", $opf, $coverMatch)
            || preg_match("/<meta\s+[^>]*content=[\"']([^\"']+)[\"'][^>]*name=[\"']cover[\"'][^>]*>/i", $opf, $coverMatch)) {
            if (preg_match("/<item\s+[^>]*id=[\"']" . preg_quote($coverMatch[1], '/') . "[\"'][^>]*>/i", $opf, $itemMatch)) {
                $coverHref = $this->xmlAttribute($itemMatch[0], 'href');
            }
        }
        if ($coverHref === null && preg_match("/<item\s+[^>]*properties=[\"'][^\"']*cover-image[^\"']*[\"'][^>]*>/i", $opf, $itemMatch)) {
            $coverHref = $this->xmlAttribute($itemMatch[0], 'href');
        }
        $zip->close();
        return $coverHref !== null
            ? ['status' => 'epub-cover-fallback', 'reason' => 'Library can read an EPUB manifest cover image if Nextcloud/plugin preview fails.']
            : ['status' => 'blocked-epub-cover-not-declared', 'reason' => 'EPUB opens but no manifest cover image was declared.'];
    }

    private function libraryCoverRouteStatus(string $extension, string $actualContainerType, string $cachedPath): string {
        if ($extension === 'epub') {
            return $actualContainerType === 'application/zip' ? 'expected-ok' : 'blocked-bad-epub-container';
        }
        if ($extension === 'cbz') {
            if ($actualContainerType !== 'application/zip') {
                return 'blocked-non-zip-cbz-left-as-is';
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
            return 'Leave file as-is for now; add 7z extraction support or document that Library ZIP cover extraction cannot read this CBZ container.';
        }
        if ($extension === 'cbz' && $actualContainerType === 'application/x-rar-compressed') {
            return 'Leave file as-is for now; add RAR extraction support or document that Library ZIP cover extraction cannot read this CBZ container.';
        }
        if ($extension === 'cbz' && $actualContainerType === 'application/zip') {
            return 'ZIP CBZ is structurally usable; add or repair ComicInfo.xml for richer metadata and use Library cover fallback for first-page covers.';
        }
        if ($extension === 'epub' && $actualContainerType !== 'application/zip') {
            return 'Replace or repair the EPUB container only after source-file policy is decided; current diagnostics leave files untouched.';
        }
        if ($extension === 'epub') {
            return 'EPUB container is readable; inspect OPF/container parsing and add a regression fixture for this shape.';
        }
        return $scanError !== '' ? 'Review scan error and source file.' : 'Review source file.';
    }

    private function xmlAttribute(string $tag, string $attribute): ?string {
        if (preg_match("/\s" . preg_quote($attribute, '/') . "=[\"']([^\"']+)[\"']/", $tag, $match) !== 1) {
            return null;
        }
        return html_entity_decode($match[1], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    }

    private function coverMimeType(string $name): ?string {
        return match (strtolower(pathinfo($name, PATHINFO_EXTENSION))) {
            'jpg', 'jpeg' => 'image/jpeg',
            'png' => 'image/png',
            'webp' => 'image/webp',
            default => null,
        };
    }

    private function isDirectoryEntry(string $name): bool {
        return str_ends_with($name, '/');
    }

    private function tsvCell(string $value): string {
        return str_replace(["\t", "\r", "\n"], [' ', ' ', ' '], $value);
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
