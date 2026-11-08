#!/usr/bin/env bash
# Transfer a synthetic archive between two already-populated disposable instances.
set -euo pipefail
cd "$(dirname "$0")/.."
: "${LIBRARY_TRANSFER_SOURCE:?Supply the source disposable container}"
: "${LIBRARY_TRANSFER_TARGET:?Supply a different destination disposable container}"
[[ "$LIBRARY_TRANSFER_SOURCE" != "$LIBRARY_TRANSFER_TARGET" ]] || { echo 'Use separate source and destination instances.' >&2; exit 1; }
for container in "$LIBRARY_TRANSFER_SOURCE" "$LIBRARY_TRANSFER_TARGET"; do
  [[ "$(docker inspect --format '{{index .Config.Labels "library.disposable"}}' "$container")" == personal-lists ]] || { echo 'Refusing an unlabelled instance.' >&2; exit 1; }
  docker cp tests/php/curation_portability_transfer.php "$container:/tmp/transfer.php" >/dev/null
  docker exec "$container" chmod 0644 /tmp/transfer.php
done
evidence="${LIBRARY_TRANSFER_EVIDENCE:-$(mktemp -d -t library-curation-transfer-XXXXXXXX)}"
mkdir -p "$evidence"
docker exec -u www-data -e LIBRARY_DISPOSABLE_FIXTURE=1 "$LIBRARY_TRANSFER_SOURCE" php /tmp/transfer.php export | tee "$evidence/export.log"
docker cp "$LIBRARY_TRANSFER_SOURCE:/tmp/library-portability-transfer" "$evidence/" >/dev/null
docker cp "$evidence/library-portability-transfer" "$LIBRARY_TRANSFER_TARGET:/tmp/" >/dev/null
docker exec "$LIBRARY_TRANSFER_TARGET" chmod -R a+rX /tmp/library-portability-transfer
docker exec -u www-data -e LIBRARY_DISPOSABLE_FIXTURE=1 "$LIBRARY_TRANSFER_TARGET" php /tmp/transfer.php restore | tee "$evidence/restore.log"
echo "private_evidence=$evidence"
