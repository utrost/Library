<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Http\SharedBookDownloadResponse;
use OCA\Library\Reader\DefaultNextcloudFileProvider;
use OCA\Library\Service\CoverThumbnailService;
use OCA\Library\Service\RootService;
use OCA\Library\Service\RootShareService;
use OCA\Library\Service\SecurityAuditLogger;
use OCA\Library\Service\UiAssets;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\DataDownloadResponse;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IRequest;
use OCP\IPreview;
use OCP\IURLGenerator;
use OCP\IUserSession;
use OCP\Util;
use Psr\Log\LoggerInterface;

/** A deliberately separate read-only surface: owner catalogue endpoints stay owner-scoped. */
final class RootShareController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private IUserSession $session,
        private IURLGenerator $urls,
        private RootService $roots,
        private RootShareService $sharing,
        private DefaultNextcloudFileProvider $files,
        private LoggerInterface $logger,
        private SecurityAuditLogger $audit,
        private IPreview $preview,
        private CoverThumbnailService $thumbnails,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): TemplateResponse {
        $uid = $this->session->getUser()?->getUID() ?? '';
        $roots = array_values(array_filter($this->roots->listRoots($uid), static fn (array $root): bool => $root['enabled'] && $root['path'] !== '/'));
        $notice = $this->request->getParam('result', '');
        return $this->page([
            'view' => 'index',
            'roots' => $roots,
            'shareableLists' => $this->sharing->shareableLists($uid),
            'owned' => $this->sharing->owned($uid),
            'received' => $this->sharing->received($uid),
            'notice' => is_string($notice) ? $notice : '',
        ]);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function recipients(): JSONResponse {
        $uid = $this->session->getUser()?->getUID() ?? '';
        try {
            $rootId = $this->positiveId($this->request->getParam('rootId', ''));
            $search = $this->request->getParam('search', '');
            if (!is_string($search)) {
                throw new \InvalidArgumentException('invalid_query');
            }
            return new JSONResponse(['users' => $this->sharing->recipientSuggestions($uid, $rootId, $search)], 200,
                ['Cache-Control' => 'private, no-store']);
        } catch (\InvalidArgumentException $error) {
            $status = $error->getMessage() === 'invalid_root' ? 404 : 400;
            return new JSONResponse(['error' => $status === 404 ? 'not_found' : 'invalid_query'], $status,
                ['Cache-Control' => 'private, no-store']);
        } catch (\Throwable $error) {
            $this->logger->error('Could not find Library share recipients', ['exception_class' => get_class($error)]);
            return new JSONResponse(['error' => 'lookup_unavailable'], 503, ['Cache-Control' => 'private, no-store']);
        }
    }

    #[NoAdminRequired]
    public function preview(): TemplateResponse|RedirectResponse {
        $uid = $this->session->getUser()?->getUID() ?? '';
        try {
            $rootId = $this->positiveId($this->request->getParam('rootId', ''));
            $recipient = $this->request->getParam('recipient', '');
            if (!is_string($recipient) || mb_strlen($recipient) > 64) {
                throw new \InvalidArgumentException('invalid_recipient');
            }
            $mode = $this->request->getParam('filesMode', 'reuse');
            $listId = $mode === 'library_only' ? $this->selectionId() : 0;
            return $this->page(['view' => 'confirm', 'grantPreview' => $this->sharing->previewGrant($uid, $rootId, $recipient,
                is_string($mode) ? $mode : '', $listId)]);
        } catch (\InvalidArgumentException $error) {
            return $this->redirect($this->grantErrorCode($error->getMessage()));
        } catch (\Throwable $error) {
            $this->logger->error('Could not review Library access', ['exception_class' => get_class($error)]);
            return $this->redirect('share_failed');
        }
    }

    #[NoAdminRequired]
    public function grant(): RedirectResponse {
        $uid = $this->session->getUser()?->getUID() ?? '';
        try {
            $rootId = $this->positiveId($this->request->getParam('rootId', ''));
            $recipient = $this->request->getParam('recipient', '');
            if (!is_string($recipient) || mb_strlen($recipient) > 64) {
                throw new \InvalidArgumentException('invalid_recipient');
            }
            $mode = $this->request->getParam('filesMode', '');
            $listId = $mode === 'library_only' ? $this->selectionId() : 0;
            $selectionHash = $this->request->getParam('selectionHash', '');
            try {
                $fileId = $this->positiveId($this->request->getParam('rootFileId', ''));
            } catch (\InvalidArgumentException) {
                throw new \InvalidArgumentException('share_changed');
            }
            if ($this->request->getParam('confirmed', '') !== '1'
                || !in_array($mode, ['reuse', 'library_only'], true)
                || !is_string($selectionHash)
                || ($mode === 'library_only' && preg_match('/^[a-f0-9]{64}$/D', $selectionHash) !== 1)) {
                throw new \InvalidArgumentException('share_changed');
            }
            $grant = $this->sharing->grant($uid, $rootId, $recipient, $fileId, $mode, $listId, $selectionHash);
            $this->audit->info('library.root_share.grant', $uid, 'grant', 'root_share', 'success', ['target_id' => (int)$grant['id']]);
            return $this->redirect('shared');
        } catch (\InvalidArgumentException $error) {
            $this->audit->warning('library.root_share.grant', $uid, 'grant', 'root_share', 'rejected', ['reason' => $error->getMessage()]);
            return $this->redirect($this->grantErrorCode($error->getMessage()));
        } catch (\Throwable $error) {
            $this->logger->error('Could not grant Library access', ['exception_class' => get_class($error)]);
            if ($error instanceof \RuntimeException && $error->getMessage() === 'file_share_cleanup_pending') {
                $this->audit->warning('library.root_share.grant', $uid, 'grant', 'root_share', 'partial', ['reason' => 'file_share_cleanup_pending']);
                return $this->redirect('files_share_cleanup_pending');
            }
            $this->audit->warning('library.root_share.grant', $uid, 'grant', 'root_share', 'failure', ['reason' => 'operation_failed']);
            return $this->redirect('share_failed');
        }
    }

    #[NoAdminRequired]
    public function revoke(int $grantId): RedirectResponse {
        $uid = $this->session->getUser()?->getUID() ?? '';
        try {
            $revoked = $this->sharing->revoke($uid, $grantId);
            $this->audit->info('library.root_share.revoke', $uid, 'revoke', 'root_share', $revoked ? 'success' : 'not_authorized', ['target_id' => $grantId]);
            return $this->redirect($revoked ? 'revoked' : 'share_not_found');
        } catch (\Throwable $error) {
            $this->logger->error('Library share revocation needs cleanup', ['exception_class' => get_class($error)]);
            $this->audit->warning('library.root_share.revoke', $uid, 'revoke', 'root_share', 'partial', ['target_id' => $grantId, 'reason' => 'file_share_cleanup_pending']);
            return $this->redirect('cleanup_pending');
        }
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function show(int $grantId): TemplateResponse {
        $uid = $this->session->getUser()?->getUID() ?? '';
        $grant = $this->sharing->visibleGrant($uid, $grantId);
        if ($grant === null) {
            return $this->notFound();
        }
        $cursor = $this->cursor();
        $requestedSearch = $this->request->getParam('search', '');
        $search = is_string($requestedSearch) ? trim($requestedSearch) : '';
        $searchError = !is_string($requestedSearch) || !mb_check_encoding($search, 'UTF-8')
            || preg_match('/[\p{Cc}]/u', $search) === 1
            || mb_strlen($search) > 100 || ($search !== '' && mb_strlen($search) < 3);
        if ($searchError) {
            $search = '';
        }
        $page = $searchError ? ['items' => [], 'nextCursor' => null] : $this->sharing->books($uid, $grantId, $cursor, $search);
        $books = $page['items'];
        foreach ($books as &$book) {
            $book['coverUrl'] = $this->urls->linkToRoute('library.root_share.cover', ['grantId' => $grantId, 'itemId' => (int)$book['id']]);
        }
        unset($book);
        return $this->page([
            'view' => 'shelf', 'grantId' => $grantId,
            'search' => mb_substr($search, 0, 100),
            'after' => $cursor,
            'searchError' => $searchError,
            'ownerName' => (string)$grant['owner_user_id'],
            'rootLabel' => trim((string)($grant['label'] ?? '')) ?: 'Shared shelf',
            'books' => $books, 'nextCursor' => $page['nextCursor'],
        ]);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function book(int $grantId, int $itemId): TemplateResponse {
        $uid = $this->session->getUser()?->getUID() ?? '';
        $grant = $this->sharing->visibleGrant($uid, $grantId);
        if ($grant === null) {
            return $this->notFound();
        }
        $book = $this->sharing->book($uid, $grantId, $itemId);
        $file = $this->sharing->bookFile($uid, $grantId, $itemId);
        if ($book === null || $file === null) {
            return $this->notFound();
        }
        $search = $this->request->getParam('search', '');
        $search = is_string($search) && mb_check_encoding($search, 'UTF-8')
            && preg_match('/[\p{Cc}]/u', $search) !== 1
            && mb_strlen($search) <= 100 && ($search === '' || mb_strlen($search) >= 3) ? $search : '';
        $libraryOnly = ($grant['access_mode'] ?? 'files') === 'library_only';
        return $this->page([
            'view' => 'book', 'grantId' => $grantId, 'book' => $book,
            'backUrl' => $this->shelfUrl($grantId, $this->cursor(), $search),
            'coverUrl' => $this->urls->linkToRoute('library.root_share.cover', ['grantId' => $grantId, 'itemId' => $itemId]),
            'openUrl' => $libraryOnly
                ? $this->urls->linkToRoute('library.root_share.content', ['grantId' => $grantId, 'itemId' => $itemId])
                : $this->files->getOpenUrl((int)$file->getId()),
            'libraryOnly' => $libraryOnly,
        ]);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function content(int $grantId, int $itemId): SharedBookDownloadResponse|DataDownloadResponse {
        $uid = $this->session->getUser()?->getUID() ?? '';
        $grant = $this->sharing->visibleGrant($uid, $grantId);
        if ($grant === null || ($grant['access_mode'] ?? 'files') !== 'library_only') {
            return new DataDownloadResponse('', 'unavailable', 'application/octet-stream', 404,
                ['Cache-Control' => 'private, no-store']);
        }
        $lease = $this->sharing->leaseBookFile($uid, $grantId, $itemId);
        if ($lease === null) {
            return new DataDownloadResponse('', 'unavailable', 'application/octet-stream', 404,
                ['Cache-Control' => 'private, no-store']);
        }
        // Download rather than hand off to Files: the recipient has no Files mount in Library-only mode.
        return new SharedBookDownloadResponse($lease);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function cover(int $grantId, int $itemId): DataDownloadResponse {
        $uid = $this->session->getUser()?->getUID() ?? '';
        $lease = $this->sharing->leaseBookFile($uid, $grantId, $itemId);
        if ($lease === null) {
            return new DataDownloadResponse('', 'unavailable', 'application/octet-stream', 404, ['Cache-Control' => 'private, no-store']);
        }
        try {
            return $this->renderCover($uid, $grantId, $itemId);
        } finally {
            $lease->close();
        }
    }

    private function renderCover(string $uid, int $grantId, int $itemId): DataDownloadResponse {
        $cover = $this->sharing->bookCover($uid, $grantId, $itemId);
        if ($cover === null) {
            return new DataDownloadResponse('', 'unavailable', 'application/octet-stream', 404, ['Cache-Control' => 'private, no-store']);
        }
        $file = $cover['file'];
        $mime = $cover['overrideMime'];
        $encoded = $cover['overrideData'];
        if (in_array($mime, ['image/jpeg', 'image/png', 'image/webp'], true) && $encoded !== '' && strlen($encoded) <= 8 * 1024 * 1024) {
            $bytes = base64_decode($encoded, true);
            if (is_string($bytes)) {
                try {
                    $rendered = $this->thumbnails->render($bytes, $mime);
                } catch (\Throwable) {
                    $rendered = null;
                }
                if ($rendered !== null && in_array($rendered[1], ['image/jpeg', 'image/png', 'image/webp'], true)) {
                    return new DataDownloadResponse($rendered[0], 'shared-book-cover', $rendered[1], 200,
                        ['Cache-Control' => 'private, no-store', 'X-Content-Type-Options' => 'nosniff']);
                }
            }
        }
        try {
            if ($this->preview->isAvailable($file)) {
                $preview = $this->preview->getPreview($file, 120, 180, true, IPreview::MODE_COVER);
                $mime = $preview->getMimeType();
                $bytes = $preview->getContent();
                if (in_array($mime, ['image/jpeg', 'image/png', 'image/webp'], true) && is_string($bytes) && strlen($bytes) <= 2 * 1024 * 1024) {
                    return new DataDownloadResponse($bytes, 'shared-book-cover', $mime, 200, ['Cache-Control' => 'private, no-store', 'X-Content-Type-Options' => 'nosniff']);
                }
            }
        } catch (\Throwable) {
            // A missing preview does not change file access or the catalogue response.
        }
        $svg = '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="180" viewBox="0 0 120 180"><rect width="120" height="180" rx="8" fill="#dce5ed"/><text x="60" y="98" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#345" font-weight="bold">LIB</text></svg>';
        return new DataDownloadResponse($svg, 'shared-book-placeholder.svg', 'image/svg+xml', 200, ['Cache-Control' => 'private, no-store', 'X-Content-Type-Options' => 'nosniff']);
    }

    private function page(array $data): TemplateResponse {
        Util::addStyle('library', 'style');
        Util::addStyle('library', 'ui-contract');
        UiAssets::maintenance();
        return new TemplateResponse('library', 'root-share', $data + [
            'catalogueUrl' => $this->urls->linkToRoute('library.page.index'),
            'indexUrl' => $this->urls->linkToRoute('library.root_share.index'),
            'grantUrl' => $this->urls->linkToRoute('library.root_share.grant'),
            'previewUrl' => $this->urls->linkToRoute('library.root_share.preview'),
            'recipientSuggestionsUrl' => $this->urls->linkToRoute('library.root_share.recipients'),
            'languageUrl' => $this->urls->linkToRoute('library.language_review.index'),
            'valueMappingsUrl' => $this->urls->linkToRoute('library.value_mapping.index'),
            'settingsUrl' => $this->urls->linkToRoute('settings.PersonalSettings.index', ['section' => 'library']),
            'requesttoken' => Util::callRegister(),
        ]);
    }

    private function notFound(): TemplateResponse {
        return new TemplateResponse('core', '404', [], 'guest', 404);
    }

    private function redirect(string $result): RedirectResponse {
        return new RedirectResponse($this->urls->linkToRoute('library.root_share.index') . '?result=' . rawurlencode($result));
    }

    private function positiveId(mixed $value): int {
        if (!is_scalar($value) || preg_match('/^[1-9][0-9]{0,9}$/D', (string)$value) !== 1) {
            throw new \InvalidArgumentException('invalid_id');
        }
        return (int)$value;
    }

    private function selectionId(): int {
        try {
            return $this->positiveId($this->request->getParam('listId', ''));
        } catch (\InvalidArgumentException) {
            throw new \InvalidArgumentException('invalid_selection');
        }
    }

    private function cursor(): int {
        $value = $this->request->getParam('after', '0');
        return is_string($value) && preg_match('/^[0-9]{1,10}$/D', $value) && (int)$value <= 2147483647 ? (int)$value : 0;
    }

    private function shelfUrl(int $grantId, int $after, string $search): string {
        $url = $this->urls->linkToRoute('library.root_share.show', ['grantId' => $grantId]);
        $query = [];
        if ($after > 0) $query['after'] = $after;
        if ($search !== '') $query['search'] = $search;
        return $query === [] ? $url : $url . '?' . http_build_query($query, '', '&', PHP_QUERY_RFC3986);
    }

    private function grantErrorCode(string $message): string {
        return in_array($message, ['files_access_required', 'recipient_has_writable_access', 'invalid_root', 'share_limit_reached', 'already_shared', 'existing_share_changed', 'revocation_pending', 'share_changed', 'invalid_selection', 'sharing_not_allowed'], true)
            ? $message : 'invalid_recipient';
    }
}
