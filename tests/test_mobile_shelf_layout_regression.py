from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_phone_css_keeps_compact_cover_gallery_as_two_columns_without_shelf_mode():
    component = (ROOT / "src" / "App.vue").read_text()
    phone_css = component.rsplit("@media (max-width: 520px)", 1)[1]

    generic_rule = phone_css.index(".library-cover-gallery {")
    generic_css = phone_css[generic_rule:phone_css.index("}", generic_rule)]

    assert "grid-template-columns: repeat(2, minmax(0, 1fr))" in generic_css
    assert ".library-cover-gallery--shelf" not in phone_css
    assert "grid-auto-flow: column" not in phone_css
