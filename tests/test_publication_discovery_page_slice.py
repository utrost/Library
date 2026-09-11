from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_routes_include_dedicated_publication_discovery_page():
    routes = (ROOT / "appinfo" / "routes.php").read_text()

    assert "'name' => 'page#publication'" in routes
    assert "'url' => '/publications/{publication}'" in routes
    assert "'verb' => 'GET'" in routes
    assert routes.index("/publications/{publication}") < routes.index("/items/{itemId}")


def test_page_controller_builds_publication_discovery_state():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "public function publication(string $publication): TemplateResponse" in controller
    assert "'publication' => $publication" in controller
    assert "'discoveryPage' => 'publication'" in controller
    assert "'discoveryTitle'" in controller
    assert "'publicationLandingUrl'" in controller
    assert "linkToRoute('library.page.publication'" in controller


def test_vue_and_fallback_render_publication_discovery_header_and_links():
    vue = (ROOT / "src" / "App.vue").read_text()
    fallback = (ROOT / "src" / "main.js").read_text()

    assert "isPublicationDiscoveryPage" in vue
    assert "library-discovery-header" in vue
    assert "discoveryTitle" in vue
    assert "publicationLandingUrl(summary.publication)" in vue


def test_smokes_and_docs_track_publication_discovery_page():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()
    browser = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "publication_discovery_http" in smoke
    assert "publication_discovery_state" in smoke
    assert "browser_publication_discovery_page" in browser
    assert "dedicated publication discovery page" in readme
    assert "first dedicated publication discovery page has landed" in roadmap
