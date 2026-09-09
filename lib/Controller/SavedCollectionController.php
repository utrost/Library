<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\SavedCollectionService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;

final class SavedCollectionController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private SavedCollectionService $savedCollectionService,
        private IUserSession $userSession,
        private IURLGenerator $urlGenerator,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    public function save(): RedirectResponse {
        $user = $this->userSession->getUser();
        $filters = $this->decodeFilters((string)$this->request->getParam('savedCollectionFilters', '{}'));
        if ($user !== null) {
            $collection = $this->savedCollectionService->saveCollection(
                $user->getUID(),
                (string)$this->request->getParam('savedCollectionName', ''),
                $filters,
            );
            if ((int)($collection['id'] ?? 0) > 0) {
                return new RedirectResponse($this->catalogueUrl($collection['filters'] ?? []));
            }
        }
        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }

    #[NoAdminRequired]
    public function delete(int $collectionId): RedirectResponse {
        $user = $this->userSession->getUser();
        if ($user !== null) {
            $this->savedCollectionService->deleteCollection($user->getUID(), $collectionId);
        }
        return new RedirectResponse($this->urlGenerator->linkToRoute('library.page.index'));
    }

    /**
     * @return array<string, string>
     */
    private function decodeFilters(string $encoded): array {
        $decoded = json_decode($encoded, true);
        return is_array($decoded) ? $this->savedCollectionService->normalizeFilters($decoded) : [];
    }

    /**
     * @param array<string, string> $filters
     */
    private function catalogueUrl(array $filters): string {
        $query = http_build_query($filters);
        $base = $this->urlGenerator->linkToRoute('library.page.index');
        return $query === '' ? $base : $base . '?' . $query;
    }
}
