<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\IDBConnection;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\BackgroundJob\IJobList;
use OCP\IURLGenerator;
use OCA\Library\BackgroundJob\DuplicateJob;

/** Private, read-only discovery. Decisions describe a comparison; they never modify books. */
final class DuplicateService {
    public function __construct(private IDBConnection $db,private RootService $roots,private IRootFolder $files,
        private InferenceBatchService $snapshots,private IJobList $jobs,private IURLGenerator $urls) {}

    public function roots(string $uid): array {
        $result=[]; $home=$this->files->getUserFolder($uid);
        foreach ($this->roots->listRoots($uid) as $root) {
            try { $node=$home->get(trim($root['path'],'/') ?: '/');
                if ($node instanceof Folder && $node->isReadable()) $result[]=['id'=>$root['id'],'label'=>$root['label'] ?: $root['path'],'path'=>$root['path'],'fileId'=>$node->getId()];
            } catch (\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException) {}
        }
        return $result;
    }
    public function history(string $uid): array {
        $q=$this->db->getQueryBuilder(); $r=$q->select('id','status','created_at')->from('library_dup_jobs')->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->gt('expires_at',$q->createNamedParameter(time())))->orderBy('created_at','DESC')->addOrderBy('id','DESC')->setMaxResults(3)->executeQuery(); $rows=$r->fetchAll(); $r->closeCursor(); return $rows;
    }
    private function selection(string $uid,array $state) {
        $q=$this->db->getQueryBuilder();
        return $q->from('library_items','i')->innerJoin('i','library_files','f',$q->expr()->eq('i.library_file_id','f.id'))
            ->where($q->expr()->eq('i.user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->eq('f.user_id',$q->createNamedParameter($uid)))
            ->andWhere($q->expr()->in('f.root_id',$q->createNamedParameter(array_map('intval',array_keys($state['roots'])),IQueryBuilder::PARAM_INT_ARRAY)))
            ->andWhere($q->expr()->neq('f.scan_status',$q->createNamedParameter('missing')));
    }
    /** Common lock keeps scan snapshots and decisions consistent across jobs. */
    private function lockAccount(string $uid): void {
        $q=$this->db->getQueryBuilder(); $r=$q->select('id')->from('library_roots')->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->orderBy('id','ASC')->setMaxResults(1)->executeQuery(); $first=$r->fetchOne(); $r->closeCursor();
        if (!$first) throw new \OutOfBoundsException('scope_unavailable');
        $q=$this->db->getQueryBuilder();
        if ($this->db->getDatabaseProvider()==='sqlite') $q->update('library_roots')->set('id',$q->createFunction('id'))->where($q->expr()->eq('id',$q->createNamedParameter($first)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->executeStatement();
        else { $r=$q->select('id')->from('library_roots')->where($q->expr()->eq('id',$q->createNamedParameter($first)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->forUpdate()->executeQuery(); if (!$r->fetch()) throw new \OutOfBoundsException('scope_unavailable'); $r->closeCursor(); }
    }
    public function start(string $uid,mixed $rootId,mixed $contents): array {
        if (!(is_int($rootId)||is_string($rootId)) || !preg_match('/^[0-9]{1,10}$/D',(string)$rootId) || !is_bool($contents)) throw new \InvalidArgumentException('invalid_scope');
        $available=$this->roots($uid); $selected=[]; $label='';
        foreach ($available as $root) if (!(int)$rootId || $root['id']===(int)$rootId) { $selected[$root['id']]=['path'=>$root['path'],'fileId'=>$root['fileId']]; $label=$root['label']; }
        if (!$selected) throw new \OutOfBoundsException('scope_unavailable');
        if (count($selected)>500) throw new \InvalidArgumentException('scope_limit');
        $state=['rootId'=>(int)$rootId,'label'=>(int)$rootId ? $label : '', 'roots'=>$selected,'contents'=>$contents,'phase'=>'index','cursor'=>0,'maxId'=>0,'total'=>0,'processed'=>0,
            'key'=>'','group'=>null,'examined'=>0,'matches'=>0,'unavailable'=>0,'broadGroups'=>0,'hashSkipped'=>0,'bytesRead'=>0,'sequence'=>0];
        $this->db->beginTransaction();
        try {
            // Serialize starts for this account, including different selected roots.
            $this->lockAccount($uid);
            if (count($this->history($uid))>=3) throw new \InvalidArgumentException('history_limit');
            $q=$this->selection($uid,$state); $r=$q->select($q->func()->count('i.id','n'))->selectAlias($q->func()->max('i.id'),'maximum')->executeQuery(); $counts=$r->fetch(); $r->closeCursor();
            if ((int)$counts['n']>100000) throw new \InvalidArgumentException('scope_limit');
            $state['total']=(int)$counts['n']; $state['maxId']=(int)($counts['maximum']??0);
            $id=bin2hex(random_bytes(16)); $q=$this->db->getQueryBuilder(); $q->insert('library_dup_jobs');
            foreach (['id'=>$id,'user_id'=>$uid,'status'=>'running','payload'=>json_encode($state,JSON_THROW_ON_ERROR),'created_at'=>time(),'expires_at'=>time()+604800] as $k=>$v) $q->setValue($k,$q->createNamedParameter($v));
            $q->executeStatement(); $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
        $this->queue($uid,$id,0); return $this->get($uid,$id);
    }
    private function row(string $uid,string $id,bool $lock=false): array {
        if (!preg_match('/^[a-f0-9]{32}$/D',$id)) throw new \OutOfBoundsException('missing_scan');
        if ($lock && $this->db->getDatabaseProvider()==='sqlite') { $q=$this->db->getQueryBuilder(); $q->update('library_dup_jobs')->set('id',$q->createFunction('id'))->where($q->expr()->eq('id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->executeStatement(); }
        $q=$this->db->getQueryBuilder(); $q->select('*')->from('library_dup_jobs')->where($q->expr()->eq('id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->gt('expires_at',$q->createNamedParameter(time())));
        if ($lock && $this->db->getDatabaseProvider()!=='sqlite') $q->forUpdate(); $r=$q->executeQuery(); $row=$r->fetch(); $r->closeCursor(); if (!$row) throw new \OutOfBoundsException('missing_scan'); return $row;
    }
    private function save(string $uid,string $id,array $state,string $status='running'): void {
        $q=$this->db->getQueryBuilder(); $q->update('library_dup_jobs')->set('payload',$q->createNamedParameter(json_encode($state,JSON_THROW_ON_ERROR)))->set('status',$q->createNamedParameter($status))->where($q->expr()->eq('id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->executeStatement();
    }
    private function book(string $uid,int $id): array {
        $snapshot=$this->snapshots->snapshot($uid,$id); $s=$snapshot['state']; $f=$snapshot['file'];
        $q=$this->db->getQueryBuilder(); $r=$q->select('normalized_value')->from('library_item_identifiers')->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->eq('item_id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('scheme',$q->createNamedParameter('isbn')))->andWhere($q->expr()->eq('valid',$q->createNamedParameter(1)))->orderBy('normalized_value','ASC')->setMaxResults(20)->executeQuery(); $isbn=array_values(array_unique(array_column($r->fetchAll(),'normalized_value'))); $r->closeCursor();
        return ['id'=>$id,'fileId'=>$f['id'],'rootId'=>$f['rootId'],'rootPath'=>$f['rootPath'],'rootFileId'=>$f['rootFileId'],'path'=>$f['path'],'size'=>(int)$f['size'],'format'=>strtolower(pathinfo($f['path'],PATHINFO_EXTENSION)),
            'title'=>(string)$s['title'],'authors'=>AuthorNames::read($s['authors_json']??null,$s['creators']),'language'=>(string)$s['language'],'publicationDate'=>(string)$s['publication_date'],'publisher'=>(string)$s['publisher'],'isbn'=>$isbn,
            'revision'=>hash('sha256',json_encode([$snapshot,$isbn],JSON_THROW_ON_ERROR)),'hashState'=>'pending','hash'=>''];
    }
    /** Frozen job data, reused only while its locked transaction is held. */
    private function cachedBooks(string $uid,string $jobId,array $ids): array {
        $ids=array_values(array_unique(array_map('intval',$ids)));
        if (!$ids || count($ids)>50) throw new \InvalidArgumentException('selection_limit');
        $q=$this->db->getQueryBuilder(); $r=$q->select('item_id','payload')->from('library_dup_books')
            ->where($q->expr()->eq('job_id',$q->createNamedParameter($jobId)))
            ->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))
            ->andWhere($q->expr()->in('item_id',$q->createNamedParameter($ids,IQueryBuilder::PARAM_INT_ARRAY)))->executeQuery();
        $books=[];while($row=$r->fetch())$books[(int)$row['item_id']]=json_decode($row['payload'],true,512,JSON_THROW_ON_ERROR);
        $r->closeCursor();return $books;
    }
    private function insertKeys(string $uid,string $jobId,int $itemId,array $keys): void {
        if (!$keys) return;
        // Matcher produces at most 17 keys; keep the SQL parameter count bounded explicitly.
        foreach(array_chunk($keys,100) as $chunk){$values=[];$params=[];foreach($chunk as $key){$values[]='(?,?,?,?)';array_push($params,$jobId,$uid,$itemId,$key);}
            $this->db->executeStatement('INSERT INTO *PREFIX*library_dup_keys (job_id,user_id,item_id,match_key) VALUES '.implode(',',$values),$params);}
    }
    private function hashBook(string $uid,string $jobId,array $book,array &$state): array {
        if ($book['hashState']!=='pending') return $book;
        $book['hashState']='skipped'; $stream=false;
        try {
            if ($book['size']<1 || $book['size']>67108864 || $state['bytesRead']+$book['size']>536870912) throw new \OutOfBoundsException('content_limit');
            if ($this->book($uid,$book['id'])['revision']!==$book['revision']) throw new \OutOfBoundsException('changed_book');
            $file=$this->files->getUserFolder($uid)->get(ltrim($book['path'],'/'));
            if (!$file instanceof File || !$file->isReadable() || $file->getId()!==$book['fileId']) throw new \OutOfBoundsException('missing_book');
            $stream=$file->fopen('r'); if (!is_resource($stream)) throw new \OutOfBoundsException('content_unavailable');
            $hash=hash_init('sha256'); $read=0; $deadline=microtime(true)+4;
            while (!feof($stream) && $read<$book['size']) {
                if (microtime(true)>$deadline || $read>=67108864 || $state['bytesRead']>=536870912) throw new \OutOfBoundsException('content_limit');
                $chunk=fread($stream,min(1048576,$book['size']-$read,67108864-$read,536870912-$state['bytesRead'])); if ($chunk===false || ($chunk==='' && !feof($stream))) throw new \OutOfBoundsException('content_unavailable');
                $read+=strlen($chunk); $state['bytesRead']+=strlen($chunk); hash_update($hash,$chunk);
            }
            if ($read!==$book['size'] || $this->book($uid,$book['id'])['revision']!==$book['revision']) throw new \OutOfBoundsException('changed_book');
            $book['hash']=hash_final($hash); $book['hashState']='checked';
        } catch (\OutOfBoundsException|\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException) { $state['hashSkipped']++; }
        finally { if (is_resource($stream)) fclose($stream); }
        $q=$this->db->getQueryBuilder(); $q->update('library_dup_books')->set('payload',$q->createNamedParameter(json_encode($book,JSON_THROW_ON_ERROR)))->where($q->expr()->eq('job_id',$q->createNamedParameter($jobId)))->andWhere($q->expr()->eq('item_id',$q->createNamedParameter($book['id'])))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->executeStatement();
        return $book;
    }
    private function queue(string $uid,string $id,int $sequence): void { $this->jobs->add(DuplicateJob::class,['userId'=>$uid,'id'=>$id,'sequence'=>$sequence]); }
    public function advance(string $uid,string $id,int $limit=30): void {
        $started=microtime(true); $initial=$this->row($uid,$id); if ($initial['status']!=='running') return;
        $remaining=max(1,min(100,$limit));
        while ($remaining>0 && microtime(true)-$started<6) {
            $this->db->beginTransaction();
            try {
                $this->lockAccount($uid); $row=$this->row($uid,$id,true); if ($row['status']!=='running') { $this->db->commit(); return; }
                $state=json_decode($row['payload'],true,512,JSON_THROW_ON_ERROR); $status='running';
                $batchStarted=microtime(true);$frozenBooks=[];
                // Commit within ten units or 200ms, retaining cancellation/decision serialization.
                // A bounded content read may finish its existing per-pair deadline before commit.
                for($unit=0;$unit<10 && $remaining>0 && microtime(true)-$started<6 && microtime(true)-$batchStarted<0.2;$unit++){
                if ($state['phase']==='index') {
                    $q=$this->selection($uid,$state); $r=$q->select('i.id')->andWhere($q->expr()->gt('i.id',$q->createNamedParameter($state['cursor'],IQueryBuilder::PARAM_INT)))->andWhere($q->expr()->lte('i.id',$q->createNamedParameter($state['maxId'],IQueryBuilder::PARAM_INT)))->orderBy('i.id','ASC')->setMaxResults(1)->executeQuery(); $itemId=$r->fetchOne(); $r->closeCursor();
                    if (!$itemId) $state['phase']='compare';
                    else {
                        $state['cursor']=(int)$itemId; $state['processed']++;
                        try {
                            $book=$this->book($uid,(int)$itemId); $scope=$state['roots'][$book['rootId']]??null;
                            if (!$scope || $scope['fileId']!==$book['rootFileId'] || $scope['path']!==$book['rootPath']) throw new \OutOfBoundsException('changed_scope');
                            $q=$this->db->getQueryBuilder(); $q->insert('library_dup_books')->values(['job_id'=>$q->createNamedParameter($id),'user_id'=>$q->createNamedParameter($uid),'item_id'=>$q->createNamedParameter((int)$itemId),'payload'=>$q->createNamedParameter(json_encode($book,JSON_THROW_ON_ERROR))])->executeStatement();
                            $this->insertKeys($uid,$id,(int)$itemId,DuplicateMatcher::keys($book,$state['contents']));
                        } catch (\OutOfBoundsException) { $state['unavailable']++; }
                    }
                } else {
                    if (!$state['group']) {
                        $q=$this->db->getQueryBuilder(); $r=$q->select('match_key',$q->func()->count('*','n'))->from('library_dup_keys')->where($q->expr()->eq('job_id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->gt('match_key',$q->createNamedParameter($state['key'])))->groupBy('match_key')->having($q->expr()->gt($q->func()->count('*'),$q->createNamedParameter(1,IQueryBuilder::PARAM_INT)))->orderBy('match_key','ASC')->setMaxResults(1)->executeQuery(); $group=$r->fetch(); $r->closeCursor();
                        if (!$group) $status=$state['broadGroups'] ? 'limited' : 'completed';
                        else {
                            $state['key']=$group['match_key']; if ((int)$group['n']>50) $state['broadGroups']++;
                            $q=$this->db->getQueryBuilder(); $r=$q->select('item_id')->from('library_dup_keys')->where($q->expr()->eq('job_id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->eq('match_key',$q->createNamedParameter($state['key'])))->orderBy('item_id','ASC')->setMaxResults(50)->executeQuery(); $ids=array_map('intval',array_column($r->fetchAll(),'item_id')); $r->closeCursor(); $state['group']=['ids'=>$ids,'i'=>0,'j'=>1];
                        }
                    }
                    if ($state['group']) {
                        $group=&$state['group'];
                        $missing=array_values(array_diff($group['ids'],array_keys($frozenBooks)));
                        if($missing)$frozenBooks=$this->cachedBooks($uid,$id,$group['ids']);
                        $a=$frozenBooks[$group['ids'][$group['i']]]??throw new \OutOfBoundsException('missing_book');
                        $b=$frozenBooks[$group['ids'][$group['j']]]??throw new \OutOfBoundsException('missing_book');
                        $pairId=hash('sha256',$a['id'].':'.$b['id']); $q=$this->db->getQueryBuilder(); $r=$q->select('pair_id')->from('library_dup_pairs')->where($q->expr()->eq('job_id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('pair_id',$q->createNamedParameter($pairId)))->executeQuery(); $exists=$r->fetchOne(); $r->closeCursor();
                        if (!$exists) {
                            if ($state['contents'] && $a['size']===$b['size']) { $a=$this->hashBook($uid,$id,$a,$state); $b=$this->hashBook($uid,$id,$b,$state); }
                            $frozenBooks[$a['id']]=$a;$frozenBooks[$b['id']]=$b;
                            $evidence=DuplicateMatcher::evidence($a,$b);
                            if ($evidence['reasons']!==[]) {
                                $signature=DuplicateMatcher::signature($a,$b); $decision=$this->choice($uid,$signature);
                                $pair=['books'=>[$a,$b],...$evidence];
                                $q=$this->db->getQueryBuilder(); $q->insert('library_dup_pairs')->values(['job_id'=>$q->createNamedParameter($id),'user_id'=>$q->createNamedParameter($uid),'pair_id'=>$q->createNamedParameter($pairId),'signature'=>$q->createNamedParameter($signature),'decision'=>$q->createNamedParameter($decision['decision']),'payload'=>$q->createNamedParameter(json_encode($pair,JSON_THROW_ON_ERROR))])->executeStatement(); $state['matches']++;
                            }
                        }
                        $state['examined']++; $group['j']++;
                        if ($group['j']>=count($group['ids'])) { $group['i']++; $group['j']=$group['i']+1; }
                        if ($group['i']>=count($group['ids'])-1) $state['group']=null;
                        unset($group);
                        if ($state['matches']>=5000 || $state['examined']>=100000) $status='limited';
                    }
                }
                $state['sequence']++;$remaining--;if($status!=='running')break;
                }
                $this->save($uid,$id,$state,$status); $this->db->commit(); if ($status!=='running') return;
            } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
        }
        $row=$this->row($uid,$id); if ($row['status']==='running') $this->queue($uid,$id,(int)json_decode($row['payload'],true)['sequence']);
    }
    private function choice(string $uid,string $signature): array {
        $q=$this->db->getQueryBuilder(); $r=$q->select('decision','preferred_id')->from('library_dup_choices')->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->eq('signature',$q->createNamedParameter($signature)))->executeQuery(); $row=$r->fetch(); $r->closeCursor(); return $row ? ['decision'=>$row['decision'],'preferredId'=>(int)$row['preferred_id']] : ['decision'=>'unreviewed','preferredId'=>0];
    }
    private function pair(string $uid,string $jobId,string $pairId): array {
        if (!preg_match('/^[a-f0-9]{64}$/D',$pairId)) throw new \OutOfBoundsException('missing_comparison');
        $q=$this->db->getQueryBuilder(); $r=$q->select('*')->from('library_dup_pairs')->where($q->expr()->eq('job_id',$q->createNamedParameter($jobId)))->andWhere($q->expr()->eq('pair_id',$q->createNamedParameter($pairId)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->executeQuery(); $row=$r->fetch(); $r->closeCursor(); if (!$row) throw new \OutOfBoundsException('missing_comparison'); return $row;
    }
    private function publicPair(string $uid,array $row): array {
        $pair=json_decode($row['payload'],true,512,JSON_THROW_ON_ERROR); $stale=false; $books=[];
        foreach ($pair['books'] as $book) {
            try { $live=$this->book($uid,$book['id']); if ($live['revision']!==$book['revision']) $stale=true; }
            catch (\OutOfBoundsException) { return ['id'=>$row['pair_id'],'unavailable'=>true,'books'=>[],'reasons'=>[],'flags'=>[]]; }
            $book=array_intersect_key($book,array_flip(['id','title','authors','language','publicationDate','publisher','isbn','format','path','size','hashState']));
            $book['coverUrl']=$this->urls->linkToRoute('library.cover.show',['itemId'=>$book['id']]); $book['detailsUrl']=$this->urls->linkToRoute('library.item_page.show',['itemId'=>$book['id']]); $book['openUrl']=$this->urls->linkToRoute('library.item.open',['itemId'=>$book['id']]); $books[]=$book;
        }
        return ['id'=>$row['pair_id'],'signature'=>$row['signature'],'books'=>$books,'reasons'=>$pair['reasons'],'flags'=>$pair['flags'],'stale'=>$stale,...$this->choice($uid,$row['signature'])];
    }
    public function get(string $uid,string $id,int $page=1,string $filter='unreviewed'): array {
        $row=$this->row($uid,$id); $state=json_decode($row['payload'],true,512,JSON_THROW_ON_ERROR);
        if (!in_array($filter,['all','unreviewed','preferred','keep','dismissed'],true)) throw new \InvalidArgumentException('invalid_filter');
        $q=$this->db->getQueryBuilder(); $r=$q->select('decision',$q->func()->count('*','n'))->from('library_dup_pairs')->where($q->expr()->eq('job_id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->groupBy('decision')->executeQuery(); $counts=[]; while ($c=$r->fetch()) $counts[$c['decision']]=(int)$c['n']; $r->closeCursor();
        $total=$filter==='all' ? array_sum($counts) : ($counts[$filter]??0); $page=max(1,min(max(1,(int)ceil($total/10)),$page));
        $q=$this->db->getQueryBuilder(); $q->select('*')->from('library_dup_pairs')->where($q->expr()->eq('job_id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)));
        if ($filter!=='all') $q->andWhere($q->expr()->eq('decision',$q->createNamedParameter($filter)));
        $r=$q->orderBy('pair_id','ASC')->setFirstResult(($page-1)*10)->setMaxResults(10)->executeQuery(); $rows=$r->fetchAll(); $r->closeCursor();
        return ['id'=>$id,'status'=>$row['status'],'rootId'=>$state['rootId'],'label'=>$state['label'],'contents'=>$state['contents'],'phase'=>$state['phase'],'processed'=>$state['processed'],'total'=>$state['total'],'examined'=>$state['examined'],'matches'=>$state['matches'],'unavailable'=>$state['unavailable'],'broadGroups'=>$state['broadGroups'],'hashSkipped'=>$state['hashSkipped'],'bytesRead'=>$state['bytesRead'],'counts'=>$counts,'page'=>$page,'hasNext'=>$page*10<$total,'pairs'=>array_map(fn($pair)=>$this->publicPair($uid,$pair),$rows),'expiresAt'=>(int)$row['expires_at']];
    }
    public function decide(string $uid,string $jobId,string $pairId,mixed $signature,mixed $decision,mixed $preferredId): array {
        if (!is_string($signature) || !in_array($decision,['preferred','keep','dismissed','unreviewed'],true) || !is_int($preferredId)) throw new \InvalidArgumentException('invalid_decision');
        $this->db->beginTransaction();
        try {
            $this->lockAccount($uid); $this->row($uid,$jobId,true); $row=$this->pair($uid,$jobId,$pairId); $pair=$this->publicPair($uid,$row);
            if (($pair['unavailable']??false) || ($pair['stale']??false) || !hash_equals($row['signature'],$signature)) throw new \DomainException('stale_comparison');
            if ($decision==='preferred' && !in_array($preferredId,array_column($pair['books'],'id'),true)) throw new \InvalidArgumentException('invalid_preference');
            $this->saveDecision($uid,$signature,$decision,$preferredId,json_decode($row['payload'],true)['books']); $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
        return ['saved'=>true];
    }
    public function compare(string $uid,int $left,int $right):array {
        if($left<1||$right<1||$left===$right)throw new \InvalidArgumentException('invalid_pair');
        $a=$this->book($uid,$left);$b=$this->book($uid,$right);$evidence=DuplicateMatcher::evidence($a,$b);
        return $this->publicPair($uid,['pair_id'=>hash('sha256',min($left,$right).':'.max($left,$right)),'signature'=>DuplicateMatcher::signature($a,$b),'payload'=>json_encode(['books'=>[$a,$b],...$evidence],JSON_THROW_ON_ERROR)]);
    }
    public function decideBooks(string $uid,int $left,int $right,mixed $signature,mixed $decision,mixed $preferredId):array {
        if($left<1||$right<1||$left===$right||!is_string($signature)||!is_int($preferredId)||!in_array($decision,['preferred','keep','dismissed','unreviewed'],true))throw new \InvalidArgumentException('invalid_decision');
        $this->db->beginTransaction();try{
            $this->lockAccount($uid);$books=[$this->book($uid,$left),$this->book($uid,$right)];
            if(!hash_equals(DuplicateMatcher::signature(...$books),$signature))throw new \DomainException('stale_comparison');
            if($decision==='preferred'&&!in_array($preferredId,[$left,$right],true))throw new \InvalidArgumentException('invalid_preference');
            $this->saveDecision($uid,$signature,$decision,$preferredId,$books);$this->db->commit();
        }catch(\Throwable $e){$this->db->rollBack();throw $e;}
        return ['saved'=>true];
    }
    private function saveDecision(string $uid,string $signature,string $decision,int $preferredId,array $books):void {
            if ($decision!=='unreviewed' && $this->choice($uid,$signature)['decision']==='unreviewed') {
                $q=$this->db->getQueryBuilder(); $r=$q->select($q->func()->count('*','n'))->from('library_dup_choices')->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->executeQuery(); $count=(int)$r->fetchOne(); $r->closeCursor();
                if ($count>=10000) throw new \InvalidArgumentException('decision_limit');
            }
            $q=$this->db->getQueryBuilder(); $q->delete('library_dup_choices')->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->eq('signature',$q->createNamedParameter($signature)))->executeStatement();
            if ($decision!=='unreviewed') { $q=$this->db->getQueryBuilder(); $q->insert('library_dup_choices')->values(['user_id'=>$q->createNamedParameter($uid),'signature'=>$q->createNamedParameter($signature),'decision'=>$q->createNamedParameter($decision),'preferred_id'=>$q->createNamedParameter($decision==='preferred' ? $preferredId : 0),'updated_at'=>$q->createNamedParameter(time())])->executeStatement(); }
            $q=$this->db->getQueryBuilder(); $q->update('library_dup_pairs')->set('decision',$q->createNamedParameter($decision))->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->eq('signature',$q->createNamedParameter($signature)))->executeStatement();
        $ids=array_column($books,'id');$left=min($ids);$right=max($ids);
        $q=$this->db->getQueryBuilder();$q->delete('library_dup_hints')->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->eq('left_id',$q->createNamedParameter($left)))->andWhere($q->expr()->eq('right_id',$q->createNamedParameter($right)))->executeStatement();
        if($decision!=='unreviewed'){$q=$this->db->getQueryBuilder();$values=['user_id'=>$uid,'left_id'=>$left,'right_id'=>$right,'signature'=>DuplicateMatcher::hintSignature(...$books),'decision'=>$decision,'preferred_id'=>$preferredId];$q->insert('library_dup_hints')->values(array_map(fn($v)=>$q->createNamedParameter($v),$values))->executeStatement();}
    }
    public function stop(string $uid,string $id,string $status='cancelled'): void {
        $this->row($uid,$id); $q=$this->db->getQueryBuilder(); $q->update('library_dup_jobs')->set('status',$q->createNamedParameter($status))->where($q->expr()->eq('id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->andWhere($q->expr()->eq('status',$q->createNamedParameter('running')))->executeStatement();
    }
    public function discard(string $uid,string $id): void {
        $this->db->beginTransaction();
        try { $this->row($uid,$id,true); foreach (['library_dup_keys','library_dup_books','library_dup_pairs','library_dup_jobs'] as $table) { $q=$this->db->getQueryBuilder(); $q->delete($table)->where($q->expr()->eq($table==='library_dup_jobs' ? 'id' : 'job_id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($uid)))->executeStatement(); } $this->db->commit(); }
        catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
    }
}
