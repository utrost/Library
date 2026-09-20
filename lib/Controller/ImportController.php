<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\ItemService;
use OCA\Library\Service\SecurityAuditLogger;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;

class ImportController extends Controller {
    private ?SecurityAuditLogger $securityAudit = null;

    public function __construct(
        string $appName,
        IRequest $request,
        private ItemService $itemService,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
        ?SecurityAuditLogger $securityAudit = null,
    ) {
        parent::__construct($appName, $request);
        $this->securityAudit = $securityAudit;
    }

    #[NoAdminRequired]
    public function preview(): JSONResponse|TemplateResponse {
        $metadataJson = (string)$this->request->getParam('metadataJson', '');
        $user = $this->userSession->getUser();
        $payload = $user !== null
            ? $this->itemService->previewCorrectedMetadataImport($user->getUID(), $metadataJson)
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

        $this->auditImport('library.metadata_import.preview', $user !== null ? $user->getUID() : '', 'preview', $payload);

        if ($this->expectsJson()) {
            return new JSONResponse($payload, $this->responseStatus($payload), [
                'Cache-Control' => 'private, no-store',
                'X-Library-Import-Mode' => 'preview-only',
            ]);
        }

        $response = new TemplateResponse('library', 'metadata-import-result', [
            'mode' => 'preview',
            'preview' => $payload,
            'metadataJson' => $metadataJson,
            'metadataImportApplyUrl' => $this->urlGenerator->linkToRoute('library.import.apply'),
            'settingsUrl' => $this->urlGenerator->getAbsoluteURL('/settings/user/library'),
            'requesttoken' => $this->request->getParam('requesttoken', ''),
        ]);
        $response->addHeader('Cache-Control', 'private, no-store');
        $response->addHeader('X-Library-Import-Mode', 'preview-only');
        return $response;
    }

    #[NoAdminRequired]
    public function apply(): JSONResponse|TemplateResponse {
        $user = $this->userSession->getUser();
        $payload = $user !== null
            ? $this->itemService->applyCorrectedMetadataImport($user->getUID(), (string)$this->request->getParam('metadataJson', ''))
            : [
                'schemaVersion' => 1,
                'applicationKind' => 'library-metadata-import-apply',
                'valid' => false,
                'error' => 'not_authenticated',
                'totalItems' => 0,
                'matchedItems' => 0,
                'appliedItems' => 0,
                'skippedItems' => 0,
                'missingItems' => 0,
                'invalidItems' => 0,
                'changedFields' => 0,
                'items' => [],
            ];

        $this->auditImport('library.metadata_import.apply', $user !== null ? $user->getUID() : '', 'apply', $payload);

        if ($this->expectsJson()) {
            return new JSONResponse($payload, $this->responseStatus($payload), [
                'Cache-Control' => 'private, no-store',
                'X-Library-Import-Mode' => 'apply',
            ]);
        }

        $response = new TemplateResponse('library', 'metadata-import-result', [
            'mode' => 'apply',
            'preview' => $payload,
            'metadataJson' => '',
            'metadataImportApplyUrl' => $this->urlGenerator->linkToRoute('library.import.apply'),
            'settingsUrl' => $this->urlGenerator->getAbsoluteURL('/settings/user/library'),
            'requesttoken' => $this->request->getParam('requesttoken', ''),
        ]);
        $response->addHeader('Cache-Control', 'private, no-store');
        $response->addHeader('X-Library-Import-Mode', 'apply');
        return $response;
    }

    private function expectsJson(): bool {
        return str_contains(strtolower((string)$this->request->getHeader('Accept')), 'application/json');
    }

    /** @param array<string,mixed> $payload */
    private function auditImport(string $event, string $actorId, string $operation, array $payload): void {
        $outcome = (($payload['valid'] ?? false) === true && ($payload['error'] ?? '') === '') ? 'success' : 'rejected';
        $this->securityAudit?->warning($event, $actorId, $operation, 'metadata_import', $outcome, [
            'target_count' => (int)($payload['totalItems'] ?? 0),
            'http_status' => $this->responseStatus($payload),
            'reason' => (string)($payload['error'] ?? ($outcome === 'success' ? 'valid' : 'invalid')),
        ]);
    }

    private function responseStatus(array $payload): int {
        $status = (int)($payload['httpStatus'] ?? 200);
        return $status >= 400 && $status <= 599 ? $status : 200;
    }
}
