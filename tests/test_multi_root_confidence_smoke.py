from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_package_exposes_two_root_confidence_smoke_script():
    package = (ROOT / "package.json").read_text()
    assert '"smoke:multi-root"' in package
    assert "scripts/smoke-multi-root.mjs" in package


def test_two_root_smoke_proves_both_roots_shelves_and_scope_isolation():
    script_path = ROOT / "scripts" / "smoke-multi-root.mjs"
    assert script_path.exists()
    script = script_path.read_text()

    for marker in [
        "multi_root_all_scan_roots=2",
        "multi_root_catalogue_total=2",
        "multi_root_shelf_alpha_ok=true",
        "multi_root_shelf_beta_ok=true",
        "multi_root_scoped_scan_preserved_other_root=true",
        "multi_root_duplicate_cards=0",
        "multi_root_stage_ok=true",
        "temp_token_remaining=0",
        "fixture_files_removed=true",
    ]:
        assert marker in script

    assert "LibraryMultiRootAlpha" in script
    assert "LibraryMultiRootBeta" in script
    assert "scanner->scan(getenv('USER_ID'), (int)getenv('ROOT_ID')" in script
    assert "COUNT(DISTINCT i.id)" in script
