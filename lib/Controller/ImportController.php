<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\ItemService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\IUserSession;

class ImportController extends Controller {
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
    public function preview(): JSONResponse {
        $user = $this->userSession->getUser();
        $payload = $user !== null
            ? $this->itemService->previewCorrectedMetadataImport($user->getUID(), (string)$this->request->getParam('metadataJson', ''))
            : [
                'schemaVersion' => 1,
                'previewKind' => 'library-metadata-import-preview',
                'valid' => false,
                'error' => 'not_authenticated',
                'totalItems' => 0,
                'matchedItems' => 0,
                'missingItems' => 0,
                'invalidItems' => 0,
                'changedFields' => 0,
                'items' => [],
            ];

        return new JSONResponse($payload, 200, [
            'Cache-Control' => 'private, no-store',
            'X-Library-Import-Mode' => 'preview-only',
        ]);
    }
}
