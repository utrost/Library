#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
action="${1:-}"
case "$action" in
    package|preflight|deploy-test) ;;
    *) echo 'Usage: scripts/local-cd.sh {package|preflight|deploy-test}' >&2; exit 2 ;;
esac
cd "$root"
if [ -n "$(git status --porcelain)" ]; then
    echo 'Commit or discard source changes before packaging or deploying.' >&2
    exit 2
fi
commit="$(git rev-parse HEAD)"
version="$(node -p 'require("./package.json").version')"
archive="$root/dist/library-$version.tar.gz"
receipt="$root/dist/local-ci/last-success.json"
container="${LIBRARY_TEST_CONTAINER:-nextcloud}"
[[ "$container" =~ ^[A-Za-z0-9_.-]+$ ]] || { echo 'Invalid container name' >&2; exit 2; }

python3 - "$receipt" "$commit" "$version" <<'PY'
import json, sys
from pathlib import Path
path, commit, version = sys.argv[1:]
if not Path(path).is_file():
    raise SystemExit('Full local CI receipt missing. Run scripts/local-ci.sh full first.')
data = json.loads(Path(path).read_text())
if data.get('commit') != commit or data.get('version') != version or 'disposable NC34 GUI' not in data.get('checks', []):
    raise SystemExit('Local CI receipt does not certify this commit and version.')
PY

if [ "$action" = package ]; then
    test -f "${NEXTCLOUD_SIGNING_PRIVATE_KEY:-}" || { echo 'Set NEXTCLOUD_SIGNING_PRIVATE_KEY to the private key file.' >&2; exit 2; }
    test -f "${NEXTCLOUD_SIGNING_CERTIFICATE:-}" || { echo 'Set NEXTCLOUD_SIGNING_CERTIFICATE to the certificate file.' >&2; exit 2; }
    NEXTCLOUD_CONTAINER="$container" npm run package:release -- --signed
    echo "local_package_ok=true archive=$archive"
    exit 0
fi

test -f "$archive" || { echo "Signed archive missing: $archive" >&2; exit 2; }
(cd dist && sha256sum -c "library-$version.tar.gz.sha256")
bash scripts/audit-release-package.sh "$version" --require-signature
python3 - "$root/dist/library-$version.provenance.json" "$commit" "$version" <<'PY'
import json, sys
from pathlib import Path
path, commit, version = sys.argv[1:]
data = json.loads(Path(path).read_text())
resolved = data['predicate']['buildDefinition']['resolvedDependencies']
found = next((item.get('digest', {}).get('gitCommit') for item in resolved if item.get('uri', '').startswith('git+')), None)
if found != commit or data['predicate']['buildDefinition']['externalParameters'].get('version') != version:
    raise SystemExit('Package provenance does not identify the certified commit and version.')
PY

temporary_dir="$(mktemp -d -t library-local-cd-XXXXXXXX)"
chmod 0700 "$temporary_dir"
deployed=false
maintenance=false
old_version=''
cleanup() {
    result=$?
    if [ "$result" -ne 0 ] && [ "$deployed" = true ]; then
        echo "Deployment failed; restoring app files from $temporary_dir" >&2
        docker exec -u root "$container" rm -rf /var/www/html/custom_apps/library || true
        docker cp "$temporary_dir/installed-library" "$container:/var/www/html/custom_apps/library" || true
        docker exec -u root "$container" chown -R www-data:www-data /var/www/html/custom_apps/library || true
        docker exec -u www-data "$container" php occ maintenance:mode --off || true
        if [ -n "$old_version" ]; then
            docker exec -u www-data "$container" php occ config:app:set library installed_version --value="$old_version" || true
        fi
        docker exec -u root "$container" apachectl -k graceful || true
        echo "rollback_attempted=true backup=$temporary_dir" >&2
    elif [ "$action" = preflight ]; then
        rm -rf "$temporary_dir"
    elif [ "$result" -ne 0 ]; then
        rm -rf "$temporary_dir"
    fi
}
trap cleanup EXIT

docker cp "$container:/var/www/html/custom_apps/library" "$temporary_dir/installed-library"
tar -xzf "$archive" -C "$temporary_dir"
python3 - "$temporary_dir" <<'PY'
import json, sys
from pathlib import Path
root = Path(sys.argv[1])
for name, directory in [('installed', root / 'installed-library'), ('candidate', root / 'library')]:
    if not directory.is_dir():
        raise SystemExit(f'Missing {name} app directory')
installed_migrations = {path.name: path.read_bytes() for path in (root / 'installed-library/lib/Migration').glob('Version*.php')}
candidate_migrations = {path.name: path.read_bytes() for path in (root / 'library/lib/Migration').glob('Version*.php')}
if installed_migrations != candidate_migrations:
    raise SystemExit('Migration files changed. Back up the database and use the documented migration release procedure.')
for directory, name in [(root / 'installed-library', 'installed.crt'), (root / 'library', 'candidate.crt')]:
    signature = json.loads((directory / 'appinfo/signature.json').read_text())
    (root / name).write_text(signature['certificate'])
PY
installed_cert="$(openssl x509 -in "$temporary_dir/installed.crt" -noout -fingerprint -sha256)"
candidate_cert="$(openssl x509 -in "$temporary_dir/candidate.crt" -noout -fingerprint -sha256)"
if [ "$installed_cert" != "$candidate_cert" ]; then
    echo 'Candidate uses a different signing certificate from the installed app.' >&2
    exit 1
fi
old_version="$(docker exec -u www-data "$container" php occ config:app:get library installed_version)"
counts() {
    docker exec -u www-data "$container" php -r '
        require "/var/www/html/lib/base.php";
        $db = \OC::$server->get(\OCP\IDBConnection::class);
        foreach (["library_items", "library_files"] as $table) {
            echo (int)$db->executeQuery("SELECT COUNT(*) FROM *PREFIX*" . $table)->fetchOne(), " ";
        }
    '
}
before_counts="$(counts)"
printf 'local_deploy_preflight_ok=true version=%s current=%s counts=%s\n' "$version" "$old_version" "$before_counts"
if [ "$action" = preflight ]; then
    exit 0
fi

docker cp "$archive" "$container:/tmp/library-local-cd.tar.gz"
docker exec -u www-data "$container" php occ maintenance:mode --on
maintenance=true
deployed=true
docker exec -u root "$container" sh -eu -c '
    rm -rf /var/www/html/custom_apps/library
    cd /var/www/html/custom_apps
    tar -xzf /tmp/library-local-cd.tar.gz
    chown -R www-data:www-data library
'
docker exec -u www-data "$container" php occ maintenance:mode --off
maintenance=false
docker exec -u www-data "$container" php occ upgrade
docker exec -u root "$container" apachectl -k graceful
docker exec -u root "$container" rm -f /tmp/library-local-cd.tar.gz
actual_version="$(docker exec -u www-data "$container" php occ app:list --output=json | python3 -c 'import json,sys; print(json.load(sys.stdin)["enabled"]["library"])')"
[ "$actual_version" = "$version" ] || { echo "Installed version mismatch: $actual_version" >&2; exit 1; }
actual_maintenance="$(docker exec -u www-data "$container" php occ status --output=json | python3 -c 'import json,sys; print(json.load(sys.stdin)["maintenance"])')"
[ "$actual_maintenance" = False ] || { echo 'Maintenance mode stayed on' >&2; exit 1; }
integrity="$(docker exec -u www-data "$container" php occ integrity:check-app library)"
[ -z "$integrity" ] || { echo "$integrity" >&2; exit 1; }
after_counts="$(counts)"
[ "$before_counts" = "$after_counts" ] || { echo "Catalogue counts changed: $before_counts -> $after_counts" >&2; exit 1; }
deployed=false
printf 'local_test_deploy_ok=true version=%s counts=%s backup=%s\n' "$version" "$after_counts" "$temporary_dir"
