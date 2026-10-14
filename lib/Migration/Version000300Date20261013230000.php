<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Records the source author credits explicitly acknowledged by the user. */
final class Version000300Date20261013230000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $items = $schema->getTable('library_items');
        if (!$items->hasColumn('author_source_hash')) $items->addColumn('author_source_hash', 'string', ['length' => 64, 'notnull' => false]);
        return $schema;
    }
}
