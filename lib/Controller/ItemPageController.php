<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\AppInfo\Application;
use OCA\Library\Reader\DefaultNextcloudFileProvider;
use OCA\Library\Service\FileCommentService;
use OCA\Library\Service\FileTagService;
use OCA\Library\Service\ItemService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\NotFoundException;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;
use OCP\Util;

final class ItemPageController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private ItemService $itemService,
        private FileTagService $fileTagService,
        private FileCommentService $fileCommentService,
        private DefaultNextcloudFileProvider $readerProvider,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function show(int $itemId): TemplateResponse {
        $user = $this->userSession->getUser();
        if ($user === null) {
            throw new NotFoundException('Publication not found');
        }

        $item = $this->itemService->findItem($user->getUID(), $itemId);
        if ($item === null) {
            throw new NotFoundException('Publication not found');
        }

        $fileId = (int)$item['fileId'];
        $tags = $this->fileTagService->tagsForItems([$item]);
        $comments = $this->fileCommentService->commentsForItems([$item]);

        $item['coverUrl'] = $this->urlGenerator->linkToRoute('library.cover.show', ['itemId' => (string)$item['id']]);
        $item['updateUrl'] = $this->urlGenerator->linkToRoute('library.item.update', ['itemId' => (string)$item['id']]);
        $item['tagUrl'] = $this->urlGenerator->linkToRoute('library.tag.assign', ['itemId' => (string)$item['id']]);
        $item['openUrl'] = $this->urlGenerator->getAbsoluteURL('/f/' . $fileId);
        $item['filesUrl'] = $this->readerProvider->getShowInFilesUrl($fileId, (string)($item['cachedPath'] ?? ''));
        $item['nextcloudTags'] = array_map(function (array $tag) use ($item): array {
            $tag['removeUrl'] = $this->urlGenerator->linkToRoute('library.tag.remove', [
                'itemId' => (string)$item['id'],
                'tagId' => (string)$tag['id'],
            ]);
            return $tag;
        }, $tags[$fileId] ?? []);
        $item['nextcloudComments'] = $comments[$fileId] ?? ['count' => 0, 'recent' => []];

        Util::addStyle(Application::APP_ID, 'style');
        return new TemplateResponse(Application::APP_ID, 'item-detail', [
            'item' => $item,
            'catalogueUrl' => $this->urlGenerator->linkToRoute('library.page.index'),
        ]);
    }
}
