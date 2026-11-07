<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Keep Library-only book access as an explicit, immutable snapshot. */
final class Version000400Date20261106190000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $grants = $schema->getTable('library_root_shares');
        if (!$grants->hasColumn('access_mode')) {
            $grants->addColumn('access_mode', 'string', ['length' => 16, 'notnull' => true, 'default' => 'files']);
        }
        if (!$grants->hasColumn('scope_name')) {
            $grants->addColumn('scope_name', 'string', ['length' => 120, 'notnull' => false]);
        }
        if (!$schema->hasTable('library_share_books')) {
            $books = $schema->createTable('library_share_books');
            $books->addColumn('grant_id', 'bigint', ['unsigned' => true, 'notnull' => true]);
            $books->addColumn('item_id', 'bigint', ['unsigned' => true, 'notnull' => true]);
            $books->addColumn('file_id', 'bigint', ['unsigned' => true, 'notnull' => true]);
            $books->setPrimaryKey(['grant_id', 'item_id'], 'library_share_books_pk');
        }
        return $schema;
    }
}
