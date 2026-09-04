<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\AppInfo\Application;
use OCA\Library\Reader\DefaultNextcloudFileProvider;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IRequest;
use OCP\Util;

class PageController extends Controller {
    private const READER_FIXTURE_FILE_ID = 82;

    public function __construct(
        string $appName,
        IRequest $request,
        private DefaultNextcloudFileProvider $readerProvider,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): TemplateResponse {
        Util::addStyle(Application::APP_ID, 'style');
        return new TemplateResponse(Application::APP_ID, 'main', [
            'fixtureOpenUrl' => $this->readerProvider->getOpenUrl(self::READER_FIXTURE_FILE_ID),
        ]);
    }
}
