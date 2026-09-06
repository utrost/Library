<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\IDBConnection;

final class RootService {
    public function __construct(
        private IDBConnection $db,
    ) {
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function listRoots(string $userId): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('*')
            ->from('library_roots')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->orderBy('id', 'ASC')
            ->executeQuery();

        $roots = [];
        while ($row = $result->fetch()) {
            $roots[] = $this->normalizeRow($row);
        }
        $result->closeCursor();

        return $roots;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function listEnabledRoots(string $userId): array {
        return array_values(array_filter(
            $this->listRoots($userId),
            static fn (array $root): bool => (bool)$root['enabled'],
        ));
    }

    public function saveRoot(string $userId, string $path, ?string $label = null, bool $enabled = true): array {
        $normalizedPath = $this->normalizePath($path);
        $now = time();

        $existing = $this->findByPath($userId, $normalizedPath);
        if ($existing !== null) {
            $qb = $this->db->getQueryBuilder();
            $qb->update('library_roots')
                ->set('label', $qb->createNamedParameter($this->normalizeLabel($label)))
                ->set('enabled', $qb->createNamedParameter($enabled ? 1 : 0))
                ->set('updated_at', $qb->createNamedParameter($now))
                ->where($qb->expr()->eq('id', $qb->createNamedParameter($existing['id'])))
                ->executeStatement();
            return $this->findByPath($userId, $normalizedPath) ?? $existing;
        }

        $qb = $this->db->getQueryBuilder();
        $qb->insert('library_roots')
            ->values([
                'user_id' => $qb->createNamedParameter($userId),
                'path' => $qb->createNamedParameter($normalizedPath),
                'label' => $qb->createNamedParameter($this->normalizeLabel($label)),
                'enabled' => $qb->createNamedParameter($enabled ? 1 : 0),
                'last_scan_at' => $qb->createNamedParameter(null),
                'created_at' => $qb->createNamedParameter($now),
                'updated_at' => $qb->createNamedParameter($now),
            ])
            ->executeStatement();

        return $this->findByPath($userId, $normalizedPath) ?? [
            'id' => 0,
            'userId' => $userId,
            'path' => $normalizedPath,
            'label' => $this->normalizeLabel($label),
            'enabled' => $enabled,
            'lastScanAt' => null,
        ];
    }

    public function updateRoot(string $userId, int $rootId, string $path, ?string $label = null): void {
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_roots')
            ->set('path', $qb->createNamedParameter($this->normalizePath($path)))
            ->set('label', $qb->createNamedParameter($this->normalizeLabel($label)))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($rootId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    public function setRootEnabled(string $userId, int $rootId, bool $enabled): void {
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_roots')
            ->set('enabled', $qb->createNamedParameter($enabled ? 1 : 0))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($rootId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    public function deleteRoot(string $userId, int $rootId): void {
        $libraryFileIds = [];
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('id')
            ->from('library_files')
            ->where($qb->expr()->eq('root_id', $qb->createNamedParameter($rootId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();
        while ($row = $result->fetch()) {
            $libraryFileIds[] = (int)$row['id'];
        }
        $result->closeCursor();

        foreach ($libraryFileIds as $libraryFileId) {
            $qb = $this->db->getQueryBuilder();
            $qb->delete('library_items')
                ->where($qb->expr()->eq('library_file_id', $qb->createNamedParameter($libraryFileId)))
                ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
                ->executeStatement();
        }

        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_files')
            ->where($qb->expr()->eq('root_id', $qb->createNamedParameter($rootId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_roots')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($rootId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    public function findRoot(string $userId, int $rootId): ?array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('*')
            ->from('library_roots')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($rootId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();

        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return null;
        }

        return $this->normalizeRow($row);
    }

    public function markScanned(int $rootId): void {
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_roots')
            ->set('last_scan_at', $qb->createNamedParameter(time()))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($rootId)))
            ->executeStatement();
    }

    private function findByPath(string $userId, string $path): ?array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('*')
            ->from('library_roots')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('path', $qb->createNamedParameter($path)))
            ->executeQuery();

        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return null;
        }

        return $this->normalizeRow($row);
    }

    private function normalizePath(string $path): string {
        $trimmed = trim($path);
        if ($trimmed === '') {
            return '/';
        }
        return '/' . trim($trimmed, '/');
    }

    private function normalizeLabel(?string $label): ?string {
        $normalized = trim((string)$label);
        return $normalized === '' ? null : $normalized;
    }

    private function normalizeRow(array $row): array {
        return [
            'id' => (int)$row['id'],
            'userId' => (string)$row['user_id'],
            'path' => (string)$row['path'],
            'label' => $row['label'] !== null ? (string)$row['label'] : null,
            'enabled' => (bool)$row['enabled'],
            'lastScanAt' => $row['last_scan_at'] !== null ? (int)$row['last_scan_at'] : null,
        ];
    }
}
