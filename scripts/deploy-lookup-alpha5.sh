#!/usr/bin/env bash
# One-time, locally verified development upgrade. Never an App Store/release gate.
set -euo pipefail
umask 077
repo="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo"
app="${LIBRARY_TEST_CONTAINER:?Set the developer NC34 app container}"
db="${LIBRARY_TEST_DATABASE_CONTAINER:?Set its MariaDB container}"
cron="${LIBRARY_TEST_CRON_CONTAINER:?Set its cron container}"
for name in "$app" "$db" "$cron"; do [[ "$name" =~ ^[A-Za-z0-9_.-]+$ ]] || exit 2; done
archive="$repo/dist/library-0.4.0-alpha.5.tar.gz"
checksum="$(sha256sum "$archive" | cut -d ' ' -f 1)"
[[ "${LIBRARY_UPGRADE_VERIFIED_SHA256:?Set the checksum that passed the disposable upgrade smoke}" == "$checksum" ]]
[[ -z "$(git status --porcelain)" ]] || { echo 'Working tree must be clean' >&2; exit 2; }
bash scripts/audit-release-package.sh 0.4.0-alpha.5 --require-signature
python3 - "$(git rev-parse HEAD)" dist/library-0.4.0-alpha.5.provenance.json <<'PY'
import json, sys
d = json.load(open(sys.argv[2]))['predicate']['buildDefinition']
assert any(r.get('digest', {}).get('gitCommit') == sys.argv[1] for r in d['resolvedDependencies'])
assert d['externalParameters']['version'] == '0.4.0-alpha.5'
PY
backup="$(mktemp -d -t library-alpha5-rollback-XXXXXXXX)"
chmod 0700 "$backup"
changed=false
maintenance=false
cron_stopped=false
cron_running="$(docker inspect --format '{{.State.Running}}' "$cron")"
occ() { docker exec -u www-data "$app" php occ "$@"; }
cleanup() {
    result=$?
    trap - EXIT
    if [[ "$result" != 0 && "$changed" == true ]]; then
        echo 'Upgrade failed; restoring the private database, config and app backup.' >&2
        occ maintenance:mode --on >/dev/null 2>&1 || true
        docker restart -t 60 "$app" >/dev/null
        docker exec -i "$db" sh -eu -c 'export MYSQL_PWD="$MYSQL_ROOT_PASSWORD"; exec mariadb --user=root "$MYSQL_DATABASE"' < "$backup/database.sql"
        docker exec "$app" rm -rf /var/www/html/custom_apps/library
        docker cp "$backup/library-old" "$app:/var/www/html/custom_apps/library" >/dev/null
        docker cp "$backup/config.php" "$app:/var/www/html/config/config.php" >/dev/null
        docker exec "$app" chown -R www-data:www-data /var/www/html/custom_apps/library /var/www/html/config/config.php
        docker restart -t 60 "$app" >/dev/null
        occ maintenance:mode --off
        occ integrity:check-app library
        echo "rollback_restored=true backup=$backup" >&2
    elif [[ "$result" != 0 && "$maintenance" == true ]]; then
        occ maintenance:mode --off
    fi
    if [[ "$cron_stopped" == true && "$cron_running" == true ]]; then docker start "$cron" >/dev/null; fi
    echo "private_rollback_backup=$backup"
    exit "$result"
}
trap cleanup EXIT
occ status --output=json > "$backup/status-before.json"
python3 - "$backup/status-before.json" <<'PY'
import json, sys
d=json.load(open(sys.argv[1])); assert d['installed'] and not d['maintenance'] and d['version'].startswith('34.')
PY
[[ "$(occ config:app:get library installed_version)" == 0.4.0-alpha.4 ]]
[[ -z "$(occ integrity:check-app library)" ]]
[[ "$(occ config:system:get dbtype)" == mysql ]]
[[ "$(occ config:system:get dbname)" == "$(docker exec "$db" sh -c 'printf %s "$MYSQL_DATABASE"')" ]]
table_prefix="$(occ config:system:get dbtableprefix)"
[[ "$table_prefix" =~ ^[a-zA-Z0-9_]+$ ]]
docker cp "$app:/var/www/html/custom_apps/library" "$backup/library-old" >/dev/null
docker cp "$app:/var/www/html/config/config.php" "$backup/config.php" >/dev/null
tar -xzf "$archive" -C "$backup"
python3 - "$backup" <<'PY'
import json, sys
from pathlib import Path
r=Path(sys.argv[1]); old=r/'library-old'; new=r/'library'
a={p.name:p.read_bytes() for p in (old/'lib/Migration').glob('Version*.php')}
b={p.name:p.read_bytes() for p in (new/'lib/Migration').glob('Version*.php')}
assert a==b, 'This development upgrade must not change migrations'
for app,name in [(old,'old.crt'),(new,'new.crt')]:
    (r/name).write_text(json.loads((app/'appinfo/signature.json').read_text())['certificate'])
PY
[[ "$(openssl x509 -in "$backup/old.crt" -noout -fingerprint -sha256)" == "$(openssl x509 -in "$backup/new.crt" -noout -fingerprint -sha256)" ]]
cat > "$backup/fingerprint.php" <<'PHP'
<?php
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$db=\OC::$server->get(\OCP\IDBConnection::class);
$out=[];
foreach (['library_items','library_files','library_lists','library_list_entries','library_root_shares'] as $table) {
    $columns=$table==='library_root_shares' ? 'id,owner_user_id,recipient_user_id,root_id,root_file_id,managed_share_id,recovery_token,revoked_at,created_at,access_mode,scope_name' : '*';
    $hash=hash_init('sha256'); $count=0; $last=0;
    do {
        $result=$db->executeQuery('SELECT '.$columns.' FROM *PREFIX*'.$table.' WHERE id>? ORDER BY id LIMIT 500',[$last]);
        $rows=$result->fetchAll(); $result->closeCursor();
        foreach ($rows as $row) { $last=(int)$row['id']; ksort($row); hash_update($hash,json_encode($row,JSON_THROW_ON_ERROR)); $count++; }
    } while (count($rows)===500);
    $out[$table]=['count'=>$count,'sha256'=>hash_final($hash)];
}
$hash=hash_init('sha256'); $count=0; $grant=0; $item=0;
do {
    $result=$db->executeQuery('SELECT * FROM *PREFIX*library_share_books WHERE grant_id>? OR (grant_id=? AND item_id>?) ORDER BY grant_id,item_id LIMIT 500',[$grant,$grant,$item]);
    $rows=$result->fetchAll(); $result->closeCursor();
    foreach ($rows as $row) { $grant=(int)$row['grant_id']; $item=(int)$row['item_id']; ksort($row); hash_update($hash,json_encode($row,JSON_THROW_ON_ERROR)); $count++; }
} while (count($rows)===500);
$out['library_share_books']=['count'=>$count,'sha256'=>hash_final($hash)];
echo json_encode($out,JSON_THROW_ON_ERROR), "\n";
PHP
docker cp "$backup/fingerprint.php" "$app:/tmp/library-deploy-fingerprint.php" >/dev/null
docker exec "$app" chmod 0644 /tmp/library-deploy-fingerprint.php
if [[ "$cron_running" == true ]]; then docker stop -t 60 "$cron" >/dev/null; cron_stopped=true; fi
occ maintenance:mode --on
maintenance=true
# Drain workers using the old lock namespace before taking a consistent database backup.
docker restart -t 60 "$app" >/dev/null
docker exec -u www-data "$app" php /tmp/library-deploy-fingerprint.php > "$backup/catalogue-before.json"
docker exec "$db" sh -eu -c 'export MYSQL_PWD="$MYSQL_ROOT_PASSWORD"; exec mariadb-dump --user=root --single-transaction --routines --events --triggers "$MYSQL_DATABASE"' > "$backup/database.sql"
test -s "$backup/database.sql"
sha256sum "$backup/database.sql" > "$backup/database.sql.sha256"
docker cp "$archive" "$app:/tmp/library-alpha5-deploy.tar.gz" >/dev/null
changed=true
docker exec "$app" sh -eu -c 'rm -rf /var/www/html/custom_apps/library; tar -xzf /tmp/library-alpha5-deploy.tar.gz -C /var/www/html/custom_apps; chown -R www-data:www-data /var/www/html/custom_apps/library'
occ upgrade
occ maintenance:mode --on
docker restart -t 60 "$app" >/dev/null
[[ "$(occ config:app:get library installed_version)" == 0.4.0-alpha.5 ]]
[[ -z "$(occ integrity:check-app library)" ]]
docker exec -u www-data "$app" php /tmp/library-deploy-fingerprint.php > "$backup/catalogue-after.json"
cmp "$backup/catalogue-before.json" "$backup/catalogue-after.json"
occ maintenance:mode --off
maintenance=false
occ status --output=json > "$backup/status-after.json"
python3 - "$backup/status-after.json" <<'PY'
import json,sys
assert json.load(open(sys.argv[1]))['maintenance'] is False
PY
docker exec "$app" rm -f /tmp/library-alpha5-deploy.tar.gz /tmp/library-deploy-fingerprint.php
changed=false
printf 'development_upgrade_passed=true version=0.4.0-alpha.5 catalogue_unchanged=true sha256=%s\n' "$checksum"
