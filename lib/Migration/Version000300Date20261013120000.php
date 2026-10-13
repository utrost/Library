<?php
declare(strict_types=1);
namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Additive author storage. Data is populated by AuthorBackfillJob, not during upgrade. */
final class Version000300Date20261013120000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $items = $schema->getTable('library_items');
        if (!$items->hasColumn('author_sync_status')) $items->addColumn('author_sync_status', 'smallint', ['default' => 1, 'notnull' => true]);
        if (!$items->hasIndex('library_author_pending')) $items->addIndex(['author_sync_status', 'id'], 'library_author_pending');
        if (!$items->hasIndex('library_author_user_status')) $items->addIndex(['user_id', 'author_sync_status', 'id'], 'library_author_user_status');
        if (!$schema->hasTable('library_authors')) {
            $table = $schema->createTable('library_authors');
            $table->addColumn('id', 'bigint', ['autoincrement' => true, 'unsigned' => true, 'notnull' => true]);
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            foreach (['display_name', 'sort_name'] as $column) $table->addColumn($column, 'string', ['length' => 255, 'notnull' => true]);
            foreach (['given_name', 'family_name'] as $column) $table->addColumn($column, 'string', ['length' => 255, 'notnull' => false]);
            $table->addColumn('comparison_key', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('normalization_version', 'smallint', ['default' => 1, 'notnull' => true]);
            $table->addColumn('revision', 'bigint', ['default' => 1, 'notnull' => true]);
            $table->addColumn('field_sources', 'text', ['notnull' => false]);
            $table->setPrimaryKey(['id'], 'library_authors_pk');
            // Deliberately non-unique: distinct people can have the same name.
            $table->addIndex(['user_id', 'comparison_key'], 'library_authors_lookup');
            $table->addIndex(['user_id', 'sort_name', 'id'], 'library_authors_sort');
        }
        if (!$schema->hasTable('library_item_authors')) {
            $table = $schema->createTable('library_item_authors');
            $table->addColumn('id', 'bigint', ['autoincrement' => true, 'unsigned' => true, 'notnull' => true]);
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            foreach (['item_id', 'author_id'] as $column) $table->addColumn($column, 'bigint', ['unsigned' => true, 'notnull' => true]);
            $table->addColumn('position', 'integer', ['notnull' => true]);
            $table->addColumn('source_name', 'string', ['length' => 255, 'notnull' => true]);
            $table->addColumn('source_sort_name', 'string', ['length' => 255, 'notnull' => false]);
            $table->addColumn('assignment_source', 'string', ['length' => 32, 'notnull' => true]);
            $table->addColumn('revision', 'bigint', ['default' => 1, 'notnull' => true]);
            $table->setPrimaryKey(['id'], 'library_item_authors_pk');
            $table->addUniqueIndex(['user_id', 'item_id', 'position'], 'library_item_author_position');
            $table->addIndex(['user_id', 'author_id', 'item_id'], 'library_author_books');
        }
        if (!$schema->hasTable('library_author_state')) {
            $table = $schema->createTable('library_author_state');
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('updated_at', 'bigint', ['default' => 0, 'notnull' => true]);
            $table->setPrimaryKey(['user_id'], 'library_author_state_pk');
        }
        return $schema;
    }
}
