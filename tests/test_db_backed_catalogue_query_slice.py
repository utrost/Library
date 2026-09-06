from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_item_service_exposes_db_backed_catalogue_query_result():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "public function queryCatalogue(string $userId, array $filters, array $pagination): array" in service
    assert "private function catalogueQueryBuilder(string $userId" in service
    assert "private function countCatalogueItems(string $userId, array $filters): int" in service
    assert "private function catalogueFacets(string $userId): array" in service
    assert "->setFirstResult($offset)" in service
    assert "->setMaxResults($limit)" in service
    assert "COUNT(*)" in service
    assert "LOWER(i.title)" in service
    assert "LOWER(f.cached_path)" in service
    assert "f.file_id" in service
    assert "taggedFileIds" in service


def test_page_controller_no_longer_filters_sorts_or_slices_catalogue_in_memory():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "queryCatalogue($userId, $activeFilters, $pagination)" in page
    assert "fileIdsForExactVisibleTag" in page
    assert "filterItemsForPresentation" not in page
    assert "sortItemsForPresentation" not in page
    assert "sliceItemsForPresentation" not in page
    assert "buildShelves" not in page
    assert "buildFormats" not in page


def test_file_tag_service_can_reduce_exact_visible_tag_filter_to_file_ids():
    service = (ROOT / "lib" / "Service" / "FileTagService.php").read_text()

    assert "public function fileIdsForExactVisibleTag(string $tagName): array" in service
    assert "systemtag_object_mapping" in service
    assert "systemtag" in service
    assert "objecttype" in service
    assert "files" in service
    assert "canUserSeeTag" in service
