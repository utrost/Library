from pathlib import Path


ROOT = Path(__file__).parents[1]


def test_failed_catalogue_star_feedback_keeps_the_overlay_visible():
    css = (ROOT / "css" / "style.css").read_text(encoding="utf-8")
    assert ".library-cover-star-form:has(.library-star-feedback:not([hidden]))" in css


def test_alpha_155_controller_serves_the_versioned_race_hardened_assets():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text(encoding="utf-8")
    assert "library-main-0-1-0-alpha-156" in controller
    assert "library-vue-0-1-0-alpha-156" in controller
