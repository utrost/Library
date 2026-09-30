<?php
declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

final class Version000200Date20260925120000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        if (!$schema->hasTable('library_lists')) {
            $table = $schema->createTable('library_lists');
            $table->addColumn('id', 'integer', ['autoincrement' => true, 'unsigned' => true, 'notnull' => true]);
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('name', 'string', ['length' => 120, 'notnull' => true]);
            $table->addColumn('description', 'text', ['notnull' => true]);
            $table->addColumn('revision', 'integer', ['notnull' => true, 'default' => 1]);
            $table->addColumn('created_at', 'integer', ['notnull' => true]);
            $table->addColumn('updated_at', 'integer', ['notnull' => true]);
            $table->setPrimaryKey(['id'], 'library_lists_id');
            $table->addIndex(['user_id', 'id'], 'library_lists_owner');
        }
        if (!$schema->hasTable('library_list_entries')) {
            $table = $schema->createTable('library_list_entries');
            $table->addColumn('id', 'integer', ['autoincrement' => true, 'unsigned' => true, 'notnull' => true]);
            $table->addColumn('list_id', 'integer', ['unsigned' => true, 'notnull' => true]);
            $table->addColumn('item_id', 'integer', ['unsigned' => true, 'notnull' => true]);
            $table->addColumn('file_id', 'bigint', ['unsigned' => true, 'notnull' => true]);
            $table->addColumn('position', 'integer', ['notnull' => true]);
            $table->addColumn('note', 'text', ['notnull' => true]);
            $table->addColumn('created_at', 'integer', ['notnull' => true]);
            $table->setPrimaryKey(['id'], 'library_list_entries_id');
            $table->addUniqueIndex(['list_id', 'item_id'], 'library_list_entry_unique');
            $table->addIndex(['list_id', 'position', 'id'], 'library_list_entry_order');
        }
        return $schema;
    }
}
