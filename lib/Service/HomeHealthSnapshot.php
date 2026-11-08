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
        if ($stale && $this->config->getUserValue($uid,'library','home_health_requested','')==='') $this->config->setUserValue($uid,'library','home_health_requested',(string)time());
        return ['counts'=>$snapshot['counts'] ?? null,'at'=>(int)($snapshot['at'] ?? 0),'pending'=>$stale];
    }
    public function refreshOne(): void {
        $q=$this->db->getQueryBuilder();$r=$q->select('userid','configvalue')->from('preferences')->where($q->expr()->eq('appid',$q->createNamedParameter('library')))->andWhere($q->expr()->eq('configkey',$q->createNamedParameter('home_health_requested')))->orderBy('configvalue')->setMaxResults(1)->executeQuery();$row=$r->fetch();$r->closeCursor();if (!$row) return;
        $uid=$row['userid'];$counts=[];
        foreach (['unidentified'=>['needsMetadata'=>'1'],'missing'=>['status'=>'missing'],'suggestions'=>['scannerConflicts'=>'1']] as $key=>$filters) $counts[$key]=$this->items->countCatalogue($uid,$filters);
        $this->config->setUserValue($uid,'library','home_health_snapshot',json_encode(['at'=>time(),'counts'=>$counts],JSON_THROW_ON_ERROR));
        $this->config->deleteUserValue($uid,'library','home_health_requested');
    }
}
