#!/usr/bin/env bash
set -euo pipefail

python -m pytest -q
npm run check:translations
./scripts/run-php-runtime-tests.sh
npm test -- --run
npm run build
git diff --check
python3 - <<'PY'
from pathlib import Path
import re
import sys
root = Path('.')
errors = []
for path in [root / 'README.md', root / 'CHANGELOG.md', root / 'RELEASE.md', *sorted((root / 'docs').glob('*.md'))]:
    if not path.exists():
        continue
    text = path.read_text(encoding='utf-8')
    for match in re.finditer(r'\[[^\]]+\]\(([^)]+)\)', text):
        link = match.group(1)
        if '://' in link or link.startswith('#') or link.startswith('mailto:'):
            continue
        target = link.split('#', 1)[0]
        if target and not (path.parent / target).exists():
            errors.append(f'{path}: missing link {link}')
if errors:
    print('\n'.join(errors))
    sys.exit(1)
print('Markdown links OK')
PY
