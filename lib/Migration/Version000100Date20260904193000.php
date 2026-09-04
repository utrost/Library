<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260904193000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if (!$schema->hasTable('library_items')) {
            $table = $schema->createTable('library_items');
            $table->addColumn('id', 'integer', [
                'autoincrement' => true,
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->addColumn('user_id', 'string', [
                'notnull' => true,
                'length' => 64,
            ]);
            $table->addColumn('library_file_id', 'integer', [
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->addColumn('publication_type', 'string', [
                'notnull' => true,
                'length' => 32,
                'default' => 'other',
            ]);
            $table->addColumn('title', 'string', [
                'notnull' => true,
                'length' => 512,
            ]);
            $table->addColumn('subtitle', 'string', [
                'notnull' => false,
                'length' => 512,
            ]);
            $table->addColumn('creators', 'string', [
                'notnull' => false,
                'length' => 1024,
            ]);
            $table->addColumn('publication', 'string', [
                'notnull' => false,
                'length' => 512,
            ]);
            $table->addColumn('publication_date', 'string', [
                'notnull' => false,
                'length' => 64,
            ]);
            $table->addColumn('language', 'string', [
                'notnull' => false,
                'length' => 64,
            ]);
            $table->addColumn('publisher', 'string', [
                'notnull' => false,
                'length' => 512,
            ]);
            $table->addColumn('metadata_source', 'string', [
                'notnull' => true,
                'length' => 32,
                'default' => 'filename',
            ]);
            $table->addColumn('user_edited', 'boolean', [
                'notnull' => true,
                'default' => false,
            ]);
            $table->addColumn('created_at', 'integer', [
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->addColumn('updated_at', 'integer', [
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->setPrimaryKey(['id']);
            $table->addIndex(['user_id'], 'library_items_user_id');
            $table->addUniqueIndex(['library_file_id'], 'library_items_file_unique');
        }

        return $schema;
    }
}
