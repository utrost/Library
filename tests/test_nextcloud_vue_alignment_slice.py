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


def test_catalogue_uses_nextcloud_vue_components_for_common_actions_and_empty_state():
    app = (ROOT / "src" / "App.vue").read_text()
    assert "@nextcloud/vue" in app
    assert "NcButton" in app
    assert "NcEmptyContent" in app
    assert "<NcButton" in app
    assert "<NcEmptyContent" in app
    assert "Library settings" in app
    assert "Apply filters" in app
    assert "No catalogue items match" in app


def test_vue_page_stays_catalogue_first_on_mobile():
    app = (ROOT / "src" / "App.vue").read_text()
    stylesheet = (ROOT / "css" / "style.css").read_text()

    hero_index = app.index('class="library-hero"')
    panel_index = app.index('class="library-panel"')
    assert hero_index < panel_index
    assert 'class="library-hero-actions"' in app
    assert 'class="library-settings-link"' not in app
    assert 'without importing or owning the files' not in app

    assert '@media (max-width: 700px)' in stylesheet
    assert '.library-hero {' in stylesheet
    assert 'grid-template-columns: 1fr;' in stylesheet
    assert 'padding: 16px;' in stylesheet
    assert '.library-hero h1 {' in stylesheet
    assert 'font-size: 28px;' in stylesheet
