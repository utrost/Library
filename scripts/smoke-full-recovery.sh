#!/usr/bin/env bash
# Restore a disposable NC34 SQLite instance from its database, config, app and data backup.
set -euo pipefail
source_container="${LIBRARY_RECOVERY_SOURCE:-library-lists-34-0-4}"
clone="library-recovery-clone-$$"
backup="$(mktemp -d -t library-recovery-XXXXXX)"
clone_created=0
maintenance_on=0
cleanup() {
    status=$?
    if [[ "$maintenance_on" == 1 ]]; then docker exec -u www-data "$source_container" php occ maintenance:mode --off >/dev/null 2>&1 || true; fi
    if [[ "$clone_created" == 1 ]]; then docker rm -f -v "$clone" >/dev/null 2>&1 || true; fi
    rm -rf "$backup"
    exit "$status"
}
trap cleanup EXIT
[[ "$(docker inspect --format '{{index .Config.Labels "library.disposable"}}' "$source_container")" == personal-lists ]] || {
    echo 'Recovery source must be a labelled disposable Library instance' >&2; exit 1;
}
image="$(docker inspect --format '{{.Config.Image}}' "$source_container")"
docker exec -u www-data "$source_container" php occ maintenance:mode --on >/dev/null
maintenance_on=1
mkdir -p "$backup/data" "$backup/app"
docker cp "$source_container:/var/www/html/data/." "$backup/data/"
test -s "$backup/data/owncloud.db"
echo "backup_sqlite_bytes=$(stat -c %s "$backup/data/owncloud.db")"
docker cp "$source_container:/var/www/html/config/config.php" "$backup/config.php"
docker cp "$source_container:/var/www/html/custom_apps/library/." "$backup/app/"
docker cp "$source_container:/tmp/library-recovery-expected.json" "$backup/library-recovery-expected.json"
docker exec -u www-data "$source_container" php occ maintenance:mode --off >/dev/null
maintenance_on=0
docker run -d --name "$clone" --label library.disposable=recovery --tmpfs /var/www/html/data:uid=33,gid=33,mode=0770 "$image" >/dev/null
clone_created=1
for _ in $(seq 1 120); do
    docker exec "$clone" test -f /var/www/html/version.php >/dev/null 2>&1 && break
    sleep 1
done
docker exec "$clone" test -f /var/www/html/version.php
tar -C "$backup/data" -cf - . | docker exec -i "$clone" tar -C /var/www/html/data -xf -
docker exec "$clone" sh -c 'test "$(stat -c %s /var/www/html/data/owncloud.db)" -gt 1000000'
docker cp "$backup/config.php" "$clone:/var/www/html/config/config.php"
docker exec "$clone" mkdir -p /var/www/html/custom_apps/library
docker cp "$backup/app/." "$clone:/var/www/html/custom_apps/library/"
docker cp "$backup/library-recovery-expected.json" "$clone:/tmp/library-recovery-expected.json"
docker cp "$(dirname "$0")/recovery-fixture.php" "$clone:/tmp/library-recovery-fixture.php"
docker cp "$(dirname "$0")/check-physical-schema.php" "$clone:/tmp/library-check-physical-schema.php"
docker exec "$clone" chown -R www-data:www-data /var/www/html/data /var/www/html/config/config.php /var/www/html/custom_apps/library
if ! docker exec -u www-data "$clone" php occ maintenance:data-fingerprint; then
    docker exec "$clone" find /var/www/html/data -maxdepth 3 -name owncloud.db -ls || true
    docker exec -u www-data "$clone" php occ status || true
    docker exec "$clone" sh -c 'tail -n 8 /var/www/html/data/nextcloud.log' || true
    exit 1
fi
docker exec -u www-data "$clone" php /tmp/library-check-physical-schema.php
docker exec -u www-data "$clone" php /tmp/library-recovery-fixture.php verify
echo 'full_recovery_smoke_ok=true'
