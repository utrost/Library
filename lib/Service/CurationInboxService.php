<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\IDBConnection;
use OCA\Library\Exception\MetadataConflictException;
final class CurationInboxService {
    public function __construct(private IDBConnection $db,private ItemService $items) {}
    private function revision(array $item): string { return hash('sha256',json_encode([$item['metadataRevision'],$item['coverCacheRevision'] ?? '',array_column($item['canonicalAuthors'] ?? [],'id'),$item['canonicalSeries'] ?? [],array_column($item['canonicalGenres'] ?? [],'id')],JSON_THROW_ON_ERROR)); }
    public function page(string $uid,int $before=0,string $filter='pending',string $day='',int $rootId=0): array {
        if (!in_array($filter,['pending','done','deferred','all'],true)) throw new \InvalidArgumentException('invalid_filter');
        if ($day!=='' && (!preg_match('/^\d{4}-\d{2}-\d{2}$/D',$day) || gmdate('Y-m-d',strtotime($day.' UTC'))!==$day)) throw new \InvalidArgumentException('invalid_day');
        if ($rootId<0) throw new \InvalidArgumentException('invalid_root');
        $q=$this->db->getQueryBuilder();$q->select('i.id','s.state','s.revision','s.until_at','f.created_at','f.root_id','r.path')->from('library_items','i')
            ->innerJoin('i','library_files','f',$q->expr()->andX($q->expr()->eq('i.library_file_id','f.id'),$q->expr()->eq('i.user_id','f.user_id')))
            ->leftJoin('f','library_roots','r',$q->expr()->andX($q->expr()->eq('f.root_id','r.id'),$q->expr()->eq('f.user_id','r.user_id')))
            ->leftJoin('i','library_inbox_state','s',$q->expr()->andX($q->expr()->eq('i.id','s.item_id'),$q->expr()->eq('i.user_id','s.user_id')))
            ->where($q->expr()->eq('i.user_id',$q->createNamedParameter($uid)))
            ->andWhere($q->expr()->isNull('i.marked_for_deletion_at'));
        if ($day!=='') { $start=strtotime($day.' UTC');$q->andWhere($q->expr()->gte('f.created_at',$q->createNamedParameter($start)))->andWhere($q->expr()->lt('f.created_at',$q->createNamedParameter($start+86400))); }
        if ($rootId>0) $q->andWhere($q->expr()->eq('f.root_id',$q->createNamedParameter($rootId)));
        if ($before>0) $q->andWhere($q->expr()->lt('i.id',$q->createNamedParameter($before)));
        $r=$q->orderBy('i.id','DESC')->setMaxResults(51)->executeQuery();$scan=$r->fetchAll();$r->closeCursor();$more=count($scan)>50;$rows=[];
        $books=$this->items->curationItems($uid,array_map('intval',array_column(array_slice($scan,0,50),'id')));
        foreach (array_slice($scan,0,50) as $entry) {
            if (!isset($entry['path'])) continue;
            $item=$books[(int)$entry['id']] ?? null;if (!$item) continue;
            $revision=$this->revision($item);$state=($entry['revision'] ?? '')===$revision ? ($entry['state'] ?? 'pending') : 'pending';
            if ($state==='deferred' && (int)$entry['until_at']<=time()) $state='pending';
            if ($filter!=='all' && $state!==$filter) continue;
            $rows[]=['id'=>$item['id'],'title'=>$item['title'],'creators'=>$item['creators'],'revision'=>$revision,'state'=>$state,'until'=>(int)($entry['until_at'] ?? 0),
                'missing'=>array_values(array_filter(['title'=>empty($item['title']) ? 'title' : null,'authors'=>empty($item['canonicalAuthors']) && empty($item['creators']) ? 'authors' : null,'language'=>empty($item['language']) ? 'language' : null,'description'=>empty($item['description']) ? 'description' : null])),
                'scanStatus'=>$item['scanStatus'],'batchDay'=>gmdate('Y-m-d',(int)$entry['created_at']),'rootId'=>(int)$entry['root_id'],'rootPath'=>$entry['path']];
        }
        return ['rows'=>$rows,'next'=>$more ? (int)$scan[49]['id'] : null,'scanned'=>min(50,count($scan))];
    }
    public function decide(string $uid,int $id,string $revision,string $state): void {
        if (!in_array($state,['pending','done','deferred'],true)) throw new \InvalidArgumentException('invalid_state');
        $this->db->beginTransaction();
        try {
            $this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id=? AND id=?',[$uid,$id]);
            $item=$this->items->findItem($uid,$id);
            if (!$item) throw new \OutOfBoundsException('not_found');
            if (!hash_equals($this->revision($item),$revision)) throw new MetadataConflictException('metadata_changed');
            $this->db->executeStatement('DELETE FROM *PREFIX*library_inbox_state WHERE user_id=? AND item_id=?',[$uid,$id]);
            $this->db->insertIfNotExist('*PREFIX*library_inbox_state',['user_id'=>$uid,'item_id'=>$id,'revision'=>$revision,'state'=>$state,'until_at'=>$state==='deferred' ? time()+86400 : 0,'created_at'=>time()],['user_id','item_id']);
            $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack();throw $e; }
    }
}
