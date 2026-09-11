<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260911140000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        if (!$schema->hasTable('library_scan_jobs')) { return $schema; }
        $table = $schema->getTable('library_scan_jobs');
        foreach (['run_started_at', 'duration_ms'] as $name) {
            if (!$table->hasColumn($name)) { $table->addColumn($name, 'bigint', ['unsigned' => true, 'notnull' => false]); }
        }
        foreach (['fingerprint_skips', 'metadata_extractions', 'item_refreshes'] as $name) {
            if (!$table->hasColumn($name)) { $table->addColumn($name, 'integer', ['unsigned' => true, 'notnull' => true, 'default' => 0]); }
        }
        return $schema;
    }
}
