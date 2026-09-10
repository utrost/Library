from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_vue_has_compact_gallery_shelf_view_mode_controls():
    component = read("src/App.vue")

    assert "viewMode" in component
    assert "activeFilters.view" in component
    assert "library-view-mode-toggle" in component
    assert "Compact" in component
    assert "Gallery" in component
    assert "Shelf" in component
    assert "library-cover-gallery--gallery" in component
    assert "library-cover-gallery--shelf" in component
    assert "setViewMode('gallery')" in component
    assert "setViewMode('shelf')" in component


def test_gallery_and_shelf_modes_have_distinct_visual_css():
    component = read("src/App.vue")

    assert ".library-cover-gallery--gallery" in component
    assert "minmax(180px, 1fr)" in component
    assert ".library-cover-gallery--shelf" in component
    assert "grid-auto-flow: column" in component
    assert "scroll-snap-type: x mandatory" in component
    assert "aspect-ratio: 2 / 3" in component
    assert "transform: translateY(-2px)" in component


def test_vitest_exercises_view_toggle_interaction_without_navigation():
    test = read("src/App.test.js")

    assert "switches between compact gallery and shelf cover modes without navigation" in test
    assert ".library-view-mode-toggle" in test
    assert "await wrapper.find('[data-library-view-mode=gallery]').trigger('click')" in test
    assert "library-cover-gallery--gallery" in test
    assert "library-cover-gallery--shelf" in test


def test_smoke_and_docs_track_gallery_shelf_slice():
    smoke = read("scripts/smoke-vue-page.mjs")
    docs = "\n".join([
        read("README.md"),
        read("docs/user-guide.md"),
        read("docs/usefulness-and-ux-feature-list.md"),
        read("CHANGELOG.md"),
    ]).lower()

    assert "source_has_gallery_shelf_view_modes" in smoke
    assert "gallery view" in docs
    assert "shelf view" in docs
    assert "cover-catalogue view-mode" in docs
