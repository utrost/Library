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
    if [[ -n "${LIBRARY_SHARING_RESULTS_DIR:-}" ]]; then
        mkdir -p "$LIBRARY_SHARING_RESULTS_DIR"
        for folder in reports results; do
            if [[ -d "$work_dir/$folder" ]]; then
                cp -a "$work_dir/$folder" "$LIBRARY_SHARING_RESULTS_DIR/"
            fi
        done
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
    docker exec -u www-data -e OC_PASS=Disposable-outsider-2026 "$container" \
        php occ user:add --password-from-env library-outsider >/dev/null
    docker exec -u www-data -e OC_PASS=Disposable-other-2026 "$container" \
        php occ user:add --password-from-env library-other >/dev/null
    docker cp "$repo_dir/tests/php/sharing_lifecycle_fixture.php" \
        "$container:/tmp/library-sharing-lifecycle-fixture.php" >/dev/null
    docker exec "$container" chmod 0644 /tmp/library-sharing-lifecycle-fixture.php
    if [[ "$version" == 34.0.4 && "${RUN_SHARING_PLAYWRIGHT:-1}" == 1 ]]; then
        source "$work_dir/$version.env"
        export PW_RECIPIENT_USER=library-recipient PW_RECIPIENT_PASSWORD=Disposable-recipient-2026
        export PW_OUTSIDER_USER=library-outsider PW_OUTSIDER_PASSWORD=Disposable-outsider-2026
        export PW_OTHER_USER=library-other PW_OTHER_PASSWORD=Disposable-other-2026
    fi

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
    if [[ "$version" == 34.0.4 && "${RUN_SHARING_PLAYWRIGHT:-1}" == 1 && "${RUN_FILES_PLAYWRIGHT:-1}" == 1 ]]; then
        docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php share-other |
            python3 -c 'import json,sys; d=json.load(sys.stdin); assert len(d["rootShares"])==2, d'
        # The browser check uses only this disposable catalogue and four disposable users.
        (cd "$repo_dir" && PLAYWRIGHT_HTML_OUTPUT_DIR="$work_dir/reports/$version" \
            npx playwright test tests/gui/sharing/shared-library.spec.ts --output="$work_dir/results/$version")
        docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php unshare-other |
            python3 -c 'import json,sys; d=json.load(sys.stdin); assert len(d["rootShares"])==1 and d["rootShares"][0]["recipient"]=="library-recipient", d'
        (cd "$repo_dir" && PLAYWRIGHT_HTML_OUTPUT_DIR="$work_dir/reports/owner-$version" \
            npx playwright test tests/gui/sharing/shared-library-owner.spec.ts --project=desktop-chromium \
                --output="$work_dir/results/owner-$version")
        docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php inspect |
            python3 -c 'import json,sys; d=json.load(sys.stdin); assert len(d["grants"])==1 and len(d["rootShares"])==1 and len(d["manual"])==1, d'
    fi
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php unshare-root |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert not d["rootShares"] and len(d["manual"])==1 and not d["libraryVisible"], d'
    if [[ "$version" == 34.0.4 && "${RUN_SHARING_PLAYWRIGHT:-1}" == 1 && "${RUN_FILES_PLAYWRIGHT:-1}" == 1 ]]; then
        export PW_SHARE_GRANT_ID PW_SHARE_BOOK_ID
        PW_SHARE_GRANT_ID="$(docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php inspect |
            python3 -c 'import json,sys; print(json.load(sys.stdin)["grants"][0]["id"])')"
        PW_SHARE_BOOK_ID="$(docker exec -u www-data "$container" php -r 'require "/var/www/html/lib/base.php"; $db=\OC::$server->get(\OCP\IDBConnection::class); echo $db->executeQuery("SELECT id FROM *PREFIX*library_items WHERE user_id=? ORDER BY id LIMIT 1", ["library-smoke"])->fetchOne();')"
        (cd "$repo_dir" && PLAYWRIGHT_HTML_OUTPUT_DIR="$work_dir/reports/access-$version" \
            npx playwright test tests/gui/sharing/shared-access-change.spec.ts --project=desktop-chromium \
                --output="$work_dir/results/access-$version")
    fi
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php share-root |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert len(d["rootShares"])==1 and d["rootShares"][0]["permissions"]==1, d'
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php revoke |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert d["removed"] is True and not d["grants"] and len(d["rootShares"])==1, d'
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php library-only-list \
        > "$work_dir/library-only-list-$version.json"
    if [[ "$version" == 34.0.4 && "${RUN_SHARING_PLAYWRIGHT:-1}" == 1 ]]; then
        export PW_SHARE_EXCLUDED_ITEM_ID
        PW_SHARE_EXCLUDED_ITEM_ID="$(python3 -c 'import json,sys; print(json.load(open(sys.argv[1]))["excludedItemId"])' "$work_dir/library-only-list-$version.json")"
        (cd "$repo_dir" && PLAYWRIGHT_HTML_OUTPUT_DIR="$work_dir/reports/library-only-$version" \
            npx playwright test tests/gui/sharing/library-only-books.spec.ts \
                --output="$work_dir/results/library-only-$version")
    fi
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php library-only-grant |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert d["grant"]["accessMode"]=="library_only" and d["grant"]["status"]=="ready" and len(d["rootShares"])==1, d'
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php library-only-check |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert len(d["rootShares"])==1 and d["rootShares"][0]["recipient"]=="library-recipient", d'
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php revoke |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert d["removed"] is True and not d["grants"] and len(d["rootShares"])==1, d'
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php library-only-grant >/dev/null
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php library-only-account-cleanup |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert d["accountCleanup"] and len(d["rootShares"])==1, d'
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php seed >/dev/null
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php library-only-grant >/dev/null
    docker exec -u www-data "$container" php occ app:disable library >/dev/null
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php inspect |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert not d["grants"] and d["snapshotCount"]==0 and len(d["rootShares"])==1 and len(d["manual"])==1, d'
    docker exec -u www-data "$container" php occ app:enable library >/dev/null
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php seed >/dev/null
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php library-only-grant >/dev/null
    docker exec -u www-data "$container" php occ app:remove library >/dev/null
    docker exec -u www-data "$container" php /tmp/library-sharing-lifecycle-fixture.php inspect |
        python3 -c 'import json,sys; d=json.load(sys.stdin); assert not d["grants"] and d["snapshotCount"]==0 and len(d["rootShares"])==1 and len(d["manual"])==1, d'
    echo "shared_lifecycle_nc_${version}=passed"
    NC_VERSION="$version" LIBRARY_LISTS_PREFIX="$prefix" LIBRARY_LISTS_WORK_DIR="$work_dir" \
        bash "$repo_dir/scripts/dev-lists-instance.sh" stop >/dev/null
    active_version=""
done
