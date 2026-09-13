from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]


def test_type_and_publisher_are_db_backed_self_excluding_facets():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "'publicationTypes' => ['type']" in service
    assert "'publishers' => ['publisher']" in service
    assert "'publicationTypes' => $this->distinctCatalogueValues" in service
    assert "'i.publication_type'" in service
    assert "'publishers' => $this->distinctCatalogueValues" in service
    assert "'i.publisher'" in service
    assert "$filters['publisher']" in service
    assert "'i.publisher', $qb->createNamedParameter($publisher)" in service


def test_dropdown_facets_are_declared_in_one_exclusion_map():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    vue = (ROOT / "src" / "App.vue").read_text()
    match = re.search(
        r"private const FACET_FILTER_EXCLUSIONS = \[(.*?)\n    \];",
        service,
        re.DOTALL,
    )
    assert match is not None
    declarations = match.group(1)

    expected = {
        "publicationTypes": "type",
        "publishers": "publisher",
        "publications": "publication",
        "publicationYears": "year",
        "creators": "creator",
        "formats": "format",
        "shelves": "shelf",
        "scanStatuses": "status",
        "workflowStatuses": "workflowStatus",
        "subjects": "subject",
        "classifications": "classification",
    }
    for facet, filter_key in expected.items():
        assert f"'{facet}' => ['{filter_key}']" in declarations

    # Every select populated by a server-backed collection must declare which
    # active filter it excludes when rebuilding its own options.
    dropdown_facets = re.findall(
        r'<select v-model="activeFilters\.([A-Za-z]+)"[^>]*>.*?'
        r'<option v-for="[^"]+ in ([A-Za-z]+)"',
        vue,
    )
    assert dropdown_facets
    for filter_key, facet in dropdown_facets:
        assert f"'{facet}' => ['{filter_key}']" in declarations

    facets = service.split("private function catalogueFacets", 1)[1].split(
        "public function publicationIssueContext", 1
    )[0]
    assert "facetFiltersFor($filters)" in facets
    assert "$shelfFilters =" not in facets


def test_controller_exposes_type_and_publisher_facets_and_filter():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    catalogue = controller.split("private function buildCatalogueState", 1)[1].split(
        "private function enrichItemsForVue", 1
    )[0]

    assert "'publisher' => trim((string)$this->request->getParam('publisher', ''))" in controller
    assert "'publicationTypes' => []" in catalogue
    assert "'publishers' => []" in catalogue
    assert "'publicationTypes' => $catalogue['facets']['publicationTypes']" in catalogue
    assert "'publishers' => $catalogue['facets']['publishers']" in catalogue


def test_vue_uses_ajax_refreshed_type_and_publisher_facets():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert "const publicationTypes = computed(() => catalogueState.publicationTypes" in vue
    assert "const publishers = computed(() => catalogueState.publishers || [])" in vue
    assert "publisher: catalogueState.activeFilters?.publisher || ''" in vue
    assert "v-model=\"activeFilters.publisher\" name=\"publisher\"" in vue
    assert "v-for=\"publisher in publishers\"" in vue

    apply_state = vue.split("function applyCatalogueState", 1)[1].split(
        "async function fetchImportHealthSummary", 1
    )[0]
    assert "'publicationTypes'" in apply_state
    assert "'publishers'" in apply_state
