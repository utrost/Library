<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\IDBConnection;

final class SavedCollectionService {
    private const ALLOWED_FILTERS = [
        'q',
        'type',
        'publication',
        'year',
        'creator',
        'format',
        'tag',
        'shelf',
        'status',
        'workflowStatus',
        'genre',
        'classification',
        'scannerConflicts',
        'starred',
        'needsMetadata',
        'coverReview',
        'noCreator',
        'noPublication',
        'weakMetadata',
        'unreviewedImports',
        'sort',
    ];

    public function __construct(
        private IDBConnection $db,
    ) {
    }

    /**
     * @return array<int, array{id:int,name:string,filters:array<string, string>,createdAt:int,updatedAt:int}>
     */
    public function listCollections(string $userId): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('*')
            ->from('library_saved_collections')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->orderBy('name', 'ASC')
            ->executeQuery();

        $collections = [];
        while ($row = $result->fetch()) {
            $collections[] = $this->normalizeRow($row);
        }
        $result->closeCursor();
        return $collections;
    }

    public function saveCollection(string $userId, string $name, array $filters): array {
        $name = $this->normalizeName($name);
        $filters = $this->normalizeFilters($filters);
        if ($name === '' || $filters === []) {
            return ['id' => 0, 'name' => $name, 'filters' => $filters, 'createdAt' => 0, 'updatedAt' => 0];
        }

        $now = time();
        $existing = $this->findByName($userId, $name);
        $encoded = json_encode($filters, JSON_THROW_ON_ERROR);
        if ($existing !== null) {
            $qb = $this->db->getQueryBuilder();
            $qb->update('library_saved_collections')
                ->set('filters_json', $qb->createNamedParameter($encoded))
                ->set('updated_at', $qb->createNamedParameter($now))
                ->where($qb->expr()->eq('id', $qb->createNamedParameter((int)$existing['id'])))
                ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
                ->executeStatement();
            return $this->findByName($userId, $name) ?? $existing;
        }

        $qb = $this->db->getQueryBuilder();
        $qb->insert('library_saved_collections')
            ->values([
                'user_id' => $qb->createNamedParameter($userId),
                'name' => $qb->createNamedParameter($name),
                'filters_json' => $qb->createNamedParameter($encoded),
                'created_at' => $qb->createNamedParameter($now),
                'updated_at' => $qb->createNamedParameter($now),
            ])
            ->executeStatement();

        return $this->findByName($userId, $name) ?? ['id' => 0, 'name' => $name, 'filters' => $filters, 'createdAt' => $now, 'updatedAt' => $now];
    }

    public function deleteCollection(string $userId, int $collectionId): void {
        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_saved_collections')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($collectionId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    /**
     * @param array<string, mixed> $filters
     * @return array<string, string>
     */
    public function normalizeFilters(array $filters): array {
        $normalized = [];
        foreach (self::ALLOWED_FILTERS as $key) {
            $value = trim((string)($filters[$key] ?? ''));
            if ($value === '' || ($key === 'sort' && $value === 'title')) {
                continue;
            }
            $normalized[$key] = mb_substr($value, 0, 255);
        }
        ksort($normalized);
        return $normalized;
    }

    private function findByName(string $userId, string $name): ?array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('*')
            ->from('library_saved_collections')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('name', $qb->createNamedParameter($name)))
            ->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        return $row === false ? null : $this->normalizeRow($row);
    }

    private function normalizeName(string $name): string {
        return mb_substr(trim(preg_replace('/\s+/', ' ', $name) ?? ''), 0, 120);
    }

    /**
     * @return array{id:int,name:string,filters:array<string, string>,createdAt:int,updatedAt:int}
     */
    private function normalizeRow(array $row): array {
        $filters = json_decode((string)($row['filters_json'] ?? '{}'), true);
        return [
            'id' => (int)$row['id'],
            'name' => (string)$row['name'],
            'filters' => is_array($filters) ? $this->normalizeFilters($filters) : [],
            'createdAt' => (int)$row['created_at'],
            'updatedAt' => (int)$row['updated_at'],
        ];
    }
}
