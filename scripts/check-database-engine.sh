#!/usr/bin/env bash
# Disposable fresh-install schema check: scripts/check-database-engine.sh 34.0.4 pgsql
set -euo pipefail
version="${1:-34.0.4}"
engine="${2:-sqlite}"
[[ "$version" =~ ^(33\.0\.9|34\.0\.4|35\.0\.0)$ ]] || { echo 'Unsupported matrix version' >&2; exit 2; }
[[ "$engine" =~ ^(sqlite|mysql|pgsql)$ ]] || { echo 'Unsupported matrix database' >&2; exit 2; }
repo="$(cd "$(dirname "$0")/.." && pwd)"
id="library-db-${version//./-}-$engine-$$"
net="$id-net"
nc="$id-nc"
db="$id-db"
password="LibraryMatrix${RANDOM}${RANDOM}"
network_created=0
nc_created=0
db_created=0
cleanup() {
    status=$?
    [[ "$nc_created" == 1 ]] && docker rm -f -v "$nc" >/dev/null 2>&1 || true
    [[ "$db_created" == 1 ]] && docker rm -f -v "$db" >/dev/null 2>&1 || true
    [[ "$network_created" == 1 ]] && docker network rm "$net" >/dev/null 2>&1 || true
    exit "$status"
}
trap cleanup EXIT
docker network create "$net" >/dev/null
network_created=1
if [[ "$engine" == pgsql ]]; then
    docker run -d --name "$db" --network "$net" --network-alias db \
        -e POSTGRES_PASSWORD="$password" -e POSTGRES_DB=nextcloud postgres:16-alpine >/dev/null
    db_created=1
    for _ in $(seq 1 90); do docker exec "$db" pg_isready -h 127.0.0.1 -U postgres -d nextcloud >/dev/null 2>&1 && break; sleep 1; done
    if ! docker exec "$db" pg_isready -h 127.0.0.1 -U postgres -d nextcloud >/dev/null; then docker logs "$db" >&2; exit 1; fi
elif [[ "$engine" == mysql ]]; then
    docker run -d --name "$db" --network "$net" --network-alias db \
        -e MARIADB_ROOT_PASSWORD="$password" -e MARIADB_DATABASE=nextcloud mariadb:11 >/dev/null
    db_created=1
    for _ in $(seq 1 90); do docker exec "$db" mariadb -h 127.0.0.1 -uroot -p"$password" -e 'SELECT 1' >/dev/null 2>&1 && break; sleep 1; done
    docker exec "$db" mariadb -h 127.0.0.1 -uroot -p"$password" -e 'SELECT 1' >/dev/null
fi
docker run -d --name "$nc" --network "$net" --tmpfs /var/www/html/data:uid=33,gid=33,mode=0770 "nextcloud:$version-apache" >/dev/null
nc_created=1
for _ in $(seq 1 120); do docker exec "$nc" test -f /var/www/html/version.php >/dev/null 2>&1 && break; sleep 1; done
docker exec "$nc" test -f /var/www/html/version.php
install=(--database "$engine" --admin-user library-matrix --admin-pass "$password" --data-dir /var/www/html/data)
if [[ "$engine" != sqlite ]]; then
    install+=(--database-host db --database-name nextcloud --database-user "$( [[ "$engine" == pgsql ]] && echo postgres || echo root )" --database-pass "$password")
fi
docker exec -u www-data "$nc" php occ maintenance:install "${install[@]}" >/dev/null
if [[ -n "${LIBRARY_BASELINE_ARCHIVE:-}" ]]; then
    [[ -f "$LIBRARY_BASELINE_ARCHIVE" ]] || { echo 'Baseline archive missing' >&2; exit 1; }
    docker cp "$LIBRARY_BASELINE_ARCHIVE" "$nc:/tmp/library-baseline.tar.gz"
    docker exec "$nc" tar -xzf /tmp/library-baseline.tar.gz -C /var/www/html/custom_apps
    docker exec "$nc" chown -R www-data:www-data /var/www/html/custom_apps/library
    docker exec -u www-data "$nc" php occ app:enable library >/dev/null
    docker exec "$nc" rm -rf /var/www/html/custom_apps/library
fi
if [[ -n "${LIBRARY_TEST_ARCHIVE:-}" ]]; then
    [[ -f "$LIBRARY_TEST_ARCHIVE" ]] || { echo 'Candidate archive missing' >&2; exit 1; }
    docker cp "$LIBRARY_TEST_ARCHIVE" "$nc:/tmp/library-candidate.tar.gz"
    docker exec "$nc" tar -xzf /tmp/library-candidate.tar.gz -C /var/www/html/custom_apps
else
    docker exec "$nc" mkdir -p /var/www/html/custom_apps/library
    for entry in appinfo lib templates css js l10n img README.md CHANGELOG.md LICENSE; do
        docker cp "$repo/$entry" "$nc:/var/www/html/custom_apps/library/"
    done
fi
docker exec "$nc" chown -R www-data:www-data /var/www/html/custom_apps/library
if [[ -n "${LIBRARY_BASELINE_ARCHIVE:-}" ]]; then
    # The candidate has a newer app version, so occ upgrade runs its migrations.
    :
else
    docker exec -u www-data "$nc" php occ app:enable library >/dev/null
fi
docker exec -u www-data "$nc" php occ upgrade >/dev/null
if [[ "${REQUIRE_INTEGRITY:-0}" == 1 ]]; then
    integrity="$(docker exec -u www-data "$nc" php occ integrity:check-app library)"
    [[ -z "$integrity" ]] || { echo "$integrity" >&2; exit 1; }
fi
docker cp "$repo/scripts/check-physical-schema.php" "$nc:/tmp/library-check-physical-schema.php"
docker exec -u www-data "$nc" php /tmp/library-check-physical-schema.php
if [[ -n "${LIBRARY_ROOT_BENCH_COUNT:-}" ]]; then
    docker cp "$repo/scripts/benchmark-root-deletion.php" "$nc:/tmp/library-benchmark-root-deletion.php"
    docker exec -u www-data "$nc" php /tmp/library-benchmark-root-deletion.php "$LIBRARY_ROOT_BENCH_COUNT"
fi
echo "database_matrix_passed=true version=$version engine=$engine"
