<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Root-scoped grants and a global external-provider request slot. */
final class Version000400Date20261105093000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        if (!$schema->hasTable('library_root_shares')) {
            $table = $schema->createTable('library_root_shares');
            $table->addColumn('id', 'bigint', ['unsigned' => true, 'autoincrement' => true, 'notnull' => true]);
            $table->addColumn('owner_user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('recipient_user_id', 'string', ['length' => 64, 'notnull' => true]);
            $table->addColumn('root_id', 'integer', ['unsigned' => true, 'notnull' => true]);
            $table->addColumn('root_file_id', 'bigint', ['unsigned' => true, 'notnull' => true]);
            $table->addColumn('managed_share_id', 'string', ['length' => 64, 'notnull' => false]);
            $table->addColumn('recovery_token', 'string', ['length' => 32, 'notnull' => false]);
            $table->addColumn('revoked_at', 'integer', ['unsigned' => true, 'notnull' => false]);
            $table->addColumn('created_at', 'integer', ['unsigned' => true, 'notnull' => true]);
            $table->setPrimaryKey(['id'], 'library_root_shares_pk');
            $table->addUniqueIndex(['owner_user_id', 'root_id', 'recipient_user_id'], 'library_root_shares_owner_unique');
            $table->addIndex(['recipient_user_id', 'id'], 'library_root_shares_recipient');
            $table->addIndex(['owner_user_id', 'root_id'], 'library_root_shares_root');
        }
        if (!$schema->hasTable('library_lookup_quota')) {
            $quota = $schema->createTable('library_lookup_quota');
            $quota->addColumn('provider', 'string', ['length' => 32, 'notnull' => true]);
            $quota->addColumn('next_at_ms', 'bigint', ['unsigned' => true, 'notnull' => true]);
            $quota->setPrimaryKey(['provider'], 'library_lookup_quota_pk');
        }
        return $schema;
    }
}
