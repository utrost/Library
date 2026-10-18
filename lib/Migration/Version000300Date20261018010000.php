<?php
declare(strict_types=1);
namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** NULL preserves whole-item protection for all books edited before this migration. */
final class Version000300Date20261018010000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $items = $schema->getTable('library_items');
        if (!$items->hasColumn('protected_fields_json')) $items->addColumn('protected_fields_json', 'text', ['notnull' => false]);
        return $schema;
    }
}
