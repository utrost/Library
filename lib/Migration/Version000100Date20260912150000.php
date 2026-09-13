<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000100Date20260912150000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if (!$schema->hasTable('library_item_identifiers')) {
            $table = $schema->createTable('library_item_identifiers');
            $table->addColumn('id', 'integer', ['autoincrement' => true, 'notnull' => true, 'unsigned' => true]);
            $table->addColumn('item_id', 'integer', ['notnull' => true, 'unsigned' => true]);
            $table->addColumn('user_id', 'string', ['notnull' => true, 'length' => 64]);
            $table->addColumn('scheme', 'string', ['notnull' => true, 'length' => 32]);
            $table->addColumn('display_value', 'string', ['notnull' => true, 'length' => 128]);
            $table->addColumn('normalized_value', 'string', ['notnull' => true, 'length' => 128]);
            $table->addColumn('source', 'string', ['notnull' => true, 'length' => 64, 'default' => 'user']);
            $table->addColumn('user_edited', 'boolean', ['notnull' => true, 'default' => false]);
            $table->addColumn('valid', 'boolean', ['notnull' => true, 'default' => true]);
            $table->addColumn('created_at', 'integer', ['notnull' => true, 'unsigned' => true]);
            $table->addColumn('updated_at', 'integer', ['notnull' => true, 'unsigned' => true]);
            $table->setPrimaryKey(['id']);
            $table->addIndex(['item_id'], 'library_ident_item');
            $table->addIndex(['user_id', 'scheme', 'normalized_value'], 'library_ident_user_scheme_value');
        }

        return $schema;
    }
}
