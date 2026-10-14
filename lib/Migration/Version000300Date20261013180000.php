<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

final class Version000300Date20261013180000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $authors = $schema->getTable('library_authors');
        if (!$authors->hasColumn('merged_into')) $authors->addColumn('merged_into', 'bigint', ['unsigned' => true, 'notnull' => false]);
        if (!$schema->hasTable('library_author_operations')) {
            $t = $schema->createTable('library_author_operations');
            $t->addColumn('id', 'string', ['length' => 32, 'notnull' => true]);
            $t->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $t->addColumn('created_at', 'bigint', ['notnull' => true]);
            $t->addColumn('undone', 'smallint', ['default' => 0, 'notnull' => true]);
            foreach (['source_name', 'target_name'] as $field) $t->addColumn($field, 'string', ['length' => 255, 'notnull' => true]);
            $t->addColumn('book_count', 'integer', ['notnull' => true]);
            $t->addColumn('is_merge', 'smallint', ['notnull' => true]);
            $t->addColumn('payload', 'text', ['length' => 16777215, 'notnull' => true]);
            $t->setPrimaryKey(['id'], 'library_author_ops_pk');
            $t->addIndex(['user_id', 'created_at', 'id'], 'library_author_ops_user');
        }
        return $schema;
    }
}
