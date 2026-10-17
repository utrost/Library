<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;

/** Coalesces Nextcloud node events by owner and file or directory target. */
final class ScanChangeJournal {
    public const PAGE_SIZE = 400;
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

    /**
     * A hash cursor keeps each job's memory bounded. Wrap after the last hash so
     * targets changed during an earlier page are revisited on the next pass.
     * @return list<array{path:string,folder:bool,hash:string,generation:int}>
     */
    public function page(string $uid, string $afterHash = '', int $limit = self::PAGE_SIZE): array {
        $limit = max(1, min(self::PAGE_SIZE, $limit));
        if ($afterHash !== '' && preg_match('/^[a-f0-9]{64}$/D', $afterHash) !== 1) throw new \InvalidArgumentException('invalid_journal_cursor');
        $sql = 'SELECT path_hash,target_path,is_directory,generation FROM *PREFIX*library_scan_changes WHERE user_id = ?';
        $args = [$uid];
        if ($afterHash !== '') { $sql .= ' AND path_hash > ?'; $args[] = $afterHash; }
        $r = $this->db->executeQuery($sql . ' ORDER BY path_hash LIMIT ' . $limit, $args);
        $rows = [];
        while ($row = $r->fetch()) $rows[] = ['path' => (string)$row['target_path'], 'folder' => (bool)$row['is_directory'], 'hash' => (string)$row['path_hash'], 'generation' => (int)$row['generation']];
        $r->closeCursor();
        if ($rows === [] && $afterHash !== '') return $this->page($uid, '', $limit);
        return $rows;
    }

    /** Compatibility helper for bounded read-only diagnostics. */
    public function snapshot(string $uid): array { return $this->page($uid); }

    public function hasPending(string $uid): bool {
        $r = $this->db->executeQuery('SELECT path_hash FROM *PREFIX*library_scan_changes WHERE user_id=? LIMIT 1', [$uid]);
        $pending = $r->fetchOne() !== false;
        $r->closeCursor();
        return $pending;
    }

    /** Remove only generations captured before a successful scan. */
    public function acknowledge(string $uid, array $snapshot): void {
        $byGeneration = [];
        foreach ($snapshot as $row) $byGeneration[(int)$row['generation']][] = (string)$row['hash'];
        foreach ($byGeneration as $generation => $hashes) {
            foreach (array_chunk($hashes, self::PAGE_SIZE) as $batch) {
                $this->db->executeStatement(
                    'DELETE FROM *PREFIX*library_scan_changes WHERE user_id=? AND generation=? AND path_hash IN ('
                    . implode(',', array_fill(0, count($batch), '?')) . ')',
                    [$uid, (int)$generation, ...$batch],
                );
            }
        }
    }
}
