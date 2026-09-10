from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_package_uses_modern_nextcloud_vue_vite_stack():
    package = (ROOT / "package.json").read_text()

    assert '"type": "module"' in package
    assert '"build": "node scripts/build-vue.mjs"' in package
    assert '"vue"' in package
    assert '"@vitejs/plugin-vue"' in package
    assert '"@nextcloud/initial-state"' in package

    vite = (ROOT / "vite.config.js").read_text()
    assert "@vitejs/plugin-vue" in vite
    assert "library-main.mjs" in vite
    assert "outDir: 'build/vue'" in vite

    build_script = (ROOT / "scripts" / "build-vue.mjs").read_text()
    assert "jsDir = 'js'" in build_script
    assert "cssDir = 'css'" in build_script


def test_page_controller_provides_catalogue_initial_state_and_loads_vue_entrypoint():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "use OCP\\AppFramework\\Services\\IInitialState;" in controller
    assert "private IInitialState $initialState" in controller
    assert "$this->initialState->provideInitialState('catalogue'" in controller
    assert "private const VUE_SCRIPT_ASSET = 'library-main-0-1-0-alpha-149';" in controller
    assert "Util::addScript(Application::APP_ID, self::VUE_SCRIPT_ASSET);" in controller
    assert "'items' => $items" in controller
    assert "'settingsUrl' => $this->urlGenerator->getAbsoluteURL('/settings/user/library')" in controller


def test_main_template_is_vue_mount_only_inside_nextcloud_app_content():
    template = (ROOT / "templates" / "main.php").read_text()

    assert '<div id="app-content" class="library-app-content">' in template
    assert '<main id="library-app" class="library-app" tabindex="-1">' in template
    assert '<div id="library-vue-root" data-request-token="<?php p($_[\'requesttoken\'] ?? \'\'); ?>"></div>' in template
    assert 'class="library-cover-card"' not in template
    assert '<form method="get" class="library-filter-bar"' not in template


def test_vue_entrypoint_loads_nextcloud_initial_state_and_mounts_app():
    main = (ROOT / "src" / "main.js").read_text()

    assert "createApp" in main
    assert "loadState" in main
    assert "loadState('library', 'catalogue'" in main
    assert "document.querySelector('#library-vue-root')" in main
    assert ".mount(mountTarget)" in main
    assert "fallbackCatalogue" in main
    assert "Vue mount failed; rendering fallback catalogue" in main
    assert "library-filter-bar" in main
    assert "Search title / author" in main
    assert "All formats" in main
    assert "Apply filters" in main
    assert "Clear" in main


def test_vue_app_renders_catalogue_filters_covers_and_detail_links():
    app = (ROOT / "src" / "App.vue").read_text()

    assert "t('library', 'Library')" in app
    assert "Publication catalogue" not in app
    assert "library-filter-bar" in app
    assert "v-for=\"item in items\"" in app
    assert "library-cover-card" in app
    assert "library-cover-image" in app
    assert ":src=\"item.coverUrl\"" in app
    assert ":href=\"item.openUrl\"" in app
    assert "Show in Files" in app
    assert "Details" in app
    assert "Details / edit metadata" not in app
    assert "library-item-form" not in app
    assert "library-comment-form" not in app
    assert "Save metadata" not in app
    assert "Add Nextcloud tag" not in app
    assert "nextcloudTagEditor" not in app
    assert "Add Nextcloud comment" not in app

    detail = (ROOT / "templates" / "item-detail.php").read_text()
    assert "Add Nextcloud tag" in detail
    assert "nextcloudTagEditor" in detail
