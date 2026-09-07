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
    assert "☆" in template
    assert "onchange=\"this.form.submit()\"" in template
    assert "library-workflow-status-submit-fallback" in template
    workflow_form = template.split('class="library-inline-form library-workflow-status-form"', 1)[1].split('</form>', 1)[0]
    assert "<label>" not in workflow_form
    assert "</label>" not in workflow_form
    assert "aria-label=\"<?php p($l->t('Workflow status')); ?>\"" in workflow_form

    actionbar = template.split('class="library-detail-actionbar"', 1)[1].split('</div>', 1)[0]
    assert actionbar.index("Read") < actionbar.index("Show in Files") < actionbar.index("Download source") < actionbar.index("Refresh cover preview")

    assert ".library-detail-actionbar" in css
    assert ".library-star-button" in css
    assert ".library-star-button--starred" in css
    assert "--library-star-off-color" in css
    assert "--library-star-on-color" in css
    assert ".library-workflow-status-submit-fallback" in css
    assert "position: absolute" in css


def test_catalogue_cards_offer_hover_star_toggle_with_csrf_token():
    app = (ROOT / "src" / "App.vue").read_text()
    fallback = (ROOT / "src" / "main.js").read_text()
    css = (ROOT / "css" / "style.css").read_text()

    assert "library-cover-star-form" in app
    assert ":action=\"item.starUrl\"" in app
    assert "name=\"requesttoken\"" in app
    assert "name=\"returnTo\" value=\"catalogue\"" in app
    assert ":value=\"item.starred ? '0' : '1'\"" in app
    assert "{{ item.starred ? '★' : '☆' }}" in app
    assert "library-cover-star-button--starred" in app
    assert "library-cover-card:hover .library-cover-star-form" in css
    assert ".library-cover-star-button--starred" in css
    assert "fallbackHiddenRequestToken(state)" in fallback
    assert "library-cover-star-form" in fallback
