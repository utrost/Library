from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_settings_roots_render_as_shelf_cards_with_collapsed_danger_zone():
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    css = (ROOT / "css" / "style.css").read_text()

    assert "library-add-shelf-card" in template
    assert "library-root-card" in template
    assert "library-root-card-header" in template
    assert "library-root-card-actions" in template
    assert "library-root-danger-zone" in template
    assert "<summary><?php p($l->t('Danger zone')); ?></summary>" in template
    assert ".library-root-card" in css
    assert ".library-root-danger-zone" in css


def test_mobile_catalogue_chrome_prioritizes_search_and_collapses_options():
    vue = (ROOT / "src" / "App.vue").read_text()
    css = (ROOT / "css" / "style.css").read_text()

    assert "const catalogueHeading = computed" in vue
    assert "library-mobile-compact-chrome" in vue
    assert "library-quick-search-row" in vue
    assert "library-quick-filter-options" in vue
    assert "<details class=\"library-quick-filter-options\">" in vue
    assert "Filter & sort" in vue
    assert ".library-mobile-compact-chrome" in css
    assert "@media (max-width: 520px)" in css
    assert ".library-mobile-compact-chrome .library-catalogue-header" in css


def test_detail_hero_demotes_secondary_actions_and_metadata_health():
    template = (ROOT / "templates" / "item-detail.php").read_text()
    css = (ROOT / "css" / "style.css").read_text()

    assert "library-detail-more-actions" in template
    assert "<summary><?php p($l->t('More actions')); ?></summary>" in template
    assert "library-metadata-health-details" in template
    assert "<summary><?php p($l->t('Metadata quality')); ?>" in template
    assert "library-detail-fieldset" in template
    assert "library-detail-fieldset-identity" in template
    assert "library-detail-fieldset-publication" in template
    assert ".library-detail-more-actions" in css
    assert ".library-metadata-health-details" in css
    assert ".library-detail-fieldset" in css


def test_batch_preview_uses_mobile_review_cards_and_sticky_apply():
    template = (ROOT / "templates" / "batch-metadata-edit-preview.php").read_text()
    css = (ROOT / "css" / "style.css").read_text()

    assert "library-batch-preview-apply-summary" in template
    assert "This affects" in template
    assert "library-batch-preview-card-list" in template
    assert "library-batch-preview-card" in template
    assert "library-batch-preview-outcome" in template
    assert ".library-batch-preview-card-list" in css
    assert ".library-batch-preview-apply-form" in css
    assert "position: sticky" in css.split(".library-batch-preview-apply-form", 1)[1].split("}", 1)[0]


def test_discovery_pages_use_context_as_hero_heading():
    vue = (ROOT / "src" / "App.vue").read_text()
    css = (ROOT / "css" / "style.css").read_text()

    assert "const catalogueHeading = computed" in vue
    assert "isDiscoveryPage.value ? discoveryTitle.value" in vue
    assert "library-discovery-hero" in vue
    assert "library-discovery-hero-metrics" in vue
    assert "{{ catalogueHeading }}" in vue
    assert "{{ t('library', 'Publication catalogue') }}" not in vue.split("id=\"library-catalogue-heading\"", 1)[1].split("</h2>", 1)[0]
    assert ".library-discovery-hero" in css
    assert ".library-discovery-hero-metrics" in css
