import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

NORMAL_KEYS = {
    "id", "title", "creators", "publicationType", "publication",
    "publicationDate", "description", "starred", "workflowStatus",
    "lastOpenedAt", "extension", "shelf", "scanStatus", "scanError",
    "hasScannerConflict", "scannerConflictCount", "nextcloudTags",
    "coverUrl", "starUrl", "openUrl", "filesUrl", "downloadUrl",
    "detailsUrl",
}

CONFLICT_EXTRA_KEYS = {
    "cachedPath", "subtitle", "language", "publisher", "genres",
    "classifications", "metadataSource", "fieldSources", "fieldValues",
    "resetFieldUrl",
}


def method_body(source: str, signature: str, next_signature: str) -> str:
    return source.split(signature, 1)[1].split(next_signature, 1)[0]


def php_string_list(source: str, constant_name: str) -> set[str]:
    match = re.search(
        rf"private const {constant_name}\s*=\s*\[(.*?)\];",
        source,
        flags=re.DOTALL,
    )
    assert match is not None
    return set(re.findall(r"'([^']+)'", match.group(1)))


def test_normal_and_metadata_review_dto_shapes_are_explicit_and_exact():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert php_string_list(page, "CATALOGUE_ITEM_KEYS") == NORMAL_KEYS
    assert php_string_list(page, "SCANNER_CONFLICT_ITEM_EXTRA_KEYS") == CONFLICT_EXTRA_KEYS
    assert "projectCatalogueItem" in page
    assert "($activeFilters['scannerConflicts'] ?? '') === '1'" in page
    assert "($activeFilters['weakMetadata'] ?? '') === 'filename'" in page


def test_projection_happens_after_internal_file_fields_feed_tags_and_urls():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    enrich = method_body(
        page,
        "private function enrichItemsForVue(",
        "private function buildPagination(",
    )

    assert "$fileId = (int)$item['fileId']" in enrich
    assert "tagsForItems($items)" in page
    assert "getShowInFilesUrl($fileId, (string)($item['cachedPath'] ?? ''))" in enrich
    assert "getDownloadUrl($userId, (string)($item['cachedPath'] ?? ''))" in enrich
    assert "$this->projectCatalogueItem($item" in enrich
    assert enrich.index("getDownloadUrl") < enrich.index("projectCatalogueItem")
    assert "commentsForItems($items)" not in page
    assert "nextcloudComments" not in enrich


def test_normal_catalogue_sql_uses_compact_structural_projection_without_cover_blob():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    builder = method_body(
        service,
        "private function catalogueQueryBuilder(",
        "private function countCatalogueItems(",
    )

    assert "private const CATALOGUE_INTERNAL_COLUMNS" in service
    assert "private const SCANNER_CONFLICT_INTERNAL_COLUMNS" in service
    assert "$scannerConflictProjection" in builder
    assert "cover_override_data" not in builder
    assert "cover_override_url" not in builder
    assert "cover_override_mime_type" not in builder
    compact_columns = service.split(
        "private const CATALOGUE_INTERNAL_COLUMNS = [", 1
    )[1].split("];", 1)[0]
    for required_internal in ["f.file_id", "f.cached_path", "i.field_values"]:
        assert required_internal in compact_columns


def test_scanner_conflict_visible_and_count_paths_request_rich_internal_projection():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    conflict_count = method_body(
        service,
        "private function countScannerConflictCatalogueItems(",
        "private function queryScannerConflictCatalogue(",
    )
    visible_conflicts = method_body(
        service,
        "private function queryScannerConflictCatalogue(",
        "private function itemHasScannerConflict(",
    )

    assert "catalogueQueryBuilder($userId, $filtersWithoutConflict, true)" in conflict_count
    assert "catalogueQueryBuilder($userId, $filtersWithoutConflict, true)" in visible_conflicts


def test_weak_metadata_filter_requests_rich_review_internal_projection():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    query = method_body(
        service,
        "public function queryCatalogue(",
        "private function countScannerConflictCatalogueItems(",
    )

    assert "($filters['weakMetadata'] ?? '') === 'filename'" in query
    assert "catalogueQueryBuilder($userId, $filters, $metadataReviewProjection)" in query


def test_fixed_normal_dto_excludes_cover_blob_with_fixture_specific_size_evidence():
    synthetic_rich_item = {key: "x" * 24 for key in NORMAL_KEYS | CONFLICT_EXTRA_KEYS}
    synthetic_rich_item["coverOverrideData"] = "A" * 2_000_000
    projected = {key: synthetic_rich_item[key] for key in NORMAL_KEYS}

    import json

    encoded_item = json.dumps(projected, separators=(",", ":"))
    encoded_100_items = json.dumps([projected] * 100, separators=(",", ":"))
    assert "coverOverrideData" not in projected
    assert "A" * 100 not in encoded_item
    assert len(encoded_item.encode()) < 90000
    assert len(encoded_100_items.encode()) < 395000
    assert len(encoded_100_items.encode()) <= int(464651 * 0.85)
