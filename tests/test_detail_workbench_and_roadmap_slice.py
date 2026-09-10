from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_readme_and_roadmap_reflect_details_owned_editing():
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "details page owns publication metadata, tag and comment editing" in readme
    assert "catalogue cards are browse-only" in readme
    assert "Phase 2.6 — Details-owned editing workbench" in roadmap
    assert "details page owns metadata, tag and comment editing" in roadmap
    assert "catalogue cards stay browse-only" in roadmap
    assert "detail workbench layout" in roadmap


def test_detail_template_has_scannable_workbench_sections():
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "library-detail-workbench" in template
    assert "library-detail-primary" in template
    assert "library-detail-secondary" in template
    assert "library-detail-section-meta" in template
    assert "library-detail-edit-form" in template
    assert "library-detail-section-nextcloud" in template
    assert "library-detail-section-file" in template
    assert "library-detail-section-provenance" in template
    assert "aria-labelledby=\"library-publication-metadata-heading\"" in template
    assert "aria-labelledby=\"library-nextcloud-metadata-heading\"" in template


def test_detail_workbench_css_is_responsive_and_readable():
    css = (ROOT / "css" / "style.css").read_text()

    assert ".library-detail-workbench" in css
    assert "grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.8fr)" in css
    assert ".library-detail-primary" in css
    assert ".library-detail-secondary" in css
    assert ".library-detail-edit-form" in css
    assert "@media (max-width: 900px)" in css
    assert ".library-detail-workbench" in css[css.index("@media (max-width: 900px)") :]
    assert "grid-template-columns: 1fr" in css[css.index("@media (max-width: 900px)") :]


def test_browser_smoke_checks_detail_page_workbench_accessibility():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()

    assert "detailWorkbench" in smoke
    assert "detailSectionsLabelled" in smoke
    assert "detailUnlabelledControls" in smoke
    assert "browser_detail_workbench" in smoke
    assert "browser_detail_unlabelled_controls" in smoke
