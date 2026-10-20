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
    public function __construct(string $appName, IRequest $request, private AuthorDirectoryService $authors, private \OCA\Library\Service\AuthorAssignmentService $assignments, private IUserSession $session, private LoggerInterface $logger, private \OCA\Library\Service\AuthorStorageService $storage, private \OCA\Library\Service\AuthorPhotoService $photos, private \OCA\Library\Service\ManualCoverUploadService $uploads) { parent::__construct($appName, $request); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): JSONResponse {
        return $this->respond(fn($uid) => $this->authors->directory($uid, $this->text('search'), $this->integer('page', 1), $this->request->getParam('unused', '0') === '1', $this->text('sort') ?: 'surname', $this->request->getParam('previews', '0') === '1'));
    }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function show(int $authorId): JSONResponse {
        return $this->respond(fn($uid) => $this->authors->page($uid, $authorId, $this->integer('page', 1), $this->text('search'), $this->text('sort') ?: 'title'));
    }
    #[NoAdminRequired]
    public function update(int $authorId): JSONResponse {
        return $this->respond(function ($uid) use ($authorId) {
            $fields = [];
            foreach (['display_name','sort_name','given_name','family_name'] as $field) $fields[$field] = $this->text($field);
            $this->authors->profile($uid, $authorId); // Authorize before decoding an upload.
            if ($this->request->getParam('biography', null) !== null) $fields['biography'] = $this->text('biography');
            $upload = $_FILES['photo'] ?? null;
            $photo = is_array($upload) && ($upload['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE ? $this->uploads->validateUpload($upload)['content'] : null;
            $remove = $this->request->getParam('remove_photo', false);
            if (!in_array($remove, [false, true, '0', '1'], true)) throw new \InvalidArgumentException('remove_photo');
            $this->authors->update($uid, $authorId, $this->integer('revision'), $fields, $photo, $remove === true || $remove === '1');
            return $this->authors->page($uid, $authorId);
        });
    }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function photo(int $authorId): \OCP\AppFramework\Http\DataDownloadResponse|JSONResponse {
        $user = $this->session->getUser();
        $headers = ['Cache-Control' => 'private, no-store', 'X-Content-Type-Options' => 'nosniff'];
        if ($user === null) return new JSONResponse(['error' => 'unauthenticated'], 401, $headers);
        try {
            $author = $this->authors->profile($user->getUID(), $authorId);
            if ($author['photo_key'] === null) throw new \OutOfBoundsException('photo');
            $response = new \OCP\AppFramework\Http\DataDownloadResponse($this->photos->get($user->getUID(), $author['photo_key']), 'author.jpg', 'image/jpeg');
            foreach ($headers as $key => $value) $response->addHeader($key, $value);
            $response->addHeader('Content-Disposition', 'inline; filename="author.jpg"');
            return $response;
        } catch (\OutOfBoundsException|\OCP\Files\NotFoundException) { return new JSONResponse(['error' => 'not_found'], 404, $headers); }
    }
    #[NoAdminRequired]
    public function create(): JSONResponse { return $this->respond(fn($uid) => $this->authors->create($uid, $this->text('name'))); }
    #[NoAdminRequired]
    public function removeUnused(int $authorId): JSONResponse { return $this->respond(function ($uid) use ($authorId) {
        $this->authors->removeUnused($uid, $authorId, $this->integer('revision'));
        return ['removed' => true];
    }); }
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
    #[NoCSRFRequired]
    public function tasks(): JSONResponse { return $this->respond(fn($uid) => $this->assignments->tasks($uid)); }
    #[NoAdminRequired]
    public function cancelTask(string $taskId): JSONResponse { return $this->respond(function ($uid) use ($taskId) {
        $this->assignments->cancelTask($uid, $taskId);
        return ['cancelled' => true];
    }); }
    #[NoAdminRequired]
    public function undo(string $operationId): JSONResponse {
        return $this->respond(fn($uid) => $this->assignments->undo($uid, $operationId));
    }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function conflicts(): JSONResponse { return $this->respond(fn($uid) => $this->storage->conflicts($uid, $this->integer('page', 1))); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function conflict(int $itemId): JSONResponse { return $this->respond(fn($uid) => $this->storage->previewConflict($uid, $itemId)); }
    #[NoAdminRequired]
    public function resolveConflict(int $itemId): JSONResponse {
        return $this->respond(function ($uid) use ($itemId) {
            $this->storage->resolveConflict($uid, $itemId, $this->text('choice'), $this->text('token'));
            return ['resolved' => true];
        });
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
        catch (\LengthException) { return new JSONResponse(['error'=>'author_operation_limit','limit'=>\OCA\Library\Service\AuthorAssignmentService::MAX_LARGE_BOOKS],413,$headers); }
        catch (\OCA\Library\Service\ManualCoverValidationException) { return new JSONResponse(['error'=>'invalid_photo'],422,$headers); }
        catch (\InvalidArgumentException) { return new JSONResponse(['error'=>'invalid_input'],422,$headers); }
        catch (\Throwable $e) { $this->logger->error('Library author operation failed',['exception'=>$e]); return new JSONResponse(['error'=>'operation_failed'],500,$headers); }
    }
}
