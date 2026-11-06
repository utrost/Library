<?php
declare(strict_types=1);
namespace OCA\Library\Settings;
use OCP\Settings\ISettings;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IURLGenerator;
use OCP\IConfig;
use OCP\IRequest;
use OCA\Library\Service\CoverThumbnailService;
final class Admin implements ISettings {
    public function __construct(private CoverThumbnailService $covers, private IURLGenerator $urls, private IConfig $config, private IRequest $request) {}
    public function getForm(): TemplateResponse {
        \OCP\Util::addStyle('library','style');
        \OCP\Util::addStyle('library', 'ui-contract');
        \OCP\Util::addScript('library','library-help');
        $result = $this->request->getParam('libraryProviderResult', '');
        $googleBooksKey = trim($this->config->getAppValue('library', 'google_books_api_key', ''));
        return new TemplateResponse('library','settings-admin', [
            'thumbnailSettings' => $this->covers->settings(),
            'saveUrl' => $this->urls->linkToRoute('library.thumbnail_settings.save'),
            'providerSaveUrl' => $this->urls->linkToRoute('library.provider_settings.save'),
            'providerResult' => in_array($result, ['saved', 'invalid-key', 'invalid-request'], true) ? $result : '',
            'openLibraryEnabled' => $this->config->getAppValue('library', 'openlibrary_lookup_enabled', 'yes') === 'yes',
            'googleBooksEnabled' => $this->config->getAppValue('library', 'google_books_lookup_enabled', 'yes') === 'yes',
            'googleBooksKeyConfigured' => $googleBooksKey !== '' && strlen($googleBooksKey) <= 256 && preg_match('/\A[A-Za-z0-9_-]+\z/', $googleBooksKey) === 1,
        ]);
    }
    public function getSection(): string { return 'library'; }
    public function getPriority(): int { return 50; }
}
