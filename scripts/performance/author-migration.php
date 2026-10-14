<?php
/** Run inside the selected NC container. Aggregate output only; no source paths or names. */
declare(strict_types=1);define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
$db=\OCP\Server::get(\OCP\IDBConnection::class);$uid=$argv[1]??'';$mode=$argv[2]??'snapshot';
if($uid===''||!in_array($mode,['snapshot','migrate','directory'],true))throw new InvalidArgumentException('user mode');
if($mode==='snapshot'){
 $tables=['library_items'=>'id,library_file_id,title,subtitle,creators,authors_json,description,subjects_json,classifications_json,publication,series_name,series_number,genre,publication_date,language,publisher,user_edited,field_sources,field_values,starred,last_opened_at,personal_rating','library_files'=>'id,file_id,root_id,cached_path,etag,size,mtime','library_lists'=>'*'];$report=[];
 foreach($tables as $table=>$columns){$cursor=0;$hash=hash_init('sha256');$count=0;do{$r=$db->executeQuery('SELECT '.$columns.' FROM *PREFIX*'.$table.' WHERE user_id=? AND id>? ORDER BY id LIMIT 200',[$uid,$cursor]);$rows=$r->fetchAll();$r->closeCursor();foreach($rows as $row){$cursor=(int)$row['id'];hash_update($hash,json_encode($row,JSON_THROW_ON_ERROR));$count++;}}while(count($rows)===200);$report[$table]=['count'=>$count,'sha256'=>hash_final($hash)];}
 echo json_encode($report),PHP_EOL;exit;
}
$storage=\OCP\Server::get(\OCA\Library\Service\AuthorStorageService::class);$start=microtime(true);
if($mode==='migrate'){
 $before=$storage->status($uid);$processed=0;$batches=0;
 while($storage->status($uid)['pending']>0){$n=$storage->advance($uid,500,30);$processed+=$n;$batches++;if($n===0)break;}
 $seconds=microtime(true)-$start;
 echo json_encode(['before'=>$before,'after'=>$storage->status($uid),'processed'=>$processed,'batches'=>$batches,'seconds'=>$seconds,'booksPerSecond'=>$seconds>0?$processed/$seconds:0]),PHP_EOL;
}else{
 $directory=\OCP\Server::get(\OCA\Library\Service\AuthorDirectoryService::class);$timings=[];
 for($i=0;$i<11;$i++){$t=microtime(true);$result=$directory->directory($uid);$timings[]=(microtime(true)-$t)*1000;}
 $cold=array_shift($timings);sort($timings);$report=['firstMs'=>$cold,'warmMedianMs'=>($timings[4]+$timings[5])/2,'warmMaxMs'=>max($timings),'rows'=>count($result['authors']),'migration'=>$result['migration']];
 $authorId=isset($result['authors'][0])?(int)$result['authors'][0]['id']:null;
 foreach(['prefix'=>fn()=>$directory->directory($uid,'A'),'detail'=>fn()=>$authorId===null?[]:$directory->page($uid,$authorId)] as $name=>$operation){$times=[];for($i=0;$i<11;$i++){$t=microtime(true);$operation();$times[]=(microtime(true)-$t)*1000;}$first=array_shift($times);sort($times);$report[$name]=['firstMs'=>$first,'warmMedianMs'=>($times[4]+$times[5])/2,'warmMaxMs'=>max($times)];}
 echo json_encode($report),PHP_EOL;
}
