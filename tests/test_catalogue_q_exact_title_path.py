from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SERVICE = ROOT / "lib" / "Service" / "ItemService.php"


def method_body(source: str, signature: str, next_signature: str) -> str:
    return source.split(signature, 1)[1].split(next_signature, 1)[0]


def test_q_filter_uses_indexed_exact_title_candidates_before_broad_scan():
    source = SERVICE.read_text()

    filters = method_body(
        source,
        "private function applyCatalogueFilters(IQueryBuilder $qb, string $userId, array $filters): void",
        "private function applySmartCollectionFilters",
    )
    candidates = method_body(
        source,
        "private function exactTitleCandidateIds(string $userId, string $query): array",
        "private function applyCatalogueFilters",
    )

    assert "$exactTitleItemIds = $this->exactTitleCandidateIds($userId, $query)" in filters
    assert "if ($exactTitleItemIds !== [])" in filters
    assert "expr()->in('i.id'" in filters
    assert "from('library_items', 'exact_title')" in candidates
    assert "eq('exact_title.user_id'" in candidates
    assert "eq('exact_title.title'" in candidates
    assert "LOWER(exact_title.title)" not in candidates
    assert "orderBy(" not in candidates


def test_q_filter_retains_broad_description_and_path_fallback():
    source = SERVICE.read_text()
    filters = method_body(
        source,
        "private function applyCatalogueFilters(IQueryBuilder $qb, string $userId, array $filters): void",
        "private function applySmartCollectionFilters",
    )

    fallback = filters.split("if ($exactTitleItemIds !== [])", 1)[1]
    assert "LOWER(i.description)" in fallback
    assert "LOWER(f.cached_path)" in fallback
    assert "%' . $this->escapeLikeParameter($query) . '%" in fallback


def test_exact_title_fast_path_only_applies_to_specific_queries():
    source = SERVICE.read_text()
    candidates = method_body(
        source,
        "private function exactTitleCandidateIds(string $userId, string $query): array",
        "private function applyCatalogueFilters",
    )

    assert "mb_strlen($query) < 4" in candidates
    assert "mb_strlen($query) > 255" in candidates
