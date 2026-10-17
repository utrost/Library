<?php
declare(strict_types=1);
namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Finish the old genres-to-subjects transition without changing released migrations. */
final class Version000300Date20261015120000 extends SimpleMigrationStep {
    public function __construct(private IDBConnection $db) {}

    public function preSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
        $schema = $schemaClosure();
        if ($schema->hasTable('library_items') && $schema->getTable('library_items')->hasColumn('genres_json')) {
            $this->db->executeStatement('UPDATE *PREFIX*library_items SET subjects_json=genres_json WHERE subjects_json IS NULL AND genres_json IS NOT NULL');
        }
    }

    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        if ($schema->hasTable('library_items')) {
            $items = $schema->getTable('library_items');
            if ($items->hasColumn('genres_json')) $items->dropColumn('genres_json');
        }
        return $schema;
    }
}
