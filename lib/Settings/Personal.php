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
            'roots' => $this->rootsWithActionUrls($this->rootService->listRoots($this->userId)),
            'files' => $this->fileIndexService->listFiles($this->userId),
            'latestScanJob' => $this->scanJobService->latestJob($this->userId),
            'scanJobHistory' => $this->scanJobService->recentJobs($this->userId, 5),
            'rootSaveUrl' => $this->urlGenerator->linkToRoute('library.root.save'),
            'scanRunUrl' => $this->urlGenerator->linkToRoute('library.scan.run'),
            'scanProgressUrl' => $this->urlGenerator->linkToRoute('library.scan.progress'),
            'metadataExportUrl' => $this->urlGenerator->linkToRoute('library.export.metadata'),
            'metadataImportPreviewUrl' => $this->urlGenerator->linkToRoute('library.import.preview'),
            'metadataImportApplyUrl' => $this->urlGenerator->linkToRoute('library.import.apply'),
        ], '');
    }

    /**
     * @param array<int, array<string, mixed>> $roots
     * @return array<int, array<string, mixed>>
     */
    private function rootsWithActionUrls(array $roots): array {
        return array_map(function (array $root): array {
            $rootId = (int)$root['id'];
            $root['rootUpdateUrl'] = $this->urlGenerator->linkToRoute('library.root.update', ['rootId' => $rootId]);
            $root['rootToggleUrl'] = $this->urlGenerator->linkToRoute('library.root.toggle', ['rootId' => $rootId]);
            $root['rootDeleteUrl'] = $this->urlGenerator->linkToRoute('library.root.delete', ['rootId' => $rootId]);
            $root['rootScanUrl'] = $this->urlGenerator->linkToRoute('library.scan.runRoot', ['rootId' => $rootId]);
            return $root;
        }, $roots);
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
