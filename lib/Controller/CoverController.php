<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Exception\BatchLimitExceededException;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\DataDownloadResponse;
use OCP\AppFramework\Http\RedirectResponse;
use OCA\Library\Service\ArchiveCoverService;
use OCA\Library\Service\ItemService;
use OCA\Library\Service\FileIndexService;
use OCA\Library\Service\ManualCoverUploadService;
use OCA\Library\Service\ManualCoverValidationException;
use OCA\Library\Service\ManualCoverValidator;
use OCA\Library\Service\SecurityAuditLogger;
use OCA\Library\Service\SelectedItemIds;
use OCP\Files\File;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;
use OCP\IPreview;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;
use Throwable;
use ZipArchive;
use Psr\Log\LoggerInterface;
use OCA\Library\Instrumentation\MonotonicClock;

class CoverController extends Controller {
    private MonotonicClock $clock;
    private ManualCoverUploadService $manualCoverUploadService;
    private ?SecurityAuditLogger $securityAudit = null;
    private int $coverStartedAt = 0;
    public function __construct(
        string $appName,
        IRequest $request,
        private IUserSession $userSession,
        private IDBConnection $db,
        private IRootFolder $rootFolder,
        private IPreview $previewManager,
        private ItemService $itemService,
        private FileIndexService $fileIndexService,
        private IURLGenerator $urlGenerator,
        private ArchiveCoverService $archiveCoverService,
        private LoggerInterface $logger,
        ?MonotonicClock $clock = null,
        ?ManualCoverUploadService $manualCoverUploadService = null,
        ?SecurityAuditLogger $securityAudit = null,
    ) {
        parent::__construct($appName, $request);
        $this->securityAudit = $securityAudit;
        $this->clock = $clock ?? new MonotonicClock();
        $this->manualCoverUploadService = $manualCoverUploadService ?? new ManualCoverUploadService(new ManualCoverValidator());
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function show(int $itemId): DataDownloadResponse {
        $this->coverStartedAt = $this->clock->now();
        $refreshRequested = $this->isRefreshRequest();
        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';
        if ($userId === '') {
            return $this->placeholderResponse('LIB', 'not-authenticated');
        }

        $item = $this->itemService->findItem($userId, $itemId);
        if ($item !== null && trim((string)($item['coverOverrideData'] ?? '')) !== '') {
            return $this->coverResponse(
                base64_decode((string)$item['coverOverrideData'], true) ?: '',
                'library-cover-manual-' . $itemId . '.' . $this->coverExtension((string)($item['coverOverrideMimeType'] ?? 'image/jpeg')),
                (string)($item['coverOverrideMimeType'] ?? 'image/jpeg'),
                'manual-cover',
                'manual-cover-upload',
                3600,
                $refreshRequested
            );
        }

        $fileId = $this->findFileIdForItem($userId, $itemId);
        if ($fileId === null) {
            return $this->placeholderResponse('LIB', 'item-not-found');
        }

        $file = $this->findUserFileById($userId, $fileId);
        if (!$file instanceof File) {
            return $this->placeholderResponse('LIB', 'file-not-found');
        }

        try {
            if ($this->previewManager->isAvailable($file)) {
                $preview = $this->previewManager->getPreview($file, 360, 520, true, IPreview::MODE_COVER);
                return $this->coverResponse(
                    $preview->getContent(),
                    'library-cover-' . $itemId . '.' . ($preview->getExtension() ?: 'jpg'),
                    $preview->getMimeType(),
                    'preview',
                    'preview-manager',
                    3600,
                    $refreshRequested
                );
            }
        } catch (Throwable $e) {
            // Fall through to CBZ first-image cover or SVG placeholder.
            $previewError = 'preview-error';
        }

        $epubCover = $this->extractEpubCover($file, $itemId);
        if ($epubCover !== null) {
            return $epubCover;
        }

        $cbzCover = $this->extractCbzFirstImageCover($file, $itemId);
        if ($cbzCover !== null) {
            return $cbzCover;
        }

        $archiveCover = $this->extractArchiveFirstImageCover($file, $itemId);
        if ($archiveCover !== null) {
            return $archiveCover;
        }
        return $this->placeholderResponse($this->coverInitials($file->getName()), $previewError ?? ($this->isCbzFile($file) ? 'cbz-cover-unavailable' : 'preview-unavailable'));
    }

    #[NoAdminRequired]
    public function override(int $itemId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $upload = $_FILES['coverOverrideFile'] ?? null;
            $data = null;
            $mimeType = null;
            if (is_array($upload) && ($upload['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE) {
                try {
                    $validated = $this->manualCoverUploadService->validateUpload($upload);
                    $data = base64_encode($validated['content']);
                    $mimeType = $validated['mimeType'];
                } catch (ManualCoverValidationException) {
                    // Keep decoder details private and expose only a bounded result code.
                    $this->securityAudit?->warning('library.manual_cover.replace', $user->getUID(), 'replace', 'manual_cover', 'rejected', [
                        'target_id' => $itemId,
                        'reason' => 'invalid_upload',
                    ]);
                    return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]) . '?coverUploadError=invalid');
                }
            }
            if ($data === null && trim((string)$this->request->getParam('coverOverrideUrl', '')) !== '') {
                $this->securityAudit?->warning('library.manual_cover.replace', $user->getUID(), 'replace', 'manual_cover', 'rejected', [
                    'target_id' => $itemId,
                    'reason' => 'remote_url_disabled',
                ]);
                return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]) . '?coverUploadError=remote-url-disabled');
            }
            if ($data !== null) {
                $this->itemService->setManualCoverOverride($user->getUID(), $itemId, $data, $mimeType);
                $this->securityAudit?->warning('library.manual_cover.replace', $user->getUID(), 'replace', 'manual_cover', 'success', [
                    'target_id' => $itemId,
                    'reason' => 'validated_upload',
                ]);
                return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]) . '?coverRefresh=1');
            }
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]));
    }

    #[NoAdminRequired]
    public function revert(int $itemId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->itemService->clearManualCoverOverride($user->getUID(), $itemId);
            $this->securityAudit?->warning('library.manual_cover.revert', $user->getUID(), 'revert', 'manual_cover', 'success', [
                'target_id' => $itemId,
                'reason' => 'manual_cover_cleared',
            ]);
            return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]) . '?coverRefresh=1');
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]));
    }

    #[NoAdminRequired]
    public function batchrefresh(): RedirectResponse {
        $user = $this->userSession->getUser();
        $filters = $this->catalogueFiltersFromRequest();
        $requested = 0;
        $selectedItemIds = [];
        if ($user !== null) {
            try {
                $selectedItemIds = $this->fileIndexService->coverRefreshItemIds(
                    $user->getUID(),
                    SelectedItemIds::parse($this->request->getParam('itemIds', null)),
                );
                $requested = count($selectedItemIds);
            } catch (BatchLimitExceededException $e) {
                $query = array_filter($filters, static fn (string $value): bool => $value !== '');
                $query['batchLimitError'] = '1';
                return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index') . '?' . http_build_query($query));
            } catch (\InvalidArgumentException $e) {
                $query = array_filter($filters, static fn (string $value): bool => $value !== '');
                $query['batchSelectionError'] = '1';
                return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index') . '?' . http_build_query($query));
            }
        }

        $query = array_filter($filters, static fn (string $value): bool => $value !== '');
        if ($requested > 0) {
            $query['coverRefresh'] = '1';
            $query['coverRefreshItemIds'] = $selectedItemIds;
        }
        $query['batchCoverRefreshResult'] = '1';
        $query['batchCoverRefreshRequested'] = (string)$requested;
        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index') . '?' . http_build_query($query));
    }

    private function catalogueFiltersFromRequest(): array {
        $filters = [];
        foreach (['q', 'type', 'publication', 'year', 'creator', 'format', 'tag', 'shelf', 'folder', 'status', 'workflowStatus', 'subject', 'classification', 'scannerConflicts', 'starred', 'needsMetadata', 'coverReview', 'noCreator', 'noPublication', 'noDate', 'titleFromFilename', 'noDescription', 'unsupportedContainer', 'weakMetadata', 'unreviewedImports', 'sort'] as $key) {
            $filters[$key] = trim((string)$this->request->getParam($key, ''));
        }
        if ($filters['sort'] === '') {
            $filters['sort'] = 'title';
        }
        return $filters;
    }

    private function isEpubFile(File $file): bool {
        $extension = strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION));
        $mimeType = strtolower($file->getMimetype());
        return $extension === 'epub' || $mimeType === 'application/epub+zip';
    }

    private function extractEpubCover(File $file, int $itemId): ?DataDownloadResponse {
        // EPUB cover fallback: read META-INF/container.xml, then package OPF cover-image metadata.
        if (!$this->isEpubFile($file) || !class_exists(ZipArchive::class)) {
            return null;
        }

        $temporaryPath = tempnam(sys_get_temp_dir(), 'library-epub-cover-');
        if ($temporaryPath === false) {
            return null;
        }

        try {
            if (!$this->copyFileToTemporaryPath($file, $temporaryPath)) {
                return null;
            }
            $zip = new ZipArchive();
            if ($zip->open($temporaryPath) !== true) {
                return null;
            }

            if ($zip->numFiles > ArchiveCoverService::MAX_ENTRY_COUNT) {
                $zip->close();
                return null;
            }
            $sourceBytes = max(1, (int)filesize($temporaryPath));
            if (!$this->zipArchiveWithinBudget($zip, $sourceBytes)) {
                $zip->close();
                return null;
            }
            $containerStat = $zip->statName('META-INF/container.xml');
            if (!$this->zipEntryAllowed($containerStat, $sourceBytes, ArchiveCoverService::MAX_METADATA_BYTES)) {
                $zip->close();
                return null;
            }
            $container = $this->archiveCoverService->readZipEntryBounded($zip, 'META-INF/container.xml', ArchiveCoverService::MAX_METADATA_BYTES);
            if (!is_string($container) || !preg_match("/full-path=[\"']([^\"']+)[\"']/i", $container, $containerMatch)) {
                $zip->close();
                return null;
            }

            $opfPath = html_entity_decode($containerMatch[1], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
            $opfStat = $zip->statName($opfPath);
            $remainingMetadataBytes = ArchiveCoverService::MAX_METADATA_BYTES - strlen($container);
            if (!$this->archiveCoverService->isSafeEntryName($opfPath)
                || $remainingMetadataBytes < 1
                || !$this->zipEntryAllowed($opfStat, $sourceBytes, $remainingMetadataBytes)) {
                $zip->close();
                return null;
            }
            $opf = $this->archiveCoverService->readZipEntryBounded($zip, $opfPath, $remainingMetadataBytes);
            if (!is_string($opf)) {
                $zip->close();
                return null;
            }

            $coverId = null;
            if (preg_match("/<meta\\s+[^>]*name=[\"']cover[\"'][^>]*content=[\"']([^\"']+)[\"'][^>]*>/i", $opf, $coverMatch)
                || preg_match("/<meta\\s+[^>]*content=[\"']([^\"']+)[\"'][^>]*name=[\"']cover[\"'][^>]*>/i", $opf, $coverMatch)) {
                $coverId = $coverMatch[1];
            }

            $coverHref = null;
            $coverMimeType = null;
            if ($coverId !== null && preg_match("/<item\\s+[^>]*id=[\"']" . preg_quote($coverId, '/') . "[\"'][^>]*>/i", $opf, $itemMatch)) {
                $coverHref = $this->xmlAttribute($itemMatch[0], 'href');
                $coverMimeType = $this->xmlAttribute($itemMatch[0], 'media-type');
            }
            if ($coverHref === null && preg_match("/<item\\s+[^>]*properties=[\"'][^\"']*cover-image[^\"']*[\"'][^>]*>/i", $opf, $itemMatch)) {
                $coverHref = $this->xmlAttribute($itemMatch[0], 'href');
                $coverMimeType = $this->xmlAttribute($itemMatch[0], 'media-type');
            }

            if ($coverHref === null) {
                $zip->close();
                return null;
            }

            if (str_starts_with($coverHref, '/') || str_starts_with($coverHref, '\\')
                || preg_match('/[\x00-\x1F\x7F]/', $coverHref) === 1) {
                $zip->close();
                return null;
            }

            $coverPath = $this->safeArchiveRelativePath(dirname($opfPath) . '/' . $coverHref);
            if ($coverPath === null) {
                $zip->close();
                return null;
            }
            $coverStat = $zip->statName($coverPath);
            if (!$this->zipEntryAllowed($coverStat, $sourceBytes, ArchiveCoverService::MAX_EXTRACTED_BYTES)) {
                $zip->close();
                return null;
            }
            $content = $this->archiveCoverService->readZipEntryBounded($zip, $coverPath, ArchiveCoverService::MAX_EXTRACTED_BYTES);
            $zip->close();
            if (!is_string($content) || $content === '') {
                return null;
            }
            $validated = $this->archiveCoverService->validateExtractedCover($content);
            if ($validated === null) {
                return null;
            }
            $content = $validated['content'];
            $mimeType = $validated['mimeType'];

            return $this->coverResponse(
                $content,
                'library-cover-' . $itemId . '.' . $this->coverExtension($mimeType),
                $mimeType,
                'epub-cover',
                'epub-manifest-cover-image',
                3600,
                $this->isRefreshRequest()
            );
        } catch (Throwable) {
            return null;
        } finally {
            @unlink($temporaryPath);
        }
    }

    private function xmlAttribute(string $tag, string $attribute): ?string {
        if (preg_match("/\\s" . preg_quote($attribute, '/') . "=[\"']([^\"']+)[\"']/", $tag, $match) !== 1) {
            return null;
        }
        return html_entity_decode($match[1], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    }

    private function isCbzFile(File $file): bool {
        $extension = strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION));
        $mimeType = strtolower($file->getMimetype());
        return $extension === 'cbz' || $mimeType === 'application/comicbook+zip' || $mimeType === 'application/x-cbz';
    }

    private function extractCbzFirstImageCover(File $file, int $itemId): ?DataDownloadResponse {
        // CBZ first-image cover fallback: use the first page image when Nextcloud has no preview provider.
        if (!$this->isCbzFile($file) || !class_exists(ZipArchive::class)) {
            return null;
        }

        $temporaryPath = tempnam(sys_get_temp_dir(), 'library-cbz-cover-');
        if ($temporaryPath === false) {
            return null;
        }

        try {
            if (!$this->copyFileToTemporaryPath($file, $temporaryPath)) {
                return null;
            }
            $zip = new ZipArchive();
            if ($zip->open($temporaryPath) !== true) {
                return null;
            }

            if ($zip->numFiles > ArchiveCoverService::MAX_ENTRY_COUNT) {
                $zip->close();
                return null;
            }
            $sourceBytes = max(1, (int)filesize($temporaryPath));
            if (!$this->zipArchiveWithinBudget($zip, $sourceBytes)) {
                $zip->close();
                return null;
            }

            $imageEntries = [];
            for ($index = 0; $index < $zip->numFiles; $index++) {
                $name = $zip->getNameIndex($index);
                if (!is_string($name) || !$this->archiveCoverService->isSafeEntryName($name)) {
                    $zip->close();
                    return null;
                }
                if (str_ends_with($name, '/')) {
                    continue;
                }
                $stat = $zip->statIndex($index);
                if (!$this->zipEntryAllowed($stat, $sourceBytes, ArchiveCoverService::MAX_UNCOMPRESSED_BYTES)) {
                    $zip->close();
                    return null;
                }
                $mimeType = $this->coverMimeType($name);
                if ($mimeType !== null) {
                    $imageEntries[$name] = ['index' => $index, 'mimeType' => $mimeType, 'stat' => $stat];
                }
            }

            if ($imageEntries === []) {
                $zip->close();
                return null;
            }

            uksort($imageEntries, 'strnatcasecmp');
            $first = reset($imageEntries);
            $firstName = $zip->getNameIndex((int)$first['index']);
            if (!is_string($firstName) || !$this->zipEntryAllowed($first['stat'], $sourceBytes, ArchiveCoverService::MAX_EXTRACTED_BYTES)) {
                $zip->close();
                return null;
            }
            $content = $this->archiveCoverService->readZipEntryBounded($zip, $firstName, ArchiveCoverService::MAX_EXTRACTED_BYTES);
            $zip->close();
            if (!is_string($content) || $content === '') {
                return null;
            }
            $validated = $this->archiveCoverService->validateExtractedCover($content);
            if ($validated === null) {
                return null;
            }

            return $this->coverResponse(
                $validated['content'],
                'library-cover-' . $itemId . '.' . $this->coverExtension($validated['mimeType']),
                $validated['mimeType'],
                'cbz-first-image',
                'cbz-first-image',
                3600,
                $this->isRefreshRequest()
            );
        } catch (Throwable) {
            return null;
        } finally {
            @unlink($temporaryPath);
        }
    }

    private function extractArchiveFirstImageCover(File $file, int $itemId): ?DataDownloadResponse {
        // Read-only 7z/RAR-as-CBZ cover fallback. It never converts, renames, or writes source files.
        if (!$this->isCbzFile($file)) {
            return null;
        }
        $temporaryPath = tempnam(sys_get_temp_dir(), 'library-archive-cover-');
        if ($temporaryPath === false) {
            return null;
        }
        try {
            if (!$this->copyFileToTemporaryPath($file, $temporaryPath)) {
                return null;
            }
            $actualContainerType = $this->actualContainerType($temporaryPath);
            if (!in_array($actualContainerType, ['application/x-7z-compressed', 'application/x-rar-compressed'], true)) {
                return null;
            }
            $archiveCover = $this->archiveCoverService->firstImageCover($temporaryPath, $actualContainerType);
            if (($archiveCover['content'] ?? null) === null || ($archiveCover['mimeType'] ?? null) === null) {
                $reason = (string)($archiveCover['status'] ?? 'blocked-archive-cover');
                if (in_array($reason, ['blocked-extractor-timeout', 'blocked-resource-limit'], true)) {
                    $user = $this->userSession->getUser();
                    $this->securityAudit?->warning('library.archive_cover.blocked', $user !== null ? $user->getUID() : '', 'extract', 'archive_cover', 'blocked', [
                        'target_id' => $itemId,
                        'reason' => $reason,
                    ]);
                }
                return null;
            }
            $status = $actualContainerType === 'application/x-7z-compressed' ? 'sevenzip-first-image' : 'rar-first-image';
            return $this->coverResponse(
                (string)$archiveCover['content'],
                'library-cover-' . $itemId . '.' . $this->coverExtension((string)$archiveCover['mimeType']),
                (string)$archiveCover['mimeType'],
                $status,
                'inspect-only; files are left as-is; ' . (string)$archiveCover['reason'],
                3600,
                $this->isRefreshRequest()
            );
        } catch (Throwable) {
            return null;
        } finally {
            @unlink($temporaryPath);
        }
    }

    private function actualContainerType(string $temporaryPath): string {
        $handle = @fopen($temporaryPath, 'r');
        if (!is_resource($handle)) {
            return 'unavailable';
        }
        $magic = (string)fread($handle, 8);
        fclose($handle);
        if (str_starts_with($magic, "PK\x03\x04")) {
            return 'application/zip';
        }
        if (str_starts_with($magic, "7z\xBC\xAF\x27\x1C")) {
            return 'application/x-7z-compressed';
        }
        if (str_starts_with($magic, "Rar!\x1A\x07")) {
            return 'application/x-rar-compressed';
        }
        return 'unknown:' . bin2hex($magic);
    }

    private function copyFileToTemporaryPath(File $file, string $temporaryPath): bool {
        $source = $file->fopen('r');
        if (!is_resource($source)) {
            return false;
        }
        try {
            return $this->archiveCoverService->copyArchiveSource($source, $temporaryPath);
        } finally {
            fclose($source);
        }
    }

    private function zipEntryAllowed(mixed $stat, int $sourceBytes, int $maximumBytes): bool {
        if (!is_array($stat)) {
            return false;
        }
        $size = (int)($stat['size'] ?? -1);
        $compressedSize = (int)($stat['comp_size'] ?? 0);
        return $size >= 0 && $size <= $maximumBytes
            && $this->archiveCoverService->entryWithinBudget($size, $compressedSize, $sourceBytes);
    }

    /** Validate the whole ZIP while member sizes are available, not only the selected cover. */
    private function zipArchiveWithinBudget(ZipArchive $zip, int $sourceBytes): bool {
        $metadataBytes = 0;
        $totalUncompressed = 0;
        for ($index = 0; $index < $zip->numFiles; $index++) {
            $name = $zip->getNameIndex($index);
            $stat = $zip->statIndex($index);
            if (!is_string($name) || !$this->archiveCoverService->isSafeEntryName($name) || !is_array($stat)) {
                return false;
            }
            $nameBytes = strlen($name);
            if ($nameBytes > ArchiveCoverService::MAX_METADATA_BYTES - $metadataBytes) {
                return false;
            }
            $metadataBytes += $nameBytes;
            $size = $stat['size'] ?? null;
            if (!is_int($size) || $size < 0) {
                return false;
            }
            $totalUncompressed = $this->archiveCoverService->addUncompressedToAggregate($totalUncompressed, $size, $sourceBytes);
            if ($totalUncompressed === null) {
                return false;
            }
        }
        return true;
    }

    private function safeArchiveRelativePath(string $path): ?string {
        $segments = [];
        foreach (explode('/', str_replace('\\', '/', $path)) as $segment) {
            if ($segment === '' || $segment === '.') {
                continue;
            }
            if ($segment === '..') {
                if ($segments === []) { return null; }
                array_pop($segments);
                continue;
            }
            $segments[] = $segment;
        }
        $normalized = implode('/', $segments);
        return $this->archiveCoverService->isSafeEntryName($normalized) ? $normalized : null;
    }

    private function coverMimeType(string $name): ?string {
        return match (strtolower(pathinfo($name, PATHINFO_EXTENSION))) {
            'jpg', 'jpeg' => 'image/jpeg',
            'png' => 'image/png',
            'webp' => 'image/webp',
            default => null,
        };
    }

    private function coverExtension(string $mimeType): string {
        return match ($mimeType) {
            'image/png' => 'png',
            'image/webp' => 'webp',
            default => 'jpg',
        };
    }

    private function findFileIdForItem(string $userId, int $itemId): ?int {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('f.file_id')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('i.id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();

        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return null;
        }

        return (int)$row['file_id'];
    }

    private function findUserFileById(string $userId, int $fileId): ?File {
        $nodes = $this->rootFolder->getUserFolder($userId)->getById($fileId);
        foreach ($nodes as $node) {
            if ($node instanceof File) {
                return $node;
            }
        }
        return null;
    }

    private function placeholderResponse(string $label, string $reason = 'preview-unavailable'): DataDownloadResponse {
        $safeLabel = htmlspecialchars(mb_substr($label, 0, 3), ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
        $svg = '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="520" viewBox="0 0 360 520" role="img" aria-label="Library cover placeholder">'
            . '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e8edf7"/><stop offset="1" stop-color="#ccd8ea"/></linearGradient></defs>'
            . '<rect width="360" height="520" rx="24" fill="url(#g)"/>'
            . '<rect x="34" y="42" width="292" height="436" rx="18" fill="rgba(255,255,255,0.55)" stroke="rgba(20,44,74,0.16)"/>'
            . '<text x="180" y="276" text-anchor="middle" font-family="sans-serif" font-size="64" font-weight="700" fill="#46627f">' . $safeLabel . '</text>'
            . '</svg>';

        return $this->coverResponse(
            $svg,
            'library-cover-placeholder.svg',
            'image/svg+xml',
            'placeholder',
            $reason,
            300,
            $this->isRefreshRequest()
        );
    }

    private function isRefreshRequest(): bool {
        return (string)$this->request->getParam('refresh', '0') === '1';
    }

    private function coverResponse(string $content, string $filename, string $mimeType, string $status, string $reason, int $maxAge, bool $refreshRequested = false): DataDownloadResponse {
        $headers = [
            'Cache-Control' => $refreshRequested ? 'private, no-store' : 'private, max-age=' . $maxAge,
            'X-Library-Cover-Status' => $status,
            'X-Library-Cover-Reason' => mb_substr($reason, 0, 160),
        ];
        if ($refreshRequested) {
            $headers['X-Library-Cover-Refresh'] = 'refresh-requested';
        }
        $durationMs = $this->clock->elapsedMs($this->coverStartedAt);
        $safeStatus = in_array($status, ['manual-cover', 'preview', 'epub-cover', 'cbz-first-image', 'sevenzip-first-image', 'rar-first-image', 'placeholder'], true) ? $status : 'placeholder';
        $context = ['event_schema' => 1, 'status' => $safeStatus, 'refresh_requested' => $refreshRequested,
            'duration_ms' => $durationMs, 'returned_bytes' => strlen($content)];
        try {
            if ($durationMs >= 1000) { $this->logger->warning('library.cover.slow', $context); }
            else { $this->logger->debug('library.cover.built', $context); }
        } catch (Throwable) {
            // Operational logging must not break cover responses.
        }

        return new DataDownloadResponse(
            $content,
            $filename,
            $mimeType,
            200,
            $headers
        );
    }

    private function coverInitials(string $name): string {
        $base = trim((string)pathinfo($name, PATHINFO_FILENAME));
        if ($base === '') {
            return 'LIB';
        }
        return mb_strtoupper(mb_substr(preg_replace('/[^\p{L}\p{N}]+/u', '', $base) ?: 'LIB', 0, 3));
    }
}
