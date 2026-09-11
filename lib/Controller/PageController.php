<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\AppInfo\Application;
use OCA\Library\Reader\DefaultNextcloudFileProvider;
use OCA\Library\Service\FileIndexService;
use OCA\Library\Service\FileTagService;
use OCA\Library\Service\ItemService;
use OCA\Library\Service\LibraryHealthService;
use OCA\Library\Service\RootService;
use OCA\Library\Service\SavedCollectionService;
use OCA\Library\Service\ScanJobService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Services\IInitialState;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IRequest;
use OCP\L10N\IFactory;
use OCP\IURLGenerator;
use OCP\IUserSession;
use OCP\Util;
use Psr\Log\LoggerInterface;
use OCA\Library\Instrumentation\MonotonicClock;
use OCA\Library\Http\ReviewQueryPolicy;
use Throwable;

class PageController extends Controller {
    private const VUE_SCRIPT_ASSET = 'library-main-0-1-0-alpha-165';
    private const VUE_STYLE_ASSET = 'library-vue-0-1-0-alpha-165';
    private MonotonicClock $clock;
    /** @var array<string, true> */
    private array $invalidReviewKeys = [];

    private const READER_FIXTURE_FILE_ID = 82;

    private const CATALOGUE_ITEM_KEYS = [
        'id', 'title', 'creators', 'publicationType', 'publication',
        'publicationDate', 'description', 'starred', 'workflowStatus',
        'lastOpenedAt', 'extension', 'shelf', 'scanStatus', 'scanError',
        'hasScannerConflict', 'scannerConflictCount', 'nextcloudTags',
        'coverUrl', 'starUrl', 'openUrl', 'filesUrl', 'downloadUrl',
        'detailsUrl',
    ];

    private const SCANNER_CONFLICT_ITEM_EXTRA_KEYS = [
        'cachedPath', 'subtitle', 'language', 'publisher', 'genres',
        'classifications', 'metadataSource', 'fieldSources', 'fieldValues',
        'resetFieldUrl',
    ];

    public function __construct(
        string $appName,
        IRequest $request,
        private DefaultNextcloudFileProvider $readerProvider,
        private RootService $rootService,
        private FileIndexService $fileIndexService,
        private FileTagService $fileTagService,
        private ItemService $itemService,
        private SavedCollectionService $savedCollectionService,
        private LibraryHealthService $libraryHealthService,
        private ScanJobService $scanJobService,
        private IInitialState $initialState,
        private IFactory $l10nFactory,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
        private LoggerInterface $logger,
        ?MonotonicClock $clock = null,
    ) {
        parent::__construct($appName, $request);
        $this->clock = $clock ?? new MonotonicClock();
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): TemplateResponse {
        Util::addStyle(Application::APP_ID, 'style');
        Util::addStyle(Application::APP_ID, self::VUE_STYLE_ASSET);
        Util::addScript(Application::APP_ID, 'library-shell');
        Util::addScript(Application::APP_ID, self::VUE_SCRIPT_ASSET);

        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';
        $this->initialState->provideInitialState('catalogue', $this->buildCatalogueState($userId, [], [], 'index'));

        return $this->catalogueTemplateResponse();
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function publication(string $publication): TemplateResponse {
        Util::addStyle(Application::APP_ID, 'style');
        Util::addStyle(Application::APP_ID, self::VUE_STYLE_ASSET);
        Util::addScript(Application::APP_ID, 'library-shell');
        Util::addScript(Application::APP_ID, self::VUE_SCRIPT_ASSET);

        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';
        $this->initialState->provideInitialState('catalogue', $this->buildCatalogueState($userId, [
            'publication' => $publication,
            'sort' => 'publicationIssue',
        ], [
            'discoveryPage' => 'publication',
            'discoveryTitle' => $publication,
            'publicationIssueContext' => $this->enrichPublicationIssueContextForVue($this->itemService->publicationIssueContext($userId, $publication)),
        ], 'publication'));

        return $this->catalogueTemplateResponse();
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function year(string $year): TemplateResponse {
        Util::addStyle(Application::APP_ID, 'style');
        Util::addStyle(Application::APP_ID, self::VUE_STYLE_ASSET);
        Util::addScript(Application::APP_ID, 'library-shell');
        Util::addScript(Application::APP_ID, self::VUE_SCRIPT_ASSET);

        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';
        $this->initialState->provideInitialState('catalogue', $this->buildCatalogueState($userId, [
            'year' => $year,
            'sort' => 'publicationDate',
        ], [
            'discoveryPage' => 'year',
            'discoveryTitle' => $year,
        ], 'year'));

        return $this->catalogueTemplateResponse();
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function creator(string $creator): TemplateResponse {
        Util::addStyle(Application::APP_ID, 'style');
        Util::addStyle(Application::APP_ID, self::VUE_STYLE_ASSET);
        Util::addScript(Application::APP_ID, 'library-shell');
        Util::addScript(Application::APP_ID, self::VUE_SCRIPT_ASSET);

        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';
        $this->initialState->provideInitialState('catalogue', $this->buildCatalogueState($userId, [
            'creator' => $creator,
            'sort' => 'publication',
        ], [
            'discoveryPage' => 'creator',
            'discoveryTitle' => $creator,
        ], 'creator'));

        return $this->catalogueTemplateResponse();
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function catalogue(): JSONResponse {
        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';
        return new JSONResponse($this->buildCatalogueState($userId, [], [], 'catalogue_api'));
    }

    private function catalogueTemplateResponse(): TemplateResponse {
        $language = $this->l10nFactory->findLanguage(Application::APP_ID);
        $direction = $this->l10nFactory->getLanguageDirection($language);
        return new TemplateResponse(Application::APP_ID, 'main', [
            'settingsUrl' => $this->urlGenerator->linkToRoute('settings.PersonalSettings.index', ['section' => 'library']),
            'language' => $language,
            'direction' => $direction,
        ]);
    }

    private function buildCatalogueState(string $userId, array $filterOverrides = [], array $pageContext = [], string $surface = 'catalogue_api'): array {
        $totalStarted = $this->clock->now();
        $durations = ['catalogue_query_ms' => 0, 'tag_enrichment_ms' => 0, 'auxiliary_ms' => 0, 'projection_ms' => 0];
        $this->invalidReviewKeys = ReviewQueryPolicy::invalidKeysFromRequestUri($this->request->getRequestUri());
        $batchCoverRefreshRequested = (string)$this->request->getParam('coverRefresh', '0') === '1';
        $activeFilters = [
            'q' => trim((string)$this->request->getParam('q', '')),
            'type' => trim((string)$this->request->getParam('type', '')),
            'publication' => trim((string)$this->request->getParam('publication', '')),
            'year' => trim((string)$this->request->getParam('year', '')),
            'creator' => trim((string)$this->request->getParam('creator', '')),
            'format' => trim((string)$this->request->getParam('format', '')),
            'tag' => trim((string)$this->request->getParam('tag', '')),
            'shelf' => trim((string)$this->request->getParam('shelf', '')),
            'status' => $this->normalizeScalarFilter($this->request->getParam('status', '')),
            'workflowStatus' => trim((string)$this->request->getParam('workflowStatus', '')),
            'genre' => trim((string)$this->request->getParam('genre', '')),
            'classification' => trim((string)$this->request->getParam('classification', '')),
            'scannerConflicts' => $this->normalizeReviewFilter('scannerConflicts', $this->request->getParam('scannerConflicts', '')),
            'starred' => trim((string)$this->request->getParam('starred', '')),
            'needsMetadata' => $this->normalizeReviewFilter('needsMetadata', $this->request->getParam('needsMetadata', '')),
            'coverReview' => $this->normalizeReviewFilter('coverReview', $this->request->getParam('coverReview', '')),
            'noCreator' => $this->normalizeReviewFilter('noCreator', $this->request->getParam('noCreator', '')),
            'noPublication' => $this->normalizeReviewFilter('noPublication', $this->request->getParam('noPublication', '')),
            'noDate' => $this->normalizeReviewFilter('noDate', $this->request->getParam('noDate', '')),
            'titleFromFilename' => $this->normalizeReviewFilter('titleFromFilename', $this->request->getParam('titleFromFilename', '')),
            'noDescription' => $this->normalizeReviewFilter('noDescription', $this->request->getParam('noDescription', '')),
            'unsupportedContainer' => $this->normalizeReviewFilter('unsupportedContainer', $this->request->getParam('unsupportedContainer', '')),
            'weakMetadata' => $this->normalizeReviewFilter('weakMetadata', $this->request->getParam('weakMetadata', '')),
            'unreviewedImports' => $this->normalizeReviewFilter('unreviewedImports', $this->request->getParam('unreviewedImports', '')),
            'sort' => trim((string)$this->request->getParam('sort', 'title')),
        ];
        foreach ($filterOverrides as $key => $value) {
            $activeFilters[$key] = isset(ReviewQueryPolicy::FILTER_VALUES[$key])
                ? $this->normalizeReviewFilter($key, $value)
                : trim((string)$value);
        }
        if (!in_array($activeFilters['sort'], ['title', 'recent', 'publicationDate', 'publication', 'publicationIssue', 'lastOpened', 'format'], true)) {
            $activeFilters['sort'] = 'title';
        }
        if ($activeFilters['tag'] !== '') {
            $activeFilters['taggedFileIds'] = $this->fileTagService->fileIdsForExactVisibleTag($activeFilters['tag']);
        }
        $pagination = $this->buildPagination(
            (int)$this->request->getParam('page', 1),
            (int)$this->request->getParam('limit', 100),
        );
        $phaseStarted = $this->clock->now();
        $roots = $this->rootService->listRoots($userId);
        $durations['auxiliary_ms'] += $this->clock->elapsedMs($phaseStarted);
        $phaseStarted = $this->clock->now();
        $catalogue = $userId !== '' ? $this->itemService->queryCatalogue($userId, $activeFilters, $pagination) : [
            'items' => [],
            'total' => 0,
            'facets' => ['shelves' => [], 'formats' => [], 'scanStatuses' => ['indexed', 'metadata_error', 'missing'], 'workflowStatuses' => [], 'genres' => [], 'classifications' => [], 'publications' => [], 'publicationSummaries' => [], 'publicationYears' => [], 'creators' => []],
        ];
        $durations['catalogue_query_ms'] = $this->clock->elapsedMs($phaseStarted);
        $items = $catalogue['items'];
        $pagination['total'] = (int)$catalogue['total'];
        $pagination['visible'] = count($items);
        $pagination['from'] = $pagination['total'] === 0 ? 0 : (($pagination['page'] - 1) * $pagination['limit']) + 1;
        $pagination['to'] = $pagination['from'] === 0 ? 0 : $pagination['from'] + $pagination['visible'] - 1;
        $pagination['previousUrl'] = $pagination['page'] > 1 ? $this->paginationUrl($activeFilters, $pagination, $pagination['page'] - 1) : '';
        $pagination['nextUrl'] = $pagination['to'] < $pagination['total'] ? $this->paginationUrl($activeFilters, $pagination, $pagination['page'] + 1) : '';

        $phaseStarted = $this->clock->now();
        $fileTagsByFileId = $this->fileTagService->tagsForItems($items);
        $durations['tag_enrichment_ms'] = $this->clock->elapsedMs($phaseStarted);
        $metadataReviewProjection = ($activeFilters['scannerConflicts'] ?? '') === '1'
            || ($activeFilters['weakMetadata'] ?? '') === 'filename';
        $phaseStarted = $this->clock->now();
        $items = $this->enrichItemsForVue(
            $userId,
            $items,
            $fileTagsByFileId,
            $metadataReviewProjection,
            $batchCoverRefreshRequested,
        );
        $durations['projection_ms'] = $this->clock->elapsedMs($phaseStarted);

        $phaseStarted = $this->clock->now();
        $smartViewCounts = $userId !== '' ? $this->itemService->smartViewCounts($userId) : [];
        $savedCollections = $userId !== '' ? $this->savedCollectionsWithCounts($userId) : [];
        $durations['auxiliary_ms'] += $this->clock->elapsedMs($phaseStarted);
        $catalogueRootUrl = $this->urlGenerator->linkToRoute('library.page.index');
        $language = $this->l10nFactory->findLanguage(Application::APP_ID);
        $direction = $this->l10nFactory->getLanguageDirection($language);
        $state = [
            'publicationIssueContext' => null,
            ...$pageContext,
            'language' => $language,
            'direction' => $direction,
            'items' => $items,
            'scannerConflictCount' => array_sum(array_map(static fn (array $item): int => (int)($item['scannerConflictCount'] ?? 0), $items)),
            'shelves' => $catalogue['facets']['shelves'],
            'formats' => $catalogue['facets']['formats'],
            'publications' => $catalogue['facets']['publications'],
            'publicationSummaries' => array_map(function (array $summary): array {
                $summary['publicationLandingUrl'] = $this->urlGenerator->linkToRoute('library.page.publication', ['publication' => (string)($summary['publication'] ?? '')]);
                return $summary;
            }, $catalogue['facets']['publicationSummaries']),
            'publicationYears' => $catalogue['facets']['publicationYears'],
            'publicationYearLandingUrls' => array_reduce($catalogue['facets']['publicationYears'], function (array $carry, string $year): array {
                $carry[$year] = $this->urlGenerator->linkToRoute('library.page.year', ['year' => $year]);
                return $carry;
            }, []),
            'creators' => $catalogue['facets']['creators'],
            'creatorLandingUrls' => array_reduce($catalogue['facets']['creators'], function (array $carry, string $creator): array {
                $carry[$creator] = $this->urlGenerator->linkToRoute('library.page.creator', ['creator' => $creator]);
                return $carry;
            }, []),
            'scanStatuses' => $catalogue['facets']['scanStatuses'],
            'workflowStatuses' => $catalogue['facets']['workflowStatuses'],
            'genres' => $catalogue['facets']['genres'] ?? [],
            'classifications' => $catalogue['facets']['classifications'] ?? [],
            'cataloguePagination' => $pagination,
            'activeFilters' => $activeFilters,
            'rootCount' => count($roots),
            'enabledRootCount' => count(array_filter($roots, static fn (array $root): bool => (bool)($root['enabled'] ?? false))),
            'catalogueRootUrl' => $catalogueRootUrl,
            'reviewUrl' => $catalogueRootUrl . '?scannerConflicts=1',
            'settingsUrl' => $this->urlGenerator->linkToRoute('settings.PersonalSettings.index', ['section' => 'library']),
            'metadataExportUrl' => $this->urlGenerator->linkToRoute('library.export.metadata'),
            'metadataSidecarManifestUrl' => $this->urlGenerator->linkToRoute('library.export.sidecarManifest'),
            'metadataSidecarBundleUrl' => $this->urlGenerator->linkToRoute('library.export.sidecarBundle'),
            'catalogueEndpointUrl' => $this->urlGenerator->linkToRoute('library.page.catalogue'),
            'itemSidebarUrlTemplate' => str_replace('2147483647', '__ITEM_ID__', $this->urlGenerator->linkToRoute('library.item_page.sidebar', ['itemId' => '2147483647'])),
            'batchTagUrl' => $this->urlGenerator->linkToRoute('library.tag.batchassign'),
            'batchTagRemoveUrl' => $this->urlGenerator->linkToRoute('library.tag.batchremove'),
            'batchMetadataResetUrl' => $this->urlGenerator->linkToRoute('library.item.batchresetfilteredfields'),
            'batchMetadataEditPreviewUrl' => $this->urlGenerator->linkToRoute('library.item.batchpreviewmetadataedit'),
            'batchCoverRefreshUrl' => $this->urlGenerator->linkToRoute('library.cover.batchrefresh'),
            'batchCoverRefreshRequested' => $batchCoverRefreshRequested,
            'scannerConflictReviewUrl' => $catalogueRootUrl . '?scannerConflicts=1',
            'metadataErrorsUrl' => $this->urlGenerator->linkToRoute('library.health.metadataErrors'),
            'metadataErrorsTsvUrl' => $this->urlGenerator->linkToRoute('library.health.metadataErrorsTsv'),
            'coverProbeUrl' => $this->urlGenerator->linkToRoute('library.health.coverProbe'),
            'importHealthSummaryUrl' => $this->urlGenerator->linkToRoute('library.health.importSummary'),
            'smartViewCounts' => $smartViewCounts,
            'savedCollections' => $savedCollections,
            'savedCollectionSaveUrl' => $this->urlGenerator->linkToRoute('library.saved_collection.save'),
            'savedCollectionDeleteBaseUrl' => $this->urlGenerator->linkToRoute('library.saved_collection.delete', ['collectionId' => '__COLLECTION_ID__']),
            'importHealthSummary' => [],
        ];
        $durations['total_ms'] = $this->clock->elapsedMs($totalStarted);
        $context = ['event_schema' => 1, 'surface' => in_array($surface, ['index', 'catalogue_api', 'publication', 'year', 'creator'], true) ? $surface : 'catalogue_api',
            ...$durations, 'items_returned' => count($items), 'total_items' => (int)$catalogue['total'],
            'page' => $pagination['page'], 'limit' => $pagination['limit'],
            'active_filter_count' => count(array_filter($activeFilters, static fn ($value, $key): bool => $key !== 'taggedFileIds' && trim((string)$value) !== '' && !($key === 'sort' && $value === 'title'), ARRAY_FILTER_USE_BOTH)),
            'has_text_search' => $activeFilters['q'] !== '', 'scanner_conflict_projection' => $metadataReviewProjection];
        try {
            if ($durations['total_ms'] >= 500) { $this->logger->warning('library.catalogue.slow', $context); }
            else { $this->logger->debug('library.catalogue.built', $context); }
        } catch (Throwable) {
            // Operational logging must not break catalogue requests.
        }
        return $state;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private function savedCollectionsWithCounts(string $userId): array {
        return array_map(function (array $collection) use ($userId): array {
            $collection['count'] = $this->itemService->countCatalogue($userId, (array)($collection['filters'] ?? []));
            return $collection;
        }, $this->savedCollectionService->listCollections($userId));
    }

    private function enrichPublicationIssueContextForVue(array $context): array {
        foreach (($context['issueGroups'] ?? []) as $groupIndex => $group) {
            foreach (($group['items'] ?? []) as $itemIndex => $issue) {
                $context['issueGroups'][$groupIndex]['items'][$itemIndex]['detailsUrl'] = $this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => (string)($issue['itemId'] ?? '0')]);
            }
        }
        foreach (($context['unknownIssueItems'] ?? []) as $itemIndex => $issue) {
            $context['unknownIssueItems'][$itemIndex]['detailsUrl'] = $this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => (string)($issue['itemId'] ?? '0')]);
        }
        return $context;
    }

    /**
     * @param array<int, array<string, mixed>> $items
     * @param array<int, array<int, array{id:int,name:string}>> $fileTagsByFileId
     * @return array<int, array<string, mixed>>
     */
    private function enrichItemsForVue(string $userId, array $items, array $fileTagsByFileId, bool $scannerConflictProjection, bool $batchCoverRefreshRequested = false): array {
        return array_map(function (array $item) use ($fileTagsByFileId, $userId, $scannerConflictProjection, $batchCoverRefreshRequested): array {
            $itemId = (string)$item['id'];
            $fileId = (int)$item['fileId'];
            $item['starUrl'] = $this->urlGenerator->linkToRoute('library.item.star', ['itemId' => $itemId]);
            $item['coverUrl'] = $this->urlGenerator->linkToRoute('library.cover.show', [
                'itemId' => $itemId,
                'refresh' => $batchCoverRefreshRequested ? '1' : null,
            ]);
            $item['detailsUrl'] = $this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]);
            $item['openUrl'] = $this->urlGenerator->linkToRoute('library.item.open', ['itemId' => $itemId]);
            $item['resetFieldUrl'] = $this->urlGenerator->linkToRoute('library.item.resetfield', ['itemId' => $itemId]);
            $item['filesUrl'] = $this->readerProvider->getShowInFilesUrl($fileId, (string)($item['cachedPath'] ?? ''));
            $item['downloadUrl'] = $this->readerProvider->getDownloadUrl($userId, (string)($item['cachedPath'] ?? ''));
            $item['nextcloudTags'] = $fileTagsByFileId[$fileId] ?? [];
            return $this->projectCatalogueItem($item, $scannerConflictProjection);
        }, $items);
    }

    private function projectCatalogueItem(array $item, bool $scannerConflictProjection): array {
        $keys = self::CATALOGUE_ITEM_KEYS;
        if ($scannerConflictProjection) {
            $keys = [...$keys, ...self::SCANNER_CONFLICT_ITEM_EXTRA_KEYS];
        }
        return array_intersect_key($item, array_flip($keys));
    }

    private function normalizeReviewFilter(string $key, mixed $value): string {
        return ReviewQueryPolicy::normalizeReviewValue($key, $value, $this->invalidReviewKeys);
    }

    private function normalizeScalarFilter(mixed $value): string {
        return ReviewQueryPolicy::normalizeStatus($value, $this->invalidReviewKeys);
    }

    /**
     * @return array{page:int,limit:int,total:int,visible:int,from:int,to:int,previousUrl:string,nextUrl:string}
     */
    private function buildPagination(int $page, int $limit): array {
        $limit = max(1, min(500, $limit));
        return [
            'page' => max(1, $page),
            'limit' => $limit,
            'total' => 0,
            'visible' => 0,
            'from' => 0,
            'to' => 0,
            'previousUrl' => '',
            'nextUrl' => '',
        ];
    }

    /**
     * @param array{q:string,type:string,publication:string,year:string,creator:string,tag:string,shelf:string,format:string,status:string,workflowStatus:string,genre:string,classification:string,scannerConflicts:string,starred:string,needsMetadata:string,coverReview:string,noCreator:string,noPublication:string,weakMetadata:string,unreviewedImports:string,sort:string} $activeFilters
     * @param array{limit:int} $pagination
     */
    private function paginationUrl(array $activeFilters, array $pagination, int $page): string {
        $query = [];
        foreach (['q', 'type', 'publication', 'year', 'creator', 'format', 'tag', 'shelf', 'status', 'workflowStatus', 'genre', 'classification', 'scannerConflicts', 'starred', 'needsMetadata', 'coverReview', 'noCreator', 'noPublication', 'noDate', 'titleFromFilename', 'noDescription', 'unsupportedContainer', 'weakMetadata', 'unreviewedImports', 'sort'] as $param) {
            $value = trim((string)($activeFilters[$param] ?? ''));
            if ($value !== '' && !($param === 'sort' && $value === 'title')) {
                $query[$param] = $value;
            }
        }
        $query['limit'] = (string)$pagination['limit'];
        $query['page'] = (string)max(1, $page);
        return '?' . http_build_query($query);
    }

}
