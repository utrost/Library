<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260907211000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_items')) {
            $table = $schema->getTable('library_items');

            if (!$table->hasColumn('workflow_status')) {
                $table->addColumn('workflow_status', 'string', [
                    'notnull' => false,
                    'default' => null,
                    'length' => 32,
                ]);
            }
        }

        return $schema;
    }
}
