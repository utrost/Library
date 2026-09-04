<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\LibraryScanner;
use OCP\AppFramework\Controller;
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
            $this->scanner->scan($user->getUID());
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }
}
