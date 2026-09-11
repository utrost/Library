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
            $previousScanStatus = $existing['scanStatus'];
            $previousMetadataInputFingerprint = $existing['metadataInputFingerprint'];
            $previousMetadataExtractorRevision = $existing['metadataExtractorRevision'];
            $pathChanged = (string)$existing['cachedPath'] !== (string)$file['cachedPath'] || (int)$existing['rootId'] !== $rootId;
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
            $updated = $this->findByFileId($userId, $fileId) ?? $existing;
            $updated['changeStatus'] = $pathChanged ? 'path_updated' : 'unchanged';
            $updated['previousScanStatus'] = $previousScanStatus;
            $updated['previousMetadataInputFingerprint'] = $previousMetadataInputFingerprint;
            $updated['previousMetadataExtractorRevision'] = $previousMetadataExtractorRevision;
            return $updated;
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

        $created = $this->findByFileId($userId, $fileId);
        if ($created === null) {
            throw new \RuntimeException('Inserted library file could not be read back');
        }
        $created['changeStatus'] = 'added';
        $created['previousScanStatus'] = null;
        $created['previousMetadataInputFingerprint'] = null;
        $created['previousMetadataExtractorRevision'] = null;
        return $created;
    }

    public function markMetadataProcessed(string $userId, int $libraryFileId, string $fingerprint, string $revision): void {
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_files')
            ->set('metadata_input_fingerprint', $qb->createNamedParameter($fingerprint))
            ->set('metadata_extractor_revision', $qb->createNamedParameter($revision))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($libraryFileId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
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

    public function markMissingRecheckError(string $userId, int $libraryFileId, string $message): void {
        $message = str_starts_with($message, 'missing recheck failed') ? $message : 'missing recheck failed: ' . $message;
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_files')
            ->set('scan_status', $qb->createNamedParameter('missing'))
            ->set('scan_error', $qb->createNamedParameter(mb_substr($message, 0, 1024)))
            ->set('last_scanned_at', $qb->createNamedParameter(time()))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($libraryFileId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    /**
     * @param array<int, int> $seenLibraryFileIds
     */
    public function markMissingExcept(string $userId, int $rootId, array $seenLibraryFileIds): int {
        $seen = array_flip(array_map('intval', $seenLibraryFileIds));
        $missing = 0;
        foreach ($this->libraryFileIdsForRoot($userId, $rootId) as $libraryFileId) {
            if (isset($seen[$libraryFileId])) {
                continue;
            }

            $qb = $this->db->getQueryBuilder();
            $qb->update('library_files')
                ->set('scan_status', $qb->createNamedParameter('missing'))
                ->set('scan_error', $qb->createNamedParameter('File was not found during the latest root scan'))
                ->set('updated_at', $qb->createNamedParameter(time()))
                ->where($qb->expr()->eq('id', $qb->createNamedParameter($libraryFileId)))
                ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
                ->andWhere($qb->expr()->neq('scan_status', $qb->createNamedParameter('sidecar')))
                ->executeStatement();
            $missing++;
        }
        return $missing;
    }

    /**
     * @return array<int, int>
     */
    private function libraryFileIdsForRoot(string $userId, int $rootId): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('id')
            ->from('library_files')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('root_id', $qb->createNamedParameter($rootId)))
            ->executeQuery();

        $ids = [];
        while ($row = $result->fetch()) {
            $ids[] = (int)$row['id'];
        }
        $result->closeCursor();
        return $ids;
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
            $files[] = $this->normalizeFileRow($row, $rootLabels);
        }
        $result->closeCursor();

        return $files;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function metadataErrorFiles(string $userId): array {
        return $this->filesWithScanStatus($userId, 'metadata_error');
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function missingFiles(string $userId): array {
        $rootLabels = $this->rootLabelsById($userId);
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('id', 'root_id', 'file_id', 'cached_path', 'mime_type', 'extension', 'scan_status', 'scan_error', 'last_scanned_at')
            ->from('library_files')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('scan_status', $qb->createNamedParameter('missing')))
            ->orderBy('last_scanned_at', 'ASC')
            ->executeQuery();

        $files = [];
        while ($row = $result->fetch()) {
            $files[] = $this->normalizeFileRow($row, $rootLabels);
        }
        $result->closeCursor();

        return $files;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private function filesWithScanStatus(string $userId, string $scanStatus): array {
        $rootLabels = $this->rootLabelsById($userId);
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('id', 'root_id', 'file_id', 'cached_path', 'mime_type', 'extension', 'scan_status', 'scan_error', 'last_scanned_at')
            ->from('library_files')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('scan_status', $qb->createNamedParameter($scanStatus)))
            ->orderBy('last_scanned_at', 'ASC')
            ->executeQuery();

        $files = [];
        while ($row = $result->fetch()) {
            $files[] = $this->normalizeFileRow($row, $rootLabels);
        }
        $result->closeCursor();

        return $files;
    }

    /**
     * @param array<string, mixed> $row
     * @param array<int, string> $rootLabels
     * @return array<string, mixed>
     */
    private function normalizeFileRow(array $row, array $rootLabels): array {
        $rootId = (int)$row['root_id'];
        return [
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
        $result = $qb->select('id', 'root_id', 'file_id', 'cached_path', 'mime_type', 'extension', 'etag', 'mtime', 'size', 'scan_status', 'scan_error', 'metadata_input_fingerprint', 'metadata_extractor_revision', 'last_scanned_at')
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
            'etag' => $row['etag'] !== null ? (string)$row['etag'] : '',
            'mtime' => $row['mtime'] !== null ? (int)$row['mtime'] : null,
            'size' => $row['size'] !== null ? (int)$row['size'] : null,
            'scanStatus' => (string)$row['scan_status'],
            'metadataInputFingerprint' => $row['metadata_input_fingerprint'] !== null ? (string)$row['metadata_input_fingerprint'] : null,
            'metadataExtractorRevision' => $row['metadata_extractor_revision'] !== null ? (string)$row['metadata_extractor_revision'] : null,
            'scanError' => $row['scan_error'] !== null ? (string)$row['scan_error'] : '',
            'lastScannedAt' => (int)$row['last_scanned_at'],
        ];
    }
}
