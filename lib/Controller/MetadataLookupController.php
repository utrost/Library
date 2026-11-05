<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\ItemService;
use OCA\Library\Service\OpenLibraryLookupService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\IUserSession;

final class MetadataLookupController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private IUserSession $session,
        private ItemService $items,
        private OpenLibraryLookupService $lookup,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    public function search(int $itemId): JSONResponse {
        $userId = $this->ownedItemUserId($itemId);
        if ($userId === null) {
            return $this->response(['error' => 'not_found'], 404);
        }
        try {
            $results = $this->lookup->search(
                $userId,
                $this->text('isbn'),
                $this->text('title'),
                $this->text('author'),
            );
            return $this->response(['provider' => 'Open Library', 'results' => $results]);
        } catch (\InvalidArgumentException) {
            return $this->response(['error' => 'invalid_query'], 400);
        } catch (\RuntimeException $error) {
            if ($error->getMessage() === 'rate_limited') return $this->response(['error' => 'rate_limited'], 429);
            if ($error->getMessage() === 'provider_disabled') return $this->response(['error' => 'provider_disabled'], 503);
            return $this->response(['error' => 'provider_unavailable'], 502);
        }
    }

    #[NoAdminRequired]
    public function edition(int $itemId): JSONResponse {
        $userId = $this->ownedItemUserId($itemId);
        if ($userId === null) {
            return $this->response(['error' => 'not_found'], 404);
        }
        try {
            return $this->response($this->lookup->edition($userId, $this->text('editionId')));
        } catch (\InvalidArgumentException) {
            return $this->response(['error' => 'invalid_edition'], 400);
        } catch (\RuntimeException $error) {
            if ($error->getMessage() === 'rate_limited') return $this->response(['error' => 'rate_limited'], 429);
            if ($error->getMessage() === 'provider_disabled') return $this->response(['error' => 'provider_disabled'], 503);
            return $this->response(['error' => 'provider_unavailable'], 502);
        }
    }

    private function ownedItemUserId(int $itemId): ?string {
        $userId = $this->session->getUser()?->getUID();
        return $userId !== null && $itemId > 0 && $this->items->findItem($userId, $itemId) !== null ? $userId : null;
    }

    private function response(array $body, int $status = 200): JSONResponse {
        return new JSONResponse($body, $status, ['Cache-Control' => 'private, no-store']);
    }

    private function text(string $name): string {
        $value = $this->request->getParam($name, '');
        if (!is_string($value)) {
            throw new \InvalidArgumentException($name);
        }
        return $value;
    }
}
