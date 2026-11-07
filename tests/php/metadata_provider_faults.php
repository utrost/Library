<?php
declare(strict_types=1);
// Labelled disposable Nextcloud only. HTTP is replaced; no public provider calls.
define('OC_CONSOLE',true);
require '/var/www/html/lib/base.php';
if (getenv('LIBRARY_DISPOSABLE_FIXTURE')!=='1') throw new RuntimeException('disposable opt-in required');
set_exception_handler(static function(Throwable $e): void { fwrite(STDERR,get_class($e).': '.$e->getMessage().' line '.$e->getLine()."\n"); exit(1); });
use OCA\Library\Service\{GoogleBooksLookupService,OpenLibraryLookupService};
use OCA\Library\Exception\MetadataProviderRetryException;
use OCP\Http\Client\{IClient,IClientService,IResponse};
use OCP\{ICache,ICacheFactory,IMemcache,IDBConnection,IConfig};
function check(bool $ok,string $why): void { if(!$ok) throw new RuntimeException($why); }
$client=new class extends \OC\Http\Client\Client {
    public array $responses=[]; public int $calls=0;
    public function __construct() {}
    public function get(string $uri,array $options=[]): IResponse {
        $this->calls++;
        check(str_starts_with($uri,'https://www.googleapis.com/books/v1/volumes') || str_starts_with($uri,'https://openlibrary.org/'),'fixed provider URL');
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
$google=new GoogleBooksLookupService($clients,$caches,$db,$config);
$open=new OpenLibraryLookupService($clients,$caches,$db,$config);
$reset=static function(string $provider) use($db): void { $db->executeStatement('DELETE FROM *PREFIX*library_lookup_quota WHERE provider=?',[$provider]); };
foreach (['googlebooks'=>$google,'openlibrary'=>$open] as $name=>$provider) {
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
check($google->search('provider-fixture','9780140328721','','')===[],'wrong ISBN never accepted as exact match');
$config->setAppValue('library','google_books_lookup_enabled','no');
try { $google->search('provider-fixture','9780306406157','',''); throw new LogicException('expected disabled provider'); }
catch(RuntimeException $e) { check($e->getMessage()==='provider_disabled','disabled provider cannot serve cache'); }
$config->setAppValue('library','google_books_lookup_enabled','yes');
$config->deleteAppValue('library','google_books_api_key');
try { $google->search('provider-fixture','9780306406157','',''); throw new LogicException('expected missing credential'); }
catch(RuntimeException $e) { check($e->getMessage()==='provider_unconfigured','missing key cannot serve cache'); }
$reset('googlebooks'); $reset('openlibrary');
echo "provider_fault_fixtures=passed public_network_requests=0\n";
