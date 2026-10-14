<?php
declare(strict_types=1);
namespace OCA\Library\Controller;
use OCA\Library\Service\DuplicateService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\IUserSession;
use Psr\Log\LoggerInterface;
final class DuplicateController extends Controller {
    public function __construct(string $appName,IRequest $request,private IUserSession $session,private DuplicateService $duplicates,private LoggerInterface $logger) { parent::__construct($appName,$request); }
    private function respond(callable $operation): JSONResponse {
        $uid=$this->session->getUser()?->getUID(); $status=200;
        try { $data=$uid===null ? [] : $operation($uid); if ($uid===null) $status=401; }
        catch (\InvalidArgumentException $e) { $data=['error'=>$e->getMessage()]; $status=422; }
        catch (\OutOfBoundsException) { $data=['error'=>'unavailable']; $status=404; }
        catch (\DomainException) { $data=['error'=>'stale_comparison']; $status=409; }
        catch (\Throwable $e) { $this->logger->error('Library duplicate operation failed',['exception'=>$e]); $data=['error'=>'operation_failed']; $status=500; }
        return new JSONResponse($data,$status,['Cache-Control'=>'private, no-store']);
    }
    #[NoAdminRequired] #[NoCSRFRequired]
    public function index(): JSONResponse { return $this->respond(fn($uid)=>['roots'=>array_map(static fn($root)=>['id'=>$root['id'],'label'=>$root['label']],$this->duplicates->roots($uid)),'scans'=>$this->duplicates->history($uid)]); }
    #[NoAdminRequired]
    public function start(): JSONResponse { return $this->respond(fn($uid)=>$this->duplicates->start($uid,$this->request->getParam('rootId',0),$this->request->getParam('contents',false))); }
    #[NoAdminRequired] #[NoCSRFRequired]
    public function show(string $scanId): JSONResponse { return $this->respond(fn($uid)=>$this->duplicates->get($uid,$scanId,(int)$this->request->getParam('page',1),(string)$this->request->getParam('filter','unreviewed'))); }
    #[NoAdminRequired]
    public function advance(string $scanId): JSONResponse { return $this->respond(function($uid) use ($scanId) { $this->duplicates->advance($uid,$scanId); return ['advanced'=>true]; }); }
    #[NoAdminRequired]
    public function cancel(string $scanId): JSONResponse { return $this->respond(function($uid) use ($scanId) { $this->duplicates->stop($uid,$scanId); return ['cancelled'=>true]; }); }
    #[NoAdminRequired]
    public function discard(string $scanId): JSONResponse { return $this->respond(function($uid) use ($scanId) { $this->duplicates->discard($uid,$scanId); return ['discarded'=>true]; }); }
    #[NoAdminRequired]
    public function decide(string $scanId,string $pairId): JSONResponse { return $this->respond(fn($uid)=>$this->duplicates->decide($uid,$scanId,$pairId,$this->request->getParam('signature'),$this->request->getParam('decision'),$this->request->getParam('preferredId',0))); }
}
