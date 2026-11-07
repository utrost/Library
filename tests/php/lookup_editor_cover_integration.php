<?php
declare(strict_types=1);
// Seeds and mutates disposable synthetic books only; provider HTTP is injected.
require __DIR__.'/metadata_batch_integration.php';
use OCA\Library\Service\{LookupCoverService,ManualCoverValidator,MetadataBatchService};
use OCP\Http\Client\{IClient,IClientService,IResponse};
$image=imagecreatetruecolor(100,150); imagefill($image,0,0,imagecolorallocate($image,30,90,150)); ob_start(); imagepng($image); $png=ob_get_clean(); imagedestroy($image);
// Distinct original and provider covers prove that Undo restores bytes, not just flags.
$image=imagecreatetruecolor(100,150); imagefill($image,0,0,imagecolorallocate($image,150,30,30)); ob_start(); imagepng($image); $originalPng=ob_get_clean(); imagedestroy($image);
$client=new class($png) extends \OC\Http\Client\Client {
    public int $calls=0; public int $status=200; public string $body; public string $length=''; public $during=null;
    public function __construct(string $body) { $this->body=$body; }
    public function get(string $uri,array $options=[]): IResponse {
        $this->calls++; check($uri==='https://covers.openlibrary.org/b/id/123-L.jpg?default=false','only fixed cover URL');
        check($options['allow_redirects']===false && $options['stream']===true,'bounded nonredirected stream');
        if ($this->during) { $work=$this->during; $this->during=null; $work(); }
        return new class($this->status,$this->body,$this->length) implements IResponse {
            public function __construct(private int $status,private string $body,private string $length) {}
            public function getStatusCode(): int { return $this->status; }
            public function getHeader(string $key): string { return $key==='content-length' ? $this->length : ''; }
            public function getHeaders(): array { return []; }
            public function getBody() { $s=fopen('php://temp','w+');fwrite($s,$this->body);rewind($s);return $s; }
        };
    }
};
$http=new class($client) implements IClientService { public function __construct(private IClient $client) {} public function newClient(): IClient { return $this->client; } };
$data=\OC::$server->get(\OCP\Files\AppData\IAppDataFactory::class)->get('library');
$covers=new LookupCoverService($http,$data,$config,new ManualCoverValidator());
$property=new ReflectionProperty(MetadataBatchService::class,'coverStore'); $property->setValue($service,$covers);
$edition=['editionId'=>'OL1M','fields'=>['publisher'=>'Cover Press','language'=>'de'],'isbn'=>[],'coverId'=>123,'url'=>'https://openlibrary.org/books/OL1M'];
$cache->set(hash('sha256',$uid."\0edition\0OL1M"),$edition);
$book=$ids[21]; $items->clearManualCoverOverride($uid,$book);
$prepare=fn()=>$service->prepareEditor($uid,$book,'openlibrary','OL1M');
$before=$items->findItem($uid,$book); $chosen=$prepare(); $approval=$chosen['lookup']+['fields'=>['publisher']];
$service->saveEditor($uid,$book,$approval,['publisher'=>'Cover Press','description'=>'Manual side edit'],$before['metadataRevision'],null);
$saved=$items->findItem($uid,$book);
check($saved['fieldSources']['publisher']==='provider:openlibrary' && $saved['fieldSources']['description']==='user','editor distinguishes provider and manual changes');
$service->saveEditor($uid,$book,$approval,['publisher'=>'Cover Press','description'=>'Manual side edit'],$before['metadataRevision'],null);
rejects(\OCA\Library\Exception\MetadataConflictException::class,fn()=>$service->saveEditor($uid,$book,$approval,['publisher'=>'different'],$before['metadataRevision'],null));
rejects(OutOfBoundsException::class,fn()=>$service->saveEditor('another-owner',$book,$approval,[],$before['metadataRevision'],null));
review($service,$uid,$chosen['lookup']['jobId'],$book,'undo',[]);
$restored=$items->findItem($uid,$book); check($restored['publisher']===$before['publisher'] && $restored['description']==='Manual side edit','Undo restores provider fields only');
$service->control($uid,$chosen['lookup']['jobId'],'delete');$service->control($uid,$chosen['lookup']['jobId'],'delete_receipts');

$chosen=$prepare();$before=$items->findItem($uid,$book);
$service->saveEditor($uid,$book,$chosen['lookup']+['fields'=>['publisher']],['publisher'=>'User correction'],$before['metadataRevision'],null);
check($items->findItem($uid,$book)['fieldSources']['publisher']==='user','edited suggestion is manual, never forged provider attribution');
check(!isset($service->get($uid,$chosen['lookup']['jobId'])['rows'][0]['receipt']),'manual-only save creates no misleading provider receipt');
$service->control($uid,$chosen['lookup']['jobId'],'delete');
// Selecting one identifier from a provider list still records provider provenance.
$withIsbn=$edition; $withIsbn['isbn']=['9780140328721','9780306406157'];
$cache->set(hash('sha256',$uid."\0edition\0OL1M"),$withIsbn);
$before=$items->findItem($uid,$book); $chosen=$prepare();
$service->saveEditor($uid,$book,$chosen['lookup']+['fields'=>['isbn']],['identifiers'=>array_merge($before['identifiers'],[['scheme'=>'isbn','displayValue'=>'9780140328721']])],$before['metadataRevision'],null);
check(count(array_filter($items->findItem($uid,$book)['identifiers'],static fn($v)=>$v['displayValue']==='9780140328721' && $v['source']==='provider:openlibrary'))===1,'selected identifier subset has verified provenance');
review($service,$uid,$chosen['lookup']['jobId'],$book,'undo',[]);
$service->control($uid,$chosen['lookup']['jobId'],'delete');$service->control($uid,$chosen['lookup']['jobId'],'delete_receipts');
$cache->set(hash('sha256',$uid."\0edition\0OL1M"),$edition);
$items->updateItem($uid,$book,['publisher'=>'']);
$items->setManualCoverOverride($uid,$book,base64_encode($originalPng),'image/png');
$chosen=$prepare(); $job=$service->fetchCover($uid,$chosen['lookup']['jobId'],$book,$chosen['lookup']['reviewVersion']);
check(!str_contains(json_encode($job),base64_encode($png)),'image bytes absent from job response');
check($service->coverImage($uid,$job['id'],$book)['content']===$png,'owner preview bytes');
rejects(OutOfBoundsException::class,fn()=>$service->coverImage('another-owner',$job['id'],$book));
$before=$items->findItem($uid,$book);$approval=['jobId'=>$job['id'],'reviewVersion'=>$job['rows'][0]['reviewVersion'],'fields'=>['publisher','cover']];
$items->setManualCoverOverride($uid,$book,base64_encode($originalPng),'image/png');
rejects(\OCA\Library\Exception\MetadataConflictException::class,fn()=>$service->saveEditor($uid,$book,$approval,['publisher'=>'Cover Press'],$before['metadataRevision'],null));
check($items->findItem($uid,$book)['publisher']==='','stale cover rejects text atomically');
$service->control($uid,$job['id'],'delete');
$chosen=$prepare();$job=$service->fetchCover($uid,$chosen['lookup']['jobId'],$book,$chosen['lookup']['reviewVersion']);
$before=$items->findItem($uid,$book);$approval=['jobId'=>$job['id'],'reviewVersion'=>$job['rows'][0]['reviewVersion'],'fields'=>['publisher','cover']];
if ($db->getDatabaseProvider()==='sqlite') {
    $db->executeStatement('CREATE TEMP TRIGGER reject_cover_receipt BEFORE UPDATE ON *PREFIX*library_lookup_jobs WHEN NEW.id=\''.$job['id'].'\' AND instr(NEW.payload,\'"status":"applied"\')>0 BEGIN SELECT RAISE(ABORT,\'fixture receipt failure\'); END');
    rejects(Throwable::class,fn()=>$service->saveEditor($uid,$book,$approval,['publisher'=>'Cover Press'],$before['metadataRevision'],null));
    $db->executeStatement('DROP TRIGGER reject_cover_receipt');
    $unchanged=$items->findItem($uid,$book);
    check($unchanged['publisher']===$before['publisher'] && $unchanged['coverCacheRevision']===$before['coverCacheRevision'],'receipt failure rolls back text and cover');
}
$service->saveEditor($uid,$book,$approval,['publisher'=>'Cover Press'],$before['metadataRevision'],null);
$saved=$items->findItem($uid,$book);check($saved['fieldSources']['cover']==='provider:openlibrary' && $saved['coverOverrideData']===base64_encode($png),'cover provenance and new bytes saved');
$service->saveEditor($uid,$book,$approval,['publisher'=>'Cover Press'],$before['metadataRevision'],null);
check($items->findItem($uid,$book)['coverCacheRevision']===$saved['coverCacheRevision'],'cover Apply retry is idempotent');
$service->control($uid,$job['id'],'delete');
review($service,$uid,$job['id'],$book,'undo',[]);
$restored=$items->findItem($uid,$book);check($restored['coverOverrideData']===$before['coverOverrideData'] && $restored['publisher']==='','archived text/cover Undo restores original');
$service->control($uid,$job['id'],'delete_receipts');
rejects(\DomainException::class,fn()=>$covers->fetch('googlebooks',$edition));
rejects(\DomainException::class,fn()=>$covers->fetch('openlibrary',['coverId'=>'http://127.0.0.1/private']));
foreach ([[302,$png,''],[200,'<svg/>',''],[200,$png,'9999999'],[200,str_repeat('x',4194305),'']] as [$status,$body,$length]) {
    $client->status=$status;$client->body=$body;$client->length=$length;
    rejects(\DomainException::class,fn()=>$covers->fetch('openlibrary',$edition));
}
$client->status=200;$client->body=$png;$client->length='';
// Expired previews never partially save accompanying text.
$chosen=$prepare();$job=$service->fetchCover($uid,$chosen['lookup']['jobId'],$book,$chosen['lookup']['reviewVersion']);
$before=$items->findItem($uid,$book);
$raw=$db->executeQuery('SELECT payload FROM *PREFIX*library_lookup_jobs WHERE id=?',[$job['id']])->fetchOne();$payload=json_decode($raw,true);$payload['rows'][0]['cover']['expiresAt']=time()-1;
$db->executeStatement('UPDATE *PREFIX*library_lookup_jobs SET payload=? WHERE id=?',[json_encode($payload),$job['id']]);
rejects(InvalidArgumentException::class,fn()=>$service->saveEditor($uid,$book,['jobId'=>$job['id'],'reviewVersion'=>$job['rows'][0]['reviewVersion'],'fields'=>['publisher','cover']],['publisher'=>'Cover Press'],$before['metadataRevision'],null));
check($items->findItem($uid,$book)['publisher']===$before['publisher'],'expired preview keeps text unchanged');
$service->control($uid,$job['id'],'delete');
// Batch uses the same transaction and will not undo over a subsequent manual cover.
$batch=$service->create($uid,[$book],'openlibrary',['publisher','cover'],'missing');$service->advance();
review($service,$uid,$batch['id'],$book,'choose',['editionId'=>'OL1M']);$service->advance();
$current=$service->get($uid,$batch['id']);$job=$service->fetchCover($uid,$batch['id'],$book,$current['rows'][0]['reviewVersion']);
review($service,$uid,$job['id'],$book,'select',['fields'=>['publisher','cover']]);
review($service,$uid,$job['id'],$book,'apply',[]);
$items->setManualCoverOverride($uid,$book,base64_encode($originalPng),'image/png');
rejects(\OCA\Library\Exception\MetadataConflictException::class,fn()=>review($service,$uid,$job['id'],$book,'undo',[]));
check($items->findItem($uid,$book)['coverOverrideData']===base64_encode($originalPng),'later manual cover survives Undo');
$service->control($uid,$job['id'],'delete');$service->control($uid,$job['id'],'delete_receipts');
$items->updateItem($uid,$book,['publisher'=>'']);
// A row changed while the image was downloading cannot accept that stale preview.
$chosen=$prepare(); $client->during=fn()=>review($service,$uid,$chosen['lookup']['jobId'],$book,'skip',[]);
rejects(\DomainException::class,fn()=>$service->fetchCover($uid,$chosen['lookup']['jobId'],$book,$chosen['lookup']['reviewVersion']));
$service->control($uid,$chosen['lookup']['jobId'],'delete');
// Leave one ready row with a local cover for deterministic browser comparison, no public calls.
$items->clearManualCoverOverride($uid,$book);$items->updateItem($uid,$book,['publisher'=>'']);
$chosen=$prepare();$job=$service->fetchCover($uid,$chosen['lookup']['jobId'],$book,$chosen['lookup']['reviewVersion']);
$batchBook=$ids[22];$items->updateItem($uid,$batchBook,['publisher'=>'']);$items->setManualCoverOverride($uid,$batchBook,base64_encode($originalPng),'image/png');
$batch=$service->create($uid,[$batchBook],'openlibrary',['publisher','cover'],'missing');$service->advance();
review($service,$uid,$batch['id'],$batchBook,'choose',['editionId'=>'OL1M']);$service->advance();
$batch=$service->get($uid,$batch['id']);$batch=$service->fetchCover($uid,$batch['id'],$batchBook,$batch['rows'][0]['reviewVersion']);
file_put_contents('/tmp/library-editor-fixture.json',json_encode(['itemId'=>$book,'edition'=>$edition+['lookup'=>['jobId'=>$job['id'],'reviewVersion'=>$job['rows'][0]['reviewVersion']]],'job'=>$job,'batchCoverJob'=>$batch],JSON_THROW_ON_ERROR));
echo json_encode(['editor_and_cover'=>true,'externalRequests'=>0,'imageRequests'=>$client->calls]),"\n";
