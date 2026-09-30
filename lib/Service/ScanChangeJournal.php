<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;

/** Coalesces Nextcloud node events by owner and file or directory target. */
final class ScanChangeJournal {
    public function __construct(private IDBConnection $db) {}

    public function recordNodePath(string $nodePath, bool $folder = false, ?string $mimeType = null): void {
        if (!preg_match('~^/([^/]+)/files(?:/(.*))?$~uD', $nodePath, $matches)) return;
        $uid = $matches[1];
        $relative = '/' . ($matches[2] ?? '');
        $directory = dirname($relative);
        if ($directory === '.' || $directory === '\\') $directory = '/';
        if (!$folder && !in_array(strtolower(pathinfo($relative, PATHINFO_EXTENSION)), ['pdf','epub','cbz','opf'], true)
            && !in_array($mimeType, ['application/pdf','application/epub+zip','application/comicbook+zip','application/x-cbz','application/oebps-package+xml'], true)) return;
        if ($folder || basename($relative) === 'metadata.opf') $this->recordDirectory($uid, $directory);
        else $this->recordTarget($uid, $relative, false);
    }

    public function recordDirectory(string $uid, string $directory): void {
        $this->recordTarget($uid, $directory, true);
    }

    private function recordTarget(string $uid, string $directory, bool $folder): void {
        if ($uid === '' || $directory === '' || $directory[0] !== '/') return;
        // A path too long for the journal safely degrades to the owner's root.
        if (mb_strlen($directory) > 1024) { $directory = '/'; $folder = true; }
        $r = $this->db->executeQuery('SELECT path FROM *PREFIX*library_roots WHERE user_id = ? AND enabled = 1', [$uid]);
        $relevant = false;
        while ($row = $r->fetch()) {
            $root = rtrim((string)$row['path'], '/') ?: '/';
            if ($root === '/' || $directory === '/' || $directory === $root
                || str_starts_with($directory, $root . '/') || str_starts_with($root, rtrim($directory, '/') . '/')) {
                $relevant = true; break;
            }
        }
        $r->closeCursor();
        if (!$relevant) return;
        $hash = hash('sha256', ($folder ? 'd:' : 'f:') . $directory);
        // Each event makes one atomic generation transition. A snapshot between
        // insert and a separate increment would otherwise be able to lose an event.
        if ($this->db->executeStatement('UPDATE *PREFIX*library_scan_changes SET generation = generation + 1 WHERE user_id = ? AND path_hash = ?', [$uid, $hash]) > 0) return;
        if ($this->db->insertIfNotExist('*PREFIX*library_scan_changes',
            ['user_id' => $uid, 'path_hash' => $hash, 'target_path' => $directory, 'is_directory' => $folder ? 1 : 0, 'generation' => 1],
            ['user_id', 'path_hash']) > 0) return;
        // Another writer inserted this target after our first update.
        $this->db->executeStatement('UPDATE *PREFIX*library_scan_changes SET generation = generation + 1 WHERE user_id = ? AND path_hash = ?', [$uid, $hash]);
    }

    /** @return list<array{path:string,folder:bool,hash:string,generation:int}> */
    public function snapshot(string $uid): array {
        $r = $this->db->executeQuery('SELECT path_hash,target_path,is_directory,generation FROM *PREFIX*library_scan_changes WHERE user_id = ? ORDER BY target_path', [$uid]);
        $rows = [];
        while ($row = $r->fetch()) $rows[] = ['path' => (string)$row['target_path'], 'folder' => (bool)$row['is_directory'], 'hash' => (string)$row['path_hash'], 'generation' => (int)$row['generation']];
        $r->closeCursor();
        return $rows;
    }

    /** Remove only generations captured before a successful scan. */
    public function acknowledge(string $uid, array $snapshot): void {
        foreach ($snapshot as $row) {
            $this->db->executeStatement('DELETE FROM *PREFIX*library_scan_changes WHERE user_id = ? AND path_hash = ? AND generation = ?', [$uid, $row['hash'], $row['generation']]);
        }
    }
}
