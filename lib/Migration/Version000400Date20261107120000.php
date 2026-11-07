<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Bounded lookup runs, including review decisions and atomic apply receipts. */
final class Version000400Date20261107120000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        if (!$schema->hasTable('library_lookup_jobs')) {
            $table = $schema->createTable('library_lookup_jobs');
            $table->addColumn('id', 'string', ['length'=>32, 'notnull'=>true]);
            $table->addColumn('user_id', 'string', ['length'=>64, 'notnull'=>true]);
            $table->addColumn('status', 'string', ['length'=>16, 'notnull'=>true]);
            $table->addColumn('payload', 'text', ['notnull'=>true, 'length'=>16777215]);
            foreach (['created_at','expires_at','wake_at','lease_until'] as $name) $table->addColumn($name, 'bigint', ['notnull'=>true, 'default'=>0]);
            $table->addColumn('lease_token', 'string', ['length'=>32, 'notnull'=>true, 'default'=>'']);
            $table->setPrimaryKey(['id']);
            $table->addIndex(['user_id','created_at'], 'lib_lookup_owner');
            $table->addIndex(['status','wake_at','lease_until'], 'lib_lookup_work');
            $table->addIndex(['expires_at'], 'lib_lookup_expiry');
        }
        return $schema;
    }
}
