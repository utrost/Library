<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
/** Cache owners remain discoverable after their last Library root is removed. */
final class Version000200Date20260927140000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema=$schemaClosure();
        if (!$schema->hasTable('library_thumbnail_users')) {
            $table=$schema->createTable('library_thumbnail_users');
            $table->addColumn('user_id','string',['length'=>64,'notnull'=>true]);
            $table->setPrimaryKey(['user_id'],'library_thumbnail_user_pk');
        }
        return $schema;
    }
}
