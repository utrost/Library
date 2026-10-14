<?php
declare(strict_types=1);
namespace OCA\Library\Controller;
use OCA\Library\Service\InferenceBatchService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\IUserSession;
final class InferenceBatchController extends Controller {
    public function __construct(string $appName, IRequest $request, private IUserSession $session, private InferenceBatchService $batches) { parent::__construct($appName, $request); }
    private function respond(callable $operation): JSONResponse {
        $uid = $this->session->getUser()?->getUID();
        $status = 200;
        try { $data = $uid === null ? [] : $operation($uid); if ($uid === null) $status = 401; }
        catch (\InvalidArgumentException $e) { $data = ['error' => $e->getMessage()]; $status = 422; }
        catch (\OutOfBoundsException $e) { $data = ['error' => $e->getMessage()]; $status = 404; }
        catch (\DomainException $e) { $data = ['error' => $e->getMessage()]; $status = 409; }
        return new JSONResponse($data, $status, ['Cache-Control' => 'private, no-store']);
    }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): JSONResponse { return $this->respond(fn($uid) => ['batches' => $this->batches->history($uid)]); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function show(string $batchId): JSONResponse { return $this->respond(fn($uid) => $this->batches->get($uid, $batchId)); }
    #[NoAdminRequired]
    public function prepare(): JSONResponse { return $this->respond(fn($uid) => $this->batches->prepare($uid, $this->request->getParam('proposals'), $this->request->getParam('context', ''))); }
    #[NoAdminRequired]
    public function apply(string $batchId): JSONResponse { return $this->respond(fn($uid) => $this->batches->mutate($uid, $batchId, false)); }
    #[NoAdminRequired]
    public function undo(string $batchId): JSONResponse { return $this->respond(fn($uid) => $this->batches->mutate($uid, $batchId, true)); }
    #[NoAdminRequired]
    public function discard(string $batchId): JSONResponse { return $this->respond(function($uid) use ($batchId) { $this->batches->discard($uid, $batchId); return ['discarded' => true]; }); }
}
