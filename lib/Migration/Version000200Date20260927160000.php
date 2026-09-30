<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
/** Written after atomic scanner index rebuild or verified reuse of existing legacy indexes. */
final class Version000200Date20260927160000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema=$schemaClosure();$table=$schema->getTable('library_items');
        if(!$table->hasColumn('scanner_index_hash'))$table->addColumn('scanner_index_hash','string',['length'=>64,'notnull'=>false,'default'=>null]);
        return $schema;
    }
}
