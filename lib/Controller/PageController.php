<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\AppInfo\Application;
use OCA\Library\Reader\DefaultNextcloudFileProvider;
use OCA\Library\Service\FileCommentService;
use OCA\Library\Service\FileIndexService;
use OCA\Library\Service\FileTagService;
use OCA\Library\Service\ItemService;
use OCA\Library\Service\RootService;
use OCA\Library\Service\ScanJobService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Services\IInitialState;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;
use OCP\Util;

class PageController extends Controller {
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
        Util::addStyle(Application::APP_ID, 'library-vue');
        Util::addScript(Application::APP_ID, 'library-shell');
        Util::addScript(Application::APP_ID, 'library-main');

        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';

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
            'sort' => trim((string)$this->request->getParam('sort', 'title')),
        ];
        if ($activeFilters['tag'] !== '') {
            $activeFilters['taggedFileIds'] = $this->fileTagService->fileIdsForExactVisibleTag($activeFilters['tag']);
        }
        $pagination = $this->buildPagination(
            (int)$this->request->getParam('page', 1),
            (int)$this->request->getParam('limit', 100),
        );
        $catalogue = $userId !== '' ? $this->itemService->queryCatalogue($userId, $activeFilters, $pagination) : [
            'items' => [],
            'total' => 0,
            'facets' => ['shelves' => [], 'formats' => [], 'scanStatuses' => ['indexed', 'metadata_error', 'missing'], 'publications' => [], 'publicationSummaries' => [], 'publicationYears' => [], 'creators' => []],
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
        $items = $this->enrichItemsForVue($userId, $items, $fileTagsByFileId, $fileCommentsByFileId);

        $this->initialState->provideInitialState('catalogue', [
            'items' => $items,
            'shelves' => $catalogue['facets']['shelves'],
            'formats' => $catalogue['facets']['formats'],
            'publications' => $catalogue['facets']['publications'],
            'publicationSummaries' => $catalogue['facets']['publicationSummaries'],
            'publicationYears' => $catalogue['facets']['publicationYears'],
            'creators' => $catalogue['facets']['creators'],
            'scanStatuses' => $catalogue['facets']['scanStatuses'],
            'cataloguePagination' => $pagination,
            'activeFilters' => $activeFilters,
            'settingsUrl' => $this->urlGenerator->getAbsoluteURL('/settings/user/library'),
            'metadataExportUrl' => $this->urlGenerator->linkToRoute('library.export.metadata'),
        ]);

        return new TemplateResponse(Application::APP_ID, 'main');
    }

    /**
     * @param array<int, array<string, mixed>> $items
     * @param array<int, array<int, array{id:int,name:string}>> $fileTagsByFileId
     * @param array<int, array{count:int,recent:array<int, array<string, string>>}> $fileCommentsByFileId
     * @return array<int, array<string, mixed>>
     */
    private function enrichItemsForVue(string $userId, array $items, array $fileTagsByFileId, array $fileCommentsByFileId): array {
        return array_map(function (array $item) use ($fileTagsByFileId, $fileCommentsByFileId, $userId): array {
            $itemId = (string)$item['id'];
            $fileId = (int)$item['fileId'];
            $item['updateUrl'] = $this->urlGenerator->linkToRoute('library.item.update', ['itemId' => $itemId]);
            $item['coverUrl'] = $this->urlGenerator->linkToRoute('library.cover.show', ['itemId' => $itemId]);
            $item['tagUrl'] = $this->urlGenerator->linkToRoute('library.tag.assign', ['itemId' => $itemId]);
            $item['tagRemoveBaseUrl'] = $this->urlGenerator->linkToRoute('library.tag.remove', ['itemId' => $itemId, 'tagId' => '__TAG_ID__']);
            $item['commentUrl'] = $this->urlGenerator->linkToRoute('library.comment.add', ['itemId' => $itemId]);
            $item['detailsUrl'] = $this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]);
            $item['openUrl'] = $this->urlGenerator->getAbsoluteURL('/f/' . $fileId);
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
     * @param array{q:string,type:string,publication:string,year:string,creator:string,tag:string,shelf:string,format:string,status:string,sort:string} $activeFilters
     * @param array{limit:int} $pagination
     */
    private function paginationUrl(array $activeFilters, array $pagination, int $page): string {
        $query = [];
        foreach (['q', 'type', 'publication', 'year', 'creator', 'format', 'tag', 'shelf', 'status', 'sort'] as $param) {
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
