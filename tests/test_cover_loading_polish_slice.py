from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_vue_cover_cards_have_loading_and_error_polish_hooks():
    component = read("src/App.vue")

    assert "coverImageState" in component
    assert "library-cover-frame" in component
    assert "library-cover-loading-shimmer" in component
    assert "library-cover-fallback" in component
    assert "@load=\"markCoverLoaded(item)\"" in component
    assert "@error=\"markCoverFailed(item)\"" in component
    assert "Cover unavailable" in component


def test_cover_loading_polish_has_shimmer_fallback_and_reduced_motion_css():
    component = read("src/App.vue")

    assert ".library-cover-frame" in component
    assert ".library-cover-loading-shimmer" in component
    assert "@keyframes library-cover-shimmer" in component
    assert ".library-cover-image--loaded" in component
    assert ".library-cover-card--cover-error" in component
    assert "prefers-reduced-motion" in component


def test_vitest_exercises_cover_load_and_error_states():
    test = read("src/App.test.js")

    assert "shows cover loading polish and a graceful broken-cover fallback" in test
    assert ".library-cover-frame" in test
    assert "await wrapper.find('.library-cover-image').trigger('load')" in test
    assert "await wrapper.find('.library-cover-image').trigger('error')" in test
    assert "Cover unavailable" in test


def test_smoke_and_docs_track_cover_loading_polish_slice():
    smoke = read("scripts/smoke-vue-page.mjs")
    docs = "\n".join([
        read("README.md"),
        read("docs/user-guide.md"),
        read("docs/usefulness-and-ux-feature-list.md"),
        read("CHANGELOG.md"),
    ]).lower()

    assert "source_has_cover_loading_polish" in smoke
    assert "cover loading" in docs
    assert "broken-cover fallback" in docs
