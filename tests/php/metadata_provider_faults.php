<?php
declare(strict_types=1);
// Labelled disposable Nextcloud only. HTTP is replaced; no public provider calls.
define('OC_CONSOLE',true);
require '/var/www/html/lib/base.php';
if (getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1') throw new RuntimeException('disposable opt-in required');
set_exception_handler(static function(Throwable $e): void { fwrite(STDERR,get_class($e).': '.$e->getMessage().' line '.$e->getLine()."\n"); exit(1); });
use OCA\Library\Service\{GoogleBooksLookupService,OpenLibraryLookupService,DnbLookupService,LocLookupService};
use OCA\Library\Exception\MetadataProviderRetryException;
use OCP\Http\Client\{IClient,IClientService,IResponse};
use OCP\{ICache,ICacheFactory,IMemcache,IDBConnection,IConfig};
function check(bool $ok,string $why): void { if(!$ok) throw new RuntimeException($why); }
$client=new class extends \OC\Http\Client\Client {
    public array $responses=[]; public int $calls=0; public array $urls=[];
    public function __construct() {}
    public function get(string $uri,array $options=[]): IResponse {
        $this->calls++;$this->urls[]=$uri;
        check(str_starts_with($uri,'https://www.googleapis.com/books/v1/volumes') || str_starts_with($uri,'https://openlibrary.org/') || str_starts_with($uri,'https://services.dnb.de/sru/dnb?') || str_starts_with($uri,'https://lx2.loc.gov/sru/lcdb?'),'fixed provider URL');
        check(($options['allow_redirects'] ?? true)===false && ($options['stream'] ?? false),'redirects disabled and streamed');
        check(!str_contains($uri,'DisposableProviderKey'),'API key absent from URL');
        if(!$this->responses) throw new RuntimeException('unexpected HTTP request');
        [$status,$body,$headers]=array_shift($this->responses);
        return new class($status,$body,$headers) implements IResponse {
            public function __construct(private int $status,private string $body,private array $headers) {}
            public function getStatusCode(): int { return $this->status; }
            public function getHeader(string $key): string { return $this->headers[strtolower($key)] ?? ''; }
            public function getHeaders(): array { return $this->headers; }
            public function getBody() { $stream=fopen('php://temp','w+'); fwrite($stream,$this->body); rewind($stream); return $stream; }
        };
    }
};
$clients=new class($client) implements IClientService {
    public function __construct(private IClient $client) {}
    public function newClient(): IClient { return $this->client; }
};
$caches=new class implements ICacheFactory {
    private array $caches=[];
    public function isAvailable(): bool { return true; }
    public function isLocalCacheAvailable(): bool { return true; }
    public function createDistributed(string $prefix=''): ICache { return $this->caches[$prefix] ??= new \OC\Memcache\ArrayCache(); }
    public function createLocal(string $prefix=''): ICache { return $this->createDistributed($prefix); }
    public function createLocking(string $prefix=''): IMemcache { return $this->createDistributed($prefix); }
    public function createInMemory(int $capacity=512): ICache { return new \OC\Memcache\ArrayCache(); }
};
$db=\OC::$server->get(IDBConnection::class); $config=\OC::$server->get(IConfig::class);
$config->setAppValue('library','google_books_api_key','DisposableProviderKey');
$config->setAppValue('library','google_books_lookup_enabled','yes');
$config->setAppValue('library','openlibrary_lookup_enabled','yes');
$config->setAppValue('library','dnb_lookup_enabled','yes');
$config->setAppValue('library','loc_lookup_enabled','yes');
$loc=new LocLookupService($clients,$caches,$db,$config);
$dnb=new DnbLookupService($clients,$caches,$db,$config);
$google=new GoogleBooksLookupService($clients,$caches,$db,$config);
$open=new OpenLibraryLookupService($clients,$caches,$db,$config);
$reset=static function(string $provider) use($db): void { $db->executeStatement('DELETE FROM *PREFIX*library_lookup_quota WHERE provider=?',[$provider]); };
foreach (['googlebooks'=>$google,'openlibrary'=>$open,'dnb'=>$dnb,'loc'=>$loc] as $name=>$provider) {
    foreach ([429,503] as $status) {
        $reset($name); $client->responses=[[$status,'{}',['retry-after'=>'120']]];
        try { $provider->search('provider-fixture','','Retry '.$status,''); throw new LogicException('expected cooldown'); }
        catch(MetadataProviderRetryException $e) { check($e->retryAfter>=120,'Retry-After propagated'); }
        $calls=$client->calls; $start=microtime(true);
        try { $provider->search('another-fixture','','Other request '.$status,''); throw new LogicException('expected shared cooldown'); }
        catch(MetadataProviderRetryException $e) { check($e->retryAfter>=119,'shared cooldown retained'); }
        check($client->calls===$calls && microtime(true)-$start<0.5,'cooldown prevents HTTP without a blocking sleep');
    }
    foreach ([[200,'not-json',[]],[200,str_repeat('x',524289),[]],[200,'{}',['content-length'=>'9999999']],[302,'',['location'=>'http://127.0.0.1/private']]] as $i=>$response) {
        $reset($name); $client->responses=[$response];
        try { $provider->search('provider-fixture','','Malformed '.$i,''); throw new LogicException('expected bounded rejection'); }
        catch(RuntimeException $e) { check($e->getMessage()==='provider_unavailable','safe provider failure'); }
    }
}
$reset('googlebooks');
$volume=['kind'=>'books#volume','id'=>'fixtureBook','volumeInfo'=>['title'=>'<script>bad()</script>Example','description'=>'<b>Safe description</b>','language'=>'DEU','industryIdentifiers'=>[['type'=>'ISBN_13','identifier'=>'9780306406157']]]];
$body=json_encode(['kind'=>'books#volumes','items'=>[$volume]],JSON_THROW_ON_ERROR);
$client->responses=[[200,$body,[]]];
$matches=$google->search('provider-fixture','9780306406157','','');
check(count($matches)===1 && !str_contains($matches[0]['title'],'<'),'provider HTML rendered as plain text');
$calls=$client->calls; $edition=$google->edition('provider-fixture','fixtureBook');
check($client->calls===$calls && $edition['fields']['language']==='de','edition cache and normalized language');
$reset('googlebooks'); $client->responses=[[200,$body,[]]];
$google->search('another-fixture','9780306406157','','');
check($client->calls===$calls+1,'provider cache isolated by account');
$reset('googlebooks'); $client->responses=[[200,$body,[]]];
$mismatch=$google->search('provider-fixture','9780140328721','','');
check(count($mismatch)===1 && $mismatch[0]['match']==='isbn_mismatch','Google result order retained with explicit wrong-ISBN warning');
$config->setAppValue('library','google_books_lookup_enabled','no');
try { $google->search('provider-fixture','9780306406157','',''); throw new LogicException('expected disabled provider'); }
catch(RuntimeException $e) { check($e->getMessage()==='provider_disabled','disabled provider cannot serve cache'); }
$config->setAppValue('library','google_books_lookup_enabled','yes');
$config->deleteAppValue('library','google_books_api_key');
try { $google->search('provider-fixture','9780306406157','',''); throw new LogicException('expected missing credential'); }
catch(RuntimeException $e) { check($e->getMessage()==='provider_unconfigured','missing key cannot serve cache'); }
// Alternative editions use fixed, bounded URLs and never trust provider pagination links.
$reset('openlibrary');$entries=[];
for($n=1;$n<=9;$n++)$entries[]=['key'=>'/books/OL'.$n.'M','title'=>'Edition fixture '.$n,'works'=>[['key'=>'/works/OL1W']],'publishers'=>['Fixture Press'],'publish_date'=>'2024','physical_format'=>'Paperback','languages'=>[['key'=>'/languages/eng']]];
$entries[2]['works']=[['key'=>'/works/OL999W']];$entries[3]['key']='https://example.invalid/edition';
$client->responses=[[200,json_encode(['entries'=>$entries,'links'=>['next'=>'http://127.0.0.1/private']],JSON_THROW_ON_ERROR),[]]];
$page=$open->editions('provider-fixture','OL1W');
check(count($page['results'])===6 && $page['nextOffset']===8 && $page['previousOffset']===null,'edition page excludes unrelated or invalid entries and is bounded');
check(end($client->urls)==='https://openlibrary.org/works/OL1W/editions.json?limit=9&offset=0','edition URL is constructed locally');
check($page['results'][0]['format']==='Paperback' && $page['results'][0]['languages']===['eng'],'edition evidence retains provider language and format');
$calls=$client->calls;$open->editions('provider-fixture','OL1W');$edition=$open->edition('provider-fixture','OL1M');check($edition['fields']['language']==='en','chosen edition normalizes language for saving');check($client->calls===$calls,'edition page and candidate details reuse account cache');
foreach ([['https://example.invalid',0],['OL1W',1],['OL1W',200],['OL1W',-8]] as [$work,$offset]) {try{$open->editions('provider-fixture',$work,$offset);throw new LogicException('invalid edition cursor accepted');}catch(InvalidArgumentException){}}
check($client->calls===$calls,'invalid edition requests cause no HTTP');
$reset('openlibrary');$client->responses=[[200,json_encode(['entries'=>$entries],JSON_THROW_ON_ERROR),[]]];
$last=$open->editions('provider-fixture','OL1W',192);check($last['limited'] && $last['nextOffset']===null && $last['previousOffset']===184,'last edition page signals limit');
$reset('openlibrary');$client->responses=[[200,json_encode(['entries'=>[['key'=>'/books/OL12M','title'=>'Unknown work']]],JSON_THROW_ON_ERROR),[]]];
$empty=$open->editions('provider-fixture','OL1W',8);check($empty['results']===[] && $empty['nextOffset']===null,'missing work evidence cannot become a candidate');
$reset('googlebooks'); $reset('openlibrary');
// DNB uses MARC21 XML, not arbitrary linked resources or HTML pages.
$body=file_get_contents(__DIR__.'/fixtures/dnb-record.xml');
$reset('dnb'); $client->responses=[[200,$body,[]]];
$matches=$dnb->search('dnb-fixture','ISBN: 978-0-306-40615-7','','');
check(count($matches)===1 && $matches[0]['match']==='isbn','DNB exact ISBN evidence');
check($matches[0]['authors']===['Example, Writer'],'DNB excludes translators from author evidence');
$calls=$client->calls; $edition=$dnb->edition('dnb-fixture','123456789X');
check($client->calls===$calls,'DNB comparison reuses cached record');
check($edition['fields']===['title'=>'The synthetic book','subtitle'=>'A fixture subtitle','publisher'=>'Fixture Verlag','publicationDate'=>'2025','description'=>'A synthetic description.','subjects'=>['Metadata'],'language'=>'de; en'],'DNB field mapping and non-sorting markers');
check($edition['isbn']===['9780306406157'] && !isset($edition['coverId']),'cancelled ISBNs and arbitrary linked resources ignored');
$reset('dnb');$client->responses=[[200,$body,[]]];
check($dnb->search('dnb-fixture','9780140328721','','')[0]['match']==='isbn_mismatch','DNB mismatched ISBN remains a warning');
$reset('dnb');$client->responses=[[200,$body,[]]];
$dnb->search('dnb-other','9780306406157','','');check($client->calls===$calls+2,'DNB cache isolated by account');
$reset('dnb');$client->responses=[[200,$body,[]]];
$dnb->search('dnb-fixture','','Book" or idn=*','Example?');parse_str(parse_url(end($client->urls),PHP_URL_QUERY),$params);
check($params['query']==='tit="Book\\" or idn=\\*" and per="Example\\?"','CQL syntax and wildcard characters escaped');
$reset('dnb');$client->responses=[[200,$body,[]]];
check($dnb->edition('uncached-fixture','123456789X')['editionId']==='123456789X','exact IDN fetch');
parse_str(parse_url(end($client->urls),PHP_URL_QUERY),$params);check($params['query']==='idn="123456789X"' && $params['maximumRecords']==='1','fixed bounded edition query');
$reset('dnb');$client->responses=[[200,$body,[]]];
try{$dnb->edition('uncached-fixture','987654321X');throw new LogicException('wrong ID accepted');}catch(RuntimeException $e){check($e->getMessage()==='provider_unavailable','wrong record ID rejected');}
$calls=$client->calls;
foreach (['https://d-nb.info/123456789X','123" or idn=*','../123456789X'] as $id) {
    try{$dnb->edition('dnb-fixture',$id);throw new LogicException('unsafe ID accepted');}catch(InvalidArgumentException){}
}
foreach ([['invalid','',''],['','ab',''],['',"bad\nquery",'']] as $query) {
    try{$dnb->search('dnb-fixture',...$query);throw new LogicException('unsafe query accepted');}catch(InvalidArgumentException){}
}
check($client->calls===$calls,'invalid DNB input never causes HTTP');
$empty='<searchRetrieveResponse xmlns="http://www.loc.gov/zing/srw/"><numberOfRecords>0</numberOfRecords><records/></searchRetrieveResponse>';
$reset('dnb');$client->responses=[[200,$empty,[]]];
check($dnb->search('dnb-fixture','','No matches','')===[],'DNB genuine empty result');
$calls=$client->calls;$dnb->search('dnb-fixture','','No matches','');check($client->calls===$calls,'DNB caches empty results');
$badBodies=[
    '<!DOCTYPE foo [<!ENTITY secret SYSTEM "file:///etc/passwd">]>'.$empty,
    str_replace('<numberOfRecords>0','<diagnostics><diagnostic/></diagnostics><numberOfRecords>0',$empty),
    str_replace('http://www.loc.gov/zing/srw/','https://example.invalid',$empty),
    str_replace('<numberOfRecords>0','<numberOfRecords>1',$empty),
    str_replace('<numberOfRecords>0','<numberOfRecords>unknown',$empty),
    str_replace('</records>',str_repeat(substr($body,strpos($body,'<records>')+9,strpos($body,'</records>')-strpos($body,'<records>')-9),8).'</records>',$body),
];
foreach($badBodies as $n=>$invalid){$reset('dnb');$client->responses=[[200,$invalid,[]]];try{$dnb->search('dnb-fixture','','Bad XML '.$n,'');throw new LogicException('unsafe XML accepted');}catch(RuntimeException $e){check($e->getMessage()==='provider_unavailable','DNB XML fails closed');}}
$config->setAppValue('library','dnb_lookup_enabled','no');$calls=$client->calls;
try{$dnb->search('dnb-fixture','9780306406157','','');throw new LogicException('disabled DNB served cache');}catch(RuntimeException $e){check($e->getMessage()==='provider_disabled','DNB disable applies before cache');}
check($client->calls===$calls,'disabled DNB makes no HTTP');
$config->setAppValue('library','dnb_lookup_enabled','yes');$reset('dnb');
// LoC retains its own LCCN identity, HTTPS endpoint, schema, query syntax and caches.
$body=file_get_contents(__DIR__.'/fixtures/loc-record.xml');
$reset('loc');$client->responses=[[200,$body,[]]];
$matches=$loc->search('loc-fixture','9780306406157','','');
check($matches[0]['provider']==='Library of Congress' && $matches[0]['editionId']==='2025000001' && $matches[0]['match']==='isbn','LoC uses 010$a LCCN, not 001 or cancelled 010$z');
check($matches[0]['url']==='https://lccn.loc.gov/2025000001' && $matches[0]['authors']===['Example, Writer'],'LoC source and textual author roles');
parse_str(parse_url(end($client->urls),PHP_URL_QUERY),$params);
check($params['query']==='bath.isbn="9780306406157"' && $params['recordSchema']==='marcxml' && $params['maximumRecords']==='8','LoC documented ISBN search');
$calls=$client->calls;$edition=$loc->edition('loc-fixture','2025000001');check($client->calls===$calls && $edition['fields']['publisher']==='Fixture Press' && $edition['fields']['language']==='de; en','LoC cached MARC normalization');
$reset('loc');$client->responses=[[200,$body,[]]];$loc->search('loc-other','9780306406157','','');check($client->calls===$calls+1,'LoC account cache isolation');
$reset('loc');$client->responses=[[200,$body,[]]];$loc->search('loc-fixture','','Book" or bath.lccn=*','Jane Example');
parse_str(parse_url(end($client->urls),PHP_URL_QUERY),$params);check($params['query']==='dc.title="Book\\" or bath.lccn=\\*" and dc.creator="Jane" and dc.creator="Example"','LoC escaped query and order-independent author words');
$reset('loc');$client->responses=[[200,$body,[]]];check($loc->search('loc-fixture','9780140328721','','')[0]['match']==='isbn_mismatch','LoC ISBN mismatch is explicit');
$reset('loc');$client->responses=[[200,$body,[]]];$loc->edition('loc-uncached','2025000001');parse_str(parse_url(end($client->urls),PHP_URL_QUERY),$params);check($params['query']==='bath.lccn="2025000001"' && $params['maximumRecords']==='1','LoC exact LCCN retrieval');
$reset('loc');$client->responses=[[200,$body,[]]];try{$loc->edition('loc-uncached','2025000002');throw new LogicException('wrong LoC record accepted');}catch(RuntimeException $e){check($e->getMessage()==='provider_unavailable','LoC wrong identity rejected');}
$calls=$client->calls;
foreach(['https://lccn.loc.gov/2025000001','2025-1','../2025000001','2025000001" or bath.lccn=*'] as $id){try{$loc->edition('loc-fixture',$id);throw new LogicException('unsafe LCCN accepted');}catch(InvalidArgumentException){}}
check($client->calls===$calls,'unsafe LoC IDs never reach network');
$reset('loc');$client->responses=[[200,str_replace('  2025000001 ',' sn 99000001 ',$body),[]]];
check($loc->edition('loc-fixture','sn99000001')['editionId']==='sn99000001','LoC prefix and old two-digit year normalized');
$reset('loc');$client->responses=[[200,$empty,[]]];check($loc->search('loc-fixture','','No matches','')===[],'LoC empty result');
$calls=$client->calls;$loc->search('loc-fixture','','No matches','');check($client->calls===$calls,'LoC empty result cached');
foreach($badBodies as $n=>$invalid){$reset('loc');$client->responses=[[200,$invalid,[]]];try{$loc->search('loc-fixture','','Bad XML '.$n,'');throw new LogicException('unsafe LoC XML accepted');}catch(RuntimeException $e){check($e->getMessage()==='provider_unavailable','LoC XML fails closed');}}
$config->setAppValue('library','loc_lookup_enabled','no');$calls=$client->calls;try{$loc->search('loc-fixture','9780306406157','','');throw new LogicException('disabled LoC served cache');}catch(RuntimeException $e){check($e->getMessage()==='provider_disabled','LoC disable before cache');}check($calls===$client->calls,'disabled LoC makes no request');
$config->setAppValue('library','loc_lookup_enabled','yes');$reset('loc');
echo "provider_fault_fixtures=passed public_network_requests=0\n";
