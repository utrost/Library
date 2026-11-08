<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\IDBConnection;
use OCP\Lock\ILockingProvider;
use OCA\Library\Exception\MetadataConflictException;

/** Reviewed organisation jobs. Each book and its receipt commit atomically. */
final class CurationJobService {
    public function __construct(private IDBConnection $db,private ItemService $items,private BookAccessService $access,private ChangeHistoryService $history,private ILockingProvider $locks) {}
    private function rows(string $sql,array $params=[]): array { $r=$this->db->executeQuery($sql,$params);try { return $r->fetchAll(); } finally { $r->closeCursor(); } }
    private function insert(string $table,array $values): void { $q=$this->db->getQueryBuilder();$q->insert($table);foreach($values as $k=>$v)$q->setValue($k,$q->createNamedParameter($v));$q->executeStatement(); }
    private function job(string $uid,string $id): array {
        if (!preg_match('/^[a-f0-9]{32}$/D',$id)) throw new \OutOfBoundsException('not_found');
        $j=$this->rows('SELECT * FROM *PREFIX*library_curation_jobs WHERE user_id=? AND id=? AND expires_at>?',[$uid,$id,time()])[0] ?? null;
        if (!$j) throw new \OutOfBoundsException('not_found');$j['data']=json_decode($j['payload'],true,64,JSON_THROW_ON_ERROR);return $j;
    }
    public function create(string $uid,array $ids,array $spec,string $requestId): array {
        if (!array_is_list($ids) || !$ids || count($ids)>5000 || !preg_match('/^[a-f0-9]{32}$/D',$requestId)) throw new \InvalidArgumentException('invalid_selection');
        foreach ($ids as $id) if (!is_int($id) || $id<1 || $id>2147483647) throw new \InvalidArgumentException('invalid_selection');
        $ids=array_values(array_unique($ids));$spec=$this->validate($spec);$this->validateEntities($uid,$spec);$id=substr(hash('sha256',$uid."\0organisation\0".$requestId),0,32);
        $lock='library-curation:'.substr(hash('sha256',$uid),0,46);$this->locks->acquireLock($lock,ILockingProvider::LOCK_EXCLUSIVE);
        try {
            $existing=$this->rows('SELECT payload FROM *PREFIX*library_curation_jobs WHERE user_id=? AND id=?',[$uid,$id]);
            if ($existing) { $p=json_decode($existing[0]['payload'],true,64,JSON_THROW_ON_ERROR);if ($p['ids']!==$ids || $p['spec']!==$spec) throw new \DomainException('request_changed');return $this->show($uid,$id); }
            $count=$this->rows('SELECT COUNT(*) AS n FROM *PREFIX*library_curation_jobs WHERE user_id=? AND expires_at>?',[$uid,time()])[0]['n'];
            if ((int)$count>=20) throw new \DomainException('job_limit');
            $this->insert('library_curation_jobs',['id'=>$id,'user_id'=>$uid,'status'=>'preparing','payload'=>json_encode(['ids'=>$ids,'spec'=>$spec],JSON_THROW_ON_ERROR),'created_at'=>time(),'expires_at'=>time()+7776000,'work_cursor'=>0,'lease_until'=>0,'lease_token'=>'']);
        } finally { $this->locks->releaseLock($lock,ILockingProvider::LOCK_EXCLUSIVE); }
        return $this->show($uid,$id);
    }
    private function validate(array $spec): array {
        $field=$spec['field'] ?? ''; $mode=$spec['mode'] ?? 'set';$value=$spec['value'] ?? null;
        if (!in_array($field,['authors','genres','series','part','language','publisher'],true) || !in_array($mode,['set','add','remove'],true)) throw new \InvalidArgumentException('invalid_change');
        if (in_array($field,['authors','genres'],true)) {
            if (!is_array($value) || !array_is_list($value) || count($value)>128 || (!$value && $mode!=='set')) throw new \InvalidArgumentException('invalid_entities');
            foreach ($value as $id) if (!is_int($id) || $id<1 || $id>2147483647) throw new \InvalidArgumentException('invalid_entities');
            $value=array_values(array_unique($value));
        } elseif ($field==='series') {
            if ($mode!=='set' || ($value!==null && (!is_int($value) || $value<1 || $value>2147483647))) throw new \InvalidArgumentException('invalid_series');
        } else {
            if ($mode!=='set' || !is_string($value) || !mb_check_encoding($value,'UTF-8') || preg_match('/[\p{Cc}]/u',$value) || mb_strlen($value)>($field==='part' ? 64 : 255)) throw new \InvalidArgumentException('invalid_value');
            $value=trim($value);if ($field==='language' && $value!=='') $value=LanguageNormalizer::reviewedCodes($value);
        }
        return ['field'=>$field,'mode'=>$mode,'value'=>$value];
    }
    private function validateEntities(string $uid,array $spec): void {
        $field=$spec['field'];
        if (!in_array($field,['authors','genres','series'],true)) return;
        $ids=$field==='series' ? ($spec['value']===null ? [] : [$spec['value']]) : $spec['value'];
        $table=['authors'=>'library_authors','genres'=>'library_genres','series'=>'library_series'][$field];
        foreach ($ids as $id) {
            $sql='SELECT id FROM *PREFIX*'.$table.' WHERE user_id=? AND id=?';
            if ($field!=='genres') $sql.=' AND merged_into IS NULL';
            if (!$this->rows($sql,[$uid,$id])) throw new \InvalidArgumentException('invalid_entities');
        }
    }
    private function proposal(array $item,array $spec): array {
        $links=$this->history->links($item);$beforeLinks=$links;$metadata=[];$field=$spec['field'];$value=$spec['value'];
        if (in_array($field,['authors','genres'],true)) $links[$field]=match($spec['mode']) { 'add'=>array_values(array_unique(array_merge($links[$field],$value))), 'remove'=>array_values(array_diff($links[$field],$value)), default=>$value };
        elseif ($field==='series') { $links['series']=$value;if ($value===null || $value!==$beforeLinks['series']) $links['part']=''; }
        elseif ($field==='part') { if ($links['series']===null) throw new \DomainException('series_required');$links['part']=$value; }
        else $metadata[$field]=$value;
        foreach ($beforeLinks as $key=>$v) $links['before'.ucfirst($key)]=$v;
        return ['metadata'=>$metadata,'links'=>$links,'before'=>$this->history->snapshot($item),'beforeSources'=>$item['fieldSources'] ?? [],'revision'=>$item['metadataRevision'],'fileId'=>$item['fileId'],'etag'=>$item['liveEtag'],'title'=>$item['title']];
    }
    private function entityNames(string $uid,array $payload): array {
        $out=[];
        foreach (['authors','genres','series'] as $kind) {
            $ids=array_unique(array_filter(array_merge((array)$payload['before']['links'][$kind],(array)$payload['links'][$kind])));
            $out[$kind]=[];if (!$ids) continue;
            $table=['authors'=>'library_authors','genres'=>'library_genres','series'=>'library_series'][$kind];
            $column='display_name';
            foreach ($this->rows('SELECT id,'.$column.' AS name FROM *PREFIX*'.$table.' WHERE user_id=? AND id IN ('.implode(',',array_fill(0,count($ids),'?')).')',array_merge([$uid],array_values($ids))) as $row) $out[$kind][(int)$row['id']]=$row['name'];
        }
        return $out;
    }
    public function show(string $uid,string $id,int $page=1): array {
        $job=$this->job($uid,$id);$page=max(1,min(100,$page));
        $counts=$this->rows('SELECT status,COUNT(*) AS n FROM *PREFIX*library_curation_rows WHERE job_id=? AND user_id=? GROUP BY status',[$id,$uid]);
        $rows=$this->rows('SELECT id,item_id,status,payload FROM *PREFIX*library_curation_rows WHERE job_id=? AND user_id=? ORDER BY id LIMIT 50 OFFSET '.(($page-1)*50),[$id,$uid]);
        foreach ($rows as &$row) { $p=json_decode($row['payload'],true,64,JSON_THROW_ON_ERROR);$row=['id'=>(int)$row['item_id'],'status'=>$row['status'],'title'=>$p['title'] ?? '', 'before'=>isset($p['before']) ? (in_array($job['data']['spec']['field'],['authors','genres','series','part'],true) ? ['links'=>array_intersect_key($p['before']['links'],[$job['data']['spec']['field']=>true])] : array_intersect_key($p['before'],[$job['data']['spec']['field']=>true])) : null,'proposed'=>isset($p['links']) ? ['metadata'=>$p['metadata'],'links'=>array_intersect_key($p['links'],array_flip(['authors','series','part','genres']))] : null,'error'=>$p['error'] ?? null,'names'=>$p['names'] ?? []]; }
        return ['id'=>$id,'status'=>$job['status'],'spec'=>$job['data']['spec'],'count'=>count($job['data']['ids']),'prepared'=>(int)$job['work_cursor'],'counts'=>$counts,'rows'=>$rows,'page'=>$page,'hasNext'=>$page*50<(int)$job['work_cursor'],'expiresAt'=>(int)$job['expires_at']];
    }
    public function list(string $uid): array { return $this->rows('SELECT id,status,created_at,expires_at FROM *PREFIX*library_curation_jobs WHERE user_id=? AND expires_at>? ORDER BY created_at DESC LIMIT 20',[$uid,time()]); }
    public function control(string $uid,string $id,string $action,int $itemId=0): array {
        $this->db->beginTransaction();
        try {
            $this->db->executeStatement('UPDATE *PREFIX*library_curation_jobs SET id=id WHERE id=? AND user_id=?',[$id,$uid]);$j=$this->job($uid,$id);$status=$j['status'];
            if (in_array($action,['skip','include'],true) && $status==='review') {
                $this->db->executeStatement('UPDATE *PREFIX*library_curation_rows SET status=? WHERE job_id=? AND user_id=? AND item_id=? AND status=?',[$action==='skip' ? 'skipped' : 'ready',$id,$uid,$itemId,$action==='skip' ? 'ready' : 'skipped']);
            } elseif ($action==='approve' && $status==='review') $status='applying';
            elseif ($action==='cancel' && !in_array($status,['complete','undone'],true)) $status='cancelled';
            elseif ($action==='pause' && in_array($status,['preparing','applying'],true)) { $j['data']['resume']=$status;$status='paused'; }
            elseif ($action==='resume' && in_array($status,['paused','failed'],true)) $status=$j['data']['resume'] ?? 'preparing';
            elseif ($action==='undo' && in_array($status,['complete','cancelled'],true)) $status='undoing';
            elseif ($action==='delete' && in_array($status,['complete','cancelled','undone','review'],true)) {
                $this->db->executeStatement('DELETE FROM *PREFIX*library_curation_rows WHERE job_id=? AND user_id=?',[$id,$uid]);
                $this->db->executeStatement('DELETE FROM *PREFIX*library_curation_jobs WHERE id=? AND user_id=?',[$id,$uid]);$this->db->commit();return ['deleted'=>true];
            } else throw new \DomainException('invalid_transition');
            $this->db->executeStatement('UPDATE *PREFIX*library_curation_jobs SET status=?,payload=?,lease_token=?,lease_until=0 WHERE user_id=? AND id=?',[$status,json_encode($j['data'],JSON_THROW_ON_ERROR),'',$uid,$id]);$this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack();throw $e; }
        return $this->show($uid,$id);
    }
    public function advance(): bool {
        $jobs=$this->rows("SELECT id,user_id FROM *PREFIX*library_curation_jobs WHERE status IN ('preparing','applying','undoing') AND lease_until<? AND expires_at>? ORDER BY created_at LIMIT 1",[time(),time()]);if (!$jobs) return false;
        $uid=$jobs[0]['user_id'];$id=$jobs[0]['id'];$token=bin2hex(random_bytes(16));
        if ($this->db->executeStatement('UPDATE *PREFIX*library_curation_jobs SET lease_until=?,lease_token=? WHERE id=? AND lease_until<?',[time()+120,$token,$id,time()])!==1) return true;
        $failedRow=null;$j=null;
        $this->db->beginTransaction();
        try {
            $this->db->executeStatement('UPDATE *PREFIX*library_curation_jobs SET id=id WHERE id=?',[$id]);$j=$this->job($uid,$id);
            if (!hash_equals($token,$j['lease_token']) || !in_array($j['status'],['preparing','applying','undoing'],true)) { $this->db->commit();return true; }
            if ($j['status']==='preparing') {
                $cursor=(int)$j['work_cursor'];$itemId=$j['data']['ids'][$cursor] ?? null;
                if ($itemId===null) $this->db->executeStatement("UPDATE *PREFIX*library_curation_jobs SET status='review' WHERE id=?",[$id]);
                else {
                    try { $item=$this->access->require($uid,$itemId);$payload=$this->proposal($item,$j['data']['spec']);$payload['names']=$this->entityNames($uid,$payload);$status='ready'; }
                    catch (\OutOfBoundsException|\DomainException|\InvalidArgumentException $e) { $payload=['error'=>$e instanceof \DomainException && $e->getMessage()==='series_required' ? 'series_required' : 'unavailable_or_invalid'];$status='failed'; }
                    $this->insert('library_curation_rows',['user_id'=>$uid,'job_id'=>$id,'item_id'=>$itemId,'created_at'=>time(),'status'=>$status,'payload'=>json_encode($payload,JSON_THROW_ON_ERROR)]);
                    $this->db->executeStatement('UPDATE *PREFIX*library_curation_jobs SET work_cursor=work_cursor+1 WHERE id=?',[$id]);
                }
            } else {
                $undo=$j['status']==='undoing';$row=$this->rows('SELECT * FROM *PREFIX*library_curation_rows WHERE job_id=? AND status=? ORDER BY id LIMIT 1',[$id,$undo ? 'applied' : 'ready'])[0] ?? null;
                if (!$row) $this->db->executeStatement('UPDATE *PREFIX*library_curation_jobs SET status=? WHERE id=?',[$undo ? 'undone' : 'complete',$id]);
                else {
                    $p=json_decode($row['payload'],true,64,JSON_THROW_ON_ERROR);$itemId=(int)$row['item_id'];$failedRow=$row;
                    {
                        $this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id=? AND id=?',[$uid,$itemId]);
                        $item=$this->access->require($uid,$itemId);
                        if ((int)$item['fileId']!==(int)$p['fileId'] || $item['liveEtag']!==$p['etag'] || $item['metadataRevision']!==($undo ? $p['afterRevision'] : $p['revision'])) throw new MetadataConflictException('metadata_changed');
                        if ($undo) {
                            if ($this->history->snapshot($item)!==$p['after']) throw new MetadataConflictException('relationships_changed');
                            $metadata=$p['before'];$links=$metadata['links'];$metadata=array_diff_key($metadata,array_flip(['links','starred','workflowStatus','markedForDeletionAt','coverRevision']));
                            foreach ($this->history->links($item) as $key=>$v) $links['before'.ucfirst($key)]=$v;
                            $this->items->updateItem($uid,$itemId,$metadata,$item['metadataRevision'],$links,$p['beforeSources'],'undo');
                        } else $this->items->updateItem($uid,$itemId,$p['metadata'],$p['revision'],$p['links'],null,'organisation');
                        $after=$this->items->findItem($uid,$itemId);$p['after']=$this->history->snapshot($after);$p['afterRevision']=$after['metadataRevision'];$status=$undo ? 'undone' : 'applied';
                    }
                    $this->db->executeStatement('UPDATE *PREFIX*library_curation_rows SET status=?,payload=? WHERE id=?',[$status,json_encode($p,JSON_THROW_ON_ERROR),$row['id']]);
                }
            }
            $this->db->executeStatement('UPDATE *PREFIX*library_curation_jobs SET lease_token=?,lease_until=0 WHERE id=? AND lease_token=?',['',$id,$token]);$this->db->commit();
        } catch (\Throwable $e) {
            // Roll back failed nested item mutations before recording a conflict.
            $this->db->rollBack();
            $this->db->beginTransaction();
            try {
                $this->db->executeStatement('UPDATE *PREFIX*library_curation_jobs SET id=id WHERE id=?',[$id]);
                $current=$this->job($uid,$id);
                if (hash_equals($token,$current['lease_token'])) {
                    if ($failedRow && ($e instanceof MetadataConflictException || $e instanceof \OutOfBoundsException || $e instanceof \InvalidArgumentException || $e instanceof \DomainException)) {
                        $p=json_decode($failedRow['payload'],true,64,JSON_THROW_ON_ERROR);$p['error']='changed_or_unavailable';
                        $this->db->executeStatement('UPDATE *PREFIX*library_curation_rows SET status=?,payload=? WHERE id=?',[$current['status']==='undoing' ? 'undo_conflict' : 'conflict',json_encode($p,JSON_THROW_ON_ERROR),$failedRow['id']]);
                    } else {
                        $current['data']['resume']=$current['status'];
                        $this->db->executeStatement("UPDATE *PREFIX*library_curation_jobs SET status='failed',payload=? WHERE id=?",[json_encode($current['data'],JSON_THROW_ON_ERROR),$id]);
                    }
                    $this->db->executeStatement("UPDATE *PREFIX*library_curation_jobs SET lease_token='',lease_until=0 WHERE id=?",[$id]);
                }
                $this->db->commit();
            } catch (\Throwable $recordError) { $this->db->rollBack();throw $recordError; }
            if (!$failedRow || !($e instanceof MetadataConflictException || $e instanceof \OutOfBoundsException || $e instanceof \InvalidArgumentException || $e instanceof \DomainException)) throw $e;
        }
        return true;
    }
    public function expire(): void {
        foreach ($this->rows('SELECT id FROM *PREFIX*library_curation_jobs WHERE expires_at<? ORDER BY expires_at LIMIT 5',[time()]) as $job) {
            $this->db->beginTransaction();
            try {
                $this->db->executeStatement('UPDATE *PREFIX*library_curation_jobs SET id=id WHERE id=?',[$job['id']]);
                if ($this->rows('SELECT id FROM *PREFIX*library_curation_jobs WHERE id=? AND expires_at<?',[$job['id'],time()])) {
                    $this->db->executeStatement('DELETE FROM *PREFIX*library_curation_rows WHERE job_id=?',[$job['id']]);
                    $this->db->executeStatement('DELETE FROM *PREFIX*library_curation_jobs WHERE id=?',[$job['id']]);
                }
                $this->db->commit();
            } catch (\Throwable $e) { $this->db->rollBack();throw $e; }
        }
    }
}
