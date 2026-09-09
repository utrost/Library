<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\DataDownloadResponse;
use OCP\AppFramework\Http\RedirectResponse;
use OCA\Library\Service\ArchiveCoverService;
use OCA\Library\Service\ItemService;
use OCP\Files\File;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;
use OCP\IPreview;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;
use Throwable;
use ZipArchive;

class CoverController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private IUserSession $userSession,
        private IDBConnection $db,
        private IRootFolder $rootFolder,
        private IPreview $previewManager,
        private ItemService $itemService,
        private IURLGenerator $urlGenerator,
        private ArchiveCoverService $archiveCoverService,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function show(int $itemId): DataDownloadResponse {
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
            $previewError = 'preview-error: ' . $e->getMessage();
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
            if (is_array($upload) && isset($upload['tmp_name']) && is_uploaded_file((string)$upload['tmp_name'])) {
                $mimeType = is_string($upload['type'] ?? null) ? (string)$upload['type'] : 'image/jpeg';
                if (str_starts_with($mimeType, 'image/')) {
                    $data = base64_encode((string)file_get_contents((string)$upload['tmp_name']));
                }
            }
            $this->itemService->setManualCoverOverride(
                $user->getUID(),
                $itemId,
                (string)$this->request->getParam('coverOverrideUrl', ''),
                $data,
                $mimeType
            );
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]));
    }

    #[NoAdminRequired]
    public function revert(int $itemId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->itemService->clearManualCoverOverride($user->getUID(), $itemId);
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]));
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function batchrefresh(): RedirectResponse {
        $user = $this->userSession->getUser();
        $filters = $this->catalogueFiltersFromRequest();
        $requested = 0;
        if ($user !== null) {
            $requested = count($this->itemService->itemIdsForCatalogueFilters($user->getUID(), $filters, 5000));
        }

        $query = array_filter($filters, static fn (string $value): bool => $value !== '');
        $query['coverRefresh'] = '1';
        $query['batchCoverRefreshResult'] = '1';
        $query['batchCoverRefreshRequested'] = (string)$requested;
        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index') . '?' . http_build_query($query));
    }

    private function catalogueFiltersFromRequest(): array {
        $filters = [];
        foreach (['q', 'type', 'publication', 'year', 'creator', 'format', 'tag', 'shelf', 'status', 'workflowStatus', 'genre', 'classification', 'scannerConflicts', 'starred', 'needsMetadata', 'coverReview', 'noCreator', 'noPublication', 'weakMetadata', 'unreviewedImports', 'sort'] as $key) {
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

            $container = $zip->getFromName('META-INF/container.xml');
            if (!is_string($container) || !preg_match("/full-path=[\"']([^\"']+)[\"']/i", $container, $containerMatch)) {
                $zip->close();
                return null;
            }

            $opfPath = $containerMatch[1];
            $opf = $zip->getFromName($opfPath);
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

            $coverPath = ltrim(dirname($opfPath) . '/' . $coverHref, './');
            $content = $zip->getFromName($coverPath);
            $zip->close();
            if (!is_string($content) || $content === '') {
                return null;
            }

            $mimeType = $coverMimeType ?: $this->coverMimeType($coverPath) ?: 'image/jpeg';
            if (!str_starts_with($mimeType, 'image/')) {
                return null;
            }

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

            $imageEntries = [];
            for ($index = 0; $index < $zip->numFiles; $index++) {
                $name = $zip->getNameIndex($index);
                if (!is_string($name) || str_ends_with($name, '/')) {
                    continue;
                }
                $mimeType = $this->coverMimeType($name);
                if ($mimeType !== null) {
                    $imageEntries[$name] = ['index' => $index, 'mimeType' => $mimeType];
                }
            }

            if ($imageEntries === []) {
                $zip->close();
                return null;
            }

            uksort($imageEntries, 'strnatcasecmp');
            $first = reset($imageEntries);
            $content = $zip->getFromIndex((int)$first['index']);
            $zip->close();
            if (!is_string($content) || $content === '') {
                return null;
            }

            return $this->coverResponse(
                $content,
                'library-cover-' . $itemId . '.' . $this->coverExtension((string)$first['mimeType']),
                (string)$first['mimeType'],
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
        $target = fopen($temporaryPath, 'w');
        if (!is_resource($source) || !is_resource($target)) {
            if (is_resource($source)) {
                fclose($source);
            }
            if (is_resource($target)) {
                fclose($target);
            }
            return false;
        }
        stream_copy_to_stream($source, $target);
        fclose($source);
        fclose($target);
        return true;
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
