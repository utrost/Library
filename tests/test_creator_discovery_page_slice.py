from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_routes_include_dedicated_creator_discovery_page():
    routes = (ROOT / "appinfo" / "routes.php").read_text()

    assert "'name' => 'page#creator'" in routes
    assert "'url' => '/creators/{creator}'" in routes
    assert "'verb' => 'GET'" in routes
    assert routes.index("/creators/{creator}") < routes.index("/items/{itemId}")


def test_page_controller_builds_creator_discovery_state_and_landing_urls():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "public function creator(string $creator): TemplateResponse" in controller
    assert "'creator' => $creator" in controller
    assert "'sort' => 'publication'" in controller
    assert "'discoveryPage' => 'creator'" in controller
    assert "'discoveryTitle' => $creator" in controller
    assert "'creatorLandingUrls'" in controller
    assert "linkToRoute('library.page.creator'" in controller


def test_vue_and_fallback_render_creator_discovery_links_and_header():
    vue = (ROOT / "src" / "App.vue").read_text()
    fallback = (ROOT / "src" / "main.js").read_text()

    assert "isCreatorDiscoveryPage" in vue
    assert "creatorLandingUrl(creator)" in vue
    assert "library-creator-groups" in vue
    assert "Top creators" in vue
    assert "library-discovery-header" in vue
    assert "fallbackIsCreatorDiscoveryPage" in fallback
    assert "fallbackCreatorLandingUrl(creator" in fallback
    assert "library-creator-groups" in fallback


def test_smokes_and_docs_track_creator_discovery_page():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()
    browser = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()
    readme = (ROOT / "README.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "creator_discovery_http" in smoke
    assert "creator_discovery_state" in smoke
    assert "browser_creator_discovery_page" in browser
    assert "dedicated creator discovery page" in readme
    assert "creator landing page" in guide
    assert "first dedicated creator discovery page has landed" in roadmap
