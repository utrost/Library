<?php
declare(strict_types=1);
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
$db=\OC::$server->get(\OCP\IDBConnection::class);$uid=getenv('LIBRARY_BENCHMARK_USER')?:'uwe';$out=[];
foreach(['library_items','library_files','library_item_facets','library_item_search_grams','library_item_identifiers','library_lists','library_scan_jobs','library_dup_terms','library_dup_index'] as $table){$r=$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*'.$table.' WHERE user_id=?',[$uid]);$out['counts'][$table]=(int)$r->fetchOne();$r->closeCursor();}
$r=$db->executeQuery('SELECT f.extension,COUNT(*) AS n FROM *PREFIX*library_files f WHERE f.user_id=? GROUP BY f.extension',[$uid]);$out['formats']=$r->fetchAll();$r->closeCursor();
$r=$db->executeQuery('SELECT r.id,r.enabled,COUNT(i.id) AS books FROM *PREFIX*library_roots r LEFT JOIN *PREFIX*library_files f ON f.root_id=r.id LEFT JOIN *PREFIX*library_items i ON i.library_file_id=f.id WHERE r.user_id=? GROUP BY r.id,r.enabled',[$uid]);$out['roots']=$r->fetchAll();$r->closeCursor();
$r=$db->executeQuery('SELECT status,COUNT(*) AS n,MAX(duration_ms) AS max_ms FROM *PREFIX*library_scan_jobs WHERE user_id=? GROUP BY status',[$uid]);$out['scanHistory']=$r->fetchAll();$r->closeCursor();
$config=\OC::$server->get(\OCP\IConfig::class);$out['environment']=['nextcloud'=>$config->getSystemValue('version'),'app'=>$config->getAppValue('library','installed_version'),'php'=>PHP_VERSION,'memoryLimit'=>ini_get('memory_limit'),'cron'=>$config->getAppValue('core','backgroundjobs_mode'),'lastCron'=>$config->getAppValue('core','lastcron'),'database'=>$db->getDatabaseProvider(),'duplicateIndex'=>\OC::$server->get(\OCA\Library\Service\DuplicateIndexService::class)->status($uid),'scanSchedule'=>\OC::$server->get(\OCA\Library\Service\ScheduledScanService::class)->status($uid)];
if($db->getDatabaseProvider()==='mysql'){
 $r=$db->executeQuery("SELECT table_name,table_rows,data_length,index_length FROM information_schema.tables WHERE table_schema=DATABASE() AND table_name LIKE '%library%' ORDER BY data_length+index_length DESC");$out['storage']=$r->fetchAll();$r->closeCursor();
 $r=$db->executeQuery("SHOW VARIABLES WHERE Variable_name IN ('version','innodb_buffer_pool_size','max_connections','performance_schema','slow_query_log')");$out['databaseSettings']=$r->fetchAll();$r->closeCursor();
}
echo json_encode($out,JSON_PRETTY_PRINT),PHP_EOL;
