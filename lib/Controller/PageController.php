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
            'tag' => trim((string)$this->request->getParam('tag', '')),
            'shelf' => trim((string)$this->request->getParam('shelf', '')),
        ];
        $shelves = $this->buildShelves($items);
        $items = $this->filterItemsForPresentation($items, $fileTagsByFileId, $activeFilters);

        return new TemplateResponse(Application::APP_ID, 'main', [
            'fixtureOpenUrl' => $this->readerProvider->getOpenUrl(self::READER_FIXTURE_FILE_ID),
            'roots' => $userId !== '' ? $this->rootService->listRoots($userId) : [],
            'files' => $userId !== '' ? $this->fileIndexService->listFiles($userId) : [],
            'items' => $items,
            'fileTagsByFileId' => $fileTagsByFileId,
            'fileCommentsByFileId' => $this->fileCommentService->commentsForItems($items),
            'shelves' => $shelves,
            'activeFilters' => $activeFilters,
            'rootSaveUrl' => $this->urlGenerator->linkToRoute('library.root.save'),
            'scanRunUrl' => $this->urlGenerator->linkToRoute('library.scan.run'),
            'itemUpdateBaseUrl' => $this->urlGenerator->linkToRoute('library.item.update', ['itemId' => '__ITEM_ID__']),
            'itemCoverBaseUrl' => $this->urlGenerator->linkToRoute('library.cover.show', ['itemId' => '__ITEM_ID__']),
            'itemTagBaseUrl' => $this->urlGenerator->linkToRoute('library.tag.assign', ['itemId' => '__ITEM_ID__']),
            'itemCommentBaseUrl' => $this->urlGenerator->linkToRoute('library.comment.add', ['itemId' => '__ITEM_ID__']),
            'itemOpenBaseUrl' => $this->urlGenerator->linkTo('', '/f/__FILE_ID__'),
        ]);
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
     * @param array<int, array<int, array{name:string}>> $fileTagsByFileId
     * @param array{q:string,type:string,tag:string,shelf:string} $activeFilters
     * @return array<int, array<string, mixed>>
     */
    private function filterItemsForPresentation(array $items, array $fileTagsByFileId, array $activeFilters): array {
        return array_values(array_filter($items, function (array $item) use ($fileTagsByFileId, $activeFilters): bool {
            if ($activeFilters['type'] !== '' && $item['publicationType'] !== $activeFilters['type']) {
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
