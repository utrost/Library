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


def test_vue_smoke_retries_only_initial_catalogue_404_during_app_enable_cache_ttl():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "async function fetchInitialLibraryPage" in smoke
    assert "deadlineMs = 5000" in smoke
    assert "intervalMs = 200" in smoke
    assert "response.status !== 404" in smoke
    assert "Math.min(intervalMs, deadline - Date.now())" in smoke
    assert "const page = await fetchInitialLibraryPage(token)" in smoke
    assert "const page = await fetchText('/apps/library/', token)" not in smoke


def test_vue_component_css_is_built_to_nextcloud_css_asset_and_loaded():
    config = (ROOT / "vite.config.js").read_text()
    build_script = (ROOT / "scripts" / "build-vue.mjs").read_text()
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    assert "library-vue.css" in config
    assert "cssDir = 'css'" in build_script
    assert "versionedJsAssetName" in build_script
    assert "versionedCssAssetName" in build_script
    assert "copied_nextcloud_vue_assets=true" in build_script
    assert "private const VUE_SCRIPT_ASSET = 'library-main-0-1-0-alpha-165';" in controller
    assert "private const VUE_STYLE_ASSET = 'library-vue-0-1-0-alpha-165';" in controller
    assert "Util::addScript(Application::APP_ID, self::VUE_SCRIPT_ASSET);" in controller
    assert "Util::addStyle(Application::APP_ID, self::VUE_STYLE_ASSET);" in controller
    assert (ROOT / "css" / "library-vue.css").exists()
    assert (ROOT / "js" / "library-main-0-1-0-alpha-158.mjs").exists()
    assert (ROOT / "css" / "library-vue-0-1-0-alpha-158.css").exists()
    assert (ROOT / "js" / "library-main-0-1-0-alpha-151.mjs").exists()
    assert (ROOT / "css" / "library-vue-0-1-0-alpha-151.css").exists()
    assert (ROOT / "js" / "library-main-0-1-0-alpha-150.mjs").exists()
    assert (ROOT / "css" / "library-vue-0-1-0-alpha-150.css").exists()


def test_built_vue_bundle_is_browser_safe_without_node_process_global():
    bundle = ROOT / "js" / "library-main.mjs"
    assert bundle.exists()
    text = bundle.read_text()
    assert "process.env" not in text


def test_catalogue_uses_public_nextcloud_vue_shell_components_without_router():
    app = (ROOT / "src" / "App.vue").read_text()
    assert "from '@nextcloud/vue'" not in app
    for component in ("NcContent", "NcAppNavigation", "NcAppContent", "NcAppSidebar"):
        assert f"from '@nextcloud/vue/components/{component}'" in app
    assert "vue-router" not in app
    assert "NcButton" not in app
    assert "NcEmptyContent" not in app
    assert "button type=\"submit\"" in app
    assert "No matches for the current filters" in app
    assert "Apply filters" in app
    assert "Library settings" in app


def test_vue_page_stays_catalogue_first_on_mobile():
    app = (ROOT / "src" / "App.vue").read_text()
    stylesheet = (ROOT / "css" / "style.css").read_text()

    wrapper_index = app.index('class="library-vue-catalogue library-app"')
    panel_index = app.index('class="library-panel library-mobile-compact-chrome"')
    workspace_index = app.index('class="library-catalogue-workspace library-workspace-menubar"')
    heading_index = app.index('id="library-catalogue-heading"')
    assert wrapper_index < panel_index < workspace_index < heading_index
    assert 'class="library-catalogue-workspace library-workspace-menubar"' in app
    assert 'class="library-settings-link"' not in app
    assert 'without importing or owning the files' not in app

    assert '@media (max-width: 700px)' in stylesheet
    assert '.library-hero {' in stylesheet
    assert 'grid-template-columns: 1fr;' in stylesheet
    assert 'padding: 16px;' in stylesheet
    assert '.library-hero h1,' in stylesheet
    assert '.library-hero h2 {' in stylesheet
    assert 'font-size: 28px;' in stylesheet
