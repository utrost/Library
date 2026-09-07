from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_package_exposes_vue_browser_smoke_script():
    package = (ROOT / "package.json").read_text()
    assert '"smoke:vue"' in package
    assert "scripts/smoke-vue-page.mjs" in package

    smoke = ROOT / "scripts" / "smoke-vue-page.mjs"
    assert smoke.exists()
    text = smoke.read_text()
    assert "initial-state-library-catalogue" in text
    assert "library-cover-card" in text
    assert "library-main\\.mjs" in text
    assert "library-vue\\.css" in text
    assert "process.env" in text
    assert "temp_token_remaining" in text
    assert "user:add-app-password" in text
    assert "user:auth-tokens:delete" in text


def test_vue_component_css_is_built_to_nextcloud_css_asset_and_loaded():
    config = (ROOT / "vite.config.js").read_text()
    build_script = (ROOT / "scripts" / "build-vue.mjs").read_text()
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    assert "library-vue.css" in config
    assert "cssDir = 'css'" in build_script
    assert "copied_nextcloud_vue_assets=true" in build_script
    assert "Util::addStyle(Application::APP_ID, 'library-vue');" in controller
    assert (ROOT / "css" / "library-vue.css").exists()


def test_built_vue_bundle_is_browser_safe_without_node_process_global():
    bundle = ROOT / "js" / "library-main.mjs"
    assert bundle.exists()
    text = bundle.read_text()
    assert "process.env" not in text


def test_catalogue_uses_plain_fail_safe_controls_until_browser_harness_covers_nextcloud_vue_components():
    app = (ROOT / "src" / "App.vue").read_text()
    assert "@nextcloud/vue" not in app
    assert "NcButton" not in app
    assert "NcEmptyContent" not in app
    assert "button type=\"submit\"" in app
    assert "No catalogue items match" in app
    assert "Apply filters" in app
    assert "Library settings" in app


def test_vue_page_stays_catalogue_first_on_mobile():
    app = (ROOT / "src" / "App.vue").read_text()
    stylesheet = (ROOT / "css" / "style.css").read_text()

    wrapper_index = app.index('class="library-vue-catalogue"')
    panel_index = app.index('class="library-panel"')
    toolbar_index = app.index('class="library-catalogue-toolbar"')
    assert wrapper_index < panel_index < toolbar_index
    assert 'class="library-catalogue-toolbar"' in app
    assert 'class="library-settings-link"' not in app
    assert 'without importing or owning the files' not in app

    assert '@media (max-width: 700px)' in stylesheet
    assert '.library-hero {' in stylesheet
    assert 'grid-template-columns: 1fr;' in stylesheet
    assert 'padding: 16px;' in stylesheet
    assert '.library-hero h1,' in stylesheet
    assert '.library-hero h2 {' in stylesheet
    assert 'font-size: 28px;' in stylesheet
