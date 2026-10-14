<?php
/** Developer-only targeted warning recovery/cache benchmark. No source file writes. */
declare(strict_types=1);define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
$uid=getenv('NC_USER')?:'uwe';$mode=$argv[1]??'cached';
try {
 if(!in_array($mode,['recover','prime','cached'],true))throw new RuntimeException('Unknown mode');
 $db=\OC::$server->get(\OCP\IDBConnection::class);$r=$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_scan_jobs WHERE user_id=? AND status IN (?,?)',[$uid,'queued','running']);if((int)$r->fetchOne())throw new RuntimeException('Account scan is active');$r->closeCursor();
 $r=$db->executeQuery('SELECT id,file_id,root_id FROM *PREFIX*library_files WHERE user_id=? AND scan_status=?'.($mode==='recover'?' AND scan_error LIKE ?':'').' ORDER BY id',$mode==='recover'?[$uid,'metadata_error','metadata_extraction_failed:%']:[$uid,'metadata_error']);$rows=$r->fetchAll();$r->closeCursor();
 $home=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid);$scanner=\OC::$server->get(\OCA\Library\Service\LibraryScanner::class);$start=(new ReflectionMethod($scanner,'beginMetrics'))->invoke($scanner);$scan=new ReflectionMethod($scanner,'scanFile');$done=0;$summary=['filesAdded'=>0,'pathsUpdated'=>0,'filesUnchanged'=>0,'metadataErrors'=>0];
 foreach($rows as $row){$nodes=$home->getById((int)$row['file_id']);$file=$nodes[0]??null;if(!$file instanceof \OCP\Files\File)throw new RuntimeException('Expected warning file unavailable');$seen=[];$args=[$uid,(int)$row['root_id'],$file,&$seen,false,(int)$row['root_id'],&$summary];if(!$scan->invokeArgs($scanner,$args))throw new RuntimeException('Source outside enabled roots');$done++;if($done%50===0)echo json_encode(['event'=>'progress','processed'=>$done]),PHP_EOL;}
 $metrics=(new ReflectionMethod($scanner,'finishMetrics'))->invoke($scanner,$start);
 if($mode==='cached'&&($metrics['metadataExtractions']!==0||$metrics['cachedWarningSkips']!==count($rows)))throw new RuntimeException('Expected all unchanged successful warnings to be cached');
 $r=$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_items WHERE user_id=?',[$uid]);$books=(int)$r->fetchOne();$r->closeCursor();$r=$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_files f WHERE f.user_id=? AND f.scan_status=? AND NOT EXISTS (SELECT 1 FROM *PREFIX*library_items i WHERE i.user_id=f.user_id AND i.library_file_id=f.id)',[$uid,'metadata_error']);$absent=(int)$r->fetchOne();$r->closeCursor();
 echo json_encode(['event'=>'result','selected'=>count($rows),'processed'=>$done,'metadataWarnings'=>$summary['metadataErrors'],'catalogueItems'=>$books,'warningFilesWithoutCatalogueItem'=>$absent,'peakMemoryBytes'=>memory_get_peak_usage(true),'metrics'=>$metrics],JSON_THROW_ON_ERROR),PHP_EOL;
}catch(Throwable $e){fwrite(STDERR,get_class($e).': warning cache check failed'.PHP_EOL);exit(1);}
