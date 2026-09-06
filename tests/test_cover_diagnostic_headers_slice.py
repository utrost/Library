from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_cover_controller_sets_diagnostic_headers_for_all_outcomes():
    controller = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()

    assert "coverResponse(" in controller
    assert "X-Library-Cover-Status" in controller
    assert "X-Library-Cover-Reason" in controller
    assert "$this->coverResponse(" in controller
    assert "$preview->getContent()" in controller
    assert "'preview'" in controller
    assert "'cbz-first-image'" in controller
    assert "placeholderResponse" in controller
    assert "'placeholder'" in controller


def test_cover_status_reason_values_are_bounded_and_explicit():
    controller = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()

    assert "private function coverResponse(" in controller
    assert "mb_substr($reason, 0, 160)" in controller
    assert "preview-manager" in controller
    assert "cbz-first-image" in controller
    assert "preview-unavailable" in controller


def test_http_smoke_checks_cover_diagnostic_headers():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "cover_http" in smoke
    assert "cover_content_type" in smoke
    assert "cover_header_status" in smoke
    assert "cover_header_reason" in smoke
    assert "X-Library-Cover-Status" in smoke
    assert "X-Library-Cover-Reason" in smoke
