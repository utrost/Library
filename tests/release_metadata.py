"""Shared current-build identity; historical release evidence keeps its recorded version."""
import json
import re
from pathlib import Path

CURRENT_VERSION = json.loads((Path(__file__).resolve().parents[1] / 'package.json').read_text())['version']
CURRENT_ASSET_VERSION = re.sub(r'[^a-zA-Z0-9]+', '-', CURRENT_VERSION)
