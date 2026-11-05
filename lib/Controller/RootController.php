<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\RootService;
use OCA\Library\Service\RootShareService;
use OCA\Library\Service\InferenceFolderRuleStore;
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
        private RootShareService $rootShares,
        ?SecurityAuditLogger $securityAudit = null,
        private ?InferenceFolderRuleStore $folderRules = null,
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
                $root = $this->rootService->saveRoot(
                    $user->getUID(),
                    $path,
                    (string)$this->request->getParam('label', ''),
                    true,
                );
                return $this->redirectToSettings((int)($root['id'] ?? 0));
            }
        }

        return $this->redirectToSettings();
    }

    #[NoAdminRequired]
    public function update(int $rootId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $uid = $user->getUID();
            try {
                return $this->rootShares->withRootLock($uid, $rootId, function () use ($uid, $rootId): RedirectResponse {
                    $path = (string)$this->request->getParam('path', '/');
                    $current = $this->rootService->findRoot($uid, $rootId);
                    $trimmed = trim($path);
                    $normalized = $trimmed === '' ? '/' : '/' . trim($trimmed, '/');
                    if ($current !== null && $current['path'] !== $normalized) {
                        foreach ($this->rootService->listRoots($uid) as $otherRoot) {
                            if ((int)$otherRoot['id'] !== $rootId && $otherRoot['path'] === $normalized) {
                                return $this->redirectToSettings(0, 'rootPathConflict');
                            }
                        }
                        $this->rootShares->revokeRootUnderLock($uid, $rootId);
                    }
                    $this->rootService->updateRoot($uid, $rootId, $path,
                        (string)$this->request->getParam('label', ''));
                    return $this->redirectToSettings();
                });
            } catch (\Throwable) {
                return $this->redirectToSettings(0, 'shareCleanupError');
            }
        }

        return $this->redirectToSettings();
    }

    #[NoAdminRequired]
    public function toggle(int $rootId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $uid = $user->getUID();
            try {
                return $this->rootShares->withRootLock($uid, $rootId, function () use ($uid, $rootId): RedirectResponse {
                    $enabled = (string)$this->request->getParam('enabled', '1') === '1';
                    if (!$enabled) {
                        $this->rootShares->revokeRootUnderLock($uid, $rootId);
                    }
                    $this->rootService->setRootEnabled($uid, $rootId, $enabled);
                    $this->securityAudit?->info('library.root.enabled', $uid, $enabled ? 'enable' : 'disable', 'root', 'success', [
                        'target_id' => $rootId,
                        'reason' => $enabled ? 'enabled' : 'disabled',
                    ]);
                    return $this->redirectToSettings();
                });
            } catch (\Throwable) {
                return $this->redirectToSettings(0, 'shareCleanupError');
            }
        }

        return $this->redirectToSettings();
    }

    #[NoAdminRequired]
    public function delete(int $rootId): RedirectResponse {
        $user = $this->userSession->getUser();
        $confirmDeleteText = trim((string)$this->request->getParam('confirmDeleteText', ''));
        if ($user !== null && $confirmDeleteText === 'DELETE') {
            $uid = $user->getUID();
            try {
                return $this->rootShares->withRootLock($uid, $rootId, function () use ($uid, $rootId): RedirectResponse {
                    $this->rootShares->revokeRootUnderLock($uid, $rootId);
                    $this->rootService->deleteRoot($uid, $rootId);
                    $this->folderRules?->deleteRoot($uid, $rootId);
                    $this->securityAudit?->warning('library.root.delete', $uid, 'delete', 'root', 'success', [
                        'target_id' => $rootId,
                        'reason' => 'confirmed_delete',
                    ]);
                    return $this->redirectToSettings();
                });
            } catch (\Throwable) {
                return $this->redirectToSettings(0, 'shareCleanupError');
            }
        } elseif ($user !== null) {
            $this->securityAudit?->warning('library.root.delete', $user->getUID(), 'delete', 'root', 'rejected', [
                'target_id' => $rootId,
                'reason' => 'delete confirmation mismatch',
            ]);
        }

        return $this->redirectToSettings();
    }

    private function redirectToSettings(int $savedRootId = 0, string $notice = ''): RedirectResponse {
        $url = $this->urlGenerator->getAbsoluteURL('/settings/user/library');
        $params = [];
        if ($savedRootId > 0) $params['rootSaved'] = $savedRootId;
        if ($notice !== '') $params['notice'] = $notice;
        if ($params !== []) $url .= '?' . http_build_query($params);
        return new RedirectResponse($url);
    }
}
