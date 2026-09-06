<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\RootService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;

final class RootController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private RootService $rootService,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    public function save(): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->rootService->saveRoot(
                $user->getUID(),
                (string)$this->request->getParam('path', '/'),
                (string)$this->request->getParam('label', ''),
                true,
            );
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }
}
