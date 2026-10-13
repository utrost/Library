<?php
/** Read-only, aggregate-only measurement of canonical author decoration. */
declare(strict_types=1);define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
$uid=$argv[1]??'';if($uid==='')throw new InvalidArgumentException('user');
$db=\OCP\Server::get(\OCP\IDBConnection::class);$service=\OCP\Server::get(\OCA\Library\Service\AuthorDisplayService::class);$report=[];
foreach([100,500] as $limit){
 $r=$db->executeQuery('SELECT id,creators FROM *PREFIX*library_items WHERE user_id=? ORDER BY id LIMIT '.$limit,[$uid]);$items=$r->fetchAll();$r->closeCursor();$samples=[];
 for($n=0;$n<11;$n++){$start=microtime(true);$out=$service->decorate($uid,$items);$samples[]=(microtime(true)-$start)*1000;}
 if(array_column($out,'creators')!==array_column($items,'creators'))throw new RuntimeException('Source credits changed');
 $first=array_shift($samples);sort($samples);$report[$limit]=['books'=>count($out),'decorated'=>count(array_filter($out,fn($i)=>isset($i['canonicalAuthors']))),'firstMs'=>$first,'warmMedianMs'=>($samples[4]+$samples[5])/2,'warmMaxMs'=>max($samples),'sourceCreditsPreserved'=>true];
}
echo json_encode($report),PHP_EOL;
