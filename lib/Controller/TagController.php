<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Exception\BatchLimitExceededException;
use OCA\Library\Service\FileTagService;
use OCA\Library\Service\ItemService;
use OCA\Library\Service\SelectedItemIds;
use OCA\Library\Service\SecurityAuditLogger;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;

final class TagController extends Controller {
    private ?SecurityAuditLogger $securityAudit = null;

    public function __construct(
        string $appName,
        IRequest $request,
        private FileTagService $fileTagService,
        private ItemService $itemService,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
        ?SecurityAuditLogger $securityAudit = null,
    ) {
        parent::__construct($appName, $request);
        $this->securityAudit = $securityAudit;
    }

    #[NoAdminRequired]
    public function assign(int $itemId): RedirectResponse {
        $result = ['status' => 'not-authenticated', 'tagName' => '', 'tagId' => ''];
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $result = $this->fileTagService->assignTagToItem(
                $user->getUID(),
                $itemId,
                (string)($this->request->getParam('nextcloudTagName', '') ?: $this->request->getParam('tagName', '')),
            );
        }

        return $this->redirectAfterTagChange($itemId, $result);
    }

    #[NoAdminRequired]
    public function batchassign(): RedirectResponse {
        $user = $this->userSession->getUser();
        $filters = $this->catalogueFiltersFromRequest();
        $result = ['requestedItems' => 0, 'addedItems' => 0, 'alreadyTaggedItems' => 0, 'skippedItems' => 0];
        if ($user !== null) {
            try {
                $itemIds = SelectedItemIds::parse($this->request->getParam('itemIds', null));
                $result = $this->fileTagService->assignTagToItems(
                    $user->getUID(),
                    $itemIds,
                    (string)($this->request->getParam('nextcloudTagName', '') ?: $this->request->getParam('tagName', '')),
                );
                $this->securityAudit?->info('library.bulk_tag.assign', $user->getUID(), 'assign', 'tag_batch', 'success', [
                    'target_count' => (int)($result['requestedItems'] ?? count($itemIds)),
                    'reason' => 'batch_tag_assign',
                ]);
            } catch (BatchLimitExceededException $e) {
                $this->securityAudit?->warning('library.bulk_tag.limit_rejected', $user->getUID(), 'assign', 'tag_batch', 'rejected', [
                    'target_count' => 0,
                    'reason' => 'batch_limit_exceeded',
                ]);
                return $this->batchLimitRedirect($filters);
            } catch (\InvalidArgumentException $e) {
                $this->securityAudit?->warning('library.bulk_tag.selection_rejected', $user->getUID(), 'assign', 'tag_batch', 'rejected', [
                    'target_count' => 0,
                    'reason' => 'invalid_selection',
                ]);
                return $this->batchSelectionRedirect($filters);
            }
        }

        $query = array_filter($filters, static fn (string $value): bool => $value !== '');
        $query['batchTagResult'] = '1';
        $query['batchRequested'] = (string)($result['requestedItems'] ?? 0);
        $query['batchAdded'] = (string)($result['addedItems'] ?? 0);
        $query['batchAlreadyTagged'] = (string)($result['alreadyTaggedItems'] ?? 0);
        $query['batchSkipped'] = (string)($result['skippedItems'] ?? 0);
        $query['batchTagName'] = (string)($result['tagName'] ?? $this->request->getParam('nextcloudTagName', ''));
        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index') . '?' . http_build_query($query));
    }

    #[NoAdminRequired]
    public function batchremove(): RedirectResponse {
        $user = $this->userSession->getUser();
        $filters = $this->catalogueFiltersFromRequest();
        $result = ['requestedItems' => 0, 'removedItems' => 0, 'notTaggedItems' => 0, 'skippedItems' => 0];
        if ($user !== null) {
            try {
                $itemIds = SelectedItemIds::parse($this->request->getParam('itemIds', null));
                $result = $this->fileTagService->removeTagFromItems(
                    $user->getUID(),
                    $itemIds,
                    (string)($this->request->getParam('nextcloudTagName', '') ?: $this->request->getParam('tagName', '')),
                );
                $this->securityAudit?->info('library.bulk_tag.remove', $user->getUID(), 'remove', 'tag_batch', 'success', [
                    'target_count' => (int)($result['requestedItems'] ?? count($itemIds)),
                    'reason' => 'batch_tag_remove',
                ]);
            } catch (BatchLimitExceededException $e) {
                $this->securityAudit?->warning('library.bulk_tag.limit_rejected', $user->getUID(), 'remove', 'tag_batch', 'rejected', [
                    'target_count' => 0,
                    'reason' => 'batch_limit_exceeded',
                ]);
                return $this->batchLimitRedirect($filters);
            } catch (\InvalidArgumentException $e) {
                $this->securityAudit?->warning('library.bulk_tag.selection_rejected', $user->getUID(), 'remove', 'tag_batch', 'rejected', [
                    'target_count' => 0,
                    'reason' => 'invalid_selection',
                ]);
                return $this->batchSelectionRedirect($filters);
            }
        }

        $query = array_filter($filters, static fn (string $value): bool => $value !== '');
        $query['batchTagRemoveResult'] = '1';
        $query['batchTagRemoveRequested'] = (string)($result['requestedItems'] ?? 0);
        $query['batchTagRemoveRemoved'] = (string)($result['removedItems'] ?? 0);
        $query['batchTagRemoveNotTagged'] = (string)($result['notTaggedItems'] ?? 0);
        $query['batchTagRemoveSkipped'] = (string)($result['skippedItems'] ?? 0);
        $query['batchTagRemoveName'] = (string)($result['tagName'] ?? $this->request->getParam('nextcloudTagName', ''));
        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index') . '?' . http_build_query($query));
    }

    #[NoAdminRequired]
    public function remove(int $itemId, string $tagId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->fileTagService->removeTagFromItem($user->getUID(), $itemId, $tagId);
        }

        return $this->redirectAfterTagChange($itemId);
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

    private function redirectAfterTagChange(int $itemId, array $result = []): RedirectResponse {
        $returnTo = (string)$this->request->getParam('returnTo', '');
        if ($returnTo === 'details') {
            $url = $this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]);
            if ($result !== []) {
                $url .= '?' . http_build_query([
                    'tagResult' => (string)($result['status'] ?? ''),
                    'tagName' => (string)($result['tagName'] ?? ''),
                ]);
            }
            return new RedirectResponse($url);
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }
}
