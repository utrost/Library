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
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): TemplateResponse {
        Util::addStyle(Application::APP_ID, 'style');

        $user = $this->userSession->getUser();
        $userId = $user !== null ? $user->getUID() : '';

        $items = $userId !== '' ? $this->itemService->listItems($userId) : [];
        $fileTagsByFileId = $this->fileTagService->tagsForItems($items);
        $activeFilters = [
            'q' => trim((string)$this->request->getParam('q', '')),
            'type' => trim((string)$this->request->getParam('type', '')),
            'format' => trim((string)$this->request->getParam('format', '')),
            'tag' => trim((string)$this->request->getParam('tag', '')),
            'shelf' => trim((string)$this->request->getParam('shelf', '')),
            'status' => trim((string)$this->request->getParam('status', '')),
            'sort' => trim((string)$this->request->getParam('sort', 'title')),
        ];
        $shelves = $this->buildShelves($items);
        $formats = $this->buildFormats($items);
        $scanStatuses = $this->buildScanStatuses($items);
        $pagination = $this->buildPagination(
            (int)$this->request->getParam('page', 1),
            (int)$this->request->getParam('limit', 100),
        );
        $items = $this->filterItemsForPresentation($items, $fileTagsByFileId, $activeFilters);
        $items = $this->sortItemsForPresentation($items, $activeFilters['sort']);
        $pagination['total'] = count($items);
        $items = $this->sliceItemsForPresentation($items, $pagination);
        $pagination['visible'] = count($items);
        $pagination['from'] = $pagination['total'] === 0 ? 0 : (($pagination['page'] - 1) * $pagination['limit']) + 1;
        $pagination['to'] = $pagination['from'] === 0 ? 0 : $pagination['from'] + $pagination['visible'] - 1;
        $pagination['previousUrl'] = $pagination['page'] > 1 ? $this->paginationUrl($activeFilters, $pagination, $pagination['page'] - 1) : '';
        $pagination['nextUrl'] = $pagination['to'] < $pagination['total'] ? $this->paginationUrl($activeFilters, $pagination, $pagination['page'] + 1) : '';

        return new TemplateResponse(Application::APP_ID, 'main', [
            'fixtureOpenUrl' => $this->readerProvider->getOpenUrl(self::READER_FIXTURE_FILE_ID),
            'items' => $items,
            'fileTagsByFileId' => $fileTagsByFileId,
            'fileCommentsByFileId' => $this->fileCommentService->commentsForItems($items),
            'shelves' => $shelves,
            'formats' => $formats,
            'scanStatuses' => $scanStatuses,
            'cataloguePagination' => $pagination,
            'activeFilters' => $activeFilters,
            'settingsUrl' => $this->urlGenerator->linkTo('', '/settings/user/library'),
            'itemUpdateBaseUrl' => $this->urlGenerator->linkToRoute('library.item.update', ['itemId' => '__ITEM_ID__']),
            'itemCoverBaseUrl' => $this->urlGenerator->linkToRoute('library.cover.show', ['itemId' => '__ITEM_ID__']),
            'itemTagBaseUrl' => $this->urlGenerator->linkToRoute('library.tag.assign', ['itemId' => '__ITEM_ID__']),
            'itemTagRemoveBaseUrl' => $this->urlGenerator->linkToRoute('library.tag.remove', ['itemId' => '__ITEM_ID__', 'tagId' => '__TAG_ID__']),
            'itemCommentBaseUrl' => $this->urlGenerator->linkToRoute('library.comment.add', ['itemId' => '__ITEM_ID__']),
            'itemOpenBaseUrl' => $this->urlGenerator->linkTo('', '/f/__FILE_ID__'),
            'itemFilesBaseUrl' => $this->readerProvider->getShowInFilesUrl(0),
        ]);
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
     * @param array<int, array<string, mixed>> $items
     * @param array{page:int,limit:int} $pagination
     * @return array<int, array<string, mixed>>
     */
    private function sliceItemsForPresentation(array $items, array $pagination): array {
        $offset = max(0, ((int)$pagination['page'] - 1) * (int)$pagination['limit']);
        return array_slice($items, $offset, (int)$pagination['limit']);
    }

    /**
     * @param array{q:string,type:string,tag:string,shelf:string,format:string,status:string,sort:string} $activeFilters
     * @param array{limit:int} $pagination
     */
    private function paginationUrl(array $activeFilters, array $pagination, int $page): string {
        $query = [];
        foreach (['q', 'type', 'format', 'tag', 'shelf', 'status', 'sort'] as $param) {
            $value = trim((string)($activeFilters[$param] ?? ''));
            if ($value !== '' && !($param === 'sort' && $value === 'title')) {
                $query[$param] = $value;
            }
        }
        $query['limit'] = (string)$pagination['limit'];
        $query['page'] = (string)max(1, $page);
        return '?' . http_build_query($query);
    }

    /**
     * @param array<int, array<string, mixed>> $items
     * @return array<int, string>
     */
    private function buildShelves(array $items): array {
        $shelves = [];
        foreach ($items as $item) {
            $shelf = trim((string)($item['shelf'] ?? ''));
            if ($shelf !== '') {
                $shelves[$shelf] = $shelf;
            }
        }
        ksort($shelves, SORT_NATURAL | SORT_FLAG_CASE);
        return array_values($shelves);
    }

    /**
     * @param array<int, array<string, mixed>> $items
     * @return array<int, string>
     */
    private function buildFormats(array $items): array {
        $formats = [];
        foreach ($items as $item) {
            $format = mb_strtolower(trim((string)($item['extension'] ?? '')));
            if ($format !== '') {
                $formats[$format] = $format;
            }
        }
        ksort($formats, SORT_NATURAL | SORT_FLAG_CASE);
        return array_values($formats);
    }

    /**
     * @param array<int, array<string, mixed>> $items
     * @return array<int, string>
     */
    private function buildScanStatuses(array $items): array {
        $statuses = [
            'indexed' => 'indexed',
            'metadata_error' => 'metadata_error',
            'missing' => 'missing',
        ];
        foreach ($items as $item) {
            $status = trim((string)($item['scanStatus'] ?? ''));
            if ($status !== '') {
                $statuses[$status] = $status;
            }
        }
        ksort($statuses, SORT_NATURAL | SORT_FLAG_CASE);
        return array_values($statuses);
    }

    /**
     * @param array<int, array<string, mixed>> $items
     * @return array<int, array<string, mixed>>
     */
    private function sortItemsForPresentation(array $items, string $sort): array {
        usort($items, function (array $left, array $right) use ($sort): int {
            return match ($sort) {
                'recent' => ((int)($right['libraryFileId'] ?? 0) <=> (int)($left['libraryFileId'] ?? 0)),
                'publicationDate' => strcasecmp((string)($right['publicationDate'] ?? ''), (string)($left['publicationDate'] ?? '')) ?: strcasecmp((string)$left['title'], (string)$right['title']),
                'format' => strcasecmp((string)($left['extension'] ?? ''), (string)($right['extension'] ?? '')) ?: strcasecmp((string)$left['title'], (string)$right['title']),
                default => strcasecmp((string)$left['title'], (string)$right['title']),
            };
        });
        return $items;
    }

    /**
     * @param array<int, array<int, array{name:string}>> $fileTagsByFileId
     * @param array{q:string,type:string,tag:string,shelf:string,format:string,status:string,sort:string} $activeFilters
     * @return array<int, array<string, mixed>>
     */
    private function filterItemsForPresentation(array $items, array $fileTagsByFileId, array $activeFilters): array {
        return array_values(array_filter($items, function (array $item) use ($fileTagsByFileId, $activeFilters): bool {
            if ($activeFilters['type'] !== '' && $item['publicationType'] !== $activeFilters['type']) {
                return false;
            }

            if ($activeFilters['format'] !== '' && mb_strtolower((string)($item['extension'] ?? '')) !== mb_strtolower($activeFilters['format'])) {
                return false;
            }

            if ($activeFilters['status'] !== '' && (string)($item['scanStatus'] ?? '') !== $activeFilters['status']) {
                return false;
            }

            if ($activeFilters['shelf'] !== '' && (string)($item['shelf'] ?? '') !== $activeFilters['shelf']) {
                return false;
            }

            if ($activeFilters['tag'] !== '') {
                $needle = mb_strtolower($activeFilters['tag']);
                $matchesTag = false;
                foreach ($fileTagsByFileId[(int)$item['fileId']] ?? [] as $tag) {
                    if (mb_strtolower((string)$tag['name']) === $needle) {
                        $matchesTag = true;
                        break;
                    }
                }
                if (!$matchesTag) {
                    return false;
                }
            }

            if ($activeFilters['q'] !== '') {
                $haystack = mb_strtolower(implode(' ', [
                    (string)$item['title'],
                    (string)$item['subtitle'],
                    (string)$item['creators'],
                    (string)$item['publication'],
                    (string)$item['cachedPath'],
                ]));
                if (!str_contains($haystack, mb_strtolower($activeFilters['q']))) {
                    return false;
                }
            }

            return true;
        }));
    }
}
