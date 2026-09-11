<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260911120000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if ($schema->hasTable('library_items')) {
            $table = $schema->getTable('library_items');
            if (!$table->hasIndex('library_items_usr_title')) {
                $table->addIndex(['user_id', 'title'], 'library_items_usr_title');
            }
            if (!$table->hasIndex('library_items_usr_file')) {
                $table->addIndex(['user_id', 'library_file_id'], 'library_items_usr_file');
            }
            if (!$table->hasIndex('library_items_usr_pubdate')) {
                $table->addIndex(['user_id', 'publication_date'], 'library_items_usr_pubdate');
            }
            if (!$table->hasIndex('library_items_usr_publication')) {
                $table->addIndex(['user_id', 'publication', 'publication_date'], 'library_items_usr_publication');
            }
            if (!$table->hasIndex('library_items_usr_lastopen')) {
                $table->addIndex(['user_id', 'last_opened_at'], 'library_items_usr_lastopen');
            }
            if (!$table->hasIndex('library_items_usr_workflow')) {
                $table->addIndex(['user_id', 'workflow_status'], 'library_items_usr_workflow');
            }
        }

        if ($schema->hasTable('library_files')) {
            $table = $schema->getTable('library_files');
            if (!$table->hasIndex('library_files_usr_status_scan')) {
                $table->addIndex(['user_id', 'scan_status', 'last_scanned_at'], 'library_files_usr_status_scan');
            }
        }

        return $schema;
    }
}
