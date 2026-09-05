<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\FileTagService;
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
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function assign(int $itemId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->fileTagService->assignTagToItem(
                $user->getUID(),
                $itemId,
                (string)$this->request->getParam('tagName', ''),
            );
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function remove(int $itemId, string $tagId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->fileTagService->removeTagFromItem($user->getUID(), $itemId, $tagId);
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }
}
