from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_served_vue_stylesheet_contains_compact_cover_defaults():
    vue = (ROOT / "src" / "App.vue").read_text()
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "<style>" in vue
    assert "grid-template-columns: repeat(auto-fill, minmax(120px, 1fr))" in vue
    assert "library-cover-details" in vue
    assert "min-height: 0" in vue
    assert "served_css_has_compact_cover_defaults" in smoke
    assert "css.text.includes('grid-template-columns:repeat(auto-fill,minmax(120px,1fr))')" in smoke
