<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\RootService;
use OCA\Library\Service\SecurityAuditLogger;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;

final class RootController extends Controller {
    private ?SecurityAuditLogger $securityAudit = null;

    public function __construct(
        string $appName,
        IRequest $request,
        private RootService $rootService,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
        ?SecurityAuditLogger $securityAudit = null,
    ) {
        parent::__construct($appName, $request);
        $this->securityAudit = $securityAudit;
    }

    #[NoAdminRequired]
    public function save(): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $path = trim((string)$this->request->getParam('path', ''));
            if ($path !== '') {
                $this->rootService->saveRoot(
                    $user->getUID(),
                    $path,
                    (string)$this->request->getParam('label', ''),
                    true,
                );
            }
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
            $this->securityAudit?->info('library.root.enabled', $user->getUID(), $enabled ? 'enable' : 'disable', 'root', 'success', [
                'target_id' => $rootId,
                'reason' => $enabled ? 'enabled' : 'disabled',
            ]);
        }

        return $this->redirectToSettings();
    }

    #[NoAdminRequired]
    public function delete(int $rootId): RedirectResponse {
        $user = $this->userSession->getUser();
        $confirmDeleteText = trim((string)$this->request->getParam('confirmDeleteText', ''));
        if ($user !== null && $confirmDeleteText === 'DELETE') {
            $this->rootService->deleteRoot($user->getUID(), $rootId);
            $this->securityAudit?->warning('library.root.delete', $user->getUID(), 'delete', 'root', 'success', [
                'target_id' => $rootId,
                'reason' => 'confirmed_delete',
            ]);
        } elseif ($user !== null) {
            $this->securityAudit?->warning('library.root.delete', $user->getUID(), 'delete', 'root', 'rejected', [
                'target_id' => $rootId,
                'reason' => 'delete confirmation mismatch',
            ]);
        }

        return $this->redirectToSettings();
    }

    private function redirectToSettings(): RedirectResponse {
        return new RedirectResponse($this->urlGenerator->getAbsoluteURL('/settings/user/library'));
    }
}
