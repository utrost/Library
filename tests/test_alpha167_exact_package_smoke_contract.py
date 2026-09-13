from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SMOKE = (ROOT / "scripts/smoke-vue-page.mjs").read_text()


def test_smoke_targets_alpha167_owning_surfaces():
    for predicate in (
        "source_has_primary_catalogue_controls",
        "source_has_calm_catalogue",
        "source_has_selection_gated_actions",
        "source_has_five_review_groups",
        "detail_has_four_metadata_status_concepts",
        "settings_has_four_product_sections",
        "source_has_contextual_sidebar_actions",
        "source_has_no_technical_catalogue_dashboards",
    ):
        assert predicate in SMOKE


def test_catalogue_aggregate_does_not_require_moved_or_removed_surfaces():
    aggregate = SMOKE.split("vue_source_contract_invalid", 1)[0].rsplit("else if (", 1)[-1]
    for obsolete_catalogue_requirement in (
        "metadataReviewWorkbench",
        "Search also checks descriptions",
        "Export corrected metadata",
        "library-shortcut-selectors",
        "Jump into recurring publications with one click",
    ):
        assert obsolete_catalogue_requirement not in aggregate


def test_direct_capability_and_safety_checks_remain_in_the_gate():
    for required in (
        "normalRowForbiddenFields.length !== 0",
        "sidecarManifest.status !== 200",
        "sidecarBundle.status !== 200",
        "download.status !== 200",
        "download.bytes <= 0",
        "importPreview.status !== 200",
        "importPreviewJson.matchedItems < 1",
        "coverRefresh.cacheControl.includes('no-store')",
        "name=\"requesttoken\"",
        "name=\"returnTo\"",
        "value=\"details\"",
    ):
        assert required in SMOKE
