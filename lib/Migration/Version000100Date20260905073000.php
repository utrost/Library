<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260905073000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_files')) {
            $table = $schema->getTable('library_files');
            if (!$table->hasColumn('scan_error')) {
                $table->addColumn('scan_error', 'string', [
                    'notnull' => false,
                    'length' => 1024,
                ]);
            }
        }

        return $schema;
    }
}
