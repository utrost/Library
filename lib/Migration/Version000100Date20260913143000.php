<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Preserve existing multi-value metadata while adopting the Subject model. */
class Version000100Date20260913143000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_items')) {
            $table = $schema->getTable('library_items');
            if ($table->hasColumn('genres_json') && !$table->hasColumn('subjects_json')) {
                $table->renameColumn('genres_json', 'subjects_json');
            } elseif (!$table->hasColumn('subjects_json')) {
                $table->addColumn('subjects_json', 'text', [
                    'notnull' => false,
                    'default' => null,
                ]);
            }
        }

        return $schema;
    }
}
