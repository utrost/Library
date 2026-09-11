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
use OCP\AppFramework\Http\Attribute\PublicPage;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IRequest;
use OCP\IL10N;
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
        private ?IL10N $l10n = null,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    #[PublicPage]
    public function sidebar(string $itemId): JSONResponse {
        $canonicalItemId = $this->canonicalSidebarItemId($itemId);
        $user = $this->userSession->getUser();
        if ($user === null || $canonicalItemId === null) {
            return $this->sidebarNotFoundResponse();
        }
        $item = $this->itemService->findItem($user->getUID(), $canonicalItemId);
        if ($item === null) {
            return $this->sidebarNotFoundResponse();
        }
        $id = (string)$item['id'];
        $item['coverUrl'] = $this->urlGenerator->linkToRoute('library.cover.show', ['itemId' => $id]);
        $item['detailsUrl'] = $this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $id]);
        $item['openUrl'] = $this->urlGenerator->linkToRoute('library.item.open', ['itemId' => $id]);
        return new JSONResponse(['item' => array_intersect_key($item, array_flip([
            'id', 'title', 'subtitle', 'creators', 'publicationType', 'publication', 'publicationDate',
            'language', 'publisher', 'description', 'genres', 'classifications', 'personalRating',
            'extension', 'shelf', 'cachedPath', 'scanStatus', 'scanError', 'workflowStatus',
            'metadataSource', 'fieldSources', 'fieldValues', 'userEdited', 'coverUrl', 'detailsUrl', 'openUrl',
        ]))]);
    }

    private function canonicalSidebarItemId(string $itemId): ?int {
        // Keep this boundary portable across supported PHP/database platforms.
        // 2^31-1 also matches the sentinel used to construct the frontend route.
        if (!preg_match('/^[1-9][0-9]*$/D', $itemId)
            || strlen($itemId) > 10
            || (strlen($itemId) === 10 && strcmp($itemId, '2147483647') > 0)) {
            return null;
        }

        // Reject percent-encoded signs/digits instead of accepting a decoded alias.
        $requestUri = $this->request->getRequestUri();
        if (preg_match('~/items/([^/]*)/sidebar(?:[?#]|$)~', $requestUri, $matches)
            && $matches[1] !== $itemId) {
            return null;
        }

        return (int)$itemId;
    }

    private function sidebarNotFoundResponse(): JSONResponse {
        return new JSONResponse(['message' => $this->translate('Publication not found.')], 404);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function show(int $itemId): TemplateResponse {
        $user = $this->userSession->getUser();
        if ($user === null) {
            return $this->notFoundResponse();
        }

        $item = $this->itemService->findItem($user->getUID(), $itemId);
        if ($item === null) {
            return $this->notFoundResponse();
        }

        $fileId = (int)$item['fileId'];
        $tags = $this->fileTagService->tagsForItems([$item]);
        $comments = $this->fileCommentService->commentsForItems([$item]);

        $coverRefreshRequested = (string)$this->request->getParam('coverRefresh', '0') === '1';
        $item['coverUrl'] = $this->urlGenerator->linkToRoute(
            'library.cover.show',
            array_filter([
                'itemId' => (string)$item['id'],
                'refresh' => $coverRefreshRequested ? '1' : null,
            ], static fn ($value) => $value !== null)
        );
        // The compatibility column is intentionally inert and never reaches browser markup.
        unset($item['coverOverrideUrl']);
        $item['coverOverrideActionUrl'] = $this->urlGenerator->linkToRoute('library.cover.override', ['itemId' => (string)$item['id']]);
        $item['coverRevertUrl'] = $this->urlGenerator->linkToRoute('library.cover.revert', ['itemId' => (string)$item['id']]);
        $item['coverRefreshUrl'] = $this->urlGenerator->linkToRoute('library.cover.show', ['itemId' => (string)$item['id'], 'refresh' => '1']);
        $item['coverRefreshPageUrl'] = $this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => (string)$item['id'], 'coverRefresh' => '1']);
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
        $item['metadataSaved'] = (string)$this->request->getParam('metadataSaved', '0') === '1';
        $item['metadataError'] = trim((string)$this->request->getParam('metadataError', ''));
        $item['metadataValidationError'] = $item['metadataError'] !== '' ? $this->translate('Metadata was not saved: %s', [$item['metadataError']]) : '';
        $coverUploadResult = (string)$this->request->getParam('coverUploadError', '');
        $item['coverUploadError'] = match ($coverUploadResult) {
            'invalid' => $this->translate('Cover was not saved. Choose a valid JPEG, PNG, or WebP within the upload limits.'),
            'remote-url-disabled' => $this->translate('Cover was not saved. Upload a JPEG, PNG, or WebP image.'),
            default => '',
        };
        $item['nextcloudComments'] = $comments[$fileId] ?? ['count' => 0, 'recent' => []];

        Util::addStyle(Application::APP_ID, 'style');
        Util::addScript(Application::APP_ID, 'library-detail');
        return new TemplateResponse(Application::APP_ID, 'item-detail', [
            'item' => $item,
            'catalogueUrl' => $this->urlGenerator->linkToRoute('library.page.index'),
        ]);
    }

    private function notFoundResponse(): TemplateResponse {
        return new TemplateResponse('core', '404', [], 'guest', 404);
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
        $safeName = trim($tagName) !== '' ? trim($tagName) : $this->translate('tag');
        return match ($status) {
            'added', 'created' => ['status' => $status, 'message' => $this->translate('Tag added: %s', [$safeName]), 'type' => 'success'],
            'already-assigned' => ['status' => $status, 'message' => $this->translate('Tag already assigned: %s', [$safeName]), 'type' => 'info'],
            'empty' => ['status' => $status, 'message' => $this->translate('Empty tag ignored.'), 'type' => 'info'],
            'not-assignable' => ['status' => $status, 'message' => $this->translate('Tag is not assignable: %s', [$safeName]), 'type' => 'warning'],
            'item-not-found' => ['status' => $status, 'message' => $this->translate('Publication not found for tag update.'), 'type' => 'warning'],
            default => null,
        };
    }

    /**
     * @param array<string, mixed> $item
     */
    private function coverQualityExplanation(array $item): string {
        $extension = strtolower((string)($item['extension'] ?? ''));
        $scanStatus = (string)($item['scanStatus'] ?? '');

        $source = $this->translate('Library first asks the Nextcloud preview system for a cover image.');
        if ($extension === 'epub') {
            $source = $this->translate('Library first asks the Nextcloud preview system, then tries the EPUB package cover from the publication manifest.');
        } elseif ($extension === 'cbz') {
            $source = $this->translate('Library first asks the Nextcloud preview system, then tries the CBZ first image as a cover.');
        }

        $diagnostic = $scanStatus !== '' && $scanStatus !== 'indexed'
            ? ' ' . $this->translate('The file currently has scan status %s, so fixing scan diagnostics may also improve cover results.', [$scanStatus])
            : '';

        return $source . ' ' . $this->translate('If those sources are unavailable, Library shows a stable placeholder so the catalogue remains usable.') . $diagnostic;
    }

    private function translate(string $text, array $parameters = []): string {
        return $this->l10n?->t($text, $parameters) ?? vsprintf($text, $parameters);
    }
}
