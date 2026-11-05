#!/usr/bin/env bash
# Synthetic two-user Files/Library boundary check on disposable Nextcloud instances.
set -euo pipefail
repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
prefix="library-share-matrix-$$"
work_dir="$(mktemp -d -t library-share-matrix-XXXXXX)"
active_version=""

cleanup() {
    if [[ -n "$active_version" ]]; then
        NC_VERSION="$active_version" LIBRARY_LISTS_PREFIX="$prefix" LIBRARY_LISTS_WORK_DIR="$work_dir" \
            bash "$repo_dir/scripts/dev-lists-instance.sh" stop >/dev/null 2>&1 || true
    fi
    rm -rf "$work_dir"
}
trap cleanup EXIT
python3 "$repo_dir/scripts/generate-mixed-publications.py" "$work_dir/books" 4 >/dev/null

for version in ${NC_VERSIONS:-33.0.9 34.0.4 35.0.0}; do
    active_version="$version"
    container="$prefix-${version//./-}"
    NC_VERSION="$version" LIBRARY_LISTS_PREFIX="$prefix" LIBRARY_LISTS_WORK_DIR="$work_dir" \
        bash "$repo_dir/scripts/dev-lists-instance.sh" start > "$work_dir/start-$version.log"
    docker exec -u www-data -e OC_PASS=Disposable-recipient-2026 "$container" \
        php occ user:add --password-from-env library-recipient >/dev/null
    docker cp "$repo_dir/tests/php/sharing_lifecycle_fixture.php" \
        "$container:/tmp/library-sharing-lifecycle-fixture.php" >/dev/null
    docker exec "$container" chmod 0644 /tmp/library-sharing-lifecycle-fixture.php

    if docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php seed \
        > "$work_dir/no-access-$version.log" 2>&1; then
        echo "Expected Library to refuse a grant without existing Files access on NC $version" >&2
        exit 1
    fi
    rg -q 'files_access_required' "$work_dir/no-access-$version.log"
    docker cp "$work_dir/books/mixed-pdf-0001.pdf" \
        "$container:/var/www/html/data/library-smoke/files/LibraryLifecycle/example.pdf" >/dev/null
    docker exec "$container" chown www-data:www-data \
        /var/www/html/data/library-smoke/files/LibraryLifecycle/example.pdf
    docker exec -u www-data "$container" php occ files:scan \
        --path=library-smoke/files/LibraryLifecycle >/dev/null
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php inspect |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert not d["grants"] and not d["rootShares"] and len(d["manual"])==1, d'

    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php share-root |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert len(d["rootShares"])==1 and d["rootShares"][0]["permissions"]==1, d'
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php seed |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert d["review"]["filesMode"]=="reuse" and d["grant"]["status"]=="ready" and d["grant"]["managedFilesShare"] is False and len(d["rootShares"])==1, d'
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php search |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert d["canonicalSearch"] and d["sourceCreditExcluded"] and d["matchingBooks"]==1, d'
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php revoke |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert d["removed"] is True and not d["grants"] and len(d["rootShares"])==1, d'
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php seed >/dev/null
    docker exec -u www-data "$container" php occ app:disable library >/dev/null
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php inspect |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert not d["grants"] and len(d["rootShares"])==1 and len(d["manual"])==1, d'
    docker exec -u www-data "$container" php occ app:enable library >/dev/null
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php seed >/dev/null
    docker exec -u www-data "$container" php occ app:remove library >/dev/null
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php inspect |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert not d["grants"] and len(d["rootShares"])==1 and len(d["manual"])==1, d'
    echo "shared_lifecycle_nc_${version}=passed"
    NC_VERSION="$version" LIBRARY_LISTS_PREFIX="$prefix" LIBRARY_LISTS_WORK_DIR="$work_dir" \
        bash "$repo_dir/scripts/dev-lists-instance.sh" stop >/dev/null
    active_version=""
done
