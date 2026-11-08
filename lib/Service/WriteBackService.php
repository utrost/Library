<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCA\Library\WriteBack\EpubMetadataWriter;
use OCP\Files\{File,IAppData,IRootFolder,NotFoundException};
use OCP\Files\SimpleFS\{ISimpleFolder,ISimpleFile};
use OCP\{IDBConnection,ITempManager,IURLGenerator};
use OCP\Lock\ILockingProvider;
use OCA\Library\Exception\MetadataConflictException;

/** Reviewed source writes with retained originals and identity checks on a locked r+ stream. */
final class WriteBackService {
    public function __construct(private IDBConnection $db,private IAppData $appData,private IRootFolder $root,private ITempManager $temps,private BookAccessService $access,private ItemService $items,private EpubMetadataWriter $writer,private ILockingProvider $locks,private ScanChangeJournal $journal,private IURLGenerator $urls,private ChangeHistoryService $history) {}
    private function rows(string $sql,array $params=[]): array { $r=$this->db->executeQuery($sql,$params);try { return $r->fetchAll(); } finally { $r->closeCursor(); } }
    private function folder(string $uid): ISimpleFolder {
        $name='writeback-'.hash('sha256',$uid);
        try { return $this->appData->getFolder($name); } catch (NotFoundException) { try { return $this->appData->newFolder($name); } catch (\Throwable) { return $this->appData->getFolder($name); } }
    }
    private function file(string $uid,int $id): File {
        foreach ($this->root->getUserFolder($uid)->getById($id) as $file) if ($file instanceof File && $file->isReadable() && $file->isUpdateable()) {
            // Seekability alone is insufficient: DAV/object-store/encryption wrappers can
            // buffer locally and commit on fclose, after verification/rollback has ended.
            // Refuse them before even opening r+ (which itself may upload on close).
            if (!$file->getStorage()->isLocal()) throw new \DomainException('storage_not_supported');
            return $file;
        }
        throw new \OutOfBoundsException('not_found');
    }
    private function job(string $uid,string $id): array {
        if (!preg_match('/^[a-f0-9]{32}$/D',$id)) throw new \OutOfBoundsException();
        $row=$this->rows('SELECT * FROM *PREFIX*library_writeback_jobs WHERE user_id=? AND id=?',[$uid,$id])[0] ?? null;
        if (!$row) throw new \OutOfBoundsException();$row['data']=json_decode($row['payload'],true,32,JSON_THROW_ON_ERROR);return $row;
    }
    private function save(array $job,string $status,array $data): void {
        $this->db->beginTransaction();
        try {
            $this->db->executeStatement('UPDATE *PREFIX*library_writeback_jobs SET id=id WHERE user_id=? AND id=?',[$job['user_id'],$job['id']]);
            $current=$this->job($job['user_id'],$job['id']);
            $this->db->executeStatement('UPDATE *PREFIX*library_writeback_jobs SET status=?,payload=?,expires_at=? WHERE user_id=? AND id=?',[$status,json_encode($data,JSON_THROW_ON_ERROR),time()+604800,$job['user_id'],$job['id']]);
            if ($current['status']!==$status && in_array($status,['applied','restored','rolled_back','recovery_required'],true)) $this->history->sourceWrite($job['user_id'],(int)$job['item_id'],$job['id'],$status,$data['review']);
            $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack();throw $e; }
    }
    /** Copy an already-authorized stream; never buffer an entire book in PHP memory. */
    private function copy($source,$target,int $limit=EpubMetadataWriter::MAX_BYTES): int {
        if (!is_resource($source) || !is_resource($target)) throw new \RuntimeException('stream_unavailable');
        $bytes=stream_copy_to_stream($source,$target,$limit+1);
        if ($bytes===false) throw new \RuntimeException('read_failed');
        if ($bytes>$limit) throw new \LengthException('file_limit');
        // Optimized file-to-file copies need not set EOF until another read.
        $tail=fread($source,1);
        if ($tail===false) throw new \RuntimeException('read_failed');
        if ($tail!=='' || !feof($source)) throw new \LengthException('file_limit');
        if (!fflush($target)) throw new \RuntimeException('write_failed');return $bytes;
    }
    private function keep(string $uid,string $name,string $path): void {
        $file=$this->folder($uid)->newFile($name);$source=fopen($path,'rb');$target=$file->write();
        try { $this->copy($source,$target); } finally { if (is_resource($source)) fclose($source);if (is_resource($target)) fclose($target); }
    }
    public function preview(string $uid,int $itemId,array $fields): array {
        $lock='library-writeback:'.substr(hash('sha256',$uid),0,46);$this->locks->acquireLock($lock,ILockingProvider::LOCK_EXCLUSIVE);
        $id=bin2hex(random_bytes(16));$original=$this->temps->getTemporaryFile('.epub');$candidate=$this->temps->getTemporaryFile('.epub');
        try {
            // Five retained originals bound per-account staging to 1.25 GiB.
            if ((int)$this->rows('SELECT COUNT(*) AS n FROM *PREFIX*library_writeback_jobs WHERE user_id=?',[$uid])[0]['n']>=5) throw new \DomainException('backup_limit');
            $item=$this->access->require($uid,$itemId);$file=$this->file($uid,(int)$item['fileId']);
            if (in_array('authors',$fields,true) && !in_array($item['authorSyncStatus'],[0,2],true)) throw new \DomainException('authors_not_ready');
            if (strtolower(pathinfo($file->getName(),PATHINFO_EXTENSION))!=='epub' || $file->getSize()>EpubMetadataWriter::MAX_BYTES) throw new \DomainException('unsupported_epub');
            $etag=$file->getEtag();$source=$file->fopen('rb');$target=fopen($original,'wb');
            try { $this->copy($source,$target); } finally { if (is_resource($source)) fclose($source);fclose($target); }
            if (!copy($original,$candidate)) throw new \RuntimeException('staging_failed');
            $review=$this->writer->prepare($candidate,$item,$fields);
            $this->keep($uid,$id.'-original.epub',$original);$this->keep($uid,$id.'-candidate.epub',$candidate);
            $payload=['fileId'=>(int)$file->getId(),'name'=>$file->getName(),'etag'=>$etag,'revision'=>$item['metadataRevision'],'sourceHash'=>hash_file('sha256',$original),'targetHash'=>hash_file('sha256',$candidate),'review'=>$review,'confirmUntil'=>time()+900];
            $q=$this->db->getQueryBuilder();$q->insert('library_writeback_jobs')->values(array_map(fn($v)=>$q->createNamedParameter($v),['id'=>$id,'user_id'=>$uid,'item_id'=>$itemId,'status'=>'preview','payload'=>json_encode($payload,JSON_THROW_ON_ERROR),'created_at'=>time(),'expires_at'=>time()+604800]))->executeStatement();
            return $this->publicJob($this->job($uid,$id));
        } catch (\Throwable $e) {
            foreach (['original','candidate'] as $kind) try { $this->folder($uid)->getFile($id.'-'.$kind.'.epub')->delete(); } catch (NotFoundException) {}
            throw $e;
        } finally { @unlink($original);@unlink($candidate);$this->locks->releaseLock($lock,ILockingProvider::LOCK_EXCLUSIVE); }
    }
    private function publicJob(array $job): array {
        $p=$job['data'];return ['id'=>$job['id'],'status'=>$job['status'],'name'=>$p['name'],'review'=>$p['review'],'confirmUntil'=>$p['confirmUntil'],'reconciliationPending'=>$p['reconciliationPending'] ?? false,'itemId'=>(int)$job['item_id'],'expiresAt'=>(int)$job['expires_at'],'backupUrl'=>$this->urls->linkToRoute('library.write_back.backup',['id'=>$job['id']])];
    }
    public function list(string $uid,int $itemId): array {
        if ($itemId>0 && !$this->items->findItem($uid,$itemId)) throw new \OutOfBoundsException();
        $rows=$this->rows('SELECT * FROM *PREFIX*library_writeback_jobs WHERE user_id=? ORDER BY created_at DESC LIMIT 5',[$uid]);
        return array_map(function($row) { $row['data']=json_decode($row['payload'],true,32,JSON_THROW_ON_ERROR);return $this->publicJob($row); },$rows);
    }
    private function digest($stream): string { if (fseek($stream,0)!==0) throw new \DomainException('storage_not_seekable');$hash=hash_init('sha256');$count=hash_update_stream($hash,$stream,EpubMetadataWriter::MAX_BYTES+1);if ($count>EpubMetadataWriter::MAX_BYTES || !feof($stream)) throw new \LengthException('file_limit');return hash_final($hash); }
    /** Both Apply and recovery keep one exclusive file stream open through compare/write/verification. */
    public function apply(string $uid,string $id,bool $restore=false): array {
        $lock='library-writeback:'.substr(hash('sha256',$uid),0,46);$this->locks->acquireLock($lock,ILockingProvider::LOCK_EXCLUSIVE);$stream=null;$file=null;$mutated=false;
        try {
            $job=$this->job($uid,$id);$p=$job['data'];$status=$job['status'];
            if (!$restore && $status==='applied' || $restore && $status==='restored') return $this->publicJob($job);
            if ($restore ? !in_array($status,['applied','writing','recovery_required'],true) : !in_array($status,['preview','writing'],true)) throw new \DomainException('invalid_transition');
            if (!$restore && $status==='preview' && $p['confirmUntil']<time()) throw new MetadataConflictException('preview_expired');
            $item=$this->access->require($uid,(int)$job['item_id']);
            if ((int)$item['fileId']!==$p['fileId'] || (!$restore && $status==='preview' && !hash_equals($item['metadataRevision'],$p['revision']))) throw new MetadataConflictException('metadata_changed');
            $file=$this->file($uid,$p['fileId']);
            if (!$restore && $status==='preview' && $file->getEtag()!==$p['etag']) throw new MetadataConflictException('source_changed');
            // Nextcloud holds an exclusive mandatory lock for the lifetime of r+.
            // r+ does not truncate, so all checks precede the first changed byte.
            $stream=$file->fopen('r+');if (!is_resource($stream) || !stream_get_meta_data($stream)['seekable']) throw new \DomainException('storage_not_seekable');
            $fresh=$this->file($uid,$p['fileId']);
            if ($fresh->getId()!==$file->getId() || $fresh->getPath()!==$file->getPath()) throw new MetadataConflictException('source_changed');
            $actual=$this->digest($stream);$desired=$restore ? $p['sourceHash'] : $p['targetHash'];
            if ($actual===$desired && $status!=='preview') { $mutated=true;$this->save($job,$restore ? 'restored' : 'applied',$p);return $this->publicJob($this->job($uid,$id)); }
            $expected=$restore ? $p['targetHash'] : $p['sourceHash'];
            // Interrupted writes never authorize overwriting unexplained bytes; backup download remains available.
            if (!hash_equals($expected,$actual)) throw new MetadataConflictException('source_changed');
            $input=$this->folder($uid)->getFile($id.($restore ? '-original.epub' : '-candidate.epub'))->read();
            if (!is_resource($input)) throw new \RuntimeException('backup_unavailable');
            try {
                // Verify retained bytes before touching the live source, including our recovery copy.
                if (!hash_equals($desired,$this->digest($input))) throw new \DomainException('backup_changed');
                if (fseek($input,0)!==0) throw new \DomainException('backup_changed');
                if (!$restore) {
                    $original=$this->folder($uid)->getFile($id.'-original.epub')->read();
                    try { if (!is_resource($original) || !hash_equals($p['sourceHash'],$this->digest($original))) throw new \DomainException('backup_changed'); }
                    finally { if (is_resource($original)) fclose($original); }
                }
                $this->save($job,'writing',$p);
                if (fseek($stream,0)!==0) throw new \DomainException('storage_not_seekable');
                $mutated=true;$bytes=$this->copy($input,$stream);
                if (!ftruncate($stream,$bytes) || !fflush($stream) || !hash_equals($desired,$this->digest($stream))) throw new \RuntimeException('write_failed');
            } finally { fclose($input); }
            $this->save($job,$restore ? 'restored' : 'applied',$p);
            return $this->publicJob($this->job($uid,$id));
        } catch (\Throwable $e) {
            if ($mutated && isset($job,$p)) {
                // Best-effort rollback uses the same locked stream, never a path-based replacement.
                try {
                    $backup=$this->folder($uid)->getFile($id.'-original.epub')->read();
                    try { if (!is_resource($backup) || !hash_equals($p['sourceHash'],$this->digest($backup)) || fseek($backup,0)!==0 || fseek($stream,0)!==0) throw new \RuntimeException();$bytes=$this->copy($backup,$stream);if (!ftruncate($stream,$bytes) || !fflush($stream) || $this->digest($stream)!==$p['sourceHash']) throw new \RuntimeException(); }
                    finally { if (is_resource($backup)) fclose($backup); }
                    $this->save($job,'rolled_back',$p);
                } catch (\Throwable) { $this->save($job,'recovery_required',$p); }
                return $this->publicJob($this->job($uid,$id));
            }
            throw $e;
        } finally {
            try {
            if (is_resource($stream)) fclose($stream);
            if ($file && $mutated) {
                try { $file->getStorage()->getUpdater()->update($file->getInternalPath());$this->journal->recordNodePath($file->getPath(),false,'application/epub+zip'); }
                catch (\Throwable) { if (isset($job,$p)) { $current=$this->job($uid,$id);$p['reconciliationPending']=true;$this->save($job,$current['status'],$p); } }
            }
            } finally { $this->locks->releaseLock($lock,ILockingProvider::LOCK_EXCLUSIVE); }
        }
    }
    public function backup(string $uid,string $id): ISimpleFile { $job=$this->job($uid,$id);return $this->folder($uid)->getFile($id.'-original.epub'); }
    public function delete(string $uid,string $id): void {
        $lock='library-writeback:'.substr(hash('sha256',$uid),0,46);$this->locks->acquireLock($lock,ILockingProvider::LOCK_EXCLUSIVE);
        try { $job=$this->job($uid,$id);if (in_array($job['status'],['writing','recovery_required'],true)) throw new \DomainException('recovery_required');foreach (['original','candidate'] as $kind) try { $this->folder($uid)->getFile($id.'-'.$kind.'.epub')->delete(); } catch (NotFoundException) {}$this->db->executeStatement('DELETE FROM *PREFIX*library_writeback_jobs WHERE user_id=? AND id=?',[$uid,$id]); }
        finally { $this->locks->releaseLock($lock,ILockingProvider::LOCK_EXCLUSIVE); }
    }
    public function expire(): void { foreach ($this->rows("SELECT id,user_id FROM *PREFIX*library_writeback_jobs WHERE expires_at<? AND status NOT IN ('writing','recovery_required') ORDER BY expires_at LIMIT 5",[time()]) as $job) $this->delete($job['user_id'],$job['id']); }
    public function deleteAccount(string $uid): void { try { $this->folder($uid)->delete(); } catch (NotFoundException) {} }
}
