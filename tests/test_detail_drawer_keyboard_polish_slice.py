from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_vue_detail_drawer_has_keyboard_navigation_hooks():
    component = read("src/App.vue")

    assert "handleDrawerKeyboardShortcuts" in component
    assert "event.key === 'Escape'" in component
    assert "event.key === 'ArrowLeft'" in component
    assert "event.key === 'ArrowRight'" in component
    assert "closeDetailsDrawer()" in component
    assert "showDrawerItem(drawerPreviousItem.value)" in component
    assert "showDrawerItem(drawerNextItem.value)" in component


def test_detail_drawer_exposes_keyboard_hint_and_accessible_label():
    component = read("src/App.vue")

    assert "library-detail-drawer-keyboard-hint" in component
    assert "Esc closes" in component
    assert "arrow keys browse" in component
    assert "aria-describedby=\"library-detail-drawer-keyboard-hint\"" in component


def test_vitest_exercises_drawer_escape_and_arrow_navigation():
    test = read("src/App.test.js")

    assert "supports keyboard navigation inside the details drawer" in test
    assert "window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }))" in test
    assert "window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }))" in test
    assert "window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))" in test


def test_smoke_and_docs_track_drawer_keyboard_polish_slice():
    smoke = read("scripts/smoke-vue-page.mjs")
    docs = "\n".join([
        read("README.md"),
        read("docs/user-guide.md"),
        read("docs/usefulness-and-ux-feature-list.md"),
        read("CHANGELOG.md"),
    ]).lower()

    assert "source_has_drawer_keyboard_polish" in smoke
    assert "esc closes" in docs
    assert "arrow keys browse" in docs
