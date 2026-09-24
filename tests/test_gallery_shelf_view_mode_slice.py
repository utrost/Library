from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_vue_has_only_compact_and_list_view_mode_controls():
    component = read("src/App.vue")

    assert "viewMode" in component
    assert "activeFilters.view" in component
    assert "library-view-mode-toggle" in component
    assert "Compact" in component
    assert "List" in component
    assert "setViewMode('compact')" in component
    assert "setViewMode('list')" in component
    assert "setViewMode('gallery')" not in component
    assert "setViewMode('shelf')" not in component
    assert "data-library-view-mode=\"gallery\"" not in component
    assert "data-library-view-mode=\"shelf\"" not in component
    assert "library-cover-gallery--gallery" not in component
    assert "library-cover-gallery--shelf" not in component


def test_removed_gallery_and_shelf_css_is_absent():
    component = read("src/App.vue")

    assert ".library-cover-gallery--gallery" not in component
    assert ".library-cover-gallery--shelf" not in component
    assert "grid-auto-flow: column" not in component
    assert "scroll-snap-type: x mandatory" in component
    assert "transform: translateY(-2px)" in component


def test_vitest_exercises_compact_list_view_toggle_without_navigation():
    test = read("src/App.test.js")

    assert "offers only compact and list catalogue view modes without navigation" in test
    assert ".library-view-mode-toggle" in test
    assert "await wrapper.find('[data-library-view-mode=list]').trigger('click')" in test
    assert "data-library-view-mode=gallery" in test
    assert "data-library-view-mode=shelf" in test
    assert "library-cover-gallery--gallery" not in test
    assert "library-cover-gallery--shelf" not in test


def test_smoke_and_docs_track_compact_list_slice():
    smoke = read("scripts/smoke-vue-page.mjs")
    docs = "\n".join([
        read("README.md"),
        read("docs/user-guide.md"),
        read("docs/usefulness-and-ux-feature-list.md"),
        read("CHANGELOG.md"),
    ]).lower()

    assert "source_has_compact_list_view_modes" in smoke
    assert "compact" in docs
    assert "list" in docs
    assert "cover-catalogue view-mode" in docs
