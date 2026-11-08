#!/usr/bin/env bash
# Focused local populated upgrade and curation checks; never targets a developer catalogue.
set -euo pipefail
cd "$(dirname "$0")/.."
: "${LIBRARY_UPGRADE_FROM_ARCHIVE:?Supply the preserved alpha.5 package or source fixture archive}"
export NC_VERSION="${NC_VERSION:-34.0.4}" LIBRARY_LISTS_DATABASE="${LIBRARY_LISTS_DATABASE:-mysql}"
export LIBRARY_LISTS_PREFIX="${LIBRARY_LISTS_PREFIX:-library-curation-upgrade-$$}"
export LIBRARY_LISTS_WORK_DIR="${LIBRARY_LISTS_WORK_DIR:-$(mktemp -d -t library-curation-upgrade-XXXXXXXX)}"
container="$LIBRARY_LISTS_PREFIX-${NC_VERSION//./-}"
cleanup() { result=$?; echo "private_evidence=$LIBRARY_LISTS_WORK_DIR"; if [[ "${LIBRARY_KEEP_FIXTURE:-0}" != 1 ]]; then bash scripts/dev-lists-instance.sh stop >/dev/null 2>&1 || true; fi; exit "$result"; }
trap cleanup EXIT
LIBRARY_TEST_ARCHIVE="$LIBRARY_UPGRADE_FROM_ARCHIVE" bash scripts/dev-lists-instance.sh start > "$LIBRARY_LISTS_WORK_DIR/start.log" 2>&1
python3 scripts/generate-mixed-publications.py "$LIBRARY_LISTS_WORK_DIR/books" 4 >/dev/null
docker cp "$LIBRARY_LISTS_WORK_DIR/books/mixed-pdf-0001.pdf" "$container:/tmp/library-fixture.pdf" >/dev/null
for pair in 'tests/php/sharing_upgrade_fixture.php:library-sharing-upgrade.php' 'tests/php/curation_alpha6_integration.php:curation.php' 'tests/php/curation_lifecycle_integration.php:curation-lifecycle.php' 'scripts/check-physical-schema.php:check-schema.php'; do
  docker cp "${pair%:*}" "$container:/tmp/${pair#*:}" >/dev/null
  docker exec "$container" chmod 0644 "/tmp/${pair#*:}"
done
docker exec "$container" chmod 0644 /tmp/library-fixture.pdf
run_fixture() { docker exec -u www-data -e LIBRARY_DISPOSABLE_FIXTURE=1 "$container" php "$@"; }
run_fixture /tmp/library-sharing-upgrade.php seed | tee "$LIBRARY_LISTS_WORK_DIR/seed.log"
# Prefer the exact signed candidate when supplied; otherwise this is a source-only check.
LIBRARY_TEST_ARCHIVE="${LIBRARY_UPGRADE_TO_ARCHIVE:-}" bash scripts/dev-lists-instance.sh deploy > "$LIBRARY_LISTS_WORK_DIR/upgrade.log" 2>&1
run_fixture /tmp/library-sharing-upgrade.php verify | tee "$LIBRARY_LISTS_WORK_DIR/preserved.log"
run_fixture /tmp/check-schema.php | tee "$LIBRARY_LISTS_WORK_DIR/schema.log"
for mode in schema services native boundaries genres organisation writeback history-live-source worker-isolation archive-bounds archive-indexing notes-title archive-empty archive-fault archive; do run_fixture /tmp/curation.php "$mode" | tee "$LIBRARY_LISTS_WORK_DIR/$mode.log"; done
run_fixture /tmp/curation-lifecycle.php | tee "$LIBRARY_LISTS_WORK_DIR/lifecycle.log"
