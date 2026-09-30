<?php
declare(strict_types=1);
define('OC_CONSOLE',true); require '/var/www/html/lib/base.php';
$uid='library-paged-scan-'.bin2hex(random_bytes(6));$account=null;$checks=0;$failed=false;
function checkScanPaging(bool $ok,string $message):void {global $checks;if(!$ok)throw new RuntimeException($message);$checks++;}
try {
 $account=\OC::$server->get(\OCP\IUserManager::class)->createUser($uid,bin2hex(random_bytes(24)));
 $home=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid);
 $folder=$home->newFolder('Paged scan');$content="%PDF-1.4\n1 0 obj\n<< /Title (Paging fixture) >>\nendobj\n%%EOF";
 $files=[];for($n=0;$n<205;$n++)$files[]=$folder->newFile(sprintf('Document-%03d.%s',$n,$n%2?'PdF':'pdf'),$content);
 $roots=\OC::$server->get(\OCA\Library\Service\RootService::class);$root=$roots->saveRoot($uid,'/Paged scan','Paging fixture',true);
 $scanner=\OC::$server->get(\OCA\Library\Service\LibraryScanner::class);$db=\OC::$server->get(\OCP\IDBConnection::class);
 $result=$scanner->scan($uid,(int)$root['id']);
 checkScanPaging($result['indexed']===205 && $result['errors']===[],'All records across multiple search pages are indexed');
 $count=(int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_items WHERE user_id=?',[$uid])->fetchOne();
 checkScanPaging($count===205,'Mixed-case extensions and page boundaries preserve every item exactly once');
 $files[101]->getStorage()->unlink($files[101]->getInternalPath());
 $result=$scanner->scan($uid,(int)$root['id']);
 checkScanPaging($result['indexed']===204 && $result['filesMissing']===1 && $result['errors']===[],'Physical deletion with a stale Nextcloud cache is marked missing');
 checkScanPaging($result['fingerprintSkips']===204,'Unchanged paged sources retain the fingerprint fast path');
 checkScanPaging(hash('sha256',$files[0]->getContent())===hash('sha256',$content),'Source content is unchanged');
 $db->executeStatement('UPDATE *PREFIX*library_roots SET last_scan_at=0 WHERE user_id=? AND id=?',[$uid,$root['id']]);
 $changed=false;
 $result=$scanner->scan($uid,(int)$root['id'],function(array $progress)use(&$changed,$folder,$content):void{
  if(!$changed && $progress['indexed']>=1){$changed=true;$folder->newFile('Added-during-scan.pdf',$content);}
 });
 checkScanPaging($changed && count($result['errors'])===1 && $result['filesMissing']===0,'Changing scope aborts the missing sweep');
 checkScanPaging((int)$db->executeQuery('SELECT last_scan_at FROM *PREFIX*library_roots WHERE user_id=? AND id=?',[$uid,$root['id']])->fetchOne()===0,'Interrupted enumeration does not mark the root fully scanned');
 $result=$scanner->scan($uid,(int)$root['id']);
 checkScanPaging($result['indexed']===205 && $result['errors']===[],'A stable retry completes after the scope changes');
 echo json_encode(['passed'=>true,'assertions'=>$checks,'fixtureBooks'=>205]),PHP_EOL;
}catch(Throwable $e){$failed=true;fwrite(STDERR,get_class($e).': '.$e->getMessage().PHP_EOL);}
finally{if($account)$account->delete();}
if($failed)exit(1);
