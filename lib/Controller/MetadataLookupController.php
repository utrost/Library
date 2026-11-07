<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\ItemService;
use OCA\Library\Service\GoogleBooksLookupService;
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
        private GoogleBooksLookupService $googleBooks,
        private SecurityAuditLogger $audit,
        private \OCA\Library\Service\MetadataBatchService $batches,
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
            $provider = $this->provider();
            $results = $provider->search(
                $userId,
                $this->text('isbn'),
                $this->text('title'),
                $this->text('author'),
            );
            $this->audit->info('library.metadata_lookup.search', $userId, 'search', 'item', 'success', ['target_id' => $itemId, 'target_count' => count($results)]);
            return $this->response(['provider' => $provider === $this->googleBooks ? 'Google Books' : 'Open Library', 'results' => $results]);
        } catch (\InvalidArgumentException) {
            $this->audit->warning('library.metadata_lookup.search', $userId, 'search', 'item', 'rejected', ['target_id' => $itemId, 'reason' => 'invalid_query']);
            return $this->response(['error' => 'invalid_query'], 400);
        } catch (\RuntimeException $error) {
            $this->audit->warning('library.metadata_lookup.search', $userId, 'search', 'item', 'failure', ['target_id' => $itemId, 'reason' => $error->getMessage()]);
            if ($error->getMessage() === 'rate_limited') return $this->response(['error' => 'rate_limited'], 429);
            if ($error->getMessage() === 'provider_disabled') return $this->response(['error' => 'provider_disabled'], 503);
            if ($error->getMessage() === 'provider_unconfigured') return $this->response(['error' => 'provider_unconfigured'], 503);
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
            $adapter=$this->provider();
            $edition = $this->batches->prepareEditor($userId,$itemId,$adapter===$this->googleBooks ? 'googlebooks' : 'openlibrary',$this->text('editionId'));
            $this->audit->info('library.metadata_lookup.edition', $userId, 'view', 'item', 'success', ['target_id' => $itemId]);
            return $this->response($edition);
        } catch (\InvalidArgumentException) {
            $this->audit->warning('library.metadata_lookup.edition', $userId, 'view', 'item', 'rejected', ['target_id' => $itemId, 'reason' => 'invalid_edition']);
            return $this->response(['error' => 'invalid_edition'], 400);
        } catch (\DomainException $error) {
            return $this->response(['error' => $error->getMessage() === 'job_limit' ? 'job_limit' : 'lookup_changed'], 409);
        } catch (\RuntimeException $error) {
            $this->audit->warning('library.metadata_lookup.edition', $userId, 'view', 'item', 'failure', ['target_id' => $itemId, 'reason' => $error->getMessage()]);
            if ($error->getMessage() === 'rate_limited') return $this->response(['error' => 'rate_limited'], 429);
            if ($error->getMessage() === 'provider_disabled') return $this->response(['error' => 'provider_disabled'], 503);
            if ($error->getMessage() === 'provider_unconfigured') return $this->response(['error' => 'provider_unconfigured'], 503);
            return $this->response(['error' => 'provider_unavailable'], 502);
        }
    }

    #[NoAdminRequired]
    public function receipts(int $itemId): JSONResponse {
        $uid=$this->ownedItemUserId($itemId);
        if ($uid===null) return $this->response(['error'=>'not_found'],404);
        return $this->response(['receipts'=>$this->batches->receiptsForItem($uid,$itemId)]);
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

    private function provider(): OpenLibraryLookupService|GoogleBooksLookupService {
        return match ($this->text('provider')) {
            '', 'openlibrary' => $this->lookup,
            'googlebooks' => $this->googleBooks,
            default => throw new \InvalidArgumentException('invalid_provider'),
        };
    }
}
