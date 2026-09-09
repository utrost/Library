<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260909162000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if (!$schema->hasTable('library_saved_collections')) {
            $table = $schema->createTable('library_saved_collections');
            $table->addColumn('id', 'integer', [
                'autoincrement' => true,
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->addColumn('user_id', 'string', [
                'notnull' => true,
                'length' => 64,
            ]);
            $table->addColumn('name', 'string', [
                'notnull' => true,
                'length' => 120,
            ]);
            $table->addColumn('filters_json', 'text', [
                'notnull' => true,
            ]);
            $table->addColumn('created_at', 'integer', [
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->addColumn('updated_at', 'integer', [
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->setPrimaryKey(['id']);
            $table->addIndex(['user_id'], 'library_saved_coll_user');
            $table->addUniqueIndex(['user_id', 'name'], 'library_saved_coll_user_name');
        }

        return $schema;
    }
}
