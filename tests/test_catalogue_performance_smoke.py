from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
SMOKE = ROOT / "scripts" / "smoke-catalogue-performance.mjs"


def test_fast_catalogue_smoke_never_hydrates_normal_paths_and_checks_deferred_response():
    text = SMOKE.read_text()

    assert "'/apps/library/catalogue?limit=25'" in text
    assert "url.searchParams.get('hydrate') === '1'" in text
    assert "payload.facetsDeferred !== true" in text
    assert "contentType.includes('json')" in text


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


def test_catalogue_smoke_covers_every_request_filter_and_reports_live_value_skips():
    text = SMOKE.read_text()
    expected = {
        "q", "type", "publisher", "publication", "year", "creator", "format", "tag",
        "shelf", "folder", "status", "workflowStatus", "subject", "classification",
        "scannerConflicts", "starred", "needsMetadata", "coverReview", "noCreator",
        "noPublication", "noDate", "titleFromFilename", "noDescription",
        "unsupportedContainer", "weakMetadata", "unreviewedImports",
    }

    filters_block = text.split("const FILTERS = [", 1)[1].split("]", 1)[0]
    assert set(re.findall(r"'([A-Za-z]+)'", filters_block)) == expected
    assert "discoverFilterValues()" in text
    assert "dbtableprefix" in text and "new PDO" in text
    assert "_skipped_reason`" in text
    assert "no representative live value" in text


def test_catalogue_smoke_covers_filter_removal_pagination_and_details_page():
    text = SMOKE.read_text()

    assert "filteredUrl.searchParams.delete(filter)" in text
    assert "removed.activeFilters?.[filter]" in text
    assert "catalogue_pagination_page_1_fast" in text
    assert "String(path).startsWith('?')" in text
    assert "catalogueApiPath(pageOne.cataloguePagination.nextUrl)" in text
    assert "cataloguePagination.previousUrl" in text
    assert "catalogueApiPath(pageTwo.cataloguePagination.previousUrl)" in text
    assert "unfiltered.items?.find((item) => item.detailsUrl)?.detailsUrl" in text
    assert "html.includes('library-item-detail')" in text


def test_catalogue_smoke_accumulates_path_failures_so_later_paths_still_run():
    text = SMOKE.read_text()

    assert "const failures = []" in text
    assert "const attempt = async" in text
    assert "failures.push(`${label} exceeded" in text
    assert "failures.push(error instanceof Error" in text
    assert "failures.join('; ')" in text
    assert "smokePassed = failures.length === 0" in text
