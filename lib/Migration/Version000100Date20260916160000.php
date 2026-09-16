<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Build a portable materialized trigram index for catalogue substring search. */
class Version000100Date20260916160000 extends SimpleMigrationStep {

    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if (!$schema->hasTable('library_item_search_grams')) {
            $table = $schema->createTable('library_item_search_grams');
            $table->addColumn('id', 'bigint', ['autoincrement' => true, 'notnull' => true, 'unsigned' => true]);
            $table->addColumn('user_id', 'string', ['notnull' => true, 'length' => 64]);
            $table->addColumn('item_id', 'integer', ['notnull' => true, 'unsigned' => true]);
            $table->addColumn('gram', 'string', ['notnull' => true, 'length' => 32]);
            $table->setPrimaryKey(['id'], 'library_search_grams_id');
            $table->addIndex(['user_id', 'gram', 'item_id'], 'library_search_grams_lookup');
            $table->addUniqueIndex(['item_id', 'gram'], 'library_search_grams_item_unique');
        }

        return $schema;
    }

    public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
        // Intentionally schema-only. Existing rows refresh their search grams on
        // future scanner/item writes; synchronous full-catalogue backfills can
        // make app enable unsafe for large existing libraries.
    }
}
