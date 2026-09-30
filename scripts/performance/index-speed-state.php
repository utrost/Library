<?php
/** Private aggregate integrity checks for the fixed real-source benchmark. */
declare(strict_types=1);define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
try{$uid=getenv('LIBRARY_BENCHMARK_USER')?:'uwe';$db=\OC::$server->get(\OCP\IDBConnection::class);$selected=json_decode(file_get_contents('/tmp/library-index-speed-selection.json'),true,512,JSON_THROW_ON_ERROR);$hashes=[];
foreach(['source','canonical','facets','search','identifiers','duplicates'] as $name)$hashes[$name]=hash_init('sha256');
foreach($selected as $file){$id=(int)$file['id'];$queries=[
 'source'=>['SELECT fc.fileid,fc.etag,fc.mtime,fc.size FROM *PREFIX*filecache fc WHERE fc.fileid=?',[(int)$file['file_id']]],
 'canonical'=>['SELECT id,publication_type,title,subtitle,creators,authors_json,publication,series_name,series_number,genre,publication_date,language,publisher,description,subjects_json,classifications_json,metadata_source,user_edited,field_sources,field_values FROM *PREFIX*library_items WHERE user_id=? AND library_file_id=?',[$uid,$id]],
 'facets'=>['SELECT x.facet_type,x.facet_value,x.normalized_value FROM *PREFIX*library_item_facets x INNER JOIN *PREFIX*library_items i ON i.id=x.item_id WHERE x.user_id=? AND i.library_file_id=? ORDER BY x.facet_type,x.normalized_value',[$uid,$id]],
 'search'=>['SELECT x.gram FROM *PREFIX*library_item_search_grams x INNER JOIN *PREFIX*library_items i ON i.id=x.item_id WHERE x.user_id=? AND i.library_file_id=? ORDER BY x.gram',[$uid,$id]],
 'identifiers'=>['SELECT x.scheme,x.display_value,x.normalized_value,x.source,x.user_edited,x.valid FROM *PREFIX*library_item_identifiers x INNER JOIN *PREFIX*library_items i ON i.id=x.item_id WHERE x.user_id=? AND i.library_file_id=? ORDER BY x.scheme,x.display_value,x.normalized_value',[$uid,$id]],
 'duplicates'=>['SELECT x.payload FROM *PREFIX*library_dup_index x INNER JOIN *PREFIX*library_items i ON i.id=x.item_id WHERE x.user_id=? AND i.library_file_id=?',[$uid,$id]],
 ];foreach($queries as $name=>[$sql,$params]){$r=$db->executeQuery($sql,$params);hash_update($hashes[$name],json_encode($r->fetchAll(),JSON_THROW_ON_ERROR));$r->closeCursor();}}
$out=['selected'=>count($selected)];foreach($hashes as $name=>$hash)$out[$name]=hash_final($hash);echo json_encode($out),PHP_EOL;
}catch(Throwable $e){fwrite(STDERR,get_class($e).': integrity check failed'.PHP_EOL);exit(1);}
