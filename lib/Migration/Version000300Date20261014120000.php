<?php
declare(strict_types=1);
namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Reviewed series assignments and conditional Undo; existing links remain imported. */
final class Version000300Date20261014120000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $series = $schema->getTable('library_series');
        if (!$series->hasColumn('merged_into')) $series->addColumn('merged_into', 'bigint', ['unsigned' => true, 'notnull' => false]);
        $links = $schema->getTable('library_item_series');
        if (!$links->hasColumn('assignment_source')) $links->addColumn('assignment_source', 'string', ['length' => 16, 'default' => 'import', 'notnull' => true]);
        if (!$schema->hasTable('library_series_operations')) {
            $table = $schema->createTable('library_series_operations');
            $table->addColumn('id', 'string', ['length' => 32, 'notnull' => true]);
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('created_at', 'bigint', ['notnull' => true]);
            $table->addColumn('undone', 'smallint', ['default' => 0, 'notnull' => true]);
            $table->addColumn('source_name', 'string', ['length' => 255, 'notnull' => true]);
            $table->addColumn('target_name', 'string', ['length' => 255, 'notnull' => true]);
            $table->addColumn('book_count', 'integer', ['notnull' => true]);
            $table->addColumn('is_merge', 'smallint', ['notnull' => true]);
            $table->addColumn('payload', 'text', ['length' => 16777215, 'notnull' => true]);
            $table->setPrimaryKey(['id'], 'library_series_ops_pk');
            $table->addIndex(['user_id', 'created_at', 'id'], 'library_series_ops_user');
        }
        return $schema;
    }
}
