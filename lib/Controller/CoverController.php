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
            if (!$this->previewManager->isAvailable($file)) {
                return $this->placeholderResponse($this->coverInitials($file->getName()));
            }
            $preview = $this->previewManager->getPreview($file, 360, 520, true, IPreview::MODE_COVER);
            return new DataDownloadResponse(
                $preview->getContent(),
                'library-cover-' . $itemId . '.' . ($preview->getExtension() ?: 'jpg'),
                $preview->getMimeType(),
                200,
                ['Cache-Control' => 'private, max-age=3600']
            );
        } catch (Throwable) {
            return $this->placeholderResponse($this->coverInitials($file->getName()));
        }
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
