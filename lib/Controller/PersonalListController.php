<?php
declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Exception\ListConflictException;
use OCA\Library\Service\PersonalListService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\IUserSession;
use Psr\Log\LoggerInterface;

final class PersonalListController extends Controller {
    public function __construct(string $appName, IRequest $request,
        private PersonalListService $lists, private IUserSession $userSession, private LoggerInterface $logger) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): JSONResponse {
        return $this->respond(fn (string $uid): array => ['lists' => $this->lists->lists($uid,
            $this->request->getParam('itemId') === null ? null : $this->integer('itemId'))]);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function show(int $listId): JSONResponse {
        return $this->respond(fn (string $uid): array => $this->lists->page($uid, $listId, $this->integer('page', 1)));
    }

    #[NoAdminRequired]
    public function create(): JSONResponse {
        return $this->respond(fn (string $uid): array => ['list' => $this->lists->create($uid, $this->text('name'), $this->text('description'))]);
    }

    #[NoAdminRequired]
    public function action(int $listId): JSONResponse {
        return $this->respond(function (string $uid) use ($listId): array {
            $revision = $this->integer('revision');
            $action = $this->text('action');
            $outcome = [];
            switch ($action) {
                case 'update':
                    $this->lists->update($uid, $listId, $revision, $this->text('name'), $this->text('description'));
                    break;
                case 'delete':
                    $this->lists->delete($uid, $listId, $revision);
                    return ['deleted' => true];
                case 'add':
                    $outcome = $this->lists->add($uid, $listId, $revision, $this->request->getParam('itemIds'));
                    break;
                case 'note':
                    $this->lists->note($uid, $listId, $revision, $this->integer('entryId'), $this->text('note'));
                    break;
                case 'remove':
                    $this->lists->remove($uid, $listId, $revision, $this->integer('entryId'));
                    break;
                case 'move':
                    $this->lists->move($uid, $listId, $revision, $this->integer('entryId'),
                        $this->request->getParam('beforeId') === null ? null : $this->integer('beforeId'), $this->text('direction'));
                    break;
                default:
                    throw new \InvalidArgumentException('action');
            }
            return ['revision' => $revision + 1, ...$outcome];
        });
    }

    private function respond(callable $operation): JSONResponse {
        $headers = ['Cache-Control' => 'private, no-store'];
        $user = $this->userSession->getUser();
        if ($user === null) return new JSONResponse(['error' => 'unauthenticated'], 401, $headers);
        try {
            return new JSONResponse($operation($user->getUID()), 200, $headers);
        } catch (ListConflictException $e) {
            return new JSONResponse(['error' => 'conflict'], 409, $headers);
        } catch (\OutOfBoundsException $e) {
            return new JSONResponse(['error' => 'not_found'], 404, $headers);
        } catch (\InvalidArgumentException $e) {
            return new JSONResponse(['error' => 'invalid_input'], 422, $headers);
        } catch (\Throwable $e) {
            $this->logger->error('Personal list operation failed', ['app' => 'library', 'exception' => $e]);
            return new JSONResponse(['error' => 'operation_failed'], 500, $headers);
        }
    }

    private function text(string $name): string {
        $value = $this->request->getParam($name, '');
        if (!is_string($value)) throw new \InvalidArgumentException($name);
        return $value;
    }

    private function integer(string $name, ?int $default = null): int {
        $value = $this->request->getParam($name, $default);
        if ((!is_int($value) && !is_string($value)) || !preg_match('/^[1-9][0-9]{0,9}$/D', (string)$value)
            || (int)$value > 2147483647) throw new \InvalidArgumentException($name);
        return (int)$value;
    }
}
