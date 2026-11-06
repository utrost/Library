<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\IConfig;
use OCP\IRequest;
use OCP\IURLGenerator;

/** Administrator and CSRF checks use Nextcloud's controller defaults. */
final class ProviderSettingsController extends Controller {
    public function __construct(string $appName, IRequest $request, private IConfig $config, private IURLGenerator $urls) {
        parent::__construct($appName, $request);
    }

    public function save(): RedirectResponse {
        $openLibrary = $this->request->getParam('openLibraryEnabled');
        $googleBooks = $this->request->getParam('googleBooksEnabled');
        $removeKey = $this->request->getParam('removeGoogleBooksKey');
        $submittedKey = $this->request->getParam('googleBooksApiKey', '');
        foreach ([$openLibrary, $googleBooks, $removeKey] as $checkbox) {
            if ($checkbox !== null && $checkbox !== '1') {
                return $this->redirectWithResult('invalid-request');
            }
        }
        if (!is_string($submittedKey)) {
            return $this->redirectWithResult('invalid-request');
        }
        $key = trim($submittedKey);
        if (strlen($key) > 256 || ($key !== '' && preg_match('/\A[A-Za-z0-9_-]+\z/', $key) !== 1)) {
            return $this->redirectWithResult('invalid-key');
        }
        if ($removeKey === '1' && $key !== '') {
            return $this->redirectWithResult('invalid-request');
        }

        $this->config->setAppValue('library', 'openlibrary_lookup_enabled', $openLibrary === '1' ? 'yes' : 'no');
        $this->config->setAppValue('library', 'google_books_lookup_enabled', $googleBooks === '1' ? 'yes' : 'no');
        if ($removeKey === '1') {
            $this->config->deleteAppValue('library', 'google_books_api_key');
        } elseif ($key !== '') {
            $this->config->setAppValue('library', 'google_books_api_key', $key);
        }
        return $this->redirectWithResult('saved');
    }

    private function redirectWithResult(string $result): RedirectResponse {
        return new RedirectResponse($this->urls->linkToRoute('settings.AdminSettings.index', [
            'section' => 'library',
            'libraryProviderResult' => $result,
        ]) . '#library-provider-settings');
    }
}
