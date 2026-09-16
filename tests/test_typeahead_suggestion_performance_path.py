from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SERVICE = ROOT / "lib" / "Service" / "ItemService.php"
CREATOR_INDEX_MIGRATION = (
    ROOT / "lib" / "Migration" / "Version000100Date20260915163000.php"
)
COVERING_FACET_MIGRATION = (
    ROOT / "lib" / "Migration" / "Version000100Date20260915170000.php"
)


def suggestion_method(source: str, name: str, next_name: str) -> str:
    start = f"public function {name}Suggestions"
    end = (
        f"private function {next_name}"
        if next_name.startswith("indexed")
        else f"public function {next_name}Suggestions"
    )
    return source.split(start, 1)[1].split(end, 1)[0]


def test_scalar_suggestions_use_normalized_facet_prefix_index_without_wrapping_item_columns():
    source = SERVICE.read_text()
    methods = {
        "publication": suggestion_method(source, "publication", "creator"),
        "creator": suggestion_method(source, "creator", "publisher"),
        "publisher": suggestion_method(source, "publisher", "subject"),
        "subject": suggestion_method(source, "subject", "classification"),
        "classification": suggestion_method(source, "classification", "year"),
        "year": suggestion_method(source, "year", "indexedSuggestionValues"),
    }
    helper = source.split("private function indexedSuggestionValues", 1)[1].split("private function indexedFacetValues", 1)[0]

    for facet, method in methods.items():
        assert f"unset($filters['{facet}'])" in method
        assert "indexedSuggestionValues($userId, $filters" in method
        assert "LOWER(i." not in method
        assert "createNamedParameter('%' ." not in method

    assert "library_item_facets" in helper
    assert "normalized_value" in helper
    assert "mb_strtolower(trim($query))" in helper
    assert "createNamedParameter($this->escapeLikeParameter($query) . '%')" in helper
    assert "->setMaxResults($limit)" in helper


def test_empty_filter_suggestions_read_the_facet_lookup_without_catalogue_joins():
    source = SERVICE.read_text()
    helper = source.split("private function indexedSuggestionValues", 1)[1].split("private function indexedFacetValues", 1)[0]
    direct = source.split("private function unfilteredIndexedSuggestionValues", 1)[1].split("private function indexedFacetValues", 1)[0]

    assert "suggestionFiltersAreEmpty($filters)" in helper
    assert "unfilteredIndexedSuggestionValues($userId, $facetType, $query, $limit)" in helper
    assert "->from('library_item_facets', 'facet_suggestion')" in direct
    assert "facet_suggestion.user_id" in direct
    assert "facet_suggestion.facet_type" in direct
    assert "facet_suggestion.normalized_value" in direct
    assert "createNamedParameter($this->escapeLikeParameter($query) . '%')" in direct
    assert "->groupBy('facet_suggestion.normalized_value', 'facet_suggestion.facet_value')" in direct
    assert "->orderBy('facet_suggestion.normalized_value', 'ASC')" in direct
    assert "->addOrderBy('facet_suggestion.facet_value', 'ASC')" in direct
    assert "->setMaxResults($limit * 16)" in direct
    for forbidden in ("catalogueFilteredQueryBuilder", "library_items", "library_files", "library_roots", "item_id"):
        assert forbidden not in direct


def test_non_empty_filter_suggestions_keep_the_self_excluding_catalogue_path():
    source = SERVICE.read_text()
    helper = source.split("private function indexedSuggestionValues", 1)[1].split("private function unfilteredIndexedSuggestionValues", 1)[0]

    assert "catalogueFilteredQueryBuilder($userId, $filters)" in helper
    assert "innerJoin('i', 'library_item_facets'" in helper
    assert "suggestionFiltersAreEmpty($filters)" in helper
    for facet in ("publication", "creator", "publisher", "subject", "classification", "year"):
        method_end = {
            "publication": "creator",
            "creator": "publisher",
            "publisher": "subject",
            "subject": "classification",
            "classification": "year",
            "year": "indexedSuggestionValues",
        }[facet]
        method = suggestion_method(source, facet, method_end)
        assert f"unset($filters['{facet}'])" in method


def test_suggestion_prefix_and_limits_remain_bounded():
    source = SERVICE.read_text()
    scalar = source.split("private function indexedSuggestionValues", 1)[1].split("private function indexedFacetValues", 1)[0]
    subject = suggestion_method(source, "subject", "year")

    assert "$query = mb_strtolower(trim($query))" in scalar
    assert "$limit = min($limit, 25)" in scalar
    assert "$limit = min($limit, 20)" in subject
    assert "createNamedParameter('%' ." not in scalar


def test_all_suggestion_paths_use_the_user_scoped_normalized_facet_index():
    facets = (ROOT / "lib" / "Migration" / "Version000100Date20260914120000.php").read_text()
    service = SERVICE.read_text()

    assert "addIndex(['user_id', 'facet_type', 'normalized_value'], 'library_facets_lookup')" in facets
    assert "'publication' => [(string)($metadata['publication'] ?? '')]" in service
    assert "'creator' => [(string)($metadata['creators'] ?? '')]" in service
    assert "'publisher' => [(string)($metadata['publisher'] ?? '')]" in service
    assert "'classification' => $this->normalizeMultiValueField($metadata['classifications'] ?? [])" in service
    assert "'year' => preg_match" in service
    assert "select('id', 'subjects_json', 'classifications_json', 'publication', 'creators', 'publisher', 'publication_date')" in service


def test_unfiltered_suggestion_index_covers_the_grouped_display_value():
    schema = (ROOT / "appinfo" / "database.xml").read_text()
    migration = COVERING_FACET_MIGRATION.read_text()

    columns = "['user_id', 'facet_type', 'normalized_value', 'facet_value']"
    assert columns in migration
    assert "hasIndex('library_facets_lookup')" in migration
    assert "dropIndex('library_facets_lookup')" in migration
    lookup = schema.split("<index><name>library_facets_lookup</name>", 1)[1].split("</index>", 1)[0]
    assert [lookup.index(f"<name>{column}</name>") for column in (
        "user_id", "facet_type", "normalized_value", "facet_value"
    )] == sorted(lookup.index(f"<name>{column}</name>") for column in (
        "user_id", "facet_type", "normalized_value", "facet_value"
    ))


def test_typeahead_slice_does_not_add_an_unsafe_creator_column_index():
    assert not CREATOR_INDEX_MIGRATION.exists()


def test_subject_suggestions_keep_the_normalized_prefix_index_path():
    source = SERVICE.read_text()
    method = suggestion_method(source, "subject", "year")
    helper = source.split("private function indexedSuggestionValues", 1)[1].split("private function indexedFacetValues", 1)[0]

    assert "unset($filters['subject'])" in method
    assert "indexedSuggestionValues($userId, $filters, 'subject'" in method
    assert "normalized_value" in helper
    assert "createNamedParameter($this->escapeLikeParameter($query) . '%')" in helper
    assert "->setMaxResults($limit)" in helper
    assert "subjects_json" not in method
