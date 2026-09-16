from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MIGRATION = ROOT / "lib" / "Migration" / "Version000100Date20260916100000.php"


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_folder_filter_has_a_user_scoped_safe_prefix_index():
    assert MIGRATION.exists()
    migration = MIGRATION.read_text()
    assert "hasIndex('library_files_usr_path')" in migration
    assert "addIndex(['user_id', 'cached_path'], 'library_files_usr_path', [], ['lengths' => [null, 191]])" in migration

    schema = read("appinfo/database.xml")
    index = schema.split("<name>library_files_usr_path</name>", 1)[1].split("</index>", 1)[0]
    assert index.index("<name>user_id</name>") < index.index("<name>cached_path</name>")
    assert "<length>191</length>" in index


def test_folder_filter_remains_a_sargable_exact_or_escaped_prefix_lookup():
    service = read("lib/Service/ItemService.php")
    method = service.split("private function folderFileIdSubquery", 1)[1].split("private function applyCatalogueFilters", 1)[0]
    assert "`*PREFIX*library_files` `folder_filter`" in method
    assert "`folder_filter`.`user_id`" in method
    assert "`folder_filter`.`cached_path` =" in method
    assert "`folder_filter`.`cached_path` LIKE" in method
    assert "escapeLikeParameter($folderPrefix) . '%'" in method
    assert "LOWER(folder_filter.cached_path)" not in method
    assert "CONCAT(" not in method


def test_folder_filter_constrains_items_with_a_file_id_subquery_to_avoid_title_scan():
    service = read("lib/Service/ItemService.php")
    filters = service.split("private function applyCatalogueFilters", 1)[1].split("if (array_key_exists('taggedFileIds'", 1)[0]
    assert "$this->folderFileIdSubquery($qb, $userId, $folder)" in filters
    assert "$qb->createFunction($this->folderFileIdSubquery($qb, $userId, $folder))" in filters
    assert "in('i.library_file_id'" in filters
    assert "eq('f.cached_path'" not in filters
    assert "like('f.cached_path'" not in filters


def test_folder_suggestions_route_controller_state_and_minimum_contract():
    routes = read("appinfo/routes.php")
    controller = read("lib/Controller/PageController.php")
    assert "'page#folderSuggestions'" in routes
    assert "'/catalogue/folder-suggestions'" in routes
    method = controller.split("public function folderSuggestions(): JSONResponse", 1)[1].split("public function yearSuggestions", 1)[0]
    assert "getParam('folderSearch', '')" in method
    assert "unset($filters['folder'])" in method
    assert "mb_strlen($query) < 3" in method
    assert "$this->itemService->folderSuggestions($userId, $filters, $query, 20)" in method
    assert "'folderSuggestionsUrl' => $this->urlGenerator->linkToRoute('library.page.folderSuggestions')" in controller


def test_folder_suggestions_use_the_path_index_and_return_directories():
    service = read("lib/Service/ItemService.php")
    method = service.split("public function folderSuggestions", 1)[1].split("public function yearSuggestions", 1)[0]
    assert "mb_strlen($query) < 3" in method
    assert "->from('library_files', 'folder_suggestion')" in method
    assert "folder_suggestion.user_id" in method
    assert "folder_suggestion.cached_path" in method
    assert "escapeLikeParameter($query) . '%'" in method
    assert "dirname(" in method
    assert "LOWER(" not in method
    assert "catalogueFilteredQueryBuilder" not in method


def test_folder_combobox_keeps_plain_get_folder_field_and_remote_contract():
    app = read("src/App.vue")
    assert 'input id="library-folder-search"' in app
    assert 'name="folderSearch"' in app
    assert 'role="combobox"' in app
    assert 'input type="hidden" name="folder" :value="activeFilters.folder"' in app
    assert "query.length < 3" in app
    assert "fetchFolderSuggestions" in app
    assert "selectFolderSuggestion" in app
    assert "params.delete('folderSearch')" in app
