<?php
declare(strict_types=1);
namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Additive series identities. Existing book fields are populated asynchronously. */
final class Version000300Date20261014010000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $items = $schema->getTable('library_items');
        if (!$items->hasColumn('series_sync_status')) $items->addColumn('series_sync_status', 'smallint', ['default' => 1, 'notnull' => true]);
        if (!$items->hasIndex('library_series_pending')) $items->addIndex(['series_sync_status', 'id'], 'library_series_pending');
        if (!$items->hasIndex('library_series_user_status')) $items->addIndex(['user_id', 'series_sync_status', 'id'], 'library_series_user_status');
        if (!$schema->hasTable('library_series')) {
            $table = $schema->createTable('library_series');
            $table->addColumn('id', 'bigint', ['autoincrement' => true, 'unsigned' => true, 'notnull' => true]);
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('display_name', 'string', ['length' => 255, 'notnull' => true]);
            $table->addColumn('comparison_key', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('description', 'text', ['notnull' => false]);
            $table->addColumn('revision', 'bigint', ['default' => 1, 'notnull' => true]);
            $table->setPrimaryKey(['id'], 'library_series_pk');
            $table->addIndex(['user_id', 'comparison_key'], 'library_series_lookup');
            $table->addIndex(['user_id', 'display_name', 'id'], 'library_series_sort');
        }
        if (!$schema->hasTable('library_item_series')) {
            $table = $schema->createTable('library_item_series');
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('item_id', 'bigint', ['unsigned' => true, 'notnull' => true]);
            $table->addColumn('slot', 'smallint', ['notnull' => true]);
            $table->addColumn('series_id', 'bigint', ['unsigned' => true, 'notnull' => true]);
            $table->addColumn('part_number', 'string', ['length' => 64, 'notnull' => false]);
            $table->addColumn('source_name', 'string', ['length' => 255, 'notnull' => true]);
            $table->addColumn('source_number', 'string', ['length' => 64, 'notnull' => false]);
            $table->addColumn('revision', 'bigint', ['default' => 1, 'notnull' => true]);
            $table->setPrimaryKey(['user_id', 'item_id', 'slot'], 'library_item_series_pk');
            $table->addIndex(['user_id', 'series_id', 'item_id'], 'library_series_books');
        }
        if (!$schema->hasTable('library_series_state')) {
            $table = $schema->createTable('library_series_state');
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('updated_at', 'bigint', ['default' => 0, 'notnull' => true]);
            $table->setPrimaryKey(['user_id'], 'library_series_state_pk');
        }
        return $schema;
    }
}
