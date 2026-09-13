<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260913100000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_files')) {
            $table = $schema->getTable('library_files');
            if (!$table->hasIndex('library_files_usr_root_status')) {
                $table->addIndex(['user_id', 'root_id', 'scan_status'], 'library_files_usr_root_status');
            }
        }

        return $schema;
    }
}
