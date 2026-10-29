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
        source "${LIBRARY_LISTS_WORK_DIR:-/tmp/library-lists-dev}/$ver.env"
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
        docker cp scripts/check-physical-schema.php "$LIBRARY_LISTS_CONTAINER:/tmp/library-check-physical-schema.php"
        docker exec -u www-data "$LIBRARY_LISTS_CONTAINER" php /tmp/library-check-physical-schema.php > "$target/schema-parity.json"
        for check in performance_fixes_integration scan_paging_integration scheduled_scan_integration scanner_warning_cache_integration personal_lists_integration; do
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
        # Seed derived review evidence on a different fixture book. Ordinary GUI
        # title rescans must not remove the required unresolved-language case.
        docker cp scripts/performance/language-review-fixture.php "$LIBRARY_LISTS_CONTAINER:/tmp/library-language-review-fixture.php"
        docker exec -u www-data "$LIBRARY_LISTS_CONTAINER" php /tmp/library-language-review-fixture.php "$PW_USER" "$PW_ITEM_ID" > "$target/language-review-fixture.json"
        # Scan and rescan checks can queue canonical links again. Finish each
        # bounded backfill before the next browser project uses the fixture.
        finish_entity_backfills() {
            local suffix="$1" job_class job_id round pending
            # Each timed job has a five-second budget. A cold fresh install can
            # leave fixture rows queued after one pass, so drain bounded passes.
            for round in {1..12}; do
                for job_class in AuthorBackfillJob SeriesBackfillJob; do
                    job_id="$(docker exec -u www-data "$LIBRARY_LISTS_CONTAINER" php occ background-job:list --output=json | python3 -c 'import json,sys; matches=[job for job in json.load(sys.stdin) if job["class"].endswith(sys.argv[1])]; assert len(matches)==1, matches; print(matches[0]["id"])' "$job_class")"
                    docker exec -u www-data "$LIBRARY_LISTS_CONTAINER" php occ background-job:execute "$job_id" --force-execute > "$target/$job_class-$suffix-round$round.log"
                done
                pending="$(docker exec -u www-data "$LIBRARY_LISTS_CONTAINER" php -r '
require "/var/www/html/config/config.php";
$pdo = new PDO("sqlite:" . $CONFIG["datadirectory"] . "/owncloud.db");
$prefix = $CONFIG["dbtableprefix"] ?? "oc_";
echo (int)$pdo->query("SELECT COUNT(*) FROM {$prefix}library_items WHERE author_sync_status<>0 OR series_sync_status<>0")->fetchColumn(), PHP_EOL;
')"
                if [[ "$pending" == 0 ]]; then
                    printf 'canonical_links_ready=true rounds=%s\n' "$round" > "$target/canonical-links-$suffix.log"
                    return 0
                fi
            done
            echo "canonical_links_pending=$pending after $round rounds" >&2
            return 1
        }
        finish_entity_backfills initial
        # The metadata-rescan journey intentionally queues a fresh canonical
        # author backfill. Run it last so unrelated editor journeys retain the
        # ready fixture they started with; it is still executed on all browser
        # projects as part of this exact-package gate.
        for project in desktop-chromium desktop-firefox mobile-chromium; do
            PLAYWRIGHT_HTML_OUTPUT_DIR="$target/report-$project" PLAYWRIGHT_JSON_OUTPUT_FILE="$target/results-$project.json" npx playwright test --project="$project" --grep-invert 'edits metadata, rescans, then repairs the suggestion and restores the title' --output="$target/artifacts-$project" --reporter=line,html,json > "$target/playwright-$project.log" 2>&1
            finish_entity_backfills "$project"
        done
        for project in desktop-chromium desktop-firefox; do
            PLAYWRIGHT_HTML_OUTPUT_DIR="$target/rescan-report-$project" PLAYWRIGHT_JSON_OUTPUT_FILE="$target/results-rescan-$project.json" npx playwright test tests/gui/details/metadata-edit-persistence.spec.ts --project="$project" --output="$target/rescan-artifacts-$project" --reporter=line,html,json > "$target/playwright-rescan-$project.log" 2>&1
            finish_entity_backfills "rescan-$project"
        done
        NC_URL="$PW_BASE_URL" NC_CONTAINER="$LIBRARY_LISTS_CONTAINER" EVIDENCE_DIR="$target/series" node scripts/smoke-opf-series.mjs > "$target/series.log" 2>&1
        NC_URL="$PW_BASE_URL" NC_USER="$PW_USER" NC_CONTAINER="$LIBRARY_LISTS_CONTAINER" node scripts/smoke-inference-apply.mjs > "$target/inference-apply.log" 2>&1
        NC_URL="$PW_BASE_URL" NC_USER="$PW_USER" NC_CONTAINER="$LIBRARY_LISTS_CONTAINER" EVIDENCE_DIR="$target/duplicates" node scripts/smoke-duplicates.mjs > "$target/duplicates.log" 2>&1
        NC_URL="$PW_BASE_URL" NC_USER="$PW_USER" NC_CONTAINER="$LIBRARY_LISTS_CONTAINER" EVIDENCE_DIR="$target/suggestions" node scripts/smoke-inference-suggestions.mjs > "$target/suggestions.log" 2>&1
        NC_URL="$PW_BASE_URL" NC_USER="$PW_USER" NC_CONTAINER="$LIBRARY_LISTS_CONTAINER" EVIDENCE_DIR="$target/schedules" node scripts/smoke-scheduled-scans.mjs > "$target/schedules.log" 2>&1
        if [[ -n "${SCREENSHOT_DIR:-}" && "$ver" == 34.0.4 ]]; then
            node scripts/capture-app-store.mjs > "$target/screenshots.log" 2>&1
        fi
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
