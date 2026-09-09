<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\LibraryHealthService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\DataDownloadResponse;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\IUserSession;

class HealthController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private LibraryHealthService $libraryHealthService,
        private IUserSession $userSession,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function importSummary(): JSONResponse {
        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';
        $refresh = (string)$this->request->getParam('refresh', '0') === '1';
        return new JSONResponse($this->libraryHealthService->cachedImportHealthSummary($userId, $refresh), 200, [
            'Cache-Control' => 'private, no-store',
        ]);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function metadataErrors(): JSONResponse {
        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';
        return new JSONResponse($this->libraryHealthService->metadataErrorRows(
            $userId,
            (int)$this->request->getParam('limit', 100),
            (int)$this->request->getParam('offset', 0),
        ));
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function metadataErrorsTsv(): DataDownloadResponse {
        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';
        return new DataDownloadResponse(
            $this->libraryHealthService->metadataErrorTsv($userId),
            'library-import-health-metadata-errors.tsv',
            'text/tab-separated-values; charset=utf-8',
            200,
            [
                'Cache-Control' => 'private, no-store',
                'X-Library-Export-Type' => 'import-health-metadata-errors',
            ]
        );
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function coverProbe(): JSONResponse {
        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';
        return new JSONResponse($this->libraryHealthService->coverProbeReport(
            $userId,
            (int)$this->request->getParam('limit', 30),
        ));
    }
}
