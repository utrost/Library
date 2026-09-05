<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\DataDownloadResponse;
use OCP\Files\File;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;
use OCP\IPreview;
use OCP\IRequest;
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
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function show(int $itemId): DataDownloadResponse {
        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';
        if ($userId === '') {
            return $this->placeholderResponse('LIB');
        }

        $fileId = $this->findFileIdForItem($userId, $itemId);
        if ($fileId === null) {
            return $this->placeholderResponse('LIB');
        }

        $file = $this->findUserFileById($userId, $fileId);
        if (!$file instanceof File) {
            return $this->placeholderResponse('LIB');
        }

        try {
            if ($this->previewManager->isAvailable($file)) {
                $preview = $this->previewManager->getPreview($file, 360, 520, true, IPreview::MODE_COVER);
                return new DataDownloadResponse(
                    $preview->getContent(),
                    'library-cover-' . $itemId . '.' . ($preview->getExtension() ?: 'jpg'),
                    $preview->getMimeType(),
                    200,
                    ['Cache-Control' => 'private, max-age=3600']
                );
            }
        } catch (Throwable) {
            // Fall through to CBZ first-image cover or SVG placeholder.
        }

        $cbzCover = $this->extractCbzFirstImageCover($file, $itemId);
        if ($cbzCover !== null) {
            return $cbzCover;
        }
        return $this->placeholderResponse($this->coverInitials($file->getName()));
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
            file_put_contents($temporaryPath, $file->getContent());
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

            return new DataDownloadResponse(
                $content,
                'library-cover-' . $itemId . '.' . $this->coverExtension((string)$first['mimeType']),
                (string)$first['mimeType'],
                200,
                ['Cache-Control' => 'private, max-age=3600']
            );
        } catch (Throwable) {
            return null;
        } finally {
            @unlink($temporaryPath);
        }
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

    private function placeholderResponse(string $label): DataDownloadResponse {
        $safeLabel = htmlspecialchars(mb_substr($label, 0, 3), ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
        $svg = '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="520" viewBox="0 0 360 520" role="img" aria-label="Library cover placeholder">'
            . '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e8edf7"/><stop offset="1" stop-color="#ccd8ea"/></linearGradient></defs>'
            . '<rect width="360" height="520" rx="24" fill="url(#g)"/>'
            . '<rect x="34" y="42" width="292" height="436" rx="18" fill="rgba(255,255,255,0.55)" stroke="rgba(20,44,74,0.16)"/>'
            . '<text x="180" y="276" text-anchor="middle" font-family="sans-serif" font-size="64" font-weight="700" fill="#46627f">' . $safeLabel . '</text>'
            . '</svg>';

        return new DataDownloadResponse(
            $svg,
            'library-cover-placeholder.svg',
            'image/svg+xml',
            200,
            ['Cache-Control' => 'private, max-age=300']
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
