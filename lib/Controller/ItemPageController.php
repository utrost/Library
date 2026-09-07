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
        $item['coverRefreshUrl'] = $this->urlGenerator->linkToRoute('library.cover.show', ['itemId' => (string)$item['id'], 'refresh' => '1']);
        $item['coverQualityExplanation'] = $this->coverQualityExplanation($item);
        $item['updateUrl'] = $this->urlGenerator->linkToRoute('library.item.update', ['itemId' => (string)$item['id']]);
        $item['starUrl'] = $this->urlGenerator->linkToRoute('library.item.star', ['itemId' => (string)$item['id']]);
        $item['workflowStatusUrl'] = $this->urlGenerator->linkToRoute('library.item.workflowStatus', ['itemId' => (string)$item['id']]);
        $item['resetFieldUrl'] = $this->urlGenerator->linkToRoute('library.item.resetfield', ['itemId' => (string)$item['id']]);
        $item['resetFieldsUrl'] = $this->urlGenerator->linkToRoute('library.item.resetfields', ['itemId' => (string)$item['id']]);
        $item['forgetMissingUrl'] = $this->urlGenerator->linkToRoute('library.item.forgetMissing', ['itemId' => (string)$item['id']]);
        $item['tagUrl'] = $this->urlGenerator->linkToRoute('library.tag.assign', ['itemId' => (string)$item['id']]);
        $item['commentUrl'] = $this->urlGenerator->linkToRoute('library.comment.add', ['itemId' => (string)$item['id']]);
        $item['openUrl'] = $this->urlGenerator->linkToRoute('library.item.open', ['itemId' => (string)$item['id']]);
        $item['filesUrl'] = $this->readerProvider->getShowInFilesUrl($fileId, (string)($item['cachedPath'] ?? ''));
        $item['downloadUrl'] = $this->readerProvider->getDownloadUrl($user->getUID(), (string)($item['cachedPath'] ?? ''));
        $item['nextcloudTags'] = array_map(function (array $tag) use ($item): array {
            $tag['removeUrl'] = $this->urlGenerator->linkToRoute('library.tag.remove', [
                'itemId' => (string)$item['id'],
                'tagId' => (string)$tag['id'],
            ]);
            return $tag;
        }, $tags[$fileId] ?? []);
        $item['tagSuggestions'] = $this->unassignedTagSuggestions($this->fileTagService->visibleAssignableTagNames(), $item['nextcloudTags']);
        $item['tagFeedback'] = $this->tagFeedback(
            (string)$this->request->getParam('tagResult', ''),
            (string)$this->request->getParam('tagName', '')
        );
        $item['nextcloudComments'] = $comments[$fileId] ?? ['count' => 0, 'recent' => []];

        Util::addStyle(Application::APP_ID, 'style');
        return new TemplateResponse(Application::APP_ID, 'item-detail', [
            'item' => $item,
            'catalogueUrl' => $this->urlGenerator->linkToRoute('library.page.index'),
        ]);
    }

    /**
     * @param array<int, string> $suggestions
     * @param array<int, array<string, mixed>> $currentTags
     * @return array<int, string>
     */
    private function unassignedTagSuggestions(array $suggestions, array $currentTags): array {
        $assignedNames = array_map('strval', array_column($currentTags, 'name'));
        $unassigned = array_diff($suggestions, $assignedNames);
        return array_values($unassigned);
    }

    /**
     * @return array{status:string,message:string,type:string}|null
     */
    private function tagFeedback(string $status, string $tagName): ?array {
        $safeName = trim($tagName) !== '' ? trim($tagName) : 'tag';
        return match ($status) {
            'added', 'created' => ['status' => $status, 'message' => 'Tag added: ' . $safeName, 'type' => 'success'],
            'already-assigned' => ['status' => $status, 'message' => 'Tag already assigned: ' . $safeName, 'type' => 'info'],
            'empty' => ['status' => $status, 'message' => 'Empty tag ignored.', 'type' => 'info'],
            'not-assignable' => ['status' => $status, 'message' => 'Tag is not assignable: ' . $safeName, 'type' => 'warning'],
            'item-not-found' => ['status' => $status, 'message' => 'Publication not found for tag update.', 'type' => 'warning'],
            default => null,
        };
    }

    /**
     * @param array<string, mixed> $item
     */
    private function coverQualityExplanation(array $item): string {
        $extension = strtolower((string)($item['extension'] ?? ''));
        $scanStatus = (string)($item['scanStatus'] ?? '');

        $source = 'Library first asks the Nextcloud preview system for a cover image.';
        if ($extension === 'epub') {
            $source = 'Library first asks the Nextcloud preview system, then tries the EPUB package cover from the publication manifest.';
        } elseif ($extension === 'cbz') {
            $source = 'Library first asks the Nextcloud preview system, then tries the CBZ first image as a cover.';
        }

        $diagnostic = $scanStatus !== '' && $scanStatus !== 'indexed'
            ? ' The file currently has scan status ' . $scanStatus . ', so fixing scan diagnostics may also improve cover results.'
            : '';

        return $source . ' If those sources are unavailable, Library shows a stable placeholder so the catalogue remains usable.' . $diagnostic;
    }
}
