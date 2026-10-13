<?php
declare(strict_types=1);
namespace OCA\Library\Controller;

use OCA\Library\Exception\ListConflictException;
use OCA\Library\Service\SeriesDirectoryService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\IUserSession;
use Psr\Log\LoggerInterface;

final class SeriesController extends Controller {
    public function __construct(string $appName, IRequest $request, private SeriesDirectoryService $series, private IUserSession $session, private LoggerInterface $logger) { parent::__construct($appName, $request); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): JSONResponse { return $this->respond(fn($uid) => $this->series->directory($uid, $this->text('search'), $this->integer('page', 1))); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function show(int $seriesId): JSONResponse { return $this->respond(fn($uid) => $this->series->show($uid, $seriesId, $this->integer('page', 1))); }
    #[NoAdminRequired]
    public function update(int $seriesId): JSONResponse { return $this->respond(function ($uid) use ($seriesId) {
        $this->series->update($uid, $seriesId, $this->integer('revision'), $this->text('name'), $this->text('description'));
        return $this->series->show($uid, $seriesId);
    }); }
    private function text(string $key): string { $v = $this->request->getParam($key, ''); if (!is_string($v)) throw new \InvalidArgumentException($key); return $v; }
    private function integer(string $key, ?int $default = null): int { $v = $this->request->getParam($key, $default); if ((!is_string($v) && !is_int($v)) || preg_match('/^[1-9][0-9]{0,8}$/D', (string)$v) !== 1) throw new \InvalidArgumentException($key); return (int)$v; }
    private function respond(callable $operation): JSONResponse {
        $headers = ['Cache-Control' => 'private, no-store']; $user = $this->session->getUser();
        if ($user === null) return new JSONResponse(['error' => 'unauthenticated'], 401, $headers);
        try { return new JSONResponse($operation($user->getUID()), 200, $headers); }
        catch (ListConflictException) { return new JSONResponse(['error' => 'conflict'], 409, $headers); }
        catch (\OutOfBoundsException) { return new JSONResponse(['error' => 'not_found'], 404, $headers); }
        catch (\InvalidArgumentException) { return new JSONResponse(['error' => 'invalid_input'], 422, $headers); }
        catch (\Throwable $error) { $this->logger->error('Library series operation failed', ['exception' => $error]); return new JSONResponse(['error' => 'operation_failed'], 500, $headers); }
    }
}
