from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]


def test_subject_suggestions_route_controller_and_lazy_state_contract():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    state = page.split("private function buildCatalogueState", 1)[1]

    assert "page#subjectSuggestions" in routes
    assert "/catalogue/subject-suggestions" in routes
    method = page.split("public function subjectSuggestions()", 1)[1].split("public function yearSuggestions()", 1)[0]
    assert "getParam('subjectSearch', '')" in method
    assert "unset($filters['subject'])" in method
    assert "mb_strlen($query) < 2" in method
    assert "'subjects' =>" in method
    assert "subjectSuggestions($userId, $filters, $query, 20)" in method
    assert "'subjects' => []" in state
    assert "'subjectSuggestionsUrl'" in state


def test_subject_suggestions_use_normalized_index_and_do_not_eager_load_all_subjects():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    facets = service.split("private function catalogueFacets", 1)[1].split("private function facetFiltersFor", 1)[0]
    method = service.split("public function subjectSuggestions", 1)[1].split("public function yearSuggestions", 1)[0]

    assert "'subjects' => []" in facets
    assert "indexedFacetValues($userId, 'subject')" not in facets
    assert "unset($filters['subject'])" in method
    assert "library_item_facets" in method
    assert "facet_type" in method
    assert "normalized_value" in method
    assert "subject_suggestion.facet_value" in method
    assert "subject_suggestion.value" not in method
    assert "subjects_json" not in method
    assert "setMaxResults($limit)" in method
    assert "min($limit, 20)" in method
    assert "mb_strlen($query) < 2" in method
    assert "createNamedParameter($this->escapeLikeParameter($query) . '%')" in method
    assert not re.search(r"createNamedParameter\([^\n]*['\"]%['\"]\s*\.", method)

    subject_filter = service.split("$subject = trim((string)($filters['subject']", 1)[1].split("$classification =", 1)[0]
    assert "indexedFacetFilter($qb, $userId, 'subject', $subject)" in subject_filter
    assert "subjects_json" not in subject_filter


def test_vue_subject_filter_is_an_exact_match_typeahead_not_a_select():
    app = (ROOT / "src" / "App.vue").read_text()

    assert 'name="subjectSearch"' in app
    assert 'name="subject"' in app
    assert 'select v-model="activeFilters.subject" name="subject"' not in app
    assert "Exact subject matches only" in app
    assert "Search subjects" in app
    assert "Apply subject" in app
    assert "subjectSuggestionsUrl" in app
    assert "query.length < 2" in app


def test_current_typeahead_bundle_uses_the_cache_busted_asset_basename():
    build = (ROOT / "scripts" / "build-vue.mjs").read_text()
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    template = (ROOT / "templates" / "main.php").read_text()

    assert "-pathlink`" in build
    assert "library-main-0-1-0-alpha-168-pathlink" in controller
    assert "library-vue-0-1-0-alpha-168-pathlink" in controller
    assert 'data-library-main-script="library-main-0-1-0-alpha-168-pathlink"' in template
