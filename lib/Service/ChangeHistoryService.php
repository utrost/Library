<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\IDBConnection;
use OCP\Files\{File,IRootFolder,NotFoundException,NotPermittedException};
use OCA\Library\Exception\MetadataConflictException;

/** Private, bounded change evidence. Call record inside the mutation transaction. */
final class ChangeHistoryService {
    public const FIELDS=['publicationType','title','subtitle','creators','authors','publication','series','seriesNumber','genre','publicationDate','language','publisher','description','subjects','classifications','personalRating','identifiers','starred','workflowStatus','markedForDeletionAt'];
    public function __construct(private IDBConnection $db,private IRootFolder $root) {}
    public function snapshot(array $item): array {
        $data=[];
        foreach (self::FIELDS as $key) $data[$key]=$item[$key] ?? null;
        $data['links']=$this->links($item);
        $data['coverRevision']=$item['coverRevision'] ?? null;
        return $data;
    }
    public function links(array $item): array {
        return ['authors'=>array_map('intval',array_column($item['canonicalAuthors'] ?? [],'id')),
            'genres'=>array_map('intval',array_column($item['canonicalGenres'] ?? [],'id')),
            'series'=>isset($item['canonicalSeries'][0]['id']) ? (int)$item['canonicalSeries'][0]['id'] : null,
            'part'=>(string)($item['canonicalSeries'][0]['part'] ?? '')];
    }
    public function record(string $uid,int $itemId,string $kind,array $before,array $after,array $evidence=[]): ?int {
        $old=$this->snapshot($before); $new=$this->snapshot($after);
        $changed=[];
        foreach ($new as $field=>$value) if ($value!==($old[$field] ?? null)) $changed[]=$field;
        if (!$changed) return null;
        $payload=['fields'=>$changed,'before'=>array_intersect_key($old,array_flip($changed)),
            'after'=>array_intersect_key($new,array_flip($changed)),
            'revision'=>$after['metadataRevision'] ?? '', 'fileId'=>$after['fileId'] ?? 0,
            'sourceRevision'=>$after['coverCacheRevision'] ?? '', 'beforeSources'=>$before['fieldSources'] ?? [],'source'=>$evidence];
        if (in_array('links',$changed,true)) { $names=static fn(array $item): array=>array_merge(array_column($item['canonicalAuthors'] ?? [],'name'),array_column($item['canonicalSeries'] ?? [],'name'),array_column($item['canonicalGenres'] ?? [],'name'));$payload['linkNames']=['before'=>$names($before),'after'=>$names($after)]; }
        $json=json_encode($payload,JSON_THROW_ON_ERROR);
        if (strlen($json)>524288) throw new \LengthException('history_too_large');
        $q=$this->db->getQueryBuilder();$q->insert('library_change_history')->values([
            'user_id'=>$q->createNamedParameter($uid),'item_id'=>$q->createNamedParameter($itemId),
            'kind'=>$q->createNamedParameter($kind),'payload'=>$q->createNamedParameter($json),
            'created_at'=>$q->createNamedParameter(time()),'expires_at'=>$q->createNamedParameter(time()+15552000),
            'undone'=>$q->createNamedParameter(0),
        ])->executeStatement();return (int)$this->db->lastInsertId('library_change_history');
    }
    /** Evidence for operations whose source-file outcome is distinct from saved metadata. */
    public function sourceWrite(string $uid,int $itemId,string $jobId,string $outcome,array $review): void {
        $payload=json_encode(['fields'=>[],'before'=>[],'after'=>[],'source'=>['operationId'=>$jobId,'outcome'=>$outcome,'review'=>$review]],JSON_THROW_ON_ERROR);
        if (strlen($payload)>524288) throw new \LengthException('history_too_large');
        $q=$this->db->getQueryBuilder();$q->insert('library_change_history');
        foreach (['user_id'=>$uid,'item_id'=>$itemId,'kind'=>'source_write','payload'=>$payload,'created_at'=>time(),'expires_at'=>time()+15552000,'undone'=>0] as $key=>$value) $q->setValue($key,$q->createNamedParameter($value));
        $q->executeStatement();
    }
    /** Existing operation journals remain the authority for merge Undo. */
    public function operation(string $uid,int $itemId,string $kind,string $operationId,array $before,array $after): void {
        $this->record($uid,$itemId,$kind,['canonicalAuthors'=>[],'canonicalSeries'=>[],'canonicalGenres'=>[]]+$before,['canonicalAuthors'=>[],'canonicalSeries'=>[],'canonicalGenres'=>[]]+$after,['operationId'=>$operationId]);
    }
    public function page(string $uid,int $itemId,int $before=0): array {
        $q=$this->db->getQueryBuilder();$q->select('id','kind','payload','created_at','undone','expires_at')->from('library_change_history')
            ->where($q->expr()->eq('user_id',$q->createNamedParameter($uid)))
            ->andWhere($q->expr()->eq('item_id',$q->createNamedParameter($itemId)))
            ->andWhere($q->expr()->gt('expires_at',$q->createNamedParameter(time())));
        if ($before>0) $q->andWhere($q->expr()->lt('id',$q->createNamedParameter($before)));
        $r=$q->orderBy('id','DESC')->setMaxResults(31)->executeQuery();$rows=$r->fetchAll();$r->closeCursor();
        $more=count($rows)>30;$rows=array_slice($rows,0,30);
        foreach ($rows as &$row) { $row['id']=(int)$row['id'];$row['changes']=json_decode($row['payload'],true,64,JSON_THROW_ON_ERROR);unset($row['payload']);$row['undone']=in_array($row['undone'],[true,1,'1','t','true'],true); }
        return ['rows'=>$rows,'next'=>$more ? $rows[array_key_last($rows)]['id'] : null];
    }
    public function undo(string $uid,int $itemId,int $eventId,ItemService $items): void {
        $this->db->beginTransaction();
        try {
            // Serialize with ordinary metadata saves, including on SQLite.
            $this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id=? AND id=?',[$uid,$itemId]);
            $r=$this->db->executeQuery('SELECT * FROM *PREFIX*library_change_history WHERE user_id=? AND item_id=? AND id=?',[$uid,$itemId,$eventId]);$event=$r->fetch();$r->closeCursor();
            if (!$event || (int)$event['expires_at']<=time()) throw new \OutOfBoundsException('not_found');
            if (in_array($event['undone'],[true,1,'1','t','true'],true)) { $this->db->commit();return; }
            // Provider and operation-specific Undo remain with their original complete receipts.
            if (!in_array($event['kind'],['manual','organisation'],true)) throw new \DomainException('use_operation_receipt');
            $p=json_decode($event['payload'],true,64,JSON_THROW_ON_ERROR);$item=$items->findItem($uid,$itemId);
            if (!$item || (int)$item['fileId']!==(int)$p['fileId'] || !hash_equals($p['revision'],$item['metadataRevision']) || !hash_equals($p['sourceRevision'],$item['coverCacheRevision'])) throw new MetadataConflictException('metadata_changed');
            // The scanner's cached etag can lag behind a Files edit. Undo must check the live source too.
            $sourceUnchanged=false;
            try {
                foreach ($this->root->getUserFolder($uid)->getById((int)$item['fileId']) as $file) {
                    if ($file instanceof File && $file->isReadable() && hash_equals($p['sourceRevision'],ItemService::coverCacheRevisionFor($file->getEtag(),$item['coverRevision']))) { $sourceUnchanged=true;break; }
                }
            } catch (NotFoundException|NotPermittedException) {}
            if (!$sourceUnchanged) throw new MetadataConflictException('source_changed');
            $current=$this->snapshot($item);
            foreach ($p['after'] as $key=>$value) if ($current[$key]!==$value) throw new MetadataConflictException('relationships_changed');
            $links=null;$values=array_diff_key($p['before'],array_flip(['starred','workflowStatus','markedForDeletionAt','coverRevision']));
            if (isset($values['links'])) {
                $links=$values['links'];unset($values['links']);
                foreach ($current['links'] as $key=>$value) $links['before'.ucfirst($key)]=$value;
            }
            if ($links===null && array_keys($values)===['personalRating']) $items->setPersonalRating($uid,$itemId,$values['personalRating'],$item['metadataRevision'],'undo');
            else $items->updateItem($uid,$itemId,$values,$item['metadataRevision'],$links,$p['beforeSources'],'undo');
            $this->db->executeStatement('UPDATE *PREFIX*library_change_history SET undone=TRUE WHERE user_id=? AND id=?',[$uid,$eventId]);
            $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack();throw $e; }
    }
    public function expire(): void {
        $r=$this->db->executeQuery('SELECT id FROM *PREFIX*library_change_history WHERE expires_at<? ORDER BY id LIMIT 500',[time()]);$ids=$r->fetchAll();$r->closeCursor();
        foreach ($ids as $row) $this->db->executeStatement('DELETE FROM *PREFIX*library_change_history WHERE id=? AND expires_at<?',[$row['id'],time()]);
    }
}
