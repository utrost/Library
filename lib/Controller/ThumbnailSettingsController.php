<?php
declare(strict_types=1);
namespace OCA\Library\Controller;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\RedirectResponse;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCA\Library\Service\CoverThumbnailService;
/** Admin and CSRF enforcement use the framework defaults. */
final class ThumbnailSettingsController extends Controller {
    public function __construct(string $appName, IRequest $request, private CoverThumbnailService $covers, private IURLGenerator $urls) { parent::__construct($appName,$request); }
    public function save(): JSONResponse|RedirectResponse {
        $budget = $this->request->getParam('budgetMiB'); $hours = $this->request->getParam('retentionHours');
        if (!is_string($budget) || !ctype_digit($budget) || !is_string($hours) || !ctype_digit($hours)) return new JSONResponse(['error'=>'invalid_thumbnail_settings'],422);
        try { $this->covers->configure((int)$budget,(int)$hours); }
        catch (\InvalidArgumentException) { return new JSONResponse(['error'=>'invalid_thumbnail_settings'],422); }
        return new RedirectResponse($this->urls->linkToRoute('settings.AdminSettings.index',['section'=>'library']));
    }
}
