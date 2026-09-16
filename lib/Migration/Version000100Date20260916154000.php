<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Materialize review filter predicates so catalogue review filters stay indexed and bounded. */
class Version000100Date20260916154000 extends SimpleMigrationStep {
    private const REVIEW_COLUMNS = [
        'needs_metadata' => 'library_items_usr_needmeta_title',
        'cover_review' => 'library_items_usr_coverrev_title',
        'no_publication' => 'library_items_usr_nopub_title',
        'title_from_filename' => 'library_items_usr_titlefile_title',
        'no_description' => 'library_items_usr_nodesc_title',
        'weak_metadata' => 'library_items_usr_weakmeta_title',
        'unreviewed_import' => 'library_items_usr_unrevimp_title',
    ];

    public function __construct(
        private IDBConnection $db,
    ) {
    }

    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_items')) {
            $table = $schema->getTable('library_items');
            foreach (self::REVIEW_COLUMNS as $column => $index) {
                if (!$table->hasColumn($column)) {
                    $table->addColumn($column, 'boolean', [
                        'notnull' => true,
                        'default' => false,
                    ]);
                }
                if (!$table->hasIndex($index)) {
                    $table->addIndex(['user_id', $column, 'title', 'library_file_id'], $index);
                }
            }
        }

        return $schema;
    }

    public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
        $this->backfillReviewFilterFlags();
    }

    private function backfillReviewFilterFlags(): void {
        if ($this->db->getDatabaseProvider() === 'mysql') {
            $this->db->executeStatement("UPDATE *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id = i.library_file_id SET
                i.needs_metadata = CASE WHEN f.scan_status = 'metadata_error' OR i.creators IS NULL OR i.creators = '' OR i.publication IS NULL OR i.publication = '' OR i.publication_date IS NULL OR i.publication_date = '' OR i.metadata_source = 'filename-pattern' THEN 1 ELSE 0 END,
                i.cover_review = CASE WHEN (i.cover_override_url IS NULL OR i.cover_override_url = '') AND (f.scan_status = 'metadata_error' OR LOWER(f.extension) NOT IN ('pdf', 'epub', 'cbz')) THEN 1 ELSE 0 END,
                i.no_publication = CASE WHEN i.publication IS NULL OR i.publication = '' THEN 1 ELSE 0 END,
                i.title_from_filename = CASE WHEN i.metadata_source = 'filename-pattern' OR i.field_sources LIKE '%\"title\":\"filename-pattern\"%' OR i.field_sources LIKE '%\"title\":\"filename\"%' THEN 1 ELSE 0 END,
                i.no_description = CASE WHEN i.description IS NULL OR i.description = '' THEN 1 ELSE 0 END,
                i.weak_metadata = CASE WHEN i.metadata_source = 'filename-pattern' OR i.field_sources LIKE '%filename-pattern%' THEN 1 ELSE 0 END,
                i.unreviewed_import = CASE WHEN i.metadata_source <> 'user' AND i.user_edited = 0 THEN 1 ELSE 0 END");
            return;
        }

        $lastId = 0;
        $limit = 500;
        do {
            $qb = $this->db->getQueryBuilder();
            $result = $qb->select('i.id', 'i.creators', 'i.publication', 'i.publication_date', 'i.metadata_source', 'i.field_sources', 'i.description', 'i.cover_override_url', 'i.user_edited', 'f.scan_status', 'f.extension')
                ->from('library_items', 'i')
                ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
                ->where($qb->expr()->gt('i.id', $qb->createNamedParameter($lastId)))
                ->orderBy('i.id', 'ASC')
                ->setMaxResults($limit)
                ->executeQuery();
            $rows = [];
            while ($row = $result->fetch()) {
                $rows[] = $row;
            }
            $result->closeCursor();

            foreach ($rows as $row) {
                $lastId = (int)$row['id'];
                $fieldSources = (string)($row['field_sources'] ?? '');
                $metadataSource = $row['metadata_source'] ?? null;
                $scanStatus = (string)($row['scan_status'] ?? '');
                $extension = strtolower((string)($row['extension'] ?? ''));
                $update = $this->db->getQueryBuilder();
                $update->update('library_items')
                    ->set('needs_metadata', $update->createNamedParameter($this->boolToInt(
                        $scanStatus === 'metadata_error'
                        || $this->isBlank($row['creators'] ?? null)
                        || $this->isBlank($row['publication'] ?? null)
                        || $this->isBlank($row['publication_date'] ?? null)
                        || $metadataSource === 'filename-pattern'
                    )))
                    ->set('cover_review', $update->createNamedParameter($this->boolToInt(
                        $this->isBlank($row['cover_override_url'] ?? null)
                        && ($scanStatus === 'metadata_error' || !in_array($extension, ['pdf', 'epub', 'cbz'], true))
                    )))
                    ->set('no_publication', $update->createNamedParameter($this->boolToInt($this->isBlank($row['publication'] ?? null))))
                    ->set('title_from_filename', $update->createNamedParameter($this->boolToInt(
                        $metadataSource === 'filename-pattern'
                        || str_contains($fieldSources, '\"title\":\"filename-pattern\"')
                        || str_contains($fieldSources, '\"title\":\"filename\"')
                    )))
                    ->set('no_description', $update->createNamedParameter($this->boolToInt($this->isBlank($row['description'] ?? null))))
                    ->set('weak_metadata', $update->createNamedParameter($this->boolToInt(
                        $metadataSource === 'filename-pattern'
                        || str_contains($fieldSources, 'filename-pattern')
                    )))
                    ->set('unreviewed_import', $update->createNamedParameter($this->boolToInt(
                        $metadataSource !== null
                        && $metadataSource !== 'user'
                        && (int)($row['user_edited'] ?? 0) === 0
                    )))
                    ->where($update->expr()->eq('id', $update->createNamedParameter($lastId)))
                    ->executeStatement();
            }
        } while (count($rows) === $limit);
    }

    private function isBlank(mixed $value): bool {
        return $value === null || $value === '';
    }

    private function boolToInt(bool $value): int {
        return $value ? 1 : 0;
    }
}
