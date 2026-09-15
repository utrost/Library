<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Add the lookup index used by exact publisher catalogue filters and counts. */
class Version000100Date20260915150000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_items')) {
            $table = $schema->getTable('library_items');
            if (!$table->hasIndex('library_items_usr_publisher')) {
                $table->addIndex(['user_id', 'publisher'], 'library_items_usr_publisher');
            }
        }

        return $schema;
    }
}
