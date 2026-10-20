<?php
declare(strict_types=1);
namespace OCA\Library\Controller;

use OCA\Library\Exception\ListConflictException;
use OCA\Library\Service\SeriesDirectoryService;
use OCA\Library\Service\SeriesAssignmentService;
use OCA\Library\Service\SeriesStorageService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\IUserSession;
use Psr\Log\LoggerInterface;

final class SeriesController extends Controller {
    public function __construct(string $appName, IRequest $request, private SeriesDirectoryService $series, private SeriesAssignmentService $assignments, private SeriesStorageService $storage, private IUserSession $session, private LoggerInterface $logger) { parent::__construct($appName, $request); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): JSONResponse { return $this->respond(fn($uid) => $this->series->directory($uid, $this->text('search'), $this->integer('page', 1), $this->text('sort') ?: 'name', $this->request->getParam('previews', '0') === '1')); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function show(int $seriesId): JSONResponse { return $this->respond(fn($uid) => $this->series->show($uid, $seriesId, $this->integer('page', 1))); }
    #[NoAdminRequired]
    public function update(int $seriesId): JSONResponse { return $this->respond(function ($uid) use ($seriesId) {
        $this->series->update($uid, $seriesId, $this->integer('revision'), $this->text('name'), $this->text('description'));
        return $this->series->show($uid, $seriesId);
    }); }
    #[NoAdminRequired]
    public function create(): JSONResponse { return $this->respond(fn($uid) => $this->series->show($uid, $this->storage->create($uid, $this->text('name')))); }
    #[NoAdminRequired]
    public function previewItem(int $itemId): JSONResponse { return $this->respond(fn($uid) => $this->assignments->previewItem($uid, $itemId, $this->integer('target'))); }
    #[NoAdminRequired]
    public function assignItem(int $itemId): JSONResponse { return $this->respond(fn($uid) => $this->assignments->applyItem($uid, $itemId, $this->integer('target'), $this->text('token'))); }
    #[NoAdminRequired]
    public function preview(int $seriesId): JSONResponse { return $this->respond(fn($uid) => $this->assignments->preview($uid, $seriesId, $this->integer('target'), $this->selected())); }
    #[NoAdminRequired]
    public function assign(int $seriesId): JSONResponse { return $this->respond(fn($uid) => $this->assignments->apply($uid, $seriesId, $this->integer('target'), $this->selected(), $this->text('token'))); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function history(): JSONResponse { return $this->respond(fn($uid) => $this->assignments->history($uid)); }
    #[NoAdminRequired]
    public function undo(string $operationId): JSONResponse { return $this->respond(function ($uid) use ($operationId) { $this->assignments->undo($uid, $operationId); return ['undone' => true]; }); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function conflicts(): JSONResponse { return $this->respond(fn($uid) => $this->storage->conflicts($uid, $this->integer('page', 1))); }
    #[NoAdminRequired]
    public function resolveConflict(int $itemId): JSONResponse { return $this->respond(function ($uid) use ($itemId) {
        $this->storage->resolveConflict($uid, $itemId, $this->text('choice'), $this->text('token'));
        return ['resolved' => true];
    }); }
    private function selected(): array { $ids = $this->request->getParam('items', []); if (!is_array($ids) || !array_is_list($ids)) throw new \InvalidArgumentException('items'); return $ids; }
    private function text(string $key): string { $v = $this->request->getParam($key, ''); if (!is_string($v)) throw new \InvalidArgumentException($key); return $v; }
    private function integer(string $key, ?int $default = null): int { $v = $this->request->getParam($key, $default); if ((!is_string($v) && !is_int($v)) || preg_match('/^[1-9][0-9]{0,8}$/D', (string)$v) !== 1) throw new \InvalidArgumentException($key); return (int)$v; }
    private function respond(callable $operation): JSONResponse {
        $headers = ['Cache-Control' => 'private, no-store']; $user = $this->session->getUser();
        if ($user === null) return new JSONResponse(['error' => 'unauthenticated'], 401, $headers);
        try { return new JSONResponse($operation($user->getUID()), 200, $headers); }
        catch (ListConflictException) { return new JSONResponse(['error' => 'conflict'], 409, $headers); }
        catch (\OutOfBoundsException) { return new JSONResponse(['error' => 'not_found'], 404, $headers); }
        catch (\LengthException) { return new JSONResponse(['error' => 'series_operation_limit', 'limit' => SeriesAssignmentService::MAX_BOOKS], 413, $headers); }
        catch (\InvalidArgumentException) { return new JSONResponse(['error' => 'invalid_input'], 422, $headers); }
        catch (\Throwable $error) { $this->logger->error('Library series operation failed', ['exception' => $error]); return new JSONResponse(['error' => 'operation_failed'], 500, $headers); }
    }
}
