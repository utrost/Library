<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
final class Version000200Date20260926200000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema=$schemaClosure();
        if (!$schema->hasTable('library_infer_jobs')) {
            $t=$schema->createTable('library_infer_jobs');
            foreach (['id'=>32,'user_id'=>64,'status'=>16] as $name=>$length) $t->addColumn($name,'string',['length'=>$length,'notnull'=>true]);
            $t->addColumn('payload','text',['notnull'=>true]);
            foreach (['root_id','cursor_id','max_id','total','processed','bytes','created_at','expires_at'] as $name) $t->addColumn($name,'bigint',['notnull'=>true]);
            $t->setPrimaryKey(['id'],'library_infer_job_pk'); $t->addIndex(['user_id','created_at'],'library_infer_job_user'); $t->addIndex(['expires_at'],'library_infer_job_expiry');
        }
        if (!$schema->hasTable('library_infer_results')) {
            $t=$schema->createTable('library_infer_results');
            $t->addColumn('job_id','string',['length'=>32,'notnull'=>true]); $t->addColumn('user_id','string',['length'=>64,'notnull'=>true]);
            $t->addColumn('item_id','bigint',['notnull'=>true]); $t->addColumn('status','string',['length'=>16,'notnull'=>true]); $t->addColumn('payload','text',['notnull'=>true]);
            $t->setPrimaryKey(['job_id','item_id'],'library_infer_result_pk'); $t->addIndex(['job_id','status','item_id'],'library_infer_result_page'); $t->addIndex(['user_id'],'library_infer_result_user');
        }
        return $schema;
    }
}
