<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Cover exact subject and classification facet filters without wrapping indexed columns. */
class Version000100Date20260915180000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();
        if (!$schema->hasTable('library_item_facets')) {
            return $schema;
        }

        $table = $schema->getTable('library_item_facets');
        if (!$table->hasIndex('library_facets_exact')) {
            $table->addIndex(
                ['user_id', 'facet_type', 'facet_value', 'item_id'],
                'library_facets_exact'
            );
        }

        return $schema;
    }
}
