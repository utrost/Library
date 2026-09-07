<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

final class ItemService {
    private const PUBLICATION_TYPES = [
        'book',
        'comic',
        'magazine',
        'journal',
        'manual',
        'catalogue',
        'other',
    ];

    private const PUBLICATION_FIELDS = [
        'publicationType',
        'title',
        'subtitle',
        'creators',
        'publication',
        'publicationDate',
        'language',
        'publisher',
    ];

    public function __construct(
        private IDBConnection $db,
    ) {
    }

    public function ensureItemForFile(string $userId, array $file, array $metadata = []): void {
        $metadataCandidate = $this->metadataCandidate($file, $metadata);
        $existing = $this->findByLibraryFileId($userId, (int)$file['id']);
        if ($existing !== null) {
            if ((bool)$existing['user_edited']) {
                $this->refreshScannerCandidatesForUserEditedItem($userId, (int)$existing['id'], $metadataCandidate);
                return;
            }

            $this->refreshInferredItem($userId, (int)$existing['id'], $file, $metadata);
            return;
        }

        $now = time();
        $qb = $this->db->getQueryBuilder();
        $qb->insert('library_items')
            ->values([
                'user_id' => $qb->createNamedParameter($userId),
                'library_file_id' => $qb->createNamedParameter((int)$file['id']),
                'publication_type' => $qb->createNamedParameter($metadataCandidate['publicationType']),
                'title' => $qb->createNamedParameter($metadataCandidate['title']),
                'subtitle' => $qb->createNamedParameter($metadataCandidate['subtitle']),
                'creators' => $qb->createNamedParameter($metadataCandidate['creators']),
                'publication' => $qb->createNamedParameter($metadataCandidate['publication']),
                'publication_date' => $qb->createNamedParameter($metadataCandidate['publicationDate']),
                'language' => $qb->createNamedParameter($metadataCandidate['language']),
                'publisher' => $qb->createNamedParameter($metadataCandidate['publisher']),
                'starred' => $qb->createNamedParameter(0),
                'last_opened_at' => $qb->createNamedParameter(null),
                'metadata_source' => $qb->createNamedParameter($metadataCandidate['metadataSource']),
                'field_sources' => $qb->createNamedParameter(json_encode($metadataCandidate['fieldSources'], JSON_THROW_ON_ERROR)),
                'field_values' => $qb->createNamedParameter(json_encode($metadataCandidate['fieldValues'], JSON_THROW_ON_ERROR)),
                'user_edited' => $qb->createNamedParameter(0),
                'created_at' => $qb->createNamedParameter($now),
                'updated_at' => $qb->createNamedParameter($now),
            ])
            ->executeStatement();
    }

    public function deleteItemForLibraryFile(string $userId, int $libraryFileId): void {
        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_items')
            ->where($qb->expr()->eq('library_file_id', $qb->createNamedParameter($libraryFileId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('user_edited', $qb->createNamedParameter(0)))
            ->executeStatement();
    }

    public function hasUserEditedItemForLibraryFile(string $userId, int $libraryFileId): bool {
        $existing = $this->findByLibraryFileId($userId, $libraryFileId);
        return $existing !== null && (bool)$existing['user_edited'];
    }

    public function forgetMissingItem(string $userId, int $itemId): bool {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('i.library_file_id', 'f.scan_status')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('i.id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();

        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false || (string)$row['scan_status'] !== 'missing') {
            return false;
        }

        $libraryFileId = (int)$row['library_file_id'];

        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_items')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_files')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($libraryFileId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('scan_status', $qb->createNamedParameter('missing')))
            ->executeStatement();

        return true;
    }

    public function updateItem(string $userId, int $itemId, array $metadata): void {
        $now = time();
        $publicationType = $this->normalizePublicationType((string)($metadata['publicationType'] ?? 'other'));
        $title = trim((string)($metadata['title'] ?? '')) ?: 'Untitled publication';
        $existingProvenance = $this->existingFieldProvenance($userId, $itemId);

        $qb = $this->db->getQueryBuilder();
        $qb->update('library_items')
            ->set('publication_type', $qb->createNamedParameter($publicationType))
            ->set('title', $qb->createNamedParameter($title))
            ->set('subtitle', $qb->createNamedParameter($this->nullableString($metadata['subtitle'] ?? null)))
            ->set('creators', $qb->createNamedParameter($this->nullableString($metadata['creators'] ?? null)))
            ->set('publication', $qb->createNamedParameter($this->nullableString($metadata['publication'] ?? null)))
            ->set('publication_date', $qb->createNamedParameter($this->nullableString($metadata['publicationDate'] ?? null)))
            ->set('language', $qb->createNamedParameter($this->nullableString($metadata['language'] ?? null)))
            ->set('publisher', $qb->createNamedParameter($this->nullableString($metadata['publisher'] ?? null)))
            ->set('metadata_source', $qb->createNamedParameter('user'))
            ->set('field_sources', $qb->createNamedParameter(json_encode($existingProvenance['fieldSources'], JSON_THROW_ON_ERROR)))
            ->set('field_values', $qb->createNamedParameter(json_encode($existingProvenance['fieldValues'], JSON_THROW_ON_ERROR)))
            ->set('user_edited', $qb->createNamedParameter(1))
            ->set('updated_at', $qb->createNamedParameter($now))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    public function setStarred(string $userId, int $itemId, bool $starred): bool {
        $qb = $this->db->getQueryBuilder();
        $affected = $qb->update('library_items')
            ->set('starred', $qb->createNamedParameter($starred ? 1 : 0))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        return $affected > 0;
    }

    public function markOpened(string $userId, int $itemId): ?array {
        $now = time();
        $qb = $this->db->getQueryBuilder();
        $affected = $qb->update('library_items')
            ->set('last_opened_at', $qb->createNamedParameter($now))
            ->set('updated_at', $qb->createNamedParameter($now))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        return $affected > 0 ? $this->findItem($userId, $itemId) : null;
    }

    private function setLastOpenedAtForImport(string $userId, int $itemId, mixed $lastOpenedAt): bool {
        $timestamp = is_numeric($lastOpenedAt) ? max(0, (int)$lastOpenedAt) : 0;
        $value = $timestamp > 0 ? $timestamp : null;
        $qb = $this->db->getQueryBuilder();
        $affected = $qb->update('library_items')
            ->set('last_opened_at', $qb->createNamedParameter($value))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        return $affected > 0;
    }

    public function resetFieldToScannerCandidate(string $userId, int $itemId, string $field): bool {
        $column = $this->databaseColumnForField($field);
        if ($column === null) {
            return false;
        }

        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('field_sources', 'field_values')
            ->from('library_items')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return false;
        }

        $candidateValues = $this->decodeJsonMap($row['field_values'] ?? null);
        $candidateSources = $this->decodeJsonMap($row['field_sources'] ?? null);
        if (!array_key_exists($field, $candidateValues)) {
            return false;
        }

        $candidateSources[$field] = $candidateSources[$field] ?? 'scanner';
        $candidateValues[$field] = (string)$candidateValues[$field];

        $qb = $this->db->getQueryBuilder();
        $affected = $qb->update('library_items')
            ->set($column, $qb->createNamedParameter($this->databaseValueForField($field, $candidateValues[$field])))
            ->set('metadata_source', $qb->createNamedParameter('mixed'))
            ->set('user_edited', $qb->createNamedParameter(1))
            ->set('field_sources', $qb->createNamedParameter(json_encode($candidateSources, JSON_THROW_ON_ERROR)))
            ->set('field_values', $qb->createNamedParameter(json_encode($candidateValues, JSON_THROW_ON_ERROR)))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        return $affected > 0;
    }

    public function resetAllFieldsToScannerCandidates(string $userId, int $itemId): bool {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('field_sources', 'field_values')
            ->from('library_items')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return false;
        }

        $candidateValues = $this->decodeJsonMap($row['field_values'] ?? null);
        $candidateSources = $this->decodeJsonMap($row['field_sources'] ?? null);
        $qb = $this->db->getQueryBuilder();
        $update = $qb->update('library_items');
        $hasCandidate = false;
        foreach (self::PUBLICATION_FIELDS as $field) {
            if (!array_key_exists($field, $candidateValues)) {
                continue;
            }
            $column = $this->databaseColumnForField($field);
            if ($column === null) {
                continue;
            }
            $candidateSources[$field] = $candidateSources[$field] ?? 'scanner';
            $candidateValues[$field] = (string)$candidateValues[$field];
            $update->set($column, $qb->createNamedParameter($this->databaseValueForField($field, $candidateValues[$field])));
            $hasCandidate = true;
        }
        if (!$hasCandidate) {
            return false;
        }

        $affected = $update
            ->set('metadata_source', $qb->createNamedParameter('mixed'))
            ->set('user_edited', $qb->createNamedParameter(1))
            ->set('field_sources', $qb->createNamedParameter(json_encode($candidateSources, JSON_THROW_ON_ERROR)))
            ->set('field_values', $qb->createNamedParameter(json_encode($candidateValues, JSON_THROW_ON_ERROR)))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        return $affected > 0;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function listItems(string $userId): array {
        return $this->queryCatalogue($userId, [], ['page' => 1, 'limit' => 500])['items'];
    }

    /**
     * @param array{q?:string,type?:string,publication?:string,year?:string,creator?:string,format?:string,tag?:string,shelf?:string,status?:string,starred?:string,sort?:string,taggedFileIds?:array<int, int>} $filters
     * @param array{page:int,limit:int} $pagination
     * @return array{items:array<int, array<string, mixed>>,total:int,facets:array{shelves:array<int, string>,formats:array<int, string>,publications:array<int, string>,publicationSummaries:array<int, array{publication:string,itemCount:int}>,publicationYears:array<int, string>,creators:array<int, string>,scanStatuses:array<int, string>}}
     */
    public function queryCatalogue(string $userId, array $filters, array $pagination): array {
        $page = max(1, (int)($pagination['page'] ?? 1));
        $limit = max(1, min(500, (int)($pagination['limit'] ?? 100)));
        $offset = ($page - 1) * $limit;

        $qb = $this->catalogueQueryBuilder($userId, $filters);
        $this->applyCatalogueSort($qb, (string)($filters['sort'] ?? 'title'));
        $result = $qb
            ->setFirstResult($offset)
            ->setMaxResults($limit)
            ->executeQuery();

        $items = [];
        while ($row = $result->fetch()) {
            $items[] = $this->normalizeJoinedItemRow($row);
        }
        $result->closeCursor();

        return [
            'items' => $items,
            'total' => $this->countCatalogueItems($userId, $filters),
            'facets' => $this->catalogueFacets($userId),
        ];
    }

    public function findItem(string $userId, int $itemId): ?array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('i.id', 'i.library_file_id', 'i.publication_type', 'i.title', 'i.subtitle', 'i.creators', 'i.publication', 'i.publication_date', 'i.language', 'i.publisher', 'i.starred', 'i.last_opened_at', 'i.metadata_source', 'i.field_sources', 'i.field_values', 'i.user_edited', 'f.file_id', 'f.cached_path', 'f.mime_type', 'f.extension', 'f.scan_status', 'f.scan_error', 'r.label', 'r.path')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->innerJoin('f', 'library_roots', 'r', $qb->expr()->eq('f.root_id', 'r.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('i.id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')))
            ->executeQuery();

        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return null;
        }

        return $this->normalizeJoinedItemRow($row);
    }

    public function exportCorrectedMetadata(string $userId): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('i.id', 'i.library_file_id', 'i.publication_type', 'i.title', 'i.subtitle', 'i.creators', 'i.publication', 'i.publication_date', 'i.language', 'i.publisher', 'i.starred', 'i.last_opened_at', 'i.metadata_source', 'i.field_sources', 'i.field_values', 'i.user_edited', 'f.file_id', 'f.cached_path', 'f.mime_type', 'f.extension', 'f.scan_status', 'f.scan_error', 'r.label', 'r.path')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->innerJoin('f', 'library_roots', 'r', $qb->expr()->eq('f.root_id', 'r.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->orX(
                $qb->expr()->eq('i.user_edited', $qb->createNamedParameter(1)),
                $qb->expr()->eq('i.starred', $qb->createNamedParameter(1)),
                $qb->expr()->isNotNull('i.last_opened_at')
            ))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')))
            ->orderBy('i.title', 'ASC')
            ->executeQuery();

        $items = [];
        while ($row = $result->fetch()) {
            $item = $this->normalizeJoinedItemRow($row);
            $item['lastOpenedAt'] = (int)($item['lastOpenedAt'] ?? 0);
            $item['rootPath'] = (string)($row['path'] ?? '');
            $items[] = $item;
        }
        $result->closeCursor();

        return [
            'schemaVersion' => 1,
            'exportedAt' => gmdate(DATE_ATOM),
            'exportKind' => 'library-corrected-metadata',
            'itemCount' => count($items),
            'items' => $items,
        ];
    }

    public function previewCorrectedMetadataImport(string $userId, string $metadataJson): array {
        try {
            $payload = json_decode($metadataJson, true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return $this->emptyImportPreview(false, 'invalid_json');
        }
        if (!is_array($payload) || (string)($payload['exportKind'] ?? '') !== 'library-corrected-metadata' || !is_array($payload['items'] ?? null)) {
            return $this->emptyImportPreview(false, 'unsupported_export');
        }

        $previewItems = [];
        $matchedItems = 0;
        $missingItems = 0;
        $invalidItems = 0;
        $changedFields = 0;
        foreach ($payload['items'] as $importItem) {
            if (!is_array($importItem)) {
                $invalidItems++;
                continue;
            }
            $current = $this->findItemForImportPreview($userId, $importItem);
            if ($current === null) {
                $missingItems++;
                $previewItems[] = [
                    'status' => 'missing',
                    'cachedPath' => (string)($importItem['cachedPath'] ?? ''),
                    'changedFields' => [],
                ];
                continue;
            }

            $itemChangedFields = $this->changedImportFields($current, $importItem);
            $matchedItems++;
            $changedFields += count($itemChangedFields);
            $previewItems[] = [
                'status' => 'matched',
                'itemId' => (int)$current['id'],
                'libraryFileId' => (int)$current['libraryFileId'],
                'cachedPath' => (string)($current['cachedPath'] ?? ''),
                'changedFields' => $itemChangedFields,
            ];
        }

        return [
            'schemaVersion' => 1,
            'previewKind' => 'library-metadata-import-preview',
            'valid' => true,
            'error' => '',
            'totalItems' => count($payload['items']),
            'matchedItems' => $matchedItems,
            'missingItems' => $missingItems,
            'invalidItems' => $invalidItems,
            'changedFields' => $changedFields,
            'items' => $previewItems,
        ];
    }

    public function applyCorrectedMetadataImport(string $userId, string $metadataJson): array {
        try {
            $payload = json_decode($metadataJson, true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return $this->emptyImportApply(false, 'invalid_json');
        }
        if (!is_array($payload) || (string)($payload['exportKind'] ?? '') !== 'library-corrected-metadata' || !is_array($payload['items'] ?? null)) {
            return $this->emptyImportApply(false, 'unsupported_export');
        }

        $applyItems = [];
        $matchedItems = 0;
        $appliedItems = 0;
        $skippedItems = 0;
        $missingItems = 0;
        $invalidItems = 0;
        $changedFields = 0;
        foreach ($payload['items'] as $importItem) {
            if (!is_array($importItem)) {
                $invalidItems++;
                continue;
            }
            $current = $this->findItemForImportPreview($userId, $importItem);
            if ($current === null) {
                $missingItems++;
                $applyItems[] = [
                    'status' => 'missing',
                    'cachedPath' => (string)($importItem['cachedPath'] ?? ''),
                    'changedFields' => [],
                ];
                continue;
            }

            $itemChangedFields = $this->changedImportFields($current, $importItem);
            $matchedItems++;
            $changedFields += count($itemChangedFields);
            if ($itemChangedFields === []) {
                $skippedItems++;
                $applyItems[] = [
                    'status' => 'unchanged',
                    'itemId' => (int)$current['id'],
                    'libraryFileId' => (int)$current['libraryFileId'],
                    'cachedPath' => (string)($current['cachedPath'] ?? ''),
                    'changedFields' => [],
                ];
                continue;
            }

            $this->updateItem($userId, (int)$current['id'], $importItem);
            if (array_key_exists('starred', $importItem)) {
                $this->setStarred($userId, (int)$current['id'], (bool)$importItem['starred']);
            }
            if (array_key_exists('lastOpenedAt', $importItem)) {
                $this->setLastOpenedAtForImport($userId, (int)$current['id'], $importItem['lastOpenedAt']);
            }
            $appliedItems++;
            $applyItems[] = [
                'status' => 'applied',
                'itemId' => (int)$current['id'],
                'libraryFileId' => (int)$current['libraryFileId'],
                'cachedPath' => (string)($current['cachedPath'] ?? ''),
                'changedFields' => $itemChangedFields,
            ];
        }

        return [
            'schemaVersion' => 1,
            'applicationKind' => 'library-metadata-import-apply',
            'valid' => true,
            'error' => '',
            'totalItems' => count($payload['items']),
            'matchedItems' => $matchedItems,
            'appliedItems' => $appliedItems,
            'skippedItems' => $skippedItems,
            'missingItems' => $missingItems,
            'invalidItems' => $invalidItems,
            'changedFields' => $changedFields,
            'items' => $applyItems,
        ];
    }

    /**
     * @param array<string, mixed> $current
     * @param array<string, mixed> $importItem
     * @return array<int, string>
     */
    private function changedImportFields(array $current, array $importItem): array {
        $changedFields = [];
        foreach (self::PUBLICATION_FIELDS as $field) {
            if (array_key_exists($field, $importItem) && (string)($importItem[$field] ?? '') !== (string)($current[$field] ?? '')) {
                $changedFields[] = $field;
            }
        }
        if (array_key_exists('starred', $importItem) && (bool)$importItem['starred'] !== (bool)($current['starred'] ?? false)) {
            $changedFields[] = 'starred';
        }
        if (array_key_exists('lastOpenedAt', $importItem) && (int)($importItem['lastOpenedAt'] ?? 0) !== (int)($current['lastOpenedAt'] ?? 0)) {
            $changedFields[] = 'lastOpenedAt';
        }
        return $changedFields;
    }

    private function emptyImportPreview(bool $valid, string $error): array {
        return [
            'schemaVersion' => 1,
            'previewKind' => 'library-metadata-import-preview',
            'valid' => $valid,
            'error' => $error,
            'totalItems' => 0,
            'matchedItems' => 0,
            'missingItems' => 0,
            'invalidItems' => 0,
            'changedFields' => 0,
            'items' => [],
        ];
    }

    private function emptyImportApply(bool $valid, string $error): array {
        return [
            'schemaVersion' => 1,
            'applicationKind' => 'library-metadata-import-apply',
            'valid' => $valid,
            'error' => $error,
            'totalItems' => 0,
            'matchedItems' => 0,
            'appliedItems' => 0,
            'skippedItems' => 0,
            'missingItems' => 0,
            'invalidItems' => 0,
            'changedFields' => 0,
            'items' => [],
        ];
    }

    /**
     * @param array<string, mixed> $importItem
     */
    private function findItemForImportPreview(string $userId, array $importItem): ?array {
        $libraryFileId = (int)($importItem['libraryFileId'] ?? 0);
        $fileId = (int)($importItem['fileId'] ?? 0);
        $cachedPath = trim((string)($importItem['cachedPath'] ?? ''));

        $qb = $this->db->getQueryBuilder();
        $qb->select('i.id', 'i.library_file_id', 'i.publication_type', 'i.title', 'i.subtitle', 'i.creators', 'i.publication', 'i.publication_date', 'i.language', 'i.publisher', 'i.starred', 'i.last_opened_at', 'i.metadata_source', 'i.field_sources', 'i.field_values', 'i.user_edited', 'f.file_id', 'f.cached_path', 'f.mime_type', 'f.extension', 'f.scan_status', 'f.scan_error', 'r.label', 'r.path')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->innerJoin('f', 'library_roots', 'r', $qb->expr()->eq('f.root_id', 'r.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->setMaxResults(1);
        if ($libraryFileId > 0) {
            $qb->andWhere($qb->expr()->eq('i.library_file_id', $qb->createNamedParameter($libraryFileId)));
        } elseif ($fileId > 0) {
            $qb->andWhere($qb->expr()->eq('f.file_id', $qb->createNamedParameter($fileId)));
        } elseif ($cachedPath !== '') {
            $qb->andWhere($qb->expr()->eq('f.cached_path', $qb->createNamedParameter($cachedPath)));
        } else {
            return null;
        }

        $result = $qb->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        return $row === false ? null : $this->normalizeJoinedItemRow($row);
    }

    private function catalogueQueryBuilder(string $userId, array $filters): IQueryBuilder {
        $qb = $this->db->getQueryBuilder();
        $qb->select('i.id', 'i.library_file_id', 'i.publication_type', 'i.title', 'i.subtitle', 'i.creators', 'i.publication', 'i.publication_date', 'i.language', 'i.publisher', 'i.starred', 'i.last_opened_at', 'i.metadata_source', 'i.field_sources', 'i.field_values', 'i.user_edited', 'f.file_id', 'f.cached_path', 'f.mime_type', 'f.extension', 'f.scan_status', 'f.scan_error', 'r.label', 'r.path')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->innerJoin('f', 'library_roots', 'r', $qb->expr()->eq('f.root_id', 'r.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')));

        $this->applyCatalogueFilters($qb, $filters);
        return $qb;
    }

    private function countCatalogueItems(string $userId, array $filters): int {
        $qb = $this->db->getQueryBuilder();
        $qb->selectAlias($qb->createFunction('COUNT(*)'), 'item_count')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->innerJoin('f', 'library_roots', 'r', $qb->expr()->eq('f.root_id', 'r.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')));
        $this->applyCatalogueFilters($qb, $filters);

        $result = $qb->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        return $row === false ? 0 : (int)$row['item_count'];
    }

    /**
     * @return array{shelves:array<int, string>,formats:array<int, string>,publications:array<int, string>,publicationSummaries:array<int, array{publication:string,itemCount:int}>,publicationYears:array<int, string>,creators:array<int, string>,scanStatuses:array<int, string>}
     */
    private function catalogueFacets(string $userId): array {
        return [
            'shelves' => $this->distinctCatalogueValues($userId, "COALESCE(NULLIF(r.label, ''), r.path)", 'shelf'),
            'formats' => $this->distinctCatalogueValues($userId, 'LOWER(f.extension)', 'value'),
            'publications' => $this->distinctCatalogueValues($userId, 'i.publication', 'publication'),
            'publicationSummaries' => $this->topPublicationSummaries($userId),
            'publicationYears' => $this->publicationYearFacetValues($userId),
            'creators' => $this->distinctCatalogueValues($userId, 'i.creators', 'creator'),
            'scanStatuses' => $this->scanStatusFacetValues($userId),
        ];
    }

    /**
     * @return array<int, array{publication:string,itemCount:int}>
     */
    private function topPublicationSummaries(string $userId): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->selectAlias($qb->createFunction('i.publication'), 'publication')
            ->selectAlias($qb->createFunction('COUNT(*)'), 'item_count')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')))
            ->andWhere($qb->expr()->neq('i.publication', $qb->createNamedParameter('')))
            ->groupBy('i.publication')
            ->orderBy('item_count', 'DESC')
            ->addOrderBy('publication', 'ASC')
            ->setMaxResults(12)
            ->executeQuery();

        $summaries = [];
        while ($row = $result->fetch()) {
            $publication = trim((string)($row['publication'] ?? ''));
            if ($publication !== '') {
                $summaries[] = [
                    'publication' => $publication,
                    'itemCount' => (int)($row['item_count'] ?? 0),
                ];
            }
        }
        $result->closeCursor();
        return $summaries;
    }

    /**
     * @return array<int, string>
     */
    private function distinctCatalogueValues(string $userId, string $expression, string $alias): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->selectAlias($qb->createFunction($expression), $alias)
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->innerJoin('f', 'library_roots', 'r', $qb->expr()->eq('f.root_id', 'r.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')))
            ->groupBy($alias)
            ->orderBy($alias, 'ASC')
            ->executeQuery();

        $values = [];
        while ($row = $result->fetch()) {
            $value = trim((string)($row[$alias] ?? ''));
            if ($value !== '') {
                $values[] = $value;
            }
        }
        $result->closeCursor();
        return $values;
    }

    /**
     * @return array<int, string>
     */
    private function publicationYearFacetValues(string $userId): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->selectAlias($qb->createFunction('SUBSTR(i.publication_date, 1, 4)'), 'year')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')))
            ->andWhere($qb->expr()->like('i.publication_date', $qb->createNamedParameter('____%')))
            ->groupBy('year')
            ->orderBy('year', 'DESC')
            ->executeQuery();

        $years = [];
        while ($row = $result->fetch()) {
            $year = trim((string)($row['year'] ?? ''));
            if (preg_match('/^\\d{4}$/', $year) === 1) {
                $years[] = $year;
            }
        }
        $result->closeCursor();
        return $years;
    }

    /**
     * @return array<int, string>
     */
    private function scanStatusFacetValues(string $userId): array {
        $values = array_fill_keys(['indexed', 'metadata_error', 'missing'], true);
        foreach ($this->distinctCatalogueValues($userId, 'f.scan_status', 'value') as $status) {
            $values[$status] = true;
        }
        ksort($values, SORT_NATURAL | SORT_FLAG_CASE);
        return array_keys($values);
    }

    private function applyCatalogueFilters(IQueryBuilder $qb, array $filters): void {
        $type = trim((string)($filters['type'] ?? ''));
        if ($type !== '') {
            $qb->andWhere($qb->expr()->eq('i.publication_type', $qb->createNamedParameter($this->normalizePublicationType($type))));
        }

        $publication = trim((string)($filters['publication'] ?? ''));
        if ($publication !== '') {
            $qb->andWhere($qb->expr()->eq('i.publication', $qb->createNamedParameter($publication)));
        }

        $year = trim((string)($filters['year'] ?? ''));
        if (preg_match('/^\\d{4}$/', $year) === 1) {
            // Publication year filter uses LIKE prefix matching for YYYY / YYYY-MM / YYYY-MM-DD values.
            $qb->andWhere($qb->expr()->like('i.publication_date', $qb->createNamedParameter($year . '%')));
        }

        $creator = trim((string)($filters['creator'] ?? ''));
        if ($creator !== '') {
            // Exact creator filter intentionally matches the full creators field; identity splitting remains future work.
            $qb->andWhere($qb->expr()->eq('i.creators', $qb->createNamedParameter($creator)));
        }

        $format = mb_strtolower(trim((string)($filters['format'] ?? '')));
        if ($format !== '') {
            $qb->andWhere($qb->expr()->eq($qb->createFunction('LOWER(f.extension)'), $qb->createNamedParameter($format)));
        }

        $status = trim((string)($filters['status'] ?? ''));
        if ($status !== '') {
            $qb->andWhere($qb->expr()->eq('f.scan_status', $qb->createNamedParameter($status)));
        }

        $starred = trim((string)($filters['starred'] ?? ''));
        if ($starred === '1') {
            $qb->andWhere($qb->expr()->eq('i.starred', $qb->createNamedParameter(1)));
        }

        $shelf = trim((string)($filters['shelf'] ?? ''));
        if ($shelf !== '') {
            $qb->andWhere($qb->expr()->eq($qb->createFunction("COALESCE(NULLIF(r.label, ''), r.path)"), $qb->createNamedParameter($shelf)));
        }

        if (array_key_exists('taggedFileIds', $filters)) {
            $taggedFileIds = array_values(array_unique(array_map('intval', (array)$filters['taggedFileIds'])));
            if ($taggedFileIds === []) {
                $qb->andWhere('1 = 0');
            } else {
                $qb->andWhere($qb->expr()->in('f.file_id', $qb->createNamedParameter($taggedFileIds, IQueryBuilder::PARAM_INT_ARRAY)));
            }
        }

        $query = mb_strtolower(trim((string)($filters['q'] ?? '')));
        if ($query !== '') {
            $like = $qb->createNamedParameter('%' . $this->escapeLikeParameter($query) . '%');
            $qb->andWhere($qb->expr()->orX(
                $qb->expr()->like($qb->createFunction('LOWER(i.title)'), $like),
                $qb->expr()->like($qb->createFunction('LOWER(i.subtitle)'), $like),
                $qb->expr()->like($qb->createFunction('LOWER(i.creators)'), $like),
                $qb->expr()->like($qb->createFunction('LOWER(i.publication)'), $like),
                $qb->expr()->like($qb->createFunction('LOWER(f.cached_path)'), $like)
            ));
        }
    }

    private function applyCatalogueSort(IQueryBuilder $qb, string $sort): void {
        match ($sort) {
            'recent' => $qb->orderBy('i.library_file_id', 'DESC')->addOrderBy('i.id', 'DESC'),
            'publicationDate' => $qb->orderBy('i.publication_date', 'DESC')->addOrderBy('i.title', 'ASC'),
            'publication' => $qb->orderBy('i.publication', 'ASC')->addOrderBy('i.publication_date', 'DESC')->addOrderBy('i.title', 'ASC'),
            'lastOpened' => $qb->orderBy('i.last_opened_at', 'DESC')->addOrderBy('i.title', 'ASC'),
            'format' => $qb->orderBy('f.extension', 'ASC')->addOrderBy('i.title', 'ASC'),
            default => $qb->orderBy('i.title', 'ASC'),
        };
    }

    private function escapeLikeParameter(string $value): string {
        return addcslashes($value, '%_');
    }

    private function normalizeJoinedItemRow(array $row): array {
        return [
            'id' => (int)$row['id'],
            'libraryFileId' => (int)$row['library_file_id'],
            'fileId' => (int)$row['file_id'],
            'cachedPath' => (string)$row['cached_path'],
            'mimeType' => (string)$row['mime_type'],
            'extension' => $row['extension'] !== null ? (string)$row['extension'] : '',
            'scanStatus' => (string)$row['scan_status'],
            'scanError' => $row['scan_error'] !== null ? (string)$row['scan_error'] : '',
            'publicationType' => (string)$row['publication_type'],
            'title' => (string)$row['title'],
            'subtitle' => $row['subtitle'] !== null ? (string)$row['subtitle'] : '',
            'creators' => $row['creators'] !== null ? (string)$row['creators'] : '',
            'publication' => $row['publication'] !== null ? (string)$row['publication'] : '',
            'publicationDate' => $row['publication_date'] !== null ? (string)$row['publication_date'] : '',
            'language' => $row['language'] !== null ? (string)$row['language'] : '',
            'publisher' => $row['publisher'] !== null ? (string)$row['publisher'] : '',
            'starred' => (bool)$row['starred'],
            'lastOpenedAt' => (int)($row['last_opened_at'] ?? 0),
            'metadataSource' => (string)$row['metadata_source'],
            'fieldSources' => $this->decodeJsonMap($row['field_sources'] ?? null),
            'fieldValues' => $this->decodeJsonMap($row['field_values'] ?? null),
            'userEdited' => (bool)$row['user_edited'],
            'shelf' => trim((string)($row['label'] ?? '')) !== '' ? (string)$row['label'] : (string)($row['path'] ?? ''),
        ];
    }

    private function findByLibraryFileId(string $userId, int $libraryFileId): ?array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('id', 'user_edited')
            ->from('library_items')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('library_file_id', $qb->createNamedParameter($libraryFileId)))
            ->executeQuery();

        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return null;
        }

        return $row;
    }

    private function refreshScannerCandidatesForUserEditedItem(string $userId, int $itemId, array $metadataCandidate): void {
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_items')
            ->set('field_sources', $qb->createNamedParameter(json_encode($metadataCandidate['fieldSources'], JSON_THROW_ON_ERROR)))
            ->set('field_values', $qb->createNamedParameter(json_encode($metadataCandidate['fieldValues'], JSON_THROW_ON_ERROR)))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('user_edited', $qb->createNamedParameter(1)))
            ->executeStatement();
    }

    private function refreshInferredItem(string $userId, int $itemId, array $file, array $metadata = []): void {
        $metadataCandidate = $this->metadataCandidate($file, $metadata);
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_items')
            ->set('publication_type', $qb->createNamedParameter($metadataCandidate['publicationType']))
            ->set('title', $qb->createNamedParameter($metadataCandidate['title']))
            ->set('subtitle', $qb->createNamedParameter($metadataCandidate['subtitle']))
            ->set('creators', $qb->createNamedParameter($metadataCandidate['creators']))
            ->set('publication', $qb->createNamedParameter($metadataCandidate['publication']))
            ->set('publication_date', $qb->createNamedParameter($metadataCandidate['publicationDate']))
            ->set('language', $qb->createNamedParameter($metadataCandidate['language']))
            ->set('publisher', $qb->createNamedParameter($metadataCandidate['publisher']))
            ->set('metadata_source', $qb->createNamedParameter($metadataCandidate['metadataSource']))
            ->set('field_sources', $qb->createNamedParameter(json_encode($metadataCandidate['fieldSources'], JSON_THROW_ON_ERROR)))
            ->set('field_values', $qb->createNamedParameter(json_encode($metadataCandidate['fieldValues'], JSON_THROW_ON_ERROR)))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    private function inferTitle(array $file): string {
        $path = (string)($file['cachedPath'] ?? '');
        $name = pathinfo(basename($path), PATHINFO_FILENAME);
        $title = $this->cleanFilenameFallbackTitle($name);
        return $title === '' ? 'Untitled publication' : $title;
    }

    private function cleanFilenameFallbackTitle(string $name): string {
        // Real 1k staging sample: Real-00001-Durst_M707_Werbung should display as Durst M707 Werbung.
        $title = preg_replace('/^Real-\d{5}-/u', '', $name) ?? $name;
        $title = $this->stripArchiveSourceSuffix($title);
        $title = str_replace(['_', '-'], ' ', $title);
        $title = preg_replace('/\s+ocr$/iu', '', $title) ?? $title;
        $title = preg_replace('/\s+/', ' ', $title) ?? $title;
        return trim($title);
    }

    private function stripArchiveSourceSuffix(string $value): string {
        $value = preg_replace('/(?:[_\s-]+\(?z[-_\s]?library[^)]*\)?)+$/iu', '', $value) ?? $value;
        $value = preg_replace('/[_\s-]+Anna[_\s]+s[_\s]+Archive$/iu', '', $value) ?? $value;
        $value = preg_replace('/[_\s-]+[a-f0-9]{24,}$/iu', '', $value) ?? $value;
        $value = preg_replace('/[_\s-]+\d{10,13}$/u', '', $value) ?? $value;
        return trim($value, " \t\n\r\0\x0B-_–—");
    }

    /**
     * @param array<string, mixed> $file
     * @param array<string, string> $metadata
     * @return array{publicationType:string,title:string,subtitle:?string,creators:?string,publication:?string,publicationDate:?string,language:?string,publisher:?string,metadataSource:string,fieldSources:array<string, string>,fieldValues:array<string, string>}
     */
    private function metadataCandidate(array $file, array $metadata): array {
        $source = (string)($metadata['metadataSource'] ?? 'filename');
        if (!in_array($source, ['epub-opf', 'pdf-info', 'opf', 'sidecar-opf', 'cbz-comicinfo', 'filename-pattern', 'filename'], true)) {
            $source = 'filename';
        }

        $candidate = [
            'publicationType' => $this->normalizePublicationType((string)($metadata['publicationType'] ?? $this->inferPublicationType($file))),
            'title' => trim((string)($metadata['title'] ?? '')) ?: $this->inferTitle($file),
            'subtitle' => $this->nullableString($metadata['subtitle'] ?? null),
            'creators' => $this->nullableString($metadata['creators'] ?? null),
            'publication' => $this->nullableString($metadata['publication'] ?? null),
            'publicationDate' => $this->nullableString($metadata['publicationDate'] ?? null),
            'language' => $this->nullableString($metadata['language'] ?? null),
            'publisher' => $this->nullableString($metadata['publisher'] ?? null),
            'metadataSource' => $source,
        ];

        $candidate['fieldSources'] = $this->buildInferredFieldSources($candidate);
        $candidate['fieldValues'] = $this->buildCurrentFieldValues($candidate);
        return $candidate;
    }


    /**
     * @param array<string, mixed> $metadataCandidate
     * @return array<string, string>
     */
    private function buildInferredFieldSources(array $metadataCandidate): array {
        $source = (string)($metadataCandidate['metadataSource'] ?? 'filename');
        $sources = [];
        foreach (self::PUBLICATION_FIELDS as $field) {
            $value = $metadataCandidate[$field] ?? null;
            if ($value !== null && trim((string)$value) !== '') {
                $sources[$field] = $source;
            }
        }
        return $sources;
    }

    /**
     * @return array{fieldSources:array<string, string>,fieldValues:array<string, string>}
     */
    private function existingFieldProvenance(string $userId, int $itemId): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('field_sources', 'field_values')
            ->from('library_items')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return ['fieldSources' => [], 'fieldValues' => []];
        }
        return [
            'fieldSources' => $this->decodeJsonMap($row['field_sources'] ?? null),
            'fieldValues' => $this->decodeJsonMap($row['field_values'] ?? null),
        ];
    }

    /**
     * @param array<string, mixed> $values
     * @return array<string, string>
     */
    private function buildCurrentFieldValues(array $values): array {
        $fieldValues = [];
        foreach (self::PUBLICATION_FIELDS as $field) {
            $value = $values[$field] ?? null;
            if ($value !== null && trim((string)$value) !== '') {
                $fieldValues[$field] = (string)$value;
            }
        }
        return $fieldValues;
    }

    /**
     * @return array<string, string>
     */
    private function decodeJsonMap(mixed $json): array {
        if (!is_string($json) || trim($json) === '') {
            return [];
        }
        try {
            $decoded = json_decode($json, true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return [];
        }
        if (!is_array($decoded)) {
            return [];
        }
        $map = [];
        foreach ($decoded as $key => $value) {
            if (is_string($key) && (is_string($value) || is_numeric($value) || is_bool($value))) {
                $map[$key] = (string)$value;
            }
        }
        return $map;
    }

    private function inferPublicationType(array $file): string {
        $extension = strtolower((string)($file['extension'] ?? ''));
        $mimeType = strtolower((string)($file['mimeType'] ?? ''));
        if ($extension === 'cbz' || $mimeType === 'application/comicbook+zip') {
            return 'comic';
        }
        return 'other';
    }

    private function normalizePublicationType(string $publicationType): string {
        return in_array($publicationType, self::PUBLICATION_TYPES, true) ? $publicationType : 'other';
    }

    private function databaseColumnForField(string $field): ?string {
        return match ($field) {
            'publicationType' => 'publication_type',
            'title' => 'title',
            'subtitle' => 'subtitle',
            'creators' => 'creators',
            'publication' => 'publication',
            'publicationDate' => 'publication_date',
            'language' => 'language',
            'publisher' => 'publisher',
            default => null,
        };
    }

    private function databaseValueForField(string $field, string $value): ?string {
        $trimmed = trim($value);
        if ($field === 'publicationType') {
            return $this->normalizePublicationType($trimmed);
        }
        if ($field === 'title') {
            return $trimmed === '' ? 'Untitled publication' : $trimmed;
        }
        return $trimmed === '' ? null : $trimmed;
    }

    private function nullableString(mixed $value): ?string {
        $normalized = trim((string)$value);
        return $normalized === '' ? null : $normalized;
    }
}
