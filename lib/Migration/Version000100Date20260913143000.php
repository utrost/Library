<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Preserve existing multi-value metadata while adopting the Subject model. */
class Version000100Date20260913143000 extends SimpleMigrationStep {
    public function __construct(
        private IDBConnection $db,
    ) {
    }
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_items')) {
            $table = $schema->getTable('library_items');
            if (!$table->hasColumn('subjects_json')) {
                $table->addColumn('subjects_json', 'text', [
                    'notnull' => false,
                    'default' => null,
                ]);
            }
        }

        return $schema;
    }

    public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
        $this->copyGenresIntoSubjects();
    }

    private function copyGenresIntoSubjects(): void {
        try {
            $this->db->executeStatement("UPDATE *PREFIX*library_items SET subjects_json = genres_json WHERE subjects_json IS NULL AND genres_json IS NOT NULL");
        } catch (\Throwable) {
            // Older installs may already have dropped or never created genres_json.
        }
    }
}
