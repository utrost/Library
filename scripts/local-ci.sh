#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
mode="${1:-full}"
case "$mode" in
    quick|full) ;;
    *) echo 'Usage: scripts/local-ci.sh [quick|full]' >&2; exit 2 ;;
esac
cd "$root"
if [ -n "$(git status --porcelain)" ]; then
    echo 'Commit or discard source changes before local CI so the result identifies one exact commit.' >&2
    exit 2
fi
for executable in git node npm python3 docker; do
    command -v "$executable" >/dev/null || { echo "Missing $executable" >&2; exit 2; }
done

commit="$(git rev-parse HEAD)"
version="$(node -p 'require("./package.json").version')"
run_dir="$root/dist/local-ci/$commit-$(date -u +%Y%m%dT%H%M%SZ)"
mkdir -p "$run_dir"
run_step() {
    local name="$1"
    shift
    printf '\n== %s ==\n' "$name"
    "$@" 2>&1 | tee "$run_dir/$name.log"
}

# The venv and npm dependencies are local; nothing executes in GitHub Actions.
if command -v uv >/dev/null; then
    if [ ! -f "$root/.venv/pyvenv.cfg" ] || ! grep -q '^version = 3\.11\.' "$root/.venv/pyvenv.cfg"; then
        uv venv --clear --python 3.11 "$root/.venv" >/dev/null
    fi
    export PATH="$root/.venv/bin:$PATH"
    run_step python-dependencies uv pip install --python "$root/.venv/bin/python" --require-hashes -r requirements-ci.txt
else
    if [ ! -x "$root/.venv/bin/python" ]; then python3 -m venv "$root/.venv"; fi
    export PATH="$root/.venv/bin:$PATH"
    run_step python-dependencies python -m pip install --require-hashes -r requirements-ci.txt
fi
run_step npm-dependencies npm ci
run_step npm-audit npm audit --audit-level=high --omit=dev
run_step security-gates bash scripts/security-gates.sh
run_step source-check npm run check

php_lint() {
    docker run --rm -v "$root:/app:ro" -w /app php:8.3-cli sh -eu -c '
        for file in \
            lib/Controller/ProviderSettingsController.php \
            lib/Instrumentation/MonotonicClock.php \
            lib/Instrumentation/ScanProgressPolicy.php \
            lib/Exception/ScanCancelledException.php \
            lib/Service/ScanJobService.php \
            lib/Service/LibraryScanner.php \
            lib/BackgroundJob/ScanJob.php \
            lib/Migration/Version000100Date20260911140000.php \
            tests/php/performance_instrumentation_test.php \
            tests/php/library_scanner_traversal_test.php \
            tests/php/scan_job_runtime_test.php \
            tests/php/scan_job_service_test.php; do
            php -l "$file"
        done'
}
run_step php-lint php_lint

if [ "$mode" = full ]; then
    codeql="$(bash scripts/install-local-codeql.sh | sed -n 's/^codeql_path=//p')"
    test -x "$codeql"
    # Analyse the same clean committed tree used by the GUI rehearsal.
    gui_worktree="$(mktemp -d -t library-local-gui-XXXXXXXX)"
    rmdir "$gui_worktree"
    cleanup_worktree() {
        git worktree remove --force "$gui_worktree" >/dev/null 2>&1 || true
    }
    trap cleanup_worktree EXIT
    git worktree add --detach "$gui_worktree" "$commit" >/dev/null
    codeql_scan() {
        for language in javascript python; do
            database="$run_dir/codeql-$language"
            if [ "$language" = javascript ]; then pack_version=2.5.0; else pack_version=1.9.0; fi
            "$codeql" database create "$database" --language="$language" --source-root="$gui_worktree" --overwrite
            "$codeql" database analyze "$database" \
                --format=sarif-latest --output="$run_dir/codeql-$language.sarif" \
                "codeql/$language-queries@$pack_version:codeql-suites/$language-security-extended.qls" \
                "codeql/$language-queries@$pack_version:codeql-suites/$language-security-and-quality.qls"
        done
    }
    run_step codeql codeql_scan

    # The GUI rehearsal creates a disposable signed package. Keep it outside the
    # working checkout so it cannot replace an archive intended for deployment.
    gui_rehearsal() {
        (cd "$gui_worktree" && CI=true LIBRARY_FRESH_MIXED_COUNT=40 npm run smoke:fresh-install-mixed)
    }
    run_step gui-rehearsal gui_rehearsal
    cleanup_worktree
    trap - EXIT

    if [ -n "$(git status --porcelain)" ]; then
        echo 'Local CI changed tracked source files; no release receipt was written.' >&2
        exit 1
    fi
    python - "$root/dist/local-ci/last-success.json" "$commit" "$version" "$run_dir" <<'PY'
import json, sys
from datetime import datetime, timezone
from pathlib import Path
path, commit, version, evidence = sys.argv[1:]
Path(path).write_text(json.dumps({
    'commit': commit,
    'version': version,
    'completedAt': datetime.now(timezone.utc).isoformat(),
    'evidence': evidence,
    'checks': ['npm audit', 'security gates', 'source checks', 'PHP lint', 'CodeQL', 'disposable NC34 GUI'],
}, indent=2) + '\n')
PY
fi
printf 'local_ci_ok=true mode=%s commit=%s evidence=%s\n' "$mode" "$commit" "$run_dir"
