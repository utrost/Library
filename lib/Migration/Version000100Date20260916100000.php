<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Add the user-scoped prefix index used by folder filters and suggestions. */
class Version000100Date20260916100000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();
        if ($schema->hasTable('library_files')) {
            $table = $schema->getTable('library_files');
            if (!$table->hasIndex('library_files_usr_path')) {
                $table->addIndex(['user_id', 'cached_path'], 'library_files_usr_path', [], ['lengths' => [null, 191]]);
            }
        }

        return $schema;
    }
}
