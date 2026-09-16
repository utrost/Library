from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / "src" / "App.vue"
ROUTES = ROOT / "appinfo" / "routes.php"
PAGE = ROOT / "lib" / "Controller" / "PageController.php"
TAGS = ROOT / "lib" / "Service" / "FileTagService.php"


def test_routes_expose_bounded_tag_and_classification_suggestion_endpoints():
    routes = ROUTES.read_text()
    page = PAGE.read_text()

    assert "'/catalogue/tag-suggestions'" in routes
    assert "'/catalogue/classification-suggestions'" in routes
    assert "public function tagSuggestions(): JSONResponse" in page
    assert "public function classificationSuggestions(): JSONResponse" in page
    assert "unset($filters['tag'])" in page
    assert "unset($filters['classification'])" in page
    assert "mb_strlen($query) < 2" in page
    assert "mb_strlen($query) < 3" in page


def test_tag_suggestions_are_prefix_bounded_and_do_not_eagerly_serialize_all_tags():
    tags = TAGS.read_text()
    page = PAGE.read_text()
    app = APP.read_text()

    assert "public function visibleAssignableTagSuggestions" in tags
    assert "str_starts_with(mb_strtolower($name), $prefix)" in tags
    assert "array_slice(array_values($tagNames), 0, max(1, $limit))" in tags
    assert "visibleAssignableTagSuggestions($query, 20)" in page
    assert "tagSuggestionsUrl" in app
    assert "name=\"tagSearch\"" in app
    assert "name=\"tag\" :value=\"activeFilters.tag\"" in app
    assert "params.delete('tagSearch')" in app


def test_classification_typeahead_replaces_eager_classification_dropdown():
    app = APP.read_text()
    page = PAGE.read_text()

    assert "classificationSuggestionsUrl" in app
    assert "name=\"classificationSearch\"" in app
    assert "name=\"classification\" :value=\"activeFilters.classification\"" in app
    assert "library-classification-suggestions" in app
    assert "select v-model=\"activeFilters.classification\"" not in app
    assert "params.delete('classificationSearch')" in app
    assert "'classifications' => []" in (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    assert "'classificationSuggestionsUrl'" in page
