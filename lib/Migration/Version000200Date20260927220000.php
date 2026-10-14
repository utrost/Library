<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
/** Retained warnings remain visible, with cache hits counted separately from retries. */
final class Version000200Date20260927220000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output,Closure $schemaClosure,array $options): ?ISchemaWrapper {
        $schema=$schemaClosure();$table=$schema->getTable('library_scan_jobs');
        if(!$table->hasColumn('cached_warning_skips'))$table->addColumn('cached_warning_skips','integer',['default'=>0,'notnull'=>true]);
        return $schema;
    }
}
