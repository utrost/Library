<?php
declare(strict_types=1);
namespace OCA\Library\Controller;

use OCA\Library\Service\MetadataValueMappingService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;
use OCP\Util;

final class ValueMappingController extends Controller {
    public function __construct(string $appName, IRequest $request, private MetadataValueMappingService $mappings,
        private IUserSession $session, private IURLGenerator $urls) {
        parent::__construct($appName, $request);
    }
    private function uid(): string {
        $user = $this->session->getUser();
        if ($user === null) throw new \OutOfBoundsException('user');
        return $user->getUID();
    }
    private function field(): string {
        $field = (string)$this->request->getParam('field', 'publisher');
        if (!in_array($field, ['publisher','subject'], true)) throw new \InvalidArgumentException('field');
        return $field;
    }
    private function page(?array $preview = null, string $message = ''): TemplateResponse {
        Util::addStyle('library', 'style');
        \OCP\Util::addStyle('library', 'ui-contract');
        $uid = $this->uid();
        $field = $this->field();
        $search = trim((string)$this->request->getParam('search', ''));
        return new TemplateResponse('library', 'value-mappings', [
            'field'=>$field, 'search'=>$search,
            'selectedSource' => trim((string)$this->request->getParam('source', '')),
            'values'=>mb_strlen($search) >= 3 ? $this->mappings->popularValues($uid, $field, $search) : [],
            'mappings'=>$this->mappings->mappings($uid, $field),
            'preview'=>$preview, 'message'=>$message,
            'baseUrl'=>$this->urls->linkToRoute('library.value_mapping.index'),
            'catalogueUrl'=>$this->urls->linkToRoute('library.page.index'),
            'languageUrl'=>$this->urls->linkToRoute('library.language_review.index'),
            'valueMappingsUrl'=>$this->urls->linkToRoute('library.value_mapping.index'),
            'settingsUrl'=>$this->urls->linkToRoute('settings.PersonalSettings.index', ['section' => 'library']),
            'requesttoken'=>Util::callRegister(),
        ]);
    }
    private function redirect(string $field, string $message): RedirectResponse {
        return new RedirectResponse($this->urls->linkToRoute('library.value_mapping.index') . '?field=' . rawurlencode($field) . '&message=' . rawurlencode($message));
    }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): TemplateResponse|RedirectResponse {
        try { return $this->page(null, (string)$this->request->getParam('message', '')); }
        catch (\InvalidArgumentException) { return $this->redirect('publisher', 'invalid'); }
    }
    #[NoAdminRequired]
    public function preview(): TemplateResponse|RedirectResponse {
        try {
            $preview = $this->mappings->preview($this->uid(), $this->field(),
                (string)$this->request->getParam('source', ''), (string)$this->request->getParam('target', ''));
            return $this->page($preview);
        } catch (\InvalidArgumentException) { return $this->redirect('publisher', 'invalid'); }
    }
    #[NoAdminRequired]
    public function save(): RedirectResponse {
        try {
            $field = $this->field();
            $this->mappings->save($this->uid(), $field,
                (string)$this->request->getParam('source', ''), (string)$this->request->getParam('target', ''));
            return $this->redirect($field, 'saved');
        } catch (\InvalidArgumentException|\OutOfBoundsException) { return $this->redirect('publisher', 'invalid'); }
    }
    #[NoAdminRequired]
    public function remove(string $key): RedirectResponse {
        try {
            $field = $this->field();
            $this->mappings->remove($this->uid(), $field, $key);
            return $this->redirect($field, 'removed');
        } catch (\InvalidArgumentException) { return $this->redirect('publisher', 'invalid'); }
    }
}
