<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
final class Version000200Date20260926160000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        if (!$schema->hasTable('library_inference_batches')) {
            $table = $schema->createTable('library_inference_batches');
            $table->addColumn('id', 'string', ['length' => 32, 'notnull' => true]);
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('status', 'string', ['length' => 16, 'notnull' => true]);
            $table->addColumn('payload', 'text', ['notnull' => true]);
            $table->addColumn('created_at', 'bigint', ['notnull' => true]);
            $table->addColumn('expires_at', 'bigint', ['notnull' => true]);
            $table->setPrimaryKey(['id'], 'library_infer_batch_id');
            $table->addIndex(['user_id', 'created_at'], 'library_infer_batch_user');
        }
        return $schema;
    }
}
