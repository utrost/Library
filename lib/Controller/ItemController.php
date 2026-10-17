<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\AppInfo\Application;
use OCA\Library\Exception\BatchLimitExceededException;
use OCA\Library\Exception\MetadataConflictException;
use OCA\Library\Service\ItemService;
use OCA\Library\Service\SelectedItemIds;
use OCA\Library\Service\SafeDiagnostics;
use OCA\Library\Service\SecurityAuditLogger;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\Files\File;
use OCP\Files\IRootFolder;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;
use OCP\L10N\IFactory;
use OCP\Util;

final class ItemController extends Controller {
    private ?SecurityAuditLogger $securityAudit = null;

    public function __construct(
        string $appName,
        IRequest $request,
        private ItemService $itemService,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
        private IRootFolder $rootFolder,
        private ?IFactory $l10nFactory = null,
        ?SecurityAuditLogger $securityAudit = null,
    ) {
        parent::__construct($appName, $request);
        $this->securityAudit = $securityAudit;
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function open(int $itemId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $item = $this->itemService->findItem($user->getUID(), $itemId);
            if ($item !== null) {
                try {
                    $folder = $this->rootFolder->getUserFolder($user->getUID());
                } catch (\Throwable) {
                    $folder = null;
                }
                if ($folder !== null) {
                    try {
                        foreach ($folder->getById((int)$item['fileId']) as $node) {
                            if ($node instanceof File && $node->isReadable() && $node->getStorage()->file_exists($node->getInternalPath())) {
                                return new RedirectResponse($this->urlGenerator->getAbsoluteURL('/f/' . (int)$item['fileId']));
                            }
                        }
                    } catch (\Throwable) {
                        // A stale file ID must not prevent lookup by its saved path.
                    }
                    try {
                        // External storage can assign new Nextcloud IDs after a remount.
                        // Resolve the indexed path without changing Library's metadata or lists.
                        $node = $folder->get((string)$item['cachedPath']);
                        if ($node instanceof File && $node->isReadable() && $node->getStorage()->file_exists($node->getInternalPath())) {
                            return new RedirectResponse($this->urlGenerator->getAbsoluteURL('/f/' . $node->getId()));
                        }
                    } catch (\Throwable) {
                        // A missing or inaccessible source should stay on this publication.
                    }
                }

                return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index') . '?details=' . $itemId . '&openUnavailable=1');
            }
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }

    #[NoAdminRequired]
    public function recordOpen(int $itemId): JSONResponse {
        $user = $this->userSession->getUser();
        if ($user === null) {
            return new JSONResponse(['recorded' => false], 401, [
                'Cache-Control' => 'private, no-store',
            ]);
        }

        $item = $this->itemService->markOpened($user->getUID(), $itemId);
        return new JSONResponse(['recorded' => $item !== null], $item !== null ? 200 : 404, [
            'Cache-Control' => 'private, no-store',
        ]);
    }

    #[NoAdminRequired]
    public function update(int $itemId): RedirectResponse|JSONResponse|TemplateResponse {
        $user = $this->userSession->getUser();
        $metadataAutosave = (string)$this->request->getParam('metadataAutosave', '0') === '1';
        if ($user === null) {
            return $metadataAutosave
                ? new JSONResponse(['saved' => false, 'error' => 'Sign in to edit this publication.'], 401, ['Cache-Control' => 'private, no-store'])
                : new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
        }
        if ($user !== null) {
            $draft = [];
            try {
                $revision = (string)$this->request->getParam('metadataRevision', '');
                if (preg_match('/^[a-f0-9]{64}$/D', $revision) !== 1) throw new MetadataConflictException('metadata_revision_required');
                $creatorNames = null;
                if ($this->request->getParam('creatorFormat') === 'lines') {
                    $input = $this->request->getParam('creators', '');
                    $parts = is_array($input) ? $input : explode("\n", (string)$input);
                    $creatorNames = \OCA\Library\Service\AuthorNames::normalize(array_values(array_filter(array_map(static fn($s) => is_string($s) ? trim($s) : $s, $parts), static fn($s) => $s !== '')));
                }
                $draft = [
                    'publicationType' => (string)$this->request->getParam('publicationType', 'other'),
                    'title' => (string)$this->request->getParam('title', ''),
                    'subtitle' => (string)$this->request->getParam('subtitle', ''),
                    'creators' => $creatorNames !== null ? implode('; ', $creatorNames) : $this->normalizeCreatorInput($this->request->getParam('creators', '')),
                    'publication' => (string)$this->request->getParam('publication', ''),
                    'publicationDate' => (string)$this->request->getParam('publicationDate', ''),
                    'language' => $this->normalizeRequestList($this->request->getParam('language', $this->request->getParam('language[]', ''))),
                    'publisher' => (string)$this->request->getParam('publisher', ''),
                    'description' => (string)$this->request->getParam('description', ''),
                    'subjects' => $this->normalizeRequestList($this->request->getParam('subjects', $this->request->getParam('subjects[]', ''))),
                    'classifications' => $this->normalizeRequestList($this->request->getParam('classifications', $this->request->getParam('classifications[]', ''))),
                    'personalRating' => (string)$this->request->getParam('personalRating', ''),
                    'identifiers' => $this->normalizeIdentifierRequest($this->request->getParam('identifiers', [])),
                    ...array_filter([
                        'authors' => $this->request->getParam('authors', $creatorNames),
                        'series' => $this->request->getParam('series'),
                        'seriesNumber' => $this->request->getParam('seriesNumber'),
                        'genre' => $this->request->getParam('genre'),
                    ], static fn(mixed $value): bool => $value !== null),
                ];
                $this->itemService->updateItem($user->getUID(), $itemId, $draft, $revision);
            } catch (\OutOfBoundsException $e) {
                return $metadataAutosave
                    ? new JSONResponse(['saved' => false, 'error' => 'Publication not found.'], 404, ['Cache-Control' => 'private, no-store'])
                    : new TemplateResponse('core', '404', [], 'guest', 404);
            } catch (MetadataConflictException $e) {
                $message = 'This publication changed since you opened it. Reload the details before saving again.';
                if ($metadataAutosave) return new JSONResponse(['saved' => false, 'error' => $message], 409, ['Cache-Control' => 'private, no-store']);
                $current = $this->itemService->findItem($user->getUID(), $itemId);
                if ($current === null) return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
                Util::addStyle(Application::APP_ID, 'style');
                $response = new TemplateResponse(Application::APP_ID, 'metadata-conflict', [
                    'message' => $message,
                    'draft' => $draft,
                    'current' => $current,
                    'updateUrl' => $this->urlGenerator->linkToRoute('library.item.update', ['itemId' => $itemId]),
                    'detailsUrl' => $this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]),
                ], 'user', 409);
                $response->addHeader('Cache-Control', 'private, no-store');
                return $response;
            } catch (\InvalidArgumentException $e) {
                $safeError = $this->safeValidationError($e);
                if ($metadataAutosave) {
                    return new JSONResponse(['saved' => false, 'error' => $safeError], 422, [
                        'Cache-Control' => 'private, no-store',
                    ]);
                }
                $returnTo = (string)$this->request->getParam('returnTo', '');
                if ($returnTo === 'details') {
                    return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', [
                        'itemId' => $itemId,
                        'metadataError' => $safeError,
                    ]));
                }
                return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
            }
        }

        $returnTo = (string)$this->request->getParam('returnTo', '');
        if ($metadataAutosave) {
            $saved = $this->itemService->findItem($user->getUID(), $itemId);
            return new JSONResponse(['saved' => true, 'metadataRevision' => $saved['metadataRevision'] ?? null], 200, [
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
    public function batchresetfilteredfields(): RedirectResponse {
        $user = $this->userSession->getUser();
        $filters = $this->catalogueFiltersFromRequest();
        $result = ['requestedItems' => 0, 'resetItems' => 0, 'skippedItems' => 0];
        if ($user !== null) {
            try {
                $itemIds = SelectedItemIds::parse($this->request->getParam('itemIds', null));
                $result = $this->itemService->bulkResetFieldsToScannerCandidates($user->getUID(), $itemIds);
                $this->securityAudit?->warning('library.metadata_batch.reset', $user->getUID(), 'reset', 'metadata_batch', 'success', [
                    'target_count' => (int)($result['requestedItems'] ?? count($itemIds)),
                    'reason' => 'scanner_candidate_reset',
                ]);
            } catch (BatchLimitExceededException $e) {
                $this->securityAudit?->warning('library.metadata_batch.limit_rejected', $user->getUID(), 'reset', 'metadata_batch', 'rejected', [
                    'target_count' => 0,
                    'reason' => 'batch_limit_exceeded',
                ]);
                return $this->batchLimitRedirect($filters);
            } catch (\InvalidArgumentException $e) {
                $this->securityAudit?->warning('library.metadata_batch.selection_rejected', $user->getUID(), 'reset', 'metadata_batch', 'rejected', [
                    'target_count' => 0,
                    'reason' => 'invalid_selection',
                ]);
                return $this->batchSelectionRedirect($filters);
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
        $itemIds = [];
        if ($user !== null) {
            try {
                $itemIds = SelectedItemIds::parse($this->request->getParam('itemIds', null));
                $result = array_merge($result, $this->itemService->previewBatchMetadataEdit($user->getUID(), $itemIds,
                    (string)$this->request->getParam('bulkEditField', ''),
                    (string)$this->request->getParam('bulkEditValue', ''),
                ));
            } catch (BatchLimitExceededException $e) {
                $result['batchMetadataEditPreviewResult'] = false;
                $result['batchLimitError'] = true;
                $result['error'] = $e->getMessage();
            } catch (\InvalidArgumentException $e) {
                $result['batchMetadataEditPreviewResult'] = false;
                $result['batchSelectionError'] = true;
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
            'itemIds' => $itemIds,
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
                $explicitItemIds = SelectedItemIds::parse($itemIdsParamPresent ? $requestedItemIds : null);
                $result = $this->itemService->applyBatchMetadataEdit($user->getUID(), $explicitItemIds,
                        (string)$this->request->getParam('bulkEditField', ''),
                        (string)$this->request->getParam('bulkEditValue', ''),
                    );
                $this->securityAudit?->warning('library.metadata_batch.edit', $user->getUID(), 'edit', 'metadata_batch', 'success', [
                    'target_count' => (int)($result['requestedItems'] ?? count($explicitItemIds)),
                    'reason' => 'batch_metadata_edit',
                ]);
            } catch (BatchLimitExceededException $e) {
                $this->securityAudit?->warning('library.metadata_batch.limit_rejected', $user->getUID(), 'edit', 'metadata_batch', 'rejected', [
                    'target_count' => 0,
                    'reason' => 'batch_limit_exceeded',
                ]);
                return $this->batchLimitRedirect($filters);
            } catch (\InvalidArgumentException $e) {
                $this->securityAudit?->warning('library.metadata_batch.selection_rejected', $user->getUID(), 'edit', 'metadata_batch', 'rejected', [
                    'target_count' => 0,
                    'reason' => 'invalid_selection',
                ]);
                return $this->batchSelectionRedirect($filters);
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

    private function catalogueFiltersFromRequest(): array {
        $filters = [];
        foreach (['q', 'type', 'publication', 'year', 'creator', 'format', 'tag', 'shelf', 'folder', 'status', 'workflowStatus', 'subject', 'classification', 'scannerConflicts', 'starred', 'recentlyOpened', 'needsMetadata', 'coverReview', 'noCreator', 'noPublication', 'noDate', 'titleFromFilename', 'noDescription', 'unsupportedContainer', 'weakMetadata', 'unreviewedImports', 'sort'] as $key) {
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

    private function batchSelectionRedirect(array $filters): RedirectResponse {
        $query = array_filter($filters, static fn (string $value): bool => $value !== '');
        $query['batchSelectionError'] = '1';
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
    public function personalRating(int $itemId): JSONResponse {
        $headers = ['Cache-Control' => 'private, no-store'];
        $user = $this->userSession->getUser();
        if ($user === null) return new JSONResponse(['error' => 'unauthenticated'], 401, $headers);
        try {
            $rating = $this->request->getParam('personalRating', '');
            $revision = $this->request->getParam('metadataRevision', '');
            if ((!is_string($rating) && !is_int($rating)) || !is_string($revision)) throw new \InvalidArgumentException('rating');
            return new JSONResponse($this->itemService->setPersonalRating($user->getUID(), $itemId, $rating, $revision), 200, $headers);
        } catch (MetadataConflictException) {
            return new JSONResponse(['error' => 'metadata_changed'], 409, $headers);
        } catch (\OutOfBoundsException) {
            return new JSONResponse(['error' => 'not_found'], 404, $headers);
        } catch (\InvalidArgumentException) {
            return new JSONResponse(['error' => 'invalid_rating'], 422, $headers);
        }
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
     * @return array<int, array{scheme:string,displayValue:string}>
     */
    private function normalizeIdentifierRequest(mixed $value): array {
        if (!is_array($value)) {
            return [];
        }
        $normalized = [];
        foreach ($value as $row) {
            if (!is_array($row)) {
                continue;
            }
            $scheme = strtolower(trim((string)($row['scheme'] ?? '')));
            $displayValue = trim((string)($row['displayValue'] ?? ''));
            if ($displayValue !== '' && in_array($scheme, ['isbn', 'issn'], true)) {
                $normalized[] = ['scheme' => $scheme, 'displayValue' => $displayValue];
            }
        }
        return $normalized;
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

    private function safeValidationError(\InvalidArgumentException $e): string {
        $message = trim($e->getMessage());
        if ($message !== '' && SafeDiagnostics::sanitizePublicError($message) === $message) {
            return $message;
        }
        $diagnostic = SafeDiagnostics::fromThrowable(
            'metadata_validation_failed',
            'Metadata validation failed. Review the highlighted fields and try again.',
            $e,
        );
        SafeDiagnostics::log($diagnostic);
        return SafeDiagnostics::publicText($diagnostic);
    }
}
