from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_bulk_item_normalization_uses_the_filter_batch_cap_without_silent_truncation():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "private const BULK_ITEM_LIMIT = 5000;" in service

    helper = service.split("private function normalizeBulkItemIds", 1)[1].split("public function listItems", 1)[0]
    assert "count($ids) > self::BULK_ITEM_LIMIT" in helper
    assert "throw new BatchLimitExceededException" in helper
    assert "array_slice(array_values(array_unique($ids)), 0, 100)" not in helper
    assert "return $ids;" in helper

    collector = service.split("public function itemIdsForCatalogueFilters", 1)[1].split("public function queryCatalogue", 1)[0]
    assert "min(self::BULK_ITEM_LIMIT, $limit)" in collector
    assert "if ($total > $limit)" in collector
    assert "throw new BatchLimitExceededException" in collector
    assert "count($ids) >= $limit" not in collector


def test_bulk_cap_is_checked_after_deduplication_at_the_5000_5001_boundary():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    helper = service.split("private function normalizeBulkItemIds", 1)[1].split("public function listItems", 1)[0]

    assert helper.index("array_unique($ids)") < helper.index("count($ids) > self::BULK_ITEM_LIMIT")
    assert "count($ids) > self::BULK_ITEM_LIMIT" in helper
    assert "count($ids) >= self::BULK_ITEM_LIMIT" not in helper


def test_scanner_conflict_collection_bounds_the_base_candidate_universe():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    collector = service.split("public function itemIdsForCatalogueFilters", 1)[1].split("public function queryCatalogue", 1)[0]

    assert "scannerConflicts" in collector
    assert "unset($filtersWithoutConflict['scannerConflicts'])" in collector
    assert "queryCatalogue($userId, $filtersWithoutConflict, ['page' => 1, 'limit' => 1])" in collector
    assert "itemHasScannerConflict" in collector


def test_dedicated_batch_limit_exception_has_stable_user_facing_message():
    exception = (ROOT / "lib" / "Exception" / "BatchLimitExceededException.php").read_text()

    assert "final class BatchLimitExceededException extends \\DomainException" in exception
    assert "number_format($limit)" in exception
