<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\BackgroundJob\ScanJob;
use OCA\Library\Service\ScanJobService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\BackgroundJob\IJobList;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;

final class ScanController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private ScanJobService $scanJobService,
        private IJobList $jobList,
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
            $job = $this->scanJobService->queueJob($user->getUID());
            $this->jobList->add(ScanJob::class, ['userId' => $user->getUID(), 'jobId' => (int)$job['id']]);
        }

        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }
}
