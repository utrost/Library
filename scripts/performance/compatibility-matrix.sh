#!/usr/bin/env bash
# Disposable release upgrade, Gutenberg fixture and browser/service compatibility checks.
set -euo pipefail
repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$repo_dir"
out="${EVIDENCE_DIR:-/tmp/library-performance-matrix-$(date +%s)}"
fixture="${LIBRARY_BOOK_FIXTURE_ARCHIVE:-/tmp/library-beta-matrix/gutenberg-en-40.tar.gz}"
beta="${LIBRARY_BETA_ARCHIVE:-/tmp/library-beta-matrix/library-0.1.0-beta.1.tar.gz}"
[[ -f "$fixture" ]] || { echo 'Provide LIBRARY_BOOK_FIXTURE_ARCHIVE with the 40 English Gutenberg books' >&2; exit 1; }
mkdir -p "$out"
archive="${LIBRARY_TEST_ARCHIVE:-}"
if [[ -n "$archive" ]]; then
    [[ -f "$archive" ]] || { echo "Release archive missing: $archive" >&2; exit 1; }
    archive="$(realpath "$archive")"
else
    mkdir -p "$out/stage/library"
    for entry in appinfo lib templates css js l10n img README.md CHANGELOG.md LICENSE; do cp -a "$entry" "$out/stage/library/"; done
    version=$(node -p "JSON.parse(require('fs').readFileSync('package.json')).version")
    node scripts/stage-release-frontend.mjs "$out/stage/library" "$version" > "$out/stage.log"
    archive="$out/library.tar.gz"
    tar --sort=name --mtime=@0 --owner=0 --group=0 --numeric-owner -czf "$archive" -C "$out/stage" library
fi
sha256sum "$archive" > "$out/archive.sha256"
if [[ "${INSTALL_MODE:-upgrade}" == fresh ]]; then beta=""; fi
failed=0
for ver in ${NC_VERSIONS:-33.0.9 34.0.4 35.0.0}; do
    target="$out/nextcloud-$ver"
    mkdir -p "$target"
    echo "Checking Nextcloud $ver"
    set +e
    (
        set -e
        NC_VERSION="$ver" LIBRARY_TEST_ARCHIVE="$archive" LIBRARY_BETA_ARCHIVE="$beta" LIBRARY_BOOK_FIXTURE_ARCHIVE="$fixture" bash scripts/dev-lists-instance.sh start
        source "/tmp/library-lists-dev/$ver.env"
        if [[ "${REQUIRE_INTEGRITY:-0}" == 1 ]]; then
            docker exec -u www-data "$LIBRARY_LISTS_CONTAINER" php occ integrity:check-app library > "$target/integrity.log" 2>&1
            # An empty report and zero exit status indicate valid installed contents.
            test ! -s "$target/integrity.log"
        fi
        export PW_ROOT_PATH=/LibraryLists PW_EXPECTED_CARDS=1 PW_TOTAL_CARDS=40
        docker cp scripts/performance/gutenberg-selector.php "$LIBRARY_LISTS_CONTAINER:/tmp/library-fixture.php"
        docker exec -u www-data "$LIBRARY_LISTS_CONTAINER" php /tmp/library-fixture.php > "$target/fixture.json"
        export PW_ITEM_ID=$(node -p "require('$target/fixture.json').id")
        export PW_SEARCH_TITLE=$(node -p "require('$target/fixture.json').title")
        docker exec -u www-data "$LIBRARY_LISTS_CONTAINER" php occ status --output=json > "$target/server.json"
        if [[ -n "${SCREENSHOT_DIR:-}" && "$ver" == 34.0.4 ]]; then
            node scripts/capture-app-store.mjs > "$target/screenshots.log" 2>&1
        fi
        for check in performance_fixes_integration scan_paging_integration scheduled_scan_integration personal_lists_integration; do
            docker cp "tests/php/$check.php" "$LIBRARY_LISTS_CONTAINER:/tmp/$check.php"
            docker exec -u www-data "$LIBRARY_LISTS_CONTAINER" php "/tmp/$check.php" > "$target/$check.log" 2>&1
            if [[ "$check" == personal_lists_integration ]]; then
                rg -q 'personal_lists_integration_ok=true' "$target/$check.log"
            else
                python3 - "$target/$check.log" <<'CHECK'
import json, sys
rows = [json.loads(line) for line in open(sys.argv[1]) if line.startswith('{')]
assert any(row.get('passed') is True and row.get('assertions', 0) > 0 for row in rows), 'Missing explicit service pass result'
CHECK
            fi
        done
        docker exec -d -u www-data "$LIBRARY_LISTS_CONTAINER" php occ --no-warnings --quiet background-job:worker --stop_after=30m 'OCA\Library\BackgroundJob\ScanJob'
        PLAYWRIGHT_HTML_OUTPUT_DIR="$target/report" PLAYWRIGHT_JSON_OUTPUT_FILE="$target/results.json" npx playwright test --output="$target/artifacts" --reporter=line,html,json > "$target/playwright.log" 2>&1
        NC_URL="$PW_BASE_URL" NC_USER="$PW_USER" NC_CONTAINER="$LIBRARY_LISTS_CONTAINER" node scripts/smoke-inference-apply.mjs > "$target/inference-apply.log" 2>&1
        NC_URL="$PW_BASE_URL" NC_USER="$PW_USER" NC_CONTAINER="$LIBRARY_LISTS_CONTAINER" EVIDENCE_DIR="$target/suggestions" node scripts/smoke-inference-suggestions.mjs > "$target/suggestions.log" 2>&1
        NC_URL="$PW_BASE_URL" NC_USER="$PW_USER" NC_CONTAINER="$LIBRARY_LISTS_CONTAINER" EVIDENCE_DIR="$target/schedules" node scripts/smoke-scheduled-scans.mjs > "$target/schedules.log" 2>&1
    ) > "$target/run.log" 2>&1
    result=$?
    NC_VERSION="$ver" bash scripts/dev-lists-instance.sh stop > "$target/cleanup.log" 2>&1
    cleanup=$?
    set -e
    echo "Nextcloud $ver: exit=$result cleanup=$cleanup"
    if [[ "$result" != 0 || "$cleanup" != 0 ]]; then failed=1; fi
    printf '{"version":"%s","passed":%s,"cleanupPassed":%s}\n' "$ver" "$([[ "$result" == 0 ]] && echo true || echo false)" "$([[ "$cleanup" == 0 ]] && echo true || echo false)" > "$target/summary.json"
done
exit "$failed"
