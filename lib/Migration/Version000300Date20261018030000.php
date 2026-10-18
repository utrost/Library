<?php
declare(strict_types=1);
namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Preserve reviewed source-language evidence without rewriting existing books. */
final class Version000300Date20261018030000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $items = $schema->getTable('library_items');
        if (!$items->hasColumn('language_review_hash')) {
            $items->addColumn('language_review_hash', 'string', ['length'=>64, 'notnull'=>false]);
            $items->addIndex(['language_review_hash', 'id'], 'library_language_discovery');
        }
        if (!$schema->hasTable('library_language_candidates')) {
            $table = $schema->createTable('library_language_candidates');
            $table->addColumn('user_id', 'string', ['length'=>64, 'notnull'=>true]);
            $table->addColumn('item_id', 'bigint', ['unsigned'=>true, 'notnull'=>true]);
            $table->addColumn('source_key', 'string', ['length'=>64, 'notnull'=>true]);
            $table->addColumn('source_value', 'string', ['length'=>255, 'notnull'=>true]);
            $table->addColumn('applied_code', 'string', ['length'=>64, 'notnull'=>false]);
            $table->setPrimaryKey(['user_id', 'item_id'], 'library_language_candidates_pk');
            $table->addIndex(['user_id', 'source_key', 'item_id'], 'library_language_candidate_lookup');
        }
        if (!$schema->hasTable('library_language_mappings')) {
            $table = $schema->createTable('library_language_mappings');
            $table->addColumn('user_id', 'string', ['length'=>64, 'notnull'=>true]);
            $table->addColumn('source_key', 'string', ['length'=>64, 'notnull'=>true]);
            $table->addColumn('language_codes', 'string', ['length'=>64, 'notnull'=>false]);
            $table->setPrimaryKey(['user_id', 'source_key'], 'library_language_mappings_pk');
        }
        return $schema;
    }
}
