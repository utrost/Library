#!/usr/bin/env bash
# Verify that real DAV mounts remain readable but cannot enter source write-back.
set -euo pipefail
umask 077
cd "$(dirname "$0")/.."
: "${LIBRARY_STORAGE_SOURCE:?Supply the disposable source Nextcloud container}"
: "${LIBRARY_STORAGE_TARGET:?Supply a different disposable target Nextcloud container}"
[[ "$LIBRARY_STORAGE_SOURCE" != "$LIBRARY_STORAGE_TARGET" ]]
for target in "$LIBRARY_STORAGE_SOURCE" "$LIBRARY_STORAGE_TARGET"; do
  [[ "$(docker inspect --format '{{index .Config.Labels "library.disposable"}}' "$target")" == personal-lists ]] || { echo 'Refusing an unlabelled instance.' >&2; exit 1; }
done
# Require the target's Files external app to have been enabled explicitly on this fixture.
docker exec -u www-data "$LIBRARY_STORAGE_TARGET" php occ files_external:create --help >/dev/null
if docker exec -u www-data "$LIBRARY_STORAGE_SOURCE" php occ config:system:get trusted_domains 999 >/dev/null 2>&1; then echo 'Reserved disposable trusted-domain slot is in use.' >&2; exit 1; fi
suffix=$(openssl rand -hex 4)
network="library-storage-$suffix"
evidence="${LIBRARY_STORAGE_EVIDENCE:-$(mktemp -d -t library-storage-XXXXXXXX)}"
mkdir -p "$evidence"
previous_allow=$(docker exec -u www-data "$LIBRARY_STORAGE_TARGET" php occ config:system:get allow_local_remote_servers 2>/dev/null || true)
mount_id=''; source_created=0; client_created=0; trusted=0; allow_changed=0; network_created=0
fixture() { docker exec -u www-data -e LIBRARY_DISPOSABLE_FIXTURE=1 -e LIBRARY_STORAGE_FIXTURE_SUFFIX="$suffix" "$1" php /tmp/storage-fixture.php "$2"; }
cleanup() {
  result=$?; set +e
  if [[ -n "$mount_id" ]]; then docker exec -u www-data "$LIBRARY_STORAGE_TARGET" php occ files_external:delete "$mount_id" --yes >>"$evidence/cleanup.log" 2>&1; fi
  if [[ "$client_created" == 1 ]]; then fixture "$LIBRARY_STORAGE_TARGET" client-cleanup >>"$evidence/cleanup.log" 2>&1; fi
  if [[ "$source_created" == 1 ]]; then fixture "$LIBRARY_STORAGE_SOURCE" source-cleanup >>"$evidence/cleanup.log" 2>&1; fi
  if [[ "$trusted" == 1 ]]; then docker exec -u www-data "$LIBRARY_STORAGE_SOURCE" php occ config:system:delete trusted_domains 999 >>"$evidence/cleanup.log" 2>&1; fi
  if [[ "$allow_changed" == 1 ]]; then
    if [[ -z "$previous_allow" ]]; then docker exec -u www-data "$LIBRARY_STORAGE_TARGET" php occ config:system:delete allow_local_remote_servers >>"$evidence/cleanup.log" 2>&1
    else docker exec -u www-data "$LIBRARY_STORAGE_TARGET" php occ config:system:set allow_local_remote_servers --type=boolean --value="$previous_allow" >>"$evidence/cleanup.log" 2>&1; fi
  fi
  if [[ "$network_created" == 1 ]]; then
    docker network disconnect "$network" "$LIBRARY_STORAGE_SOURCE" >>"$evidence/cleanup.log" 2>&1
    docker network disconnect "$network" "$LIBRARY_STORAGE_TARGET" >>"$evidence/cleanup.log" 2>&1
    docker network rm "$network" >>"$evidence/cleanup.log" 2>&1
  fi
  echo "private_evidence=$evidence"; exit "$result"
}
trap cleanup EXIT
for target in "$LIBRARY_STORAGE_SOURCE" "$LIBRARY_STORAGE_TARGET"; do
  docker cp tests/php/writeback_storage_integration.php "$target:/tmp/storage-fixture.php" >/dev/null
  docker exec "$target" chmod 0644 /tmp/storage-fixture.php
done
fixture "$LIBRARY_STORAGE_SOURCE" source-seed >"$evidence/source.log"; source_created=1
fixture "$LIBRARY_STORAGE_TARGET" client-seed >"$evidence/client.log"; client_created=1
docker network create --label library.disposable=storage-fixture "$network" >/dev/null; network_created=1
docker network connect "$network" "$LIBRARY_STORAGE_SOURCE"
docker network connect "$network" "$LIBRARY_STORAGE_TARGET"
docker exec -u www-data "$LIBRARY_STORAGE_SOURCE" php occ config:system:set trusted_domains 999 --value="$LIBRARY_STORAGE_SOURCE" >"$evidence/setup.log"; trusted=1
docker exec -u www-data "$LIBRARY_STORAGE_TARGET" php occ config:system:set allow_local_remote_servers --type=boolean --value=true >>"$evidence/setup.log"; allow_changed=1
mount_id=$(docker exec -u www-data "$LIBRARY_STORAGE_TARGET" php occ files_external:create '/Remote books' dav password::password --applicable-user="library-storage-client-$suffix" -c host="$LIBRARY_STORAGE_SOURCE" -c secure=false -c root="/remote.php/dav/files/library-storage-source-$suffix/Source" -c user="library-storage-source-$suffix" -c password=Disposable-storage-2026 --output=json)
[[ "$mount_id" =~ ^[0-9]+$ ]] || { echo 'Unexpected disposable mount result.' >&2; exit 1; }
fixture "$LIBRARY_STORAGE_TARGET" writable | tee "$evidence/writable.log"
fixture "$LIBRARY_STORAGE_SOURCE" source-verify | tee "$evidence/source-after-write.log"
docker exec -u www-data "$LIBRARY_STORAGE_TARGET" php occ files_external:option "$mount_id" readonly true >>"$evidence/setup.log"
fixture "$LIBRARY_STORAGE_TARGET" read-only | tee "$evidence/read-only.log"
fixture "$LIBRARY_STORAGE_SOURCE" source-verify | tee "$evidence/source-after-readonly.log"
