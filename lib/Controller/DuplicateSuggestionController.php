<?php
declare(strict_types=1);
namespace OCA\Library\Controller;
use OCA\Library\Service\DuplicateIndexService;
use OCA\Library\Service\DuplicateSuggestionService;
use OCA\Library\Service\DuplicateService;
use OCA\Library\BackgroundJob\DuplicateIndexJob;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\BackgroundJob\IJobList;
use OCP\IRequest;
use OCP\IUserSession;
use OCP\IURLGenerator;
use Psr\Log\LoggerInterface;
final class DuplicateSuggestionController extends Controller {
    public function __construct(string $appName,IRequest $request,private IUserSession $session,private DuplicateIndexService $index,private DuplicateSuggestionService $suggestions,private DuplicateService $duplicates,private IJobList $jobs,private IURLGenerator $urls,private LoggerInterface $logger){parent::__construct($appName,$request);}
    private function respond(callable $fn):JSONResponse {
        try{$uid=$this->session->getUser()?->getUID();if($uid===null)return new JSONResponse([],401);return new JSONResponse($fn($uid),200,['Cache-Control'=>'private, no-store']);}
        catch(\InvalidArgumentException $e){return new JSONResponse(['error'=>$e->getMessage()],422);}
        catch(\OutOfBoundsException){return new JSONResponse(['error'=>'unavailable'],404);}
        catch(\DomainException){return new JSONResponse(['error'=>'stale_comparison'],409);}
        catch(\Throwable $e){$this->logger->error('Library duplicate suggestion failed',['exception'=>$e]);return new JSONResponse(['error'=>'operation_failed'],500);}
    }
    private function configureFor(string $uid,bool $enabled):array {$state=$this->index->configure($uid,$enabled);if($state['status']==='building')$this->jobs->add(DuplicateIndexJob::class,['userId'=>$uid,'cursor'=>$state['cursor']]);return $state;}
    #[NoAdminRequired] #[NoCSRFRequired]
    public function status():JSONResponse{return $this->respond(fn($uid)=>$this->index->status($uid));}
    #[NoAdminRequired]
    public function configure():JSONResponse{return $this->respond(function($uid){$enabled=$this->request->getParam('enabled');if(!is_bool($enabled))throw new \InvalidArgumentException('invalid_setting');return $this->configureFor($uid,$enabled);});}
    #[NoAdminRequired]
    public function settings():RedirectResponse|JSONResponse {
        $response=$this->respond(fn($uid)=>$this->configureFor($uid,$this->request->getParam('enabled','0')==='1'));
        return $response->getStatus()===200 ? new RedirectResponse($this->urls->linkToRoute('settings.PersonalSettings.index',['section'=>'library'])) : $response;
    }
    #[NoAdminRequired]
    public function lookup():JSONResponse{return $this->respond(fn($uid)=>$this->suggestions->lookup($uid,$this->request->getParam('itemIds')));}
    #[NoAdminRequired] #[NoCSRFRequired]
    public function compare(int $leftId,int $rightId):JSONResponse{return $this->respond(fn($uid)=>$this->duplicates->compare($uid,$leftId,$rightId));}
    #[NoAdminRequired]
    public function decide(int $leftId,int $rightId):JSONResponse{return $this->respond(fn($uid)=>$this->duplicates->decideBooks($uid,$leftId,$rightId,$this->request->getParam('signature'),$this->request->getParam('decision'),$this->request->getParam('preferredId',0)));}
}
