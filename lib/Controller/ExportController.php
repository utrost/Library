<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\ItemService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\DataDownloadResponse;
use OCP\IRequest;
use OCP\IUserSession;

class ExportController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private ItemService $itemService,
        private IUserSession $userSession,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function metadata(): DataDownloadResponse {
        $user = $this->userSession->getUser();
        $payload = $user !== null
            ? $this->itemService->exportCorrectedMetadata($user->getUID())
            : [
                'schemaVersion' => 1,
                'exportedAt' => gmdate(DATE_ATOM),
                'items' => [],
            ];

        $json = json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        if (!is_string($json)) {
            $json = '{"schemaVersion":1,"items":[]}';
        }

        return new DataDownloadResponse(
            $json . "\n",
            'library-metadata-export.json',
            'application/json',
            200,
            [
                'Cache-Control' => 'private, no-store',
                'X-Library-Export-Type' => 'corrected-metadata',
            ]
        );
    }
}
