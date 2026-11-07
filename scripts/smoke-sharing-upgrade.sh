#!/usr/bin/env bash
# Focused alpha.2 upgrade/scale check; no release gate and no personal catalogue access.
set -euo pipefail
repo="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo"
old="${LIBRARY_UPGRADE_FROM_ARCHIVE:?Set the preserved alpha.2 archive}"
candidate="${LIBRARY_TEST_ARCHIVE:?Set the candidate archive}"
test -f "$old" && test -f "$candidate"
export NC_VERSION=34.0.4 LIBRARY_LISTS_DATABASE=mysql
export LIBRARY_LISTS_PREFIX="library-sharing-upgrade-$$"
export LIBRARY_LISTS_WORK_DIR="$(mktemp -d -t library-sharing-upgrade-XXXXXXXX)"
chmod 0700 "$LIBRARY_LISTS_WORK_DIR"
container="$LIBRARY_LISTS_PREFIX-34-0-4"
cleanup() {
    result=$?
    if [[ -n "${LIBRARY_SHARING_RESULTS_DIR:-}" ]]; then
        mkdir -p "$LIBRARY_SHARING_RESULTS_DIR"
        cp -a "$LIBRARY_LISTS_WORK_DIR/." "$LIBRARY_SHARING_RESULTS_DIR/"
    fi
    bash scripts/dev-lists-instance.sh stop >/dev/null 2>&1 || true
    rm -rf "$LIBRARY_LISTS_WORK_DIR"
    exit "$result"
}
trap cleanup EXIT
LIBRARY_TEST_ARCHIVE="$old" bash scripts/dev-lists-instance.sh start > "$LIBRARY_LISTS_WORK_DIR/start.log" 2>&1
source "$LIBRARY_LISTS_WORK_DIR/$NC_VERSION.env"
python3 scripts/generate-mixed-publications.py "$LIBRARY_LISTS_WORK_DIR/books" 4 >/dev/null
docker cp "$LIBRARY_LISTS_WORK_DIR/books/mixed-pdf-0001.pdf" "$container:/tmp/library-fixture.pdf" >/dev/null
docker cp tests/php/sharing_upgrade_fixture.php "$container:/tmp/library-sharing-upgrade.php" >/dev/null
docker exec "$container" chmod 0644 /tmp/library-fixture.pdf /tmp/library-sharing-upgrade.php
fixture() { docker exec -u www-data -e LIBRARY_DISPOSABLE_FIXTURE=1 "$container" php /tmp/library-sharing-upgrade.php "$1"; }
fixture seed | tee "$LIBRARY_LISTS_WORK_DIR/seed.log"
LIBRARY_TEST_ARCHIVE="$candidate" bash scripts/dev-lists-instance.sh deploy > "$LIBRARY_LISTS_WORK_DIR/upgrade.log" 2>&1
fixture verify | tee "$LIBRARY_LISTS_WORK_DIR/verify.log"
if [[ "${REQUIRE_INTEGRITY:-0}" == 1 ]]; then
    docker exec -u www-data "$container" php occ integrity:check-app library > "$LIBRARY_LISTS_WORK_DIR/integrity.log"
    test ! -s "$LIBRARY_LISTS_WORK_DIR/integrity.log"
fi
fixture browser > "$LIBRARY_LISTS_WORK_DIR/browser.json"
export PW_OTHER_USER=library-other PW_OTHER_PASSWORD=Disposable-sharing-2026
export PW_OUTSIDER_USER=library-outsider PW_OUTSIDER_PASSWORD=Disposable-sharing-2026
export PW_SHARE_EXCLUDED_ITEM_ID="$(python3 -c 'import json,sys; print(json.load(open(sys.argv[1]))["excludedId"])' "$LIBRARY_LISTS_WORK_DIR/browser.json")"
PLAYWRIGHT_HTML_OUTPUT_DIR="$LIBRARY_LISTS_WORK_DIR/browser-report" \
    npx playwright test tests/gui/sharing/library-only-books.spec.ts --output="$LIBRARY_LISTS_WORK_DIR/browser-results"
fixture scale > "$LIBRARY_LISTS_WORK_DIR/scale.json"
fixture measure > "$LIBRARY_LISTS_WORK_DIR/service-performance.jsonl"
docker cp tests/php/sharing_memory_hook.php "$container:/tmp/library-sharing-memory-hook.php" >/dev/null
docker exec "$container" chmod 0644 /tmp/library-sharing-memory-hook.php
docker exec "$container" sh -c 'printf "auto_prepend_file=/tmp/library-sharing-memory-hook.php\n" > /usr/local/etc/php/conf.d/zz-library-fixture.ini; printf "SetEnv LIBRARY_DISPOSABLE_FIXTURE 1\n" > /etc/apache2/conf-enabled/library-fixture.conf; apachectl -k graceful'
LIBRARY_SHARING_EVIDENCE="$LIBRARY_LISTS_WORK_DIR" node scripts/performance/sharing-browser.mjs
docker cp "$container:/tmp/library-sharing-memory.jsonl" "$LIBRARY_LISTS_WORK_DIR/memory.jsonl" >/dev/null
python3 - "$LIBRARY_LISTS_WORK_DIR/memory.jsonl" <<'PY'
import json, sys
rows = {r['tag']: r for r in map(json.loads, open(sys.argv[1]))}
assert {'range', 'large', 'large-revoke'} <= rows.keys(), rows
for tag in ['large', 'large-revoke']:
    assert rows[tag]['peakBytes'] < 128 * 1024 * 1024, rows
    assert rows[tag]['peakBytes'] <= rows['range']['peakBytes'] + 32 * 1024 * 1024, rows
print('large_stream_memory_bounded=true', json.dumps(rows))
PY
echo 'sharing_populated_mariadb_upgrade_scale_and_browser=passed'
