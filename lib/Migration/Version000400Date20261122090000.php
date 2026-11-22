<?php
declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

final class Version000400Date20261122090000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $jobs = $schema->getTable('library_scan_jobs');
        if ($jobs->hasColumn('unsupported_archives') && $jobs->hasColumn('error_samples')) {
            return null;
        }
        if (!$jobs->hasColumn('unsupported_archives')) {
            $jobs->addColumn('unsupported_archives', 'integer', ['notnull' => false]);
        }
        if (!$jobs->hasColumn('error_samples')) {
            $jobs->addColumn('error_samples', 'text', ['notnull' => false]);
        }
        return $schema;
    }
}
