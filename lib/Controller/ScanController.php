<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\LibraryScanner;
use OCA\Library\Service\ScanJobService;
use OCP\AppFramework\Controller;
use Throwable;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;

final class ScanController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private LibraryScanner $scanner,
        private ScanJobService $scanJobService,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function run(): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $job = $this->scanJobService->startJob($user->getUID());
            try {
                $result = $this->scanner->scan($user->getUID());
                $this->scanJobService->finishJob($user->getUID(), (int)$job['id'], $result);
            } catch (Throwable $e) {
                $this->scanJobService->failJob($user->getUID(), (int)$job['id'], $e->getMessage());
            }
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }
}
