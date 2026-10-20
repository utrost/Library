<?php
declare(strict_types=1);
namespace OCA\Library\Controller;

use OCA\Library\Service\BookFileDeletionService;
use OCA\Library\Service\SecurityAuditLogger;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\Files\NotPermittedException;
use OCP\IRequest;
use OCP\IUserSession;

final class BookDeletionController extends Controller {
    public function __construct(string $appName, IRequest $request, private IUserSession $session,
        private BookFileDeletionService $deletion, private SecurityAuditLogger $audit) { parent::__construct($appName, $request); }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function preview(int $itemId): JSONResponse { return $this->respond($itemId, false); }
    #[NoAdminRequired]
    public function delete(int $itemId): JSONResponse { return $this->respond($itemId, true); }
    private function respond(int $id, bool $execute): JSONResponse {
        $headers = ['Cache-Control' => 'private, no-store'];
        $uid = $this->session->getUser()?->getUID();
        if ($uid === null) return new JSONResponse(['error' => 'not_found'], 404, $headers);
        try {
            $token = $this->request->getParam('token', '');
            if (!is_string($token)) throw new \DomainException();
            return new JSONResponse($execute ? $this->deletion->delete($uid, $id, $token) : $this->deletion->preview($uid, $id), 200, $headers);
        } catch (\OutOfBoundsException|\OCP\Files\NotFoundException) { $status = 404; $error = 'not_found';
        } catch (NotPermittedException) { $status = 403; $error = 'not_permitted';
        } catch (\DomainException|\OCP\Lock\LockedException) { $status = 409; $error = 'confirmation_changed';
        } catch (\Throwable) { $status = 500; $error = 'delete_failed'; }
        $this->audit->warning('book_file_delete_failed', $uid, $execute ? 'delete' : 'preview', 'item', 'failure', ['target_id' => $id, 'http_status' => $status, 'reason' => $error]);
        return new JSONResponse(['error' => $error], $status, $headers);
    }
}
