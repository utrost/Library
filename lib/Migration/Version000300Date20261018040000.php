<?php
declare(strict_types=1);
namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Version the derived search index and keep value mappings separate from source metadata. */
final class Version000300Date20261018040000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $items = $schema->getTable('library_items');
        if (!$items->hasColumn('search_index_version')) {
            $items->addColumn('search_index_version', 'smallint', ['notnull'=>false]);
            $items->addIndex(['search_index_version','id'], 'library_search_rebuild');
        }
        if (!$schema->hasTable('library_value_mappings')) {
            $table = $schema->createTable('library_value_mappings');
            $table->addColumn('user_id', 'string', ['length'=>64, 'notnull'=>true]);
            $table->addColumn('field_type', 'string', ['length'=>16, 'notnull'=>true]);
            $table->addColumn('source_key', 'string', ['length'=>64, 'notnull'=>true]);
            $table->addColumn('source_value', 'string', ['length'=>255, 'notnull'=>true]);
            $table->addColumn('target_value', 'string', ['length'=>255, 'notnull'=>true]);
            $table->addColumn('created_at', 'integer', ['notnull'=>true]);
            $table->setPrimaryKey(['user_id','field_type','source_key'], 'library_value_mappings_pk');
            $table->addIndex(['user_id','field_type','target_value'], 'library_value_mapping_target');
        }
        return $schema;
    }
}
