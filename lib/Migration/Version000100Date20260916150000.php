<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Add the measured candidate index used by the scanner-conflict catalogue filter. */
class Version000100Date20260916150000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_items')) {
            $table = $schema->getTable('library_items');
            if (!$table->hasIndex('library_items_usr_edit_title')) {
                $table->addIndex(['user_id', 'user_edited', 'title', 'library_file_id'], 'library_items_usr_edit_title');
            }
        }

        return $schema;
    }
}
