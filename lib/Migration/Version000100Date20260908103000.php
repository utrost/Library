<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260908103000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_items')) {
            $table = $schema->getTable('library_items');
            if (!$table->hasColumn('personal_rating')) {
                $table->addColumn('personal_rating', 'integer', [
                    'notnull' => false,
                    'default' => null,
                ]);
            }
            if (!$table->hasColumn('cover_override_url')) {
                $table->addColumn('cover_override_url', 'string', [
                    'notnull' => false,
                    'default' => null,
                    'length' => 2048,
                ]);
            }
            if (!$table->hasColumn('cover_override_data')) {
                $table->addColumn('cover_override_data', 'text', [
                    'notnull' => false,
                    'default' => null,
                ]);
            }
            if (!$table->hasColumn('cover_override_mime_type')) {
                $table->addColumn('cover_override_mime_type', 'string', [
                    'notnull' => false,
                    'default' => null,
                    'length' => 120,
                ]);
            }
        }

        return $schema;
    }
}
