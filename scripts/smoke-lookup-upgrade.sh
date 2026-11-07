#!/usr/bin/env bash
# Focused populated alpha.4 -> alpha.5 upgrade; disposable NC34/MariaDB only.
set -euo pipefail
cd "$(dirname "$0")/.."
old="${LIBRARY_UPGRADE_FROM_ARCHIVE:?Set preserved alpha.4 archive}"
candidate="${LIBRARY_TEST_ARCHIVE:?Set signed alpha.5 archive}"
export NC_VERSION=34.0.4 LIBRARY_LISTS_DATABASE=mysql
export LIBRARY_LISTS_PREFIX="library-lookup-upgrade-$$"
export LIBRARY_LISTS_WORK_DIR="$(mktemp -d -t library-lookup-upgrade-XXXXXXXX)"
container="$LIBRARY_LISTS_PREFIX-34-0-4"
cleanup() {
    result=$?
    echo "private_upgrade_evidence=$LIBRARY_LISTS_WORK_DIR"
    bash scripts/dev-lists-instance.sh stop >/dev/null 2>&1 || true
    exit "$result"
}
trap cleanup EXIT
LIBRARY_TEST_ARCHIVE="$old" bash scripts/dev-lists-instance.sh start > "$LIBRARY_LISTS_WORK_DIR/start.log" 2>&1
python3 scripts/generate-mixed-publications.py "$LIBRARY_LISTS_WORK_DIR/books" 4 >/dev/null
docker cp "$LIBRARY_LISTS_WORK_DIR/books/mixed-pdf-0001.pdf" "$container:/tmp/library-fixture.pdf" >/dev/null
docker cp tests/php/sharing_upgrade_fixture.php "$container:/tmp/library-sharing-upgrade.php" >/dev/null
docker exec "$container" chmod 0644 /tmp/library-fixture.pdf /tmp/library-sharing-upgrade.php
docker exec -u www-data -e LIBRARY_DISPOSABLE_FIXTURE=1 "$container" php /tmp/library-sharing-upgrade.php seed > "$LIBRARY_LISTS_WORK_DIR/seed.log"
cat > "$LIBRARY_LISTS_WORK_DIR/lookup.php" <<'PHP'
<?php
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
$db=\OC::$server->get(\OCP\IDBConnection::class);$uid='library-smoke';
\OC::$server->get(\OCP\IUserSession::class)->setUser(\OC::$server->get(\OCP\IUserManager::class)->get($uid));
if (($argv[1] ?? '')==='seed') {
 $id=(int)$db->executeQuery('SELECT MIN(id) FROM *PREFIX*library_items WHERE user_id=?',[$uid])->fetchOne();
 \OC::$server->get(\OCA\Library\Service\MetadataBatchService::class)->create($uid,[$id],'openlibrary',['publisher'],'missing');
 $db->executeStatement('UPDATE *PREFIX*library_lookup_jobs SET status=? WHERE user_id=?',['paused',$uid]);
}
$rows=$db->executeQuery('SELECT * FROM *PREFIX*library_lookup_jobs WHERE user_id=? ORDER BY id',[$uid])->fetchAll();
echo hash('sha256',json_encode($rows,JSON_THROW_ON_ERROR)),"\n";
PHP
docker cp "$LIBRARY_LISTS_WORK_DIR/lookup.php" "$container:/tmp/library-lookup-upgrade.php" >/dev/null
docker exec "$container" chmod 0644 /tmp/library-lookup-upgrade.php
docker exec -u www-data "$container" php /tmp/library-lookup-upgrade.php seed > "$LIBRARY_LISTS_WORK_DIR/jobs-before.sha256"
LIBRARY_TEST_ARCHIVE="$candidate" bash scripts/dev-lists-instance.sh deploy > "$LIBRARY_LISTS_WORK_DIR/upgrade.log" 2>&1
docker exec -u www-data -e LIBRARY_DISPOSABLE_FIXTURE=1 "$container" php /tmp/library-sharing-upgrade.php verify
[[ "$(docker exec -u www-data "$container" php occ config:app:get library installed_version)" == 0.4.0-alpha.5 ]]
docker exec -u www-data "$container" php occ integrity:check-app library > "$LIBRARY_LISTS_WORK_DIR/integrity.log"
test ! -s "$LIBRARY_LISTS_WORK_DIR/integrity.log"
docker exec -u www-data "$container" php /tmp/library-lookup-upgrade.php verify > "$LIBRARY_LISTS_WORK_DIR/jobs-after.sha256"
cmp "$LIBRARY_LISTS_WORK_DIR/jobs-before.sha256" "$LIBRARY_LISTS_WORK_DIR/jobs-after.sha256"
echo 'populated_alpha4_to_alpha5_upgrade=passed existing_lookup_jobs_preserved=true integrity=passed'
