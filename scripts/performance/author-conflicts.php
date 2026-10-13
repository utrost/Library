<?php
/** Read-only aggregate review-queue timing. No book titles, paths or author names. */
declare(strict_types=1);define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
$uid=$argv[1]??'';if($uid==='')throw new InvalidArgumentException('user required');
$service=\OCP\Server::get(\OCA\Library\Service\AuthorStorageService::class);$times=[];
for($i=0;$i<11;$i++){$start=microtime(true);$page=$service->conflicts($uid);$times[]=(microtime(true)-$start)*1000;}
$first=array_shift($times);sort($times);
echo json_encode(['samples'=>11,'firstMs'=>$first,'warmMedianMs'=>($times[4]+$times[5])/2,'warmMaxMs'=>max($times),'returnedRows'=>count($page['books']),'hasNext'=>$page['hasNext']]),PHP_EOL;
