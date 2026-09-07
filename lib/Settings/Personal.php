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
            'latestScanJob' => $this->withCancelUrl($this->scanJobService->latestJob($this->userId)),
            'scanJobHistory' => array_map(fn (array $job): array => $this->withCancelUrl($job) ?? $job, $this->scanJobService->recentJobs($this->userId, 5)),
            'rootSaveUrl' => $this->urlGenerator->linkToRoute('library.root.save'),
            'scanRunUrl' => $this->urlGenerator->linkToRoute('library.scan.run'),
            'scanRetryMetadataErrorsUrl' => $this->urlGenerator->linkToRoute('library.scan.retryMetadataErrors'),
            'scanRecheckMissingFilesUrl' => $this->urlGenerator->linkToRoute('library.scan.recheckMissingFiles'),
            'scanProgressUrl' => $this->urlGenerator->linkToRoute('library.scan.progress'),
            'metadataExportUrl' => $this->urlGenerator->linkToRoute('library.export.metadata'),
            'metadataSidecarManifestUrl' => $this->urlGenerator->linkToRoute('library.export.sidecarManifest'),
            'metadataSidecarBundleUrl' => $this->urlGenerator->linkToRoute('library.export.sidecarBundle'),
            'metadataImportPreviewUrl' => $this->urlGenerator->linkToRoute('library.import.preview'),
            'metadataImportApplyUrl' => $this->urlGenerator->linkToRoute('library.import.apply'),
            'bulkResetFieldsUrl' => $this->urlGenerator->linkToRoute('library.item.bulkresetfields'),
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

    /**
     * @param array<string, mixed>|null $job
     * @return array<string, mixed>|null
     */
    private function withCancelUrl(?array $job): ?array {
        if ($job === null) {
            return null;
        }
        $job['cancelUrl'] = $this->urlGenerator->linkToRoute('library.scan.cancel', ['jobId' => (int)$job['id']]);
        return $job;
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
