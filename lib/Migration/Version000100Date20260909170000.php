<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260909170000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_scan_jobs')) {
            $table = $schema->getTable('library_scan_jobs');
            foreach ([
                'files_added',
                'paths_updated',
                'files_unchanged',
                'files_missing',
            ] as $column) {
                if (!$table->hasColumn($column)) {
                    $table->addColumn($column, 'integer', [
                        'notnull' => true,
                        'default' => 0,
                        'unsigned' => true,
                    ]);
                }
            }
        }

        return $schema;
    }
}
