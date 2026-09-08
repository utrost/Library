from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


def test_detail_page_has_single_publication_metadata_surface():
    template = (ROOT / "templates" / "item-detail.php").read_text()

    meta_section = re.search(
        r'<section class="library-panel library-detail-section-meta"[\s\S]*?</section>',
        template,
    )
    assert meta_section, "detail page should keep one publication metadata section"
    section = meta_section.group(0)

    assert "library-detail-edit-form" in section
    assert "library-detail-readonly-metadata" not in section
    assert "<dl class=\"library-item-metadata\">" not in section
    assert "$l->t('Edit publication metadata')" not in section
    assert "$l->t('Publication metadata')" in section


def test_detail_smoke_tracks_single_metadata_surface():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "detail_has_single_metadata_surface" in smoke
