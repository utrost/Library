from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_page_controller_accepts_creator_filter_without_eager_creator_payload():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    catalogue_state = page.split("private function buildCatalogueState", 1)[1]

    assert "'creator' => trim((string)$this->request->getParam('creator', ''))" in page
    assert "'creators' => []" in catalogue_state
    assert "'creators' => $catalogue['facets']['creators']" not in catalogue_state
    assert "'creatorLandingUrls' => []" in catalogue_state
    assert "array_reduce($catalogue['facets']['creators']" not in catalogue_state
    assert "'activeFilters' => $activeFilters" in catalogue_state
    pagination_method = page.split("private function paginationUrl", 1)[1]
    for param in ["creator", "scannerConflicts", "starred", "needsMetadata", "coverReview", "noCreator", "noPublication", "weakMetadata", "unreviewedImports", "sort"]:
        assert f"'{param}'" in pagination_method
    assert "publisher:string" in page
    assert "creator:string" in page


def test_item_service_filters_exact_creator_without_building_eager_creator_facets():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "creator?:string" in service
    assert "creators:array<int, string>" in service
    facets = service.split("private function catalogueFacets", 1)[1].split("private function facetFiltersFor", 1)[0]
    assert "'creators' => []" in facets
    assert "distinctCatalogueValues($userId, $facetFilters['creators']" not in facets
    assert "$creator = trim((string)($filters['creator'] ?? ''))" in service
    assert "$qb->expr()->eq('i.creators', $qb->createNamedParameter($creator))" in service
    assert "Exact creator filter intentionally matches the full creators field" in service


def test_vue_exposes_creator_filter_without_identity_splitting():
    app = (ROOT / "src" / "App.vue").read_text()

    assert "const creators = computed(() => catalogueState.creators || [])" in app
    assert "creator: catalogueState.activeFilters?.creator || ''" in app
    assert "Creator" in app
    assert "name=\"creator\"" in app
    assert "All creators" in app
    assert "v-for=\"creator in creators\"" in app
    assert "Exact full-field creator matches only" in app
    assert "const creatorSearch = ref(activeFilters.creator)" in app
    assert "const creatorSuggestions = computed(() => remoteCreatorSuggestions.value || [])" in app
    assert "creatorSuggestionsUrl" in app


def test_smoke_requires_creator_filter_markers():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "state_has_creators" in smoke
    assert "creator_facet_payload_lazy" in smoke
    assert "creator_landing_urls_payload_lazy" in smoke
    assert "creator_active_filter_preserved" in smoke
    assert "source_has_creator_filter" in smoke
    assert "creator_filter_smoke_ok" in smoke
    assert "creator=__library_smoke_creator__" in smoke


def test_docs_describe_creator_filter_as_read_only_exact_match():
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "filter by exact creator field" in guide
    assert "creator identity splitting remains future work" in guide
    assert "Creator filtering has landed as exact full-field matching" in roadmap
