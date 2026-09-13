from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def test_home_uses_the_reliable_index_entrypoint_and_bounded_queries():
    routes = read("appinfo/routes.php")
    service = read("lib/Service/ItemService.php")
    controller = read("lib/Controller/PageController.php")

    index_method = controller.split("public function index()", 1)[1].split("public function publication", 1)[0]
    assert "'page#home'" not in routes
    assert "getParam('home', '0') === '1'" in index_method
    assert "? $this->buildHomeState($userId)" in index_method
    assert "$showShelves ? $this->buildShelvesState($userId) : $this->buildCatalogueState" in index_method
    assert "public function homeRows(string $userId, int $rowLimit = 8)" in service
    assert "min(12, $rowLimit)" in service
    assert "fetchBoundedCatalogueRows" in service
    home_method = service.split("public function homeRows", 1)[1].split("public function homeShelfSummaries", 1)[0]
    assert "queryCatalogue(" not in home_method
    assert "public function homeShelfSummaries" in service
    assert "setMaxResults($limit)" in service
    assert "buildHomeState($userId)" in controller


def test_home_payload_and_navigation_are_distinct_from_catalogue_page_items():
    controller = read("lib/Controller/PageController.php")
    vue = read("src/App.vue")

    home_state = controller.split("private function buildHomeState", 1)[1].split("private function buildCatalogueState", 1)[0]
    catalogue_state = controller.split("private function buildCatalogueState", 1)[1]
    assert "'homeRows'" in home_state
    assert "'continueReading'" in home_state
    assert "'recentlyAdded'" in home_state
    assert "'homeShelves'" in home_state
    assert "'needsAttention'" in home_state
    assert "'items' => []" in home_state
    assert "'homeUrl' => $catalogueRootUrl . '?home=1'" in home_state
    assert "'homeUrl' => $catalogueRootUrl . '?home=1'" in catalogue_state
    assert "library.page.home" not in controller
    assert "surface === 'home'" in vue
    assert 'href: homeUrl.value' in vue
    assert 'v-else-if="isHome"' in vue
    assert "homeRows.continueReading" in vue
    assert "homeRows.recentlyAdded" in vue


def test_home_preserves_request_filters_without_becoming_a_catalogue_surface():
    controller = read("lib/Controller/PageController.php")
    home_state = controller.split("private function buildHomeState", 1)[1].split("private function buildShelvesState", 1)[0]

    assert "$activeFilters = $this->catalogueFiltersFromRequest();" in home_state
    assert "'activeFilters' => $activeFilters" in home_state
    assert "'surface' => 'home'" in home_state
    assert "'items' => []" in home_state
    assert "'catalogueEndpointUrl'" not in home_state

    filters = controller.split("private function catalogueFiltersFromRequest", 1)[1].split("private function buildHomeState", 1)[0]
    for request_filter in ["type", "view", "sort", "scannerConflicts", "needsMetadata", "coverReview"]:
        assert f"getParam('{request_filter}'" in filters
