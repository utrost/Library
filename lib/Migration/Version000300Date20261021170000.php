<?php
declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Keep a reversible, account-owned deletion marker on the publication row. */
final class Version000300Date20261021170000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $items = $schema->getTable('library_items');
        if (!$items->hasColumn('marked_for_deletion_at')) {
            $items->addColumn('marked_for_deletion_at', 'integer', ['notnull' => false]);
        }
        if (!$items->hasIndex('library_items_usr_delete_mark')) {
            $items->addIndex(['user_id', 'marked_for_deletion_at', 'id'], 'library_items_usr_delete_mark');
        }
        return $schema;
    }
}
