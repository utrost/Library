<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\FileCommentService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;

final class CommentController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private FileCommentService $fileCommentService,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    public function add(int $itemId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->fileCommentService->addCommentToItem(
                $user->getUID(),
                $itemId,
                (string)$this->request->getParam('commentMessage', ''),
            );
        }

        $returnTo = (string)$this->request->getParam('returnTo', '');
        if ($returnTo === 'details') {
            return new RedirectResponse($this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]));
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }
}
