<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\IDBConnection;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\BackgroundJob\IJobList;
use OCA\Library\BackgroundJob\InferenceAnalysisJob;

/** Read-only analysis. No worker may write catalogue metadata or source documents. */
final class InferenceAnalysisService {
    public function __construct(private IDBConnection $db,private RootService $roots,private IRootFolder $files,
        private InferenceFolderRuleStore $rules,private InferenceBatchService $batches,private IJobList $jobs) {}
    private function scope(string $uid,int $rootId,string $folder): array {
        foreach ($this->roots->listRoots($uid) as $root) if ($root['id']===$rootId) {
            try {
                $home=$this->files->getUserFolder($uid); $node=$home->get(trim($root['path'],'/') ?: '/');
                if (!$node instanceof Folder || !$node->isReadable()) break;
                $child=$folder==='' ? $node : $node->get($folder);
                if (!$child instanceof Folder || !$child->isReadable()) break;
                return ['path'=>rtrim($root['path'],'/').($folder!=='' ? '/'.$folder : ''),'rootFileId'=>$node->getId(),'folderFileId'=>$child->getId()];
            } catch (\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException) { break; }
        }
        throw new \OutOfBoundsException('folder_unavailable');
    }
    private function selection(string $uid,int $rootId,array $payload) {
        $q=$this->db->getQueryBuilder(); $prefix=rtrim($payload['scope']['path'],'/').'/';
        $q->from('library_items','i')->innerJoin('i','library_files','f',$q->expr()->eq('i.library_file_id','f.id'))
            ->where($q->expr()->eq('i.user_id',$q->createNamedParameter($uid)))
            ->andWhere($q->expr()->eq('f.user_id',$q->createNamedParameter($uid)))
            ->andWhere($q->expr()->eq('f.root_id',$q->createNamedParameter($rootId)))
            ->andWhere($q->expr()->like('f.cached_path',$q->createNamedParameter(addcslashes($prefix,'%_').'%')))
            ->andWhere($q->expr()->neq('f.scan_status',$q->createNamedParameter('missing')));
        if (!$payload['recursive']) $q->andWhere($q->expr()->notLike('f.cached_path',$q->createNamedParameter(addcslashes($prefix,'%_').'%/%')));
        return $q;
    }
    public function start(string $uid,mixed $input): array {
        if (!is_array($input) || !is_bool($input['recursive']??null) || !is_scalar($input['rootId']??null)) throw new \InvalidArgumentException('invalid_analysis');
        $folder=InferenceFolderRuleStore::folder($input['folder']??''); $rootId=(int)$input['rootId'];
        if ($folder===null || $rootId<1) throw new \InvalidArgumentException('invalid_analysis');
        $scope=$this->scope($uid,$rootId,$folder); $definition=['mode'=>$input['mode']??''];
        if ($definition['mode']==='guided' && GuidedRuleValidator::valid($input['rule']??null)) $definition['rule']=$input['rule'];
        elseif ($definition['mode']==='pattern' && is_string($input['pattern']??null) && mb_strlen($input['pattern'])<=1000 && $input['pattern']!=='') $definition['pattern']=$input['pattern'];
        elseif ($definition['mode']==='folders') {
            $definition['assignments']=[];
            foreach ($this->rules->all($uid) as $entry) if ($entry['rootId']===$rootId) {
                $available=false;
                try { $identity=$this->scope($uid,$rootId,$entry['folder']); $available=$identity['rootFileId']===$entry['rootFileId'] && $identity['folderFileId']===$entry['folderFileId']; } catch (\OutOfBoundsException) {}
                $definition['assignments'][]=$entry+['available'=>$available];
            }
            if (!$definition['assignments']) throw new \InvalidArgumentException('no_folder_rules');
        } else throw new \InvalidArgumentException('invalid_analysis');
        $payload=['folder'=>$folder,'recursive'=>$input['recursive'],'scope'=>$scope,'definition'=>$definition];
        $encoded=json_encode($payload,JSON_THROW_ON_ERROR|JSON_UNESCAPED_UNICODE);
        if (strlen($encoded)>524288) throw new \InvalidArgumentException('analysis_limit');
        // Serialize quota checking with other starts for this account using its owned root row.
        $this->db->beginTransaction();
        try {
            if ($this->db->getDatabaseProvider()==='sqlite') { $q=$this->db->getQueryBuilder(); $q->update('library_roots')->set('id',$q->createFunction('id'))->where($q->expr()->eq('id',$q->createNamedParameter($rootId)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->executeStatement(); }
            $q=$this->db->getQueryBuilder(); $q->select('id')->from('library_roots')->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->orderBy('id','ASC')->setMaxResults(1); if ($this->db->getDatabaseProvider()!=='sqlite') $q->forUpdate(); $r=$q->executeQuery(); $r->fetch(); $r->closeCursor();
            if (count($this->history($uid))>=5) throw new \InvalidArgumentException('analysis_history_limit');
            $q=$this->selection($uid,$rootId,$payload); $r=$q->select($q->func()->count('i.id','total'))->selectAlias($q->func()->max('i.id'),'max_id')->executeQuery(); $count=$r->fetch(); $r->closeCursor();
            if ((int)$count['total']>100000) throw new \InvalidArgumentException('analysis_limit');
            $id=bin2hex(random_bytes(16)); $q=$this->db->getQueryBuilder();
            $values=['id'=>$id,'user_id'=>$uid,'status'=>(int)$count['total'] ? 'running' : 'completed','payload'=>$encoded,'root_id'=>$rootId,'cursor_id'=>0,'max_id'=>(int)($count['max_id']??0),'total'=>(int)$count['total'],'processed'=>0,'bytes'=>0,'created_at'=>time(),'expires_at'=>time()+604800];
            $q->insert('library_infer_jobs'); foreach ($values as $k=>$v) $q->setValue($k,$q->createNamedParameter($v)); $q->executeStatement(); $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
        if ($values['status']==='running') $this->queue($uid,$id,0);
        return $this->get($uid,$id);
    }
    public function history(string $uid): array {
        $q=$this->db->getQueryBuilder(); $r=$q->select('id','status','created_at','total','processed')->from('library_infer_jobs')->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->gt('expires_at',$q->createNamedParameter(time())))->orderBy('created_at','DESC')->setMaxResults(5)->executeQuery(); $rows=$r->fetchAll(); $r->closeCursor(); return $rows;
    }
    private function row(string $uid,string $id,bool $lock=false): array {
        if (!preg_match('/^[a-f0-9]{32}$/D',$id)) throw new \OutOfBoundsException('analysis_unavailable');
        if ($lock && $this->db->getDatabaseProvider()==='sqlite') { $q=$this->db->getQueryBuilder(); $q->update('library_infer_jobs')->set('id',$q->createFunction('id'))->where($q->expr()->eq('id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->executeStatement(); }
        $q=$this->db->getQueryBuilder(); $q->select('*')->from('library_infer_jobs')->where($q->expr()->eq('id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->gt('expires_at',$q->createNamedParameter(time())));
        if ($lock && $this->db->getDatabaseProvider()!=='sqlite') $q->forUpdate(); $r=$q->executeQuery(); $row=$r->fetch(); $r->closeCursor(); if (!$row) throw new \OutOfBoundsException('analysis_unavailable'); return $row;
    }
    public function get(string $uid,string $id,int $page=1,string $filter='all'): array {
        $row=$this->row($uid,$id); $payload=json_decode($row['payload'],true,512,JSON_THROW_ON_ERROR);
        // Revalidate folder identity before returning any saved path or proposal.
        if ($this->scope($uid,(int)$row['root_id'],$payload['folder'])!==$payload['scope']) throw new \OutOfBoundsException('folder_unavailable');
        $statuses=['ready','conflict','unmatched','ambiguous','invalid','unchanged','unavailable'];
        if ($filter!=='all' && !in_array($filter,$statuses,true)) throw new \InvalidArgumentException('invalid_filter');
        $q=$this->db->getQueryBuilder(); $r=$q->select('status',$q->func()->count('*','total'))->from('library_infer_results')->where($q->expr()->eq('job_id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->groupBy('status')->executeQuery(); $counts=[]; while ($c=$r->fetch()) $counts[$c['status']]=(int)$c['total']; $r->closeCursor();
        $total=$filter==='all' ? array_sum($counts) : ($counts[$filter]??0); $page=max(1,min(max(1,(int)ceil($total/40)),$page));
        $q=$this->db->getQueryBuilder(); $q->select('payload')->from('library_infer_results')->where($q->expr()->eq('job_id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)));
        if ($filter!=='all') $q->andWhere($q->expr()->eq('status',$q->createNamedParameter($filter)));
        $r=$q->orderBy('item_id','ASC')->setFirstResult(($page-1)*40)->setMaxResults(40)->executeQuery(); $entries=[];
        while ($entry=$r->fetch()) $entries[]=json_decode($entry['payload'],true,512,JSON_THROW_ON_ERROR); $r->closeCursor();
        foreach ($entries as &$entry) {
            try { $snapshot=$this->batches->snapshot($uid,$entry['id']);
                if (InferenceChangeSet::fingerprint($snapshot)!==($entry['revision']??'')) $entry=['id'=>$entry['id'],'path'=>$entry['path'],'status'=>'unavailable','changes'=>[]];
            } catch (\OutOfBoundsException) { $entry=['id'=>$entry['id'],'path'=>'','status'=>'unavailable','changes'=>[]]; }
        } unset($entry);
        $definition=$payload['definition'];
        if ($definition['mode']==='folders') $definition['assignments']=array_map(static fn($entry)=>array_intersect_key($entry,array_flip(['id','folder','recursive','definition','available'])),$definition['assignments']);
        return ['id'=>$id,'status'=>$row['status'],'scope'=>$payload['scope']['path'],'definition'=>$definition,'processed'=>(int)$row['processed'],'total'=>(int)$row['total'],'counts'=>$counts,'items'=>$entries,'page'=>$page,'hasNext'=>$page*40<$total,'expiresAt'=>(int)$row['expires_at']];
    }
    private function queue(string $uid,string $id,int $cursor): void { $this->jobs->add(InferenceAnalysisJob::class,['userId'=>$uid,'id'=>$id,'cursor'=>$cursor]); }
    private function liveDefinition(string $uid,int $rootId,array $definition): array {
        if ($definition['mode']!=='folders') return $definition;
        foreach ($definition['assignments'] as &$entry) {
            if (!$entry['available']) continue;
            try { $scope=$this->scope($uid,$rootId,$entry['folder']); $entry['available']=$scope['rootFileId']===$entry['rootFileId'] && $scope['folderFileId']===$entry['folderFileId']; }
            catch (\OutOfBoundsException) { $entry['available']=false; }
        } unset($entry);
        return $definition;
    }
    /** Bounded slice, also callable by the owner while polling so cron delays do not block review. */
    public function advance(string $uid,string $id,int $limit=20): void {
        $initial=$this->row($uid,$id); if ($initial['status']!=='running') return;
        $initialPayload=json_decode($initial['payload'],true,512,JSON_THROW_ON_ERROR);
        $definition=$this->liveDefinition($uid,(int)$initial['root_id'],$initialPayload['definition']);
        $started=microtime(true);
        $q=$this->selection($uid,(int)$initial['root_id'],$initialPayload);
        $r=$q->select('i.id','f.cached_path')->andWhere($q->expr()->gt('i.id',$q->createNamedParameter((int)$initial['cursor_id'],IQueryBuilder::PARAM_INT)))->andWhere($q->expr()->lte('i.id',$q->createNamedParameter((int)$initial['max_id'],IQueryBuilder::PARAM_INT)))->orderBy('i.id','ASC')->setMaxResults(max(1,min(40,$limit)))->executeQuery();
        $candidates=$r->fetchAll(); $r->closeCursor();
        // One indexed scope query per slice; per-item locks serialize overlapping workers.
        foreach ($candidates ?: [null] as $item) {
            if ($item!==null && microtime(true)-$started>=8) break;
            $this->db->beginTransaction();
            try {
                $row=$this->row($uid,$id,true);
                if ($row['status']!=='running') { $this->db->commit(); return; }
                $payload=json_decode($row['payload'],true,512,JSON_THROW_ON_ERROR);
                if ($this->scope($uid,(int)$row['root_id'],$payload['folder'])!==$payload['scope']) throw new \OutOfBoundsException('folder_unavailable');
                if ($item!==null && (int)$row['cursor_id']>=(int)$item['id']) { $this->db->commit(); continue; }
                $updates=[];
                if (!$item) $updates['status']='completed';
                else {
                    $entry=['id'=>(int)$item['id'],'path'=>substr($item['cached_path'],strlen(rtrim($payload['scope']['path'],'/').'/')),'status'=>'unavailable','changes'=>[]];
                    try {
                        $snapshot=$this->batches->snapshot($uid,$entry['id']); $s=$snapshot['state'];
                        if ($snapshot['file']['path']!==$item['cached_path'] || $snapshot['file']['rootId']!==(int)$row['root_id']) throw new \OutOfBoundsException('item_moved');
                        $current=['title'=>$s['title'],'subtitle'=>$s['subtitle'],'author'=>$s['creators'],'authors'=>AuthorNames::read($s['authors_json']??null,$s['creators']),'series'=>$s['series_name'],'seriesNumber'=>$s['series_number'],'genre'=>$s['genre'],'year'=>substr((string)$s['publication_date'],0,4),'language'=>$s['language'],'publisher'=>$s['publisher'],'subject'=>implode('; ',json_decode($s['subjects_json']?:'[]',true)?:[])];
                        $entry=array_replace($entry,InferenceParser::run($entry['path'],$definition,$current,$payload['folder']),['revision'=>InferenceChangeSet::fingerprint($snapshot)]);
                    } catch (\OutOfBoundsException) { $entry['path']=''; }
                    $data=json_encode($entry,JSON_THROW_ON_ERROR|JSON_UNESCAPED_UNICODE);
                    if (strlen($data)>65536 || (int)$row['bytes']+strlen($data)>67108864) $updates['status']='limited';
                    else {
                        $q=$this->db->getQueryBuilder(); $q->insert('library_infer_results')->values(['job_id'=>$q->createNamedParameter($id),'user_id'=>$q->createNamedParameter($uid),'item_id'=>$q->createNamedParameter($entry['id']),'status'=>$q->createNamedParameter($entry['status']),'payload'=>$q->createNamedParameter($data)])->executeStatement();
                        $updates=['cursor_id'=>$entry['id'],'processed'=>(int)$row['processed']+1,'bytes'=>(int)$row['bytes']+strlen($data)];
                    }
                }
                $q=$this->db->getQueryBuilder(); $q->update('library_infer_jobs')->where($q->expr()->eq('id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid))); foreach ($updates as $k=>$v) $q->set($k,$q->createNamedParameter($v)); $q->executeStatement(); $this->db->commit();
                if (isset($updates['status'])) return;
            } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
        }
        $row=$this->row($uid,$id); if ($row['status']==='running') $this->queue($uid,$id,(int)$row['cursor_id']);
    }
    public function stop(string $uid,string $id,string $status='cancelled'): void {
        $this->row($uid,$id); $q=$this->db->getQueryBuilder(); $q->update('library_infer_jobs')->set('status',$q->createNamedParameter($status))->where($q->expr()->eq('id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->eq('status',$q->createNamedParameter('running')))->executeStatement();
    }
    public function discard(string $uid,string $id): void {
        $this->db->beginTransaction();
        try { $this->row($uid,$id,true); foreach (['library_infer_results'=>'job_id','library_infer_jobs'=>'id'] as $table=>$column) { $q=$this->db->getQueryBuilder(); $q->delete($table)->where($q->expr()->eq($column,$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->executeStatement(); } $this->db->commit(); }
        catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
    }
}
