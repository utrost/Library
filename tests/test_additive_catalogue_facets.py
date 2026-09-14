from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_catalogue_queries_pass_active_filters_to_facets():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    query = service.split("public function queryCatalogue", 1)[1].split(
        "private function countScannerConflictCatalogueItems", 1
    )[0]
    conflicts = service.split("private function queryScannerConflictCatalogue", 1)[1].split(
        "private function itemHasScannerConflict", 1
    )[0]

    assert "catalogueFacets($userId, $filters)" in query
    assert "catalogueFacets($userId, $filters)" in conflicts


def test_each_catalogue_facet_uses_a_self_excluding_filter_context():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    facets = service.split("private function catalogueFacets", 1)[1].split(
        "public function publicationIssueContext", 1
    )[0]

    assert "private function catalogueFacets(string $userId, array $filters): array" in service
    assert "private const FACET_FILTER_EXCLUSIONS" in service
    assert "private function facetFiltersFor(array $filters): array" in service
    for facet, key in {
        "publicationTypes": "type",
        "publishers": "publisher",
        "shelves": "shelf",
        "formats": "format",
        "publications": "publication",
        "publicationYears": "year",
        "creators": "creator",
        "scanStatuses": "status",
        "workflowStatuses": "workflowStatus",
        "subjects": "subject",
        "classifications": "classification",
    }.items():
        assert f"'{facet}' => ['{key}']" in service
        if facet not in {"publishers", "creators", "subjects", "classifications"}:
            assert f"$facetFilters['{facet}']" in facets

    assert "'creators' => []" in facets
    assert "'publishers' => []" in facets

    assert "unset($filtersByFacet[$facet][$excludedKey])" in facets
    assert "catalogueFilteredQueryBuilder($userId, $filters)" in facets


def test_ordinary_catalogue_facets_skip_multi_value_json_scans_but_keep_filters():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    facets = service.split("private function catalogueFacets", 1)[1].split(
        "private function facetFiltersFor", 1
    )[0]
    predicates = service.split("private function applyCatalogueFilters", 1)[1].split(
        "private function", 1
    )[0]

    assert "'subjects' => []" in facets
    assert "'classifications' => []" in facets
    assert "subjectFacetValues(" not in facets
    assert "classificationFacetValues(" not in facets
    assert "i.subjects_json" in predicates
    assert "i.classifications_json" in predicates
    assert "jsonArrayContainsFilter" in predicates
