#!/usr/bin/env bash
# Recover a disposable populated beta installation interrupted after package replacement.
set -euo pipefail
repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
beta="${LIBRARY_BETA_ARCHIVE:?Set the preserved beta archive}"
candidate="${LIBRARY_TEST_ARCHIVE:?Set the signed candidate archive}"
fixture="${LIBRARY_BOOK_FIXTURE_ARCHIVE:?Set the 40-book fixture archive}"
for file in "$beta" "$candidate" "$fixture"; do [[ -f "$file" ]] || { echo "Missing $file" >&2; exit 1; }; done
container="library-interrupted-upgrade-$$"
cleanup() { docker rm -f -v "$container" >/dev/null 2>&1 || true; }
trap cleanup EXIT
docker run -d --name "$container" --label library.disposable=interrupted-upgrade nextcloud:34.0.4-apache >/dev/null
for _ in $(seq 1 120); do
    docker exec "$container" test -f /var/www/html/version.php >/dev/null 2>&1 && break
    sleep 1
done
docker exec "$container" test -f /var/www/html/version.php
docker exec -u www-data "$container" php occ maintenance:install --database sqlite \
    --admin-user library-smoke --admin-pass Disposable-upgrade-2026 \
    --data-dir /var/www/html/data >/dev/null
docker cp "$beta" "$container:/tmp/library-beta.tar.gz"
docker exec "$container" sh -c 'tar -xzf /tmp/library-beta.tar.gz -C /var/www/html/custom_apps && chown -R www-data:www-data /var/www/html/custom_apps/library'
docker exec -u www-data "$container" php occ app:enable library >/dev/null
docker cp "$fixture" "$container:/tmp/books.tar.gz"
docker exec "$container" sh -c 'mkdir -p /var/www/html/data/library-smoke/files/LibraryLists && tar -xzf /tmp/books.tar.gz -C /var/www/html/data/library-smoke/files/LibraryLists && chown -R www-data:www-data /var/www/html/data/library-smoke'
docker exec -u www-data "$container" php occ files:scan --path=library-smoke/files/LibraryLists >/dev/null
docker exec -u www-data "$container" php -r 'require "/var/www/html/lib/base.php"; \OC::$server->get(\OCA\Library\Service\RootService::class)->saveRoot("library-smoke", "/LibraryLists", "Gutenberg English", true); $result = \OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan("library-smoke"); if ($result["errors"] || $result["indexed"] !== 40) { echo json_encode($result), PHP_EOL; exit(1); }'
docker cp "$repo_dir/scripts/performance/upgrade-fixture.php" "$container:/tmp/library-upgrade-fixture.php"
docker exec -u www-data "$container" php /tmp/library-upgrade-fixture.php seed
docker cp "$candidate" "$container:/tmp/library-candidate.tar.gz"
docker exec "$container" sh -c 'rm -rf /var/www/html/custom_apps/library && tar -xzf /tmp/library-candidate.tar.gz -C /var/www/html/custom_apps && chown -R www-data:www-data /var/www/html/custom_apps/library'
# Simulate an interrupted deployment at the code-replaced, database-not-upgraded boundary.
docker stop "$container" >/dev/null
docker start "$container" >/dev/null
for _ in $(seq 1 120); do
    docker exec "$container" test -f /var/www/html/version.php >/dev/null 2>&1 && break
    sleep 1
done
docker exec -u www-data "$container" php occ upgrade >/dev/null
docker exec -u www-data "$container" php /tmp/library-upgrade-fixture.php verify
docker exec -u www-data "$container" php -r 'require "/var/www/html/lib/base.php"; $result = \OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan("library-smoke"); if ($result["errors"]) exit(1);'
docker exec -u www-data "$container" php /tmp/library-upgrade-fixture.php verify
integrity="$(docker exec -u www-data "$container" php occ integrity:check-app library)"
[[ -z "$integrity" ]] || { echo "$integrity" >&2; exit 1; }
docker cp "$repo_dir/scripts/check-physical-schema.php" "$container:/tmp/library-check-physical-schema.php"
docker exec -u www-data "$container" php /tmp/library-check-physical-schema.php >/dev/null
docker exec -u www-data "$container" php occ status --output=json | python3 -c 'import json,sys; s=json.load(sys.stdin); assert s["installed"] and not s["maintenance"]'
echo 'interrupted_upgrade_recovered=true books=40 boundary=code_replaced_before_database_upgrade'
