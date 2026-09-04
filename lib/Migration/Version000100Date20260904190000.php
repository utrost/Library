<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260904190000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if (!$schema->hasTable('library_roots')) {
            $table = $schema->createTable('library_roots');
            $table->addColumn('id', 'integer', [
                'autoincrement' => true,
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->addColumn('user_id', 'string', [
                'notnull' => true,
                'length' => 64,
            ]);
            $table->addColumn('path', 'string', [
                'notnull' => true,
                'length' => 1024,
            ]);
            $table->addColumn('label', 'string', [
                'notnull' => false,
                'length' => 255,
            ]);
            $table->addColumn('enabled', 'boolean', [
                'notnull' => true,
                'default' => true,
            ]);
            $table->addColumn('last_scan_at', 'integer', [
                'notnull' => false,
                'unsigned' => true,
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
            $table->addIndex(['user_id'], 'library_roots_user_id');
            $table->addUniqueIndex(['user_id', 'path'], 'library_roots_user_path_unique');
        }

        if (!$schema->hasTable('library_files')) {
            $table = $schema->createTable('library_files');
            $table->addColumn('id', 'integer', [
                'autoincrement' => true,
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->addColumn('user_id', 'string', [
                'notnull' => true,
                'length' => 64,
            ]);
            $table->addColumn('root_id', 'integer', [
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->addColumn('file_id', 'integer', [
                'notnull' => true,
                'unsigned' => true,
            ]);
            $table->addColumn('cached_path', 'string', [
                'notnull' => true,
                'length' => 1024,
            ]);
            $table->addColumn('mime_type', 'string', [
                'notnull' => true,
                'length' => 255,
            ]);
            $table->addColumn('extension', 'string', [
                'notnull' => false,
                'length' => 32,
            ]);
            $table->addColumn('etag', 'string', [
                'notnull' => false,
                'length' => 255,
            ]);
            $table->addColumn('mtime', 'integer', [
                'notnull' => false,
                'unsigned' => true,
            ]);
            $table->addColumn('size', 'bigint', [
                'notnull' => false,
                'unsigned' => true,
            ]);
            $table->addColumn('scan_status', 'string', [
                'notnull' => true,
                'length' => 32,
                'default' => 'indexed',
            ]);
            $table->addColumn('last_scanned_at', 'integer', [
                'notnull' => true,
                'unsigned' => true,
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
            $table->addIndex(['user_id'], 'library_files_user_id');
            $table->addIndex(['root_id'], 'library_files_root_id');
            $table->addUniqueIndex(['user_id', 'file_id'], 'library_files_file_id_unique');
        }

        return $schema;
    }
}
