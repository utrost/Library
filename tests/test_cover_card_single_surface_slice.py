from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_cover_cards_render_one_cover_surface_not_mock_placeholder_plus_image():
    vue = (ROOT / "src" / "App.vue").read_text()

    assert 'class="library-cover-image"' in vue
    assert 'class="library-cover-placeholder"' not in vue
    assert 'library-cover-frame' in vue
    assert 'library-cover-fallback' in vue
    assert 'mb_substr(trim((string)$item[\'title\']), 0, 2)' not in vue


def test_cover_css_does_not_reserve_second_placeholder_cover_block():
    css = (ROOT / "css" / "style.css").read_text()

    assert ".library-cover-image" in css
    assert ".library-cover-placeholder" not in css
    assert ".library-cover-placeholder span" not in css


def test_cover_route_remains_the_single_fallback_source():
    cover = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()

    assert "placeholder" in cover.lower()
    assert "svg" in cover.lower()
    assert "X-Library-Cover-Status" in cover
