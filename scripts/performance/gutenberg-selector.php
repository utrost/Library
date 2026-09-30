<?php
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$db=\OC::$server->get(\OCP\IDBConnection::class);$q=$db->getQueryBuilder();
$r=$q->select('id','title')->from('library_items')->where($q->expr()->eq('user_id',$q->createNamedParameter('library-smoke')))->orderBy('title','ASC')->executeQuery();$rows=$r->fetchAll();$r->closeCursor();
foreach($rows as $row) if(count(array_filter($rows,static fn($r)=>$r['title']===$row['title']))===1) {echo json_encode($row);exit;}
throw new RuntimeException('No unique book');
