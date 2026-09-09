<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260909183000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_scan_jobs')) {
            $table = $schema->getTable('library_scan_jobs');
            if (!$table->hasColumn('metadata_errors')) {
                $table->addColumn('metadata_errors', 'integer', [
                    'notnull' => true,
                    'default' => 0,
                    'unsigned' => true,
                ]);
            }
        }

        return $schema;
    }
}
