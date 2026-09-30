<?php
declare(strict_types=1);
namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Durable, coalesced dirty directories for scheduled incremental scans. */
final class Version000200Date20260928090000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $schedule = $schema->getTable('library_scan_schedule');
        if (!$schedule->hasColumn('last_full_at')) $schedule->addColumn('last_full_at', 'bigint', ['default' => 0, 'notnull' => true]);
        if (!$schedule->hasColumn('last_full_revision')) $schedule->addColumn('last_full_revision', 'string', ['length' => 64, 'notnull' => false]);
        if (!$schedule->hasColumn('last_full_roots_hash')) $schedule->addColumn('last_full_roots_hash', 'string', ['length' => 64, 'notnull' => false]);
        if (!$schema->hasTable('library_scan_changes')) {
            $changes = $schema->createTable('library_scan_changes');
            $changes->addColumn('user_id', 'string', ['length' => 64, 'notnull' => true]);
            $changes->addColumn('path_hash', 'string', ['length' => 64, 'notnull' => true]);
            $changes->addColumn('target_path', 'string', ['length' => 1024, 'notnull' => true]);
            $changes->addColumn('is_directory', 'boolean', ['default' => false, 'notnull' => true]);
            $changes->addColumn('generation', 'bigint', ['default' => 1, 'notnull' => true]);
            $changes->setPrimaryKey(['user_id', 'path_hash'], 'library_scan_changes_pk');
        }
        return $schema;
    }
}
