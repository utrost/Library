<?php
declare(strict_types=1);
namespace OCA\Library\Controller;

use OCA\Library\Service\AuthorDirectoryService;
use OCA\Library\Exception\ListConflictException;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\IUserSession;
use Psr\Log\LoggerInterface;

final class AuthorController extends Controller {
    public function __construct(string $appName, IRequest $request, private AuthorDirectoryService $authors, private \OCA\Library\Service\AuthorAssignmentService $assignments, private IUserSession $session, private LoggerInterface $logger) { parent::__construct($appName, $request); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): JSONResponse {
        return $this->respond(fn($uid) => $this->authors->directory($uid, $this->text('search'), $this->integer('page', 1), $this->request->getParam('unused', '0') === '1'));
    }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function show(int $authorId): JSONResponse {
        return $this->respond(fn($uid) => $this->authors->page($uid, $authorId, $this->integer('page', 1)));
    }
    #[NoAdminRequired]
    public function update(int $authorId): JSONResponse {
        return $this->respond(function ($uid) use ($authorId) {
            $fields = [];
            foreach (['display_name','sort_name','given_name','family_name'] as $field) $fields[$field] = $this->text($field);
            $this->authors->update($uid, $authorId, $this->integer('revision'), $fields);
            return $this->authors->page($uid, $authorId);
        });
    }
    #[NoAdminRequired]
    public function create(): JSONResponse { return $this->respond(fn($uid) => $this->authors->create($uid, $this->text('name'))); }
    #[NoAdminRequired]
    public function preview(int $authorId): JSONResponse {
        return $this->respond(fn($uid) => $this->assignments->preview($uid, $authorId, $this->integer('target'), $this->selected()));
    }
    #[NoAdminRequired]
    public function assign(int $authorId): JSONResponse {
        return $this->respond(fn($uid) => $this->assignments->apply($uid, $authorId, $this->integer('target'), $this->selected(), $this->text('token')));
    }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function history(): JSONResponse { return $this->respond(fn($uid) => $this->assignments->history($uid)); }
    #[NoAdminRequired]
    public function undo(string $operationId): JSONResponse {
        return $this->respond(function ($uid) use ($operationId) { $this->assignments->undo($uid, $operationId); return ['undone' => true]; });
    }
    private function selected(): array {
        $ids = $this->request->getParam('items', []);
        if (!is_array($ids) || !array_is_list($ids)) throw new \InvalidArgumentException('items');
        return $ids;
    }
    private function text(string $key): string { $v=$this->request->getParam($key,''); if (!is_string($v)) throw new \InvalidArgumentException($key); return $v; }
    private function integer(string $key, ?int $default=null): int {
        $v=$this->request->getParam($key,$default);
        if ((!is_string($v) && !is_int($v)) || !preg_match('/^[1-9][0-9]{0,8}$/D',(string)$v)) throw new \InvalidArgumentException($key);
        return (int)$v;
    }
    private function respond(callable $operation): JSONResponse {
        $headers=['Cache-Control'=>'private, no-store']; $user=$this->session->getUser();
        if ($user===null) return new JSONResponse(['error'=>'unauthenticated'],401,$headers);
        try { return new JSONResponse($operation($user->getUID()),200,$headers); }
        catch (\OCA\Library\Exception\AuthorMigrationPendingException) { return new JSONResponse(['error'=>'migration_pending'],503,$headers); }
        catch (ListConflictException) { return new JSONResponse(['error'=>'conflict'],409,$headers); }
        catch (\OutOfBoundsException) { return new JSONResponse(['error'=>'not_found'],404,$headers); }
        catch (\LengthException) { return new JSONResponse(['error'=>'author_operation_limit','limit'=>500],413,$headers); }
        catch (\InvalidArgumentException) { return new JSONResponse(['error'=>'invalid_input'],422,$headers); }
        catch (\Throwable $e) { $this->logger->error('Library author operation failed',['exception'=>$e]); return new JSONResponse(['error'=>'operation_failed'],500,$headers); }
    }
}
