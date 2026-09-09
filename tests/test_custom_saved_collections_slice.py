from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_saved_collections_have_schema_service_controller_and_routes():
    migrations = "\n".join(path.read_text() for path in (ROOT / "lib" / "Migration").glob("*.php"))
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    service_path = ROOT / "lib" / "Service" / "SavedCollectionService.php"
    controller_path = ROOT / "lib" / "Controller" / "SavedCollectionController.php"

    assert "library_saved_collections" in migrations
    assert "filters_json" in migrations
    assert "user_id" in migrations
    assert service_path.exists()
    assert controller_path.exists()

    service = service_path.read_text()
    controller = controller_path.read_text()
    for method in ["listCollections", "saveCollection", "deleteCollection", "normalizeFilters"]:
        assert method in service
    assert "IURLGenerator" in controller
    assert "save" in controller
    assert "delete" in controller
    assert "saved_collection#save" in routes
    assert "saved_collection#delete" in routes
    assert "SavedCollectionService" in page
    assert "savedCollections" in page
    assert "savedCollectionSaveUrl" in page


def test_vue_renders_custom_saved_collection_panel_and_preserves_current_filters():
    source = (ROOT / "src" / "App.vue").read_text()

    assert "savedCollections" in source
    assert "savedCollectionSaveUrl" in source
    assert "library-saved-collections" in source
    assert "Save current view" in source
    assert "Custom collections" in source
    assert "collection.filters" in source
    assert "savedCollectionUrl(collection.filters)" in source
    assert "savedCollectionDeleteUrl" in source
    assert "savedCollectionName" in source
    assert "savedCollectionFilters" in source
    assert "JSON.stringify(currentSavableFilters" in source


def test_smokes_and_docs_track_custom_saved_collections():
    browser_smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()
    vue_smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()
    readme = (ROOT / "README.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    feature_list = (ROOT / "docs" / "usefulness-and-ux-feature-list.md").read_text()

    assert "browser_saved_collections" in browser_smoke
    assert "source_has_custom_saved_collections" in vue_smoke
    assert "in-app custom collections" in readme.lower()
    assert "Custom collections" in guide
    assert "user-defined saved views" in feature_list
    assert "implemented" in feature_list.lower()
