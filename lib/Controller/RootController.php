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

        return $this->redirectToSettings();
    }

    #[NoAdminRequired]
    public function update(int $rootId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->rootService->updateRoot(
                $user->getUID(),
                $rootId,
                (string)$this->request->getParam('path', '/'),
                (string)$this->request->getParam('label', ''),
            );
        }

        return $this->redirectToSettings();
    }

    #[NoAdminRequired]
    public function toggle(int $rootId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $enabled = (string)$this->request->getParam('enabled', '1') === '1';
            $this->rootService->setRootEnabled($user->getUID(), $rootId, $enabled);
        }

        return $this->redirectToSettings();
    }

    #[NoAdminRequired]
    public function delete(int $rootId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null && (string)$this->request->getParam('confirmDelete', '') === '1') {
            $this->rootService->deleteRoot($user->getUID(), $rootId);
        }

        return $this->redirectToSettings();
    }

    private function redirectToSettings(): RedirectResponse {
        return new RedirectResponse($this->urlGenerator->getAbsoluteURL('/settings/user/library'));
    }
}
