<?php
declare(strict_types=1);
namespace OCA\Library\Migration;
use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Additive private curation state; no publication or Files records are changed. */
final class Version000400Date20261108100000 extends SimpleMigrationStep {
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        $schema=$schemaClosure();
        foreach (['library_change_history','library_book_notes','library_inbox_state','library_curation_jobs','library_curation_rows'] as $name) {
            if ($schema->hasTable($name)) continue;
            $t=$schema->createTable($name);
            if ($name==='library_curation_jobs') $t->addColumn('id','string',['length'=>32,'notnull'=>true]);
            else $t->addColumn('id','bigint',['autoincrement'=>true,'notnull'=>true]);
            $t->setPrimaryKey(['id']);
            $t->addColumn('user_id','string',['length'=>64,'notnull'=>true]);
            $t->addColumn('created_at','bigint',['notnull'=>true,'default'=>0]);
            if ($name!=='library_curation_jobs') $t->addColumn('item_id','bigint',['notnull'=>true]);
            if ($name==='library_change_history') {
                $t->addColumn('kind','string',['length'=>32,'notnull'=>true]);
                $t->addColumn('payload','text',['length'=>16777215,'notnull'=>true]);
                $t->addColumn('undone','boolean',['notnull'=>true,'default'=>false]);
                $t->addColumn('expires_at','bigint',['notnull'=>true]);
                $t->addIndex(['user_id','item_id','id'],'lib_history_item');
                $t->addIndex(['expires_at'],'lib_history_expire');
            } elseif ($name==='library_book_notes') {
                $t->addColumn('file_id','bigint',['notnull'=>true]);
                $t->addUniqueIndex(['user_id','item_id','file_id'],'lib_note_item_file');
            } elseif ($name==='library_inbox_state') {
                $t->addColumn('revision','string',['length'=>64,'notnull'=>true]);
                $t->addColumn('state','string',['length'=>16,'notnull'=>true]);
                $t->addColumn('until_at','bigint',['notnull'=>true,'default'=>0]);
                $t->addUniqueIndex(['user_id','item_id'],'lib_inbox_item');
            } elseif ($name==='library_curation_jobs') {
                $t->addColumn('status','string',['length'=>16,'notnull'=>true]);
                $t->addColumn('payload','text',['length'=>16777215,'notnull'=>true]);
                $t->addColumn('lease_token','string',['length'=>32,'notnull'=>true,'default'=>'']);
                foreach (['lease_until','expires_at','work_cursor'] as $col) $t->addColumn($col,'bigint',['notnull'=>true,'default'=>0]);
                $t->addIndex(['user_id','created_at'],'lib_curate_owner');
                $t->addIndex(['status','lease_until'],'lib_curate_worker');
            } else {
                $t->addColumn('job_id','string',['length'=>32,'notnull'=>true]);
                $t->addColumn('status','string',['length'=>16,'notnull'=>true]);
                $t->addColumn('payload','text',['length'=>16777215,'notnull'=>true]);
                $t->addUniqueIndex(['job_id','item_id'],'lib_curate_item');
                $t->addIndex(['job_id','status','id'],'lib_curate_rows');
            }
        }
        if (!$schema->hasTable('library_writeback_jobs')) {
            $t=$schema->createTable('library_writeback_jobs');
            $t->addColumn('id','string',['length'=>32,'notnull'=>true]);$t->setPrimaryKey(['id']);
            $t->addColumn('user_id','string',['length'=>64,'notnull'=>true]);
            $t->addColumn('item_id','bigint',['notnull'=>true]);
            $t->addColumn('status','string',['length'=>24,'notnull'=>true]);
            $t->addColumn('payload','text',['notnull'=>true,'length'=>16777215]);
            $t->addColumn('created_at','bigint',['notnull'=>true]);$t->addColumn('expires_at','bigint',['notnull'=>true]);
            $t->addIndex(['user_id','item_id','created_at'],'lib_writeback_owner');
            $t->addIndex(['expires_at'],'lib_writeback_expire');
        }
        foreach (['library_portable_jobs','library_portable_rows'] as $name) {
            if ($schema->hasTable($name)) continue;
            $t=$schema->createTable($name);
            $t->addColumn('id',$name==='library_portable_jobs' ? 'string' : 'bigint',$name==='library_portable_jobs' ? ['length'=>32,'notnull'=>true] : ['autoincrement'=>true,'notnull'=>true]);
            $t->setPrimaryKey(['id']);
            $t->addColumn('user_id','string',['length'=>64,'notnull'=>true]);
            $t->addColumn('status','string',['length'=>24,'notnull'=>true]);
            $t->addColumn('payload','text',['length'=>16777215,'notnull'=>true]);
            if ($name==='library_portable_jobs') {
                $t->addColumn('mode','string',['length'=>16,'notnull'=>true]);
                foreach (['created_at','expires_at','work_cursor','stage','bytes'] as $column) $t->addColumn($column,'bigint',['notnull'=>true,'default'=>0]);
                $t->addIndex(['user_id','created_at'],'lib_portable_owner');
                $t->addIndex(['status','created_at'],'lib_portable_worker');
            } else {
                $t->addColumn('job_id','string',['length'=>32,'notnull'=>true]);
                $t->addColumn('kind','string',['length'=>24,'notnull'=>true]);
                $t->addColumn('source_key','string',['length'=>64,'notnull'=>true]);
                $t->addColumn('target_id','bigint',['notnull'=>false]);
                $t->addColumn('review','text',['length'=>16777215,'notnull'=>true]);
                $t->addUniqueIndex(['job_id','kind','source_key'],'lib_portable_key');
                $t->addIndex(['job_id','status','id'],'lib_portable_rows');
            }
        }
        $entries=$schema->getTable('library_list_entries');
        if (!$entries->hasColumn('unavailable_title')) $entries->addColumn('unavailable_title','string',['length'=>512,'notnull'=>false]);
        $entries->getColumn('item_id')->setNotnull(false);
        $entries->getColumn('file_id')->setNotnull(false);
        $genres=$schema->getTable('library_genres');
        if (!$genres->hasColumn('parent_id')) $genres->addColumn('parent_id','bigint',['notnull'=>false]);
        if (!$genres->hasIndex('lib_genre_parent')) $genres->addIndex(['user_id','parent_id','id'],'lib_genre_parent');
        if (!$schema->hasTable('library_genre_tree')) {
            $tree=$schema->createTable('library_genre_tree');
            $tree->addColumn('user_id','string',['length'=>64,'notnull'=>true]);
            $tree->addColumn('ancestor_id','bigint',['notnull'=>true]);
            $tree->addColumn('descendant_id','bigint',['notnull'=>true]);
            $tree->addColumn('depth','smallint',['notnull'=>true]);
            $tree->setPrimaryKey(['user_id','ancestor_id','descendant_id'],'lib_genre_tree_pk');
            $tree->addIndex(['user_id','descendant_id','ancestor_id'],'lib_genre_ancestors');
        }
        if (!$schema->hasTable('library_genre_tree_state')) {
            $state=$schema->createTable('library_genre_tree_state');
            $state->addColumn('user_id','string',['length'=>64,'notnull'=>true]);
            $state->addColumn('revision','bigint',['notnull'=>true,'default'=>0]);
            $state->setPrimaryKey(['user_id'],'lib_genre_tree_state_pk');
        }
        $files=$schema->getTable('library_files');
        if (!$files->hasIndex('lib_files_incoming')) $files->addIndex(['user_id','created_at','id'],'lib_files_incoming');
        $items=$schema->getTable('library_items');
        if (!$items->hasIndex('lib_item_changes')) $items->addIndex(['user_id','user_edited','updated_at','id'],'lib_item_changes');
        return $schema;
    }
}
