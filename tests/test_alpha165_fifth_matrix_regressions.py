from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_mobile_legacy_surfaces_use_logical_shrinkable_layouts_without_root_clipping():
    css = (ROOT / "css/style.css").read_text()
    mobile = css[css.index("/* Alpha.165 fifth-matrix mobile overflow remediation. */"):]
    for selector in (
        ".library-detail-hero",
        ".library-workflow-status-pill",
        ".library-cover-override-form input",
        ".library-item-metadata",
        ".library-provenance-differences",
        ".library-index-row dl",
    ):
        assert selector in mobile
    assert "grid-template-columns: minmax(0, 1fr);" in mobile
    assert "min-inline-size: 0;" in mobile
    assert "max-inline-size: 100%;" in mobile
    assert "overflow-x: auto;" in mobile
    assert "overflow-x: hidden" not in mobile
    assert "overflow-x: clip" not in mobile


def test_live_matrix_covers_both_mobile_widths_and_directions():
    smoke = (ROOT / "scripts/smoke-browser-page.mjs").read_text()
    assert "widths: [1280, 390, 320]" in smoke
    assert "locales: ['de', 'ar']" in smoke
