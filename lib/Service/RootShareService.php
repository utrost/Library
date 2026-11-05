<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\Constants;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;
use OCP\IUserManager;
use OCP\Share\IManager as IShareManager;
use OCP\Share\IShare;

/** A Library grant is useful only while the recipient can read the underlying Files root. */
final class RootShareService {
    public function __construct(
        private IDBConnection $db,
        private RootService $roots,
        private IRootFolder $files,
        private IUserManager $users,
        private IShareManager $shares,
    ) {
    }

    /** Inspect the exact folder and Files access before the owner confirms a grant. */
    public function previewGrant(string $owner, int $rootId, string $recipient): array {
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
            throw new \InvalidArgumentException($existing['revoked_at'] === null ? 'already_shared' : 'revocation_pending');
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
        $recipientRoots = $this->recipientRootNodes($recipient, (int)$node->getId());
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
            'filesMode' => $recipientRoots === [] ? 'create' : 'reuse',
        ];
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
        $root = $this->roots->findRoot($owner, $rootId);
        if ($root === null || !$root['enabled'] || $root['path'] === '/') {
            throw new \InvalidArgumentException('invalid_root');
        }
        $existing = $this->findOwnedGrant($owner, $rootId, $recipient);
        if ($existing !== null && $existing['revoked_at'] === null) {
            if (!$this->rootStillMatches($existing)) {
                throw new \RuntimeException('revocation_pending');
            }
            return $this->presentGrant($existing);
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
        $recipientRoots = $this->recipientRootNodes($recipient, $rootFileId);
        foreach ($recipientRoots as $visible) {
            if (($visible->getPermissions() & (Constants::PERMISSION_UPDATE | Constants::PERMISSION_CREATE | Constants::PERMISSION_DELETE)) !== 0) {
                throw new \InvalidArgumentException('recipient_has_writable_access');
            }
        }
        if ($rootFileId !== $expectedRootFileId || ($recipientRoots === [] ? 'create' : 'reuse') !== $expectedFilesMode) {
            throw new \InvalidArgumentException('share_changed');
        }
        $managedShare = null;
        if ($recipientRoots === []) {
            try {
                $share = $this->shares->newShare();
                $share->setShareType(IShare::TYPE_USER)
                    ->setSharedBy($owner)
                    ->setShareOwner($owner)
                    ->setSharedWith($recipient)
                    ->setNode($node)
                    ->setPermissions(Constants::PERMISSION_READ);
                $managedShare = $this->shares->createShare($share);
            } catch (\Throwable $e) {
                throw new \RuntimeException('file_share_failed', 0, $e);
            }
        }
        try {
            $this->db->executeStatement('INSERT INTO *PREFIX*library_root_shares '
                . '(owner_user_id,recipient_user_id,root_id,root_file_id,managed_share_id,revoked_at,created_at) '
                . 'VALUES (?,?,?,?,?,?,?)', [$owner, $recipient, $rootId, $rootFileId,
                    $managedShare === null ? null : $this->managedShareId($managedShare->getId()), null, time()]);
        } catch (\Throwable $e) {
            if ($managedShare !== null) {
                try {
                    $this->shares->deleteShare($managedShare);
                } catch (\Throwable $cleanupError) {
                    // Never report a successful grant while a Files share may exist without a Library grant.
                    throw new \RuntimeException('file_share_cleanup_pending', 0, $cleanupError);
                }
            }
            $concurrent = $this->findOwnedGrant($owner, $rootId, $recipient);
            if ($concurrent !== null && $concurrent['revoked_at'] === null) {
                return $this->presentGrant($concurrent);
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
        $this->db->executeStatement('UPDATE *PREFIX*library_root_shares SET revoked_at=? WHERE id=? AND owner_user_id=? AND revoked_at IS NULL', [time(), $grantId, $owner]);
        $managedId = (string)($grant['managed_share_id'] ?? '');
        if ($managedId !== '') {
            try {
                $share = $this->shares->getShareById($this->managedShareId($managedId));
                if ($share->getShareType() !== IShare::TYPE_USER || $share->getShareOwner() !== $owner
                    || $share->getSharedBy() !== $owner || $share->getSharedWith() !== $grant['recipient_user_id']
                    || $share->getNodeId() !== (int)$grant['root_file_id']) {
                    throw new \RuntimeException('share_identity_changed');
                }
                $this->shares->deleteShare($share);
            } catch (\OCP\Share\Exceptions\ShareNotFound) {
                // The recipient or owner may already have removed the Files share.
            } catch (\Throwable $e) {
                throw new \RuntimeException('file_share_cleanup_pending', 0, $e);
            }
        }
        $this->db->executeStatement('DELETE FROM *PREFIX*library_root_shares WHERE id=? AND owner_user_id=? AND revoked_at IS NOT NULL', [$grantId, $owner]);
        return true;
    }

    public function revokeRoot(string $owner, int $rootId): void {
        $result = $this->db->executeQuery('SELECT id FROM *PREFIX*library_root_shares WHERE owner_user_id=? AND root_id=? ORDER BY id', [$owner, $rootId]);
        $ids = array_map('intval', array_column($result->fetchAll(), 'id'));
        $result->closeCursor();
        foreach ($ids as $id) {
            $this->revoke($owner, $id);
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
            if ($this->rootStillMatches($row) && $this->recipientReadOnlyRootNodes($recipient, (int)$row['root_file_id']) !== []) {
                $visible[] = $this->presentGrant($row);
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
        if ($search !== '' && (mb_strlen($search) < 3 || mb_strlen($search) > 100)) {
            throw new \InvalidArgumentException('invalid_search');
        }
        $pattern = '%' . str_replace(['!', '%', '_'], ['!!', '!%', '!_'], mb_strtolower($search)) . '%';
        $query = 'SELECT i.id,i.title,i.subtitle,i.creators,i.publisher,i.publication_date,f.file_id,f.cached_path,f.extension '
            . 'FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id '
            . 'WHERE i.user_id=? AND f.root_id=? AND i.id>? AND i.marked_for_deletion_at IS NULL AND f.scan_status=? ';
        $params = [$grant['owner_user_id'], (int)$grant['root_id'], max(0, $cursor), 'indexed'];
        if ($search !== '') {
            $query .= "AND (LOWER(i.title) LIKE ? ESCAPE '!' OR LOWER(i.creators) LIKE ? ESCAPE '!') ";
            $params[] = $pattern;
            $params[] = $pattern;
        }
        $result = $this->db->executeQuery($query . 'ORDER BY i.id ASC LIMIT 81', $params);
        $rows = $result->fetchAll();
        $result->closeCursor();
        $items = [];
        $lastId = $cursor;
        $rootNodes = $this->recipientReadOnlyRootNodes($recipient, (int)$grant['root_file_id']);
        foreach (array_slice($rows, 0, 80) as $row) {
            $lastId = (int)$row['id'];
            if ($this->recipientFile($recipient, $grant, $row, $rootNodes) === null) {
                continue;
            }
            $items[] = $this->bookProjection($row);
        }
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
        $result = $this->db->executeQuery('SELECT f.file_id,f.cached_path FROM *PREFIX*library_items i '
            . 'INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id '
            . 'WHERE i.user_id=? AND f.root_id=? AND i.id=? AND i.marked_for_deletion_at IS NULL AND f.scan_status=?',
            [$grant['owner_user_id'], (int)$grant['root_id'], $itemId, 'indexed']);
        $row = $result->fetch();
        $result->closeCursor();
        return is_array($row) ? $this->recipientFile($recipient, $grant, $row) : null;
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

    /** Nextcloud's manager routes internal user shares by provider-prefixed ID. */
    private function managedShareId(string $id): string {
        return str_contains($id, ':') ? $id : 'ocinternal:' . $id;
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
        return [
            'id' => (int)$row['id'],
            'rootId' => (int)$row['root_id'],
            'rootLabel' => trim((string)($row['label'] ?? '')) ?: 'Shared shelf',
            'ownerId' => (string)$row['owner_user_id'],
            'recipientId' => $recipient,
            'recipientName' => $this->users->get($recipient)?->getDisplayName() ?? $recipient,
            'managedFilesShare' => ($row['managed_share_id'] ?? null) !== null,
            'status' => $row['revoked_at'] !== null ? 'cleanup-pending' : (($row['enabled'] ?? false) && $this->rootStillMatches($row) && $this->recipientReadOnlyRootNodes($recipient, (int)$row['root_file_id']) !== [] ? 'ready' : 'awaiting-files-access'),
        ];
    }

    /** @param array<string, mixed> $row @return array<string, mixed> */
    private function bookProjection(array $row): array {
        return [
            'id' => (int)$row['id'],
            'title' => (string)($row['title'] ?? ''),
            'subtitle' => (string)($row['subtitle'] ?? ''),
            'creators' => (string)($row['creators'] ?? ''),
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
