<?php
declare(strict_types=1);
namespace OCA\Library\Controller;
use OCA\Library\Service\ScheduledScanService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\IRequest;
use OCP\IUserSession;
use OCP\IURLGenerator;
final class ScanScheduleController extends Controller {
    public function __construct(string $appName, IRequest $request, private IUserSession $session, private ScheduledScanService $schedules, private IURLGenerator $urls) { parent::__construct($appName, $request); }
    #[NoAdminRequired]
    public function save(): RedirectResponse|JSONResponse {
        $uid = $this->session->getUser()?->getUID();
        if ($uid === null) return new JSONResponse([], 401);
        $interval = $this->request->getParam('interval');
        if (!is_string($interval) || !in_array($interval, ['0', '3600', '21600', '86400'], true)) return new JSONResponse(['error' => 'invalid_scan_interval'], 422);
        $this->schedules->configure($uid, (int)$interval);
        return new RedirectResponse($this->urls->linkToRoute('settings.PersonalSettings.index', ['section' => 'library']));
    }
}
