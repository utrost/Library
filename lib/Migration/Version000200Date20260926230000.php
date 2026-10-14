<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;
final class Version000200Date20260926230000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output,Closure $schemaClosure,array $options): ?ISchemaWrapper {
        $s=$schemaClosure();
        if(!$s->hasTable('library_dup_state')) {
            $t=$s->createTable('library_dup_state');$t->addColumn('user_id','string',['length'=>64,'notnull'=>true]);
            $t->addColumn('status','string',['length'=>16,'notnull'=>true]);
            foreach(['enabled','cursor_id','max_id','processed','total'] as $field)$t->addColumn($field,'bigint',['notnull'=>true,'default'=>0]);
            $t->setPrimaryKey(['user_id'],'library_dup_state_pk');
        }
        if(!$s->hasTable('library_dup_index')) {
            $t=$s->createTable('library_dup_index');$t->addColumn('user_id','string',['length'=>64,'notnull'=>true]);$t->addColumn('item_id','bigint',['notnull'=>true]);$t->addColumn('payload','text',['notnull'=>true]);$t->setPrimaryKey(['user_id','item_id'],'library_dup_index_pk');
        }
        if(!$s->hasTable('library_dup_terms')) {
            $t=$s->createTable('library_dup_terms');$t->addColumn('user_id','string',['length'=>64,'notnull'=>true]);$t->addColumn('item_id','bigint',['notnull'=>true]);$t->addColumn('match_key','string',['length'=>66,'notnull'=>true]);$t->setPrimaryKey(['user_id','match_key','item_id'],'library_dup_terms_pk');$t->addIndex(['user_id','item_id'],'library_dup_terms_item');
        }
        if(!$s->hasTable('library_dup_hints')) {
            $t=$s->createTable('library_dup_hints');$t->addColumn('user_id','string',['length'=>64,'notnull'=>true]);
            foreach(['left_id','right_id','preferred_id'] as $f)$t->addColumn($f,'bigint',['notnull'=>true]);
            $t->addColumn('signature','string',['length'=>64,'notnull'=>true]);$t->addColumn('decision','string',['length'=>16,'notnull'=>true]);
            $t->setPrimaryKey(['user_id','left_id','right_id'],'library_dup_hints_pk');$t->addIndex(['user_id','right_id'],'library_dup_hints_right');
        }
        return $s;
    }
}
