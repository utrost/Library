<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
final class Version000200Date20260926180000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $items = $schema->getTable('library_items');
        if (!$items->hasColumn('authors_json')) $items->addColumn('authors_json', 'text', ['notnull' => false]);
        $batches = $schema->getTable('library_inference_batches');
        if (!$batches->hasIndex('library_infer_batch_expiry')) $batches->addIndex(['expires_at'], 'library_infer_batch_expiry');
        return $schema;
    }
}
