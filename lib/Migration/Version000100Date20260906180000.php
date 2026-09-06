<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260906180000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_items')) {
            $table = $schema->getTable('library_items');

            if (!$table->hasColumn('field_sources')) {
                // Field-level scanner provenance for P1 correction/reset workflows.
                $table->addColumn('field_sources', 'text', [
                    'notnull' => false,
                ]);
            }

            if (!$table->hasColumn('field_values')) {
                // Field-level scanner/current values for later reset-to-scanner work.
                $table->addColumn('field_values', 'text', [
                    'notnull' => false,
                ]);
            }
        }

        return $schema;
    }
}
