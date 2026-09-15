<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Cover unfiltered suggestion grouping from the normalized facet lookup. */
class Version000100Date20260915170000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();
        if (!$schema->hasTable('library_item_facets')) {
            return $schema;
        }

        $table = $schema->getTable('library_item_facets');
        if ($table->hasIndex('library_facets_lookup')) {
            $table->dropIndex('library_facets_lookup');
        }
        $table->addIndex(
            ['user_id', 'facet_type', 'normalized_value', 'facet_value'],
            'library_facets_lookup'
        );

        return $schema;
    }
}
