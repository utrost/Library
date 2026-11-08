<?php
declare(strict_types=1);
namespace OCA\Library\Controller;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\{JSONResponse,Response};
use OCP\AppFramework\Http\Attribute\{NoAdminRequired,NoCSRFRequired};
use OCP\{IRequest,IUserSession};
use OCA\Library\Service\CurationPortabilityService;
use OCA\Library\Http\PortableArchiveResponse;
final class CurationPortabilityController extends Controller {
    public function __construct(string $appName,IRequest $request,private IUserSession $session,private CurationPortabilityService $service) { parent::__construct($appName,$request); }
    private function uid(): string { $uid=$this->session->getUser()?->getUID();if ($uid===null) throw new \OutOfBoundsException();return $uid; }
    private function respond(callable $work): JSONResponse {
        try { return new JSONResponse($work($this->uid()),200,['Cache-Control'=>'private, no-store']); }
        catch (\OutOfBoundsException) { return new JSONResponse(['error'=>'not_found'],404,['Cache-Control'=>'private, no-store']); }
        catch (\DomainException $e) { return new JSONResponse(['error'=>$e->getMessage()],409,['Cache-Control'=>'private, no-store']); }
        catch (\LengthException $e) { return new JSONResponse(['error'=>$e->getMessage()==='archive_size_limit' ? 'archive_size_limit' : 'invalid_archive'],400,['Cache-Control'=>'private, no-store']); }
        catch (\InvalidArgumentException|\JsonException) { return new JSONResponse(['error'=>'invalid_archive'],400,['Cache-Control'=>'private, no-store']); }
    }
    #[NoAdminRequired]
    public function index(): JSONResponse { return $this->respond(fn($uid)=>['jobs'=>$this->service->list($uid)]); }
    #[NoAdminRequired]
    public function create(string $mode): JSONResponse { return $this->respond(fn($uid)=>$this->service->create($uid,$mode)); }
    #[NoAdminRequired]
    public function show(string $id,int $page=1): JSONResponse { return $this->respond(fn($uid)=>$this->service->show($uid,$id,$page)); }
    #[NoAdminRequired]
    public function upload(string $id,array $records=[]): JSONResponse { return $this->respond(fn($uid)=>$this->service->upload($uid,$id,$records)); }
    #[NoAdminRequired]
    public function control(string $id,string $action,int $count=0,int $rowId=0): JSONResponse { return $this->respond(fn($uid)=>$this->service->control($uid,$id,$action,$count,$rowId)); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function download(string $id): Response {
        try { $uid=$this->uid();$job=$this->service->show($uid,$id);if ($job['mode']!=='export' || $job['status']!=='complete') return new JSONResponse(['error'=>'archive_not_ready'],409,['Cache-Control'=>'private, no-store']);return new PortableArchiveResponse($this->service,$uid,$id); }
        catch (\OutOfBoundsException) { return new JSONResponse(['error'=>'not_found'],404,['Cache-Control'=>'private, no-store']); }
    }
}
