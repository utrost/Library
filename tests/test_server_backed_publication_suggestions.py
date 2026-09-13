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
    assert "unset($filters['publication'])" in service
    assert "LOWER(i.publication)" in service
    assert "->like(" in service
    assert "->groupBy('publication')" in service
    assert "->orderBy('publication', 'ASC')" in service
    assert "->setMaxResults($limit)" in service


def test_creator_and_year_suggestions_route_controller_and_state_contract():
    routes = read("appinfo/routes.php")
    controller = read("lib/Controller/PageController.php")

    for facet in ("creator", "year"):
        method = f"{facet}Suggestions"
        assert f"'page#{method}'" in routes
        assert f"'/catalogue/{facet}-suggestions'" in routes
        assert f"public function {method}(): JSONResponse" in controller
        assert f"getParam('{facet}Search', '')" in controller
        assert f"unset($filters['{facet}'])" in controller
        assert f"$this->itemService->{method}($userId, $filters, $query, 20)" in controller
        assert f"'{method}Url' => $this->urlGenerator->linkToRoute('library.page.{method}')" in controller


def test_item_service_searches_creators_and_years_beyond_seed_with_self_exclusion_and_limit():
    service = read("lib/Service/ItemService.php")

    assert "public function creatorSuggestions(string $userId, array $filters, string $query, int $limit = 20): array" in service
    assert "unset($filters['creator'])" in service
    assert "LOWER(i.creators)" in service
    assert "->groupBy('creator')" in service
    assert "->orderBy('creator', 'ASC')" in service
    assert "public function yearSuggestions(string $userId, array $filters, string $query, int $limit = 20): array" in service
    assert "unset($filters['year'])" in service
    assert "SUBSTR(i.publication_date, 1, 4)" in service
    assert "->groupBy('year')" in service
    assert "->orderBy('year', 'ASC')" in service
    assert service.count("->setMaxResults($limit)") >= 3
