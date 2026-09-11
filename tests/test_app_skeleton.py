import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_info_xml_declares_installable_nextcloud_navigation_app():
    info = ROOT / "appinfo" / "info.xml"
    assert info.exists(), "appinfo/info.xml must exist"
    xml = ET.parse(info).getroot()
    assert xml.findtext("id") == "library"
    assert xml.findtext("name") == "Library"
    assert xml.findtext("namespace") == "Library"
    deps = xml.find("dependencies/nextcloud")
    assert deps is not None
    assert deps.attrib["min-version"] == "34"
    assert deps.attrib["max-version"] == "34"
    navigation = xml.find("navigations/navigation")
    assert navigation is not None
    assert navigation.findtext("route") == "library.page.index"


def test_php_app_routes_and_controller_are_wired():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    assert "page#index" in routes
    assert "url" in routes and "/" in routes

    app = (ROOT / "lib" / "AppInfo" / "Application.php").read_text()
    assert "namespace OCA\\Library\\AppInfo" in app
    assert "extends App" in app

    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    assert "namespace OCA\\Library\\Controller" in controller
    assert "class PageController extends Controller" in controller
    assert "TemplateResponse" in controller
    assert "NoCSRFRequired" in controller


def test_landing_template_states_scope_boundary():
    template = (ROOT / "templates" / "main.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()
    assert "library-vue-root" in template
    assert "Library" in vue
    assert "t('library', 'Publication catalogue')" not in vue
    assert "One catalogue workspace for finding, browsing, acting on and reviewing publication files." not in vue
    assert "Compact / Gallery / Shelf" not in vue
    assert "library-catalogue-workspace library-workspace-menubar" in vue
    assert vue.index('class="library-vue-catalogue library-app"') < vue.index('class="library-panel library-mobile-compact-chrome"') < vue.index('class="library-catalogue-workspace library-workspace-menubar"') < vue.index('id="library-catalogue-heading"')


def test_workspace_menus_use_economical_open_layouts():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert ".library-workspace-panel[open]" in vue
    assert "grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr))" in vue
    assert ".library-workspace-panel--browse[open] .library-useful-view-links" in vue
    assert "grid-template-columns: repeat(auto-fit, minmax(min(100%, 11rem), 1fr))" in vue
    assert "grid-column: 1 / -1" in vue
    assert "grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr))" in vue
    assert "max-width: none" in vue
    assert "class=\"library-shortcut-selectors\"" in vue
    assert "library-shortcut-select-card" in vue
    assert ".library-shortcut-selectors" in vue
    assert ".library-shortcut-select-card select" in vue
    assert ".library-batch-action-grid" in vue
    assert "class=\"library-batch-action-card" in vue
    assert "grid-template-columns: minmax(0, 1fr) auto" in vue


def test_explanatory_help_moves_to_hover_labels():
    vue = (ROOT / "src" / "App.vue").read_text()

    removed_visible_help = [
        "<p class=\"library-muted\">{{ t('library', 'Search, sort and filters narrow the current result set.",
        "id=\"library-search-scope\" class=\"library-muted library-search-scope\"",
        "library-workspace-panel-copy",
        "<span>{{ t('library', view.description) }}</span>",
        "<small>{{ t('library', row.description) }}</small>",
        "<p class=\"library-muted\">{{ t('library', 'Every batch action uses the current filters",
        "<p class=\"library-muted\">{{ t('library', 'Review cards compare current values",
        "<p class=\"library-muted\">{{ t('library', 'Cached metadata overview loads quickly",
    ]
    for phrase in removed_visible_help:
        assert phrase not in vue

    assert ":title=\"t('library', 'Search, sort and filters narrow the current result set." in vue
    assert ":title=\"t('library', 'Search also checks descriptions." in vue
    assert ":title=\"t('library', view.description)\"" in vue
    assert ":title=\"t('library', row.description)\"" in vue
