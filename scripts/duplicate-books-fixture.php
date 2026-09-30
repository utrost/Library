<?php
// Owned fixture helper for smoke-duplicates.mjs; never accepts an existing folder.
declare(strict_types=1);
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
try {
$user=getenv('LIBRARY_SMOKE_USER') ?: 'uwe';$name=getenv('LIBRARY_SMOKE_NAME') ?: '';
if (!preg_match('/^Library duplicates smoke [0-9]+$/D',$name)) throw new RuntimeException('Invalid fixture name');
$home=\OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($user);
$roots=\OC::$server->get(\OCA\Library\Service\RootService::class);$items=\OC::$server->get(\OCA\Library\Service\ItemService::class);$db=\OC::$server->get(\OCP\IDBConnection::class);$duplicates=\OC::$server->get(\OCA\Library\Service\DuplicateService::class);
$statePath='/tmp/'.str_replace(' ','-',$name).'.json';$state=is_file($statePath)?json_decode(file_get_contents($statePath),true,512,JSON_THROW_ON_ERROR):null;$action=$argv[1]??'';
function epub(string $title,string $author,string $language='en',string $year='2011',string $isbn=''):string {
 $tmp=tempnam('/tmp','dup-epub-');$zip=new ZipArchive();$zip->open($tmp,ZipArchive::OVERWRITE);
 $entries=['mimetype'=>'application/epub+zip','META-INF/container.xml'=>'<?xml version="1.0"?><container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>',
 'OEBPS/content.opf'=>'<?xml version="1.0"?><package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="id"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="id">'.($isbn ?: 'urn:fixture:'.$title).'</dc:identifier><dc:title>'.$title.'</dc:title><dc:creator>'.$author.'</dc:creator><dc:language>'.$language.'</dc:language><dc:date>'.$year.'</dc:date><dc:publisher>Fixture Press</dc:publisher></metadata><manifest><item id="chapter" href="chapter.xhtml" media-type="application/xhtml+xml"/></manifest><spine><itemref idref="chapter"/></spine></package>',
 'OEBPS/chapter.xhtml'=>'<html xmlns="http://www.w3.org/1999/xhtml"><head><title>Fixture</title></head><body><p>Temporary duplicate review fixture.</p></body></html>'];
 foreach($entries as $path=>$content){$zip->addFromString($path,$content);$zip->setCompressionName($path,ZipArchive::CM_STORE);}$zip->close();$bytes=file_get_contents($tmp);unlink($tmp);return $bytes;
}
if($action==='create') {
 if($state||$home->nodeExists($name))throw new RuntimeException('Fixture exists');$folder=$home->newFolder($name);$state=['name'=>$name,'folderId'=>$folder->getId(),'files'=>[]];file_put_contents($statePath,json_encode($state));
 $exact=epub('The Secret Life of Walter Mitty','Walter Mitty');
 $data=['original.epub'=>$exact,'renamed.epub'=>$exact,'near.epub'=>epub('The Secret Life of Walter Mity','Mitty, Walter'),'edition.epub'=>epub('The Secret Life of Walter Mitty','Mitty, Walter','de','2024'),'unrelated.epub'=>epub('The Secret Life of Walter Kitty','Walter Kitty'),
 'isbn-one.epub'=>epub('First ISBN Book','Author One','en','2011','9780141182971'),'isbn-two.epub'=>epub('Other ISBN Book','Author Two','en','2011','9780141182971')];
 // Small valid one-page PDF with a separate physical format and independent content.
 $pdf="%PDF-1.4\n";$objects=['<< /Type /Catalog /Pages 2 0 R >>','<< /Type /Pages /Kids [3 0 R] /Count 1 >>','<< /Type /Page /Parent 2 0 R /MediaBox [0 0 200 200] /Contents 4 0 R >>',"<< /Length 0 >>\nstream\n\nendstream"];$offsets=[0];foreach($objects as $i=>$object){$offsets[]=strlen($pdf);$pdf.=($i+1)." 0 obj\n".$object."\nendobj\n";}$xref=strlen($pdf);$pdf.="xref\n0 5\n0000000000 65535 f \n";foreach(array_slice($offsets,1) as $offset)$pdf.=sprintf("%010d 00000 n \n",$offset);$data['alternative.pdf']=$pdf."trailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n$xref\n%%EOF\n";
 $paged=epub('Pagination Sample Book','Page Author');for($i=1;$i<=6;$i++)$data["page-$i.epub"]=$paged;
 foreach($data as $path=>$bytes){$file=$folder->newFile($path,$bytes);$state['files'][$path]=['fileId'=>$file->getId(),'hash'=>hash('sha256',$bytes)];file_put_contents($statePath,json_encode($state));}
 $root=$roots->saveRoot($user,'/'.$name,$name,true);$state['rootId']=$root['id'];file_put_contents($statePath,json_encode($state));
 \OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan($user,(int)$root['id']);
 $q=$db->getQueryBuilder();$r=$q->select('i.id','f.cached_path')->from('library_items','i')->innerJoin('i','library_files','f',$q->expr()->eq('i.library_file_id','f.id'))->where($q->expr()->eq('f.root_id',$q->createNamedParameter($root['id'])))->executeQuery();foreach($r->fetchAll() as $row)$state['files'][basename($row['cached_path'])]['itemId']=(int)$row['id'];$r->closeCursor();file_put_contents($statePath,json_encode($state));
 foreach($state['files'] as $file)if(!isset($file['itemId']))throw new RuntimeException('Fixture not indexed');
 $items->applyBatchMetadataEdit($user,[$state['files']['alternative.pdf']['itemId']],'title','The Secret Life of Walter Mitty');
 $items->applyBatchMetadataEdit($user,[$state['files']['alternative.pdf']['itemId']],'creators','Mitty, Walter');
 $items->applyBatchMetadataEdit($user,[$state['files']['renamed.epub']['itemId']],'title','Unrecognizable renamed copy');
 $items->applyBatchMetadataEdit($user,[$state['files']['renamed.epub']['itemId']],'creators','Unknown Author');
 $snapshots=\OC::$server->get(\OCA\Library\Service\InferenceBatchService::class);foreach($state['files'] as &$file)$file['snapshot']=$snapshots->snapshot($user,$file['itemId']);unset($file);file_put_contents($statePath,json_encode($state));echo json_encode($state);exit;
}
if(!$state||$state['name']!==$name)throw new RuntimeException('Missing fixture');$folder=$home->get($name);if($folder->getId()!==$state['folderId'])throw new RuntimeException('Fixture identity changed');
if($action==='verify') {
 $snapshots=\OC::$server->get(\OCA\Library\Service\InferenceBatchService::class);
 foreach($state['files'] as $path=>$file){$node=$folder->get($path);if($node->getId()!==$file['fileId']||hash('sha256',$node->getContent())!==$file['hash'])throw new RuntimeException('Source changed');if($snapshots->snapshot($user,$file['itemId'])!==$file['snapshot'])throw new RuntimeException('Metadata changed');}echo '{"unchanged":true}';exit;
}
if($action==='intervene'){$items->applyBatchMetadataEdit($user,[$state['files']['original.epub']['itemId']],'genre','Later duplicate test edit');echo '{"edited":true}';exit;}
if($action==='restore'){$items->writeInferenceState($user,$state['files']['original.epub']['itemId'],array_intersect_key($state['files']['original.epub']['snapshot']['state'],array_flip(['genre','metadata_source','user_edited','field_sources'])));echo '{"restored":true}';exit;}
if($action==='suggestion-integration'){require '/tmp/library-duplicate-suggestions-integration.php';exit;}
if($action==='integration'){require '/tmp/library-duplicate-integration.php';exit;}
if($action==='cleanup') {
 // Delete only scans for this exact fixture root, including expired scans.
 $q=$db->getQueryBuilder();$r=$q->select('id','payload')->from('library_dup_jobs')->where($q->expr()->eq('user_id',$q->createNamedParameter($user)))->executeQuery();$jobIds=[];foreach($r->fetchAll() as $row)if((json_decode($row['payload'],true)['rootId']??null)===$state['rootId'])$jobIds[]=$row['id'];$r->closeCursor();
 foreach($jobIds as $id){foreach(['library_dup_keys','library_dup_books','library_dup_pairs','library_dup_jobs'] as $table){$q=$db->getQueryBuilder();$q->delete($table)->where($q->expr()->eq($table==='library_dup_jobs'?'id':'job_id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($user)))->executeStatement();}}
 // Decisions belong to immutable fixture revisions; compute all pair signatures for removal.
 $books=array_values($state['files']);foreach($books as $a)foreach($books as $b){if($a['itemId']>=$b['itemId'])continue;$rev=function($f)use($db,$user){$q=$db->getQueryBuilder();$r=$q->select('normalized_value')->from('library_item_identifiers')->where($q->expr()->eq('user_id',$q->createNamedParameter($user)))->andWhere($q->expr()->eq('item_id',$q->createNamedParameter($f['itemId'])))->andWhere($q->expr()->eq('scheme',$q->createNamedParameter('isbn')))->andWhere($q->expr()->eq('valid',$q->createNamedParameter(1)))->orderBy('normalized_value','ASC')->executeQuery();$isbn=array_values(array_unique(array_column($r->fetchAll(),'normalized_value')));$r->closeCursor();return ['id'=>$f['itemId'],'revision'=>hash('sha256',json_encode([$f['snapshot'],$isbn],JSON_THROW_ON_ERROR))];};$signature=\OCA\Library\Service\DuplicateMatcher::signature($rev($a),$rev($b));$q=$db->getQueryBuilder();$q->delete('library_dup_choices')->where($q->expr()->eq('user_id',$q->createNamedParameter($user)))->andWhere($q->expr()->eq('signature',$q->createNamedParameter($signature)))->executeStatement();}
 $jobs=\OC::$server->get(\OCP\BackgroundJob\IJobList::class);$args=[];foreach($jobs->getJobsIterator(\OCA\Library\BackgroundJob\DuplicateJob::class,null,0) as $job)if(in_array($job->getArgument()['id']??'',$jobIds,true))$args[]=$job->getArgument();foreach($args as $arg)$jobs->remove(\OCA\Library\BackgroundJob\DuplicateJob::class,$arg);
 $ids=array_column($state['files'],'itemId');$q=$db->getQueryBuilder();$q->delete('library_dup_hints')->where($q->expr()->eq('user_id',$q->createNamedParameter($user)))->andWhere($q->expr()->in('left_id',$q->createNamedParameter($ids,\OCP\DB\QueryBuilder\IQueryBuilder::PARAM_INT_ARRAY)))->executeStatement();foreach(['library_item_facets','library_item_search_grams','library_item_identifiers'] as $table){$q=$db->getQueryBuilder();$q->delete($table)->where($q->expr()->eq('user_id',$q->createNamedParameter($user)))->andWhere($q->expr()->in('item_id',$q->createNamedParameter($ids,\OCP\DB\QueryBuilder\IQueryBuilder::PARAM_INT_ARRAY)))->executeStatement();}
 $roots->deleteRoot($user,$state['rootId']);$folder->delete();unlink($statePath);echo '{"cleaned":true}';exit;
}
throw new RuntimeException('Unknown fixture operation');

} catch (Throwable $e) { fwrite(STDERR,get_class($e).": ".$e->getMessage()." at ".$e->getFile().":".$e->getLine().PHP_EOL);exit(1); }
