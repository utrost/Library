from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_routes_include_dedicated_publication_year_discovery_page():
    routes = (ROOT / "appinfo" / "routes.php").read_text()

    assert "'name' => 'page#year'" in routes
    assert "'url' => '/years/{year}'" in routes
    assert "'verb' => 'GET'" in routes
    assert routes.index("/years/{year}") < routes.index("/items/{itemId}")


def test_page_controller_builds_year_discovery_state_and_urls():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "public function year(string $year): TemplateResponse" in controller
    assert "'year' => $year" in controller
    assert "'sort' => 'publicationDate'" in controller
    assert "'discoveryPage' => 'year'" in controller
    assert "'discoveryTitle' => $year" in controller
    assert "'publicationYearLandingUrls'" in controller
    assert "linkToRoute('library.page.year'" in controller


def test_vue_and_fallback_render_year_discovery_links_and_header():
    vue = (ROOT / "src" / "App.vue").read_text()
    fallback = (ROOT / "src" / "main.js").read_text()

    assert "isYearDiscoveryPage" in vue
    assert "yearLandingUrl(year)" in vue
    assert "library-year-groups" in vue
    assert "Top publication years" in vue
    assert "library-discovery-header" in vue
    assert "fallbackIsYearDiscoveryPage" in fallback
    assert "fallbackYearLandingUrl(year" in fallback
    assert "library-year-groups" in fallback


def test_smokes_and_docs_track_year_discovery_page():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()
    browser = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "year_discovery_http" in smoke
    assert "year_discovery_state" in smoke
    assert "browser_year_discovery_page" in browser
    assert "dedicated publication year discovery page" in readme
    assert "first dedicated publication year discovery page has landed" in roadmap
