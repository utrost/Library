#!/usr/bin/env bash
set -euo pipefail

# Run Nextcloud's general background-job worker for a bounded development/deploy
# interval. The host-side flock prevents overlapping helper invocations when this
# script is called from cron/schedulers; Nextcloud still owns per-job locking.
lock_file="${TMPDIR:-/tmp}/library-nextcloud-background-worker.lock"
exec 9>"$lock_file"
if ! flock -n 9; then
    echo "Nextcloud background worker already running; skipping overlapping invocation." >&2
    exit 0
fi

docker exec -u www-data nextcloud php -d memory_limit=-1 /var/www/html/occ --no-warnings --quiet background-job:worker --stop_after=5m
