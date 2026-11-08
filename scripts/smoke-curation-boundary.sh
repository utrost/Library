#!/usr/bin/env bash
# Maximum organisation selection on generated files; use a populated disposable curation instance.
set -euo pipefail
umask 077
cd "$(dirname "$0")/.."
: "${LIBRARY_LISTS_CONTAINER:?Supply a disposable curation container}"
container="$LIBRARY_LISTS_CONTAINER"
[[ "$(docker inspect --format '{{index .Config.Labels "library.disposable"}}' "$container")" == personal-lists ]] || { echo 'Refusing an unlabelled instance.' >&2; exit 1; }
docker exec "$container" test -f /tmp/library-fixture.pdf
docker cp tests/php/curation_bulk_boundary.php "$container:/tmp/bulk-boundary.php" >/dev/null
docker exec "$container" chmod 0644 /tmp/bulk-boundary.php
evidence="${LIBRARY_BOUNDARY_EVIDENCE:-$(mktemp -d -t library-curation-boundary-XXXXXXXX)}"
mkdir -p "$evidence"
cleanup() {
  if [[ "${LIBRARY_KEEP_BOUNDARY_FIXTURE:-0}" != 1 ]] && docker exec "$container" test -f /tmp/library-curation-bulk.json; then
    docker exec -u www-data -e LIBRARY_DISPOSABLE_FIXTURE=1 "$container" php /tmp/bulk-boundary.php cleanup > "$evidence/cleanup.log" 2>&1 || echo 'Disposable boundary-account cleanup needs retry.' >&2
  fi
}
trap cleanup EXIT
for mode in seed prepare apply undo; do
  docker exec -u www-data -e LIBRARY_DISPOSABLE_FIXTURE=1 "$container" php -d memory_limit=768M /tmp/bulk-boundary.php "$mode" > "$evidence/$mode.log" 2>&1
  tail -n 1 "$evidence/$mode.log"
done
docker cp "$container:/tmp/library-curation-bulk.json" "$evidence/fixture.json" >/dev/null
echo "private_evidence=$evidence"
