<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\{IDBConnection,IConfig};

/** Exact counts run in cron; opening Home only queues work and reads a private snapshot. */
final class HomeHealthSnapshot {
    public function __construct(private IDBConnection $db,private IConfig $config,private ItemService $items) {}
    public function read(string $uid): array {
        $snapshot=json_decode($this->config->getUserValue($uid,'library','home_health_snapshot','{}'),true);
        if (!is_array($snapshot)) $snapshot=[];
        $stale=(int)($snapshot['at'] ?? 0)<time()-300;
        $requested=$this->config->getUserValue($uid,'library','home_health_requested','');
        if ($stale && $requested==='') { $requested=(string)time(); $this->config->setUserValue($uid,'library','home_health_requested',$requested); }
        return ['counts'=>$snapshot['counts'] ?? null,'at'=>(int)($snapshot['at'] ?? 0),'pending'=>$requested!==''];
    }
    public function refreshOne(): void {
        $q=$this->db->getQueryBuilder();$r=$q->select('userid','configvalue')->from('preferences')->where($q->expr()->eq('appid',$q->createNamedParameter('library')))->andWhere($q->expr()->eq('configkey',$q->createNamedParameter('home_health_requested')))->orderBy('configvalue')->setMaxResults(1)->executeQuery();$row=$r->fetch();$r->closeCursor();if (!$row) return;
        $uid=$row['userid'];$counts=[];
        foreach (['unidentified'=>['needsMetadata'=>'1'],'missing'=>['status'=>'missing'],'suggestions'=>['scannerConflicts'=>'1']] as $key=>$filters) $counts[$key]=$this->items->countCatalogue($uid,$filters);
        $r=$this->db->executeQuery("SELECT COUNT(*) AS n FROM *PREFIX*library_dup_pairs WHERE user_id=? AND decision='unreviewed'",[$uid]);$counts['duplicates']=(int)$r->fetchOne();$r->closeCursor();
        $r=$this->db->executeQuery("SELECT COUNT(*) AS n FROM *PREFIX*library_curation_jobs WHERE user_id=? AND expires_at>? AND status IN ('failed','paused')",[$uid,time()]);$counts['stalled']=(int)$r->fetchOne();$r->closeCursor();
        $this->config->setUserValue($uid,'library','home_health_snapshot',json_encode(['at'=>time(),'counts'=>$counts],JSON_THROW_ON_ERROR));
        $this->config->deleteUserValue($uid,'library','home_health_requested');
    }
}
