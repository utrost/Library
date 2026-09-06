<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260906131000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_scan_jobs')) {
            $table = $schema->getTable('library_scan_jobs');
            if (!$table->hasColumn('scope_type')) {
                $table->addColumn('scope_type', 'string', [
                    'notnull' => true,
                    'length' => 32,
                    'default' => 'all',
                ]);
            }
            if (!$table->hasColumn('root_id')) {
                $table->addColumn('root_id', 'integer', [
                    'notnull' => false,
                    'unsigned' => true,
                ]);
            }
        }

        return $schema;
    }
}
