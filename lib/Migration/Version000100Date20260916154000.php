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
        $prefix = $this->db->getPrefix();
        $items = $prefix . 'library_items';
        $files = $prefix . 'library_files';
        $this->db->executeStatement("UPDATE `$items` i INNER JOIN `$files` f ON f.id = i.library_file_id SET
            i.needs_metadata = CASE WHEN f.scan_status = 'metadata_error' OR i.creators IS NULL OR i.creators = '' OR i.publication IS NULL OR i.publication = '' OR i.publication_date IS NULL OR i.publication_date = '' OR i.metadata_source = 'filename-pattern' THEN 1 ELSE 0 END,
            i.cover_review = CASE WHEN (i.cover_override_url IS NULL OR i.cover_override_url = '') AND (f.scan_status = 'metadata_error' OR LOWER(f.extension) NOT IN ('pdf', 'epub', 'cbz')) THEN 1 ELSE 0 END,
            i.no_publication = CASE WHEN i.publication IS NULL OR i.publication = '' THEN 1 ELSE 0 END,
            i.title_from_filename = CASE WHEN i.metadata_source = 'filename-pattern' OR i.field_sources LIKE '%\"title\":\"filename-pattern\"%' OR i.field_sources LIKE '%\"title\":\"filename\"%' THEN 1 ELSE 0 END,
            i.no_description = CASE WHEN i.description IS NULL OR i.description = '' THEN 1 ELSE 0 END,
            i.weak_metadata = CASE WHEN i.metadata_source = 'filename-pattern' OR i.field_sources LIKE '%filename-pattern%' THEN 1 ELSE 0 END,
            i.unreviewed_import = CASE WHEN i.metadata_source <> 'user' AND i.user_edited = 0 THEN 1 ELSE 0 END");
    }
}
