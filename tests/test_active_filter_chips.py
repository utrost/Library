from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_vue_shows_active_filter_chips_with_remove_one_links():
    app = (ROOT / "src" / "App.vue").read_text()

    assert "activeFilterChips" in app
    assert "filterChipRemoveUrl" in app
    assert "library-active-filter-chips" in app
    assert "Active filters" in app
    assert "Remove filter" in app
    assert "param !== key" in app
    assert "params.set(param, normalized)" in app
    assert "Creator" in app
    assert "Publication year" in app
    assert "Series / periodical" in app


def test_active_filter_chips_have_compact_styles():
    css = (ROOT / "css" / "style.css").read_text()

    assert ".library-active-filter-chips" in css
    assert ".library-filter-chip" in css
    assert "border-radius: 999px" in css


def test_smoke_requires_active_filter_chips_source_markers():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "source_has_active_filter_chips" in smoke
    assert "library-active-filter-chips" in smoke
    assert "activeFilterChips" in smoke
    assert "filterChipRemoveUrl" in smoke


def test_docs_describe_active_filter_chips_as_read_only_navigation():
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "active filter chips" in guide.lower()
    assert "remove one filter" in guide.lower()
    assert "Active filter chips have landed" in roadmap
    assert "read-only navigation" in roadmap
