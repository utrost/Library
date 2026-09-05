<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260905165000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if (!$schema->hasTable('library_scan_jobs')) {
            $table = $schema->createTable('library_scan_jobs');
            $table->addColumn('id', 'integer', [
                'autoincrement' => true,
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->addColumn('user_id', 'string', [
                'notnull' => true,
                'length' => 64,
            ]);
            $table->addColumn('status', 'string', [
                'notnull' => true,
                'length' => 32,
                'default' => 'running',
            ]);
            $table->addColumn('roots_total', 'integer', [
                'notnull' => true,
                'unsigned' => true,
                'default' => 0,
            ]);
            $table->addColumn('files_indexed', 'integer', [
                'notnull' => true,
                'unsigned' => true,
                'default' => 0,
            ]);
            $table->addColumn('error_count', 'integer', [
                'notnull' => true,
                'unsigned' => true,
                'default' => 0,
            ]);
            $table->addColumn('summary', 'text', [
                'notnull' => false,
            ]);
            $table->addColumn('started_at', 'integer', [
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->addColumn('finished_at', 'integer', [
                'notnull' => false,
                'unsigned' => true,
            ]);
            $table->setPrimaryKey(['id']);
            $table->addIndex(['user_id', 'started_at'], 'library_scan_jobs_user_started');
        }

        return $schema;
    }
}
