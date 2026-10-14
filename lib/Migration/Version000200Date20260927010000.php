<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
final class Version000200Date20260927010000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        if (!$schema->hasTable('library_scan_schedule')) {
            $table = $schema->createTable('library_scan_schedule');
            $table->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            foreach (['interval_seconds', 'next_run_at', 'last_job_id'] as $field) $table->addColumn($field, 'bigint', ['notnull' => true, 'default' => 0]);
            $table->setPrimaryKey(['user_id'], 'library_scan_schedule_pk');
            $table->addIndex(['next_run_at'], 'library_scan_schedule_due');
        }
        return $schema;
    }
}
