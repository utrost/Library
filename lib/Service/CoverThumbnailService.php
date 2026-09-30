<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\Files\IAppData;
use OCP\Files\SimpleFS\ISimpleFolder;
use OCP\Files\NotFoundException;
use OCP\Lock\ILockingProvider;
use OCP\IConfig;
use OCP\IDBConnection;

/** Private, disposable derivatives. At most 4096 thumbnails (16 per shard) per user. */
final class CoverThumbnailService {
    public const MAX_BYTES = 102400;
    private const MAX_PIXELS = 16000000;
    private const PER_SHARD = 16;
    public function __construct(private IAppData $appData, private ILockingProvider $locks, private ?IConfig $config = null, private ?IDBConnection $db = null) {}

    public function settings(): array {
        return ['budgetMiB' => max(0, min(1024, (int)($this->config?->getAppValue('library', 'thumbnail_budget_mib', '128') ?? 128))),
            'retentionHours' => max(1, min(720, (int)($this->config?->getAppValue('library', 'thumbnail_retention_hours', '168') ?? 168)))];
    }
    public function configure(int $budgetMiB, int $retentionHours): void {
        if ($budgetMiB < 0 || $budgetMiB > 1024 || $retentionHours < 1 || $retentionHours > 720) throw new \InvalidArgumentException('invalid_thumbnail_settings');
        $this->config?->setAppValue('library', 'thumbnail_budget_mib', (string)$budgetMiB);
        $this->config?->setAppValue('library', 'thumbnail_retention_hours', (string)$retentionHours);
    }
    private function shardBudget(): int { return (int)floor($this->settings()['budgetMiB'] * 1048576 / 256); }
    private function expired(array $value): bool {
        $expires = min((int)($value['expires'] ?? 0), (int)($value['createdAt'] ?? 0) + $this->settings()['retentionHours'] * 3600);
        return $expires <= time();
    }
    private function trim(ISimpleFolder $folder, int $incoming = 0, ?string $replace = null): void {
        $files = $folder->getDirectoryListing(); $retained = []; $bytes = 0;
        foreach ($files as $file) {
            if ($file->getName() === $replace) continue;
            try { $value = $file->getSize() > 150000 ? [] : json_decode($file->getContent(), true, 16, JSON_THROW_ON_ERROR); }
            catch (\Throwable) { $value = []; }
            if (!is_array($value) || $this->expired($value)) { $file->delete(); continue; }
            $retained[] = $file; $bytes += $file->getSize();
        }
        usort($retained, static fn($a,$b) => $a->getMTime() <=> $b->getMTime());
        $slots = $incoming > 0 ? 1 : 0;
        while ($retained !== [] && (count($retained) + $slots > self::PER_SHARD || $bytes + $incoming > $this->shardBudget())) {
            $old = array_shift($retained); $bytes -= $old->getSize(); $old->delete();
        }
    }

    /** Bounded rotating maintenance: 20 accounts × 4 shards per invocation. */
    public function cleanupExpired(): void {
        if (!$this->config || !$this->db) return;
        $cursor = $this->config->getAppValue('library', 'thumbnail_cleanup_user', '');
        $shard = (int)$this->config->getAppValue('library', 'thumbnail_cleanup_shard', '0') % 256;
        $qb = $this->db->getQueryBuilder();
        $result = $qb->selectDistinct('user_id')->from('library_thumbnail_users')
            ->where($qb->expr()->gt('user_id', $qb->createNamedParameter($cursor)))->orderBy('user_id','ASC')->setMaxResults(20)->executeQuery();
        $users = $result->fetchAll(); $result->closeCursor();
        foreach ($users as $row) {
            for ($offset = 0; $offset < 4; $offset++) {
                $name = 'cover-v1-' . hash('sha256', $row['user_id']) . '-' . sprintf('%02x', ($shard + $offset) % 256);
                $lock = 'library-cover-cache:' . hash('sha256', $row['user_id']) . ':' . sprintf('%02x', ($shard + $offset) % 256);
                $locked = false;
                try { $this->locks->acquireLock($lock, ILockingProvider::LOCK_EXCLUSIVE); $locked = true; $this->trim($this->appData->getFolder($name)); }
                catch (\Throwable) { /* Disposable cache cleanup must not block other maintenance. */ }
                finally { if ($locked) { try { $this->locks->releaseLock($lock, ILockingProvider::LOCK_EXCLUSIVE); } catch (\Throwable) {} } }
            }
        }
        $this->config->setAppValue('library', 'thumbnail_cleanup_user', count($users) === 20 ? (string)$users[array_key_last($users)]['user_id'] : '');
        if (count($users) < 20) $this->config->setAppValue('library', 'thumbnail_cleanup_shard', (string)(($shard + 4) % 256));
    }

    private function folder(string $uid, int $itemId, bool $create): ISimpleFolder {
        $name = 'cover-v1-' . hash('sha256', $uid) . '-' . substr(hash('sha256', (string)$itemId), 0, 2);
        try { return $this->appData->getFolder($name); }
        catch (NotFoundException $e) {
            if (!$create) throw $e;
            try { return $this->appData->newFolder($name); }
            catch (\Throwable) { return $this->appData->getFolder($name); }
        }
    }

    public function get(string $uid, int $id, string $revision): ?array {
        if ($this->shardBudget() === 0) return null;
        try {
            $file = $this->folder($uid, $id, false)->getFile($id . '.json');
            if ($file->getSize() > 150000) return null;
            $value = json_decode($file->getContent(), true, 16, JSON_THROW_ON_ERROR);
            if (($value['revision'] ?? '') !== $revision || $this->expired($value)) return null;
            $content = base64_decode($value['content'] ?? '', true);
            if (!is_string($content) || strlen($content) > self::MAX_BYTES) return null;
            $value['content'] = $content;
            return $value;
        } catch (\Throwable) { return null; }
    }

    public function put(string $uid, int $id, string $revision, array $value): void {
        if (strlen($value['content']) > self::MAX_BYTES || $this->shardBudget() === 0) return;
        $lock = 'library-cover-cache:' . hash('sha256', $uid) . ':' . substr(hash('sha256', (string)$id), 0, 2);
        $locked = false;
        try {
            $this->locks->acquireLock($lock, ILockingProvider::LOCK_EXCLUSIVE); $locked = true;
            $folder = $this->folder($uid, $id, true);
            $name = $id . '.json';
            $value['revision'] = $revision;
            $value['createdAt'] = time();
            $value['expires'] = time() + ($value['status'] === 'placeholder' ? 300 : $this->settings()['retentionHours'] * 3600);
            $value['content'] = base64_encode($value['content']);
            $content = json_encode($value, JSON_THROW_ON_ERROR);
            if (strlen($content) > $this->shardBudget()) return;
            $this->trim($folder, strlen($content), $name);
            if ($folder->fileExists($name)) $folder->getFile($name)->putContent($content);
            else $folder->newFile($name, $content);
            $this->db?->insertIfNotExist('*PREFIX*library_thumbnail_users',['user_id'=>$uid],['user_id']);
        } catch (\Throwable) { /* Cache failure must not prevent a cover response. */ }
        finally { if ($locked) { try { $this->locks->releaseLock($lock, ILockingProvider::LOCK_EXCLUSIVE); } catch (\Throwable) {} } }
    }

    /** Bound decoding before allocating a raster; normalize originals and oversized previews. */
    public function render(string $content, string $mime): ?array {
        if ($mime === 'image/svg+xml') return strlen($content) <= self::MAX_BYTES ? [$content, $mime] : null;
        $size = @getimagesizefromstring($content);
        if (!$size || $size[0] < 1 || $size[1] < 1 || $size[0] * $size[1] > self::MAX_PIXELS) return null;
        if ($size[0] <= 360 && $size[1] <= 520 && strlen($content) <= self::MAX_BYTES) return [$content, $size['mime']];
        if (!function_exists('imagecreatefromstring')) return null;
        $source = @imagecreatefromstring($content);
        if (!$source) return null;
        $scale = min(1, 360 / $size[0], 520 / $size[1]);
        $width = max(1, (int)round($size[0] * $scale)); $height = max(1, (int)round($size[1] * $scale));
        $target = imagecreatetruecolor($width, $height);
        try {
            imagefill($target, 0, 0, imagecolorallocate($target, 255, 255, 255));
            imagecopyresampled($target, $source, 0, 0, 0, 0, $width, $height, $size[0], $size[1]);
            foreach ([82, 65, 45] as $quality) {
                ob_start(); try { imagejpeg($target, null, $quality); $bytes = ob_get_contents(); } finally { ob_end_clean(); }
                if (is_string($bytes) && strlen($bytes) <= self::MAX_BYTES) return [$bytes, 'image/jpeg'];
            }
            return null;
        } finally { imagedestroy($source); imagedestroy($target); }
    }

    public function deleteUser(string $uid): void {
        // Fixed shard count; no unbounded appdata directory traversal.
        $this->db?->executeStatement('DELETE FROM *PREFIX*library_thumbnail_users WHERE user_id=?',[$uid]);
        for ($i = 0; $i < 256; $i++) {
            try { $this->appData->getFolder('cover-v1-' . hash('sha256', $uid) . '-' . sprintf('%02x', $i))->delete(); }
            catch (NotFoundException) {}
        }
    }
}
