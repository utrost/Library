<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;
use OCP\IConfig;
use OCP\Lock\ILockingProvider;
use OCA\Library\Exception\MetadataConflictException;

/** Provider I/O happens outside transactions. Every review/apply transition locks its run. */
final class MetadataBatchService {
    public const FIELDS = ['title','subtitle','publisher','publicationDate','description','subjects','isbn','ggkey'];
    public function __construct(
        private IDBConnection $db, private ItemService $items, private InferenceBatchService $snapshots,
        private OpenLibraryLookupService $openLibrary, private GoogleBooksLookupService $googleBooks,
        private IConfig $config, private ILockingProvider $locks,
    ) {}

    public function options(string $uid): array {
        $providers = [];
        if ($this->config->getAppValue('library','openlibrary_lookup_enabled','yes') === 'yes') $providers[] = 'openlibrary';
        if ($this->config->getAppValue('library','google_books_lookup_enabled','yes') === 'yes'
            && $this->config->getAppValue('library','google_books_api_key','') !== '') $providers[] = 'googlebooks';
        $preferred = $this->config->getUserValue($uid,'library','metadata_lookup_provider','');
        return ['providers'=>$providers, 'defaultProvider'=>in_array($preferred,$providers,true) ? $preferred : '', 'fields'=>self::FIELDS, 'limit'=>50];
    }

    public function create(string $uid, array $ids, string $provider, array $fields, string $policy, ?string $requestId=null): array {
        if (!array_is_list($ids) || !$ids || count($ids)>50 || array_filter($ids, static fn($id)=>!is_int($id) || $id<1)
            || !array_is_list($fields) || !$fields || array_diff($fields,self::FIELDS)
            || !in_array($provider,$this->options($uid)['providers'],true) || !in_array($policy,['missing','review'],true)) throw new \InvalidArgumentException('invalid_setup');
        if ($requestId!==null && preg_match('/^[a-f0-9]{32}$/D',$requestId)!==1) throw new \InvalidArgumentException('invalid_request');
        $ids=array_values(array_unique($ids)); $fields=array_values(array_unique($fields));
        $lock = hash('sha256','library-lookup-create:'.$uid);
        $this->locks->acquireLock($lock,ILockingProvider::LOCK_EXCLUSIVE);
        try {
            $this->expire();
            if ($requestId!==null) {
                try { $existing=$this->read($uid,$requestId); }
                catch (\OutOfBoundsException) { $existing=null; }
                if ($existing!==null) {
                    if (array_column($existing['payload']['rows'],'id')!==$ids || $existing['payload']['provider']!==$provider
                        || $existing['payload']['fields']!==$fields || $existing['payload']['policy']!==$policy) throw new \DomainException('request_changed');
                    return $this->present($existing);
                }
            }
            $history = $this->history($uid);
            if (count($history)>=20 || count(array_filter($history,static fn($job)=>in_array($job['status'],['running','paused'],true)))>=2) throw new \DomainException('job_limit');
            $rows = [];
            foreach (array_values(array_unique($ids)) as $id) {
                $item = $this->items->findItem($uid,$id) ?? throw new \OutOfBoundsException('not_found');
                $snapshot = $this->snapshots->snapshot($uid,$id);
                $isbn = '';
                foreach ($item['identifiers'] ?? [] as $identifier) {
                    if ($identifier['scheme']==='isbn' && ($identifier['valid'] ?? false)) { $isbn=$identifier['displayValue']; break; }
                }
                $rows[] = ['id'=>$id, 'title'=>$item['title'], 'revision'=>$item['metadataRevision'], 'file'=>$snapshot['file'],
                    'before'=>array_intersect_key($item,array_flip(array_merge(self::FIELDS,['identifiers']))),
                    'query'=>['isbn'=>$isbn,'title'=>mb_substr($item['title'],0,200),'author'=>mb_substr($item['canonicalAuthors'][0]['name'] ?? $item['authors'][0] ?? '',0,200)],
                    'status'=>'queued','phase'=>'search','attempts'=>0,'retryAt'=>0,'results'=>[],'selected'=>[]];
            }
            $id=$requestId ?? bin2hex(random_bytes(16));
            $job=['id'=>$id,'user_id'=>$uid,'status'=>'running','created_at'=>time(),'expires_at'=>time()+2592000,'wake_at'=>0,'lease_until'=>0,'lease_token'=>'',
                'payload'=>['provider'=>$provider,'fields'=>array_values(array_unique($fields)),'policy'=>$policy,'rows'=>$rows]];
            $qb=$this->db->getQueryBuilder();
            $values=[];
            foreach ($job as $key=>$value) $values[$key]=$qb->createNamedParameter($key==='payload' ? json_encode($value,JSON_THROW_ON_ERROR) : $value);
            $qb->insert('library_lookup_jobs')->values($values)->executeStatement();
            $this->config->setUserValue($uid,'library','metadata_lookup_provider',$provider);
            return $this->present($job);
        } finally { $this->locks->releaseLock($lock,ILockingProvider::LOCK_EXCLUSIVE); }
    }

    public function history(string $uid): array {
        $q=$this->db->getQueryBuilder();
        $r=$q->select('id','status','created_at','expires_at')->from('library_lookup_jobs')
            ->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))
            ->andWhere($q->expr()->gt('expires_at',$q->createNamedParameter(time())))
            ->orderBy('created_at','DESC')->addOrderBy('id','DESC')->setMaxResults(20)->executeQuery();
        $rows=$r->fetchAll(); $r->closeCursor(); return $rows;
    }
    public function get(string $uid,string $id): array { return $this->present($this->read($uid,$id)); }

    /** One claimed row per step; a crashed worker's lease can be reclaimed. */
    public function advance(): bool {
        $this->expire();
        $q=$this->db->getQueryBuilder();
        $r=$q->select('id','user_id')->from('library_lookup_jobs')
            ->where($q->expr()->eq('status',$q->createNamedParameter('running')))
            ->andWhere($q->expr()->lte('wake_at',$q->createNamedParameter(time())))
            ->andWhere($q->expr()->lte('lease_until',$q->createNamedParameter(time())))
            ->orderBy('wake_at','ASC')->addOrderBy('created_at','ASC')->setMaxResults(1)->executeQuery();
        $candidate=$r->fetch(); $r->closeCursor(); if (!$candidate) return false;
        $work=$this->transaction(function() use($candidate) {
            $job=$this->read($candidate['user_id'],$candidate['id'],true);
            if ($job['status']!=='running' || (int)$job['lease_until']>time()) return null;
            foreach ($job['payload']['rows'] as $index=>&$row) {
                if (!in_array($row['status'],['queued','working'],true) || $row['retryAt']>time()) continue;
                $row['status']='working'; $row['attempts']++;
                if ($row['attempts']>4) { $row['status']='failed'; $row['error']='retry_limit'; continue; }
                $job['lease_token']=bin2hex(random_bytes(16)); $job['lease_until']=time()+300;
                $this->save($job);
                return [$job,$index,$row];
            }
            unset($row); $this->schedule($job); $this->save($job); return null;
        });
        if (!$work) return false;
        [$job,$index,$row]=$work;
        $result=null; $error=null;
        try {
            $this->assertCurrent($job['user_id'],$row);
            $provider=$job['payload']['provider']==='googlebooks' ? $this->googleBooks : $this->openLibrary;
            $result=$row['phase']==='search'
                ? $provider->search($job['user_id'],$row['query']['isbn'],$row['query']['title'],$row['query']['author'])
                : $provider->edition($job['user_id'],$row['editionId']);
        } catch (\Throwable $e) {
            $error=$e instanceof MetadataConflictException ? 'stale_book' : ($e instanceof \OutOfBoundsException ? 'unavailable' :
                (in_array($e->getMessage(),['rate_limited','provider_disabled','provider_unconfigured','invalid_query'],true) ? $e->getMessage() : 'provider_unavailable'));
        }
        // Token comparison prevents a timed-out worker from overwriting its replacement or user decision.
        try { $this->transaction(function() use($job,$index,$result,$error) {
            $live=$this->read($job['user_id'],$job['id'],true);
            if (!hash_equals($live['lease_token'],$job['lease_token'])) return;
            $row=&$live['payload']['rows'][$index];
            if ($row['status']==='working') {
                if ($error!==null) {
                    $retry=in_array($error,['rate_limited','provider_unavailable'],true) && $row['attempts']<4;
                    $row['status']=$retry ? 'queued' : 'failed'; $row['error']=$error;
                    $row['retryAt']=time()+min(300,15*(2**$row['attempts']));
                } elseif ($row['phase']==='search') {
                    $row['results']=$result; $row['status']=$result ? 'matches' : 'no_match'; unset($row['error']);
                } else {
                    $row['edition']=$result; $row['status']='ready'; $row['selected']=[]; unset($row['error']);
                }
            }
            unset($row); $live['lease_until']=0; $live['lease_token']='';
            $this->schedule($live); $this->save($live);
        }); } catch (\OutOfBoundsException) { /* expired, deleted or account removed during request */ }
        return true;
    }

    public function control(string $uid,string $id,string $action): array {
        return $this->transaction(function() use($uid,$id,$action) {
            $job=$this->read($uid,$id,true);
            if ($action==='delete') {
                $this->db->executeStatement('DELETE FROM *PREFIX*library_lookup_jobs WHERE id=? AND user_id=?',[$id,$uid]);
                return ['deleted'=>true];
            }
            if (!in_array($action,['pause','resume','cancel'],true) || ($job['status']==='cancelled' && $action!=='cancel')) throw new \DomainException('invalid_transition');
            $job['status']=match($action) {'pause'=>'paused','cancel'=>'cancelled',default=>'running'};
            // An authorized in-flight request may finish; cancelling never starts another.
            if ($action==='cancel') foreach ($job['payload']['rows'] as &$row) if ($row['status']==='queued') $row['status']='cancelled';
            unset($row); $job['wake_at']=0; $this->save($job); return $this->present($job);
        });
    }

    public function review(string $uid,string $id,int $itemId,string $action,array $data): array {
        try { return $this->transaction(function() use($uid,$id,$itemId,$action,$data) {
            $job=$this->read($uid,$id,true);
            $index=array_search($itemId,array_column($job['payload']['rows'],'id'),true);
            if ($index===false) throw new \OutOfBoundsException('not_found');
            $row=&$job['payload']['rows'][$index];
            unset($row['applyError']);
            if ($action==='undo') {
                if ($row['status']==='undone') return $this->present($job);
                if ($row['status']!=='applied') throw new \DomainException('invalid_transition');
                $this->assertCurrent($uid,$row,$row['receipt']['afterRevision'],true);
                $this->items->updateItem($uid,$itemId,$row['receipt']['before'],$row['receipt']['afterRevision'],null,$row['receipt']['beforeSources']);
                $row['status']='undone'; $row['receipt']['undoneAt']=time();
            } elseif ($action==='apply') {
                if ($row['status']==='applied') return $this->present($job);
                if ($row['status']!=='ready' || !$row['selected']) throw new \DomainException('nothing_selected');
                $current=$this->assertCurrent($uid,$row,null,true);
                $changes=[]; $before=[];
                foreach ($row['selected'] as $field) {
                    if ($job['payload']['policy']==='missing' && !$this->emptyValue($this->fieldValue($current,$field))) throw new MetadataConflictException('metadata_changed');
                    if (in_array($field,['isbn','ggkey'],true)) {
                        $before['identifiers']=$current['identifiers'];
                        $identifiers=$changes['identifiers'] ?? $current['identifiers'];
                        foreach ($this->identifierValues($row,$field) as $value) $identifiers[]=['scheme'=>$field,'displayValue'=>$value];
                        $changes['identifiers']=IdentifierService::normalizeIdentifierList($identifiers,'user',true);
                    } else { $changes[$field]=$row['edition']['fields'][$field]; $before[$field]=$current[$field] ?? null; }
                }
                // Nested writer transaction participates in this outer transaction, including receipt commit.
                $sources=array_fill_keys(array_keys($changes),'provider:'.$job['payload']['provider']);
                $this->items->updateItem($uid,$itemId,$changes,$row['revision'],null,$sources);
                $after=$this->items->findItem($uid,$itemId);
                $row['receipt']=['version'=>1,'provider'=>$job['payload']['provider'],'editionId'=>$row['editionId'],
                    'url'=>$row['edition']['url'] ?? '', 'appliedAt'=>time(),'before'=>$before,
                    'beforeSources'=>array_intersect_key($current['fieldSources'] ?? [],$changes),
                    'after'=>array_intersect_key($after,$changes),'afterRevision'=>$after['metadataRevision']];
                $row['status']='applied';
            } elseif ($action==='select') {
                if ($row['status']!=='ready' || !is_array($data['fields'] ?? null) || !array_is_list($data['fields'])) throw new \InvalidArgumentException('invalid_selection');
                $allowed=array_column($this->proposals($job,$row),'key');
                if (array_diff($data['fields'],$allowed)) throw new \InvalidArgumentException('invalid_selection');
                $row['selected']=array_values(array_unique($data['fields']));
            } elseif ($action==='skip') {
                if (in_array($row['status'],['applied','undone'],true)) throw new \DomainException('invalid_transition');
                $row['status']='skipped'; $row['selected']=[];
            } elseif ($action==='choose') {
                if (!in_array($row['status'],['matches','ready'],true) || !is_string($data['editionId'] ?? null)
                    || !in_array($data['editionId'],array_column($row['results'],'editionId'),true)) throw new \InvalidArgumentException('invalid_edition');
                if (in_array($job['status'],['cancelled','paused'],true)) throw new \DomainException('resume_required');
                $this->assertCurrent($uid,$row);
                $row['editionId']=$data['editionId']; $row['phase']='edition'; $row['status']='queued'; $row['attempts']=0; $row['retryAt']=0;
                unset($row['edition']); $row['selected']=[]; $job['status']='running';
            } elseif ($action==='retry') {
                if (!in_array($row['status'],['failed','no_match','skipped'],true) || $job['status']==='cancelled') throw new \DomainException('invalid_transition');
                $this->assertCurrent($uid,$row);
                $row['status']='queued'; $row['attempts']=0; $row['retryAt']=0; unset($row['error']); $job['status']='running';
            } else throw new \InvalidArgumentException('invalid_action');
            unset($row); $this->schedule($job); $this->save($job); return $this->present($job);
        }); } catch (\Throwable $error) {
            if (in_array($action,['apply','undo'],true)) {
                try { $this->transaction(function() use($uid,$id,$itemId,$error) {
                    $job=$this->read($uid,$id,true);
                    foreach ($job['payload']['rows'] as &$row) if ($row['id']===$itemId) $row['applyError']=$error instanceof MetadataConflictException ? 'stale_book' : 'operation_failed';
                    unset($row); $this->save($job);
                }); } catch (\Throwable) { /* Deleted/expired run or unavailable storage: the original failure remains authoritative. */ }
            }
            throw $error;
        }
    }

    /** Each book commits separately, so a stale row cannot roll back other approvals. */
    public function applySelected(string $uid,string $id): array {
        $job=$this->read($uid,$id); $outcomes=[];
        foreach ($job['payload']['rows'] as $row) {
            if ($row['status']!=='ready' || !$row['selected']) continue;
            try { $this->review($uid,$id,$row['id'],'apply',[]); $outcomes[]=['id'=>$row['id'],'status'=>'applied']; }
            catch (MetadataConflictException|\OutOfBoundsException|\DomainException $e) { $outcomes[]=['id'=>$row['id'],'status'=>'conflict']; }
            catch (\Throwable) { $outcomes[]=['id'=>$row['id'],'status'=>'failed']; }
        }
        return ['job'=>$this->get($uid,$id),'outcomes'=>$outcomes];
    }

    private function assertCurrent(string $uid,array $row,?string $revision=null,bool $lock=false): array {
        $snapshot=$this->snapshots->snapshot($uid,$row['id'],$lock);
        $item=$this->items->findItem($uid,$row['id']) ?? throw new \OutOfBoundsException('not_found');
        if ($snapshot['file']!==$row['file'] || !hash_equals($revision ?? $row['revision'],$item['metadataRevision'])) throw new MetadataConflictException('metadata_changed');
        return $item;
    }
    private function proposals(array $job,array $row): array {
        $proposals=[];
        $values=$row['edition']['fields'] ?? [];
        foreach (['isbn','ggkey'] as $scheme) $values[$scheme]=$this->identifierValues($row,$scheme);
        foreach ($values as $key=>$value) {
            if (!in_array($key,$job['payload']['fields'],true) || $this->emptyValue($value) || $value===$this->fieldValue($row['before'],$key)) continue;
            if ($job['payload']['policy']==='missing' && !$this->emptyValue($this->fieldValue($row['before'],$key))) continue;
            $proposals[]=['key'=>$key,'before'=>$this->fieldValue($row['before'],$key),'after'=>$value];
        }
        return $proposals;
    }
    private function fieldValue(array $item,string $field): mixed {
        if (!in_array($field,['isbn','ggkey'],true)) return $item[$field] ?? null;
        return array_values(array_map(static fn($identifier)=>$identifier['displayValue'],array_filter($item['identifiers'] ?? [],static fn($identifier)=>$identifier['scheme']===$field)));
    }
    private function identifierValues(array $row,string $scheme): array {
        $values=$scheme==='isbn' ? ($row['edition']['isbn'] ?? []) : (empty($row['edition']['ggkey']) ? [] : [$row['edition']['ggkey']]);
        $current=$this->fieldValue($row['before'],$scheme);
        return array_values(array_filter($values,static function($value) use($scheme,$current) {
            $normalized=IdentifierService::normalizeIdentifier($scheme,$value);
            return $normalized!==null && ($normalized['valid'] ?? false) && !in_array($value,$current,true);
        }));
    }
    private function emptyValue(mixed $value): bool { return $value===null || $value===[] || (is_string($value) && trim($value)===''); }
    private function schedule(array &$job): void {
        $pending=array_filter($job['payload']['rows'],static fn($row)=>in_array($row['status'],['queued','working'],true));
        $job['wake_at']=$pending ? max(time(),min(array_column($pending,'retryAt'))) : time();
        if ($job['status']==='running' && !$pending) $job['status']='review';
    }
    private function present(array $job): array {
        $data=$job['payload'];
        foreach ($data['rows'] as &$row) {
            $row['proposals']=$this->proposals($job,$row);
            unset($row['file'],$row['revision'],$row['before'],$row['query']);
        }
        unset($row);
        return ['id'=>$job['id'],'status'=>$job['status'],'expiresAt'=>(int)$job['expires_at']]+$data;
    }
    private function read(string $uid,string $id,bool $lock=false): array {
        if (preg_match('/^[a-f0-9]{32}$/D',$id)!==1) throw new \OutOfBoundsException('not_found');
        if ($lock && $this->db->getDatabaseProvider()==='sqlite') $this->db->executeStatement('UPDATE *PREFIX*library_lookup_jobs SET id=id WHERE id=? AND user_id=?',[$id,$uid]);
        $q=$this->db->getQueryBuilder();
        $q->select('*')->from('library_lookup_jobs')->where($q->expr()->eq('id',$q->createNamedParameter($id)))
            ->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->gt('expires_at',$q->createNamedParameter(time())));
        if ($lock && $this->db->getDatabaseProvider()!=='sqlite') $q->forUpdate();
        $r=$q->executeQuery(); $job=$r->fetch(); $r->closeCursor();
        if (!$job) throw new \OutOfBoundsException('not_found');
        $job['payload']=json_decode($job['payload'],true,64,JSON_THROW_ON_ERROR); return $job;
    }
    private function save(array $job): void {
        $q=$this->db->getQueryBuilder(); $q->update('library_lookup_jobs');
        foreach (['status','payload','wake_at','lease_until','lease_token'] as $key) $q->set($key,$q->createNamedParameter($key==='payload' ? json_encode($job[$key],JSON_THROW_ON_ERROR) : $job[$key]));
        $q->where($q->expr()->eq('id',$q->createNamedParameter($job['id'])))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($job['user_id'])))->executeStatement();
    }
    private function transaction(callable $work): mixed {
        $this->db->beginTransaction();
        try { $result=$work(); $this->db->commit(); return $result; }
        catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
    }
    private function expire(): void {
        $q=$this->db->getQueryBuilder(); $q->delete('library_lookup_jobs')->where($q->expr()->lte('expires_at',$q->createNamedParameter(time())))->executeStatement();
    }
}
