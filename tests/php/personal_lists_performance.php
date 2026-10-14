<?php
declare(strict_types=1);
// Disposable fixture benchmark: creates/deletes private test lists only.
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
set_exception_handler(static function(Throwable $e):void {fwrite(STDERR,(string)$e);exit(1);});
require '/tmp/LegacyPersonalListService.php';
$db=\OC::$server->get(\OCP\IDBConnection::class);
$files=\OC::$server->get(\OCP\Files\IRootFolder::class);
$urls=\OC::$server->get(\OCP\IURLGenerator::class);
$current=new \OCA\Library\Service\PersonalListService($db,$files,$urls);
$legacy=new \OCA\Library\Service\LegacyPersonalListService($db,$files,$urls);
$uid='library-smoke';$cleanup=[];
$q=$db->getQueryBuilder();$r=$q->select('i.id','f.file_id')->from('library_items','i')->innerJoin('i','library_files','f',$q->expr()->eq('i.library_file_id','f.id'))->where($q->expr()->eq('i.user_id',$q->createNamedParameter($uid)))->executeQuery();$books=$r->fetchAll();$r->closeCursor();
if(count($books)!==40)throw new RuntimeException('40 fixture books required');
function timed(callable $fn):array {$fn();$times=[];for($i=0;$i<10;$i++){$start=hrtime(true);$fn();$times[]=(hrtime(true)-$start)/1e6;}sort($times);return ['medianMs'=>round(($times[4]+$times[5])/2,2),'p95Ms'=>round($times[9],2)];}
try {
  $db->beginTransaction();
  for($n=0;$n<150;$n++) {
    $list=$current->create($uid,'Performance fixture '.$n,'');$cleanup[]=$list['id'];
    foreach($books as $pos=>$book){$q=$db->getQueryBuilder();$q->insert('library_list_entries')->values(['list_id'=>$q->createNamedParameter($list['id']),'item_id'=>$q->createNamedParameter((int)$book['id']),'file_id'=>$q->createNamedParameter((int)$book['file_id']),'position'=>$q->createNamedParameter($pos+1),'note'=>$q->createNamedParameter(''),'created_at'=>$q->createNamedParameter(time())])->executeStatement();}
  }
  $db->commit();
  $report=['lists'=>150,'entries'=>6000,'books'=>40];
  foreach(['before'=>$legacy,'after'=>$current] as $label=>$service){
    $report[$label]['index']=timed(fn()=>$service->lists($uid));
    $report[$label]['membership']=timed(fn()=>$service->lists($uid,(int)$books[0]['id']));
    $report[$label]['page']=timed(fn()=>$service->page($uid,$cleanup[0]));
  }
  $currentLists=$current->lists($uid,(int)$books[0]['id']);
  if(count(array_filter($currentLists,static fn($list)=>$list['count']===40 && $list['containsItem']))<150)throw new RuntimeException('Wrong aggregated counts');
  echo json_encode($report,JSON_PRETTY_PRINT),PHP_EOL;
  if($report['after']['index']['p95Ms']>1000 || $report['after']['page']['p95Ms']>1500)throw new RuntimeException('List performance budget exceeded');
} finally {
  foreach($cleanup as $id){$list=$current->find($uid,$id);$current->delete($uid,$id,$list['revision']);}
}
