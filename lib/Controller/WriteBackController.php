<?php
declare(strict_types=1);
namespace OCA\Library\Controller;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\{JSONResponse,FileDisplayResponse};
use OCP\AppFramework\Http\Attribute\{NoAdminRequired,NoCSRFRequired};
use OCP\{IRequest,IUserSession};
use OCA\Library\Service\WriteBackService;
use OCA\Library\Exception\MetadataConflictException;
final class WriteBackController extends Controller {
    public function __construct(string $appName,IRequest $request,private IUserSession $session,private WriteBackService $writer) { parent::__construct($appName,$request); }
    private function respond(callable $work): JSONResponse {
        $uid=$this->session->getUser()?->getUID();$headers=['Cache-Control'=>'private, no-store'];
        if ($uid===null) return new JSONResponse(['error'=>'not_found'],404,$headers);
        try { return new JSONResponse($work($uid),200,$headers); }
        catch (MetadataConflictException) { return new JSONResponse(['error'=>'changed'],409,$headers); }
        catch (\OutOfBoundsException|\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException) { return new JSONResponse(['error'=>'not_available'],404,$headers); }
        catch (\OCA\Library\WriteBack\ComplexMetadataException $e) { return new JSONResponse(['error'=>'complex_metadata','field'=>$e->field],422,$headers); }
        catch (\DomainException $e) { return new JSONResponse(['error'=>$e->getMessage()],422,$headers); }
        catch (\InvalidArgumentException|\LengthException) { return new JSONResponse(['error'=>'invalid_or_large'],422,$headers); }
        catch (\OCP\Lock\LockedException) { return new JSONResponse(['error'=>'locked'],409,$headers); }
        catch (\Throwable) { return new JSONResponse(['error'=>'writeback_failed'],500,$headers); }
    }
    #[NoAdminRequired]
    public function preview(int $itemId): JSONResponse { return $this->respond(function($uid) use($itemId) { $fields=$this->request->getParam('fields',[]);if (!is_array($fields)) throw new \InvalidArgumentException();return $this->writer->preview($uid,$itemId,$fields); }); }
    #[NoAdminRequired]
    public function jobs(): JSONResponse { return $this->respond(fn($uid)=>['jobs'=>$this->writer->list($uid,0)]); }
    #[NoAdminRequired]
    public function action(string $id): JSONResponse { return $this->respond(function($uid) use($id) {
        return match($this->request->getParam('action')) {
            'apply'=>$this->writer->apply($uid,$id),'restore'=>$this->writer->apply($uid,$id,true),
            'delete'=>(function() use($uid,$id) { $this->writer->delete($uid,$id);return ['deleted'=>true]; })(),
            default=>throw new \InvalidArgumentException(),
        };
    }); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function backup(string $id): FileDisplayResponse|JSONResponse {
        $uid=$this->session->getUser()?->getUID();
        if ($uid===null) return new JSONResponse([],404,['Cache-Control'=>'private, no-store']);
        try { $response=new FileDisplayResponse($this->writer->backup($uid,$id),200,['Cache-Control'=>'private, no-store','Content-Type'=>'application/epub+zip','X-Content-Type-Options'=>'nosniff']);$response->addHeader('Content-Disposition','attachment; filename="original-book.epub"');return $response; }
        catch (\OutOfBoundsException|\OCP\Files\NotFoundException) { return new JSONResponse([],404,['Cache-Control'=>'private, no-store']); }
    }
}
