from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_page_controller_accepts_year_filter_and_provides_year_facets():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "'year' => trim((string)$this->request->getParam('year', ''))" in page
    assert "'publicationYears' => $catalogue['facets']['publicationYears']" in page
    assert "'publicationYears' => []" in page
    assert "year:string" in page


def test_item_service_filters_and_facets_by_publication_year_prefix():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "year?:string" in service
    assert "publicationYears:array<int, string>" in service
    assert "'publicationYears' => $this->publicationYearFacetValues($userId)" in service
    assert "private function publicationYearFacetValues(string $userId): array" in service
    assert "$year = trim((string)($filters['year'] ?? ''));" in service
    assert "LIKE", "Expected year filter to use publication_date prefix matching for YYYY / YYYY-MM / YYYY-MM-DD values"
    assert "i.publication_date" in service
    assert "$year . '%'" in service


def test_vue_catalogue_exposes_publication_year_filter():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "const publicationYears = computed(() => props.state.publicationYears || [])" in vue
    assert "year: props.state.activeFilters?.year || ''" in vue
    assert "Publication year" in vue
    assert "name=\"year\"" in vue
    assert "All years" in vue
    assert "v-for=\"year in publicationYears\"" in vue


def test_smoke_requires_publication_year_contract():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "state_has_publication_years" in smoke
    assert "source_has_publication_year_filter" in smoke
    assert "Publication year" in smoke
    assert "All years" in smoke


def test_docs_describe_year_browsing_as_read_only_discovery():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "publication year filter has landed" in roadmap.lower()
    assert "filter by publication year" in guide.lower()
    assert "read-only discovery" in guide.lower()
