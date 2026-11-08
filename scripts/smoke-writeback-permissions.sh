#!/usr/bin/env bash
set -euo pipefail
umask 077
cd "$(dirname "$0")/.."
: "${LIBRARY_LISTS_CONTAINER:?Supply a disposable Nextcloud container}"
container="$LIBRARY_LISTS_CONTAINER"
[[ "$(docker inspect --format '{{index .Config.Labels "library.disposable"}}' "$container")" == personal-lists ]] || { echo 'Refusing an unlabelled instance.' >&2; exit 1; }
evidence="${LIBRARY_PERMISSIONS_EVIDENCE:-$(mktemp -d -t library-writeback-permissions-XXXXXXXX)}"
mkdir -p "$evidence"
docker cp tests/php/writeback_permissions_integration.php "$container:/tmp/writeback-permissions.php" >/dev/null
docker exec "$container" chmod 0644 /tmp/writeback-permissions.php
fixture() { docker exec -u www-data -e LIBRARY_DISPOSABLE_FIXTURE=1 "$container" php /tmp/writeback-permissions.php "$1"; }
cleanup() { result=$?; if docker exec "$container" test -f /tmp/library-writeback-permissions.json; then fixture cleanup >"$evidence/cleanup.log" 2>&1 || echo 'Permission-fixture cleanup needs retry.' >&2; fi; echo "private_evidence=$evidence"; exit "$result"; }
trap cleanup EXIT
for mode in seed preview revoke blocked grant retry; do fixture "$mode" | tee "$evidence/$mode.log"; done
