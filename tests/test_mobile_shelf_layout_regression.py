from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_phone_css_flows_shelf_as_a_two_column_vertical_catalogue():
    component = (ROOT / "src" / "App.vue").read_text()
    phone_css = component.rsplit("@media (max-width: 520px)", 1)[1]

    generic_rule = phone_css.index(".library-cover-gallery {")
    shelf_rule = phone_css.index(".library-cover-gallery--shelf {")
    shelf_css = phone_css[shelf_rule:phone_css.index("}", shelf_rule)]

    assert shelf_rule > generic_rule
    assert "grid-template-columns: repeat(2, minmax(0, 1fr))" in shelf_css
    assert "grid-auto-flow: row" in shelf_css
    assert "overflow-x: visible" in shelf_css
    assert "scroll-snap-type: none" in shelf_css
    assert "grid-auto-flow: column" not in shelf_css
