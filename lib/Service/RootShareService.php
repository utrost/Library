<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\Constants;
use OCP\Collaboration\AutoComplete\AutoCompleteFilterEvent;
use OCP\Collaboration\Collaborators\ISearch as ICollaboratorSearch;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;
use OCP\IConfig;
use OCP\IUserManager;
use OCP\Lock\ILockingProvider;
use OCP\Share\IManager as IShareManager;
use OCP\Share\IShare;

/** A Library grant requires an existing read-only Files root; Library never creates one. */
final class RootShareService {
    private const MANAGED_NOTE_PREFIX = 'Library managed share: ';

    public function __construct(
        private IDBConnection $db,
        private RootService $roots,
        private IRootFolder $files,
        private IUserManager $users,
        private IShareManager $shares,
        private ILockingProvider $locks,
        private ICollaboratorSearch $collaborators,
        private IEventDispatcher $events,
        private AuthorDisplayService $authorDisplay,
        private IConfig $config,
    ) {
    }

    /** Inspect the exact folder and Files access before the owner confirms a grant. */
    public function previewGrant(string $owner, int $rootId, string $recipient): array {
        $this->assertSharingAvailable();
        $recipientUser = $this->users->get(trim($recipient));
        if ($recipientUser === null || !$recipientUser->isEnabled() || $recipientUser->getUID() === $owner) {
            throw new \InvalidArgumentException('invalid_recipient');
        }
        $recipient = $recipientUser->getUID();
        $root = $this->roots->findRoot($owner, $rootId);
        if ($root === null || !$root['enabled'] || $root['path'] === '/') {
            throw new \InvalidArgumentException('invalid_root');
        }
        $existing = $this->findOwnedGrant($owner, $rootId, $recipient);
        if ($existing !== null) {
            if ($existing['revoked_at'] !== null) {
                throw new \InvalidArgumentException('revocation_pending');
            }
            $status = $this->presentGrant($existing)['status'];
            throw new \InvalidArgumentException(in_array($status, ['ready', 'awaiting-acceptance'], true)
                ? 'already_shared' : 'existing_share_changed');
        }
        $countResult = $this->db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_root_shares WHERE owner_user_id=?', [$owner]);
        $grantCount = (int)$countResult->fetchOne();
        $countResult->closeCursor();
        if ($grantCount >= 100) {
            throw new \InvalidArgumentException('share_limit_reached');
        }
        try {
            $node = $this->files->getUserFolder($owner)->get(ltrim($root['path'], '/'));
        } catch (\Throwable) {
            throw new \InvalidArgumentException('invalid_root');
        }
        if (!$node instanceof Folder || !$node->isReadable() || $node->getMountPoint()->getMountType() === 'shared' || (int)$node->getId() <= 0) {
            throw new \InvalidArgumentException('invalid_root');
        }
        if (!$this->recipientDiscoverable($recipient, (int)$node->getId())) {
            throw new \InvalidArgumentException('invalid_recipient');
        }
        $recipientRoots = $this->recipientRootNodes($recipient, (int)$node->getId());
        if ($recipientRoots === []) {
            throw new \InvalidArgumentException('files_access_required');
        }
        foreach ($recipientRoots as $visible) {
            if (($visible->getPermissions() & (Constants::PERMISSION_UPDATE | Constants::PERMISSION_CREATE | Constants::PERMISSION_DELETE)) !== 0) {
                throw new \InvalidArgumentException('recipient_has_writable_access');
            }
        }
        return [
            'rootId' => $rootId,
            'rootLabel' => trim((string)$root['label']) ?: $root['path'],
            'rootFileId' => (int)$node->getId(),
            'recipientId' => $recipient,
            'recipientName' => $recipientUser->getDisplayName(),
            'filesMode' => 'reuse',
        ];
    }

    /** @return array<int, array{id: string, label: string}> */
    public function recipientSuggestions(string $owner, int $rootId, string $search): array {
        $search = trim($search);
        if (!mb_check_encoding($search, 'UTF-8') || preg_match('/[\p{Cc}]/u', $search)
            || mb_strlen($search) < 3 || mb_strlen($search) > 160) {
            throw new \InvalidArgumentException('invalid_query');
        }
        $root = $this->roots->findRoot($owner, $rootId);
        if ($root === null || !$root['enabled'] || $root['path'] === '/') {
            throw new \InvalidArgumentException('invalid_root');
        }
        try {
            $node = $this->files->getUserFolder($owner)->get(ltrim($root['path'], '/'));
        } catch (\Throwable) {
            throw new \InvalidArgumentException('invalid_root');
        }
        if (!$node instanceof Folder || !$node->isReadable() || $node->getMountPoint()->getMountType() === 'shared'
            || (int)$node->getId() <= 0) {
            throw new \InvalidArgumentException('invalid_root');
        }
        $found = [];
        foreach ($this->collaboratorMatches($search, (int)$node->getId()) as $result) {
            $id = $result['value']['shareWith'] ?? null;
            if (!is_string($id) || $id === $owner || isset($found[$id]) || $this->users->get($id)?->isEnabled() !== true) {
                continue;
            }
            $label = $result['label'] ?? null;
            $found[$id] = ['id' => $id, 'label' => is_string($label) && $label !== '' ? mb_substr($label, 0, 160) : $id];
            if (count($found) >= 8) {
                break;
            }
        }
        return array_values($found);
    }

    /** @return array<string, mixed> */
    public function grant(string $owner, int $rootId, string $recipient, int $expectedRootFileId, string $expectedFilesMode): array {
        $recipient = trim($recipient);
        $recipientUser = $this->users->get($recipient);
        if ($recipient === '' || $recipientUser === null || !$recipientUser->isEnabled()) {
            throw new \InvalidArgumentException('invalid_recipient');
        }
        $recipient = $recipientUser->getUID();
        if ($recipient === $owner) {
            throw new \InvalidArgumentException('invalid_recipient');
        }
        return $this->withLifecycleLock(function () use ($owner, $rootId, $recipient, $expectedRootFileId, $expectedFilesMode): array {
            $this->assertSharingAvailable();
            return $this->withRootLock($owner, $rootId,
                fn (): array => $this->withGrantLock($owner, $rootId, $recipient,
                    fn (): array => $this->grantLocked($owner, $rootId, $recipient, $expectedRootFileId, $expectedFilesMode)));
        });
    }

    private function grantLocked(string $owner, int $rootId, string $recipient, int $expectedRootFileId, string $expectedFilesMode): array {
        $root = $this->roots->findRoot($owner, $rootId);
        if ($root === null || !$root['enabled'] || $root['path'] === '/') {
            throw new \InvalidArgumentException('invalid_root');
        }
        $existing = $this->findOwnedGrant($owner, $rootId, $recipient);
        if ($existing !== null && $existing['revoked_at'] === null) {
            $current = $this->presentGrant($existing);
            if (!in_array($current['status'], ['ready', 'awaiting-acceptance'], true)) {
                throw new \InvalidArgumentException('existing_share_changed');
            }
            $existingMode = !empty($existing['managed_share_id']) ? 'create' : 'reuse';
            if ((int)$existing['root_file_id'] !== $expectedRootFileId
                || $existingMode !== $expectedFilesMode) {
                throw new \InvalidArgumentException('share_changed');
            }
            return $current;
        }
        if ($existing !== null) {
            throw new \RuntimeException('revocation_pending');
        }
        $countResult = $this->db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_root_shares WHERE owner_user_id=?', [$owner]);
        $grantCount = (int)$countResult->fetchOne();
        $countResult->closeCursor();
        if ($grantCount >= 100) {
            throw new \InvalidArgumentException('share_limit_reached');
        }
        try {
            $node = $this->files->getUserFolder($owner)->get(ltrim($root['path'], '/'));
        } catch (\Throwable) {
            throw new \InvalidArgumentException('invalid_root');
        }
        if (!$node instanceof Folder || !$node->isReadable() || $node->getMountPoint()->getMountType() === 'shared') {
            throw new \InvalidArgumentException('invalid_root');
        }
        $rootFileId = (int)$node->getId();
        if ($rootFileId <= 0) {
            throw new \InvalidArgumentException('invalid_root');
        }
        if (!$this->recipientDiscoverable($recipient, $rootFileId)) {
            throw new \InvalidArgumentException('invalid_recipient');
        }
        $recipientRoots = $this->recipientRootNodes($recipient, $rootFileId);
        if ($recipientRoots === []) {
            throw new \InvalidArgumentException('files_access_required');
        }
        foreach ($recipientRoots as $visible) {
            if (($visible->getPermissions() & (Constants::PERMISSION_UPDATE | Constants::PERMISSION_CREATE | Constants::PERMISSION_DELETE)) !== 0) {
                throw new \InvalidArgumentException('recipient_has_writable_access');
            }
        }
        if ($rootFileId !== $expectedRootFileId || $expectedFilesMode !== 'reuse') {
            throw new \InvalidArgumentException('share_changed');
        }
        try {
            $this->db->executeStatement('INSERT INTO *PREFIX*library_root_shares '
                . '(owner_user_id,recipient_user_id,root_id,root_file_id,managed_share_id,recovery_token,revoked_at,created_at) '
                . 'VALUES (?,?,?,?,?,?,?,?)', [$owner, $recipient, $rootId, $rootFileId,
                    null, null, null, time()]);
        } catch (\Throwable $e) {
            $concurrent = $this->findOwnedGrant($owner, $rootId, $recipient);
            if ($concurrent !== null && $concurrent['revoked_at'] === null) {
                $current = $this->presentGrant($concurrent);
                if (in_array($current['status'], ['ready', 'awaiting-acceptance'], true)) {
                    $concurrentMode = !empty($concurrent['managed_share_id']) ? 'create' : 'reuse';
                    if ((int)$concurrent['root_file_id'] !== $expectedRootFileId
                        || $concurrentMode !== $expectedFilesMode) {
                        throw new \InvalidArgumentException('share_changed', 0, $e);
                    }
                    return $current;
                }
                throw new \InvalidArgumentException('existing_share_changed', 0, $e);
            }
            if ($concurrent !== null) {
                throw new \RuntimeException('revocation_pending', 0, $e);
            }
            throw new \RuntimeException('grant_failed', 0, $e);
        }
        $created = $this->findOwnedGrant($owner, $rootId, $recipient);
        if ($created === null) {
            throw new \RuntimeException('grant_failed');
        }
        return $this->presentGrant($created);
    }

    /** Revocation hides Library data first; a failed Files cleanup remains retryable. */
    public function revoke(string $owner, int $grantId): bool {
        $grant = $this->findById($grantId);
        if ($grant === null || $grant['owner_user_id'] !== $owner) {
            return false;
        }
        return $this->withRootLock($owner, (int)$grant['root_id'],
            fn (): bool => $this->withGrantLock($owner, (int)$grant['root_id'], (string)$grant['recipient_user_id'],
                fn (): bool => $this->revokeLocked($owner, $grantId)));
    }

    private function revokeLocked(string $owner, int $grantId): bool {
        $grant = $this->findById($grantId);
        if ($grant === null || $grant['owner_user_id'] !== $owner) {
            return false;
        }
        $this->db->executeStatement('UPDATE *PREFIX*library_root_shares SET revoked_at=? WHERE id=? AND owner_user_id=? AND revoked_at IS NULL', [time(), $grantId, $owner]);
        $managedId = (string)($grant['managed_share_id'] ?? '');
        if ($managedId !== '') {
            try {
                $share = $this->shares->getShareById($this->managedShareId($managedId));
                if ($share->getShareType() !== IShare::TYPE_USER || $share->getShareOwner() !== $owner
                    || $share->getSharedBy() !== $owner || $share->getSharedWith() !== $grant['recipient_user_id']
                    || $share->getNodeId() !== (int)$grant['root_file_id']
                    || (is_string($grant['recovery_token'] ?? null) && $grant['recovery_token'] !== ''
                        && $share->getNote() !== self::MANAGED_NOTE_PREFIX . $grant['recovery_token'])) {
                    throw new \RuntimeException('share_identity_changed');
                }
                $this->shares->deleteShare($share);
            } catch (\OCP\Share\Exceptions\ShareNotFound) {
                // The recipient or owner may already have removed the Files share.
            } catch (\Throwable $e) {
                throw new \RuntimeException('file_share_cleanup_pending', 0, $e);
            }
        } elseif (is_string($grant['recovery_token'] ?? null) && $grant['recovery_token'] !== '') {
            $this->cleanupPendingShare($grant);
        }
        $this->db->executeStatement('DELETE FROM *PREFIX*library_root_shares WHERE id=? AND owner_user_id=? AND revoked_at IS NOT NULL', [$grantId, $owner]);
        return true;
    }

    public function revokeRoot(string $owner, int $rootId): void {
        $this->withRootLock($owner, $rootId, fn () => $this->revokeRootUnderLock($owner, $rootId));
    }

    /** Call only from a shelf mutation while the matching root lock is held. */
    public function revokeRootUnderLock(string $owner, int $rootId): void {
        $result = $this->db->executeQuery('SELECT id FROM *PREFIX*library_root_shares WHERE owner_user_id=? AND root_id=? ORDER BY id', [$owner, $rootId]);
        $ids = array_map('intval', array_column($result->fetchAll(), 'id'));
        $result->closeCursor();
        foreach ($ids as $id) {
            $grant = $this->findById($id);
            if ($grant !== null && $grant['owner_user_id'] === $owner && (int)$grant['root_id'] === $rootId) {
                $this->withGrantLock($owner, $rootId, (string)$grant['recipient_user_id'],
                    fn (): bool => $this->revokeLocked($owner, $id));
            }
        }
    }

    /** Revoke every Library grant before the app is disabled or uninstalled.
     *
     * Cursor paging keeps the pass bounded in memory. Revoke removes its row only
     * after the exact managed Files share has been removed; an interruption leaves
     * a hidden row that a subsequent pass can retry.
     */
    public function revokeAllForShutdown(): int {
        return $this->withLifecycleLock(function (): int {
            // A concurrent grant has completed before this marker is set. New
            // confirmations fail until Nextcloud enables Library again.
            $this->config->setAppValue('library', 'sharing_shutdown', 'yes');
            return $this->revokeAllForShutdownLocked();
        });
    }

    private function revokeAllForShutdownLocked(): int {
        $cursor = 0;
        $revoked = 0;
        do {
            $result = $this->db->executeQuery('SELECT id,owner_user_id FROM *PREFIX*library_root_shares '
                . 'WHERE id>? ORDER BY id ASC LIMIT 100', [$cursor]);
            $rows = $result->fetchAll();
            $result->closeCursor();
            foreach ($rows as $row) {
                $cursor = (int)$row['id'];
                if ($this->revoke((string)$row['owner_user_id'], $cursor)) {
                    $revoked++;
                }
            }
        } while (count($rows) === 100);
        return $revoked;
    }

    public function allowSharesAfterEnable(): void {
        $this->withLifecycleLock(function (): void {
            $this->config->deleteAppValue('library', 'sharing_shutdown');
        });
    }

    private function assertSharingAvailable(): void {
        if ($this->config->getAppValue('library', 'sharing_shutdown', 'no') === 'yes') {
            throw new \RuntimeException('sharing_unavailable');
        }
    }

    private function withLifecycleLock(callable $operation): mixed {
        $key = 'library/root-share-lifecycle';
        $this->locks->acquireLock($key, ILockingProvider::LOCK_EXCLUSIVE);
        try {
            return $operation();
        } finally {
            $this->locks->releaseLock($key, ILockingProvider::LOCK_EXCLUSIVE);
        }
    }

    /** @return array<int, array<string, mixed>> */
    public function owned(string $owner): array {
        $result = $this->db->executeQuery('SELECT s.*,r.path,r.label,r.enabled FROM *PREFIX*library_root_shares s '
            . 'LEFT JOIN *PREFIX*library_roots r ON r.id=s.root_id AND r.user_id=s.owner_user_id '
            . 'WHERE s.owner_user_id=? ORDER BY s.id DESC LIMIT 101', [$owner]);
        $rows = $result->fetchAll();
        $result->closeCursor();
        return array_map(fn (array $row): array => $this->presentGrant($row), array_slice($rows, 0, 100));
    }

    /** @return array<int, array<string, mixed>> */
    public function received(string $recipient): array {
        $result = $this->db->executeQuery('SELECT s.*,r.path,r.label,r.enabled FROM *PREFIX*library_root_shares s '
            . 'INNER JOIN *PREFIX*library_roots r ON r.id=s.root_id AND r.user_id=s.owner_user_id AND r.enabled=1 '
            . 'WHERE s.recipient_user_id=? AND s.revoked_at IS NULL ORDER BY s.id DESC LIMIT 101', [$recipient]);
        $rows = $result->fetchAll();
        $result->closeCursor();
        $visible = [];
        foreach (array_slice($rows, 0, 100) as $row) {
            $grant = $this->presentGrant($row);
            if (in_array($grant['status'], ['ready', 'awaiting-acceptance'], true)) {
                $visible[] = $grant;
            }
        }
        return $visible;
    }

    /** @return array<string, mixed>|null */
    public function visibleGrant(string $recipient, int $grantId): ?array {
        $grant = $this->findById($grantId);
        if ($grant === null || $grant['recipient_user_id'] !== $recipient || $grant['revoked_at'] !== null || !$grant['enabled']) {
            return null;
        }
        return $this->rootStillMatches($grant) && $this->recipientReadOnlyRootNodes($recipient, (int)$grant['root_file_id']) !== [] ? $grant : null;
    }

    /** @return array{items: array<int, array<string, mixed>>, nextCursor: int|null} */
    public function books(string $recipient, int $grantId, int $cursor = 0, string $search = ''): array {
        $grant = $this->visibleGrant($recipient, $grantId);
        if ($grant === null) {
            throw new \OutOfBoundsException('share_not_found');
        }
        $search = trim($search);
        if (!mb_check_encoding($search, 'UTF-8') || preg_match('/[\p{Cc}]/u', $search) === 1
            || ($search !== '' && (mb_strlen($search) < 3 || mb_strlen($search) > 100))) {
            throw new \InvalidArgumentException('invalid_search');
        }
        $pattern = '%' . str_replace(['!', '%', '_'], ['!!', '!%', '!_'], mb_strtolower($search)) . '%';
        $query = 'SELECT i.id,i.title,i.subtitle,i.creators,i.publisher,i.publication_date,f.file_id,f.cached_path,f.extension '
            . 'FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id '
            . 'WHERE i.user_id=? AND f.root_id=? AND i.id>? AND i.marked_for_deletion_at IS NULL AND f.scan_status=? ';
        $params = [$grant['owner_user_id'], (int)$grant['root_id'], max(0, $cursor), 'indexed'];
        if ($search !== '') {
            // The recipient sees canonical author names when a book's author
            // links are ready. Search those same names; source credits are the
            // fallback only while links are absent or still pending.
            $matchedAuthors = 'SELECT l.item_id FROM *PREFIX*library_item_authors l '
                . 'INNER JOIN *PREFIX*library_authors a ON a.id=l.author_id AND a.user_id=l.user_id '
                . "WHERE l.user_id=? AND LOWER(a.display_name) LIKE ? ESCAPE '!'";
            $query .= "AND (LOWER(i.title) LIKE ? ESCAPE '!' "
                . "OR (i.author_sync_status IN (0,2) AND i.id IN ({$matchedAuthors})) "
                . "OR ((i.author_sync_status NOT IN (0,2) OR NOT EXISTS (SELECT 1 FROM *PREFIX*library_item_authors l "
                . "WHERE l.user_id=i.user_id AND l.item_id=i.id)) "
                . "AND LOWER(i.creators) LIKE ? ESCAPE '!')) ";
            array_push($params, $pattern, (string)$grant['owner_user_id'], $pattern, $pattern);
        }
        $result = $this->db->executeQuery($query . 'ORDER BY i.id ASC LIMIT 81', $params);
        $rows = $result->fetchAll();
        $result->closeCursor();
        $authorized = [];
        $lastId = $cursor;
        $rootNodes = $this->recipientReadOnlyRootNodes($recipient, (int)$grant['root_file_id']);
        foreach (array_slice($rows, 0, 80) as $row) {
            $lastId = (int)$row['id'];
            if ($this->recipientFile($recipient, $grant, $row, $rootNodes) === null) {
                continue;
            }
            $authorized[] = $row;
        }
        $items = array_map(fn (array $row): array => $this->bookProjection($row),
            $this->authorDisplay->decorate((string)$grant['owner_user_id'], $authorized));
        return ['items' => $items, 'nextCursor' => count($rows) > 80 ? $lastId : null];
    }

    /** @return array<string, mixed>|null */
    public function book(string $recipient, int $grantId, int $itemId): ?array {
        $grant = $this->visibleGrant($recipient, $grantId);
        if ($grant === null) {
            return null;
        }
        $result = $this->db->executeQuery('SELECT i.id,i.title,i.subtitle,i.creators,i.publisher,i.publication_date,i.description,i.language,i.subjects_json,f.file_id,f.cached_path,f.extension '
            . 'FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id '
            . 'WHERE i.user_id=? AND f.root_id=? AND i.id=? AND i.marked_for_deletion_at IS NULL AND f.scan_status=?',
            [$grant['owner_user_id'], (int)$grant['root_id'], $itemId, 'indexed']);
        $row = $result->fetch();
        $result->closeCursor();
        if (!is_array($row) || $this->recipientFile($recipient, $grant, $row) === null) {
            return null;
        }
        $row = $this->authorDisplay->decorate((string)$grant['owner_user_id'], [$row])[0];
        return $this->bookProjection($row) + [
            'description' => (string)($row['description'] ?? ''),
            'language' => (string)($row['language'] ?? ''),
            'subjects' => $this->subjects($row['subjects_json'] ?? null),
        ];
    }

    public function bookFile(string $recipient, int $grantId, int $itemId): ?File {
        $grant = $this->visibleGrant($recipient, $grantId);
        if ($grant === null) {
            return null;
        }
        return $this->resolveBookFile($recipient, $grant, $itemId);
    }

    private function resolveBookFile(string $recipient, array $grant, int $itemId): ?File {
        $result = $this->db->executeQuery('SELECT f.file_id,f.cached_path FROM *PREFIX*library_items i '
            . 'INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id '
            . 'WHERE i.user_id=? AND f.root_id=? AND i.id=? AND i.marked_for_deletion_at IS NULL AND f.scan_status=?',
            [$grant['owner_user_id'], (int)$grant['root_id'], $itemId, 'indexed']);
        $row = $result->fetch();
        $result->closeCursor();
        return is_array($row) ? $this->recipientFile($recipient, $grant, $row) : null;
    }

    /** Return a cover candidate only after checking the recipient's actual file mount. */
    public function bookCover(string $recipient, int $grantId, int $itemId): ?array {
        $grant = $this->visibleGrant($recipient, $grantId);
        if ($grant === null) {
            return null;
        }
        $file = $this->resolveBookFile($recipient, $grant, $itemId);
        if ($file === null) {
            return null;
        }
        $result = $this->db->executeQuery('SELECT i.cover_override_data,i.cover_override_mime_type '
            . 'FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id '
            . 'WHERE i.user_id=? AND f.root_id=? AND i.id=? AND f.file_id=? AND i.marked_for_deletion_at IS NULL AND f.scan_status=?',
            [$grant['owner_user_id'], (int)$grant['root_id'], $itemId, (int)$file->getId(), 'indexed']);
        $row = $result->fetch();
        $result->closeCursor();
        if (!is_array($row)) {
            return null;
        }
        return [
            'file' => $file,
            'overrideData' => (string)($row['cover_override_data'] ?? ''),
            'overrideMime' => (string)($row['cover_override_mime_type'] ?? ''),
        ];
    }

    /** @param array<string, mixed> $grant @param array<string, mixed> $row */
    private function recipientFile(string $recipient, array $grant, array $row, ?array $rootNodes = null): ?File {
        $rootPath = rtrim((string)$grant['path'], '/');
        $cachedPath = '/' . ltrim((string)$row['cached_path'], '/');
        if ($rootPath === '' || !str_starts_with($cachedPath, $rootPath . '/')) {
            return null;
        }
        $relative = substr($cachedPath, strlen($rootPath) + 1);
        if ($relative === '' || in_array('..', explode('/', $relative), true)) {
            return null;
        }
        foreach ($rootNodes ?? $this->recipientReadOnlyRootNodes($recipient, (int)$grant['root_file_id']) as $root) {
            try {
                $file = $root->get($relative);
                $write = Constants::PERMISSION_UPDATE | Constants::PERMISSION_CREATE | Constants::PERMISSION_DELETE;
                if ($file instanceof File && (int)$file->getId() === (int)$row['file_id'] && $file->isReadable()
                    && ($file->getPermissions() & $write) === 0) {
                    return $file;
                }
            } catch (\Throwable) {
                // The source moved or access changed after the catalogue was indexed.
            }
        }
        return null;
    }

    /** @return array<int, Folder> */
    private function recipientRootNodes(string $recipient, int $rootFileId): array {
        try {
            $nodes = $this->files->getUserFolder($recipient)->getById($rootFileId);
            return array_values(array_filter($nodes, static fn ($node): bool => $node instanceof Folder && $node->isReadable()));
        } catch (\Throwable) {
            return [];
        }
    }

    /** @return array<int, Folder> */
    private function recipientReadOnlyRootNodes(string $recipient, int $rootFileId): array {
        $write = Constants::PERMISSION_UPDATE | Constants::PERMISSION_CREATE | Constants::PERMISSION_DELETE;
        $nodes = $this->recipientRootNodes($recipient, $rootFileId);
        foreach ($nodes as $node) {
            if (($node->getPermissions() & $write) !== 0) {
                return [];
            }
        }
        return $nodes;
    }

    /** Support early development rows that stored an internal user-share ID. */
    private function managedShareId(string $id): string {
        return str_contains($id, ':') ? $id : 'ocinternal:' . $id;
    }

    private function withGrantLock(string $owner, int $rootId, string $recipient, callable $operation): mixed {
        $key = 'library/root-share/' . hash('sha256', $owner . "\0" . $rootId . "\0" . $recipient);
        $this->locks->acquireLock($key, ILockingProvider::LOCK_EXCLUSIVE);
        try {
            return $operation();
        } finally {
            $this->locks->releaseLock($key, ILockingProvider::LOCK_EXCLUSIVE);
        }
    }

    /** Use Nextcloud's own sharee visibility rules, including third-party filters. */
    private function recipientDiscoverable(string $recipient, int $rootFileId): bool {
        foreach ($this->collaboratorMatches($recipient, $rootFileId) as $result) {
            if (($result['value']['shareWith'] ?? null) === $recipient) {
                return true;
            }
        }
        return false;
    }

    /** @return array<int, array<string, mixed>> */
    private function collaboratorMatches(string $search, int $rootFileId): array {
        if (method_exists($this->collaborators, 'filteredSearch')) {
            [$results] = $this->collaborators->filteredSearch($search, [IShare::TYPE_USER], false,
                'folder', (string)$rootFileId, 20, 0);
        } else {
            [$results] = $this->collaborators->search($search, [IShare::TYPE_USER], false, 20, 0);
            $event = new AutoCompleteFilterEvent($results, $search, 'folder', (string)$rootFileId,
                null, [IShare::TYPE_USER], 20);
            $this->events->dispatchTyped($event);
            $results = $event->getResults();
        }
        $matches = [];
        foreach (array_merge($results['exact']['users'] ?? [], $results['users'] ?? []) as $result) {
            if (is_array($result) && ($result['value']['shareType'] ?? null) === IShare::TYPE_USER
                && is_string($result['value']['shareWith'] ?? null)) {
                $matches[] = $result;
            }
        }
        return $matches;
    }

    /** Serialize the Files grant lifecycle with path, disable and delete changes. */
    public function withRootLock(string $owner, int $rootId, callable $operation): mixed {
        $key = 'library/root-share-root/' . hash('sha256', $owner . "\0" . $rootId);
        $this->locks->acquireLock($key, ILockingProvider::LOCK_EXCLUSIVE);
        try {
            return $operation();
        } finally {
            $this->locks->releaseLock($key, ILockingProvider::LOCK_EXCLUSIVE);
        }
    }

    /** Resolve an interrupted create without ever selecting a manual Files share. */
    private function cleanupPendingShare(array $grant): void {
        try {
            $nodes = $this->files->getUserFolder((string)$grant['owner_user_id'])->getById((int)$grant['root_file_id']);
            $node = current(array_filter($nodes, static fn ($entry): bool => $entry instanceof Folder
                && (int)$entry->getId() === (int)$grant['root_file_id']));
            if (!$node instanceof Folder) {
                throw new \RuntimeException('folder_unavailable');
            }
            $matches = [];
            $possible = 0;
            for ($offset = 0; $offset <= 500; $offset += 50) {
                $page = $this->shares->getSharesBy((string)$grant['owner_user_id'], IShare::TYPE_USER, $node, false, 50, $offset, false);
                foreach ($page as $share) {
                    if ($share->getSharedWith() !== $grant['recipient_user_id'] || $share->getShareOwner() !== $grant['owner_user_id']
                        || $share->getSharedBy() !== $grant['owner_user_id'] || $share->getNodeId() !== (int)$grant['root_file_id']) {
                        continue;
                    }
                    $possible++;
                    if ($share->getNote() === self::MANAGED_NOTE_PREFIX . $grant['recovery_token']) {
                        $matches[] = $share;
                    }
                }
                if (count($page) < 50) {
                    break;
                }
                if ($offset === 500) {
                    throw new \RuntimeException('share_search_limit');
                }
            }
            if (count($matches) > 1) {
                throw new \RuntimeException('ambiguous_managed_share');
            }
            if ($matches !== []) {
                $this->shares->deleteShare($matches[0]);
            } elseif ($possible > 0 || time() - (int)$grant['created_at'] < 60) {
                // Its note may have changed. Keep the row so the owner can
                // inspect Files access; a recent create may still be running.
                throw new \RuntimeException('share_identity_unknown');
            }
        } catch (\Throwable $e) {
            throw new \RuntimeException('file_share_cleanup_pending', 0, $e);
        }
    }

    /** @param array<string, mixed> $grant */
    private function rootStillMatches(array $grant): bool {
        if (!is_string($grant['path'] ?? null) || $grant['path'] === '/') {
            return false;
        }
        $owner = $this->users->get((string)$grant['owner_user_id']);
        if ($owner === null || !$owner->isEnabled()) {
            return false;
        }
        try {
            $node = $this->files->getUserFolder((string)$grant['owner_user_id'])->get(ltrim($grant['path'], '/'));
            return $node instanceof Folder && (int)$node->getId() === (int)$grant['root_file_id'];
        } catch (\Throwable) {
            return false;
        }
    }

    /** @return array<string, mixed>|null */
    private function findOwnedGrant(string $owner, int $rootId, string $recipient): ?array {
        $result = $this->db->executeQuery('SELECT s.*,r.path,r.label,r.enabled FROM *PREFIX*library_root_shares s '
            . 'LEFT JOIN *PREFIX*library_roots r ON r.id=s.root_id AND r.user_id=s.owner_user_id '
            . 'WHERE s.owner_user_id=? AND s.root_id=? AND s.recipient_user_id=?', [$owner, $rootId, $recipient]);
        $row = $result->fetch();
        $result->closeCursor();
        return is_array($row) ? $row : null;
    }

    /** @return array<string, mixed>|null */
    private function findById(int $id): ?array {
        $result = $this->db->executeQuery('SELECT s.*,r.path,r.label,r.enabled FROM *PREFIX*library_root_shares s '
            . 'LEFT JOIN *PREFIX*library_roots r ON r.id=s.root_id AND r.user_id=s.owner_user_id WHERE s.id=?', [$id]);
        $row = $result->fetch();
        $result->closeCursor();
        return is_array($row) ? $row : null;
    }

    /** @param array<string, mixed> $row @return array<string, mixed> */
    private function presentGrant(array $row): array {
        $recipient = (string)$row['recipient_user_id'];
        $status = 'access-changed';
        if ($row['revoked_at'] !== null) {
            $status = 'cleanup-pending';
        } elseif (($row['enabled'] ?? false) && $this->rootStillMatches($row)) {
            if ($this->recipientReadOnlyRootNodes($recipient, (int)$row['root_file_id']) !== []) {
                $status = 'ready';
            } elseif (is_string($row['managed_share_id'] ?? null) && $row['managed_share_id'] !== '') {
                try {
                    $share = $this->shares->getShareById($this->managedShareId($row['managed_share_id']));
                    if ($share->getShareType() === IShare::TYPE_USER && $share->getShareOwner() === $row['owner_user_id']
                        && $share->getSharedBy() === $row['owner_user_id']
                        && $share->getSharedWith() === $recipient && $share->getNodeId() === (int)$row['root_file_id']
                        && $share->getStatus() === IShare::STATUS_PENDING) {
                        $status = 'awaiting-acceptance';
                    }
                } catch (\Throwable) {
                    // A removed or inaccessible Files share is not ready.
                }
            }
        }
        return [
            'id' => (int)$row['id'],
            'rootId' => (int)$row['root_id'],
            'rootLabel' => trim((string)($row['label'] ?? '')) ?: 'Shared shelf',
            'ownerId' => (string)$row['owner_user_id'],
            'recipientId' => $recipient,
            'recipientName' => $this->users->get($recipient)?->getDisplayName() ?? $recipient,
            'managedFilesShare' => ($row['managed_share_id'] ?? null) !== null,
            'status' => $status,
        ];
    }

    /** @param array<string, mixed> $row @return array<string, mixed> */
    private function bookProjection(array $row): array {
        return [
            'id' => (int)$row['id'],
            'title' => (string)($row['title'] ?? ''),
            'subtitle' => (string)($row['subtitle'] ?? ''),
            'creators' => (string)($row['displayCreators'] ?? $row['creators'] ?? ''),
            'publisher' => (string)($row['publisher'] ?? ''),
            'publicationDate' => (string)($row['publication_date'] ?? ''),
            'format' => strtoupper((string)($row['extension'] ?? '')),
        ];
    }

    /** @return array<int, string> */
    private function subjects(mixed $json): array {
        if (!is_string($json) || $json === '') {
            return [];
        }
        $decoded = json_decode($json, true);
        return is_array($decoded) ? array_values(array_filter($decoded, 'is_string')) : [];
    }
}
