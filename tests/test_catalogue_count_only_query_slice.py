from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def method_body(source: str, signature: str, next_signature: str) -> str:
    return source.split(signature, 1)[1].split(next_signature, 1)[0]


def test_item_service_exposes_a_count_only_catalogue_path_without_facets_or_page_fetches():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    count_path = method_body(
        service,
        "public function countCatalogue(string $userId, array $filters): int",
        "public function itemIdsForCatalogueFilters",
    )
    assert "countCatalogueItems($userId, $filters)" in count_path
    assert "queryCatalogue(" not in count_path
    assert "catalogueFacets(" not in count_path


def test_smart_views_and_saved_collections_use_only_the_count_path():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    smart_counts = method_body(
        service,
        "public function smartViewCounts(string $userId): array",
        "public function countCatalogue",
    )
    saved_counts = method_body(
        page,
        "private function savedCollectionsWithCounts(string $userId): array",
        "private function enrichPublicationIssueContextForVue",
    )

    assert "$this->countCatalogue($userId, $filters)" in smart_counts
    assert "queryCatalogue(" not in smart_counts
    assert "$this->itemService->countCatalogue($userId" in saved_counts
    assert "queryCatalogue(" not in saved_counts


def test_count_only_scanner_conflicts_retain_visible_catalogue_conflict_semantics():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    count_path = method_body(
        service,
        "public function countCatalogue(string $userId, array $filters): int",
        "public function itemIdsForCatalogueFilters",
    )
    conflict_count = method_body(
        service,
        "private function countScannerConflictCatalogueItems(string $userId, array $filters): int",
        "private function queryScannerConflictCatalogue",
    )
    visible_conflicts = method_body(
        service,
        "private function queryScannerConflictCatalogue(string $userId, array $filters, int $offset, int $limit): array",
        "private function itemHasScannerConflict",
    )

    assert "countScannerConflictCatalogueItems($userId, $filters)" in count_path
    for contract in [
        "unset($filtersWithoutConflict['scannerConflicts'])",
        "catalogueQueryBuilder($userId, $filtersWithoutConflict, true)",
        "normalizeJoinedItemRow($row)",
        "itemHasScannerConflict($item)",
    ]:
        assert contract in conflict_count
        assert contract in visible_conflicts
    assert "catalogueFacets(" not in conflict_count
    assert "queryCatalogue(" not in conflict_count
