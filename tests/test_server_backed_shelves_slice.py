from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def test_shelves_uses_reliable_index_entrypoint_and_summary_query():
    controller = read("lib/Controller/PageController.php")
    service = read("lib/Service/ItemService.php")

    index_method = controller.split("public function index()", 1)[1].split("public function publication", 1)[0]
    shelves_method = service.split("public function shelfSummaries", 1)[1].split("private function", 1)[0]

    assert "getParam('shelves', '0') === '1'" in index_method
    assert "buildShelvesState($userId)" in index_method
    assert "queryCatalogue(" not in shelves_method
    assert "COUNT(i.id)" in shelves_method
    assert "from('library_roots', 'r')" in shelves_method
    assert "leftJoin" in shelves_method


def test_shelves_payload_is_distinct_bounded_and_links_to_catalogue_filters():
    controller = read("lib/Controller/PageController.php")
    vue = read("src/App.vue")

    shelves_state = controller.split("private function buildShelvesState", 1)[1].split("private function buildCatalogueState", 1)[0]
    assert "'surface' => 'shelves'" in shelves_state
    assert "'items' => []" in shelves_state
    assert "'shelfSummaries'" in shelves_state
    assert "http_build_query(['shelf'" in shelves_state
    assert "'shelvesUrl' => $catalogueRootUrl . '?shelves=1'" in shelves_state
    assert "queryCatalogue(" not in shelves_state

    assert "surface === 'shelves'" in vue
    assert 'href: shelvesUrl.value' in vue
    assert 'v-else-if="isShelves"' in vue
    assert "shelfSummaries" in vue
    assert "library-shelves-empty" in vue


def test_shelves_preserves_request_filters_without_becoming_a_catalogue_surface():
    controller = read("lib/Controller/PageController.php")
    shelves_state = controller.split("private function buildShelvesState", 1)[1].split("private function buildCatalogueState", 1)[0]

    assert "$activeFilters = $this->catalogueFiltersFromRequest();" in shelves_state
    assert "'activeFilters' => $activeFilters" in shelves_state
    assert "'surface' => 'shelves'" in shelves_state
    assert "'items' => []" in shelves_state
    assert "'catalogueEndpointUrl'" not in shelves_state

    filters = controller.split("private function catalogueFiltersFromRequest", 1)[1].split("private function buildHomeState", 1)[0]
    for request_filter in ["type", "view", "sort", "scannerConflicts", "needsMetadata", "coverReview"]:
        assert f"getParam('{request_filter}'" in filters


def test_shelves_initial_payload_is_roots_only_and_exposes_lazy_child_metadata():
    controller = read("lib/Controller/PageController.php")
    service = read("lib/Service/ItemService.php")

    tree_method = service.split("public function shelfTree", 1)[1].split("private function", 1)[0]
    shelves_state = controller.split("private function buildShelvesState", 1)[1].split("private function buildCatalogueState", 1)[0]

    assert "COUNT(i.id)" in tree_method
    assert "'hasChildren'" in tree_method
    assert "'childCount'" in tree_method
    assert "'children'" not in tree_method
    assert "$this->itemService->shelfTree($userId" in shelves_state
    assert "'shelfTree' => $shelfTree" in shelves_state
    assert "shelfChildrenUrl" in shelves_state
    assert "$addFolderUrls" not in shelves_state


def test_shelf_children_api_is_bounded_root_scoped_and_segment_safe():
    routes = read("appinfo/routes.php")
    controller = read("lib/Controller/PageController.php")
    service = read("lib/Service/ItemService.php")

    assert "page#shelfChildren" in routes
    endpoint = controller.split("public function shelfChildren", 1)[1].split("public function", 1)[0]
    assert "#[NoAdminRequired]" in controller
    assert "#[NoCSRFRequired]" in controller
    assert "getParam('rootId'" in endpoint
    assert "getParam('parent'" in endpoint
    assert "shelfChildren($userId" in endpoint
    assert "JSONResponse" in endpoint

    method = service.split("public function shelfChildren", 1)[1].split("private function", 1)[0]
    assert "min(100" in method
    assert "library_roots" in method
    assert "r.user_id" in method
    assert "f.root_id" in method
    assert "f.cached_path" in method
    assert "escapeLikeParameter" in method
    assert "$parentPath . '/'" in method
    assert "COUNT(i.id)" in method
    assert "childCount" in method
    assert "hasChildren" in method
    assert "setMaxResults($limit + 1)" not in method


def test_shelf_children_aggregates_before_paging_and_excludes_sidecars_everywhere():
    controller = read("lib/Controller/PageController.php")
    service = read("lib/Service/ItemService.php")

    tree_method = service.split("public function shelfTree", 1)[1].split("public function shelfChildren", 1)[0]
    children_method = service.split("public function shelfChildren", 1)[1].split("private function", 1)[0]
    endpoint = controller.split("public function shelfChildren", 1)[1].split("public function", 1)[0]

    assert "neq('f.scan_status'" in tree_method
    assert "neq('f.scan_status'" in children_method
    assert "array_slice($children, $offset, $limit)" in children_method
    assert "'hasMore' => $offset + count($nodes) < count($children)" in children_method
    assert "'nextOffset' => $offset + count($nodes)" in children_method
    assert "getParam('offset'" in endpoint
    assert "'hasMore' =>" in endpoint
    assert "'nextOffset' =>" in endpoint


def test_hierarchy_lookup_index_avoids_full_long_path_indexing():
    database = read("appinfo/database.xml")
    migration = read("lib/Migration/Version000100Date20260913100000.php")
    index = database.split("<name>library_files_usr_root_status</name>", 1)[1].split("</index>", 1)[0]

    assert "<name>user_id</name>" in index
    assert "<name>root_id</name>" in index
    assert "<name>scan_status</name>" in index
    assert "<name>cached_path</name>" not in index
    assert "library_files_usr_root_status" in migration
    assert "['user_id', 'root_id', 'scan_status']" in migration
    assert "Version000100Date20260913100000" in migration


def test_shelf_tree_node_localizes_all_new_controls_and_statuses():
    vue = read("src/components/ShelfTreeNode.vue")

    assert "import { n, t } from '@nextcloud/l10n'" in vue
    for label in ("Expand {folder}", "Collapse {folder}", "Could not load folders.", "Load more folders", "Loading folders…"):
        assert f"t('library', '{label}'" in vue


def test_folder_filter_is_parsed_preserved_and_segment_safe():
    page = read("lib/Controller/PageController.php")
    service = read("lib/Service/ItemService.php")
    item = read("lib/Controller/ItemController.php")
    tag = read("lib/Controller/TagController.php")
    cover = read("lib/Controller/CoverController.php")
    saved = read("lib/Service/SavedCollectionService.php")

    filters = service.split("private function applyCatalogueFilters", 1)[1].split("private function applySmartCollectionFilters", 1)[0]
    folder_subquery = service.split("private function folderFileIdSubquery", 1)[1].split("private function applyCatalogueFilters", 1)[0]
    assert "getParam('folder'" in page
    for source in (item, tag, cover, saved):
        assert "'folder'" in source
    assert "$filters['folder']" in filters
    assert "rtrim" in filters
    assert "$this->folderFileIdSubquery($qb, $userId, $folder)" in filters
    assert "in('i.library_file_id'" in filters
    assert "`folder_filter`.`cached_path`" in folder_subquery
    assert "$folder . '/'" in folder_subquery
    assert "escapeLikeParameter" in folder_subquery
