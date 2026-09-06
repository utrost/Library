from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_scale_pilot_script_is_wired_and_cleans_up():
    package = (ROOT / "package.json").read_text()
    script = (ROOT / "scripts" / "smoke-scale-pilot.mjs").read_text()

    assert '"smoke:scale": "node scripts/smoke-scale-pilot.mjs"' in package
    assert "LibraryScale-${count}" in script
    assert "disableOtherRoots" in script
    assert "restoreRoots" in script
    assert "cleanupDb" in script
    assert "fixture_files_removed=true" in script
    assert "temp_token_remaining" in script


def test_scale_pilot_verifies_pagination_from_initial_state():
    script = (ROOT / "scripts" / "smoke-scale-pilot.mjs").read_text()

    assert "decodeInitialState" in script
    assert "cataloguePagination" in script
    assert "for (const [limit, page] of [[25,1], [25,2], [100,1], [500,1]])" in script
    assert "page_${limit}_${page}_has_expected_range" in script
    assert "scale_stage_ok=true" in script


def test_alice_scale_pilot_docs_record_100_1k_10k_results():
    doc = (ROOT / "docs" / "alice-scale-pilot.md").read_text()

    assert "Generated stress pilot, 2026-09-06" in doc
    assert "100 generated PDFs" in doc
    assert "1000 generated PDFs" in doc
    assert "10000 generated PDFs" in doc
    assert "Library scan: 91.19 s" in doc
    assert "limit=500 page=1: 0.19 s" in doc
    assert "npm run smoke:scale -- <count>" in doc


def test_real_scale_pilot_script_is_wired_and_cleans_up():
    package = (ROOT / "package.json").read_text()
    script = (ROOT / "scripts" / "smoke-real-scale-pilot.mjs").read_text()

    assert '"smoke:real-scale": "node scripts/smoke-real-scale-pilot.mjs"' in package
    assert "LibraryRealScale-${count}" in script
    assert "REAL_SCALE_SOURCES" in script
    assert "sourceManifest" in script
    assert "stageRealFiles" in script
    assert "disableOtherRoots" in script
    assert "restoreRoots" in script
    assert "cleanupDb" in script
    assert "temp_token_remaining" in script
    assert "fixture_files_removed=true" in script


def test_real_scale_pilot_verifies_real_item_completeness_and_pagination():
    script = (ROOT / "scripts" / "smoke-real-scale-pilot.mjs").read_text()

    assert "missing_item_rows" in script
    assert "missingItemDiagnostics" in script
    assert "missing_item_diagnostics" in script
    assert "real sample indexing incomplete" in script
    assert "decodeInitialState" in script
    assert "cataloguePagination" in script
    assert "const pageCases = [[25,1], [100,1]]" in script
    assert "if (count > 25) pageCases.push([25,2])" in script
    assert "page_${limit}_${page}_has_expected_range" in script
    assert "real_scale_stage_ok=true" in script
