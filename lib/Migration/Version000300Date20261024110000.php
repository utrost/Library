<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Index the catalogue's displayed sort orders without sorting wide joined rows. */
final class Version000300Date20261024110000 extends SimpleMigrationStep {
    public function __construct(private IDBConnection $db) {
    }

    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $items = $schema->getTable('library_items');
        if (!$items->hasColumn('format_sort')) {
            $items->addColumn('format_sort', 'string', ['length' => 32, 'notnull' => true, 'default' => '']);
        }
        foreach ([
            'library_items_usr_pubdate_page' => ['user_id', 'publication_date', 'title', 'id'],
            'library_items_usr_publication_page' => ['user_id', 'publication', 'publication_date', 'id'],
            'library_items_usr_lastopen_page' => ['user_id', 'last_opened_at', 'title', 'id'],
            'library_items_usr_format_page' => ['user_id', 'format_sort', 'title', 'id'],
        ] as $name => $columns) {
            if (!$items->hasIndex($name)) $items->addIndex($columns, $name);
        }
        return $schema;
    }

    public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
        $this->db->executeStatement("UPDATE *PREFIX*library_items SET format_sort = COALESCE((SELECT LOWER(f.extension)
            FROM *PREFIX*library_files f WHERE f.id = library_file_id), '') WHERE format_sort = ''");
    }
}
