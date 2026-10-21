<?php
declare(strict_types=1);
namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Keep per-shelf path-worklist sorting indexed on large catalogues. */
final class Version000300Date20261021180000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema = $schemaClosure();
        $files = $schema->getTable('library_files');
        if (!$files->hasIndex('library_files_usr_root_mtime')) $files->addIndex(['user_id', 'root_id', 'mtime', 'id'], 'library_files_usr_root_mtime');
        if (!$files->hasIndex('library_files_usr_root_ext')) $files->addIndex(['user_id', 'root_id', 'extension', 'id'], 'library_files_usr_root_ext');
        return $schema;
    }
}
