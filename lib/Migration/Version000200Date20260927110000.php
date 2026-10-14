<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
/** A small revision token invalidates browser covers without loading image blobs in the catalogue. */
final class Version000200Date20260927110000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema=$schemaClosure();$table=$schema->getTable('library_items');
        if (!$table->hasColumn('cover_revision')) $table->addColumn('cover_revision','string',['length'=>32,'notnull'=>false,'default'=>null]);
        return $schema;
    }
}
