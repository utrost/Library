<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
final class Version000200Date20260926220000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output,Closure $schemaClosure,array $options): ?ISchemaWrapper {
        $schema=$schemaClosure();
        $definitions=[
            'library_dup_jobs'=>[['id'=>32,'user_id'=>64,'status'=>16],['created_at','expires_at'],['payload'],['id'],'library_dup_job_pk'],
            'library_dup_books'=>[['job_id'=>32,'user_id'=>64],['item_id'],['payload'],['job_id','item_id'],'library_dup_book_pk'],
            'library_dup_keys'=>[['job_id'=>32,'user_id'=>64,'match_key'=>66],['item_id'],[],['job_id','match_key','item_id'],'library_dup_key_pk'],
            'library_dup_pairs'=>[['job_id'=>32,'user_id'=>64,'pair_id'=>64,'signature'=>64,'decision'=>16],[],['payload'],['job_id','pair_id'],'library_dup_pair_pk'],
            'library_dup_choices'=>[['user_id'=>64,'signature'=>64,'decision'=>16],['preferred_id','updated_at'],[],['user_id','signature'],'library_dup_choice_pk'],
        ];
        foreach ($definitions as $name=>[$strings,$integers,$texts,$primary,$index]) {
            if ($schema->hasTable($name)) continue;
            $t=$schema->createTable($name);
            foreach ($strings as $field=>$length) $t->addColumn($field,'string',['length'=>$length,'notnull'=>true]);
            foreach ($integers as $field) $t->addColumn($field,'bigint',['notnull'=>true]);
            foreach ($texts as $field) $t->addColumn($field,'text',['notnull'=>true]);
            $t->setPrimaryKey($primary,$index);
            if ($name==='library_dup_jobs') { $t->addIndex(['user_id','created_at'],'library_dup_job_user'); $t->addIndex(['expires_at'],'library_dup_job_expiry'); }
            elseif ($name==='library_dup_choices') $t->addIndex(['updated_at'],'library_dup_choice_expiry');
            else $t->addIndex(['user_id'],'library_dup_'.['library_dup_books'=>'book','library_dup_keys'=>'key','library_dup_pairs'=>'pair'][$name].'_user');
            if ($name==='library_dup_pairs') { $t->addIndex(['job_id','decision','pair_id'],'library_dup_pair_page'); $t->addIndex(['user_id','signature'],'library_dup_pair_choice'); }
        }
        return $schema;
    }
}
