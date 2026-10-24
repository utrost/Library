from release_metadata import CURRENT_VERSION, CURRENT_ASSET_VERSION
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
    assert f"private const VUE_SCRIPT_ASSET = 'library-main-{CURRENT_ASSET_VERSION}-compact-list-table-cover-96-fit-v8';" in controller
    assert f"private const VUE_STYLE_ASSET = 'library-vue-{CURRENT_ASSET_VERSION}-compact-list-table-cover-96-fit-v8';" in controller
    assert "Util::addScript(Application::APP_ID, self::VUE_SCRIPT_ASSET);" in controller
    assert "'items' => $items" in controller
    assert "'settingsUrl' => $this->urlGenerator->linkToRoute('settings.PersonalSettings.index', ['section' => 'library'])" in controller


def test_current_release_assets_exist():
    for rel in [
        "js/library-main.mjs",
        "css/library-vue.css",
        f"js/library-main-{CURRENT_ASSET_VERSION}-compact-list-table-cover-96-fit-v8.mjs",
        f"css/library-vue-{CURRENT_ASSET_VERSION}-compact-list-table-cover-96-fit-v8.css",
    ]:
        assert (ROOT / rel).is_file(), rel
    maintenance_assets = (ROOT / 'lib' / 'Service' / 'UiAssets.php').read_text()
    assert f"library-main-{CURRENT_ASSET_VERSION}-compact-list-table-cover-96-fit-v8" in maintenance_assets
    assert f"library-vue-{CURRENT_ASSET_VERSION}-compact-list-table-cover-96-fit-v8" in maintenance_assets


def test_indexed_sort_pages_keep_format_in_sync_with_scanned_files():
    migration = (ROOT / 'lib' / 'Migration' / 'Version000300Date20261024110000.php').read_text()
    service = (ROOT / 'lib' / 'Service' / 'ItemService.php').read_text()
    for index in ('pubdate_page', 'publication_page', 'lastopen_page', 'format_page'):
        assert f'library_items_usr_{index}' in migration
    assert "LOWER(f.extension)" in migration
    assert "'format_sort' => $qb->createNamedParameter(strtolower((string)($file['extension'] ?? '')))" in service
    assert "SET format_sort=? WHERE user_id=? AND id=?" in service
    assert "'format' => $qb->orderBy('i.format_sort', 'ASC')" in service
    assert "'i.format_sort'," in service
    assert "$sort !== 'title'" in service


def test_main_template_is_vue_mount_only_for_the_native_component_shell():
    template = (ROOT / "templates" / "main.php").read_text()

    assert '<div id="app-content" class="library-app-content">' not in template
    assert '<div id="library-vue-root"' in template
    assert 'lang="<?php p($_[\'language\']); ?>"' in template
    assert 'dir="<?php p($_[\'direction\']); ?>"' in template
    assert 'data-request-token="<?php p($_[\'requesttoken\'] ?? \'\'); ?>"></div>' in template
    assert 'class="library-cover-card"' not in template
    assert '<form method="get" class="library-filter-bar"' not in template


def test_vue_entrypoint_loads_nextcloud_initial_state_and_mounts_app():
    main = (ROOT / "src" / "main.js").read_text()

    assert "createApp" in main
    assert "loadState" in main
    assert "loadState('library', 'catalogue'" in main
    assert "document.querySelector('#library-vue-root')" in main
    assert ".mount(mountTarget)" in main
    assert "validInitialState" in main
    assert "LibraryStartupWatchdog?.mounted()" in main


def test_vue_app_renders_catalogue_filters_covers_and_detail_links():
    app = (ROOT / "src" / "App.vue").read_text()

    assert "t('library', 'All publications')" in app
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
    assert 'class="library-sidebar-metadata-form" @submit.prevent="saveSidebarMetadata"' in app
    assert "fetch(item.updateUrl, { method: 'POST'" in app
    assert "Save metadata" in app
    assert "Add Nextcloud tag" not in app
    assert "nextcloudTagEditor" not in app
    assert "Add Nextcloud comment" not in app

    detail = (ROOT / "templates" / "item-detail.php").read_text()
    assert "Add Nextcloud tag" in detail
    assert "nextcloudTagEditor" in detail
