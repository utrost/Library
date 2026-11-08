<?php
declare(strict_types=1);
// Fault injection only inside a labelled disposable Nextcloud container.
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
if(getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1')throw new RuntimeException('Disposable fixture opt-in required');
set_exception_handler(static function(Throwable $e):void{fwrite(STDERR,get_class($e).': '.$e->getMessage()."\n".$e->getTraceAsString()."\n");exit(1);});
function service(string $name):object{return \OC::$server->get('OCA\\Library\\Service\\'.$name);}
function check(bool $ok,string $message):void{if(!$ok)throw new RuntimeException($message);echo "PASS $message\n";}
function pending(callable $work,string $message):void{try{$work();}catch(RuntimeException $e){check($e->getMessage()==='file_share_cleanup_pending',$message);return;}throw new RuntimeException('Expected pending cleanup: '.$message);}
$db=\OC::$server->get(\OCP\IDBConnection::class);$users=\OC::$server->get(\OCP\IUserManager::class);$session=\OC::$server->get(\OCP\IUserSession::class);$manager=\OC::$server->get(\OCP\Share\IManager::class);$sharing=service('RootShareService');
$owner='library-legacy-'.bin2hex(random_bytes(4));$user=$users->createUser($owner,'Disposable-legacy-2026');$session->setUser($user);$files=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($owner);$recipient='library-recipient';
function fixture(string $case,?string $marker='fixture-marker',bool $pendingId=false):array{
 global $files,$owner,$recipient,$manager,$db;
 $folder=$files->newFolder('Legacy-'.$case.'-'.bin2hex(random_bytes(3)));$folder->newFile('keep.txt','Synthetic legacy sharing fixture');$root=service('RootService')->saveRoot($owner,'/'.$folder->getName(),'Legacy fixture',true);
 $share=$manager->newShare();$share->setShareType(\OCP\Share\IShare::TYPE_USER)->setSharedBy($owner)->setShareOwner($owner)->setSharedWith($recipient)->setNode($folder)->setPermissions(\OCP\Constants::PERMISSION_READ)->setNote('Library managed share: '.($marker ?? 'unknown'));
 $share=$manager->createShare($share);$manager->acceptShare($share,$recipient);$share=$manager->getShareById($share->getFullId());
 $db->executeStatement('INSERT INTO *PREFIX*library_root_shares (owner_user_id,recipient_user_id,root_id,root_file_id,managed_share_id,recovery_token,access_mode,scope_name,revoked_at,created_at) VALUES (?,?,?,?,?,?,?,?,?,?)',[$owner,$recipient,$root['id'],$folder->getId(),$pendingId ? null : $share->getFullId(),$marker,'files',null,null,time()-120]);
 return ['id'=>(int)$db->lastInsertId('library_root_shares'),'share'=>$share,'root'=>$root,'folder'=>$folder];
}
function exists(array $f):bool{global $manager;try{$manager->getShareById($f['share']->getFullId());return true;}catch(\OCP\Share\Exceptions\ShareNotFound){return false;}}
function assertHidden(array $f):void{global $db,$sharing,$recipient;$value=$db->executeQuery('SELECT revoked_at FROM *PREFIX*library_root_shares WHERE id=?',[$f['id']])->fetchOne();check($value!==false && $value!==null && $sharing->visibleGrant($recipient,$f['id'])===null,'pending cleanup hides Library access');}
function manualCleanup(array $f):void{global $manager,$sharing,$owner;if(exists($f))$manager->deleteShare($manager->getShareById($f['share']->getFullId()));check($sharing->revoke($owner,$f['id']),'owner can complete cleanup after removing the fixture share in Files');check(!$sharing->revoke($owner,$f['id']),'completed cleanup retry is idempotent');}

$valid=fixture('valid');check($sharing->revoke($owner,$valid['id']) && !exists($valid),'exact legacy share is removed');check($valid['folder']->nodeExists('keep.txt'),'share cleanup preserves files');
foreach(['missing-marker','changed-note','changed-permissions','changed-expiry','wrong-folder','wrong-recipient'] as $case){
 $f=fixture($case,$case==='missing-marker' ? null : 'fixture-marker');$share=$f['share'];
 if($case==='changed-note'){$share->setNote('Owner edited this Files share');$manager->updateShare($share);}
 if($case==='changed-permissions'){$share->setPermissions(\OCP\Constants::PERMISSION_READ|\OCP\Constants::PERMISSION_UPDATE);$manager->updateShare($share);}
 if($case==='changed-expiry'){$share->setExpirationDate(new DateTime('+7 days'));$manager->updateShare($share);}
 if($case==='wrong-folder')$db->executeStatement('UPDATE *PREFIX*library_root_shares SET root_file_id=? WHERE id=?',[$files->getId(),$f['id']]);
 if($case==='wrong-recipient')$db->executeStatement('UPDATE *PREFIX*library_root_shares SET recipient_user_id=? WHERE id=?',['library-other',$f['id']]);
 pending(fn()=>$sharing->revoke($owner,$f['id']),$case.' does not authorize Files deletion');check(exists($f),$case.' Files share survives');assertHidden($f);manualCleanup($f);
}
$f=fixture('interrupted-create','pending-marker',true);check($sharing->revoke($owner,$f['id']) && !exists($f),'interrupted create resolves the exact recovery marker');
$f=fixture('interrupted-changed','pending-marker',true);$f['share']->setPermissions(\OCP\Constants::PERMISSION_READ|\OCP\Constants::PERMISSION_UPDATE);$manager->updateShare($f['share']);pending(fn()=>$sharing->revoke($owner,$f['id']),'interrupted create preserves a changed matching share');check(exists($f),'changed pending share survives');assertHidden($f);manualCleanup($f);
$f=fixture('numeric-id');$db->executeStatement('UPDATE *PREFIX*library_root_shares SET managed_share_id=? WHERE id=?',[$f['share']->getId(),$f['id']]);check($sharing->revoke($owner,$f['id']) && !exists($f),'early numeric managed-share IDs remain supported');
$f=fixture('root-removal');$sharing->revokeRoot($owner,(int)$f['root']['id']);check(!exists($f),'root cleanup uses exact legacy share identity');

// Inject a real database failure at Files share deletion, then retry shutdown.
$f=fixture('delete-failure');$table=\OC::$server->get(\OCP\IConfig::class)->getSystemValue('dbtableprefix','oc_').'share';$shareId=(int)$f['share']->getId();$engine=$db->getDatabaseProvider();
if($engine==='mysql')$db->executeStatement("CREATE TRIGGER library_legacy_delete_failure BEFORE DELETE ON $table FOR EACH ROW BEGIN IF OLD.id=$shareId THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='injected legacy cleanup failure'; END IF; END");
elseif($engine==='sqlite')$db->executeStatement("CREATE TRIGGER library_legacy_delete_failure BEFORE DELETE ON $table WHEN OLD.id=$shareId BEGIN SELECT RAISE(ABORT,'injected legacy cleanup failure'); END");
else{$db->executeStatement("CREATE FUNCTION library_legacy_failure() RETURNS trigger AS \$\$ BEGIN IF OLD.id=$shareId THEN RAISE EXCEPTION 'injected legacy cleanup failure'; END IF; RETURN OLD; END; \$\$ LANGUAGE plpgsql");$db->executeStatement("CREATE TRIGGER library_legacy_delete_failure BEFORE DELETE ON $table FOR EACH ROW EXECUTE FUNCTION library_legacy_failure()");}
try{pending(fn()=>$sharing->revokeAllForShutdown(),'shutdown reports failed Files cleanup');assertHidden($f);check(exists($f),'failed Files deletion retains exact share for retry');}
finally{$db->executeStatement('DROP TRIGGER library_legacy_delete_failure'.($engine==='postgres' ? ' ON '.$table : ''));if($engine==='postgres')$db->executeStatement('DROP FUNCTION library_legacy_failure()');}
check($sharing->revokeAllForShutdown()>=1,'shutdown resumes interrupted cleanup');check(!exists($f),'retry removes the exact managed share');check($sharing->revokeAllForShutdown()===0,'repeated shutdown is idempotent');$sharing->allowSharesAfterEnable();
check($db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_root_shares WHERE owner_user_id=?',[$owner])->fetchOne()==0,'legacy fixture leaves no unresolved grant');
