from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_vue_catalogue_has_browsing_home_dashboard_details_drawer_and_issue_strip():
    component = read("src/App.vue")

    assert "library-home-dashboard" in component
    assert "Continue reading" in component
    assert "Recently added" in component
    assert "Rediscover" in component
    assert "featuredHomeItems" in component
    assert "recentHomeItems" in component

    assert "library-detail-drawer" in component
    assert "selectedDrawerItem" in component
    assert "openDetailsDrawer(item)" in component
    assert "Close details panel" in component
    assert "drawerNextItem" in component
    assert "drawerPreviousItem" in component
    assert "View full details" in component

    assert "library-publication-issue-strip" in component
    assert "Visual issue strip" in component
    assert "Next issue" in component
    assert "Previous issue" in component


def test_sleek_browsing_css_adds_motion_depth_and_mobile_drawer():
    component = read("src/App.vue")

    for selector in [
        ".library-home-dashboard",
        ".library-home-hero-card",
        ".library-detail-drawer",
        ".library-detail-drawer-backdrop",
        ".library-publication-issue-strip",
        ".library-issue-strip-card",
    ]:
        assert selector in component

    assert "backdrop-filter: blur" in component
    assert "transition: transform" in component
    assert "box-shadow" in component
    assert "@media (prefers-reduced-motion: reduce)" in component
    assert "@media (max-width: 720px)" in component


def test_vitest_exercises_compact_home_tools_and_drawer_interaction():
    test = read("src/App.test.js")

    assert "keeps secondary browsing tools collapsed so the cover shelf stays central" in test
    assert ".library-secondary-tools" in test
    assert ".library-home-dashboard" in test
    assert ".library-detail-drawer" in test
    assert "await wrapper.find('.library-cover-details-drawer-button').trigger('click')" in test
    assert "View full details" in test


def test_smoke_and_docs_track_sleek_browsing_slice():
    smoke = read("scripts/smoke-vue-page.mjs")
    docs = "\n".join([
        read("README.md"),
        read("docs/user-guide.md"),
        read("docs/usefulness-and-ux-feature-list.md"),
        read("CHANGELOG.md"),
    ]).lower()

    assert "source_has_sleek_browsing_home" in smoke
    assert "source_has_detail_drawer" in smoke
    assert "source_has_visual_issue_strip" in smoke
    assert "home dashboard" in docs
    assert "details drawer" in docs
    assert "visual issue strip" in docs
