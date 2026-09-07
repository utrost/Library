<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\FileTagService;
use OCA\Library\Service\ItemService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;

final class TagController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private FileTagService $fileTagService,
        private ItemService $itemService,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
    ) {
        parent::__construct($appName, $request);
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
    #[NoCSRFRequired]
    public function batchassign(): RedirectResponse {
        $user = $this->userSession->getUser();
        $filters = $this->catalogueFiltersFromRequest();
        $result = ['requestedItems' => 0, 'addedItems' => 0, 'alreadyTaggedItems' => 0, 'skippedItems' => 0];
        if ($user !== null) {
            $itemIds = $this->itemService->itemIdsForCatalogueFilters($user->getUID(), $filters, 5000);
            $result = $this->fileTagService->assignTagToItems(
                $user->getUID(),
                $itemIds,
                (string)($this->request->getParam('nextcloudTagName', '') ?: $this->request->getParam('tagName', '')),
            );
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
    #[NoCSRFRequired]
    public function batchremove(): RedirectResponse {
        $user = $this->userSession->getUser();
        $filters = $this->catalogueFiltersFromRequest();
        $result = ['requestedItems' => 0, 'removedItems' => 0, 'notTaggedItems' => 0, 'skippedItems' => 0];
        if ($user !== null) {
            $itemIds = $this->itemService->itemIdsForCatalogueFilters($user->getUID(), $filters, 5000);
            $result = $this->fileTagService->removeTagFromItems(
                $user->getUID(),
                $itemIds,
                (string)($this->request->getParam('nextcloudTagName', '') ?: $this->request->getParam('tagName', '')),
            );
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
        foreach (['q', 'type', 'publication', 'year', 'creator', 'format', 'tag', 'shelf', 'status', 'workflowStatus', 'genre', 'classification', 'scannerConflicts', 'starred', 'sort'] as $key) {
            $filters[$key] = trim((string)$this->request->getParam($key, ''));
        }
        if ($filters['sort'] === '') {
            $filters['sort'] = 'title';
        }
        return $filters;
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
