<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Reader\DefaultNextcloudFileProvider;
use OCA\Library\Service\RootService;
use OCA\Library\Service\RootShareService;
use OCA\Library\Service\SecurityAuditLogger;
use OCA\Library\Service\UiAssets;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\DataDownloadResponse;
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
            'owned' => $this->sharing->owned($uid),
            'received' => $this->sharing->received($uid),
            'notice' => is_string($notice) ? $notice : '',
        ]);
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
            $grant = $this->sharing->grant($uid, $rootId, $recipient);
            $this->audit->info('library.root_share.grant', $uid, 'grant', 'root_share', 'success', ['target_id' => (int)$grant['id']]);
            return $this->redirect('shared');
        } catch (\InvalidArgumentException $error) {
            $this->audit->warning('library.root_share.grant', $uid, 'grant', 'root_share', 'rejected', ['reason' => $error->getMessage()]);
            return $this->redirect(in_array($error->getMessage(), ['recipient_has_writable_access', 'invalid_root', 'share_limit_reached'], true) ? $error->getMessage() : 'invalid_recipient');
        } catch (\Throwable $error) {
            $this->logger->error('Could not grant Library access', ['exception' => $error]);
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
            $this->logger->error('Library share revocation needs cleanup', ['exception' => $error]);
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
        $cursor = $this->request->getParam('after', '0');
        $cursor = is_string($cursor) && preg_match('/^[0-9]{1,10}$/D', $cursor) ? (int)$cursor : 0;
        $requestedSearch = $this->request->getParam('search', '');
        $search = is_string($requestedSearch) ? trim($requestedSearch) : '';
        $searchError = !is_string($requestedSearch) || mb_strlen($search) > 100 || ($search !== '' && mb_strlen($search) < 3);
        $page = $searchError ? ['items' => [], 'nextCursor' => null] : $this->sharing->books($uid, $grantId, $cursor, $search);
        $books = $page['items'];
        foreach ($books as &$book) {
            $book['coverUrl'] = $this->urls->linkToRoute('library.root_share.cover', ['grantId' => $grantId, 'itemId' => (int)$book['id']]);
        }
        unset($book);
        return $this->page([
            'view' => 'shelf', 'grantId' => $grantId,
            'search' => $searchError ? '' : $search,
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
        $book = $this->sharing->book($uid, $grantId, $itemId);
        $file = $this->sharing->bookFile($uid, $grantId, $itemId);
        if ($book === null || $file === null) {
            return $this->notFound();
        }
        return $this->page([
            'view' => 'book', 'grantId' => $grantId, 'book' => $book,
            'coverUrl' => $this->urls->linkToRoute('library.root_share.cover', ['grantId' => $grantId, 'itemId' => $itemId]),
            'openUrl' => $this->files->getOpenUrl((int)$file->getId()),
        ]);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function cover(int $grantId, int $itemId): DataDownloadResponse {
        $uid = $this->session->getUser()?->getUID() ?? '';
        $file = $this->sharing->bookFile($uid, $grantId, $itemId);
        if ($file === null) {
            return new DataDownloadResponse('', 'unavailable', 'application/octet-stream', 404, ['Cache-Control' => 'private, no-store']);
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
}
