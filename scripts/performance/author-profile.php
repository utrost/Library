<?php
/** Read-only profile measurements. Reports counts/timings, never names or paths. */
declare(strict_types=1);define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
$uid=$argv[1]??'';if($uid==='')throw new InvalidArgumentException('user required');
$db=\OCP\Server::get(\OCP\IDBConnection::class);$service=\OCP\Server::get(\OCA\Library\Service\AuthorDirectoryService::class);
$r=$db->executeQuery('SELECT author_id,COUNT(DISTINCT item_id) AS n FROM *PREFIX*library_item_authors WHERE user_id=? GROUP BY author_id ORDER BY n DESC LIMIT 1',[$uid]);$top=$r->fetch();$r->closeCursor();if(!$top)throw new RuntimeException('No authors');
$report=['largestAuthorBooks'=>(int)$top['n'],'samples'=>11];
foreach(['title'=>fn()=>$service->page($uid,(int)$top['author_id']), 'newest'=>fn()=>$service->page($uid,(int)$top['author_id'],1,'','newest'), 'series'=>fn()=>$service->page($uid,(int)$top['author_id'],1,'','series'), 'search'=>fn()=>$service->page($uid,(int)$top['author_id'],1,'a'), 'secondPage'=>fn()=>$service->page($uid,(int)$top['author_id'],2)] as $name=>$operation){$times=[];for($i=0;$i<11;$i++){$t=microtime(true);$result=$operation();$times[]=(microtime(true)-$t)*1000;}$first=array_shift($times);sort($times);$report[$name]=['firstMs'=>$first,'warmMedianMs'=>($times[4]+$times[5])/2,'warmMaxMs'=>max($times),'returnedBooks'=>count($result['books'])];}
echo json_encode($report),PHP_EOL;
