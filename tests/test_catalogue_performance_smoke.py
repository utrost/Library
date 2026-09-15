from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
SMOKE = ROOT / "scripts" / "smoke-catalogue-performance.mjs"


def test_fast_catalogue_smoke_never_hydrates_normal_paths_and_checks_deferred_response():
    text = SMOKE.read_text()

    assert "'/apps/library/catalogue?limit=25'" in text
    assert "'/apps/library/catalogue?subject=photolab&limit=25'" in text
    assert "url.searchParams.get('hydrate') === '1'" in text
    assert "payload.facetsDeferred !== true" in text
    fast_paths = re.findall(r"timeCatalogue\([^\n]+,\s*'([^']+)'[^\n]+,\s*true\)", text)
    assert fast_paths == [
        "/apps/library/catalogue?limit=25",
        "/apps/library/catalogue?subject=photolab&limit=25",
    ]
    assert all("hydrate=1" not in path for path in fast_paths)


def test_catalogue_smoke_has_configurable_default_budget_and_optional_hydration_comparison():
    text = SMOKE.read_text()

    assert "LIBRARY_CATALOGUE_FAST_BUDGET_SECONDS || '1.0'" in text
    assert "elapsedSeconds > fastBudgetSeconds" in text
    assert "LIBRARY_CATALOGUE_MEASURE_HYDRATE === '1'" in text
    assert "'/apps/library/catalogue?hydrate=1&limit=25'" in text
    assert "catalogue_hydrate_comparison" in text


def test_catalogue_smoke_always_removes_its_named_temporary_token():
    text = SMOKE.read_text()
    finally_block = text.split("} finally {", 1)[1]

    assert "user:add-app-password" in text
    assert "tokenName" in text
    assert "user:auth-tokens:list" in finally_block
    assert "user:auth-tokens:delete" in finally_block
    assert "catalogue_temp_token_remaining" in finally_block
    assert "remaining !== 0" in finally_block


def test_catalogue_smoke_metrics_are_stable_parseable_key_value_names():
    text = SMOKE.read_text()

    literal_names = re.findall(r"metric\('([a-z][a-z0-9_]*)'", text)
    assert set(literal_names) >= {
        "catalogue_fast_budget_seconds",
        "catalogue_performance_error",
        "catalogue_temp_token_remaining",
        "catalogue_performance_smoke_ok",
    }
    assert "`${label}_http_status`" in text
    assert "`${label}_elapsed_seconds`" in text
    assert "`${label}_facets_deferred`" in text
    assert "console.log(`${name}=${value}`)" in text
