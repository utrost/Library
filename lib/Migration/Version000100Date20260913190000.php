<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260913190000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        if (!$schema->hasTable('library_scan_jobs')) {
            return $schema;
        }

        $table = $schema->getTable('library_scan_jobs');
        if (!$table->hasColumn('last_progress_at')) {
            $table->addColumn('last_progress_at', 'bigint', ['unsigned' => true, 'notnull' => false]);
        }
        if (!$table->hasColumn('current_path')) {
            $table->addColumn('current_path', 'string', ['length' => 1024, 'notnull' => false]);
        }

        return $schema;
    }
}
