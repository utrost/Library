<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

final class Version000300Date20261013210000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $authors = $schema->getTable('library_authors');
        if (!$authors->hasColumn('biography')) $authors->addColumn('biography', 'text', ['notnull' => false]);
        if (!$authors->hasColumn('photo_key')) $authors->addColumn('photo_key', 'string', ['length' => 36, 'notnull' => false]);
        return $schema;
    }
}
