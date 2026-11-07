<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\Files\IAppData;
use OCP\Files\NotFoundException;
use OCP\Files\SimpleFS\ISimpleFolder;
use OCP\Http\Client\IClientService;
use OCP\IConfig;

/** Explicit, fixed-destination cover requests; private immutable image objects, never job JSON bytes. */
final class LookupCoverService {
    public function __construct(private IClientService $http, private IAppData $data, private IConfig $config, private ManualCoverValidator $validator) {}
    private function folder(string $uid, bool $create=false): ISimpleFolder {
        $name='lookup-covers-'.hash('sha256',$uid);
        try { return $this->data->getFolder($name); }
        catch (NotFoundException $e) { if (!$create) throw $e; try { return $this->data->newFolder($name); } catch (\Throwable) { return $this->data->getFolder($name); } }
    }
    public function fetch(string $provider,array $edition): array {
        if ($provider!=='openlibrary' || $this->config->getAppValue('library','openlibrary_lookup_enabled','yes')!=='yes') throw new \DomainException('cover_unsupported');
        $id=$edition['coverId'] ?? null;
        if (!is_int($id) || $id<1 || $id>2147483647) throw new \DomainException('cover_unavailable');
        $response=$this->http->newClient()->get('https://covers.openlibrary.org/b/id/'.$id.'-L.jpg?default=false',[
            'timeout'=>12,'connect_timeout'=>4,'read_timeout'=>12,'allow_redirects'=>false,'stream'=>true,'http_errors'=>false,
            'headers'=>['Accept'=>'image/jpeg,image/png,image/webp','User-Agent'=>'Nextcloud-Library/0.4 (+https://github.com/utrost/Library)'],
        ]);
        $stream=$response->getBody();
        try {
            if ($response->getStatusCode()!==200 || !is_resource($stream)) throw new \DomainException('cover_unavailable');
            if ((int)$response->getHeader('content-length')>4194304) throw new \DomainException('cover_invalid');
            $content=''; $deadline=microtime(true)+12;
            while (!feof($stream) && strlen($content)<=4194304) {
                if (microtime(true)>$deadline) throw new \DomainException('cover_unavailable');
                $part=fread($stream,min(65536,4194305-strlen($content)));
                if ($part===false || ($part==='' && !feof($stream))) throw new \DomainException('cover_unavailable');
                $content.=$part;
            }
            $size=@getimagesizefromstring($content);
            if (strlen($content)>4194304 || !$size || $size[0]*$size[1]>8000000) throw new \DomainException('cover_invalid');
            return $this->validator->validate($content);
        } finally { if (is_resource($stream)) fclose($stream); }
    }
    public function store(string $uid,string $job,string $content,string $mime): array {
        if (!preg_match('/^[a-f0-9]{32}$/D',$job) || strlen($content)>ManualCoverValidator::MAX_BYTES) throw new \InvalidArgumentException('cover_object');
        $locks=\OC::$server->get(\OCP\Lock\ILockingProvider::class); $lock=hash('sha256','lookup-cover-store:'.$uid);
        $locks->acquireLock($lock,\OCP\Lock\ILockingProvider::LOCK_EXCLUSIVE);
        try {
        $hash=hash('sha256',$content); $key=$job.'-'.$hash;
        $folder=$this->folder($uid,true);
        if (!$folder->fileExists($key)) {
            $total=0; $jobBytes=0; $jobFiles=0;
            foreach ($folder->getDirectoryListing() as $file) { $bytes=$file->getSize(); $total+=$bytes; if (str_starts_with($file->getName(),$job.'-')) { $jobBytes+=$bytes; $jobFiles++; } }
            if ($total+strlen($content)>268435456 || $jobBytes+strlen($content)>67108864 || $jobFiles>=128) throw new \DomainException('cover_storage_limit');
            $folder->newFile($key,$content);
        }
        return ['key'=>$key,'hash'=>$hash,'mime'=>$mime,'bytes'=>strlen($content)];
        } finally { $locks->releaseLock($lock,\OCP\Lock\ILockingProvider::LOCK_EXCLUSIVE); }
    }
    public function read(string $uid,string $job,array $ref): string {
        if (!preg_match('/^[a-f0-9]{32}-[a-f0-9]{64}$/D',$ref['key'] ?? '') || !str_starts_with($ref['key'],$job.'-')) throw new \OutOfBoundsException('cover_unavailable');
        try { $file=$this->folder($uid)->getFile($ref['key']); }
        catch (NotFoundException) { throw new \DomainException('cover_expired'); }
        if ($file->getSize()>ManualCoverValidator::MAX_BYTES) throw new \DomainException('cover_invalid');
        $content=$file->getContent();
        if (!hash_equals($ref['hash'],hash('sha256',$content))) throw new \DomainException('cover_invalid');
        return $content;
    }
    /** Called while the job row is locked. Retain only current previews and receipt originals. */
    public function prune(string $uid,string $job,array $keep=[]): void {
        try { $folder=$this->folder($uid); } catch (NotFoundException) { return; }
        foreach ($folder->getDirectoryListing() as $file) if (str_starts_with($file->getName(),$job.'-') && !in_array($file->getName(),$keep,true)) $file->delete();
    }
    public function deleteUser(string $uid): void { try { $this->folder($uid)->delete(); } catch (NotFoundException) {} }
}
