#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if command -v php >/dev/null 2>&1; then
    php "$repo_dir/tests/php/manual_cover_validator_test.php"
    php "$repo_dir/tests/php/manual_cover_controller_test.php"
    php "$repo_dir/tests/php/metadata_fast_path_test.php"
    php "$repo_dir/tests/php/performance_instrumentation_test.php"
    php "$repo_dir/tests/php/library_scanner_traversal_test.php"
    php "$repo_dir/tests/php/scan_job_runtime_test.php"
    exec php "$repo_dir/tests/php/scan_job_service_test.php"
fi

if command -v docker >/dev/null 2>&1 && docker image inspect php:8.3-cli >/dev/null 2>&1; then
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/manual_cover_validator_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/manual_cover_controller_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/metadata_fast_path_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/performance_instrumentation_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/library_scanner_traversal_test.php
    docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/scan_job_runtime_test.php
    exec docker run --rm -v "$repo_dir:/app:ro" -w /app php:8.3-cli php tests/php/scan_job_service_test.php
fi

echo "PHP runtime tests require host php or a locally available php:8.3-cli Docker image" >&2
exit 1
