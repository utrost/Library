from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_cover_explanation_moves_to_refresh_tooltip_not_visible_panel():
    template = (ROOT / "templates" / "item-detail.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "coverQualityExplanation" in controller
    assert "library-cover-quality-explanation" not in template
    assert "title=\"<?php p((string)($item['coverQualityExplanation']" in template
    assert "aria-label=\"<?php p($l->t('Refresh cover preview" in template
    assert "detail_has_cover_refresh_tooltip" in smoke
    assert "detail_has_cover_quality_explanation=${detail.text.includes('library-cover-quality-explanation')}" in smoke


def test_detail_actions_are_grouped_and_ordered_with_star_icon_and_autosave_status():
    template = (ROOT / "templates" / "item-detail.php").read_text()
    css = (ROOT / "css" / "style.css").read_text()

    assert "library-detail-actionbar" in template
    assert "library-detail-primary-actions" in template
    assert "library-detail-secondary-actions" in template
    assert "library-star-button" in template
    assert "library-star-button--starred" in template
    assert "aria-pressed" in template
    assert "★" in template
    assert "onchange=\"this.form.submit()\"" in template
    assert "library-workflow-status-submit-fallback" in template

    actionbar = template.split('class="library-detail-actionbar"', 1)[1].split('</div>', 1)[0]
    assert actionbar.index("Read") < actionbar.index("Show in Files") < actionbar.index("Download source") < actionbar.index("Refresh cover preview")

    assert ".library-detail-actionbar" in css
    assert ".library-star-button" in css
    assert ".library-star-button--starred" in css
    assert ".library-workflow-status-submit-fallback" in css
    assert "position: absolute" in css
