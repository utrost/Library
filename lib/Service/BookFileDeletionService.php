<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCA\Library\Metadata\PublicationMetadataService;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\Files\NotPermittedException;
use OCP\IConfig;
use OCP\Lock\ILockingProvider;
use OCP\Security\ICrypto;

/** Explicit, confirmed file deletion. Never resolves destructive targets by cached path. */
final class BookFileDeletionService {
    public function __construct(
        private IRootFolder $rootFolder,
        private ItemService $items,
        private ItemDeletionService $deletion,
        private FileIndexService $files,
        private RootService $roots,
        private PublicationMetadataService $metadata,
        private ICrypto $crypto,
        private IConfig $config,
        private \OCP\IDBConnection $db,
        private ScanChangeJournal $journal,
        private SecurityAuditLogger $audit,
    ) {}

    public function preview(string $uid, int $id): array {
        $item = $this->items->findItem($uid, $id);
        if ($item === null) throw new \OutOfBoundsException();
        if (!$this->config->getSystemValueBool('filelocking.enabled', true)) throw new \DomainException('locking_disabled');
        $file = $this->resolve($uid, (int)$item['fileId']);
        if (!$file->isDeletable()) throw new NotPermittedException();
        $plan = $this->snapshot($uid, $item, $file);
        return [
            'file' => $this->relative($uid, $file->getPath()),
            'opf' => $plan['opf'] === null ? null : $this->relative($uid, $plan['opf']['path']),
            'keepOpf' => $plan['keepOpf'],
            'parent' => $plan['parentEligible'] ? $this->relative($uid, $file->getParent()->getPath()) : null,
            'token' => $this->crypto->encrypt(json_encode(['purpose' => 'library-book-delete-v1', 'uid' => $uid,
                'id' => $id, 'expires' => time() + 600, 'plan' => $plan], JSON_THROW_ON_ERROR)),
        ];
    }

    public function delete(string $uid, int $id, string $token): array {
        try {
            if ($token === '' || strlen($token) > 32768) throw new \UnexpectedValueException();
            $claim = json_decode($this->crypto->decrypt($token), true, 32, JSON_THROW_ON_ERROR);
            if ($claim['purpose'] !== 'library-book-delete-v1' || $claim['uid'] !== $uid || $claim['id'] !== $id
                || $claim['expires'] < time() || !is_array($claim['plan'])) throw new \UnexpectedValueException();
        } catch (\Throwable) { throw new \DomainException('confirmation_expired'); }
        if (!$this->config->getSystemValueBool('filelocking.enabled', true)) throw new \DomainException('locking_disabled');
        $item = $this->items->findItem($uid, $id);
        // A replay can never act on a replacement file, sidecar or folder.
        if ($item === null) return ['deleted' => true, 'alreadyDeleted' => true, 'warnings' => []];
        $file = $this->resolve($uid, (int)$item['fileId']);
        $parent = $file->getParent();
        $warnings = [];
        $mount = $file->getMountPoint();
        $originalStorage = $mount->getStorage();
        $sourcePath = $file->getInternalPath();
        $mountPath = $mount->getMountPoint();
        $parentPath = $parent->getInternalPath();
        $opfPath = $claim['plan']['opf'] === null ? null : substr($claim['plan']['opf']['path'], strlen($mountPath));
        // View owns the file/folder lock before it calls this request-local adapter.
        // A Node pre-delete event is too early: other writers may still hold locks then.
        $mount->wrapStorage(fn($mountPath, $storage) => new DeletionStorageGuard($storage,
            function (string $path, bool $folder, \Closure $operation) use ($uid, $id, $claim, $sourcePath, $mountPath, $parentPath, $opfPath, $parent, $originalStorage): bool {
                // Nextcloud trash retention may remove older trash entries in this
                // same request. Guard only our explicitly confirmed live targets.
                if (!in_array($path, [$sourcePath, $opfPath, $parentPath], true)) return $operation();
                if ($folder) {
                    if ($path !== $parent->getInternalPath() || !$this->parentEligible($uid, $parent)) throw new NotPermittedException();
                    $handle = $originalStorage->opendir($path);
                    if (!is_resource($handle)) throw new \RuntimeException('cannot_check_empty');
                    try { while (($name = readdir($handle)) !== false) { if ($name !== '.' && $name !== '..') throw new \DomainException('folder_not_empty'); } }
                    finally { closedir($handle); }
                    return $operation();
                }
                $fresh = $this->rootFolder->getUserFolder($uid)->get($this->relative($uid, $mountPath . $path));
                $expected = $path === $sourcePath ? $claim['plan']['file'] : $claim['plan']['opf'];
                if (!$fresh instanceof File || $expected === null || $this->nodeSnapshot($fresh) !== $expected) throw new \DomainException('targets_changed');
                if ($path === $sourcePath) {
                    $saved = $this->items->findItem($uid, $id);
                    if ($saved === null || $saved['metadataRevision'] !== $claim['plan']['revision']) throw new \DomainException('metadata_changed');
                    return $operation();
                }
                // View holds a shared parent lock for child deletion. Upgrade it
                // while checking OPF consumers and performing the underlying delete.
                $parent->changeLock(ILockingProvider::LOCK_EXCLUSIVE);
                try {
                    if ($this->shared($parent, $fresh, $claim['plan']['file']['id'])) throw new \DomainException('opf_shared');
                    return $operation();
                } finally { $parent->changeLock(ILockingProvider::LOCK_SHARED); }
            }));
        try {
            $current = $this->snapshot($uid, $item, $file);
            if ($current !== $claim['plan']) throw new \DomainException('targets_changed');
            if (!$file->isDeletable()) throw new NotPermittedException();
            $opf = $current['opf'] !== null && $current['keepOpf'] === ''
                ? $parent->get(basename($current['opf']['path'])) : null;
            // No cleanup is allowed until source deletion has succeeded.
            try { $file->delete(); } catch (\Throwable $error) { if ($this->exists($file)) throw $error; }
            if ($this->exists($file)) throw new \RuntimeException('source_delete_failed');
            $opfRemoved = false;
            if ($opf instanceof File) {
                try {
                    // Inspect again after deletion hooks; a remaining file may now use the OPF.
                    if ($this->shared($parent, $opf, $current['file']['id'])) $warnings[] = 'opf_shared';
                    elseif (!$opf->isDeletable() || $this->nodeSnapshot($opf) !== $current['opf']) $warnings[] = 'opf_retained';
                    else {
                        $opf->delete();
                        if ($this->exists($opf)) $warnings[] = 'opf_retained';
                        else $opfRemoved = true;
                    }
                } catch (\Throwable) { $warnings[] = 'opf_retained'; }
            }
            if ($opfRemoved) {
                try { $this->db->executeStatement('DELETE FROM *PREFIX*library_files WHERE user_id=? AND file_id=? AND NOT EXISTS (SELECT 1 FROM *PREFIX*library_items i WHERE i.user_id=? AND i.library_file_id=*PREFIX*library_files.id)', [$uid, $current['opf']['id'], $uid]); }
                catch (\Throwable) { $warnings[] = 'catalogue_cleanup'; }
            }
            if ($current['parentEligible']) {
                try {
                    if ($this->parentEligible($uid, $parent) && $parent->getDirectoryListing() === []) $parent->delete();
                } catch (\Throwable) { $warnings[] = 'folder_retained'; }
            }
            // File operations are not a database transaction. Report cleanup failures
            // truthfully and let the existing missing-file review/reconciliation retry.
            try {
                $this->files->markMissingAtPath($uid, (int)$current['rootId'], (string)$item['cachedPath']);
                if (!$this->deletion->deleteItem($uid, $id, 'missing', false, true)) $warnings[] = 'catalogue_cleanup';
            } catch (\Throwable) { $warnings[] = 'catalogue_cleanup'; }
            try {
                $this->journal->recordNodePath($current['file']['path'], false);
                $this->config->deleteUserValue($uid, 'library', 'import_health_summary_json');
                $this->config->deleteUserValue($uid, 'library', 'import_health_summary_generated_at');
            } catch (\Throwable) { $warnings[] = 'reconciliation_pending'; }
            $this->audit->info('book_file_deleted', $uid, 'delete', 'item', $warnings === [] ? 'success' : 'partial', ['target_id' => $id]);
            return ['deleted' => true, 'warnings' => array_values(array_unique($warnings))];
        } finally { $mount->wrapStorage(fn() => $originalStorage); }
    }

    private function resolve(string $uid, int $fileId): File {
        foreach ($this->rootFolder->getUserFolder($uid)->getById($fileId) as $node) {
            if ($node instanceof File && $node->isReadable() && $this->exists($node)) return $node;
        }
        throw new \OutOfBoundsException();
    }

    private function snapshot(string $uid, array $item, File $file): array {
        $opf = $this->metadata->findOpfSidecar($file);
        $parent = $file->getParent();
        $keep = $opf === null ? '' : ($this->shared($parent, $opf, (int)$file->getId()) ? 'shared' : (!$opf->isDeletable() || $opf->getMountPoint() !== $file->getMountPoint() ? 'permission' : ''));
        $rootId = (int)$this->db->executeQuery('SELECT root_id FROM *PREFIX*library_files WHERE user_id=? AND id=?', [$uid, (int)$item['libraryFileId']])->fetchOne();
        return ['file' => $this->nodeSnapshot($file), 'opf' => $opf === null ? null : $this->nodeSnapshot($opf),
            'keepOpf' => $keep, 'parentId' => (int)$parent->getId(), 'parentPath' => $parent->getPath(),
            'parentEligible' => $parent->getMountPoint() === $file->getMountPoint() && $this->parentEligible($uid, $parent), 'rootId' => $rootId,
            'revision' => $item['metadataRevision']];
    }

    private function shared(Folder $parent, File $opf, int $excluded): bool {
        foreach ($parent->getDirectoryListing() as $node) {
            if (!$node instanceof File || (int)$node->getId() === $excluded || (int)$node->getId() === (int)$opf->getId()) continue;
            if (!in_array(strtolower(pathinfo($node->getName(), PATHINFO_EXTENSION)), ['epub', 'pdf', 'cbz'], true)
                && !in_array(strtolower($node->getMimetype()), ['application/epub+zip', 'application/pdf', 'application/x-cbz', 'application/vnd.comicbook+zip', 'application/comicbook+zip'], true)) continue;
            // An inaccessible sibling is not proof that a sidecar is exclusive.
            if (!$node->isReadable()) return true;
            $sidecar = $this->metadata->findOpfSidecar($node);
            if ($sidecar !== null && (int)$sidecar->getId() === (int)$opf->getId()) return true;
        }
        return false;
    }

    private function parentEligible(string $uid, Folder $parent): bool {
        $home = $this->rootFolder->getUserFolder($uid);
        if (!$this->config->getSystemValueBool('filelocking.enabled', true) || !$parent->isDeletable() || $parent->getId() === $home->getId() || $parent->getInternalPath() === '' || $parent->getPath() === rtrim($parent->getMountPoint()->getMountPoint(), '/')) return false;
        $path = $this->relative($uid, $parent->getPath());
        foreach ($this->roots->listRoots($uid) as $root) {
            // Protect roots and folders containing any configured root, including disabled roots.
            if ($root['path'] === $path || str_starts_with($root['path'], rtrim($path, '/') . '/')) return false;
        }
        return true;
    }

    private function nodeSnapshot(File $file): array {
        return ['id' => (int)$file->getId(), 'path' => $file->getPath(), 'etag' => $file->getEtag(),
            'size' => $file->getSize(), 'mtime' => $file->getMTime(), 'storage' => $file->getStorage()->getId()];
    }
    private function exists(File $file): bool {
        try { return $file->getStorage()->file_exists($file->getInternalPath()); }
        catch (\OCP\Files\NotFoundException) { return false; }
    }
    private function relative(string $uid, string $path): string {
        $home = rtrim($this->rootFolder->getUserFolder($uid)->getPath(), '/');
        if (!str_starts_with($path, $home . '/')) throw new NotPermittedException();
        return substr($path, strlen($home));
    }
}
