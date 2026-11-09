<?php
declare(strict_types=1);
namespace OCA\Library\Controller;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\{IRequest,IUserSession};
use OCA\Library\Service\{ItemService,RootService,BookAccessService,BookNotesService,ChangeHistoryService,CurationInboxService,HomeDashboardService,CurationJobService};
use OCA\Library\Exception\MetadataConflictException;
final class CurationController extends Controller {
    public function __construct(string $appName,IRequest $request,private IUserSession $session,private ItemService $items,private BookAccessService $access,private BookNotesService $notes,private ChangeHistoryService $history,private CurationInboxService $inbox,private HomeDashboardService $home,private CurationJobService $jobs,private \OCP\IDBConnection $db,private \OCP\App\IAppManager $apps,private RootService $roots) { parent::__construct($appName,$request); }
    private function respond(callable $work): JSONResponse {
        $uid=$this->session->getUser()?->getUID();$headers=['Cache-Control'=>'private, no-store'];
        if ($uid===null) return new JSONResponse(['error'=>'not_found'],404,$headers);
        try { return new JSONResponse($work($uid),200,$headers); }
        catch (MetadataConflictException) { return new JSONResponse(['error'=>'changed'],409,$headers); }
        catch (\OutOfBoundsException|\OCP\Files\NotFoundException) { return new JSONResponse(['error'=>'not_found'],404,$headers); }
        catch (\OCP\Files\NotPermittedException) { return new JSONResponse(['error'=>'not_permitted'],403,$headers); }
        catch (\DomainException $e) { return new JSONResponse(['error'=>$e->getMessage()],409,$headers); }
        catch (\InvalidArgumentException|\LengthException) { return new JSONResponse(['error'=>'invalid_input'],400,$headers); }
    }
    private function text(string $key,int $limit=1024): string { $v=$this->request->getParam($key,'');if (!is_string($v) || strlen($v)>$limit) throw new \InvalidArgumentException();return $v; }
    private function list(string $key): array { $v=$this->request->getParam($key,[]);if (!is_array($v) || !array_is_list($v)) throw new \InvalidArgumentException();return $v; }
    #[NoAdminRequired]
    public function classifications(): JSONResponse { return $this->respond(function($uid) {
        $scheme=$this->text('scheme',16);$term=trim($this->text('query',220));
        if (!in_array($scheme,['','LCC','DDC','UDC','RVK','BK','ASB'],true)) throw new \InvalidArgumentException();
        if (mb_strlen($term)<2) return ['values'=>[]];
        $prefix=mb_strtolower(($scheme!=='' ? $scheme.': ' : '').$term);
        $pattern=str_replace(['!','%','_'],['!!','!%','!_'],$prefix).'%';
        $r=$this->db->executeQuery("SELECT DISTINCT facet_value FROM *PREFIX*library_item_facets WHERE user_id=? AND facet_type='classification' AND normalized_value LIKE ? ESCAPE '!' ORDER BY facet_value LIMIT 12",[$uid,$pattern]);
        try { return ['values'=>array_column($r->fetchAll(),'facet_value')]; } finally { $r->closeCursor(); }
    }); }
    #[NoAdminRequired]
    public function history(int $itemId): JSONResponse { return $this->respond(function($uid) use($itemId) { if (!$this->items->findItem($uid,$itemId)) throw new \OutOfBoundsException();return $this->history->page($uid,$itemId,(int)$this->request->getParam('before',0)); }); }
    #[NoAdminRequired]
    public function undo(int $itemId): JSONResponse { return $this->respond(function($uid) use($itemId) { $this->access->require($uid,$itemId);$this->history->undo($uid,$itemId,(int)$this->request->getParam('eventId',0),$this->items);return ['undone'=>true]; }); }
    #[NoAdminRequired]
    public function notes(int $itemId): JSONResponse { return $this->respond(function($uid) use($itemId) { return ['capabilities'=>$this->notes->capabilities($this->session->getUser(),$this->apps),'notes'=>match($this->text('action',16)) { 'create'=>$this->notes->create($uid,$itemId),'attach'=>$this->notes->attach($uid,$itemId,(int)$this->request->getParam('fileId',0)),'detach'=>$this->notes->detach($uid,$itemId,(int)$this->request->getParam('fileId',0)),default=>$this->notes->list($uid,$itemId) }]; }); }
    #[NoAdminRequired]
    public function noteFiles(): JSONResponse { return $this->respond(fn($uid)=>$this->notes->browse($uid,$this->text('path'))); }
    #[NoAdminRequired]
    public function inbox(): JSONResponse { return $this->respond(function($uid) {
        $page=$this->inbox->page($uid,(int)$this->request->getParam('before',0),$this->text('filter',16) ?: 'pending',$this->text('day',10),(int)$this->request->getParam('rootId',0));
        $page['roots']=array_map(static fn(array $root):array=>['id'=>(int)$root['id'],'label'=>$root['label'],'path'=>$root['path']],$this->roots->listRoots($uid));
        return $page;
    }); }
    #[NoAdminRequired]
    public function decide(int $itemId): JSONResponse { return $this->respond(function($uid) use($itemId) { $this->inbox->decide($uid,$itemId,$this->text('revision',64),$this->text('state',16));return ['saved'=>true]; }); }
    #[NoAdminRequired]
    public function dashboard(): JSONResponse { return $this->respond(function($uid) { if ($this->text('action',16)==='save') $this->home->save($uid,$this->list('widgets'),(int)$this->request->getParam('listId',0));return $this->home->data($uid); }); }
    #[NoAdminRequired]
    public function jobs(): JSONResponse { return $this->respond(fn($uid)=>['jobs'=>$this->jobs->list($uid)]); }
    #[NoAdminRequired]
    public function create(): JSONResponse { return $this->respond(function($uid) { $spec=$this->request->getParam('spec',[]);if (!is_array($spec)) throw new \InvalidArgumentException();return $this->jobs->create($uid,$this->list('ids'),$spec,$this->text('requestId',32)); }); }
    #[NoAdminRequired]
    public function show(string $id): JSONResponse { return $this->respond(fn($uid)=>$this->jobs->show($uid,$id,(int)$this->request->getParam('page',1))); }
    #[NoAdminRequired]
    public function control(string $id): JSONResponse { return $this->respond(fn($uid)=>$this->jobs->control($uid,$id,$this->text('action',16),(int)$this->request->getParam('itemId',0))); }
}
