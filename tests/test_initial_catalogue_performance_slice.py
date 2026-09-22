import hashlib
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_query_catalogue_supports_a_core_path_that_does_not_call_facets():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    query = service.split("public function queryCatalogue", 1)[1].split(
        "private function countScannerConflictCatalogueItems", 1
    )[0]

    assert "bool $includeFacets = true" in query
    assert "'facets' => $includeFacets" in query


def test_index_uses_core_catalogue_and_defers_all_badge_counts():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    state = page.split("private function buildCatalogueState", 1)[1].split(
        "private function savedCollectionsWithCounts", 1
    )[0]

    assert "$fastCatalogueApi = $surface === 'catalogue_api' && (string)$this->request->getParam('hydrate', '0') !== '1'" in state
    assert "$includeFacets = $surface !== 'index' && !$fastCatalogueApi" in state
    assert "queryCatalogue($userId, $activeFilters, $pagination, $includeFacets)" in state
    assert "$surface === 'index' || $fastCatalogueApi ? [] :" in state
    assert "$this->itemService->smartViewCounts($userId, false)" in state
    assert "$surface === 'index' || $fastCatalogueApi" in state
    assert "$this->savedCollectionsPending($userId)" in state
    assert "'smartViewCountsPending' => $smartViewCountsPending" in state
    assert "'facetsDeferred' => $fastCatalogueApi" in state
    assert "'surface' => $surface" in state


def test_index_deferred_state_has_a_fresh_immutable_asset_contract():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    template = (ROOT / "templates" / "main.php").read_text()
    build = (ROOT / "scripts" / "build-vue.mjs").read_text()

    basename = "0-1-0-alpha-174-recently-opened"
    assert f"library-main-{basename}" in page
    assert f"library-vue-{basename}" in page
    assert f'data-library-main-script="library-main-{basename}"' in template
    assert "-recently-opened`" in build


def test_previous_deployed_asset_remains_byte_for_byte_immutable():
    deployed_asset = ROOT / "js" / "library-main-0-1-0-alpha-168-subjecttypeahead.mjs"

    assert hashlib.sha256(deployed_asset.read_bytes()).hexdigest() == "8d06f3879cb3881d02f07a6e315dd941b2cc985576a3c7673c256b799bc52250"


def test_index_auxiliary_hydration_waits_for_an_animation_frame():
    app = (ROOT / "src" / "App.vue").read_text()
    mounted = app.split("onMounted(() => {", 1)[1].split("onBeforeUnmount(() => {", 1)[0]

    assert re.search(
        r"initialAuxiliaryHydrationFrame\s*=\s*window\.requestAnimationFrame\(\(\)\s*=>\s*\{"
        r"\s*initialAuxiliaryHydrationFrame\s*=\s*null"
        r"\s*void hydrateInitialAuxiliaryState\(\)",
        mounted,
    )


def test_catalogue_api_defers_facets_and_badge_counts_unless_hydrating():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    app = (ROOT / "src" / "App.vue").read_text()

    assert "$fastCatalogueApi = $surface === 'catalogue_api' && (string)$this->request->getParam('hydrate', '0') !== '1'" in page
    assert "$includeFacets = $surface !== 'index' && !$fastCatalogueApi" in page
    assert "'facetsDeferred' => $fastCatalogueApi" in page
    assert "return new JSONResponse($this->buildCatalogueState($userId, [], [], 'catalogue_api'));" in page
    assert "params.set('hydrate', '1')" in app
    assert "nextState.facetsDeferred" in app


def test_default_compact_view_is_not_an_active_instrumentation_filter():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "($key === 'view' && $value === 'compact')" in page
