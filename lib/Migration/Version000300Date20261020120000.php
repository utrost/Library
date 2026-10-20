<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Additive ordering index; existing author names and credits are unchanged. */
final class Version000300Date20261020120000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $authors = $schema->getTable('library_authors');
        if (!$authors->hasIndex('library_authors_display')) $authors->addIndex(['user_id', 'merged_into', 'display_name', 'id'], 'library_authors_display');
        return $schema;
    }
}
