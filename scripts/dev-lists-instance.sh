#!/usr/bin/env bash
# Disposable, loopback-only Nextcloud for the personal-lists development loop.
set -euo pipefail
repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
nc_version="${NC_VERSION:-34.0.4}"
instance="${LIBRARY_LISTS_PREFIX:-library-lists}-${nc_version//./-}"
work_dir="${LIBRARY_LISTS_WORK_DIR:-/tmp/library-lists-dev}"
mkdir -p "$work_dir"
env_file="$work_dir/$nc_version.env"
action="${1:-start}"

owned_instance() {
  [[ "$(docker inspect --format '{{index .Config.Labels "library.disposable"}}' "$instance" 2>/dev/null)" == personal-lists ]]
}

deploy() {
  owned_instance || { echo 'Refusing to deploy to an instance without the personal-lists label' >&2; exit 1; }
  docker exec "$instance" mkdir -p /var/www/html/custom_apps/library
  if [[ -n "${LIBRARY_TEST_ARCHIVE:-}" ]]; then
    docker cp "$LIBRARY_TEST_ARCHIVE" "$instance:/tmp/library-candidate.tar.gz" >/dev/null
    docker exec "$instance" rm -rf /var/www/html/custom_apps/library
    docker exec "$instance" tar -xzf /tmp/library-candidate.tar.gz -C /var/www/html/custom_apps
  else
    for entry in appinfo lib templates css js l10n img README.md CHANGELOG.md LICENSE; do
      docker cp "$repo_dir/$entry" "$instance:/var/www/html/custom_apps/library/" >/dev/null
    done
  fi
  docker exec "$instance" chown -R www-data:www-data /var/www/html/custom_apps/library
  docker exec -u www-data "$instance" php occ app:enable library
  docker exec -u www-data "$instance" php occ upgrade
  echo "deployed=$instance"
}

case "$action" in
  start)
    if docker inspect "$instance" >/dev/null 2>&1; then
      owned_instance || { echo 'Container name already in use' >&2; exit 1; }
      echo "already_running=$instance environment=$env_file"; exit 0
    fi
    docker run --rm -d --label library.disposable=personal-lists --name "$instance" -p 127.0.0.1::80 "nextcloud:$nc_version-apache" >/dev/null
    ready=0
    for _ in $(seq 1 120); do
      if docker exec "$instance" test -f /var/www/html/version.php >/dev/null 2>&1; then ready=1; break; fi
      sleep 1
    done
    [[ "$ready" == 1 ]] || { echo 'Instance initialization timed out' >&2; exit 1; }
    docker exec -u www-data "$instance" php occ maintenance:install --database sqlite --admin-user library-smoke --admin-pass 'Disposable-lists-2026' --data-dir /var/www/html/data
    port=$(docker port "$instance" 80/tcp | sed 's/.*://')
    docker exec -u www-data "$instance" php occ config:system:set trusted_domains 1 --value="127.0.0.1:$port" >/dev/null
    docker exec -u www-data "$instance" php occ config:system:set overwrite.cli.url --value="http://127.0.0.1:$port" >/dev/null
    docker exec -u www-data "$instance" php occ config:app:set --value false firstrunwizard wizard_enabled >/dev/null
    # Install the frozen beta first when supplied, to exercise the actual upgrade migration.
    if [[ -n "${LIBRARY_BETA_ARCHIVE:-}" ]]; then
      docker cp "$LIBRARY_BETA_ARCHIVE" "$instance:/tmp/library-beta.tar.gz" >/dev/null
      docker exec "$instance" sh -c 'tar -xzf /tmp/library-beta.tar.gz -C /var/www/html/custom_apps && chown -R www-data:www-data /var/www/html/custom_apps/library'
      docker exec -u www-data "$instance" php occ app:enable library
    fi
    docker exec -u www-data "$instance" php occ background:cron >/dev/null
    # With an older package installed, populate and correct real books before upgrading.
    if [[ -z "${LIBRARY_BETA_ARCHIVE:-}" ]]; then deploy; fi
    if [[ -n "${LIBRARY_BOOK_FIXTURE_ARCHIVE:-}" ]]; then
      docker cp "$LIBRARY_BOOK_FIXTURE_ARCHIVE" "$instance:/tmp/books.tar.gz" >/dev/null
      docker exec "$instance" sh -c 'mkdir -p /var/www/html/data/library-smoke/files/LibraryLists && tar -xzf /tmp/books.tar.gz -C /var/www/html/data/library-smoke/files/LibraryLists && chown -R www-data:www-data /var/www/html/data/library-smoke'
      docker exec -u www-data "$instance" php occ files:scan --path=library-smoke/files/LibraryLists
      docker exec -u www-data "$instance" php -r 'require "/var/www/html/lib/base.php"; \OC::$server->get(\OCA\Library\Service\RootService::class)->saveRoot("library-smoke", "/LibraryLists", "Gutenberg English", true); $result = \OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan("library-smoke"); echo json_encode($result), PHP_EOL;'
    fi
    if [[ -n "${LIBRARY_BETA_ARCHIVE:-}" ]]; then
      docker cp "$repo_dir/scripts/performance/upgrade-fixture.php" "$instance:/tmp/library-upgrade-fixture.php"
      docker exec -u www-data "$instance" php /tmp/library-upgrade-fixture.php seed
      deploy
      docker exec -u www-data "$instance" php /tmp/library-upgrade-fixture.php verify
      docker exec -u www-data "$instance" php -r 'require "/var/www/html/lib/base.php"; $result = \OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan("library-smoke"); if ($result["errors"]) exit(1);'
      docker exec -u www-data "$instance" php /tmp/library-upgrade-fixture.php verify
    fi
    (umask 077; printf 'export PW_BASE_URL=%q\nexport PW_USER=library-smoke\nexport PW_PASSWORD=Disposable-lists-2026\nexport LIBRARY_LISTS_CONTAINER=%q\n' "http://127.0.0.1:$port" "$instance" > "$env_file")
    echo "ready=$instance environment=$env_file"
    ;;
  deploy) deploy ;;
  test)
    owned_instance || { echo 'Refusing to test an instance without the personal-lists label' >&2; exit 1; }
    source "$env_file"
    cd "$repo_dir"
    docker cp tests/php/personal_lists_integration.php "$instance:/tmp/personal_lists_integration.php" >/dev/null
    docker exec -u www-data "$instance" php /tmp/personal_lists_integration.php
    PLAYWRIGHT_HTML_OUTPUT_DIR="$work_dir/reports/$nc_version" npx playwright test tests/gui/lists/personal-lists.spec.ts --output="$work_dir/results/$nc_version"
    ;;
  stop)
    owned_instance || { echo 'Refusing to remove an instance without the personal-lists label' >&2; exit 1; }
    docker rm -f -v "$instance" >/dev/null
    rm -f "$env_file"
    ;;
  *) echo 'Usage: dev-lists-instance.sh start|deploy|test|stop' >&2; exit 2 ;;
esac
