from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_vue_catalogue_renders_useful_views_strip_with_query_links():
    source = (ROOT / "src" / "App.vue").read_text()

    assert "library-useful-views" in source
    assert "Useful views" in source
    assert "smartViews" in source
    for label in [
        "Recently opened",
        "Starred",
        "To read",
        "Reading",
        "Finished",
        "Needs action",
        "Needs metadata",
        "Scanner conflicts",
        "Metadata errors",
        "Placeholder covers",
        "No creator",
        "No publication/series",
        "Weak filename metadata",
        "Unreviewed imports",
    ]:
        assert label in source
    for query in [
        "sort=lastOpened",
        "starred=1",
        "workflowStatus=to-read",
        "workflowStatus=reading",
        "workflowStatus=finished",
        "workflowStatus=needs-action",
        "needsMetadata=1",
        "scannerConflicts=1",
        "status=metadata_error",
        "coverReview=placeholder",
        "noCreator=1",
        "noPublication=1",
        "weakMetadata=filename",
        "unreviewedImports=1",
    ]:
        assert query in source


def test_useful_views_keep_existing_filters_explainable_and_do_not_hide_chips():
    source = (ROOT / "src" / "App.vue").read_text()

    assert "smartViewUrl" in source
    assert "smartViewCounts" in source
    assert "library-useful-view-count" in source
    assert "new URLSearchParams(window.location.search)" in source
    assert "params.delete('page')" in source
    assert "activeFilterChips" in source
    assert "library-active-filter-chips" in source
    assert "Empty useful views mean no current catalogue items match that saved direction yet" in source


def test_catalogue_accepts_smart_collection_query_parameters():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    cover = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()
    tag = (ROOT / "lib" / "Controller" / "TagController.php").read_text()

    for param in ["needsMetadata", "coverReview", "noCreator", "noPublication", "weakMetadata", "unreviewedImports"]:
        assert f"'{param}' => trim((string)$this->request->getParam('{param}', ''))" in page
        assert param in service
        assert param in cover
        assert param in tag

    assert "applySmartCollectionFilters" in service
    assert "metadata_source" in service
    assert "filename-pattern" in service
    assert "i.creators" in service
    assert "i.publication" in service
    assert "cover_override" in service


def test_smoke_and_docs_track_built_in_useful_views():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()
    readme = (ROOT / "README.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    feature_list = (ROOT / "docs" / "usefulness-and-ux-feature-list.md").read_text()

    assert "source_has_useful_views_strip" in smoke
    assert "built-in useful views" in readme.lower()
    assert "Useful views" in guide
    assert "built-in useful views" in roadmap.lower()
    assert "built-in smart-collection dashboard" in feature_list
    assert "implemented for the built-in smart-collection feature set" in feature_list
    assert "count badge" in feature_list
