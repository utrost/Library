<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Exception\BatchLimitExceededException;
use OCA\Library\Service\ItemService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;
use OCP\L10N\IFactory;
use OCP\Util;

final class ItemController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private ItemService $itemService,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
        private ?IFactory $l10nFactory = null,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function open(int $itemId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $item = $this->itemService->markOpened($user->getUID(), $itemId);
            if ($item !== null) {
                return new RedirectResponse($this->urlGenerator->getAbsoluteURL('/f/' . (int)$item['fileId']));
            }
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }

    #[NoAdminRequired]
    public function update(int $itemId): RedirectResponse|JSONResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            try {
                $metadataAutosave = (string)$this->request->getParam('metadataAutosave', '0') === '1';
                $this->itemService->updateItem($user->getUID(), $itemId, [
                    'publicationType' => (string)$this->request->getParam('publicationType', 'other'),
                    'title' => (string)$this->request->getParam('title', ''),
                    'subtitle' => (string)$this->request->getParam('subtitle', ''),
                    'creators' => $this->normalizeCreatorInput($this->request->getParam('creators', '')),
                    'publication' => (string)$this->request->getParam('publication', ''),
                    'publicationDate' => (string)$this->request->getParam('publicationDate', ''),
                    'language' => $this->normalizeRequestList($this->request->getParam('language', $this->request->getParam('language[]', ''))),
                    'publisher' => (string)$this->request->getParam('publisher', ''),
                    'description' => (string)$this->request->getParam('description', ''),
                    'genres' => $this->normalizeRequestList($this->request->getParam('genres', $this->request->getParam('genres[]', ''))),
                    'classifications' => $this->normalizeRequestList($this->request->getParam('classifications', $this->request->getParam('classifications[]', ''))),
                    'personalRating' => (string)$this->request->getParam('personalRating', ''),
                ]);
            } catch (\InvalidArgumentException $e) {
                if ($metadataAutosave) {
                    return new JSONResponse(['saved' => false, 'error' => $e->getMessage()], 422, [
                        'Cache-Control' => 'private, no-store',
                    ]);
                }
                $returnTo = (string)$this->request->getParam('returnTo', '');
                if ($returnTo === 'details') {
                    return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', [
                        'itemId' => $itemId,
                        'metadataError' => $e->getMessage(),
                    ]));
                }
                return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
            }
        }

        $returnTo = (string)$this->request->getParam('returnTo', '');
        $metadataAutosave = (string)$this->request->getParam('metadataAutosave', '0') === '1';
        if ($metadataAutosave) {
            return new JSONResponse(['saved' => true], 200, [
                'Cache-Control' => 'private, no-store',
            ]);
        }
        if ($returnTo === 'details') {
            return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId, 'metadataSaved' => '1']));
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }

    #[NoAdminRequired]
    public function resetfield(int $itemId): RedirectResponse {
        $field = (string)$this->request->getParam('field', '');
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->itemService->resetFieldToScannerCandidate($user->getUID(), $itemId, $field);
        }

        $returnTo = (string)$this->request->getParam('returnTo', '');
        if ($returnTo === 'details') {
            return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]));
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }

    #[NoAdminRequired]
    public function resetfields(int $itemId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->itemService->resetAllFieldsToScannerCandidates($user->getUID(), $itemId);
        }

        $returnTo = (string)$this->request->getParam('returnTo', '');
        if ($returnTo === 'details') {
            return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]));
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }

    #[NoAdminRequired]
    public function bulkresetfields(): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            try {
                $this->itemService->bulkResetFieldsToScannerCandidates($user->getUID(), (string)$this->request->getParam('itemIds', ''));
            } catch (BatchLimitExceededException $e) {
                return new RedirectResponse($this->urlGenerator->getAbsoluteURL('/settings/user/library') . '?batchLimitError=1');
            }
        }

        return new RedirectResponse($this->urlGenerator->getAbsoluteURL('/settings/user/library'));
    }

    #[NoAdminRequired]
    public function batchresetfilteredfields(): RedirectResponse {
        $user = $this->userSession->getUser();
        $filters = $this->catalogueFiltersFromRequest();
        $result = ['requestedItems' => 0, 'resetItems' => 0, 'skippedItems' => 0];
        if ($user !== null) {
            try {
                $itemIds = $this->itemService->itemIdsForCatalogueFilters($user->getUID(), $filters, 5000);
                $result = $this->itemService->bulkResetFieldsToScannerCandidates($user->getUID(), $itemIds);
            } catch (BatchLimitExceededException $e) {
                return $this->batchLimitRedirect($filters);
            }
        }

        $query = array_filter($filters, static fn (string $value): bool => $value !== '');
        $query['batchMetadataResetResult'] = '1';
        $query['batchMetadataRequested'] = (string)($result['requestedItems'] ?? 0);
        $query['batchMetadataReset'] = (string)($result['resetItems'] ?? 0);
        $query['batchMetadataSkipped'] = (string)($result['skippedItems'] ?? 0);
        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index') . '?' . http_build_query($query));
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function batchpreviewmetadataedit(): TemplateResponse {
        $user = $this->userSession->getUser();
        $filters = $this->catalogueFiltersFromRequest();
        $result = [
            'batchMetadataEditPreviewResult' => true,
            'previewOnly' => true,
            'requestedItems' => 0,
            'changedItems' => 0,
            'unchangedItems' => 0,
            'skippedItems' => 0,
            'examples' => [],
        ];
        $itemIdsParamPresent = array_key_exists('itemIds', $this->request->getParams());
        $requestedItemIds = $this->request->getParam('itemIds', null);
        $itemIds = $itemIdsParamPresent ? $this->parseExplicitItemIds($requestedItemIds) : [];
        if ($user !== null) {
            try {
                $itemIds = $itemIdsParamPresent
                    ? $itemIds
                    : $this->itemService->itemIdsForCatalogueFilters($user->getUID(), $filters, 5000);
                $result = array_merge($result, $this->itemService->previewBatchMetadataEdit($user->getUID(), $itemIds,
                    (string)$this->request->getParam('bulkEditField', ''),
                    (string)$this->request->getParam('bulkEditValue', ''),
                ));
            } catch (BatchLimitExceededException $e) {
                $result['batchMetadataEditPreviewResult'] = false;
                $result['batchLimitError'] = true;
                $result['error'] = $e->getMessage();
            }
        }
        Util::addStyle('library', 'style');
        $language = $this->l10nFactory?->findLanguage($this->appName) ?? 'en';
        return new TemplateResponse($this->appName, 'batch-metadata-edit-preview', [
            'language' => $language,
            'direction' => $this->l10nFactory?->getLanguageDirection($language) ?? 'ltr',
            'result' => $result,
            'filters' => array_filter($filters, static fn (string $value): bool => $value !== ''),
            'itemIds' => $itemIdsParamPresent ? $itemIds : [],
            'applyUrl' => $this->urlGenerator->linkToRoute('library.item.batchapplymetadataedit'),
            'backUrl' => $this->urlGenerator->linkToRoute('library.page.index') . '?' . http_build_query(array_filter($filters, static fn (string $value): bool => $value !== '')),
        ]);
    }

    #[NoAdminRequired]
    public function batchapplymetadataedit(): RedirectResponse {
        $user = $this->userSession->getUser();
        $filters = $this->catalogueFiltersFromRequest();
        $result = ['requestedItems' => 0, 'appliedItems' => 0, 'unchangedItems' => 0, 'skippedItems' => 0];
        if ($user !== null && (string)$this->request->getParam('confirmBatchMetadataApply', '') === 'APPLY') {
            try {
                $itemIdsParamPresent = array_key_exists('itemIds', $this->request->getParams());
                $requestedItemIds = $this->request->getParam('itemIds', null);
                $explicitItemIds = $this->parseExplicitItemIds($requestedItemIds);
                $itemIds = $itemIdsParamPresent
                    ? $explicitItemIds
                    : $this->itemService->itemIdsForCatalogueFilters($user->getUID(), $filters, 5000);
                $result = $this->itemService->applyBatchMetadataEdit($user->getUID(), $itemIds,
                    (string)$this->request->getParam('bulkEditField', ''),
                    (string)$this->request->getParam('bulkEditValue', ''),
                );
            } catch (BatchLimitExceededException $e) {
                return $this->batchLimitRedirect($filters);
            }
        }

        $query = array_filter($filters, static fn (string $value): bool => $value !== '');
        $query['batchMetadataApplyResult'] = '1';
        $query['batchMetadataRequested'] = (string)($result['requestedItems'] ?? 0);
        $query['batchMetadataApplied'] = (string)($result['appliedItems'] ?? 0);
        $query['batchMetadataUnchanged'] = (string)($result['unchangedItems'] ?? 0);
        $query['batchMetadataSkipped'] = (string)($result['skippedItems'] ?? 0);
        $query['batchMetadataField'] = (string)($result['field'] ?? (string)$this->request->getParam('bulkEditField', ''));
        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index') . '?' . http_build_query($query));
    }

    private function parseExplicitItemIds(mixed $value): array {
        if (!is_array($value)) {
            return [];
        }

        $ids = [];
        $seen = [];
        $maximum = (string)PHP_INT_MAX;
        foreach ($value as $candidate) {
            if (is_int($candidate)) {
                if ($candidate <= 0) {
                    return [];
                }
                $id = $candidate;
            } elseif (is_string($candidate) && preg_match('/^[1-9][0-9]*$/D', $candidate) === 1) {
                if (strlen($candidate) > strlen($maximum)
                    || (strlen($candidate) === strlen($maximum) && strcmp($candidate, $maximum) > 0)) {
                    return [];
                }
                $id = (int)$candidate;
            } else {
                return [];
            }

            if (!isset($seen[$id])) {
                $seen[$id] = true;
                $ids[] = $id;
            }
        }
        return $ids;
    }

    private function catalogueFiltersFromRequest(): array {
        $filters = [];
        foreach (['q', 'type', 'publication', 'year', 'creator', 'format', 'tag', 'shelf', 'status', 'workflowStatus', 'genre', 'classification', 'scannerConflicts', 'starred', 'needsMetadata', 'coverReview', 'noCreator', 'noPublication', 'noDate', 'titleFromFilename', 'noDescription', 'unsupportedContainer', 'weakMetadata', 'unreviewedImports', 'sort'] as $key) {
            $filters[$key] = trim((string)$this->request->getParam($key, ''));
        }
        if ($filters['sort'] === '') {
            $filters['sort'] = 'title';
        }
        return $filters;
    }

    private function batchLimitRedirect(array $filters): RedirectResponse {
        $query = array_filter($filters, static fn (string $value): bool => $value !== '');
        $query['batchLimitError'] = '1';
        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index') . '?' . http_build_query($query));
    }

    #[NoAdminRequired]
    public function star(int $itemId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->itemService->setStarred($user->getUID(), $itemId, (string)$this->request->getParam('starred', '') === '1');
        }

        $returnTo = (string)$this->request->getParam('returnTo', '');
        if ($returnTo === 'details') {
            return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]));
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }

    #[NoAdminRequired]
    public function workflowStatus(int $itemId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->itemService->setWorkflowStatus($user->getUID(), $itemId, (string)$this->request->getParam('workflowStatus', ''));
        }

        $returnTo = (string)$this->request->getParam('returnTo', '');
        if ($returnTo === 'details') {
            return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]));
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }

    #[NoAdminRequired]
    public function forgetMissing(int $itemId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->itemService->forgetMissingItem($user->getUID(), $itemId);
        }

        $returnTo = (string)$this->request->getParam('returnTo', '');
        if ($returnTo === 'details') {
            $item = $user !== null ? $this->itemService->findItem($user->getUID(), $itemId) : null;
            if ($item !== null) {
                return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]));
            }
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }

    /**
     * @param mixed $value
     */
    private function normalizeCreatorInput(mixed $value): string {
        $parts = is_array($value) ? $value : (preg_split('/[;\n]+/u', (string)$value) ?: []);
        $normalized = [];
        foreach ($parts as $part) {
            $entry = trim((string)$part);
            if ($entry !== '') {
                $normalized[] = $entry;
            }
        }
        return implode('; ', $normalized);
    }

    /**
     * @param mixed $value
     */
    private function normalizeRequestList(mixed $value): string {
        $parts = is_array($value) ? $value : (preg_split('/[;,\n]+/u', (string)$value) ?: []);
        $normalized = [];
        foreach ($parts as $part) {
            $entry = trim((string)$part);
            if ($entry !== '') {
                $normalized[] = $entry;
            }
        }
        return implode('; ', $normalized);
    }
}
