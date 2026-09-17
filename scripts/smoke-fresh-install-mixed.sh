#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
COUNT="${LIBRARY_FRESH_MIXED_COUNT:-1000}"
IMAGE="${LIBRARY_NC34_IMAGE:-nextcloud@sha256:9558b1cea2f5fb992a78ea6ed93890922ec623e0a853741303e6369e54d3b902}"
CONTAINER="${LIBRARY_FRESH_CONTAINER:-library-nc34-mixed-$$}"
ADMIN_USER="${LIBRARY_FRESH_USER:-library-smoke}"
ADMIN_PASS="${LIBRARY_FRESH_PASSWORD:-library-disposable-password-$$}"
FIXTURE_DIR="$(mktemp -d -t library-mixed-XXXXXX)"
RUN_LOG="$(mktemp -t library-real-scale-XXXXXX.log)"
PORT=""
CONTAINER_CREATED=0

cleanup() {
    local status=$?
    if [[ "$CONTAINER_CREATED" == 1 ]]; then
        docker rm -f "$CONTAINER" >/dev/null 2>&1 || true
    fi
    rm -rf "$FIXTURE_DIR" "$RUN_LOG"
    if [[ $status -ne 0 ]]; then
        printf 'fresh_install_mixed_smoke_ok=false\n' >&2
    fi
    exit "$status"
}
trap cleanup EXIT

require_command() {
    command -v "$1" >/dev/null 2>&1 || { echo "required command missing: $1" >&2; exit 1; }
}
for command in docker node npm python3 curl sha256sum tar; do require_command "$command"; done
[[ "$COUNT" =~ ^[0-9]+$ ]] && (( COUNT >= 4 && COUNT % 4 == 0 )) || {
    echo "LIBRARY_FRESH_MIXED_COUNT must be a positive multiple of four" >&2
    exit 1
}
EXPECTED_BROWSER_CARDS=$(( COUNT < 100 ? COUNT : 100 ))
[[ "$ADMIN_USER" =~ ^[A-Za-z0-9._@-]+$ ]] || { echo "LIBRARY_FRESH_USER contains unsupported characters" >&2; exit 1; }

cd "$ROOT"
VERSION="$(python3 -c 'import re,pathlib; print(re.search(r"<version>([^<]+)</version>", pathlib.Path("appinfo/info.xml").read_text()).group(1))')"
ARCHIVE="$ROOT/dist/library-$VERSION.tar.gz"
CHECKSUM="$ARCHIVE.sha256"

npm run package:release
(
    cd "$ROOT/dist"
    sha256sum -c "$(basename "$CHECKSUM")"
)
npm run audit:release-package
ARCHIVE_SHA256="$(sha256sum "$ARCHIVE" | cut -d' ' -f1)"
printf 'release_package_version=%s\n' "$VERSION"
printf 'release_package_sha256=%s\n' "$ARCHIVE_SHA256"
printf 'nextcloud_image=%s\n' "$IMAGE"

python3 "$ROOT/scripts/generate-mixed-publications.py" "$FIXTURE_DIR" "$COUNT"
SOURCE_HASH_BEFORE="$(cd "$FIXTURE_DIR" && find . -type f -print0 | sort -z | xargs -0 sha256sum | sha256sum | cut -d' ' -f1)"
printf 'source_tree_sha256_before=%s\n' "$SOURCE_HASH_BEFORE"

if docker container inspect "$CONTAINER" >/dev/null 2>&1; then
    echo "container name already exists: $CONTAINER" >&2
    exit 1
fi
docker run -d --name "$CONTAINER" --tmpfs /var/www/html/data:uid=33,gid=33,mode=0770 -p 127.0.0.1::80 "$IMAGE" >/dev/null
CONTAINER_CREATED=1
for _ in $(seq 1 180); do
    if docker exec "$CONTAINER" test -f /var/www/html/version.php >/dev/null 2>&1 \
        && docker exec "$CONTAINER" test -d /var/www/html/custom_apps >/dev/null 2>&1; then
        break
    fi
    sleep 1
done
docker exec "$CONTAINER" test -f /var/www/html/version.php
docker exec "$CONTAINER" test -d /var/www/html/custom_apps

docker exec -u www-data "$CONTAINER" php occ maintenance:install \
    --database sqlite \
    --admin-user "$ADMIN_USER" \
    --admin-pass "$ADMIN_PASS" \
    --data-dir /var/www/html/data
docker exec -u www-data "$CONTAINER" php occ config:app:set --value false firstrunwizard wizard_enabled >/dev/null

PORT="$(docker port "$CONTAINER" 80/tcp | python3 -c 'import sys; print(sys.stdin.read().strip().rsplit(":", 1)[1])')"
BASE_URL="http://127.0.0.1:$PORT"
docker exec -u www-data "$CONTAINER" php occ config:system:set trusted_domains 1 --value="127.0.0.1:$PORT" >/dev/null
docker exec -u www-data "$CONTAINER" php occ config:system:set overwrite.cli.url --value="$BASE_URL" >/dev/null

for _ in $(seq 1 120); do
    if curl --fail --silent --show-error "$BASE_URL/status.php" >/dev/null 2>&1; then break; fi
    sleep 1
done
curl --fail --silent --show-error "$BASE_URL/status.php" >/dev/null
NC_VERSION="$(docker exec -u www-data "$CONTAINER" php occ status --output=json | python3 -c 'import json,sys; print(json.load(sys.stdin)["versionstring"])')"
[[ "$NC_VERSION" == 34.* ]] || { echo "expected Nextcloud 34, got $NC_VERSION" >&2; exit 1; }
printf 'nextcloud_version=%s\n' "$NC_VERSION"

docker cp "$ARCHIVE" "$CONTAINER:/tmp/library.tar.gz"
docker exec -u root "$CONTAINER" sh -eu -c '
    mkdir -p /var/www/html/custom_apps
    rm -rf /var/www/html/custom_apps/library
    tar -xzf /tmp/library.tar.gz -C /var/www/html/custom_apps
    chown -R www-data:www-data /var/www/html/custom_apps/library
'
docker exec -u www-data "$CONTAINER" php occ app:enable library
docker exec -u www-data "$CONTAINER" php occ upgrade
ROUTES="$(docker exec -u www-data "$CONTAINER" php occ router:list)"
grep -q 'library.page.index' <<<"$ROUTES"
INSTALLED_VERSION="$(docker exec -u www-data "$CONTAINER" php occ app:list --output=json | python3 -c 'import json,sys; print(json.load(sys.stdin)["enabled"]["library"])')"
[[ "$INSTALLED_VERSION" == "$VERSION" ]] || { echo "installed Library version mismatch: $INSTALLED_VERSION" >&2; exit 1; }
printf 'library_version=%s\n' "$INSTALLED_VERSION"

SCHEMA_JSON="$(docker exec -u www-data "$CONTAINER" php -r '
require "/var/www/html/config/config.php";
$pdo = new PDO("sqlite:" . $CONFIG["datadirectory"] . "/owncloud.db");
$prefix = $CONFIG["dbtableprefix"] ?? "oc_";
$expected = ["library_roots","library_files","library_items","library_item_search_grams","library_item_identifiers","library_item_facets","library_scan_jobs","library_saved_collections"];
$stmt = $pdo->query("SELECT name FROM sqlite_master WHERE type=\"table\"");
$actual = array_column($stmt->fetchAll(PDO::FETCH_ASSOC), "name");
$present = array_values(array_filter($expected, fn($name) => in_array($prefix . $name, $actual, true)));
$migrations = $pdo->prepare("SELECT version FROM " . $prefix . "migrations WHERE app = ? ORDER BY version");
$migrations->execute(["library"]); $versions = $migrations->fetchAll(PDO::FETCH_COLUMN);
echo json_encode(["physical_table_count"=>count($present),"tables"=>$present,"migration_count"=>count($versions),"last_migration"=>end($versions)]);
')"
printf 'fresh_schema=%s\n' "$SCHEMA_JSON"
python3 -c 'import json,sys; d=json.loads(sys.argv[1]); assert d["physical_table_count"] == 8, d; assert d["migration_count"] >= 33, d' "$SCHEMA_JSON"
echo 'physical_table_count=8'
printf 'migration_count=%s\n' "$(python3 -c 'import json,sys; print(json.loads(sys.argv[1])["migration_count"])' "$SCHEMA_JSON")"
printf 'last_migration=%s\n' "$(python3 -c 'import json,sys; print(json.loads(sys.argv[1])["last_migration"])' "$SCHEMA_JSON")"

export NC_CONTAINER="$CONTAINER" NC_URL="$BASE_URL" NC_USER="$ADMIN_USER"
docker exec -u root "$CONTAINER" mkdir -p "/var/www/html/data/$ADMIN_USER/files"
docker exec -u root "$CONTAINER" chown -R www-data:www-data "/var/www/html/data/$ADMIN_USER"
REAL_SCALE_SOURCES="$FIXTURE_DIR" \
REAL_SCALE_EXTENSIONS=pdf,epub,cbz,opf \
REAL_SCALE_KEEP_STAGE=1 \
npm run smoke:real-scale -- "$COUNT" | tee "$RUN_LOG"
grep -q 'real_scale_stage_ok=true' "$RUN_LOG"
grep -q 'scanned_tree_unchanged=true' "$RUN_LOG"
grep -q 'real_scale_temp_token_remaining=0' "$RUN_LOG"
EXPECTED_PER_FORMAT=$((COUNT / 4))
python3 - "$RUN_LOG" "$EXPECTED_PER_FORMAT" <<'PY'
import json
import sys
from pathlib import Path
line = next((line for line in Path(sys.argv[1]).read_text().splitlines() if line.startswith("selected_formats=")), "")
if not line:
    raise SystemExit("selected_formats marker missing")
observed = json.loads(line.split("=", 1)[1])
expected = {fmt: int(sys.argv[2]) for fmt in ("pdf", "epub", "cbz", "opf")}
if observed != expected:
    raise SystemExit(f"selected format mix mismatch: {observed} != {expected}")
PY
printf 'selected_formats={"pdf":%d,"epub":%d,"cbz":%d,"opf":%d}\n' "$EXPECTED_PER_FORMAT" "$EXPECTED_PER_FORMAT" "$EXPECTED_PER_FORMAT" "$EXPECTED_PER_FORMAT"

DB_COUNTS="$(docker exec -u www-data "$CONTAINER" php -r '
require "/var/www/html/config/config.php";
$pdo = new PDO("sqlite:" . $CONFIG["datadirectory"] . "/owncloud.db"); $p = $CONFIG["dbtableprefix"] ?? "oc_";
$out = [];
foreach ($pdo->query("SELECT extension, COUNT(*) c FROM {$p}library_files GROUP BY extension") as $row) { $out["formats"][strtolower($row["extension"])] = (int)$row["c"]; }
foreach ($pdo->query("SELECT scan_status, COUNT(*) c FROM {$p}library_files GROUP BY scan_status") as $row) { $out["statuses"][$row["scan_status"]] = (int)$row["c"]; }
$out["files"] = (int)$pdo->query("SELECT COUNT(*) FROM {$p}library_files")->fetchColumn();
$out["items"] = (int)$pdo->query("SELECT COUNT(*) FROM {$p}library_items")->fetchColumn();
echo json_encode($out);
')"
printf 'mixed_catalogue_counts=%s\n' "$DB_COUNTS"
python3 -c 'import json,sys; d=json.loads(sys.argv[1]); n=int(sys.argv[2]); each=n//4; assert d["files"]==n and d["items"]==n,d; assert all(d["formats"].get(x)==each for x in ("pdf","epub","cbz","opf")),d; assert d["statuses"].get("indexed")==n,d; assert d["statuses"].get("metadata_error",0)==0,d; assert d["statuses"].get("sidecar",0)==0,d' "$DB_COUNTS" "$COUNT"
printf 'files=%d\nitems=%d\nindexed_status=%d\nmetadata_error_status=0\nsidecar_status=0\n' "$COUNT" "$COUNT" "$COUNT"

SOURCE_HASH_AFTER="$(cd "$FIXTURE_DIR" && find . -type f -print0 | sort -z | xargs -0 sha256sum | sha256sum | cut -d' ' -f1)"
printf 'source_tree_sha256_after=%s\n' "$SOURCE_HASH_AFTER"
[[ "$SOURCE_HASH_BEFORE" == "$SOURCE_HASH_AFTER" ]] || { echo 'source_tree_unchanged=false' >&2; exit 1; }
echo 'source_tree_unchanged=true'

GUI_ROOT_PATH="$(python3 - "$RUN_LOG" <<'PY'
import sys
from pathlib import Path
for line in Path(sys.argv[1]).read_text().splitlines():
    if line.startswith('stage_root='):
        print(line.split('=', 1)[1])
        break
else:
    raise SystemExit('stage_root marker missing')
PY
)"
GUI_SEARCH_TITLE="$(docker exec -u www-data "$CONTAINER" php -r '
require "/var/www/html/config/config.php";
$pdo = new PDO("sqlite:" . $CONFIG["datadirectory"] . "/owncloud.db"); $p = $CONFIG["dbtableprefix"] ?? "oc_";
$stmt = $pdo->query("SELECT i.title FROM {$p}library_items i INNER JOIN {$p}library_files f ON i.library_file_id=f.id WHERE f.extension=\"epub\" ORDER BY i.title ASC LIMIT 1");
echo (string)$stmt->fetchColumn();
')"
GUI_ITEM_ID="$(docker exec -u www-data "$CONTAINER" php -r '
require "/var/www/html/config/config.php";
$pdo = new PDO("sqlite:" . $CONFIG["datadirectory"] . "/owncloud.db"); $p = $CONFIG["dbtableprefix"] ?? "oc_";
$stmt = $pdo->query("SELECT i.id FROM {$p}library_items i INNER JOIN {$p}library_files f ON i.library_file_id=f.id WHERE f.extension=\"epub\" ORDER BY i.title ASC LIMIT 1");
echo (string)$stmt->fetchColumn();
')"
[[ "$GUI_ROOT_PATH" == /* ]] || { echo 'Playwright root fixture path missing' >&2; exit 1; }
[[ "$GUI_ITEM_ID" =~ ^[1-9][0-9]*$ ]] || { echo 'Playwright item fixture ID missing' >&2; exit 1; }
[[ -n "$GUI_SEARCH_TITLE" ]] || { echo 'Playwright EPUB fixture title missing' >&2; exit 1; }
PW_BASE_URL="$BASE_URL" \
PW_USER="$ADMIN_USER" \
PW_PASSWORD="$ADMIN_PASS" \
PW_EXPECTED_CARDS="$EXPECTED_BROWSER_CARDS" \
PW_ROOT_PATH="$GUI_ROOT_PATH" \
PW_ITEM_ID="$GUI_ITEM_ID" \
PW_SEARCH_TITLE="$GUI_SEARCH_TITLE" \
npm run test:gui | tee -a "$RUN_LOG"
echo 'playwright_gui_ok=true' | tee -a "$RUN_LOG"

SOURCE_HASH_AFTER_GUI="$(cd "$FIXTURE_DIR" && find . -type f -print0 | sort -z | xargs -0 sha256sum | sha256sum | cut -d' ' -f1)"
printf 'source_tree_sha256_after_gui=%s\n' "$SOURCE_HASH_AFTER_GUI"
[[ "$SOURCE_HASH_BEFORE" == "$SOURCE_HASH_AFTER_GUI" ]] || { echo 'source_tree_unchanged_after_gui=false' >&2; exit 1; }
echo 'source_tree_unchanged_after_gui=true'

docker exec -u www-data "$CONTAINER" php -r '
require "/var/www/html/config/config.php";
$pdo = new PDO("sqlite:" . $CONFIG["datadirectory"] . "/owncloud.db"); $p = $CONFIG["dbtableprefix"] ?? "oc_";
$pdo->exec("UPDATE {$p}library_items SET user_edited=1, metadata_source=\"user\" WHERE id=(SELECT MIN(id) FROM {$p}library_items)");
echo "corrected_metadata_fixture_seeded=true\\n";
'

LIBRARY_CATALOGUE_FAST_BUDGET_SECONDS="${LIBRARY_CATALOGUE_FAST_BUDGET_SECONDS:-1.0}" \
LIBRARY_CATALOGUE_MEASURE_HYDRATE=1 npm run smoke:catalogue-performance | tee -a "$RUN_LOG"
npm run smoke:vue | tee -a "$RUN_LOG"
npm run smoke:sidebar-http | tee -a "$RUN_LOG"
LIBRARY_BROWSER_SMOKE_BASIC=1 LIBRARY_BROWSER_EXPECTED_CARDS="$EXPECTED_BROWSER_CARDS" npm run smoke:browser | tee -a "$RUN_LOG"

grep -q 'catalogue_temp_token_remaining=0' "$RUN_LOG"
grep -q 'vue_temp_token_remaining=0' "$RUN_LOG"
grep -q 'browser_temp_token_remaining=0' "$RUN_LOG"
grep -q 'browser_basic_sidebar_opened=true' "$RUN_LOG"
grep -q 'browser_basic_sidebar_rendered=true' "$RUN_LOG"
grep -q 'browser_basic_sidebar_closed=true' "$RUN_LOG"

echo 'fresh_install_mixed_smoke_ok=true'
