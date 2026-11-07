<?php
declare(strict_types=1);
namespace OCA\Library\Controller;
use OCA\Library\Service\MetadataBatchService;
use OCA\Library\Exception\MetadataConflictException;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\IUserSession;

/** All endpoints require authentication and CSRF, including private job reads. */
final class MetadataBatchController extends Controller {
    public function __construct(string $appName,IRequest $request,private IUserSession $session,private MetadataBatchService $batches) { parent::__construct($appName,$request); }
    #[NoAdminRequired]
    public function index(): JSONResponse { return $this->respond(fn($uid)=>['options'=>$this->batches->options($uid),'jobs'=>$this->batches->history($uid)]); }
    #[NoAdminRequired]
    public function create(): JSONResponse { return $this->respond(fn($uid)=>$this->batches->create($uid,$this->list('ids'),$this->text('provider'),$this->list('fields'),$this->text('policy'),$this->text('requestId') ?: null)); }
    #[NoAdminRequired]
    public function show(string $id): JSONResponse { return $this->respond(fn($uid)=>$this->batches->get($uid,$id)); }
    #[NoAdminRequired]
    public function control(string $id): JSONResponse { return $this->respond(fn($uid)=>$this->batches->control($uid,$id,$this->text('action'))); }
    #[NoAdminRequired]
    public function review(string $id,int $itemId): JSONResponse { return $this->respond(fn($uid)=>$this->batches->review($uid,$id,$itemId,$this->text('action'),['fields'=>$this->list('fields'),'editionId'=>$this->text('editionId'),'provider'=>$this->text('provider'),'isbn'=>$this->text('isbn'),'title'=>$this->text('title',800),'author'=>$this->text('author',800),'reviewVersion'=>$this->request->getParam('reviewVersion',0)])); }
    #[NoAdminRequired]
    public function apply(string $id): JSONResponse { return $this->respond(fn($uid)=>$this->batches->applySelected($uid,$id,$this->selectedRows())); }
    #[NoAdminRequired]
    public function previewCover(string $id,int $itemId): JSONResponse { return $this->respond(fn($uid)=>$this->batches->fetchCover($uid,$id,$itemId,(int)$this->request->getParam('reviewVersion',-1))); }
    #[NoAdminRequired]
    public function coverImage(string $id,int $itemId): \OCP\AppFramework\Http\Response {
        $uid=$this->session->getUser()?->getUID();
        if ($uid===null) return new JSONResponse(['error'=>'not_found'],404);
        try {
            $image=$this->batches->coverImage($uid,$id,$itemId);
            return new \OCP\AppFramework\Http\DataDownloadResponse($image['content'],'cover',$image['mime'],200,['Cache-Control'=>'private, no-store','X-Content-Type-Options'=>'nosniff']);
        } catch (\Throwable) { return new JSONResponse(['error'=>'cover_unavailable'],404,['Cache-Control'=>'private, no-store']); }
    }
    private function selectedRows(): array {
        $value=$this->request->getParam('rows',null);
        if (!is_array($value) || !array_is_list($value) || count($value)>50) throw new \InvalidArgumentException('invalid_selection');
        return $value;
    }
    private function text(string $key,int $max=128): string {
        $value=$this->request->getParam($key,'');
        if (!is_string($value) || strlen($value)>$max) throw new \InvalidArgumentException('invalid_request');
        return $value;
    }
    private function list(string $key): array {
        $value=$this->request->getParam($key,[]);
        if (!is_array($value) || !array_is_list($value) || count($value)>50 || array_filter($value,static fn($v)=>!is_string($v) && !is_int($v))) throw new \InvalidArgumentException('invalid_request');
        return $value;
    }
    private function respond(callable $work): JSONResponse {
        try {
            $uid=$this->session->getUser()?->getUID();
            if ($uid===null) throw new \OutOfBoundsException('not_found');
            return new JSONResponse($work($uid),200,['Cache-Control'=>'private, no-store']);
        } catch (MetadataConflictException) { $error='stale_book'; $status=409; }
        catch (\OutOfBoundsException) { $error='not_found'; $status=404; }
        catch (\InvalidArgumentException) { $error='invalid_request'; $status=400; }
        catch (\DomainException $e) { $error=$e->getMessage(); $status=409; }
        catch (\Throwable) { $error='operation_failed'; $status=503; }
        return new JSONResponse(['error'=>$error],$status,['Cache-Control'=>'private, no-store']);
    }
}
