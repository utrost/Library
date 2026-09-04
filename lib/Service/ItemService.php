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

    public function ensureItemForFile(string $userId, array $file): void {
        $existing = $this->findByLibraryFileId($userId, (int)$file['id']);
        if ($existing !== null) {
            if ((bool)$existing['user_edited']) {
                return;
            }

            $this->refreshInferredItem($userId, (int)$existing['id'], $file);
            return;
        }

        $now = time();
        $qb = $this->db->getQueryBuilder();
        $qb->insert('library_items')
            ->values([
                'user_id' => $qb->createNamedParameter($userId),
                'library_file_id' => $qb->createNamedParameter((int)$file['id']),
                'publication_type' => $qb->createNamedParameter($this->inferPublicationType($file)),
                'title' => $qb->createNamedParameter($this->inferTitle($file)),
                'subtitle' => $qb->createNamedParameter(null),
                'creators' => $qb->createNamedParameter(null),
                'publication' => $qb->createNamedParameter(null),
                'publication_date' => $qb->createNamedParameter(null),
                'language' => $qb->createNamedParameter(null),
                'publisher' => $qb->createNamedParameter(null),
                'metadata_source' => $qb->createNamedParameter('filename'),
                'user_edited' => $qb->createNamedParameter(0),
                'created_at' => $qb->createNamedParameter($now),
                'updated_at' => $qb->createNamedParameter($now),
            ])
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
        $result = $qb->select('i.id', 'i.library_file_id', 'i.publication_type', 'i.title', 'i.subtitle', 'i.creators', 'i.publication', 'i.publication_date', 'i.language', 'i.publisher', 'i.metadata_source', 'i.user_edited', 'f.file_id', 'f.cached_path', 'f.mime_type', 'f.extension')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
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

    private function refreshInferredItem(string $userId, int $itemId, array $file): void {
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_items')
            ->set('publication_type', $qb->createNamedParameter($this->inferPublicationType($file)))
            ->set('title', $qb->createNamedParameter($this->inferTitle($file)))
            ->set('metadata_source', $qb->createNamedParameter('filename'))
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
