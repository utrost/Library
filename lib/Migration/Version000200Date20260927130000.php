<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
/** Cover narrow title-page enumeration without fetching large metadata rows. */
final class Version000200Date20260927130000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema=$schemaClosure();
        $items=$schema->getTable('library_items'); $files=$schema->getTable('library_files');
        if (!$items->hasIndex('library_items_usr_title_page')) $items->addIndex(['user_id','title','id','library_file_id'],'library_items_usr_title_page');
        if (!$files->hasIndex('library_files_usr_page')) $files->addIndex(['user_id','id','scan_status','root_id'],'library_files_usr_page');
        return $schema;
    }
}
