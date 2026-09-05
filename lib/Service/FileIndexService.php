<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\IDBConnection;

final class FileIndexService {
    public function __construct(
        private IDBConnection $db,
    ) {
    }

    /**
     * @param array<string, mixed> $file
     */
    public function upsertFile(string $userId, int $rootId, array $file): array {
        $now = time();
        $fileId = (int)$file['fileId'];

        $existing = $this->findByFileId($userId, $fileId);
        if ($existing !== null) {
            $qb = $this->db->getQueryBuilder();
            $qb->update('library_files')
                ->set('root_id', $qb->createNamedParameter($rootId))
                ->set('cached_path', $qb->createNamedParameter((string)$file['cachedPath']))
                ->set('mime_type', $qb->createNamedParameter((string)$file['mimeType']))
                ->set('extension', $qb->createNamedParameter($file['extension']))
                ->set('etag', $qb->createNamedParameter($file['etag']))
                ->set('mtime', $qb->createNamedParameter($file['mtime']))
                ->set('size', $qb->createNamedParameter($file['size']))
                ->set('scan_status', $qb->createNamedParameter('indexed'))
                ->set('scan_error', $qb->createNamedParameter(null))
                ->set('last_scanned_at', $qb->createNamedParameter($now))
                ->set('updated_at', $qb->createNamedParameter($now))
                ->where($qb->expr()->eq('id', $qb->createNamedParameter($existing['id'])))
                ->executeStatement();
            return $this->findByFileId($userId, $fileId) ?? $existing;
        }

        $qb = $this->db->getQueryBuilder();
        $qb->insert('library_files')
            ->values([
                'user_id' => $qb->createNamedParameter($userId),
                'root_id' => $qb->createNamedParameter($rootId),
                'file_id' => $qb->createNamedParameter($fileId),
                'cached_path' => $qb->createNamedParameter((string)$file['cachedPath']),
                'mime_type' => $qb->createNamedParameter((string)$file['mimeType']),
                'extension' => $qb->createNamedParameter($file['extension']),
                'etag' => $qb->createNamedParameter($file['etag']),
                'mtime' => $qb->createNamedParameter($file['mtime']),
                'size' => $qb->createNamedParameter($file['size']),
                'scan_status' => $qb->createNamedParameter('indexed'),
                'scan_error' => $qb->createNamedParameter(null),
                'last_scanned_at' => $qb->createNamedParameter($now),
                'created_at' => $qb->createNamedParameter($now),
                'updated_at' => $qb->createNamedParameter($now),
            ])
            ->executeStatement();

        return $this->findByFileId($userId, $fileId) ?? [
            'id' => 0,
            'fileId' => $fileId,
            'cachedPath' => (string)$file['cachedPath'],
            'mimeType' => (string)$file['mimeType'],
            'extension' => (string)$file['extension'],
        ];
    }

    public function markAsSidecar(string $userId, int $libraryFileId): void {
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_files')
            ->set('scan_status', $qb->createNamedParameter('sidecar'))
            ->set('scan_error', $qb->createNamedParameter(null))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($libraryFileId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    public function markScanError(string $userId, int $libraryFileId, string $message): void {
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_files')
            ->set('scan_status', $qb->createNamedParameter('metadata_error'))
            ->set('scan_error', $qb->createNamedParameter(mb_substr($message, 0, 1024)))
            ->set('last_scanned_at', $qb->createNamedParameter(time()))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($libraryFileId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function listFiles(string $userId): array {
        $rootLabels = $this->rootLabelsById($userId);

        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('id', 'root_id', 'file_id', 'cached_path', 'mime_type', 'extension', 'scan_status', 'scan_error', 'last_scanned_at')
            ->from('library_files')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->orderBy('cached_path', 'ASC')
            ->executeQuery();

        $files = [];
        while ($row = $result->fetch()) {
            $rootId = (int)$row['root_id'];
            $files[] = [
                'id' => (int)$row['id'],
                'rootId' => $rootId,
                'rootLabel' => $rootLabels[$rootId] ?? ('root #' . $rootId),
                'fileId' => (int)$row['file_id'],
                'cachedPath' => (string)$row['cached_path'],
                'mimeType' => (string)$row['mime_type'],
                'extension' => $row['extension'] !== null ? (string)$row['extension'] : '',
                'scanStatus' => (string)$row['scan_status'],
                'scanError' => $row['scan_error'] !== null ? (string)$row['scan_error'] : '',
                'lastScannedAt' => (int)$row['last_scanned_at'],
            ];
        }
        $result->closeCursor();

        return $files;
    }

    private function rootLabelsById(string $userId): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('id', 'label', 'path')
            ->from('library_roots')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();

        $labels = [];
        while ($row = $result->fetch()) {
            $labels[(int)$row['id']] = $row['label'] ?: (string)$row['path'];
        }
        $result->closeCursor();

        return $labels;
    }

    public function findByFileId(string $userId, int $fileId): ?array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('id', 'root_id', 'file_id', 'cached_path', 'mime_type', 'extension', 'scan_status', 'scan_error', 'last_scanned_at')
            ->from('library_files')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('file_id', $qb->createNamedParameter($fileId)))
            ->executeQuery();

        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return null;
        }

        return [
            'id' => (int)$row['id'],
            'rootId' => (int)$row['root_id'],
            'fileId' => (int)$row['file_id'],
            'cachedPath' => (string)$row['cached_path'],
            'mimeType' => (string)$row['mime_type'],
            'extension' => $row['extension'] !== null ? (string)$row['extension'] : '',
            'scanStatus' => (string)$row['scan_status'],
            'scanError' => $row['scan_error'] !== null ? (string)$row['scan_error'] : '',
            'lastScannedAt' => (int)$row['last_scanned_at'],
        ];
    }
}
