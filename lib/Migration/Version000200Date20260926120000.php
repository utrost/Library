<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
final class Version000200Date20260926120000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $table = $schema->getTable('library_items');
        foreach (['series_name' => 255, 'series_number' => 64, 'genre' => 255] as $column => $length) {
            if (!$table->hasColumn($column)) $table->addColumn($column, 'string', ['length' => $length, 'notnull' => false, 'default' => null]);
        }
        return $schema;
    }
}
