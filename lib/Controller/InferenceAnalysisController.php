<?php
declare(strict_types=1);
namespace OCA\Library\Controller;
use OCA\Library\Service\InferenceAnalysisService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\IUserSession;
final class InferenceAnalysisController extends Controller {
    public function __construct(string $appName,IRequest $request,private IUserSession $session,private InferenceAnalysisService $analysis) { parent::__construct($appName,$request); }
    private function respond(callable $operation): JSONResponse {
        $uid=$this->session->getUser()?->getUID(); $status=200;
        try { $data=$uid===null ? [] : $operation($uid); if ($uid===null) $status=401; }
        catch (\InvalidArgumentException $e) { $data=['error'=>$e->getMessage()]; $status=422; }
        catch (\OutOfBoundsException $e) { $data=['error'=>$e->getMessage()]; $status=404; }
        return new JSONResponse($data,$status,['Cache-Control'=>'private, no-store']);
    }
    #[NoAdminRequired] #[NoCSRFRequired]
    public function index(): JSONResponse { return $this->respond(fn($uid)=>['jobs'=>$this->analysis->history($uid)]); }
    #[NoAdminRequired]
    public function start(): JSONResponse { return $this->respond(fn($uid)=>$this->analysis->start($uid,$this->request->getParam('definition'))); }
    #[NoAdminRequired] #[NoCSRFRequired]
    public function show(string $analysisId): JSONResponse { return $this->respond(fn($uid)=>$this->analysis->get($uid,$analysisId,(int)$this->request->getParam('page',1),(string)$this->request->getParam('filter','all'))); }
    #[NoAdminRequired]
    public function advance(string $analysisId): JSONResponse { return $this->respond(function($uid) use ($analysisId) { $this->analysis->advance($uid,$analysisId); return ['advanced'=>true]; }); }
    #[NoAdminRequired]
    public function cancel(string $analysisId): JSONResponse { return $this->respond(function($uid) use ($analysisId) { $this->analysis->stop($uid,$analysisId); return ['cancelled'=>true]; }); }
    #[NoAdminRequired]
    public function discard(string $analysisId): JSONResponse { return $this->respond(function($uid) use ($analysisId) { $this->analysis->discard($uid,$analysisId); return ['discarded'=>true]; }); }
}
