<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Add the measured page and count indexes used by publication type filters. */
class Version000100Date20260916130000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_items')) {
            $table = $schema->getTable('library_items');
            if (!$table->hasIndex('library_items_usr_type_title_file')) {
                $table->addIndex(['user_id', 'publication_type', 'title', 'library_file_id'], 'library_items_usr_type_title_file');
            }
            if (!$table->hasIndex('library_items_usr_type_file')) {
                $table->addIndex(['user_id', 'publication_type', 'library_file_id'], 'library_items_usr_type_file');
            }
        }

        return $schema;
    }
}
