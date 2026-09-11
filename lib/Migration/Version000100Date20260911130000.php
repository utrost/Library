<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260911130000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();
        if (!$schema->hasTable('library_files')) {
            return $schema;
        }

        $table = $schema->getTable('library_files');
        if (!$table->hasColumn('metadata_input_fingerprint')) {
            $table->addColumn('metadata_input_fingerprint', 'string', ['length' => 64, 'notnull' => false]);
        }
        if (!$table->hasColumn('metadata_extractor_revision')) {
            $table->addColumn('metadata_extractor_revision', 'string', ['length' => 64, 'notnull' => false]);
        }

        return $schema;
    }
}
