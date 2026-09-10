from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_cover_controller_extracts_first_cbz_image_before_placeholder():
    controller = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()
    assert "use ZipArchive;" in controller
    assert "extractCbzFirstImageCover" in controller
    assert "isCbzFile" in controller
    assert "first-image cover" in controller
    assert "image/jpeg" in controller
    assert "image/png" in controller
    assert "image/webp" in controller
    assert "getFromIndex" in controller


def test_cover_controller_prefers_preview_then_cbz_first_image_then_svg_placeholder():
    controller = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()
    preview_pos = controller.index("getPreview(")
    cbz_pos = controller.index("extractCbzFirstImageCover")
    placeholder_pos = controller.index("placeholderResponse($this->coverInitials")
    assert preview_pos < cbz_pos < placeholder_pos
    assert "return $cbzCover" in controller


def test_docs_name_cbz_first_image_cover_slice():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    assert "CBZ first-image covers" in roadmap
    assert "first-image cover extraction" in roadmap
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    assert "CBZ first-image covers" in readme
