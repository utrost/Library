<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\ItemService;
use OCA\Library\Service\OpenLibraryLookupService;
use OCA\Library\Service\SecurityAuditLogger;
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
        private SecurityAuditLogger $audit,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    public function search(int $itemId): JSONResponse {
        $userId = $this->ownedItemUserId($itemId);
        if ($userId === null) {
            $this->audit->warning('library.metadata_lookup.search', $this->session->getUser()?->getUID() ?? '', 'search', 'item', 'not_authorized', ['target_id' => $itemId]);
            return $this->response(['error' => 'not_found'], 404);
        }
        try {
            $results = $this->lookup->search(
                $userId,
                $this->text('isbn'),
                $this->text('title'),
                $this->text('author'),
            );
            $this->audit->info('library.metadata_lookup.search', $userId, 'search', 'item', 'success', ['target_id' => $itemId, 'target_count' => count($results)]);
            return $this->response(['provider' => 'Open Library', 'results' => $results]);
        } catch (\InvalidArgumentException) {
            $this->audit->warning('library.metadata_lookup.search', $userId, 'search', 'item', 'rejected', ['target_id' => $itemId, 'reason' => 'invalid_query']);
            return $this->response(['error' => 'invalid_query'], 400);
        } catch (\RuntimeException $error) {
            $this->audit->warning('library.metadata_lookup.search', $userId, 'search', 'item', 'failure', ['target_id' => $itemId, 'reason' => $error->getMessage()]);
            if ($error->getMessage() === 'rate_limited') return $this->response(['error' => 'rate_limited'], 429);
            if ($error->getMessage() === 'provider_disabled') return $this->response(['error' => 'provider_disabled'], 503);
            return $this->response(['error' => 'provider_unavailable'], 502);
        }
    }

    #[NoAdminRequired]
    public function edition(int $itemId): JSONResponse {
        $userId = $this->ownedItemUserId($itemId);
        if ($userId === null) {
            $this->audit->warning('library.metadata_lookup.edition', $this->session->getUser()?->getUID() ?? '', 'view', 'item', 'not_authorized', ['target_id' => $itemId]);
            return $this->response(['error' => 'not_found'], 404);
        }
        try {
            $edition = $this->lookup->edition($userId, $this->text('editionId'));
            $this->audit->info('library.metadata_lookup.edition', $userId, 'view', 'item', 'success', ['target_id' => $itemId]);
            return $this->response($edition);
        } catch (\InvalidArgumentException) {
            $this->audit->warning('library.metadata_lookup.edition', $userId, 'view', 'item', 'rejected', ['target_id' => $itemId, 'reason' => 'invalid_edition']);
            return $this->response(['error' => 'invalid_edition'], 400);
        } catch (\RuntimeException $error) {
            $this->audit->warning('library.metadata_lookup.edition', $userId, 'view', 'item', 'failure', ['target_id' => $itemId, 'reason' => $error->getMessage()]);
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
