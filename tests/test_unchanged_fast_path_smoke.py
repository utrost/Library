from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
SMOKE = ROOT / "scripts" / "smoke-unchanged-fast-path.sh"


def test_repo_smoke_runs_production_scanner_twice_and_keeps_private_values_in_memory():
    text = SMOKE.read_text()

    assert "OCA\\Library\\Service\\LibraryScanner" in text
    assert text.count("->scan($userId, $rootId)") == 2
    assert "->orderBy('fixture_count', 'ASC')" in text
    assert "->having($rootQuery->expr()->gt('fixture_count'" in text
    assert "itemTimestamps" in text
    assert "sourceObservations" in text
    assert "metadata_extractor_revision" in text
    assert "metadata_input_fingerprint IS NOT NULL" in text

    forbidden_output = ("user_id", "root_path", "cached_path", "title", "file_id", "item_id")
    output_keys = re.findall(r"emit\('([^']+)'", text)
    assert output_keys
    for key in forbidden_output:
        assert key not in output_keys
    assert "print_r(" not in text
    assert "var_dump(" not in text
    assert "json_encode($" not in text


def test_smoke_asserts_safe_aggregate_acceptance_including_warmed_reruns():
    text = SMOKE.read_text()

    for assertion in (
        "$first['roots'] === 1",
        "$second['roots'] === 1",
        "$first['indexed'] === $fixtureCount",
        "$second['indexed'] === $fixtureCount",
        "count($first['errors']) === 0",
        "count($second['errors']) === 0",
        "$first['filesMissing'] === 0",
        "$second['filesMissing'] === 0",
        "$secondRewritten === 0",
        "$markersAfterFirst > 0",
        "$markersAfterSecond === $markersAfterFirst",
        "$rowsBefore === $rowsAfterFirst",
        "$rowsAfterSecond === $rowsAfterFirst",
        "$sourceObservationChanges === 0",
    ):
        assert assertion in text

    assert "$firstRewritten >= 0" in text
    assert "catalogue_rows_rewritten_first" in text
    assert "catalogue_rows_rewritten_second" in text
    assert "source_observation_changes" in text
    assert "source_writes" not in text
    assert "unchanged_fast_path_smoke_ok" in text


def test_smoke_separates_integer_second_timestamps_before_second_scan():
    text = SMOKE.read_text()

    first_scan = text.index("$first = $scanner->scan($userId, $rootId);")
    boundary = text.index("$firstScanCompletedAt = time();")
    wait = text.index("waitUntilAfter($firstScanCompletedAt);")
    after_first = text.index("$timestampsAfterFirst = itemTimestamps(")
    second_scan = text.index("$second = $scanner->scan($userId, $rootId);")

    assert first_scan < boundary < wait < after_first < second_scan
    assert "function waitUntilAfter(int $timestamp): void" in text
    assert "$deadline = microtime(true) +" in text
    assert "if (microtime(true) >= $deadline)" in text
    assert "failSmoke('timestamp_separation_timeout');" in text
    assert "while (time() <= $timestamp)" in text


def test_release_package_smoke_uses_repo_smoke_after_upgrade_and_requires_exact_version():
    text = (ROOT / "scripts" / "smoke-release-package.sh").read_text()

    upgrade = text.index("php occ upgrade")
    unchanged = text.index('"$ROOT/scripts/smoke-unchanged-fast-path.sh"')
    browser = text.index("npm run smoke:browser")
    assert upgrade < unchanged < browser
    assert 'EXPECTED_VERSION="0.1.0-alpha.155"' in text
    assert 'if [ "$VERSION" != "$EXPECTED_VERSION" ]' in text
    assert "php occ app:list --output=json" in text
    assert 'if [ "$INSTALLED_VERSION" != "$EXPECTED_VERSION" ]' in text
    assert "/var/www/html/custom_apps/library/scripts/smoke-unchanged-fast-path.sh" not in text


def test_exact_package_php_lint_list_contains_fast_path_runtime_and_migration_files():
    text = (ROOT / "scripts" / "smoke-release-package.sh").read_text()

    for path in (
        "lib/Metadata/MetadataFastPathDecision.php",
        "lib/Metadata/MetadataInputFingerprint.php",
        "lib/Metadata/PublicationMetadataService.php",
        "lib/Service/FileIndexService.php",
        "lib/Service/ItemService.php",
        "lib/Service/LibraryScanner.php",
        "lib/Migration/Version000100Date20260911130000.php",
    ):
        assert f"php -l /var/www/html/custom_apps/library/{path}" in text
