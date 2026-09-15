from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_publication_suggestions_route_controller_and_state_contract():
    routes = read("appinfo/routes.php")
    controller = read("lib/Controller/PageController.php")

    assert "'page#publicationSuggestions'" in routes
    assert "'/catalogue/publication-suggestions'" in routes
    assert "public function publicationSuggestions(): JSONResponse" in controller
    assert "getParam('publicationSearch', '')" in controller
    assert "unset($filters['publication'])" in controller
    assert "$this->itemService->publicationSuggestions($userId, $filters, $query, 20)" in controller
    assert "'publicationSuggestionsUrl' => $this->urlGenerator->linkToRoute('library.page.publicationSuggestions')" in controller


def test_item_service_searches_publications_beyond_seed_with_self_exclusion_and_limit():
    service = read("lib/Service/ItemService.php")

    assert "public function publicationSuggestions(string $userId, array $filters, string $query, int $limit = 20): array" in service
    publication_method = service.split("public function publicationSuggestions", 1)[1].split("public function creatorSuggestions", 1)[0]
    helper = service.split("private function indexedSuggestionValues", 1)[1].split("private function indexedFacetValues", 1)[0]

    assert "unset($filters['publication'])" in publication_method
    assert "indexedSuggestionValues($userId, $filters, 'publication'" in publication_method
    assert "library_item_facets" in helper
    assert ".normalized_value" in helper
    assert "createNamedParameter($this->escapeLikeParameter($query) . '%')" in helper
    assert "LOWER(i.publication)" not in publication_method
    assert "createNamedParameter('%' ." not in helper
    assert "->setMaxResults($limit)" in helper


def test_creator_publisher_and_year_suggestions_route_controller_and_state_contract():
    routes = read("appinfo/routes.php")
    controller = read("lib/Controller/PageController.php")

    for facet in ("creator", "publisher", "year"):
        method = f"{facet}Suggestions"
        assert f"'page#{method}'" in routes
        assert f"'/catalogue/{facet}-suggestions'" in routes
        assert f"public function {method}(): JSONResponse" in controller
        assert f"getParam('{facet}Search', '')" in controller
        assert f"unset($filters['{facet}'])" in controller
        assert f"$this->itemService->{method}($userId, $filters, $query, 20)" in controller
        assert f"'{method}Url' => $this->urlGenerator->linkToRoute('library.page.{method}')" in controller


def test_item_service_searches_creators_publishers_and_years_beyond_seed_with_self_exclusion_and_limit():
    service = read("lib/Service/ItemService.php")
    helper = service.split("private function indexedSuggestionValues", 1)[1].split("private function indexedFacetValues", 1)[0]

    boundaries = {
        "creator": "publisher",
        "publisher": "subject",
        "year": "indexedSuggestionValues",
    }
    for facet, next_method in boundaries.items():
        method = service.split(f"public function {facet}Suggestions", 1)[1].split(
            f"private function {next_method}" if next_method == "indexedSuggestionValues" else f"public function {next_method}Suggestions",
            1,
        )[0]
        assert f"unset($filters['{facet}'])" in method
        assert f"indexedSuggestionValues($userId, $filters, '{facet}'" in method
        assert "LOWER(i." not in method

    assert "library_item_facets" in helper
    assert "$query = mb_strtolower(trim($query))" in helper
    assert ".normalized_value" in helper
    assert "createNamedParameter($this->escapeLikeParameter($query) . '%')" in helper
    assert "createNamedParameter('%' ." not in helper
    assert "->setMaxResults($limit)" in helper
