<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\AppInfo\Application;
use OCA\Library\Reader\DefaultNextcloudFileProvider;
use OCA\Library\Service\FileCommentService;
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
use OCP\IURLGenerator;
use OCP\IUserSession;
use OCP\Util;

class PageController extends Controller {
    private const VUE_SCRIPT_ASSET = 'library-main-0-1-0-alpha-147';
    private const VUE_STYLE_ASSET = 'library-vue-0-1-0-alpha-147';

    private const READER_FIXTURE_FILE_ID = 82;

    public function __construct(
        string $appName,
        IRequest $request,
        private DefaultNextcloudFileProvider $readerProvider,
        private RootService $rootService,
        private FileIndexService $fileIndexService,
        private FileTagService $fileTagService,
        private FileCommentService $fileCommentService,
        private ItemService $itemService,
        private SavedCollectionService $savedCollectionService,
        private LibraryHealthService $libraryHealthService,
        private ScanJobService $scanJobService,
        private IInitialState $initialState,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
    ) {
        parent::__construct($appName, $request);
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
        $this->initialState->provideInitialState('catalogue', $this->buildCatalogueState($userId));

        return new TemplateResponse(Application::APP_ID, 'main');
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
        ]));

        return new TemplateResponse(Application::APP_ID, 'main');
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
        ]));

        return new TemplateResponse(Application::APP_ID, 'main');
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
        ]));

        return new TemplateResponse(Application::APP_ID, 'main');
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function catalogue(): JSONResponse {
        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';
        return new JSONResponse($this->buildCatalogueState($userId));
    }

    private function buildCatalogueState(string $userId, array $filterOverrides = [], array $pageContext = []): array {
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
            'status' => trim((string)$this->request->getParam('status', '')),
            'workflowStatus' => trim((string)$this->request->getParam('workflowStatus', '')),
            'genre' => trim((string)$this->request->getParam('genre', '')),
            'classification' => trim((string)$this->request->getParam('classification', '')),
            'scannerConflicts' => trim((string)$this->request->getParam('scannerConflicts', '')),
            'starred' => trim((string)$this->request->getParam('starred', '')),
            'needsMetadata' => trim((string)$this->request->getParam('needsMetadata', '')),
            'coverReview' => trim((string)$this->request->getParam('coverReview', '')),
            'noCreator' => trim((string)$this->request->getParam('noCreator', '')),
            'noPublication' => trim((string)$this->request->getParam('noPublication', '')),
            'noDate' => trim((string)$this->request->getParam('noDate', '')),
            'titleFromFilename' => trim((string)$this->request->getParam('titleFromFilename', '')),
            'noDescription' => trim((string)$this->request->getParam('noDescription', '')),
            'unsupportedContainer' => trim((string)$this->request->getParam('unsupportedContainer', '')),
            'weakMetadata' => trim((string)$this->request->getParam('weakMetadata', '')),
            'unreviewedImports' => trim((string)$this->request->getParam('unreviewedImports', '')),
            'sort' => trim((string)$this->request->getParam('sort', 'title')),
        ];
        foreach ($filterOverrides as $key => $value) {
            $activeFilters[$key] = trim((string)$value);
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
        $roots = $this->rootService->listRoots($userId);
        $catalogue = $userId !== '' ? $this->itemService->queryCatalogue($userId, $activeFilters, $pagination) : [
            'items' => [],
            'total' => 0,
            'facets' => ['shelves' => [], 'formats' => [], 'scanStatuses' => ['indexed', 'metadata_error', 'missing'], 'workflowStatuses' => [], 'genres' => [], 'classifications' => [], 'publications' => [], 'publicationSummaries' => [], 'publicationYears' => [], 'creators' => []],
        ];
        $items = $catalogue['items'];
        $pagination['total'] = (int)$catalogue['total'];
        $pagination['visible'] = count($items);
        $pagination['from'] = $pagination['total'] === 0 ? 0 : (($pagination['page'] - 1) * $pagination['limit']) + 1;
        $pagination['to'] = $pagination['from'] === 0 ? 0 : $pagination['from'] + $pagination['visible'] - 1;
        $pagination['previousUrl'] = $pagination['page'] > 1 ? $this->paginationUrl($activeFilters, $pagination, $pagination['page'] - 1) : '';
        $pagination['nextUrl'] = $pagination['to'] < $pagination['total'] ? $this->paginationUrl($activeFilters, $pagination, $pagination['page'] + 1) : '';

        $fileTagsByFileId = $this->fileTagService->tagsForItems($items);
        $fileCommentsByFileId = $this->fileCommentService->commentsForItems($items);
        $items = $this->enrichItemsForVue($userId, $items, $fileTagsByFileId, $fileCommentsByFileId, $batchCoverRefreshRequested);

        return [
            'publicationIssueContext' => null,
            ...$pageContext,
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
            'settingsUrl' => $this->urlGenerator->getAbsoluteURL('/settings/user/library'),
            'metadataExportUrl' => $this->urlGenerator->linkToRoute('library.export.metadata'),
            'metadataSidecarManifestUrl' => $this->urlGenerator->linkToRoute('library.export.sidecarManifest'),
            'metadataSidecarBundleUrl' => $this->urlGenerator->linkToRoute('library.export.sidecarBundle'),
            'catalogueEndpointUrl' => $this->urlGenerator->linkToRoute('library.page.catalogue'),
            'batchTagUrl' => $this->urlGenerator->linkToRoute('library.tag.batchassign'),
            'batchTagRemoveUrl' => $this->urlGenerator->linkToRoute('library.tag.batchremove'),
            'batchMetadataResetUrl' => $this->urlGenerator->linkToRoute('library.item.batchresetfilteredfields'),
            'batchMetadataEditPreviewUrl' => $this->urlGenerator->linkToRoute('library.item.batchpreviewmetadataedit'),
            'batchCoverRefreshUrl' => $this->urlGenerator->linkToRoute('library.cover.batchrefresh'),
            'batchCoverRefreshRequested' => $batchCoverRefreshRequested,
            'scannerConflictReviewUrl' => '?scannerConflicts=1',
            'metadataErrorsUrl' => $this->urlGenerator->linkToRoute('library.health.metadataErrors'),
            'metadataErrorsTsvUrl' => $this->urlGenerator->linkToRoute('library.health.metadataErrorsTsv'),
            'coverProbeUrl' => $this->urlGenerator->linkToRoute('library.health.coverProbe'),
            'importHealthSummaryUrl' => $this->urlGenerator->linkToRoute('library.health.importSummary'),
            'smartViewCounts' => $userId !== '' ? $this->itemService->smartViewCounts($userId) : [],
            'savedCollections' => $userId !== '' ? $this->savedCollectionsWithCounts($userId) : [],
            'savedCollectionSaveUrl' => $this->urlGenerator->linkToRoute('library.saved_collection.save'),
            'savedCollectionDeleteBaseUrl' => $this->urlGenerator->linkToRoute('library.saved_collection.delete', ['collectionId' => '__COLLECTION_ID__']),
            'importHealthSummary' => [],
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private function savedCollectionsWithCounts(string $userId): array {
        return array_map(function (array $collection) use ($userId): array {
            $collection['count'] = (int)$this->itemService->queryCatalogue($userId, (array)($collection['filters'] ?? []), ['page' => 1, 'limit' => 1])['total'];
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
     * @param array<int, array{count:int,recent:array<int, array<string, string>>}> $fileCommentsByFileId
     * @return array<int, array<string, mixed>>
     */
    private function enrichItemsForVue(string $userId, array $items, array $fileTagsByFileId, array $fileCommentsByFileId, bool $batchCoverRefreshRequested = false): array {
        return array_map(function (array $item) use ($fileTagsByFileId, $fileCommentsByFileId, $userId, $batchCoverRefreshRequested): array {
            $itemId = (string)$item['id'];
            $fileId = (int)$item['fileId'];
            $item['updateUrl'] = $this->urlGenerator->linkToRoute('library.item.update', ['itemId' => $itemId]);
            $item['starUrl'] = $this->urlGenerator->linkToRoute('library.item.star', ['itemId' => $itemId]);
            $item['workflowStatusUrl'] = $this->urlGenerator->linkToRoute('library.item.workflowStatus', ['itemId' => $itemId]);
            $item['coverUrl'] = $this->urlGenerator->linkToRoute('library.cover.show', [
                'itemId' => $itemId,
                'refresh' => $batchCoverRefreshRequested ? '1' : null,
            ]);
            $item['tagUrl'] = $this->urlGenerator->linkToRoute('library.tag.assign', ['itemId' => $itemId]);
            $item['tagRemoveBaseUrl'] = $this->urlGenerator->linkToRoute('library.tag.remove', ['itemId' => $itemId, 'tagId' => '__TAG_ID__']);
            $item['commentUrl'] = $this->urlGenerator->linkToRoute('library.comment.add', ['itemId' => $itemId]);
            $item['detailsUrl'] = $this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]);
            $item['openUrl'] = $this->urlGenerator->linkToRoute('library.item.open', ['itemId' => $itemId]);
            $item['resetFieldUrl'] = $this->urlGenerator->linkToRoute('library.item.resetfield', ['itemId' => $itemId]);
            $item['filesUrl'] = $this->readerProvider->getShowInFilesUrl($fileId, (string)($item['cachedPath'] ?? ''));
            $item['downloadUrl'] = $this->readerProvider->getDownloadUrl($userId, (string)($item['cachedPath'] ?? ''));
            $item['nextcloudTags'] = $fileTagsByFileId[$fileId] ?? [];
            $item['nextcloudComments'] = $fileCommentsByFileId[$fileId] ?? ['count' => 0, 'recent' => []];
            return $item;
        }, $items);
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
