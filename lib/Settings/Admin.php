<?php
declare(strict_types=1);
namespace OCA\Library\Settings;
use OCP\Settings\ISettings;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IURLGenerator;
use OCA\Library\Service\CoverThumbnailService;
final class Admin implements ISettings {
    public function __construct(private CoverThumbnailService $covers, private IURLGenerator $urls) {}
    public function getForm(): TemplateResponse {
        \OCP\Util::addStyle('library','style');
        \OCP\Util::addScript('library','library-help');
        return new TemplateResponse('library','settings-admin', ['thumbnailSettings'=>$this->covers->settings(),
            'saveUrl'=>$this->urls->linkToRoute('library.thumbnail_settings.save')]);
    }
    public function getSection(): string { return 'library'; }
    public function getPriority(): int { return 50; }
}
