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
    assert "One catalogue workspace" in vue
    assert "library-catalogue-workspace library-workspace-menubar" in vue
    assert vue.index('class="library-vue-catalogue"') < vue.index('class="library-panel library-mobile-compact-chrome"') < vue.index('class="library-catalogue-workspace library-workspace-menubar"') < vue.index('id="library-catalogue-heading"')
