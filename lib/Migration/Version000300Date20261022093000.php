<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Materialize reading-status order so large catalogues can page on an index. */
final class Version000300Date20261022093000 extends SimpleMigrationStep {
    public function __construct(private IDBConnection $db) {
    }

    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $items = $schema->getTable('library_items');
        if (!$items->hasColumn('workflow_sort_rank')) {
            $items->addColumn('workflow_sort_rank', 'smallint', [
                'notnull' => true,
                'unsigned' => true,
                'default' => 7,
            ]);
        }
        if (!$items->hasIndex('library_items_usr_wfrank_title')) {
            $items->addIndex(['user_id', 'workflow_sort_rank', 'title', 'id'], 'library_items_usr_wfrank_title');
        }
        return $schema;
    }

    public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
        $this->db->executeStatement("UPDATE *PREFIX*library_items SET workflow_sort_rank = CASE workflow_status
            WHEN 'to-read' THEN 0 WHEN 'reading' THEN 1 WHEN 'paused' THEN 2
            WHEN 'needs-action' THEN 3 WHEN 'finished' THEN 4 WHEN 'reference' THEN 5
            WHEN 'abandoned' THEN 6 ELSE 7 END
            WHERE workflow_status IS NOT NULL AND workflow_status <> ''");
    }
}
