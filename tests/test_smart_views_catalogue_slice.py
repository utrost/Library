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
        "Scanner conflicts",
        "Metadata errors",
    ]:
        assert label in source
    for query in [
        "sort=lastOpened",
        "starred=1",
        "workflowStatus=to-read",
        "workflowStatus=reading",
        "workflowStatus=finished",
        "workflowStatus=needs-action",
        "scannerConflicts=1",
        "status=metadata_error",
    ]:
        assert query in source


def test_useful_views_keep_existing_filters_explainable_and_do_not_hide_chips():
    source = (ROOT / "src" / "App.vue").read_text()

    assert "smartViewUrl" in source
    assert "new URLSearchParams(window.location.search)" in source
    assert "params.delete('page')" in source
    assert "activeFilterChips" in source
    assert "library-active-filter-chips" in source
    assert "Empty useful views mean no current catalogue items match that saved direction yet" in source


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
    assert "built-in smart-view links" in feature_list
    assert "First slice landed" in feature_list
