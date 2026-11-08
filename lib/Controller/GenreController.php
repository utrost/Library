<?php
declare(strict_types=1);
namespace OCA\Library\Controller;

use OCA\Library\Service\GenreService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\IUserSession;
use Psr\Log\LoggerInterface;

final class GenreController extends Controller {
    public function __construct(string $appName, IRequest $request, private GenreService $genres, private IUserSession $session, private LoggerInterface $logger) { parent::__construct($appName, $request); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): JSONResponse { return $this->respond(function ($uid) {
        $result = $this->genres->directory($uid, $this->text('search'), $this->request->getParam('page') === null ? 1 : $this->positiveInt('page'), $this->text('sort') ?: 'name', $this->request->getParam('previews', '0') === '1');
        if ($this->request->getParam('selectedId') !== null) $result['selectedGenre'] = $this->genres->selected($uid, $this->positiveInt('selectedId'));
        return $result;
    }); }
    #[NoAdminRequired]
    public function update(int $genreId): JSONResponse { return $this->respond(function($uid) use($genreId) {
        $revision=$this->request->getParam('revision');$parent=$this->request->getParam('parentId');
        if (!is_int($revision) || $revision<0 || ($parent!==null && (!is_int($parent) || $parent<1))) throw new \InvalidArgumentException();
        if ($this->text('action')==='delete') { $this->genres->removeUnused($uid,$genreId,$revision);return ['deleted'=>true]; }
        return $this->genres->updateHierarchy($uid,$genreId,$this->text('name'),$parent,$revision);
    }); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function children(int $genreId): JSONResponse { return $this->respond(fn($uid)=>$this->genres->descendants($uid,$genreId)); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function starters(): JSONResponse { return $this->respond(fn($uid)=>['entries'=>\OCA\Library\Service\GenreVocabulary::all()]); }
    #[NoAdminRequired]
    public function addStarter(): JSONResponse { return $this->respond(fn($uid)=>$this->genres->starter($uid,$this->text('key'))); }
    #[NoAdminRequired]
    public function create(): JSONResponse { return $this->respond(fn($uid) => $this->genres->create($uid, $this->text('name'))); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function suggestions(): JSONResponse { return $this->respond(fn($uid) => $this->genres->suggestions($uid)); }
    #[NoAdminRequired]
    public function decide(string $key): JSONResponse { return $this->respond(function ($uid) use ($key) {
        $action = $this->text('action');
        if ($action === 'ignore') return $this->genres->decide($uid, $key, null);
        if ($action !== 'map') throw new \InvalidArgumentException('action');
        return $this->genres->decide($uid, $key, $this->positiveInt('genreId'));
    }); }
    #[NoAdminRequired]
    public function assign(int $itemId): JSONResponse { return $this->respond(function ($uid) use ($itemId) {
        $action = $this->text('action');
        if (!in_array($action, ['add', 'remove'], true)) throw new \InvalidArgumentException('action');
        return $this->genres->assign($uid, $itemId, $this->positiveInt('genreId'), $action === 'add');
    }); }
    #[NoAdminRequired]
    public function discover(): JSONResponse { return $this->respond(fn($uid) => ['processed' => $this->genres->discover($uid, 300)]); }
    #[NoAdminRequired]
    public function apply(): JSONResponse { return $this->respond(fn($uid) => ['applied' => $this->genres->applyMapped($uid, 300)]); }
    private function text(string $key): string { $value = $this->request->getParam($key, ''); if (!is_string($value)) throw new \InvalidArgumentException($key); return $value; }
    private function positiveInt(string $key): int { $value = $this->request->getParam($key); if ((!is_int($value) && !is_string($value)) || preg_match('/^[1-9][0-9]{0,8}$/D', (string)$value) !== 1) throw new \InvalidArgumentException($key); return (int)$value; }
    private function respond(callable $action): JSONResponse {
        $headers = ['Cache-Control' => 'private, no-store'];
        $user = $this->session->getUser();
        if ($user === null) return new JSONResponse(['error' => 'unauthenticated'], 401, $headers);
        try { return new JSONResponse($action($user->getUID()), 200, $headers); }
        catch (\DomainException $error) { return new JSONResponse(['error'=>in_array($error->getMessage(),['tree_changed','genre_in_use'],true) ? $error->getMessage() : 'changed_or_in_use'],409,$headers); }
        catch (\LengthException) { return new JSONResponse(['error'=>'subtree_limit'],422,$headers); }
        catch (\InvalidArgumentException $error) { return new JSONResponse(['error' => in_array($error->getMessage(),['genre_cycle','genre_depth','duplicate_genre'],true) ? $error->getMessage() : 'invalid_input'], 422, $headers); }
        catch (\OutOfBoundsException) { return new JSONResponse(['error' => 'not_found'], 404, $headers); }
        catch (\Throwable $error) { $this->logger->error('Library genre operation failed', ['exception' => $error]); return new JSONResponse(['error' => 'operation_failed'], 500, $headers); }
    }
}
