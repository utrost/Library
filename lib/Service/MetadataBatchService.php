<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IDBConnection;
use OCP\IConfig;
use OCP\Lock\ILockingProvider;
use OCA\Library\Exception\MetadataConflictException;

/** Provider I/O happens outside transactions. Every review/apply transition locks its run. */
final class MetadataBatchService {
    public const FIELDS = ['title','subtitle','publisher','publicationDate','description','subjects','language','isbn','ggkey','cover'];
    public function __construct(
        private IDBConnection $db, private ItemService $items, private InferenceBatchService $snapshots,
        private OpenLibraryLookupService $openLibrary, private GoogleBooksLookupService $googleBooks,
        private IConfig $config, private ILockingProvider $locks, private ?LookupCoverService $coverStore=null,
    ) {}

    public function options(string $uid): array {
        $providers = [];
        if ($this->config->getAppValue('library','openlibrary_lookup_enabled','yes') === 'yes') $providers[] = 'openlibrary';
        if ($this->config->getAppValue('library','google_books_lookup_enabled','yes') === 'yes'
            && $this->config->getAppValue('library','google_books_api_key','') !== '') $providers[] = 'googlebooks';
        $preferred = $this->config->getUserValue($uid,'library','metadata_lookup_provider','');
        return ['providers'=>$providers, 'defaultProvider'=>in_array($preferred,$providers,true) ? $preferred : '', 'fields'=>self::FIELDS, 'limit'=>50];
    }

    public function create(string $uid, array $ids, string $provider, array $fields, string $policy, ?string $requestId=null,string $mode='batch'): array {
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
            $q=$this->db->getQueryBuilder();
            $r=$q->select('status')->from('library_lookup_jobs')->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->gt('expires_at',$q->createNamedParameter(time())))->executeQuery();
            $history=$r->fetchAll(); $r->closeCursor();
            if (count($history)>=100 || count(array_filter($history,static fn($job)=>$job['status']!=='archived'))>=20 || count(array_filter($history,static fn($job)=>in_array($job['status'],['running','paused'],true)))>=2) throw new \DomainException('job_limit');
            $rows = [];
            foreach (array_values(array_unique($ids)) as $id) {
                $item = $this->items->findItem($uid,$id) ?? throw new \OutOfBoundsException('not_found');
                $snapshot = $this->snapshots->snapshot($uid,$id);
                $isbn = '';
                foreach ($item['identifiers'] ?? [] as $identifier) {
                    if ($identifier['scheme']==='isbn' && ($identifier['valid'] ?? false)) { $isbn=$identifier['displayValue']; break; }
                }
                $rows[] = ['id'=>$id, 'title'=>$item['title'], 'revision'=>$item['metadataRevision'], 'file'=>$snapshot['file'],
                    'before'=>array_intersect_key($item,array_flip(array_merge(self::FIELDS,['identifiers','language']))),
                    'query'=>['isbn'=>$isbn,'title'=>mb_substr($item['title'],0,200),'author'=>mb_substr($item['canonicalAuthors'][0]['name'] ?? $item['authors'][0] ?? '',0,200)],
                    'provider'=>$provider,'reviewVersion'=>0,'status'=>$mode==='editor' ? 'matches' : 'queued','phase'=>'search','attempts'=>0,'retryAt'=>0,'results'=>[],'selected'=>[]];
            }
            $id=$requestId ?? bin2hex(random_bytes(16));
            $job=['id'=>$id,'user_id'=>$uid,'status'=>$mode==='editor' ? 'review' : 'running','created_at'=>time(),'expires_at'=>time()+2592000,'wake_at'=>0,'lease_until'=>0,'lease_token'=>'',
                'payload'=>['mode'=>$mode,'provider'=>$provider,'fields'=>array_values(array_unique($fields)),'policy'=>$policy,'suggestionsExpireAt'=>time()+2592000,'rows'=>$rows]];
            $qb=$this->db->getQueryBuilder();
            $values=[];
            foreach ($job as $key=>$value) $values[$key]=$qb->createNamedParameter($key==='payload' ? json_encode($value,JSON_THROW_ON_ERROR) : $value);
            $qb->insert('library_lookup_jobs')->values($values)->executeStatement();
            $this->config->setUserValue($uid,'library','metadata_lookup_provider',$provider);
            return $this->present($job);
        } finally { $this->locks->releaseLock($lock,ILockingProvider::LOCK_EXCLUSIVE); }
    }

    public function history(string $uid): array {
        $this->expire();
        $q=$this->db->getQueryBuilder();
        $r=$q->select('id','status','created_at','expires_at')->from('library_lookup_jobs')
            ->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))
            ->andWhere($q->expr()->gt('expires_at',$q->createNamedParameter(time())))
            ->orderBy('created_at','DESC')->addOrderBy('id','DESC')->setMaxResults(100)->executeQuery();
        $rows=$r->fetchAll(); $r->closeCursor(); return $rows;
    }
    public function get(string $uid,string $id): array { $this->expire(); return $this->present($this->read($uid,$id)); }

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
        $result=null; $error=null; $retryAfter=0;
        try {
            $this->assertCurrent($job['user_id'],$row);
            $provider=($row['provider'] ?? $job['payload']['provider'])==='googlebooks' ? $this->googleBooks : $this->openLibrary;
            $result=match ($row['phase']) {
                'search' => $provider->search($job['user_id'],$row['query']['isbn'],$row['query']['title'],$row['query']['author']),
                'editions' => $this->openLibrary->editions($job['user_id'],$row['editionWorkId'],$row['editionOffset']),
                default => $provider->edition($job['user_id'],$row['editionId']),
            };
        } catch (\Throwable $e) {
            $retryAfter=$e instanceof \OCA\Library\Exception\MetadataProviderRetryException ? $e->retryAfter : 0;
            $error=$e instanceof MetadataConflictException ? 'stale_book' : ($e instanceof \OutOfBoundsException ? 'unavailable' :
                (in_array($e->getMessage(),['rate_limited','provider_disabled','provider_unconfigured','invalid_query'],true) ? $e->getMessage() : 'provider_unavailable'));
        }
        // Token comparison prevents a timed-out worker from overwriting its replacement or user decision.
        try { $this->transaction(function() use($job,$index,$result,$error,$retryAfter,$row) {
            $live=$this->read($job['user_id'],$job['id'],true);
            if (!hash_equals($live['lease_token'],$job['lease_token'])) return;
            $version=(int)($row['reviewVersion'] ?? 0);
            $row=&$live['payload']['rows'][$index];
            if ($row['status']==='working' && (int)($row['reviewVersion'] ?? 0)===$version) {
                if ($error!==null) {
                    $retry=in_array($error,['rate_limited','provider_unavailable'],true) && $row['attempts']<4;
                    $row['status']=$retry ? 'queued' : 'failed'; $row['error']=$error;
                    $row['retryAt']=time()+max($retryAfter,min(300,15*(2**$row['attempts'])));
                } elseif ($row['phase']==='search') {
                    $row['results']=$result; $row['status']=$result ? 'matches' : 'no_match'; unset($row['error']);
                } elseif ($row['phase']==='editions') {
                    $row['editionPage']=$result; $row['status']='matches'; unset($row['error']);
                } else {
                    $row['edition']=$result; $row['status']='ready'; $row['selected']=[]; unset($row['error']);
                }
                $row['reviewVersion']=(int)($row['reviewVersion'] ?? 0)+1;
            }
            unset($row); $live['lease_until']=0; $live['lease_token']='';
            $this->schedule($live); $this->save($live);
        }); } catch (\OutOfBoundsException) { /* expired, deleted or account removed during request */ }
        return true;
    }

    public function control(string $uid,string $id,string $action): array {
        $this->expire();
        return $this->transaction(function() use($uid,$id,$action) {
            $job=$this->read($uid,$id,true);
            if ($action==='delete' && $this->archiveReceipts($job)) {
                $this->save($job); return ['deleted'=>true,'receiptsRetained'=>true];
            }
            if ($action==='delete' || ($action==='delete_receipts' && $job['status']==='archived')) {
                $this->covers()->prune($uid,$id);
                $this->db->executeStatement('DELETE FROM *PREFIX*library_lookup_jobs WHERE id=? AND user_id=?',[$id,$uid]);
                return ['deleted'=>true];
            }
            if ($action==='select_missing') {
                if ($job['status']==='archived') throw new \DomainException('invalid_transition');
                foreach ($job['payload']['rows'] as &$row) {
                    $eligible=$this->strongMissingFields($job,$row);
                    if ($eligible) { $row['selected']=array_values(array_unique(array_merge($row['selected'],$eligible))); $row['reviewVersion']=(int)($row['reviewVersion'] ?? 0)+1; }
                }
                unset($row); $this->save($job); return $this->present($job);
            }
            if ($job['status']==='archived') throw new \DomainException('invalid_transition');
            if (!in_array($action,['pause','resume','cancel'],true) || ($job['status']==='cancelled' && $action!=='cancel')) throw new \DomainException('invalid_transition');
            $job['status']=match($action) {'pause'=>'paused','cancel'=>'cancelled',default=>'running'};
            // An authorized in-flight request may finish; cancelling never starts another.
            if ($action==='cancel') foreach ($job['payload']['rows'] as &$row) if ($row['status']==='queued') $row['status']='cancelled';
            unset($row); $job['wake_at']=0; $this->save($job); return $this->present($job);
        });
    }

    public function review(string $uid,string $id,int $itemId,string $action,array $data): array {
        $this->expire();
        try { return $this->transaction(function() use($uid,$id,$itemId,$action,$data) {
            $job=$this->read($uid,$id,true);
            $index=array_search($itemId,array_column($job['payload']['rows'],'id'),true);
            if ($index===false) throw new \OutOfBoundsException('not_found');
            $row=&$job['payload']['rows'][$index];
            if (($action==='apply' && $row['status']==='applied') || ($action==='undo' && $row['status']==='undone')) return $this->present($job);
            if (($data['reviewVersion'] ?? 0)!==(int)($row['reviewVersion'] ?? 0)) throw new \DomainException('review_changed');
            if ($job['status']==='archived' && $action!=='undo') throw new \DomainException('invalid_transition');
            unset($row['applyError']);
            if ($action==='undo') {
                if ($row['status']==='undone') return $this->present($job);
                if ($row['status']!=='applied') throw new \DomainException('invalid_transition');
                if (($row['receipt']['expiresAt'] ?? $row['receipt']['appliedAt']+7776000)<=time()) throw new \DomainException('receipt_expired');
                $this->assertCurrent($uid,$row,$row['receipt']['afterRevision'],true);
                if (isset($row['receipt']['cover'])) {
                    $current=$this->items->findItem($uid,$itemId);
                    if (!hash_equals($row['receipt']['cover']['afterRevision'],$current['coverCacheRevision'])) throw new MetadataConflictException('cover_changed');
                    $original=$row['receipt']['cover']['before'];
                    $content=$original===null ? null : $this->covers()->read($uid,$job['id'],$original);
                }
                $this->items->updateItem($uid,$itemId,$row['receipt']['before'],$row['receipt']['afterRevision'],null,$row['receipt']['beforeSources']);
                if (isset($row['receipt']['cover'])) $this->restoreCover($uid,$itemId,$content,$original['mime'] ?? null,$row['receipt']['cover']['beforeSource'] ?? null,$row['receipt']['cover']['beforeUrl'] ?? '');
                $row['status']='undone'; $row['receipt']['undoneAt']=time();
            } elseif ($action==='apply') {
                if ($row['status']==='applied') return $this->present($job);
                if ($row['status']!=='ready' || !$row['selected']) throw new \DomainException('nothing_selected');
                $current=$this->assertCurrent($uid,$row,null,true);
                $changes=[]; $before=[];
                foreach ($row['selected'] as $field) {
                    if ($field==='cover') continue;
                    if ($job['payload']['policy']==='missing' && !$this->emptyValue($this->fieldValue($current,$field))) throw new MetadataConflictException('metadata_changed');
                    if (in_array($field,['isbn','ggkey'],true)) {
                        $before['identifiers']=$current['identifiers'];
                        $identifiers=$changes['identifiers'] ?? $current['identifiers'];
                        foreach ($this->identifierValues($row,$field) as $value) $identifiers[]=['scheme'=>$field,'displayValue'=>$value];
                        $changes['identifiers']=IdentifierService::normalizeIdentifierList($identifiers,'user',true);
                    } else { $changes[$field]=$row['edition']['fields'][$field]; $before[$field]=$current[$field] ?? null; }
                }
                $this->commitChanges($uid,$job,$row,$current,$changes,$before,null,in_array('cover',$row['selected'],true));
            } elseif ($action==='select') {
                if ($row['status']!=='ready' || !is_array($data['fields'] ?? null) || !array_is_list($data['fields'])) throw new \InvalidArgumentException('invalid_selection');
                $allowed=array_column($this->proposals($job,$row),'key');
                if (array_diff($data['fields'],$allowed)) throw new \InvalidArgumentException('invalid_selection');
                $row['selected']=array_values(array_unique($data['fields']));
            } elseif ($action==='skip') {
                if (in_array($row['status'],['applied','undone'],true)) throw new \DomainException('invalid_transition');
                $row['status']='skipped'; $row['selected']=[];
            } elseif ($action==='editions') {
                if (($row['provider'] ?? $job['payload']['provider'])!=='openlibrary'
                    || !in_array($row['status'],['matches','ready'],true)
                    || !is_string($data['workId'] ?? null) || !is_int($data['offset'] ?? null)
                    || $data['offset']<0 || $data['offset']>192 || $data['offset']%8!==0
                    || !in_array($data['workId'],array_column($row['results'],'workId'),true)) throw new \InvalidArgumentException('invalid_edition_page');
                if (in_array($job['status'],['cancelled','paused'],true)) throw new \DomainException('resume_required');
                $this->assertCurrent($uid,$row);
                $row['editionWorkId']=$data['workId']; $row['editionOffset']=$data['offset'];
                $row['phase']='editions'; $row['status']='queued'; $row['attempts']=0; $row['retryAt']=0;
                unset($row['edition'],$row['editionId'],$row['cover'],$row['editionPage']);
                $row['selected']=[]; $job['status']='running';
            } elseif ($action==='choose') {
                if (!in_array($row['status'],['matches','ready'],true) || !is_string($data['editionId'] ?? null)
                    || !in_array($data['editionId'],array_column(array_merge($row['results'],$row['editionPage']['results'] ?? []),'editionId'),true)) throw new \InvalidArgumentException('invalid_edition');
                if (in_array($job['status'],['cancelled','paused'],true)) throw new \DomainException('resume_required');
                $this->assertCurrent($uid,$row);
                $row['editionId']=$data['editionId']; $row['phase']='edition'; $row['status']='queued'; $row['attempts']=0; $row['retryAt']=0;
                unset($row['edition'],$row['cover']); $row['selected']=[]; $job['status']='running';
            } elseif ($action==='search') {
                if (in_array($row['status'],['applied','undone'],true) || in_array($job['status'],['cancelled','paused'],true)) throw new \DomainException('resume_required');
                $provider=$data['provider'] ?? '';
                if (!in_array($provider,$this->options($uid)['providers'],true)) throw new \InvalidArgumentException('invalid_provider');
                $query=$this->query($data);
                $this->assertCurrent($uid,$row);
                $row['provider']=$provider; $row['query']=$query; $row['phase']='search';
                $row['results']=[]; $row['selected']=[]; unset($row['edition'],$row['editionId'],$row['error'],$row['cover'],$row['editionPage'],$row['editionWorkId'],$row['editionOffset']);
                $row['status']='queued'; $row['attempts']=0; $row['retryAt']=0; $job['status']='running';
            } elseif ($action==='retry') {
                if (!in_array($row['status'],['failed','no_match','skipped'],true) || in_array($job['status'],['cancelled','paused'],true)) throw new \DomainException('invalid_transition');
                $this->assertCurrent($uid,$row);
                $row['status']='queued'; $row['attempts']=0; $row['retryAt']=0; unset($row['error']); $job['status']='running';
            } else throw new \InvalidArgumentException('invalid_action');
            $row['reviewVersion']=(int)($row['reviewVersion'] ?? 0)+1;
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
    public function applySelected(string $uid,string $id,?array $selection=null): array {
        $this->expire();
        $job=$this->read($uid,$id); $outcomes=[];
        if ($selection!==null) {
            if (!array_is_list($selection) || count($selection)>50) throw new \InvalidArgumentException('invalid_selection');
            $versions=[];
            foreach ($selection as $chosen) {
                if (!is_array($chosen) || !is_int($chosen['id'] ?? null) || !is_int($chosen['reviewVersion'] ?? null) || isset($versions[$chosen['id']])) throw new \InvalidArgumentException('invalid_selection');
                $versions[$chosen['id']]=$chosen['reviewVersion'];
            }
        }
        foreach ($job['payload']['rows'] as $row) {
            if ($selection!==null && !array_key_exists($row['id'],$versions)) continue;
            if ($selection!==null && $versions[$row['id']]!==(int)($row['reviewVersion'] ?? 0)) { $outcomes[]=['id'=>$row['id'],'status'=>'conflict']; continue; }
            if ($row['status']!=='ready' || !$row['selected']) continue;
            try { $this->review($uid,$id,$row['id'],'apply',['reviewVersion'=>(int)($row['reviewVersion'] ?? 0)]); $outcomes[]=['id'=>$row['id'],'status'=>'applied']; }
            catch (MetadataConflictException|\OutOfBoundsException|\DomainException $e) { $outcomes[]=['id'=>$row['id'],'status'=>'conflict']; }
            catch (\Throwable) { $outcomes[]=['id'=>$row['id'],'status'=>'failed']; }
        }
        return ['job'=>$this->get($uid,$id),'outcomes'=>$outcomes];
    }

    private function covers(): LookupCoverService { return $this->coverStore ??= \OC::$server->get(LookupCoverService::class); }

    /** Snapshot before remote I/O; stored evidence, never client-supplied provider values. */
    public function prepareEditor(string $uid,int $itemId,string $provider,string $editionId): array {
        $job=$this->create($uid,[$itemId],$provider,self::FIELDS,'review',null,'editor');
        try {
            $adapter=$provider==='googlebooks' ? $this->googleBooks : $this->openLibrary;
            $edition=$adapter->edition($uid,$editionId);
            return $this->transaction(function() use($uid,$job,$edition,$editionId) {
                $stored=$this->read($uid,$job['id'],true); $row=&$stored['payload']['rows'][0];
                $this->assertCurrent($uid,$row);
                $row['edition']=$edition; $row['editionId']=$editionId; $row['status']='ready'; $row['reviewVersion']++;
                $this->save($stored);
                return $edition+['lookup'=>['jobId'=>$stored['id'],'reviewVersion'=>$row['reviewVersion']]];
            });
        } catch (\Throwable $error) { $this->control($uid,$job['id'],'delete'); throw $error; }
    }

    /** One editor Save, one transaction. Modified staged values become manual edits. */
    public function saveEditor(string $uid,int $itemId,array $approval,array $draft,string $revision,?array $links): void {
        $this->expire();
        $this->transaction(function() use($uid,$itemId,$approval,$draft,$revision,$links) {
            if (!is_string($approval['jobId'] ?? null) || !is_int($approval['reviewVersion'] ?? null) || !is_array($approval['fields'] ?? null) || !array_is_list($approval['fields']) || count($approval['fields'])>20) throw new \InvalidArgumentException('lookup_approval');
            $job=$this->read($uid,$approval['jobId'],true);
            if (($job['payload']['mode'] ?? '')!=='editor' || count($job['payload']['rows'])!==1 || $job['payload']['rows'][0]['id']!==$itemId) throw new \OutOfBoundsException('not_found');
            $row=&$job['payload']['rows'][0];
            $hash=hash('sha256',json_encode([$approval,$draft,$revision,$links],JSON_THROW_ON_ERROR));
            if ($row['status']==='applied' && hash_equals($row['editorHash'] ?? '',$hash)) return;
            if ($row['status']!=='ready' || $approval['reviewVersion']!==$row['reviewVersion']) throw new MetadataConflictException('lookup_changed');
            $current=$this->assertCurrent($uid,$row,null,true);
            if (!hash_equals($revision,$current['metadataRevision'])) throw new MetadataConflictException('metadata_changed');
            $allowed=array_column($this->proposals($job,$row),'key');
            if (array_diff($approval['fields'],$allowed)) throw new \InvalidArgumentException('lookup_approval');
            $before=[]; $cover=in_array('cover',$approval['fields'],true);
            foreach ($approval['fields'] as $field) {
                if ($field==='cover') continue;
                if (in_array($field,['isbn','ggkey'],true)) {
                    // A user may select only one of several provider identifiers. Attribute
                    // the list only when existing identifiers stay intact and every addition
                    // is backed by approved provider evidence.
                    $normalize=static fn(array $values): array => array_map(static fn($v)=>$v['scheme']."\0".$v['displayValue'],IdentifierService::normalizeIdentifierList($values,'user',true));
                    $original=$normalize($current['identifiers']); $evidence=[];
                    foreach (['isbn','ggkey'] as $scheme) if (in_array($scheme,$approval['fields'],true)) foreach ($this->identifierValues($row,$scheme) as $value) $evidence[]=['scheme'=>$scheme,'displayValue'=>$value];
                    if (isset($draft['identifiers'])) {
                        $actual=$normalize($draft['identifiers']); $added=array_diff($actual,$original);
                        if ($added && !array_diff($original,$actual) && !array_diff($added,$normalize($evidence))) $before['identifiers']=$current['identifiers'];
                    }
                } elseif (array_key_exists($field,$draft)) {
                    $expected=$row['edition']['fields'][$field]; $actual=$draft[$field];
                    if (is_string($expected)) { $expected=trim($expected); $actual=is_string($actual) ? trim($actual) : $actual; }
                    if ($actual===$expected) $before[$field]=$current[$field] ?? null;
                }
            }
            $this->commitChanges($uid,$job,$row,$current,$draft,$before,$links,$cover);
            $row['editorHash']=$hash; $row['reviewVersion']++;
            unset($row); $this->save($job);
        });
    }

    private function commitChanges(string $uid,array $job,array &$row,array $current,array $changes,array $before,?array $links,bool $cover): void {
        $provider=$row['provider'] ?? $job['payload']['provider'];
        $sources=array_fill_keys(array_keys($before),'provider:'.$provider);
        $coverReceipt=null;
        if ($cover) {
            if (!isset($row['cover']) || $row['cover']['expiresAt']<=time()) throw new \DomainException('cover_expired');
            if (!hash_equals($row['cover']['beforeRevision'],$current['coverCacheRevision'])) throw new MetadataConflictException('cover_changed');
            $content=$this->covers()->read($uid,$job['id'],$row['cover']['image']);
            $coverReceipt=['before'=>$row['cover']['before'],'beforeSource'=>$current['fieldSources']['cover'] ?? null,'beforeUrl'=>$current['coverOverrideUrl'] ?? '','source'=>$row['edition']['url'],'hash'=>$row['cover']['image']['hash']];
        }
        if (isset($before['identifiers'])) {
            $existing=[];
            foreach ($current['identifiers'] as $identifier) $existing[$identifier['scheme']."\0".$identifier['displayValue']]=$identifier;
            $changes['identifiers']=array_map(static function(array $identifier) use($existing,$provider): array {
                $key=$identifier['scheme']."\0".$identifier['displayValue'];
                if (isset($existing[$key])) return $existing[$key];
                $identifier['source']='provider:'.$provider; $identifier['userEdited']=true; return $identifier;
            },IdentifierService::normalizeIdentifierList($changes['identifiers'],'user',true));
        }
        $this->items->updateItem($uid,$row['id'],$changes,$current['metadataRevision'],$links,$sources);
        if ($cover) $this->restoreCover($uid,$row['id'],$content,$row['cover']['image']['mime'],'provider:'.$provider);
        $after=$this->items->findItem($uid,$row['id']);
        if (!$before && !$cover) { unset($row['receipt']); $row['status']='applied'; return; }
        $row['receipt']=['version'=>1,'provider'=>$provider,'editionId'=>$row['editionId'],'url'=>$row['edition']['url'] ?? '',
            'appliedAt'=>time(),'expiresAt'=>time()+7776000,'before'=>$before,'beforeSources'=>array_intersect_key($current['fieldSources'] ?? [],$before),
            'after'=>array_intersect_key($after,$before),'afterRevision'=>$after['metadataRevision']];
        if ($coverReceipt!==null) $row['receipt']['cover']=$coverReceipt+['afterRevision'=>$after['coverCacheRevision']];
        $row['status']='applied';
    }

    private function restoreCover(string $uid,int $itemId,?string $content,?string $mime,?string $source,string $url=''): void {
        if ($content===null) $this->items->clearManualCoverOverride($uid,$itemId);
        else $this->items->setManualCoverOverride($uid,$itemId,base64_encode($content),$mime);
        $current=$this->items->findItem($uid,$itemId); $sources=$current['fieldSources'] ?? [];
        if ($source===null) unset($sources['cover']); else $sources['cover']=$source;
        $this->db->executeStatement('UPDATE *PREFIX*library_items SET field_sources=?,cover_override_url=? WHERE id=? AND user_id=?',[json_encode($sources,JSON_THROW_ON_ERROR),$url ?: null,$itemId,$uid]);
    }

    /** Explicit preview fetch. Network I/O stays outside the locked transaction. */
    public function fetchCover(string $uid,string $id,int $itemId,int $version): array {
        $job=$this->get($uid,$id); $index=array_search($itemId,array_column($job['rows'],'id'),true);
        if ($index===false) throw new \OutOfBoundsException('not_found');
        $row=$job['rows'][$index];
        if (in_array($job['status'],['paused','cancelled','archived'],true) || $row['status']!=='ready' || $row['reviewVersion']!==$version || !in_array('cover',$job['fields'],true)) throw new \DomainException('review_changed');
        $image=$this->covers()->fetch($row['provider'],$row['edition']);
        return $this->transaction(function() use($uid,$id,$itemId,$version,$image) {
            $job=$this->read($uid,$id,true); $index=array_search($itemId,array_column($job['payload']['rows'],'id'),true);
            if ($index===false) throw new \OutOfBoundsException('not_found');
            $row=&$job['payload']['rows'][$index];
            if (in_array($job['status'],['paused','cancelled','archived'],true) || $row['status']!=='ready' || $row['reviewVersion']!==$version) throw new \DomainException('review_changed');
            $current=$this->assertCurrent($uid,$row,null,true);
            $original=$current['coverOverrideData'] ? $this->covers()->store($uid,$id,base64_decode($current['coverOverrideData'],true),$current['coverOverrideMimeType']) : null;
            $row['cover']=['image'=>$this->covers()->store($uid,$id,$image['content'],$image['mimeType']),'before'=>$original,'beforeRevision'=>$current['coverCacheRevision'],'expiresAt'=>time()+1800];
            $row['selected']=array_values(array_diff($row['selected'],['cover'])); $row['reviewVersion']++;
            unset($row); $this->save($job); return $this->present($job);
        });
    }
    public function coverImage(string $uid,string $id,int $itemId): array {
        $this->expire(); $job=$this->read($uid,$id);
        foreach ($job['payload']['rows'] as $row) if ($row['id']===$itemId && isset($row['cover']) && $row['cover']['expiresAt']>time()) return ['content'=>$this->covers()->read($uid,$id,$row['cover']['image']),'mime'=>$row['cover']['image']['mime']];
        throw new \OutOfBoundsException('not_found');
    }
    public function receiptsForItem(string $uid,int $itemId): array {
        if ($this->items->findItem($uid,$itemId)===null) throw new \OutOfBoundsException('not_found');
        $this->expire(); $q=$this->db->getQueryBuilder();
        $r=$q->select('*')->from('library_lookup_jobs')->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))
            ->andWhere($q->expr()->gt('expires_at',$q->createNamedParameter(time())))
            ->andWhere($q->expr()->like('payload',$q->createNamedParameter('%"id":'.$itemId.',%')))
            ->orderBy('created_at','DESC')->addOrderBy('id','DESC')->setMaxResults(20)->executeQuery();
        $jobs=$r->fetchAll(); $r->closeCursor(); $out=[];
        foreach ($jobs as $job) { $job['payload']=json_decode($job['payload'],true,64,JSON_THROW_ON_ERROR); foreach ($this->present($job)['rows'] as $row) if ($row['id']===$itemId && isset($row['receipt'])) $out[]=['jobId'=>$job['id'],'reviewVersion'=>$row['reviewVersion'],'status'=>$row['status'],'receipt'=>$row['receipt']]; }
        return array_slice($out,0,10);
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
            if ($key==='ggkey' && ($row['provider'] ?? $job['payload']['provider'])!=='googlebooks') continue;
            if (!in_array($key,$job['payload']['fields'],true) || $this->emptyValue($value) || $value===$this->fieldValue($row['before'],$key)) continue;
            if ($job['payload']['policy']==='missing' && !$this->emptyValue($this->fieldValue($row['before'],$key))) continue;
            $proposals[]=['key'=>$key,'before'=>$this->fieldValue($row['before'],$key),'after'=>$value];
        }
        if (isset($row['cover']) && in_array('cover',$job['payload']['fields'],true) && $row['cover']['expiresAt']>time()) $proposals[]=['key'=>'cover','before'=>'Current cover','after'=>'Selected provider cover'];
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
            $row['provider']=$row['provider'] ?? $job['payload']['provider'];
            $row['reviewVersion']=(int)($row['reviewVersion'] ?? 0);
            $row['proposals']=$this->proposals($job,$row);
            $row['strongMissingFields']=$this->strongMissingFields($job,$row);
            if (isset($row['cover'])) $row['cover']=['expiresAt'=>$row['cover']['expiresAt']];
            if (isset($row['receipt']['cover'])) $row['receipt']['cover']=['changed'=>true];
            unset($row['file'],$row['revision'],$row['before']);
        }
        unset($row);
        return ['id'=>$job['id'],'status'=>$job['status'],'expiresAt'=>(int)$job['expires_at']]+$data;
    }
    private function read(string $uid,string $id,bool $lock=false,bool $includeExpired=false): array {
        if (preg_match('/^[a-f0-9]{32}$/D',$id)!==1) throw new \OutOfBoundsException('not_found');
        if ($lock && $this->db->getDatabaseProvider()==='sqlite') $this->db->executeStatement('UPDATE *PREFIX*library_lookup_jobs SET id=id WHERE id=? AND user_id=?',[$id,$uid]);
        $q=$this->db->getQueryBuilder();
        $q->select('*')->from('library_lookup_jobs')->where($q->expr()->eq('id',$q->createNamedParameter($id)))
            ->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)));
        if (!$includeExpired) $q->andWhere($q->expr()->gt('expires_at',$q->createNamedParameter(time())));
        if ($lock && $this->db->getDatabaseProvider()!=='sqlite') $q->forUpdate();
        $r=$q->executeQuery(); $job=$r->fetch(); $r->closeCursor();
        if (!$job) throw new \OutOfBoundsException('not_found');
        $job['payload']=json_decode($job['payload'],true,64,JSON_THROW_ON_ERROR); return $job;
    }
    private function save(array $job): void {
        $q=$this->db->getQueryBuilder(); $q->update('library_lookup_jobs');
        foreach (['status','payload','wake_at','lease_until','lease_token','expires_at'] as $key) $q->set($key,$q->createNamedParameter($key==='payload' ? json_encode($job[$key],JSON_THROW_ON_ERROR) : $job[$key]));
        $q->where($q->expr()->eq('id',$q->createNamedParameter($job['id'])))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($job['user_id'])))->executeStatement();
    }
    private function transaction(callable $work): mixed {
        $this->db->beginTransaction();
        try { $result=$work(); $this->db->commit(); return $result; }
        catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
    }
    private function query(array $data): array {
        $query=[];
        foreach (['isbn'=>50,'title'=>200,'author'=>200] as $key=>$max) {
            $value=$data[$key] ?? '';
            if (!is_string($value) || !mb_check_encoding($value,'UTF-8') || mb_strlen($value)>$max || preg_match('/[\p{Cc}]/u',$value)) throw new \InvalidArgumentException('invalid_query');
            $query[$key]=trim($value);
        }
        if ($query['isbn']!=='') {
            $isbn=IdentifierService::normalizeIdentifier('isbn',$query['isbn']);
            if ($isbn===null || !$isbn['valid']) throw new \InvalidArgumentException('invalid_query');
            $query['isbn']=$isbn['normalizedValue'];
        } elseif (mb_strlen($query['title'])<3) throw new \InvalidArgumentException('invalid_query');
        return $query;
    }

    /** Deliberately narrow: one ISBN result, matching saved title/author and no known edition conflicts. */
    private function strongMissingFields(array $job,array $row): array {
        if ($row['status']!=='ready' || count($row['results'])!==1) return [];
        $match=$row['results'][0];
        if (($match['match'] ?? '')!=='isbn' || ($match['editionId'] ?? '')!==($row['editionId'] ?? '')) return [];
        $isbn=IdentifierService::normalizeIdentifier('isbn',$row['query']['isbn'] ?? '');
        if ($isbn===null || !$isbn['valid']) return [];
        $matches=static function(array $values) use($isbn): bool {
            foreach ($values as $value) { $other=IdentifierService::normalizeIdentifier('isbn',$value); if ($other!==null && $other['valid'] && $other['normalizedValue']===$isbn['normalizedValue']) return true; }
            return false;
        };
        if (!$matches($match['isbn'] ?? []) || !$matches($row['edition']['isbn'] ?? [])) return [];
        $fold=static fn(string $value): string => mb_strtolower(trim(preg_replace('/[^\p{L}\p{N}]+/u',' ',$value) ?? ''));
        $title=$fold($row['before']['title'] ?? ''); $author=$fold($row['query']['author'] ?? '');
        if ($title==='' || $title!==$fold($match['title'] ?? '') || $author==='' || !in_array($author,array_map($fold,$match['authors'] ?? []),true)) return [];
        if (isset($row['edition']['fields']['title']) && $title!==$fold($row['edition']['fields']['title'])) return [];
        $year=substr($row['before']['publicationDate'] ?? '',0,4);
        if ($year!=='' && ($year!==substr($match['year'] ?? '',0,4) || $year!==substr($row['edition']['fields']['publicationDate'] ?? '',0,4))) return [];
        // A saved language needs explicit edition review; no guessing between translations.
        if (!$this->emptyValue($row['before']['language'] ?? '')) return [];
        return array_column(array_filter($this->proposals($job,$row),fn($proposal)=>$proposal['key']!=='cover' && $this->emptyValue($proposal['before'])),'key');
    }

    /** Keep only applied-change evidence and source identity needed for conditional Undo. */
    private function archiveReceipts(array &$job): bool {
        $rows=[]; $expires=0;
        foreach ($job['payload']['rows'] as $row) {
            if (!isset($row['receipt'])) continue;
            $until=$row['receipt']['expiresAt'] ?? $row['receipt']['appliedAt']+7776000;
            if ($until<=time()) continue;
            $row=array_intersect_key($row,array_flip(['id','title','file','revision','provider','reviewVersion','status','receipt','editorHash']));
            $row['before']=$row['receipt']['before']; $row['selected']=[]; $row['results']=[];
            $row['reviewVersion']=(int)($row['reviewVersion'] ?? 0)+1;
            $rows[]=$row; $expires=$expires===0 ? $until : min($expires,$until);
        }
        if (!$rows) return false;
        $job['payload']['rows']=$rows; $job['status']='archived'; $job['expires_at']=$expires;
        $job['lease_until']=0; $job['lease_token']='';
        return true;
    }

    private function expire(): void {
        // Only due jobs are read; never scan catalogue rows or deserialize every owner's history.
        $q=$this->db->getQueryBuilder();
        $r=$q->select('id','user_id')->from('library_lookup_jobs')->where($q->expr()->lte('expires_at',$q->createNamedParameter(time())))->orderBy('expires_at')->setMaxResults(100)->executeQuery();
        $due=$r->fetchAll(); $r->closeCursor();
        foreach ($due as $candidate) { try { $this->transaction(function() use($candidate) {
            $job=$this->read($candidate['user_id'],$candidate['id'],true,true);
            if ((int)$job['expires_at']>time()) return;
            if ($this->archiveReceipts($job)) $this->save($job);
            else { $this->covers()->prune($job['user_id'],$job['id']); $this->db->executeStatement('DELETE FROM *PREFIX*library_lookup_jobs WHERE id=? AND user_id=?',[$job['id'],$job['user_id']]); }
        }); } catch (\OutOfBoundsException) { /* Another worker already removed this expired run. */ } }
    }
}
