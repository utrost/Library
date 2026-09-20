#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if command -v php >/dev/null 2>&1; then
    php "$repo_dir/tests/php/catalogue_batch_controller_boundary_test.php"
    php "$repo_dir/tests/batch_apply_explicit_item_ids.php"
    php "$repo_dir/tests/php/metadata_status_test.php"
    php "$repo_dir/tests/php/publication_date_test.php"
    php "$repo_dir/tests/php/identifier_service_test.php"
    php "$repo_dir/tests/php/scanner_identifier_extraction_test.php"
    php "$repo_dir/tests/php/cover_selection_refresh_test.php"
    php "$repo_dir/tests/php/manual_cover_validator_test.php"
    php "$repo_dir/tests/php/archive_cover_hardening_test.php"
    php "$repo_dir/tests/php/metadata_import_limits_test.php"
    php "$repo_dir/tests/php/metadata_error_tsv_formula_test.php"
    php "$repo_dir/tests/php/safe_diagnostics_test.php"
    php "$repo_dir/tests/php/security_audit_event_test.php"
    php "$repo_dir/tests/php/manual_cover_controller_test.php"
    php "$repo_dir/tests/php/item_page_cover_privacy_test.php"
    php "$repo_dir/tests/php/metadata_fast_path_test.php"
    php "$repo_dir/tests/php/performance_instrumentation_test.php"
    php "$repo_dir/tests/php/review_query_policy_test.php"
    php "$repo_dir/tests/php/library_scanner_traversal_test.php"
    php "$repo_dir/tests/php/library_scanner_repair_scope_test.php"
    php "$repo_dir/tests/php/scan_job_runtime_test.php"
    exec php "$repo_dir/tests/php/scan_job_service_test.php"
fi

if command -v docker >/dev/null 2>&1 && docker image inspect php:8.3-cli >/dev/null 2>&1; then
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/catalogue_batch_controller_boundary_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/batch_apply_explicit_item_ids.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/metadata_status_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/publication_date_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/identifier_service_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/scanner_identifier_extraction_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/cover_selection_refresh_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/manual_cover_validator_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/archive_cover_hardening_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/metadata_import_limits_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/metadata_error_tsv_formula_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/safe_diagnostics_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/security_audit_event_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/manual_cover_controller_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/item_page_cover_privacy_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/metadata_fast_path_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/performance_instrumentation_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/review_query_policy_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/library_scanner_traversal_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/library_scanner_repair_scope_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/scan_job_runtime_test.php
    exec docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/scan_job_service_test.php
fi

echo "PHP runtime tests require host php or a locally available php:8.3-cli Docker image" >&2
exit 1
