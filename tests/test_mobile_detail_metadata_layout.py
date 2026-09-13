from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_mobile_detail_metadata_fieldsets_stack_labels_and_controls():
    css = (ROOT / "css" / "style.css").read_text()
    mobile = css.split("@media (max-width: 700px)", 1)[1].split("@media (max-width: 760px)", 1)[0]

    assert ".library-detail-edit-form .library-detail-fieldset" in mobile
    assert "grid-template-columns: minmax(0, 1fr)" in mobile
    assert ".library-detail-edit-form .library-detail-fieldset > label" in mobile
    assert "grid-column: 1 / -1" in mobile
    assert "min-width: 0" in mobile
    assert "overflow-wrap: anywhere" in mobile
