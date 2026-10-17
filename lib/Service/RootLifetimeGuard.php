<?php
declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\IDBConnection;

/** Called inside a transaction before scanner writes that depend on a root. */
final class RootLifetimeGuard {
    /** Duplicate snapshot workers use the first root as their account lock. */
    public static function lockFirst(IDBConnection $db, string $userId): void {
        $result = $db->executeQuery(
            'SELECT id FROM *PREFIX*library_roots WHERE user_id=? ORDER BY id LIMIT 1',
            [$userId],
        );
        $first = $result->fetchOne();
        $result->closeCursor();
        if ($first !== false) self::lock($db, $userId, (int)$first);
    }

    public static function lock(IDBConnection $db, string $userId, int $rootId): void {
        if ($db->getDatabaseProvider() === 'sqlite') {
            // SQLite has no row locks; force the write lock before checking existence.
            $db->executeStatement('UPDATE *PREFIX*library_roots SET id=id WHERE user_id=? AND id=?', [$userId, $rootId]);
        }
        $sql = 'SELECT id FROM *PREFIX*library_roots WHERE user_id=? AND id=?';
        if ($db->getDatabaseProvider() !== 'sqlite') $sql .= ' FOR UPDATE';
        $result = $db->executeQuery($sql, [$userId, $rootId]);
        $found = $result->fetch() !== false;
        $result->closeCursor();
        if (!$found) throw new \OutOfBoundsException('root_not_found');
    }
}
