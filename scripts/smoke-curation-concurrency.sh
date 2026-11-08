#!/usr/bin/env bash
# Run after smoke-curation-upgrade.sh with LIBRARY_KEEP_FIXTURE=1.
set -euo pipefail
cd "$(dirname "$0")/.."
: "${LIBRARY_LISTS_CONTAINER:?Supply the populated disposable curation container}"
container="$LIBRARY_LISTS_CONTAINER"
if [[ "$(docker inspect --format '{{index .Config.Labels "library.disposable"}}' "$container")" != personal-lists ]]; then
  echo 'Refusing an instance without the disposable fixture label.' >&2
  exit 1
fi
evidence="${LIBRARY_CONCURRENCY_EVIDENCE:-$(mktemp -d -t library-curation-concurrency-XXXXXXXX)}"
mkdir -p "$evidence"
docker cp tests/php/curation_alpha6_integration.php "$container:/tmp/curation.php" >/dev/null
docker exec "$container" chmod 0644 /tmp/curation.php
run() { docker exec -u www-data -e LIBRARY_DISPOSABLE_FIXTURE=1 "$container" php /tmp/curation.php "$@"; }
workers() {
  run concurrency-worker > "$evidence/$1-worker-a.log" 2>&1 & local first=$!
  run concurrency-worker > "$evidence/$1-worker-b.log" 2>&1 & local second=$!
  local result=0
  wait "$first" || result=1
  wait "$second" || result=1
  return "$result"
}
run concurrency-seed | tee "$evidence/seed.log"
workers prepare
run concurrency-approve | tee "$evidence/approve.log"
workers apply
run concurrency-verify | tee "$evidence/verify.log"
run lock-seed | tee "$evidence/lock-seed.log"
run lock-holder > "$evidence/lock-holder.log" 2>&1 & holder=$!
trap 'wait "$holder" || true' EXIT
ready=0
for attempt in {1..20}; do
  if docker exec "$container" test -f /tmp/library-writeback-lock.ready; then ready=1; break; fi
  sleep 0.5
done
[[ "$ready" == 1 ]] || { echo 'The source-lock fixture did not become ready.' >&2; exit 1; }
run lock-check | tee "$evidence/lock-check.log"
wait "$holder"
trap - EXIT
run lock-verify | tee "$evidence/lock-verify.log"
echo "private_evidence=$evidence"
