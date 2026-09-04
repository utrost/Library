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

        return new TemplateResponse(Application::APP_ID, 'main', [
            'fixtureOpenUrl' => $this->readerProvider->getOpenUrl(self::READER_FIXTURE_FILE_ID),
            'roots' => $userId !== '' ? $this->rootService->listRoots($userId) : [],
            'files' => $userId !== '' ? $this->fileIndexService->listFiles($userId) : [],
            'items' => $items,
            'fileTagsByFileId' => $this->fileTagService->tagsForItems($items),
            'fileCommentsByFileId' => $this->fileCommentService->commentsForItems($items),
            'rootSaveUrl' => $this->urlGenerator->linkToRoute('library.root.save'),
            'scanRunUrl' => $this->urlGenerator->linkToRoute('library.scan.run'),
            'itemUpdateBaseUrl' => $this->urlGenerator->linkToRoute('library.item.update', ['itemId' => '__ITEM_ID__']),
            'itemTagBaseUrl' => $this->urlGenerator->linkToRoute('library.tag.assign', ['itemId' => '__ITEM_ID__']),
        ]);
    }
}
