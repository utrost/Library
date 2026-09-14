<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Create the derived multi-value facet index. Backfill is deliberately explicit. */
class Version000100Date20260914120000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();
        if ($schema->hasTable('library_item_facets')) {
            return $schema;
        }

        $table = $schema->createTable('library_item_facets');
        $table->addColumn('id', 'bigint', ['unsigned' => true, 'autoincrement' => true, 'notnull' => true]);
        $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
        $table->addColumn('item_id', 'bigint', ['unsigned' => true, 'notnull' => true]);
        $table->addColumn('facet_type', 'string', ['length' => 32, 'notnull' => true]);
        $table->addColumn('facet_value', 'string', ['length' => 255, 'notnull' => true]);
        $table->addColumn('normalized_value', 'string', ['length' => 255, 'notnull' => true]);
        $table->setPrimaryKey(['id'], 'library_facets_id');
        $table->addIndex(['user_id', 'facet_type', 'normalized_value'], 'library_facets_lookup');
        $table->addUniqueIndex(['item_id', 'facet_type', 'normalized_value'], 'library_facets_item_unique');

        return $schema;
    }
}
