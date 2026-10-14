<?php
// Owned fixture for smoke-metadata-fields.mjs. Run only inside the developer container.
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$user = getenv('LIBRARY_SMOKE_USER') ?: 'uwe';
$name = getenv('LIBRARY_SMOKE_NAME') ?: '';
if (!preg_match('/^Library metadata smoke [0-9]+$/D', $name)) throw new RuntimeException('Invalid fixture name');
$home = \OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($user);
$roots = \OC::$server->get(\OCA\Library\Service\RootService::class);
$items = \OC::$server->get(\OCA\Library\Service\ItemService::class);
$scanner = \OC::$server->get(\OCA\Library\Service\LibraryScanner::class);
$db = \OC::$server->get(\OCP\IDBConnection::class);
$action = $argv[1] ?? '';
$statePath = '/tmp/' . str_replace(' ', '-', $name) . '.json';
$state = is_file($statePath) ? json_decode(file_get_contents($statePath), true, 16, JSON_THROW_ON_ERROR) : null;
if ($action === 'create') {
    if ($state !== null || $home->nodeExists($name)) throw new RuntimeException('Fixture already exists');
    $folder = $home->newFolder($name);
    $state = ['folderId' => $folder->getId(), 'name' => $name];
    file_put_contents($statePath, json_encode($state));
    $bookFolder = $folder->newFolder('Science fiction')->newFolder('Orchard Notes');
    $tmp = tempnam('/tmp', 'library-smoke-epub-');
    $zip = new ZipArchive();
    $zip->open($tmp, ZipArchive::OVERWRITE);
    $zip->addFromString('mimetype', 'application/epub+zip');
    $zip->addFromString('META-INF/container.xml', '<?xml version="1.0"?><container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>');
    $zip->addFromString('OEBPS/content.opf', '<?xml version="1.0"?><package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="id"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="id">urn:library:smoke:'.$name.'</dc:identifier><dc:title>'.$name.'</dc:title><dc:creator>Ada Quill</dc:creator><dc:language>en</dc:language><dc:publisher>Fixture Press</dc:publisher></metadata><manifest><item id="chapter" href="chapter.xhtml" media-type="application/xhtml+xml"/></manifest><spine><itemref idref="chapter"/></spine></package>');
    $zip->addFromString('OEBPS/chapter.xhtml', '<html xmlns="http://www.w3.org/1999/xhtml"><head><title>Fixture</title></head><body><p>Temporary test publication.</p></body></html>');
    $zip->close();
    $file = $bookFolder->newFile('01_Soil Basics.epub', file_get_contents($tmp));
    unlink($tmp);
    $root = $roots->saveRoot($user, '/'.$name, $name, true);
    $state += ['rootId' => $root['id'], 'fileId' => $file->getId(), 'sha256' => hash('sha256', $file->getContent())];
    file_put_contents($statePath, json_encode($state));
    $result = $scanner->scan($user, (int)$root['id']);
    if ($result['errors'] !== []) throw new RuntimeException('Fixture scan failed');
    $qb = $db->getQueryBuilder();
    $row = $qb->select('i.id')->from('library_items','i')->innerJoin('i','library_files','f',$qb->expr()->eq('i.library_file_id','f.id'))->where($qb->expr()->eq('f.root_id',$qb->createNamedParameter($root['id'])))->executeQuery()->fetch();
    if (!$row) throw new RuntimeException('Fixture not indexed');
    $state['itemId'] = (int)$row['id'];
    file_put_contents($statePath, json_encode($state));
    echo json_encode($state); exit;
}
if (!$state || $state['name'] !== $name) throw new RuntimeException('Missing owned fixture');
$folder = $home->get($name);
if ($folder->getId() !== $state['folderId']) throw new RuntimeException('Fixture identity changed');
if ($action === 'cleanup') {
    if (isset($state['rootId'])) {
        if ($db->tableExists('library_infer_jobs')) {
            $analysis=\OC::$server->get(\OCA\Library\Service\InferenceAnalysisService::class);
            $q=$db->getQueryBuilder(); $r=$q->select('id')->from('library_infer_jobs')->where($q->expr()->eq('user_id',$q->createNamedParameter($user)))->andWhere($q->expr()->eq('root_id',$q->createNamedParameter($state['rootId'])))->executeQuery(); $jobIds=array_column($r->fetchAll(),'id'); $r->closeCursor();
            foreach ($jobIds as $id) $analysis->discard($user,$id);
            $jobs=\OC::$server->get(\OCP\BackgroundJob\IJobList::class); $args=[];
            foreach ($jobs->getJobsIterator(\OCA\Library\BackgroundJob\InferenceAnalysisJob::class,null,0) as $job) if (($job->getArgument()['userId']??'')===$user && in_array($job->getArgument()['id']??'',$jobIds,true)) $args[]=$job->getArgument();
            foreach ($args as $arg) $jobs->remove(\OCA\Library\BackgroundJob\InferenceAnalysisJob::class,$arg);
        }
        $qb = $db->getQueryBuilder();
        if ($db->tableExists('library_inference_batches')) {
            $result = $qb->select('id','payload')->from('library_inference_batches')->where($qb->expr()->eq('user_id',$qb->createNamedParameter($user)))->executeQuery();
            foreach ($result->fetchAll() as $batch) {
                $entries = json_decode($batch['payload'],true)['entries'] ?? [];
                if ($entries && count(array_filter($entries, static fn($entry) => (int)($entry['before']['file']['rootId'] ?? 0) === (int)$state['rootId'])) === count($entries)) {
                    $remove = $db->getQueryBuilder(); $remove->delete('library_inference_batches')->where($remove->expr()->eq('id',$remove->createNamedParameter($batch['id'])))->andWhere($remove->expr()->eq('user_id',$remove->createNamedParameter($user)))->executeStatement();
                }
            }
            $result->closeCursor();
        }
    }
    if (isset($state['rootId'])) {
        $q = $db->getQueryBuilder();
        $result = $q->select('i.id')->from('library_items','i')->innerJoin('i','library_files','f',$q->expr()->eq('i.library_file_id','f.id'))
            ->where($q->expr()->eq('i.user_id',$q->createNamedParameter($user)))->andWhere($q->expr()->eq('f.root_id',$q->createNamedParameter($state['rootId'])))->executeQuery();
        $ownedIds = array_column($result->fetchAll(), 'id'); $result->closeCursor();
        foreach ($ownedIds as $ownedId) {
            foreach (['library_item_facets','library_item_search_grams','library_item_identifiers'] as $table) {
                $q=$db->getQueryBuilder();$q->delete($table)->where($q->expr()->eq('user_id',$q->createNamedParameter($user)))->andWhere($q->expr()->eq('item_id',$q->createNamedParameter($ownedId)))->executeStatement();
            }
        }
        $roots->deleteRoot($user, (int)$state['rootId']);
    }
    $folder->delete(); unlink($statePath); echo '{"cleaned":true}'; exit;
}
$file = $folder->get('Science fiction/Orchard Notes/01_Soil Basics.epub');
if ($file->getId() !== $state['fileId'] || hash('sha256', $file->getContent()) !== $state['sha256']) throw new RuntimeException('Source file changed');
if ($action==='expand') {
    $bookFolder=$folder->get('Science fiction/Orchard Notes');
    for ($i=2;$i<=83;$i++) $bookFolder->newFile(sprintf('%02d_Sample %02d.epub',$i,$i),$file->getContent());
    $result=$scanner->scan($user,(int)$state['rootId']); if ($result['errors']!==[]) throw new RuntimeException('Expanded fixture scan failed');
    echo '{"expanded":83}'; exit;
}
if ($action==='analysis-integration') { try { require '/tmp/library-inference-analysis-integration.php'; } catch (Throwable $e) { fwrite(STDERR,get_class($e).': '.$e->getMessage().' at '.$e->getLine().PHP_EOL); exit(1); } exit; }
if ($action === 'rescan') {
    // Invalidate only this owned fixture's cached revision to exercise extraction and user-edit protection.
    $qb = $db->getQueryBuilder();
    $qb->update('library_files')->set('metadata_extractor_revision', $qb->createNamedParameter('smoke-force-refresh'))->where($qb->expr()->eq('root_id', $qb->createNamedParameter($state['rootId'])))->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($user)))->executeStatement();
    $result = $scanner->scan($user, (int)$state['rootId']);
    if ($result['errors'] !== [] || $result['metadataExtractions'] !== 1 || $result['itemRefreshes'] !== 1) throw new RuntimeException('Forced rescan did not refresh exactly one fixture');
}
if ($action === 'intervene') { $items->applyBatchMetadataEdit($user, [(int)$state['itemId']], 'genre', 'Later manual edit'); echo '{"edited":true}'; exit; }
if ($action === 'integration') { try { require '/tmp/library-inference-batches-integration.php'; } catch (Throwable $e) { fwrite(STDERR, get_class($e).': '.$e->getMessage().' at '.$e->getLine().PHP_EOL); exit(1); } exit; }
if (!in_array($action, ['read','rescan'], true)) throw new RuntimeException('Unknown action');
echo json_encode($items->findItem($user, (int)$state['itemId']));
