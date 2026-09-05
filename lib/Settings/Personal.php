<?php

declare(strict_types=1);

namespace OCA\Library\Settings;

use OCA\Library\AppInfo\Application;
use OCA\Library\Service\FileIndexService;
use OCA\Library\Service\RootService;
use OCA\Library\Service\ScanJobService;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IURLGenerator;
use OCP\Settings\ISettings;
use OCP\Util;

class Personal implements ISettings {
    public function __construct(
        private string $userId,
        private RootService $rootService,
        private FileIndexService $fileIndexService,
        private ScanJobService $scanJobService,
        private IURLGenerator $urlGenerator,
    ) {
    }

    #[\Override]
    public function getForm(): TemplateResponse {
        Util::addStyle(Application::APP_ID, 'style');
        Util::addScript(Application::APP_ID, 'scan-progress');

        return new TemplateResponse(Application::APP_ID, 'settings-personal', [
            'roots' => $this->rootService->listRoots($this->userId),
            'files' => $this->fileIndexService->listFiles($this->userId),
            'latestScanJob' => $this->scanJobService->latestJob($this->userId),
            'scanJobHistory' => $this->scanJobService->recentJobs($this->userId, 5),
            'rootSaveUrl' => $this->urlGenerator->linkToRoute('library.root.save'),
            'scanRunUrl' => $this->urlGenerator->linkToRoute('library.scan.run'),
            'scanProgressUrl' => $this->urlGenerator->linkToRoute('library.scan.progress'),
        ], '');
    }

    #[\Override]
    public function getSection(): string {
        return 'library';
    }

    #[\Override]
    public function getPriority(): int {
        return 20;
    }
}
