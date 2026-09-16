from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_vue_catalogue_has_browsing_home_dashboard_details_drawer_and_issue_strip():
    component = read("src/App.vue")

    assert "library-home-dashboard" not in component
    assert "featuredHomeItems" not in component
    assert "recentHomeItems" not in component
    assert "sort=lastOpened" in component
    assert "starred=1" in component

    assert "library-detail-drawer" in component
    assert "selectedDrawerItem" in component
    assert "openDetailsDrawer(item, $event)" in component
    assert "library-native-item-sidebar" in component
    assert "drawerNextItem" in component
    assert "drawerPreviousItem" in component
    assert "Advanced details" in component

    assert "library-publication-issue-strip" in component
    assert "Visual issue strip" in component
    assert "Next issue" in component
    assert "Previous issue" in component


def test_sleek_browsing_css_adds_motion_depth_and_mobile_drawer():
    component = read("src/App.vue")

    for selector in [
        ".library-sidebar-content",
        ".library-cover-card",
        ".library-publication-issue-strip",
        ".library-issue-strip-card",
    ]:
        assert selector in component

    assert "backdrop-filter: blur" in component
    assert "transition: transform" in component
    assert "box-shadow" in component
    assert "@media (prefers-reduced-motion: reduce)" in component
    assert "@media (max-width: 720px)" in component


def test_detail_drawer_facts_stack_on_narrow_screens_and_keep_desktop_gap():
    component = read("src/App.vue")

    assert ".library-detail-drawer-facts div" in component
    assert "grid-template-columns: minmax(0, 1fr);" in component
    assert "column-gap: 18px;" in component
    assert "grid-template-columns: minmax(7rem, max-content) minmax(0, 1fr);" in component
    assert "minmax(84px, .4fr)" not in component


def test_vitest_exercises_compact_home_tools_and_drawer_interaction():
    test = read("src/App.test.js")

    assert "keeps catalogue workspace panels collapsed so the cover shelf stays central" in test
    assert ".library-catalogue-workspace" in test
    assert ".library-workspace-panel--browse" in test
    assert ".library-sidebar-content" in test
    assert "await wrapper.find('.library-cover-link').trigger('click')" in test
    assert "Advanced details" in test


def test_smoke_and_docs_track_sleek_browsing_slice():
    smoke = read("scripts/smoke-vue-page.mjs")
    docs = "\n".join([
        read("README.md"),
        read("docs/user-guide.md"),
        read("docs/usefulness-and-ux-feature-list.md"),
        read("CHANGELOG.md"),
    ]).lower()

    assert "source_has_calm_catalogue" in smoke
    assert "source_has_detail_drawer" in smoke
    assert "source_has_visual_issue_strip" in smoke
    assert "0.1.0-alpha.171" in docs
    assert "mobile filter" in docs or "filters panel" in docs
    assert "details drawer" in docs
    assert "visual issue strip" in docs
