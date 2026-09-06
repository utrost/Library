from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_main_library_page_is_catalogue_first_without_admin_panels():
    template = (ROOT / "templates" / "main.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()

    catalogue_pos = vue.index('aria-labelledby="library-catalogue-heading"')
    assert 'aria-label="Library roots"' not in template
    assert 'aria-label="Indexed files"' not in template
    assert 'aria-label="Scan history"' not in template
    assert catalogue_pos < vue.index('library-cover-gallery')
    assert 'Library settings' in vue
    assert "settingsUrl" in vue


def test_css_makes_library_app_content_scrollable():
    css = (ROOT / "css" / "style.css").read_text()

    assert "#app-content.library-app-content" in css
    assert "height: 100%" in css
    assert "overflow-y: auto" in css
    assert "overflow-x: hidden" in css
    assert "padding: 0 24px 96px" in css


def test_personal_settings_classes_register_library_under_user_settings():
    personal = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    section = (ROOT / "lib" / "Settings" / "PersonalSection.php").read_text()

    assert "namespace OCA\\Library\\Settings;" in personal
    assert "class Personal implements ISettings" in personal
    assert "public function getSection(): string" in personal
    assert "return 'library';" in personal
    assert "return new TemplateResponse(Application::APP_ID, 'settings-personal'," in personal
    assert "class PersonalSection implements IIconSection" in section
    assert "public function getID(): string" in section
    assert "return 'library';" in section
    assert "Library" in section

    info = (ROOT / "appinfo" / "info.xml").read_text()
    assert "<settings>" in info
    assert "<personal>OCA\\Library\\Settings\\Personal</personal>" in info
    assert "<personal-section>OCA\\Library\\Settings\\PersonalSection</personal-section>" in info


def test_user_settings_template_contains_root_scan_and_history_admin_tools():
    settings = (ROOT / "templates" / "settings-personal.php").read_text()

    assert 'aria-labelledby="library-settings-heading"' in settings
    assert 'aria-labelledby="library-scan-progress-heading"' in settings
    assert 'aria-labelledby="library-scan-history-heading"' in settings
    assert 'aria-labelledby="library-indexed-files-heading"' in settings
    assert "data-library-scan-progress-url" in settings
    assert "Scan enabled roots" in settings
    assert "Save root" in settings


def test_page_controller_links_to_user_settings_and_no_longer_loads_admin_data():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "'settingsUrl' => $this->urlGenerator->getAbsoluteURL('/settings/user/library')" in page
    assert "'roots' =>" not in page
    assert "'files' =>" not in page
    assert "'latestScanJob' =>" not in page
    assert "'scanJobHistory' =>" not in page


def test_docs_name_catalogue_first_and_user_settings_admin():
    readme = (ROOT / "README.md").read_text().lower()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text().lower()

    assert "catalogue-first" in readme
    assert "/settings/user/library" in readme
    assert "catalogue-first" in roadmap
    assert "/settings/user/library" in roadmap
