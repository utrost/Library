<?php

declare(strict_types=1);

namespace OCA\Library\Settings;

use OCA\Library\AppInfo\Application;
use OCA\Library\Service\FileIndexService;
use OCA\Library\Service\RootService;
use OCA\Library\Service\ScanJobService;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IURLGenerator;
use OCP\L10N\IFactory;
use OCP\Settings\ISettings;
use OCP\Util;

class Personal implements ISettings {
    public function __construct(
        private string $userId,
        private RootService $rootService,
        private FileIndexService $fileIndexService,
        private ScanJobService $scanJobService,
        private IURLGenerator $urlGenerator,
        private ?IFactory $l10nFactory = null,
    ) {
    }

    #[\Override]
    public function getForm(): TemplateResponse {
        Util::addStyle(Application::APP_ID, 'style');
        Util::addScript(Application::APP_ID, 'scan-progress');
        Util::addScript(Application::APP_ID, 'settings-operations');

        $language = $this->l10nFactory?->findLanguage(Application::APP_ID) ?? 'en';
        $publicationCountsByRoot = $this->fileIndexService->publicationCountsByRoot($this->userId);
        $roots = $this->rootsWithActionUrls($this->rootService->listRoots($this->userId), $publicationCountsByRoot);
        return new TemplateResponse(Application::APP_ID, 'settings-personal', [
            'language' => $language,
            'direction' => $this->l10nFactory?->getLanguageDirection($language) ?? 'ltr',
            'roots' => $roots,
            'totalPublications' => array_sum($publicationCountsByRoot),
            'fileStatusCounts' => $this->fileIndexService->fileStatusCounts($this->userId),
            'latestScanJob' => $this->prepareJob($this->scanJobService->latestJob($this->userId), $roots),
            'scanJobHistory' => array_map(fn (array $job): array => $this->prepareJob($job, $roots) ?? $job, $this->scanJobService->recentJobs($this->userId, 5)),
            'rootSaveUrl' => $this->urlGenerator->linkToRoute('library.root.save'),
            'scanRunUrl' => $this->urlGenerator->linkToRoute('library.scan.run'),
            'scanRetryMetadataErrorsUrl' => $this->urlGenerator->linkToRoute('library.scan.retryMetadataErrors'),
            'scanRecheckMissingFilesUrl' => $this->urlGenerator->linkToRoute('library.scan.recheckMissingFiles'),
            'scanProgressUrl' => $this->urlGenerator->linkToRoute('library.scan.progress'),
            'scanChangedFilesUrl' => $this->urlGenerator->linkToRoute('library.page.index', ['sort' => 'recent']),
            'scanAddedFilesUrl' => $this->urlGenerator->linkToRoute('library.page.index', ['sort' => 'recent']),
            'scanMovedFilesUrl' => $this->urlGenerator->linkToRoute('library.page.index', ['sort' => 'recent']),
            'scanMissingFilesUrl' => $this->urlGenerator->linkToRoute('library.page.index', ['status' => 'missing']),
            'scanMetadataErrorsUrl' => $this->urlGenerator->linkToRoute('library.page.index', ['status' => 'metadata_error', 'needsMetadata' => '1']),
            'scanMetadataErrorsExportUrl' => $this->urlGenerator->linkToRoute('library.health.metadataErrorsTsv'),
            'metadataExportUrl' => $this->urlGenerator->linkToRoute('library.export.metadata'),
            'metadataSidecarManifestUrl' => $this->urlGenerator->linkToRoute('library.export.sidecarManifest'),
            'metadataSidecarBundleUrl' => $this->urlGenerator->linkToRoute('library.export.sidecarBundle'),
            'metadataImportPreviewUrl' => $this->urlGenerator->linkToRoute('library.import.preview'),
            'metadataImportApplyUrl' => $this->urlGenerator->linkToRoute('library.import.apply'),
            'catalogueUrl' => $this->urlGenerator->linkToRoute('library.page.index'),
        ], '');
    }

    /**
     * @param array<int, array<string, mixed>> $roots
     * @return array<int, array<string, mixed>>
     */
    private function rootsWithActionUrls(array $roots, array $publicationCountsByRoot): array {
        return array_map(function (array $root) use ($publicationCountsByRoot): array {
            $rootId = (int)$root['id'];
            $root['publicationCount'] = $publicationCountsByRoot[$rootId] ?? 0;
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

    private function prepareJob(?array $job, array $roots): ?array {
        $job = $this->withCancelUrl($job);
        if ($job === null) {
            return null;
        }
        $job['scopeLabel'] = (string)($job['scopeType'] ?? 'all');
        if ($job['scopeLabel'] === 'root' && ($job['rootId'] ?? null) !== null) {
            foreach ($roots as $root) {
                if ((int)$root['id'] === (int)$job['rootId']) {
                    $label = trim((string)($root['label'] ?? ''));
                    $path = (string)$root['path'];
                    $job['scopeLabel'] = $label !== '' && $label !== $path ? "root: {$label} ({$path})" : $path;
                    break;
                }
            }
            if ($job['scopeLabel'] === 'root') {
                $job['scopeLabel'] = 'removed Library folder';
            }
        }
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
