<?php
declare(strict_types=1);
namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Durable queue for large atomic author operations. */
final class Version000300Date20261014080000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        if (!$schema->hasTable('library_author_tasks')) {
            $table = $schema->createTable('library_author_tasks');
            $table->addColumn('id', 'string', ['length' => 32, 'notnull' => true]);
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('action', 'string', ['length' => 8, 'notnull' => true]);
            $table->addColumn('source_id', 'bigint', ['unsigned' => true, 'notnull' => false]);
            $table->addColumn('target_id', 'bigint', ['unsigned' => true, 'notnull' => false]);
            $table->addColumn('operation_id', 'string', ['length' => 32, 'notnull' => false]);
            $table->addColumn('preview_token', 'string', ['length' => 64, 'notnull' => false]);
            $table->addColumn('claim_token', 'string', ['length' => 32, 'notnull' => false]);
            $table->addColumn('book_count', 'integer', ['notnull' => true]);
            $table->addColumn('status', 'string', ['length' => 16, 'notnull' => true]);
            $table->addColumn('error_code', 'string', ['length' => 32, 'notnull' => false]);
            $table->addColumn('created_at', 'bigint', ['notnull' => true]);
            $table->addColumn('updated_at', 'bigint', ['notnull' => true]);
            $table->setPrimaryKey(['id'], 'library_author_tasks_pk');
            $table->addIndex(['user_id', 'created_at', 'id'], 'library_author_tasks_user');
            $table->addIndex(['status', 'updated_at'], 'library_author_tasks_due');
        }
        return $schema;
    }
}
