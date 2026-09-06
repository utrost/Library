<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\ItemService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;

final class ItemController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private ItemService $itemService,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    public function update(int $itemId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->itemService->updateItem($user->getUID(), $itemId, [
                'publicationType' => (string)$this->request->getParam('publicationType', 'other'),
                'title' => (string)$this->request->getParam('title', ''),
                'subtitle' => (string)$this->request->getParam('subtitle', ''),
                'creators' => (string)$this->request->getParam('creators', ''),
                'publication' => (string)$this->request->getParam('publication', ''),
                'publicationDate' => (string)$this->request->getParam('publicationDate', ''),
                'language' => (string)$this->request->getParam('language', ''),
                'publisher' => (string)$this->request->getParam('publisher', ''),
            ]);
        }

        $returnTo = (string)$this->request->getParam('returnTo', '');
        if ($returnTo === 'details') {
            return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]));
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
}
