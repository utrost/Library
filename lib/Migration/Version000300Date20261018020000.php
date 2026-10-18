<?php
declare(strict_types=1);
namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Add account-owned genre identities and a resumable candidate index without rewriting books. */
final class Version000300Date20261018020000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $items = $schema->getTable('library_items');
        if (!$items->hasColumn('genre_suggestion_hash')) {
            $items->addColumn('genre_suggestion_hash', 'string', ['length' => 64, 'notnull' => false]);
            $items->addIndex(['genre_suggestion_hash', 'id'], 'library_genre_discovery');
        }
        if (!$schema->hasTable('library_genres')) {
            $table = $schema->createTable('library_genres');
            $table->addColumn('id', 'bigint', ['unsigned' => true, 'autoincrement' => true, 'notnull' => true]);
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('display_name', 'string', ['length' => 255, 'notnull' => true]);
            $table->addColumn('comparison_key', 'string', ['length' => 64, 'notnull' => true]);
            $table->setPrimaryKey(['id'], 'library_genres_pk');
            $table->addUniqueIndex(['user_id', 'comparison_key'], 'library_genres_unique');
            $table->addIndex(['user_id', 'display_name'], 'library_genres_sort');
        }
        if (!$schema->hasTable('library_item_genres')) {
            $table = $schema->createTable('library_item_genres');
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('item_id', 'bigint', ['unsigned' => true, 'notnull' => true]);
            $table->addColumn('genre_id', 'bigint', ['unsigned' => true, 'notnull' => true]);
            $table->addColumn('active', 'smallint', ['default' => 1, 'notnull' => true]);
            $table->addColumn('assignment_source', 'string', ['length' => 16, 'notnull' => true]);
            $table->setPrimaryKey(['user_id', 'item_id', 'genre_id'], 'library_item_genres_pk');
            $table->addIndex(['user_id', 'genre_id', 'active', 'item_id'], 'library_genre_books');
        }
        if (!$schema->hasTable('library_genre_candidates')) {
            $table = $schema->createTable('library_genre_candidates');
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('item_id', 'bigint', ['unsigned' => true, 'notnull' => true]);
            $table->addColumn('candidate_key', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('display_name', 'string', ['length' => 255, 'notnull' => true]);
            $table->addColumn('source_kind', 'string', ['length' => 16, 'notnull' => true]);
            $table->setPrimaryKey(['user_id', 'item_id', 'candidate_key'], 'library_genre_candidates_pk');
            $table->addIndex(['user_id', 'candidate_key', 'item_id'], 'library_genre_candidate_lookup');
        }
        if (!$schema->hasTable('library_genre_mappings')) {
            $table = $schema->createTable('library_genre_mappings');
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('candidate_key', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('genre_id', 'bigint', ['unsigned' => true, 'notnull' => false]);
            $table->setPrimaryKey(['user_id', 'candidate_key'], 'library_genre_mappings_pk');
            $table->addIndex(['user_id', 'genre_id'], 'library_genre_mapping_target');
        }
        return $schema;
    }
}
