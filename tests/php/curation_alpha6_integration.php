<?php
declare(strict_types=1);
// Run only on the labelled disposable development instance, after the populated upgrade check.
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
if (getenv('LIBRARY_DISPOSABLE_FIXTURE') !== '1') throw new RuntimeException('Disposable fixture opt-in required');
set_exception_handler(static function(Throwable $e): void { fwrite(STDERR, get_class($e).': '.$e->getMessage()."\n".$e->getTraceAsString()."\n"); exit(1); });
function service(string $name): object { return \OC::$server->get('OCA\\Library\\Service\\'.$name); }
function check(bool $ok, string $message): void { if (!$ok) throw new RuntimeException($message); echo "PASS $message\n"; }
function rejects(callable $work, string $message): void { try { $work(); } catch (OutOfBoundsException|DomainException|InvalidArgumentException|\OCA\Library\Exception\MetadataConflictException $e) { check(true,$message); return; } throw new RuntimeException('Did not reject: '.$message); }
$db=\OC::$server->get(\OCP\IDBConnection::class);
$uid='library-smoke';
\OC::$server->get(\OCP\IUserSession::class)->setUser(\OC::$server->get(\OCP\IUserManager::class)->get($uid));
$files=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid);
$mode=$argv[1] ?? 'services';
if ($mode==='schema') {
 $schema=new \OC\DB\SchemaWrapper(\OC::$server->get(\OC\DB\Connection::class)); $before=serialize($schema->getWrappedSchema());
 $out=new class implements \OCP\Migration\IOutput { public function debug(string $message):void {} public function info($message) {} public function warning($message) {} public function startProgress($max=0) {} public function advance($step=1,$description='') {} public function finishProgress() {} };
 (new \OCA\Library\Migration\Version000400Date20261108100000())->changeSchema($out,static fn()=>$schema,[]);
 check(serialize($schema->getWrappedSchema())===$before,'alpha6 migration rerun makes no schema changes');
 foreach (['BookAccessService','ChangeHistoryService','BookNotesService','CurationInboxService','CurationJobService','CurationPortabilityService','HomeDashboardService','HomeHealthSnapshot','WriteBackService'] as $s) check(is_object(service($s)), 'container resolves '.$s);
 exit;
}
$items=service('ItemService'); $history=service('ChangeHistoryService');
$id=(int)$db->executeQuery('SELECT MIN(id) FROM *PREFIX*library_items WHERE user_id=?',[$uid])->fetchOne();
function drainExpiredArchives():void {
 global $db;
 // Simulate repeated bounded cron cleanup on this disposable installation.
 for($n=0;$n<100;$n++) {
  if(!(int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_portable_jobs WHERE expires_at<?',[time()])->fetchOne())return;
  service('CurationPortabilityService')->expire();
 }
 throw new RuntimeException('Disposable archive cleanup did not finish within its fixture bound');
}
if ($mode==='browser-reset') {
 // Repeated self-restore browser trials must not recursively export their imported evidence.
 // This helper is restricted to the synthetic fixture owner and labelled-container harness.
 $db->executeStatement("DELETE FROM *PREFIX*library_change_history WHERE user_id=? AND kind='imported_evidence'",[$uid]);
 // Only resolved jobs from this disposable owner; retain unresolved recovery evidence.
 $writer=service('WriteBackService');foreach($writer->list($uid,0) as $job)if(in_array($job['status'],['preview','applied','restored','rolled_back'],true))$writer->delete($uid,$job['id']);
 $jobs=service('CurationJobService');foreach($jobs->list($uid) as $job)if(in_array($job['status'],['complete','undone','cancelled'],true))$jobs->control($uid,$job['id'],'delete');
 $archives=service('CurationPortabilityService');foreach($archives->list($uid) as $job)if($job['status']==='complete')$archives->control($uid,$job['id'],'delete');
 drainExpiredArchives();
 echo "browser_capacity_reset=true\n";exit;
}
if ($mode==='notes-title') {
 $before=$items->findItem($uid,$id);$file=null;$noteId=null;$notes=service('BookNotesService');
 try {
  $title='![Cover](https://example.invalid/image.png) <img src="https://example.invalid/track"> [Title] **bold** #1';
  $items->updateItem($uid,$id,['title'=>$title],$before['metadataRevision']);$created=$notes->create($uid,$id);$noteId=$created[count($created)-1]['id'];$file=$files->getById($noteId)[0];$content=$file->getContent();
  check(str_starts_with($content,'# \\!\\[Cover\\]\\(https://example\\.invalid/image\\.png\\) \\<img'),'note headings escape imported Markdown and HTML syntax');
  check(str_contains($content,'\\[Title\\] \\*\\*bold\\*\\* \\#1'),'note headings preserve punctuation as literal text');
  check(substr_count($content,"\n\n[Library](")===1,'generated note retains its deliberate Library link');
 }finally{
  if($noteId)$notes->detach($uid,$id,$noteId);if($file)$file->delete();$current=$items->findItem($uid,$id);$items->updateItem($uid,$id,['title'=>$before['title']],$current['metadataRevision']);
 }
 exit;
}
if ($mode==='archive-indexing') {
 $archives=service('CurationPortabilityService');drainExpiredArchives();$job=null;
 $original=$db->executeQuery('SELECT author_sync_status,series_sync_status FROM *PREFIX*library_items WHERE user_id=? AND id=?',[$uid,$id])->fetch();
 try {
  foreach(['author_sync_status','series_sync_status'] as $column)foreach([1,3] as $status){
   $db->executeStatement('UPDATE *PREFIX*library_items SET '.$column.'=? WHERE user_id=? AND id=?',[$status,$uid,$id]);
   $blocked=false;try{$archives->create($uid,'export');}catch(DomainException $e){$blocked=$e->getMessage()==='catalogue_indexing';}check($blocked,'export refuses incomplete '.$column.' state '.$status);
   $db->executeStatement('UPDATE *PREFIX*library_items SET '.$column.'=? WHERE user_id=? AND id=?',[$original[$column],$uid,$id]);
  }
  $job=$archives->create($uid,'restore');$name='Indexing restore fixture '.bin2hex(random_bytes(4));
  $archives->upload($uid,$job['id'],[['kind'=>'author','key'=>'1','data'=>['display_name'=>$name,'sort_name'=>$name]]]);$archives->control($uid,$job['id'],'finish',1);
  for($n=0;$n<100 && $archives->show($uid,$job['id'])['status']==='validating';$n++)$archives->advance();
  $db->executeStatement('UPDATE *PREFIX*library_items SET author_sync_status=1 WHERE user_id=? AND id=?',[$uid,$id]);$archives->control($uid,$job['id'],'approve');
  for($n=0;$n<100 && $archives->show($uid,$job['id'])['status']==='applying';$n++)$archives->advance();
  $paused=$archives->show($uid,$job['id']);check($paused['status']==='paused' && $paused['error']==='catalogue_indexing','unfinished indexing pauses restore with an actionable reason');
  check($paused['rows'][0]['status']==='ready','indexing pause preserves the approved record for retry');
  check((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_authors WHERE user_id=? AND display_name=?',[$uid,$name])->fetchOne()===0,'indexing pause rolls back partial author creation');
  $db->executeStatement('UPDATE *PREFIX*library_items SET author_sync_status=? WHERE user_id=? AND id=?',[$original['author_sync_status'],$uid,$id]);$archives->control($uid,$job['id'],'resume');
  for($n=0;$n<100 && $archives->show($uid,$job['id'])['status']==='applying';$n++)$archives->advance();
  check($archives->show($uid,$job['id'])['status']==='complete','restore resumes after indexing completes');
  check((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_authors WHERE user_id=? AND display_name=?',[$uid,$name])->fetchOne()===1,'resumed author is created exactly once');
 }finally{
  foreach($original as $column=>$value)$db->executeStatement('UPDATE *PREFIX*library_items SET '.$column.'=? WHERE user_id=? AND id=?',[$value,$uid,$id]);
  if($job)$archives->control($uid,$job['id'],'delete');drainExpiredArchives();
 }
 exit;
}
if ($mode==='history-live-source') {
 $before=$items->findItem($uid,$id);$file=$files->getById((int)$before['fileId'])[0];$original=$file->getContent();$later='History live source '.bin2hex(random_bytes(4));
 try {
  $items->updateItem($uid,$id,['publisher'=>$later],$before['metadataRevision']);$event=$history->page($uid,$id)['rows'][0];
  $history->undo($uid,$id,$event['id'],$items);check($items->findItem($uid,$id)['publisher']===$before['publisher'],'history Undo still succeeds for an unchanged live source');
  $current=$items->findItem($uid,$id);$items->updateItem($uid,$id,['publisher'=>$later],$current['metadataRevision']);$event=$history->page($uid,$id)['rows'][0];
  $file->putContent($original."\nSynthetic source change before scanner reconciliation.");
  rejects(fn()=>$history->undo($uid,$id,$event['id'],$items),'history Undo rejects a live source change before the scanner notices');
  check($items->findItem($uid,$id)['publisher']===$later,'rejected history Undo preserves saved metadata');
 }finally{
  $file->putContent($original);$current=$items->findItem($uid,$id);$items->updateItem($uid,$id,['publisher'=>$before['publisher']],$current['metadataRevision']);
  $rootId=(int)$db->executeQuery('SELECT root_id FROM *PREFIX*library_files WHERE user_id=? AND file_id=?',[$uid,$file->getId()])->fetchOne();service('LibraryScanner')->scan($uid,$rootId);
 }
 check($file->getContent()===$original,'history fixture restores exact source bytes');
 foreach(['AuthorStorageService','SeriesStorageService'] as $storage){for($n=0;$n<20 && service($storage)->status($uid)['pending']>0;$n++)service($storage)->advance($uid,500,30);check(service($storage)->status($uid)['pending']===0,'history fixture completes rescan relationship indexing');}
 exit;
}
if ($mode==='worker-isolation') {
 $jobs=service('CurationJobService');$archives=service('CurationPortabilityService');drainExpiredArchives();$expired=bin2hex(random_bytes(16));
 $db->executeStatement('INSERT INTO *PREFIX*library_writeback_jobs (id,user_id,item_id,status,payload,created_at,expires_at) VALUES (?,?,?,?,?,?,?)',[$expired,$uid,$id,'preview','{}',time()-100,time()-1]);
 $job=$jobs->create($uid,[$id],['field'=>'publisher','value'=>'Worker isolation fixture'],bin2hex(random_bytes(16)));$archive=$archives->create($uid,'export');$original=$items->findItem($uid,$id)['publisher'];
 $table=\OC::$server->get(\OCP\IConfig::class)->getSystemValue('dbtableprefix','oc_').'library_writeback_jobs';$engine=$db->getDatabaseProvider();
 if($engine==='mysql')$db->executeStatement("CREATE TRIGGER library_test_expiry_fail BEFORE DELETE ON $table FOR EACH ROW BEGIN IF OLD.id='$expired' THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='injected cleanup failure'; END IF; END");
 elseif($engine==='sqlite')$db->executeStatement("CREATE TRIGGER library_test_expiry_fail BEFORE DELETE ON $table WHEN OLD.id='$expired' BEGIN SELECT RAISE(ABORT,'injected cleanup failure'); END");
 else{$db->executeStatement("CREATE FUNCTION library_test_expiry_failure() RETURNS trigger AS \$\$ BEGIN IF OLD.id='$expired' THEN RAISE EXCEPTION 'injected cleanup failure'; END IF; RETURN OLD; END; \$\$ LANGUAGE plpgsql");$db->executeStatement("CREATE TRIGGER library_test_expiry_fail BEFORE DELETE ON $table FOR EACH ROW EXECUTE FUNCTION library_test_expiry_failure()");}
 try{
  \OC::$server->get(\OCA\Library\BackgroundJob\CurationJob::class)->run(null);
  check($jobs->show($uid,$job['id'])['status']==='review','failed expired-backup cleanup does not block organisation');
  check($archives->show($uid,$archive['id'])['status']==='complete','failed expired-backup cleanup does not block archive preparation');
  check($items->findItem($uid,$id)['publisher']===$original,'background preparation never applies an unapproved edit');
 }finally{
  $db->executeStatement('DROP TRIGGER library_test_expiry_fail'.($engine==='postgres' ? ' ON '.$table : ''));if($engine==='postgres')$db->executeStatement('DROP FUNCTION library_test_expiry_failure()');
  service('WriteBackService')->delete($uid,$expired);$jobs->control($uid,$job['id'],'cancel');$jobs->control($uid,$job['id'],'delete');
  if($archives->show($uid,$archive['id'])['status']==='exporting')$archives->control($uid,$archive['id'],'pause');$archives->control($uid,$archive['id'],'delete');drainExpiredArchives();
 }
 exit;
}
if ($mode==='archive-empty') {
 $users=\OC::$server->get(\OCP\IUserManager::class);$emptyUid='library-empty-'.bin2hex(random_bytes(4));$user=$users->createUser($emptyUid,'Disposable-empty-2026');$archives=service('CurationPortabilityService');
 try {
  $export=$archives->create($emptyUid,'export');for($n=0;$n<100 && $archives->show($emptyUid,$export['id'])['status']!=='complete';$n++)$archives->advance();
  $download=implode('',iterator_to_array($archives->download($emptyUid,$export['id'])));$manifest=json_decode(trim($download),true,32,JSON_THROW_ON_ERROR);
  check($manifest['records']===0 && strlen($download)<=4096,'empty-account archive contains a bounded zero-record manifest');
  $restore=$archives->create($emptyUid,'restore');rejects(fn()=>$archives->control($emptyUid,$restore['id'],'finish',-1),'negative manifest count is rejected');
  $complete=$archives->control($emptyUid,$restore['id'],'finish',0);check($complete['status']==='complete' && $complete['rows']===[],'empty archive completes without a misleading error or approval');
  check((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_items WHERE user_id=?',[$emptyUid])->fetchOne()===0,'empty restore creates no books');
 }finally{$user->delete();}exit;
}
if ($mode==='archive-bounds') {
 $archives=service('CurationPortabilityService');drainExpiredArchives();$job=$archives->create($uid,'restore');$record=['kind'=>'genre','key'=>'1','data'=>['display_name'=>'Archive bounds fixture']];
 try {
  rejects(fn()=>$archives->upload('library-outsider',$job['id'],[$record]),'foreign archive upload denied');
  rejects(fn()=>$archives->control('library-outsider',$job['id'],'finish',1),'foreign archive control denied');
  rejects(fn()=>$archives->show('library-outsider',$job['id']),'foreign archive review denied');
  rejects(fn()=>$archives->upload($uid,$job['id'],[$record,['kind'=>'invalid','key'=>'2','data'=>[]]]),'malformed upload batch rejected');
  check($archives->show($uid,$job['id'])['rows']===[],'failed batch leaves no partial records');
  $archives->upload($uid,$job['id'],[$record]);$bytes=$archives->show($uid,$job['id'])['bytes'];$archives->upload($uid,$job['id'],[$record]);check($archives->show($uid,$job['id'])['bytes']===$bytes,'identical retry does not consume archive quota');
  $db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET bytes=? WHERE id=?',[1073741824,$job['id']]);
  $archives->upload($uid,$job['id'],[$record]);check($archives->show($uid,$job['id'])['bytes']===1073741824,'lost-response retry succeeds at the quota boundary');
  rejects(fn()=>$archives->upload($uid,$job['id'],[['kind'=>'genre','key'=>'1','data'=>['display_name'=>'Changed retry']]]),'changed retry cannot replace accepted data');
  $tooLarge=false;try{$archives->upload($uid,$job['id'],[['kind'=>'genre','key'=>'2','data'=>['display_name'=>'Over quota']]]);}catch(LengthException){$tooLarge=true;}check($tooLarge && count($archives->show($uid,$job['id'])['rows'])===1,'new record at full quota is rejected atomically');
  $db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET bytes=? WHERE id=?',[$bytes,$job['id']]);
  $db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET bytes=? WHERE id=?',[1073741824-32,$job['id']]);
  $tooLarge=false;try{$archives->upload($uid,$job['id'],[['kind'=>'genre','key'=>'2','data'=>[]]]);}catch(LengthException){$tooLarge=true;}check($tooLarge,'archive quota reserves record framing and manifest bytes for a restorable download');
  $db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET bytes=? WHERE id=?',[$bytes,$job['id']]);
  $tooLarge=false;try{$archives->upload($uid,$job['id'],[['kind'=>'genre','key'=>'2','data'=>['display_name'=>str_repeat('x',15000001)]]]);}catch(LengthException){$tooLarge=true;}check($tooLarge,'oversized archive record is rejected');
  rejects(fn()=>$archives->control($uid,$job['id'],'finish',2),'wrong manifest count cannot finish upload');
  check($archives->show($uid,$job['id'])['status']==='uploading','incomplete upload remains resumable');
 }finally{$archives->control($uid,$job['id'],'delete');drainExpiredArchives();}
 $job=$archives->create($uid,'restore');
 try {
  $archives->upload($uid,$job['id'],[['kind'=>'book','key'=>'1','data'=>[]],['kind'=>'history','key'=>'1','data'=>['item_id'=>'1','kind'=>'manual','created_at'=>time(),'evidence'=>['oversized'=>str_repeat('x',524289)]]]]);
  // Isolate history bounds with an already-resolved, owned dependency; do not mutate the book.
  $db->executeStatement("UPDATE *PREFIX*library_portable_rows SET status='applied',target_id=? WHERE job_id=? AND kind='book'",[$id,$job['id']]);
  $archives->control($uid,$job['id'],'finish',2);for($n=0;$n<100 && $archives->show($uid,$job['id'])['status']==='validating';$n++)$archives->advance();
  $before=(int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_change_history WHERE user_id=?',[$uid])->fetchOne();$archives->control($uid,$job['id'],'approve');for($n=0;$n<100 && $archives->show($uid,$job['id'])['status']==='applying';$n++)$archives->advance();
  $row=array_values(array_filter($archives->show($uid,$job['id'])['rows'],fn($r)=>$r['kind']==='history'))[0];check($row['status']==='conflict','oversized imported history becomes a record conflict');
  check((int)$db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_change_history WHERE user_id=?',[$uid])->fetchOne()===$before,'oversized evidence creates no history event');
 }finally{$archives->control($uid,$job['id'],'delete');drainExpiredArchives();}
 $job=$archives->create($uid,'restore');
 try {
  $archives->upload($uid,$job['id'],[['kind'=>'list','key'=>'1','data'=>['name'=>'Oversized review fixture','description'=>str_repeat('x',150000)]]]);$archives->control($uid,$job['id'],'finish',1);
  for($n=0;$n<100 && $archives->show($uid,$job['id'])['status']==='validating';$n++)$archives->advance();$review=$archives->show($uid,$job['id']);
  check($review['rows'][0]['status']==='conflict' && $review['rows'][0]['review']['error']==='review_too_large','oversized review is refused before approval');
  check(strlen(json_encode($review))<4096,'oversized record cannot inflate the review response');
 }finally{$archives->control($uid,$job['id'],'delete');drainExpiredArchives();}
 $job=$archives->create($uid,'export');
 try {
  $db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET bytes=?,stage=5 WHERE id=?',[1073741824,$job['id']]);
  for($n=0;$n<100 && $archives->show($uid,$job['id'])['status']==='exporting';$n++)$archives->advance();$paused=$archives->show($uid,$job['id']);
  check($paused['status']==='paused' && $paused['error']==='archive_size_limit','export quota failure explains the size limit instead of suggesting a blind retry');
 }finally{$archives->control($uid,$job['id'],'delete');drainExpiredArchives();}
 exit;
}
if ($mode==='organisation') {
 $jobs=service('CurationJobService');$original=$items->findItem($uid,$id);$savedLinks=$history->links($original);
 service('AuthorStorageService')->advance($uid,200,5);service('SeriesStorageService')->advance($uid,200,5);
 $authors=[];foreach(['First','Second','Third'] as $label)$authors[]=(int)service('AuthorDirectoryService')->create($uid,'Organisation '.$label.' '.bin2hex(random_bytes(3)))['id'];
 $genreIds=[];foreach(['First','Second'] as $label)$genreIds[]=(int)service('GenreService')->create($uid,'Organisation '.$label.' '.bin2hex(random_bytes(3)))['id'];
 $series=service('SeriesStorageService')->create($uid,'Organisation series '.bin2hex(random_bytes(3)));
 $run=function(array $spec,bool $remove=true)use($jobs,$uid,$id):array{
  $request=bin2hex(random_bytes(16));$job=$jobs->create($uid,[$id],$spec,$request);check($jobs->create($uid,[$id],$spec,$request)['id']===$job['id'],'organisation create retry retains identity');
  for($n=0;$n<20 && $jobs->show($uid,$job['id'])['status']==='preparing';$n++)$jobs->advance();$jobs->control($uid,$job['id'],'approve');
  for($n=0;$n<20 && $jobs->show($uid,$job['id'])['status']==='applying';$n++)$jobs->advance();$result=$jobs->show($uid,$job['id']);check($result['rows'][0]['status']==='applied','organisation applies '.$spec['field']);if($remove)$jobs->control($uid,$job['id'],'delete');return $result;
 };
 $links=fn()=>$history->links($items->findItem($uid,$id));
 $run(['field'=>'authors','mode'=>'set','value'=>[$authors[0],$authors[1]]]);check($links()['authors']===[$authors[0],$authors[1]],'author replacement preserves chosen order');
 $run(['field'=>'authors','mode'=>'add','value'=>[$authors[0],$authors[2]]]);check($links()['authors']===$authors,'author add deduplicates and appends');
 $run(['field'=>'authors','mode'=>'remove','value'=>[$authors[1]]]);check($links()['authors']===[$authors[0],$authors[2]],'author removal preserves remaining order');
 $cleared=$run(['field'=>'authors','mode'=>'set','value'=>[]],false);check($links()['authors']===[],'empty author replacement clears assignments');$jobs->control($uid,$cleared['id'],'undo');for($n=0;$n<20 && $jobs->show($uid,$cleared['id'])['status']==='undoing';$n++)$jobs->advance();check($links()['authors']===[$authors[0],$authors[2]],'author Undo restores original order');$jobs->control($uid,$cleared['id'],'delete');
 $run(['field'=>'genres','mode'=>'set','value'=>$genreIds]);check($links()['genres']===$genreIds,'genre replacement assigns both genres');$run(['field'=>'genres','mode'=>'remove','value'=>[$genreIds[0]]]);check($links()['genres']===[$genreIds[1]],'genre remove retains other assignments');
 $run(['field'=>'series','value'=>$series]);$run(['field'=>'part','value'=>'2.5']);check($links()['series']===$series && $links()['part']==='2.5','series part is edited separately');$run(['field'=>'series','value'=>null]);check($links()['series']===null && $links()['part']==='','removing series clears its part');
 $invalid=$jobs->create($uid,[$id],['field'=>'part','value'=>'4'],bin2hex(random_bytes(16)));for($n=0;$n<20 && $jobs->show($uid,$invalid['id'])['status']==='preparing';$n++)$jobs->advance();$invalidRow=$jobs->show($uid,$invalid['id'])['rows'][0];check($invalidRow['status']==='failed' && $invalidRow['error']==='series_required','series part without a series explains why it cannot be applied');$jobs->control($uid,$invalid['id'],'delete');
 $run(['field'=>'language','value'=>'ger; DEU; de']);check($items->findItem($uid,$id)['language']==='de','organisation normalizes language aliases');
 $late=$run(['field'=>'publisher','value'=>'Undo conflict fixture'],false);$current=$items->findItem($uid,$id);$items->updateItem($uid,$id,['description'=>'Later independent edit'],$current['metadataRevision']);$jobs->control($uid,$late['id'],'undo');for($n=0;$n<20 && $jobs->show($uid,$late['id'])['status']==='undoing';$n++)$jobs->advance();check($jobs->show($uid,$late['id'])['rows'][0]['status']==='undo_conflict','Undo rejects later independent metadata');check($items->findItem($uid,$id)['description']==='Later independent edit','Undo conflict preserves later metadata');$jobs->control($uid,$late['id'],'delete');
 $foreign=service('AuthorDirectoryService')->create('library-outsider','Foreign organisation author');rejects(fn()=>$jobs->create($uid,[$id],['field'=>'authors','value'=>[(int)$foreign['id']]],bin2hex(random_bytes(16))),'organisation rejects another account author');
 // Restore the synthetic book's original values after the checks.
 $current=$items->findItem($uid,$id);foreach($history->links($current) as $key=>$value)$savedLinks['before'.ucfirst($key)]=$value;
 $metadata=array_diff_key($history->snapshot($original),array_flip(['links','coverRevision','starred','workflowStatus','markedForDeletionAt']));$items->updateItem($uid,$id,$metadata,$current['metadataRevision'],$savedLinks,$original['fieldSources']);
 check($history->links($items->findItem($uid,$id))===$history->links($original),'organisation fixture restores original assignments');exit;
}
if ($mode==='services') {
 $before=$items->findItem($uid,$id);
 $items->updateItem($uid,$id,['title'=>'Curation integration title'],$before['metadataRevision']);
 $events=$history->page($uid,$id)['rows']; check($events[0]['kind']==='manual','manual save creates history');
 $history->undo($uid,$id,$events[0]['id'],$items);
 check($items->findItem($uid,$id)['title']===$before['title'],'history undo restores title');
 $history->undo($uid,$id,$events[0]['id'],$items); check(true,'history undo retry is idempotent');
 rejects(fn()=>service('BookAccessService')->require('library-outsider',$id),'cross-owner book access denied');
 $jobs=service('CurationJobService'); $job=$jobs->create($uid,[$id],['field'=>'publisher','value'=>'Integration Press'],bin2hex(random_bytes(16)));
 for($n=0;$n<10 && $jobs->show($uid,$job['id'])['status']!=='review';$n++) $jobs->advance();
 $review=$jobs->show($uid,$job['id']); check($review['status']==='review' && $review['rows'][0]['status']==='ready','organisation prepares review');
 rejects(fn()=>$jobs->show('library-outsider',$job['id']),'cross-owner organisation denied');
 $jobs->control($uid,$job['id'],'approve');
 for($n=0;$n<10 && $jobs->show($uid,$job['id'])['status']!=='complete';$n++) $jobs->advance();
 check($items->findItem($uid,$id)['publisher']==='Integration Press','organisation applies selected value');
 $jobs->control($uid,$job['id'],'undo');
 for($n=0;$n<10 && $jobs->show($uid,$job['id'])['status']!=='undone';$n++) $jobs->advance();
 check($items->findItem($uid,$id)['publisher']===$before['publisher'],'organisation undo restores value');
 $stale=$jobs->create($uid,[$id],['field'=>'publisher','value'=>'Must not apply'],bin2hex(random_bytes(16)));
 for($n=0;$n<10 && $jobs->show($uid,$stale['id'])['status']!=='review';$n++) $jobs->advance();
 $current=$items->findItem($uid,$id);$items->updateItem($uid,$id,['description'=>'Newer edit'],$current['metadataRevision']);
 $jobs->control($uid,$stale['id'],'approve'); for($n=0;$n<10 && $jobs->show($uid,$stale['id'])['status']!=='complete';$n++) $jobs->advance();
 check($jobs->show($uid,$stale['id'])['rows'][0]['status']==='conflict','stale organisation is rejected');
 check($items->findItem($uid,$id)['description']==='Newer edit','stale rejection preserves newer value');
 $genres=service('GenreService'); $parent=$genres->create($uid,'Integration Fiction'); $child=$genres->create($uid,'Integration Mystery');
 $child=$genres->updateHierarchy($uid,(int)$child['id'],$child['display_name'],(int)$parent['id'],(int)$genres->genre($uid,(int)$child['id'])['treeRevision']);
 check(count($genres->descendants($uid,(int)$parent['id'])['genres'])===1,'genre descendant closure');
 rejects(fn()=>$genres->updateHierarchy($uid,(int)$parent['id'],$parent['display_name'],(int)$child['id'],(int)$genres->genre($uid,(int)$parent['id'])['treeRevision']),'genre cycle rejected');
 $genres->assign($uid,$id,(int)$child['id'],true);
 rejects(fn()=>$genres->removeUnused($uid,(int)$child['id'],(int)$genres->genre($uid,(int)$child['id'])['treeRevision']),'assigned genre deletion rejected');
 $notes=service('BookNotesService');$created=$notes->create($uid,$id);$note=$created[count($created)-1];
 check($note['available'],'note created and linked');
 $noteFile=$files->getById($note['id'])[0];$noteFile->move($noteFile->getParent()->getPath().'/Renamed integration note.md');
 check($notes->list($uid,$id)[count($created)-1]['name']==='Renamed integration note.md','note link survives rename');
 rejects(fn()=>$notes->attach('library-outsider',$id,$note['id']),'cross-owner note attachment denied');
 $notes->detach($uid,$id,$note['id']);check($files->getById($note['id'])!==[],'detaching note preserves source file');
 $inbox=service('CurationInboxService');$page=$inbox->page($uid,0,'all');$row=array_values(array_filter($page['items'] ?? $page['rows'],fn($r)=>(int)$r['id']===$id))[0];
 $inbox->decide($uid,$id,$row['revision'],'done');check(true,'inbox decision accepted');
 $cur=$items->findItem($uid,$id);$items->updateItem($uid,$id,['description'=>'Changed after review'],$cur['metadataRevision']);
 rejects(fn()=>$inbox->decide($uid,$id,$row['revision'],'done'),'stale inbox decision rejected');
 check(is_array(service('HomeDashboardService')->data($uid)),'home dashboard data loads');
 echo "services_complete=true\n";exit;
}
if ($mode==='writeback') {
 $folder=$files->nodeExists('WritebackFixture') ? $files->get('WritebackFixture') : $files->newFolder('WritebackFixture');
 $tmp=tempnam('/tmp','epub');$zip=new ZipArchive();$zip->open($tmp,ZipArchive::CREATE|ZipArchive::OVERWRITE);
 $zip->addFromString('mimetype','application/epub+zip');$zip->setCompressionName('mimetype',ZipArchive::CM_STORE);
 $zip->addFromString('META-INF/container.xml','<?xml version="1.0"?><container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0"><rootfiles><rootfile full-path="content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>');
 $zip->addFromString('content.opf','<?xml version="1.0"?><package xmlns="http://www.idpf.org/2007/opf" version="2.0" unique-identifier="book-id"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>Original fixture</dc:title><dc:identifier id="book-id">urn:uuid:fixture</dc:identifier><dc:language>en</dc:language><dc:creator>Fixture Author</dc:creator></metadata><manifest><item id="chapter" href="chapter.xhtml" media-type="application/xhtml+xml"/></manifest><spine><itemref idref="chapter"/></spine></package>');
 $zip->addFromString('chapter.xhtml','<html xmlns="http://www.w3.org/1999/xhtml"><head><title>Fixture</title></head><body><p>Unchanged content.</p></body></html>');$zip->close();
 $original=file_get_contents($tmp);unlink($tmp);$file=$folder->newFile('writeback-'.bin2hex(random_bytes(3)).'.epub',$original);
 $root=service('RootService')->saveRoot($uid,'/WritebackFixture','Write-back fixture',true);service('LibraryScanner')->scan($uid,$root['id']);
 $bookId=(int)$db->executeQuery('SELECT i.id FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=? AND f.file_id=?',[$uid,$file->getId()])->fetchOne();
 $book=$items->findItem($uid,$bookId);$items->updateItem($uid,$bookId,['title'=>'Reviewed fixture title','publisher'=>'Fixture publisher'],$book['metadataRevision']);
 $writer=service('WriteBackService');$preview=$writer->preview($uid,$bookId,['title','publisher']);
 check($preview['status']==='preview','write-back preview staged');check(hash('sha256',$file->getContent())===hash('sha256',$original),'preview preserves source bytes');
 rejects(fn()=>$writer->apply('library-outsider',$preview['id']),'cross-owner source write denied');
 $applied=$writer->apply($uid,$preview['id']);check($applied['status']==='applied','source write applied');
 check(hash('sha256',$file->getContent())!==hash('sha256',$original),'source bytes changed');
 check($writer->apply($uid,$preview['id'])['status']==='applied','source write retry idempotent');
 $restored=$writer->apply($uid,$preview['id'],true);check($restored['status']==='restored','source restore applied');check($file->getContent()===$original,'restore recovers exact original bytes');
 $writer->delete($uid,$preview['id']);
 $preview=$writer->preview($uid,$bookId,['title']);$current=$items->findItem($uid,$bookId);$items->updateItem($uid,$bookId,['title'=>'Later title'],$current['metadataRevision']);
 rejects(fn()=>$writer->apply($uid,$preview['id']),'stale write-back metadata rejected');check($file->getContent()===$original,'stale rejection leaves source untouched');$writer->delete($uid,$preview['id']);
 $preview=$writer->preview($uid,$bookId,['title']);
 $appData=\OC::$server->get(\OCP\Files\AppData\IAppDataFactory::class)->get('library');
 $staging=$appData->getFolder('writeback-'.hash('sha256',$uid));
 $staging->getFile($preview['id'].'-candidate.epub')->putContent('Injected invalid staged bytes');
 rejects(fn()=>$writer->apply($uid,$preview['id']),'damaged staged file rejected before writing');
 check($file->getContent()===$original,'damaged staged file leaves source untouched');$writer->delete($uid,$preview['id']);
 $preview=$writer->preview($uid,$bookId,['title']);
 $staging->getFile($preview['id'].'-original.epub')->putContent('Damaged recovery copy');
 rejects(fn()=>$writer->apply($uid,$preview['id']),'damaged recovery copy blocks source write');
 check($file->getContent()===$original,'damaged recovery copy leaves source untouched');$writer->delete($uid,$preview['id']);
 $preview=$writer->preview($uid,$bookId,['title']);
 $table=\OC::$server->get(\OCP\IConfig::class)->getSystemValue('dbtableprefix','oc_').'library_writeback_jobs';
 $engine=$db->getDatabaseProvider();
 if ($engine==='mysql') $db->executeStatement("CREATE TRIGGER library_test_writeback_fail BEFORE UPDATE ON $table FOR EACH ROW BEGIN IF NEW.status='applied' THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='injected receipt failure'; END IF; END");
 elseif ($engine==='sqlite') $db->executeStatement("CREATE TRIGGER library_test_writeback_fail BEFORE UPDATE ON $table WHEN NEW.status='applied' BEGIN SELECT RAISE(ABORT,'injected receipt failure'); END");
 else { $db->executeStatement("CREATE FUNCTION library_test_writeback_failure() RETURNS trigger AS \$\$ BEGIN IF NEW.status='applied' THEN RAISE EXCEPTION 'injected receipt failure'; END IF; RETURN NEW; END; \$\$ LANGUAGE plpgsql");$db->executeStatement("CREATE TRIGGER library_test_writeback_fail BEFORE UPDATE ON $table FOR EACH ROW EXECUTE FUNCTION library_test_writeback_failure()"); }
 try { $failed=$writer->apply($uid,$preview['id']);check($failed['status']==='rolled_back','receipt failure rolls back source write');check($file->getContent()===$original,'receipt failure restores exact original bytes'); }
 finally { $db->executeStatement('DROP TRIGGER library_test_writeback_fail'.($engine==='postgres' ? ' ON '.$table : ''));if ($engine==='postgres') $db->executeStatement('DROP FUNCTION library_test_writeback_failure()'); }
 $writer->delete($uid,$preview['id']);
 $preview=$writer->preview($uid,$bookId,['title']);
 $db->executeStatement("UPDATE *PREFIX*library_writeback_jobs SET status='writing',expires_at=? WHERE id=?",[time()-1,$preview['id']]);
 rejects(fn()=>$writer->delete($uid,$preview['id']),'interrupted backup deletion blocked');
 $writer->expire();check($writer->backup($uid,$preview['id'])->getContent()===$original,'interrupted backup survives expiry');
 $file->putContent($original.'External change');
 rejects(fn()=>$writer->apply($uid,$preview['id']),'interrupted write rejects unexplained source bytes');
 check($file->getContent()===$original.'External change','recovery refusal preserves external changes');
 $file->putContent($original);
 check($writer->apply($uid,$preview['id'])['status']==='applied','interrupted unchanged source can resolve');
 check($writer->apply($uid,$preview['id'],true)['status']==='restored','resolved interrupted write can restore');
 $writer->delete($uid,$preview['id']);
 $preview=$writer->preview($uid,$bookId,['title']);$oldId=$file->getId();$name=$file->getName();$file->delete();$replacement=$folder->newFile($name,$original);
 check($replacement->getId()!==$oldId,'replacement file has new identity');
 rejects(fn()=>$writer->apply($uid,$preview['id']),'replacement at old path is never overwritten');
 check($replacement->getContent()===$original,'replacement bytes preserved');$writer->delete($uid,$preview['id']);
 // Reconcile the disposable replacement so later archive matching has a live catalogue entry.
 service('LibraryScanner')->scan($uid,$root['id']);
 echo json_encode(['writebackItemId'=>$bookId]),"\n";exit;
}
if ($mode==='worker') {
 drainExpiredArchives();
 service('AuthorStorageService')->advance($uid,200,5);service('SeriesStorageService')->advance($uid,200,5);
 for($n=0;$n<10000;$n++) { $a=service('CurationJobService')->advance();$b=service('CurationPortabilityService')->advance();if (!$a && !$b) break; }
 check(!$a && !$b,'fixture workers finish within their bounded pass');
 echo "worker_complete=true\n";exit;
}
if ($mode==='lock-seed') {
 $writer=service('WriteBackService');foreach($writer->list($uid,0) as $job)if(in_array($job['status'],['preview','applied','restored','rolled_back'],true))$writer->delete($uid,$job['id']);
 $r=$db->executeQuery("SELECT i.id FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id WHERE i.user_id=? AND f.extension='epub' AND f.scan_status='indexed' ORDER BY i.id DESC LIMIT 1",[$uid]);$bookId=(int)$r->fetchOne();$r->closeCursor();$book=$items->findItem($uid,$bookId);
 $items->updateItem($uid,$bookId,['title'=>'File locking fixture'],$book['metadataRevision']);$book=$items->findItem($uid,$bookId);$file=$files->getById((int)$book['fileId'])[0];
 $job=$writer->preview($uid,$bookId,['title']);file_put_contents('/tmp/library-writeback-lock.json',json_encode(['id'=>$job['id'],'fileId'=>$file->getId(),'hash'=>hash('sha256',$file->getContent())]));@unlink('/tmp/library-writeback-lock.ready');echo "lock_fixture_ready=true\n";exit;
}
if ($mode==='lock-holder' || $mode==='lock-check' || $mode==='lock-verify') {
 $fixture=json_decode(file_get_contents('/tmp/library-writeback-lock.json'),true,32,JSON_THROW_ON_ERROR);$file=$files->getById($fixture['fileId'])[0];
 if($mode==='lock-holder'){$stream=$file->fopen('r+');if(!is_resource($stream))throw new RuntimeException('lock fixture unavailable');file_put_contents('/tmp/library-writeback-lock.ready','ready');try{sleep(30);}finally{fclose($stream);@unlink('/tmp/library-writeback-lock.ready');}exit;}
 if($mode==='lock-check'){check(file_exists('/tmp/library-writeback-lock.ready'),'other process holds source stream');
 try{service('WriteBackService')->apply($uid,$fixture['id']);throw new RuntimeException('concurrent source lock was ignored');}catch(\OCP\Lock\LockedException){check(true,'concurrent source lock prevents write-back');}exit;}
 check(!file_exists('/tmp/library-writeback-lock.ready'),'other source stream has closed');
 check(hash('sha256',$file->getContent())===$fixture['hash'],'blocked write preserves original bytes');service('WriteBackService')->delete($uid,$fixture['id']);exit;
}
if ($mode==='concurrency-seed') {
 $ids=array_map('intval',array_column(service('CurationInboxService')->page($uid,0,'all')['rows'],'id'));$ids=array_slice($ids,0,3);check(count($ids)===3,'three disposable books selected');
 $publisher='Concurrent workers fixture '.bin2hex(random_bytes(4));
 $job=service('CurationJobService')->create($uid,$ids,['field'=>'publisher','value'=>$publisher],bin2hex(random_bytes(16)));
 file_put_contents('/tmp/library-curation-concurrency.json',json_encode(['id'=>$job['id'],'ids'=>$ids,'publisher'=>$publisher]));echo 'job='.$job['id']."\n";exit;
}
if ($mode==='concurrency-worker') {
 for($n=0;$n<80;$n++){service('CurationJobService')->advance();usleep(2000);}echo "concurrent_worker_complete=true\n";exit;
}
if ($mode==='concurrency-approve' || $mode==='concurrency-verify') {
 $fixture=json_decode(file_get_contents('/tmp/library-curation-concurrency.json'),true,32,JSON_THROW_ON_ERROR);$jobs=service('CurationJobService');$job=$jobs->show($uid,$fixture['id']);
 if($mode==='concurrency-approve') {check($job['status']==='review','concurrent preparation reaches review');check(count($job['rows'])===3,'concurrent preparation creates one row per book');$jobs->control($uid,$job['id'],'approve');exit;}
 check($job['status']==='complete','concurrent apply completes');check(count($job['rows'])===3,'concurrent apply keeps unique receipts');foreach($job['rows'] as $row)check($row['status']==='applied','concurrent row applied');
 foreach($fixture['ids'] as $bookId){check($items->findItem($uid,$bookId)['publisher']===$fixture['publisher'],'concurrent apply saves intended publisher');$events=$history->page($uid,$bookId)['rows'];$matching=array_filter($events,fn($e)=>$e['kind']==='organisation' && ($e['changes']['after']['publisher'] ?? '')===$fixture['publisher']);check(count($matching)===1,'one history event per concurrent mutation');}
 $jobs->control($uid,$job['id'],'undo');for($n=0;$n<20 && $jobs->show($uid,$job['id'])['status']!=='undone';$n++)$jobs->advance();check($jobs->show($uid,$job['id'])['status']==='undone','concurrent job remains undoable');$jobs->control($uid,$job['id'],'delete');exit;
}
if ($mode==='native') {
 foreach (['Search\\BookProvider','Search\\AuthorProvider','Reference\\BookReferenceProvider','Dashboard\\LibraryWidget'] as $name) {
  $native=\OC::$server->get('OCA\\Library\\'.$name);check(is_object($native),'native registration '.$name);
 }
 $urls=\OC::$server->get(\OCP\IURLGenerator::class);$reference=\OC::$server->get(\OCA\Library\Reference\BookReferenceProvider::class);$url=$urls->linkToRouteAbsolute('library.page.index').'?details='.$id;
 check($reference->resolveReference($url)!==null,'owned book reference resolves');$key=$reference->getCacheKey($url);
 \OC::$server->get(\OCP\IUserSession::class)->setUser(\OC::$server->get(\OCP\IUserManager::class)->get('library-outsider'));
 check($reference->resolveReference($url)===null,'outsider book reference is denied');check($reference->getCacheKey($url)!==$key,'reference cache is owner scoped');
 check(!$reference->matchReference('https://example.invalid/apps/library/?details='.$id),'external reference rejected');
 \OC::$server->get(\OCP\IUserSession::class)->setUser(\OC::$server->get(\OCP\IUserManager::class)->get($uid));
 $items->setWorkflowStatus($uid,$id,'to-read');$widget=\OC::$server->get(\OCA\Library\Dashboard\LibraryWidget::class);
 check(count($widget->getItems($uid))>0,'native dashboard returns owned books');check($widget->getItems('library-outsider')===[],'native dashboard isolates owners');
 service('HomeHealthSnapshot')->read($uid);service('HomeHealthSnapshot')->refreshOne();check(service('HomeHealthSnapshot')->read($uid)['at']>0,'queued health refresh runs');exit;
}
if ($mode==='genres') {
 $genres=service('GenreService');$nodes=[];$prefix='Hierarchy fixture '.bin2hex(random_bytes(3));
 for($depth=0;$depth<8;$depth++){$node=$genres->create($uid,$prefix.' '.$depth);$nodes[]=(int)$node['id'];$genres->updateHierarchy($uid,(int)$node['id'],$node['display_name'],$depth ? $nodes[$depth-1] : null,(int)$genres->genre($uid,(int)$node['id'])['treeRevision']);}
 check(count($genres->descendants($uid,$nodes[0])['genres'])===7,'eight genre levels are represented in closure');
 $tooDeep=$genres->create($uid,$prefix.' too deep');rejects(fn()=>$genres->updateHierarchy($uid,(int)$tooDeep['id'],$tooDeep['display_name'],$nodes[7],(int)$genres->genre($uid,(int)$tooDeep['id'])['treeRevision']),'ninth genre level rejected');
 $revision=(int)$genres->genre($uid,$nodes[0])['treeRevision'];$genres->updateHierarchy($uid,$nodes[0],$prefix.' renamed',null,$revision);
 rejects(fn()=>$genres->updateHierarchy($uid,$nodes[0],$prefix.' stale',null,$revision),'stale genre edit rejected');
 $outside=$genres->create('library-outsider',$prefix.' outsider');rejects(fn()=>$genres->updateHierarchy($uid,$nodes[0],$prefix.' renamed',(int)$outside['id'],(int)$genres->genre($uid,$nodes[0])['treeRevision']),'foreign genre parent rejected');
 $genres->assign($uid,$id,$nodes[0],true);$genres->assign($uid,$id,$nodes[7],true);
 $catalogue=$items->queryCatalogue($uid,['genreId'=>(string)$nodes[0]],['page'=>1,'limit'=>50,'deferTotal'=>true],false);
 check(count(array_filter($catalogue['items'],fn($book)=>$book['id']===$id))===1,'parent genre browsing does not duplicate multiply assigned books');
 $genres->assign($uid,$id,$nodes[0],false);$previews=service('DirectoryPreviewService')->books($uid,[$nodes[0]],'genre');check(count($previews[$nodes[0]] ?? [])===1 && (int)$previews[$nodes[0]][0]['id']===$id,'parent previews include books assigned only to a subgenre');
 $branch=$genres->genre($uid,$nodes[3]);$genres->updateHierarchy($uid,$nodes[3],$branch['display_name'],null,(int)$branch['treeRevision']);
 check(count($genres->descendants($uid,$nodes[0])['genres'])===2,'moving a branch removes old ancestor links');check(count($genres->descendants($uid,$nodes[3])['genres'])===4,'moving a branch retains internal descendants');
 $custom=$genres->create($uid,'Space opera');$customParent=$genres->create($uid,$prefix.' custom parent');$genres->updateHierarchy($uid,(int)$custom['id'],$custom['display_name'],(int)$customParent['id'],(int)$genres->genre($uid,(int)$custom['id'])['treeRevision']);
 $starter=$genres->starter($uid,'space-opera');check((int)$starter['id']===(int)$custom['id'] && (int)$starter['parent_id']===(int)$customParent['id'],'starter reuses custom identity without moving it');
 $starter=$genres->starter($uid,'cozy-mystery');$again=$genres->starter($uid,'cozy-mystery');check($starter['id']===$again['id'],'starter creation is idempotent');check($genres->genre($uid,(int)$starter['parent_id'])['display_name']==='Mystery','starter includes its parent');exit;
}
if ($mode==='boundaries') {
 check($items->curationItems('library-outsider',[$id])===[],'batch hydration isolates owners');
 check(service('CurationInboxService')->page('library-outsider')['rows']===[],'incoming queue isolates owners');
 $book=$items->findItem($uid,$id);$fileRow=$db->executeQuery('SELECT library_file_id FROM *PREFIX*library_items WHERE id=? AND user_id=?',[$id,$uid])->fetchOne();
 $db->beginTransaction();
 try {
  $db->executeStatement('UPDATE *PREFIX*library_files SET root_id=2147483647 WHERE id=? AND user_id=?',[$fileRow,$uid]);
  check($items->curationItems($uid,[$id])===[],'batch hydration rejects a missing root');
  check(!in_array($id,array_column(service('CurationInboxService')->page($uid,0,'all')['rows'],'id'),true),'incoming queue rejects a missing root');
 } finally {$db->rollBack();}
 check(isset($items->curationItems($uid,[$id])[$id]),'valid root remains available');
 $notes=service('BookNotesService');$created=$notes->create($uid,$id);$note=$created[count($created)-1];$noteFile=$files->getById($note['id'])[0];$noteFile->delete();
 $missing=array_values(array_filter($notes->list($uid,$id),fn($row)=>$row['id']===$note['id']))[0];
 check($missing['available']===false && $missing['name']===null && $missing['url']===null,'deleted note exposes no stale file details');
 $notes->detach($uid,$id,$note['id']);
 rejects(fn()=>$notes->browse($uid,'../library-outsider/files'),'note browser rejects path traversal');
 $recipient='library-recipient';\OC::$server->get(\OCP\IUserSession::class)->setUser(\OC::$server->get(\OCP\IUserManager::class)->get($recipient));
 $root=service('RootService')->saveRoot($recipient,'/LibraryLifecycle','Readonly fixture',true);service('LibraryScanner')->scan($recipient,$root['id']);
 $recipientId=(int)$db->executeQuery('SELECT MIN(id) FROM *PREFIX*library_items WHERE user_id=?',[$recipient])->fetchOne();
 rejects(fn()=>service('WriteBackService')->preview($recipient,$recipientId,['title']),'read-only source cannot be written');exit;
}
if ($mode==='archive') {
 $archive=service('CurationPortabilityService');
 service('AuthorStorageService')->advance($uid,200,5);service('SeriesStorageService')->advance($uid,200,5);
 $author=service('AuthorDirectoryService')->create($uid,'Archive Fixture Author');
 service('AuthorDirectoryService')->update($uid,(int)$author['id'],(int)$author['revision'],['display_name'=>$author['display_name'],'sort_name'=>$author['sort_name'],'given_name'=>$author['given_name'] ?? '', 'family_name'=>$author['family_name'] ?? '', 'biography'=>'Restored profile evidence']);
 $series=service('SeriesStorageService')->create($uid,'Archive Fixture Series');
 $current=$items->findItem($uid,$id);$links=$history->links($current);foreach($links as $key=>$value)$links['before'.ucfirst($key)]=$value;
 $links['authors']=[(int)$author['id']];$links['series']=$series;$links['part']='2';
 $items->updateItem($uid,$id,[],$current['metadataRevision'],$links);
 service('BookNotesService')->create($uid,$id);
 service('HomeDashboardService')->save($uid,['recent','changed'],0);
 $current=$items->findItem($uid,$id);$items->updateItem($uid,$id,['publisher'=>'Archive provenance fixture'],$current['metadataRevision'],null,['publisher'=>'open-library']);
 $export=$archive->create($uid,'export');
 for($n=0;$n<1000 && $archive->show($uid,$export['id'])['status']==='exporting';$n++) $archive->advance();
 $state=$archive->show($uid,$export['id']);check($state['status']==='complete','archive export completes');
 $records=[];foreach($archive->download($uid,$export['id']) as $line) $records[]=json_decode($line,true,64,JSON_THROW_ON_ERROR);
 $manifest=array_shift($records);check($manifest['records']===count($records),'archive manifest count is exact');
 check(count(array_filter($records,fn($r)=>$r['kind']==='book'))>0,'archive contains books');
 rejects(fn()=>$archive->show('library-outsider',$export['id']),'cross-owner archive denied');
 $current=$items->findItem($uid,$id);$items->updateItem($uid,$id,['publisher'=>'Newer destination publisher'],$current['metadataRevision']);
 $restore=$archive->create($uid,'restore');foreach(array_chunk($records,20) as $batch) $archive->upload($uid,$restore['id'],$batch);
 $archive->upload($uid,$restore['id'],array_slice($records,0,1));check(true,'archive upload duplicate is idempotent');
 $archive->control($uid,$restore['id'],'finish',count($records));
 for($n=0;$n<1000 && $archive->show($uid,$restore['id'])['status']==='validating';$n++) $archive->advance();
 $review=$archive->show($uid,$restore['id']);check($review['status']==='review','archive reaches review');
 foreach($review['counts'] as $count) check($count['status']==='ready','archive validation '.$count['kind'].' '.$count['status']);
 $archive->control($uid,$restore['id'],'approve');for($n=0;$n<1000 && $archive->show($uid,$restore['id'])['status']==='applying';$n++) $archive->advance();
 $result=$archive->show($uid,$restore['id']);check($result['status']==='complete','archive restore completes');
 foreach($result['counts'] as $count) {
  if ($count['status']!=='applied') { foreach($result['rows'] as $row) if ($row['status']!=='applied') echo json_encode($row),"\n"; }
  check($count['status']==='applied','archive applied '.$count['kind'].' '.$count['status']);
 }
 check($items->findItem($uid,$id)['publisher']==='Archive provenance fixture','archive restores saved publisher');
 check($items->findItem($uid,$id)['fieldSources']['publisher']==='open-library','archive restores changed field provenance');
 $archive->control($uid,$export['id'],'delete');$archive->control($uid,$restore['id'],'delete');for($n=0;$n<10;$n++) $archive->expire();
 check($archive->list($uid)===[],'archive cleanup completes');exit;
}
if ($mode==='archive-fault') {
 $archive=service('CurationPortabilityService');$book=$items->findItem($uid,$id);
 $data=$history->snapshot($book)+['cachedPath'=>$book['cachedPath'],'fileSize'=>$book['fileSize']];$data['title']='Archive interruption fixture';$data['links']=['authors'=>[],'genres'=>[],'series'=>null,'part'=>''];
 $job=$archive->create($uid,'restore');$records=[['kind'=>'book','key'=>'1','data'=>$data]];$archive->upload($uid,$job['id'],$records);
 rejects(fn()=>$archive->control($uid,$job['id'],'finish',2),'incomplete archive stays unapproved');
 $archive->control($uid,$job['id'],'finish',1);for($n=0;$n<40 && $archive->show($uid,$job['id'])['status']==='validating';$n++)$archive->advance();
 $row=$archive->show($uid,$job['id'])['rows'][0];$archive->control($uid,$job['id'],'skip',0,$row['id']);check($archive->show($uid,$job['id'])['rows'][0]['status']==='skipped','archive row can be skipped');
 $archive->control($uid,$job['id'],'include',0,$row['id']);check($archive->show($uid,$job['id'])['rows'][0]['status']==='ready','archive row can be included again');
 $table=\OC::$server->get(\OCP\IConfig::class)->getSystemValue('dbtableprefix','oc_').'library_items';$engine=$db->getDatabaseProvider();
 if($engine==='mysql')$db->executeStatement("CREATE TRIGGER library_test_archive_fail BEFORE UPDATE ON $table FOR EACH ROW BEGIN IF NEW.title='Archive interruption fixture' THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='injected restore failure'; END IF; END");
 elseif($engine==='sqlite')$db->executeStatement("CREATE TRIGGER library_test_archive_fail BEFORE UPDATE ON $table WHEN NEW.title='Archive interruption fixture' BEGIN SELECT RAISE(ABORT,'injected restore failure'); END");
 else{$db->executeStatement("CREATE FUNCTION library_test_archive_failure() RETURNS trigger AS \$\$ BEGIN IF NEW.title='Archive interruption fixture' THEN RAISE EXCEPTION 'injected restore failure'; END IF; RETURN NEW; END; \$\$ LANGUAGE plpgsql");$db->executeStatement("CREATE TRIGGER library_test_archive_fail BEFORE UPDATE ON $table FOR EACH ROW EXECUTE FUNCTION library_test_archive_failure()");}
 try{$archive->control($uid,$job['id'],'approve');for($n=0;$n<40 && $archive->show($uid,$job['id'])['status']==='applying';$n++)$archive->advance();check($archive->show($uid,$job['id'])['status']==='paused','unexpected restore failure pauses resumable job');check($items->findItem($uid,$id)['title']===$book['title'],'failed restore transaction preserves original');check($archive->show($uid,$job['id'])['rows'][0]['status']==='ready','unexpected failure does not silently skip row');}
 finally{$db->executeStatement('DROP TRIGGER library_test_archive_fail'.($engine==='postgres' ? ' ON '.$table : ''));if($engine==='postgres')$db->executeStatement('DROP FUNCTION library_test_archive_failure()');}
 $archive->control($uid,$job['id'],'resume');for($n=0;$n<40 && $archive->show($uid,$job['id'])['status']==='applying';$n++)$archive->advance();check($archive->show($uid,$job['id'])['rows'][0]['status']==='applied','restore resumes after transient failure');check($items->findItem($uid,$id)['title']==='Archive interruption fixture','resumed restore applies intended value');$archive->control($uid,$job['id'],'delete');for($n=0;$n<3;$n++)$archive->expire();exit;
}
throw new InvalidArgumentException('Unknown mode');
