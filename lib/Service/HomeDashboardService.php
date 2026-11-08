<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\{IConfig,IDBConnection,IURLGenerator};
final class HomeDashboardService {
    private const WIDGETS=['recent','upNext','changed','finished','rediscover','health'];
    public function __construct(private ItemService $items,private PersonalListService $lists,private LibraryHealthService $health,private IConfig $config,private IDBConnection $db,private IURLGenerator $urls,private HomeHealthSnapshot $summary) {}
    public function preferences(string $uid): array {
        $p=json_decode($this->config->getUserValue($uid,'library','dashboard_preferences','{}'),true);
        $listId=max(0,(int)($p['listId'] ?? 0));
        // A removed list must not leave Home and the native Dashboard pointing at an empty source.
        if ($listId>0) { try { $this->lists->find($uid,$listId); } catch (\OutOfBoundsException) { $listId=0; } }
        return ['widgets'=>is_array($p['widgets'] ?? null) ? array_values(array_intersect(self::WIDGETS,$p['widgets'])) : self::WIDGETS,'listId'=>$listId];
    }
    public function save(string $uid,array $widgets,int $listId): void {
        if (!array_is_list($widgets) || array_diff($widgets,self::WIDGETS) || count($widgets)>6 || $listId<0) throw new \InvalidArgumentException('invalid_preferences');
        if ($listId>0) $this->lists->find($uid,$listId);
        $this->config->setUserValue($uid,'library','dashboard_preferences',json_encode(['widgets'=>array_values(array_unique($widgets)),'listId'=>$listId],JSON_THROW_ON_ERROR));
    }
    public function upNext(string $uid,int $limit=8): array {
        $limit=max(1,min(12,$limit));$prefs=$this->preferences($uid);
        if ($prefs['listId']===0) return $this->items->queryCatalogue($uid,['workflowStatus'=>'to-read','sort'=>'title'],['page'=>1,'limit'=>$limit,'deferTotal'=>true],false)['items'];
        $r=$this->db->executeQuery('SELECT i.id FROM *PREFIX*library_list_entries e INNER JOIN *PREFIX*library_lists l ON l.id=e.list_id INNER JOIN *PREFIX*library_items i ON i.id=e.item_id AND i.user_id=l.user_id INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id AND f.file_id=e.file_id WHERE l.user_id=? AND l.id=? AND i.marked_for_deletion_at IS NULL ORDER BY e.position,e.id LIMIT '.$limit,[$uid,$prefs['listId']]);$ids=array_column($r->fetchAll(),'id');$r->closeCursor();
        return array_values(array_filter(array_map(fn($id)=>$this->items->findItem($uid,(int)$id),$ids)));
    }
    public function data(string $uid): array {
        $prefs=$this->preferences($uid);$rows=[];$rowIds=[];
        foreach ($prefs['widgets'] as $key) {
            if ($key==='health') continue;
            if ($key==='recent') { $r=$this->db->executeQuery('SELECT id FROM *PREFIX*library_items WHERE user_id=? AND marked_for_deletion_at IS NULL ORDER BY library_file_id DESC,id DESC LIMIT 8',[$uid]);$ids=array_column($r->fetchAll(),'id');$r->closeCursor();
            } elseif ($key==='upNext' && $prefs['listId']>0) {
                $r=$this->db->executeQuery('SELECT e.item_id FROM *PREFIX*library_list_entries e INNER JOIN *PREFIX*library_lists l ON l.id=e.list_id INNER JOIN *PREFIX*library_items i ON i.id=e.item_id AND i.user_id=l.user_id INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id AND f.file_id=e.file_id WHERE l.user_id=? AND l.id=? ORDER BY e.position,e.id LIMIT 8',[$uid,$prefs['listId']]);$ids=array_column($r->fetchAll(),'item_id');$r->closeCursor();
            } elseif ($key==='changed') {
                $r=$this->db->executeQuery('SELECT id AS item_id FROM *PREFIX*library_items WHERE user_id=? AND user_edited=TRUE AND marked_for_deletion_at IS NULL ORDER BY updated_at DESC,id DESC LIMIT 8',[$uid]);$ids=array_column($r->fetchAll(),'item_id');$r->closeCursor();
            } elseif ($key==='rediscover') {
                // Stable daily keyset pivot, no ORDER BY RANDOM or whole-catalogue offset.
                $r=$this->db->executeQuery('SELECT MIN(id) AS lo,MAX(id) AS hi FROM *PREFIX*library_items WHERE user_id=?',[$uid]);$bounds=$r->fetch();$r->closeCursor();$lo=(int)$bounds['lo'];$hi=(int)$bounds['hi'];$pivot=$lo+hexdec(substr(hash('sha256',$uid.gmdate('Y-m-d')),0,7))%max(1,$hi-$lo+1);
                $r=$this->db->executeQuery('SELECT id AS item_id FROM *PREFIX*library_items WHERE user_id=? AND id>=? AND marked_for_deletion_at IS NULL ORDER BY id LIMIT 8',[$uid,$pivot]);$ids=array_column($r->fetchAll(),'item_id');$r->closeCursor();
            } else {
                $page=$this->items->queryCatalogue($uid,['workflowStatus'=>$key==='finished' ? 'finished' : 'to-read','sort'=>'title'],['page'=>1,'limit'=>8,'deferTotal'=>true],false);$ids=array_column($page['items'],'id');
            }
            $rowIds[$key]=array_map('intval',$ids);
        }
        // Hydrate all visible cards together (at most five groups of eight books).
        $unique=[];foreach ($rowIds as $ids) foreach ($ids as $id) $unique[$id]=$id;
        $books=$this->items->curationItems($uid,array_values($unique));
        foreach ($rowIds as $key=>$ids) {
            $rows[$key]=[];
            foreach ($ids as $id) { $item=$books[$id] ?? null;if ($item && empty($item['markedForDeletionAt']) && $item['scanStatus']!=='missing') $rows[$key][]=$this->card($item); }
        }
        $r=$this->db->executeQuery("SELECT id,status,created_at FROM *PREFIX*library_curation_jobs WHERE user_id=? AND expires_at>? AND status IN ('preparing','applying','failed','paused') ORDER BY created_at DESC LIMIT 8",[$uid,time()]);$jobs=$r->fetchAll();$r->closeCursor();
        return ['summary'=>in_array('health',$prefs['widgets'],true) ? $this->summary->read($uid) : null,'preferences'=>$prefs,'rows'=>$rows,'lists'=>$this->lists->lists($uid),'health'=>in_array('health',$prefs['widgets'],true) ? $this->health->cachedImportHealthSummary($uid) : null,'jobs'=>$jobs];
    }
    public function card(array $item): array { return ['id'=>(int)$item['id'],'title'=>$item['title'],'creators'=>$item['creators'],'url'=>$this->urls->linkToRouteAbsolute('library.page.index').'?details='.(int)$item['id'],'cover'=>$this->urls->linkToRouteAbsolute('library.cover.show',['itemId'=>$item['id']])]; }
}
