<?php

declare(strict_types=1);

namespace OCA\Library\Service;

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

    public function __construct(
        private IDBConnection $db,
    ) {
    }

    public function ensureItemForFile(string $userId, array $file, array $metadata = []): void {
        $metadataCandidate = $this->metadataCandidate($file, $metadata);
        $existing = $this->findByLibraryFileId($userId, (int)$file['id']);
        if ($existing !== null) {
            if ((bool)$existing['user_edited']) {
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
                'metadata_source' => $qb->createNamedParameter($metadataCandidate['metadataSource']),
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

    public function updateItem(string $userId, int $itemId, array $metadata): void {
        $now = time();
        $publicationType = $this->normalizePublicationType((string)($metadata['publicationType'] ?? 'other'));
        $title = trim((string)($metadata['title'] ?? '')) ?: 'Untitled publication';

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
            ->set('user_edited', $qb->createNamedParameter(1))
            ->set('updated_at', $qb->createNamedParameter($now))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function listItems(string $userId): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('i.id', 'i.library_file_id', 'i.publication_type', 'i.title', 'i.subtitle', 'i.creators', 'i.publication', 'i.publication_date', 'i.language', 'i.publisher', 'i.metadata_source', 'i.user_edited', 'f.file_id', 'f.cached_path', 'f.mime_type', 'f.extension', 'f.scan_status', 'f.scan_error', 'r.label', 'r.path')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->innerJoin('f', 'library_roots', 'r', $qb->expr()->eq('f.root_id', 'r.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')))
            ->orderBy('i.title', 'ASC')
            ->executeQuery();

        $items = [];
        while ($row = $result->fetch()) {
            $items[] = [
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
                'metadataSource' => (string)$row['metadata_source'],
                'userEdited' => (bool)$row['user_edited'],
                'shelf' => trim((string)($row['label'] ?? '')) !== '' ? (string)$row['label'] : (string)($row['path'] ?? ''),
            ];
        }
        $result->closeCursor();

        return $items;
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
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    private function inferTitle(array $file): string {
        $path = (string)($file['cachedPath'] ?? '');
        $name = pathinfo(basename($path), PATHINFO_FILENAME);
        $title = trim(str_replace(['_', '-'], ' ', $name));
        return $title === '' ? 'Untitled publication' : $title;
    }

    /**
     * @param array<string, mixed> $file
     * @param array<string, string> $metadata
     * @return array{publicationType:string,title:string,subtitle:?string,creators:?string,publication:?string,publicationDate:?string,language:?string,publisher:?string,metadataSource:string}
     */
    private function metadataCandidate(array $file, array $metadata): array {
        $source = (string)($metadata['metadataSource'] ?? 'filename');
        if (!in_array($source, ['epub-opf', 'pdf-info', 'opf', 'sidecar-opf', 'cbz-comicinfo', 'filename-pattern', 'filename'], true)) {
            $source = 'filename';
        }

        return [
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

    private function nullableString(mixed $value): ?string {
        $normalized = trim((string)$value);
        return $normalized === '' ? null : $normalized;
    }
}
