<?php

declare(strict_types=1);

namespace OCA\Library\Settings;

use OCA\Library\AppInfo\Application;
use OCP\IL10N;
use OCP\IURLGenerator;
use OCP\Settings\IIconSection;

class PersonalSection implements IIconSection {
    public function __construct(
        private IURLGenerator $urlGenerator,
        private IL10N $l10n,
    ) {
    }

    #[\Override]
    public function getIcon(): string {
        return $this->urlGenerator->imagePath(Application::APP_ID, 'app.svg');
    }

    #[\Override]
    public function getID(): string {
        return 'library';
    }

    #[\Override]
    public function getName(): string {
        return $this->l10n->t('Library');
    }

    #[\Override]
    public function getPriority(): int {
        return 20;
    }
}
