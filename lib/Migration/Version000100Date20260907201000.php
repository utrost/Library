<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260907201000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_items')) {
            $table = $schema->getTable('library_items');

            if (!$table->hasColumn('last_opened_at')) {
                $table->addColumn('last_opened_at', 'integer', [
                    'notnull' => false,
                    'default' => null,
                ]);
            }
        }

        return $schema;
    }
}
