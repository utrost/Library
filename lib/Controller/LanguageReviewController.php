<?php
declare(strict_types=1);
namespace OCA\Library\Controller;

use OCA\Library\Service\ItemService;
use OCA\Library\Service\LanguageReviewService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;
use OCP\Util;

final class LanguageReviewController extends Controller {
    public function __construct(string $appName, IRequest $request, private LanguageReviewService $review,
        private ItemService $items, private IUserSession $session, private IURLGenerator $urls) {
        parent::__construct($appName, $request);
    }
    private function uid(): string {
        $user = $this->session->getUser();
        if ($user === null) throw new \OutOfBoundsException('user');
        return $user->getUID();
    }
    private function redirect(string $message = ''): RedirectResponse {
        $url = $this->urls->linkToRoute('library.language_review.index');
        return new RedirectResponse($url . ($message !== '' ? '?message=' . rawurlencode($message) : ''));
    }
    #[NoAdminRequired]
    public function index(): TemplateResponse {
        return new TemplateResponse('library', 'language-review', [
            'review' => $this->review->suggestions($this->uid()),
            'message' => (string)$this->request->getParam('message', ''),
            'catalogueUrl' => $this->urls->linkToRoute('library.page.catalogue'),
            'baseUrl' => $this->urls->linkToRoute('library.language_review.index'),
            'requesttoken' => Util::callRegister(),
        ]);
    }
    #[NoAdminRequired]
    public function decide(string $key): RedirectResponse {
        $action = $this->request->getParam('action', '');
        try {
            if (!is_string($action) || !in_array($action, ['map','ignore'], true)) throw new \InvalidArgumentException('action');
            $codes = $this->request->getParam('codes', '');
            if ($action === 'map' && !is_string($codes)) throw new \InvalidArgumentException('codes');
            $this->review->decide($this->uid(), $key, $action === 'map' ? $codes : null);
            $this->review->applyMapped($this->items, $this->uid(), 100);
            return $this->redirect('saved');
        } catch (\InvalidArgumentException|\OutOfBoundsException) { return $this->redirect('invalid'); }
    }
    #[NoAdminRequired]
    public function discover(): RedirectResponse {
        $this->review->discover($this->items, $this->uid(), 300);
        return $this->redirect('discovered');
    }
    #[NoAdminRequired]
    public function apply(): RedirectResponse {
        $this->review->applyMapped($this->items, $this->uid(), 100);
        return $this->redirect('applied');
    }
}
