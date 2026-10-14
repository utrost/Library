#!/usr/bin/env python3
"""Export explicit performance allowlists. Never export SQL, URLs, book metadata or screenshots."""
import argparse
import hashlib
import json
import statistics
from pathlib import Path

parser = argparse.ArgumentParser(description=__doc__)
for name in ('api', 'browser', 'processes', 'scan', 'memory', 'matrix', 'jobs', 'cpu_before', 'cpu_after'):
    parser.add_argument('--' + name, type=Path)
parser.add_argument('--out', required=True, type=Path)
args = parser.parse_args()
args.out.mkdir(parents=True, exist_ok=True)
def read(path):
    return json.loads(path.read_text())
def lines(path):
    return [json.loads(line) for line in path.read_text().splitlines() if line.strip().startswith('{')]
def save(name, value):
    (args.out / name).write_text(json.dumps(value, indent=2) + '\n')
def number(value):
    assert isinstance(value, (int, float)) and not isinstance(value, bool)
    return value
api_labels = {'catalogue-25','catalogue-100','catalogue-page-400','catalogue-recent','search-word','filter-epub','review-missing','review-conflicts','creator-typeahead','publisher-typeahead','folder-typeahead','shelf-children','home-html','shelves-html','catalogue-html','settings-html','sidebar','detail','lists-index','lists-membership','inference-roots','scan-progress','duplicates-1','duplicates-100','shelf-root-children','metadata-export','sidecar-manifest','inference-sample','list-page','cover-first','cover-pdf','cover-epub','cover-cbz','catalogue-cursor-next','catalogue-cursor-deep','catalogue-hydrate','review-counts'}
if args.api:
    raw = read(args.api / 'results.json')
    profiles = {row['id']: row for row in lines(args.api / 'sql-http.jsonl')}
    operations = []
    for row in raw['http']:
        assert row['label'] in api_labels
        profile = profiles[row['label']]['sql']
        operations.append({'operation': row['label'], 'medianMs': number(row['medianMs']), 'maxMs': number(row['maxMs']),
            'samples': len(row['requests']), 'allHttp200': all(r['status'] == 200 for r in row['requests']),
            'responseBytes': number(row['requests'][0]['bytes']), 'sqlCount': number(profile['count']), 'sqlMs': number(profile['ms'])})
    save('http-aggregates.json', {'passed': not raw['errors'] and not raw['failures'], 'applicationRestored': bool(raw['cleanup']['applicationRestored']),
        'deepCursorAnchorMs': number(raw.get('cursorAnchor', {}).get('ms', 0)), 'operations': operations})
    table = ['# HTTP and SQL aggregates', '', 'All request bodies, URLs, SQL and parameters stay local. SQL is a separate profiled request; HTTP medians are unprofiled.', '',
        '| Operation | Median ms | Maximum ms | SQL count | SQL ms |', '| --- | ---: | ---: | ---: | ---: |']
    for r in operations:
        table.append(f"| {r['operation']} | {r['medianMs']:.1f} | {r['maxMs']:.1f} | {r['sqlCount']} | {r['sqlMs']:.1f} |")
    (args.out / 'http-results.md').write_text('\n'.join(table) + '\n')
if args.browser:
    raw = read(args.browser / 'results.json')
    surfaces = []
    for row in raw['gui']:
        assert row['label'] in {'catalogue-first','catalogue-repeat','home','shelves','lists','inference','review','settings'}
        surfaces.append({'surface': row['label'], 'visibleMs': number(row['timings']['readyAt']),
            'transferMiB': sum(number(r['bytes']) for r in row['resources']) / 1048576,
            'longTaskMs': sum(number(r['ms']) for r in row['timings']['longTasks']), 'observedAtMs': number(row['observedAt'])})
    save('browser-aggregates.json', {'passed': not raw['errors'] and not raw['failures'], 'applicationRestored': bool(raw['cleanup']['applicationRestored']), 'surfaces': surfaces})
if args.processes:
    labels = {'unchanged_scan_40','list_create','list_add_40','list_index','list_page','list_note','list_move','metadata_prepare_40','metadata_apply_40','metadata_undo_40','inference_start_40','inference_analyse_40','inference_results_40','duplicates_start_metadata','duplicates_complete_metadata','duplicates_start_hash','duplicates_complete_hash','list_index_150_lists_6000_entries','list_membership_150_lists','list_page_150_lists'}
    operations = []
    for row in lines(args.processes / 'processes.jsonl'):
        if 'ms' not in row:
            continue
        assert row['label'] in labels
        operations.append({'operation': row['label'], 'ms': number(row['ms']), 'sqlCount': number(row['sql']['count']),
            'sqlMs': number(row['sql']['ms']), 'failed': bool(row.get('error'))})
    save('process-aggregates.json', {'sourceHashesRestored': bool(read(args.processes / 'unchanged.json')['unchanged']),
        'accountDeleted': bool(read(args.processes / 'cleanup.json')['deleted']), 'operations': operations})
metric_keys = {'roots','indexed','traversalUnits','filesAdded','pathsUpdated','filesUnchanged','filesMissing','metadataErrors','fingerprintSkips','metadataExtractions','itemRefreshes','fileIndexDurationMs','fingerprintDurationMs','metadataExtractionDurationMs','itemRefreshDurationMs','missingUpdateDurationMs','scannerDurationMs','rootErrors'}
for directory, name in [(args.scan, 'scan-aggregates.json'), (args.memory, 'unprofiled-scan-aggregates.json')]:
    if not directory:
        continue
    candidates = list(directory.glob('scan-*.jsonl'))
    assert len(candidates) == 1
    rows = lines(candidates[0]); operation = next(r for r in rows if 'sql' in r); result = next(r for r in rows if r.get('event') == 'scan_result')
    aggregate = {'budgetCancelled': bool(result['budgetCancelled']), 'budgetSeconds': number(result['budgetSeconds']),
        'ms': number(operation['ms']), 'peakMemoryBytes': number(operation['peakMemoryBytes']), 'sqlCount': number(operation['sql']['count']),
        'sqlMs': number(operation['sql']['ms']), 'sqlProfilingEnabled': name == 'scan-aggregates.json', 'insertCountsComplete': False, 'failed': bool(operation.get('error')), 'metrics': {k: number(v) for k, v in result['metrics'].items() if k in metric_keys}}
    for label, table in [('searchGramInsert', 'library_item_search_grams'), ('facetInsert', 'library_item_facets')]:
        statements = [r for r in operation['sql']['shapes'] if r['shape'].startswith('INSERT') and table in r['shape']]
        aggregate[label + 'Count'] = sum(number(r['count']) for r in statements)
        aggregate[label + 'Ms'] = sum(number(r['ms']) for r in statements)
    save(name, aggregate)
if args.jobs:
    rows = lines(args.jobs / 'maintenance-0.jsonl')
    assert {row['label'] for row in rows} == {'maintenance_job', 'scheduled_scan_dispatcher'}
    save('job-aggregates.json', {'operations': [{'operation': row['label'], 'ms': number(row['ms']),
        'peakMemoryBytes': number(row['peakMemoryBytes']), 'sqlCount': number(row['sql']['count']),
        'sqlMs': number(row['sql']['ms']), 'failed': bool(row.get('error'))} for row in rows]})
if args.matrix:
    versions = []
    for version in ('33.0.9', '34.0.4', '35.0.0'):
        directory = args.matrix / ('nextcloud-' + version)
        summary = read(directory / 'summary.json'); stats = read(directory / 'results.json')['stats']
        row = {'version': version, 'passed': bool(summary['passed']), 'cleanupPassed': bool(summary['cleanupPassed']),
            'browserPassed': number(stats['expected']), 'browserUnexpected': number(stats['unexpected']), 'browserSkipped': number(stats['skipped'])}
        for test in ('performance_fixes_integration', 'scan_paging_integration', 'scheduled_scan_integration'):
            check = next(x for x in lines(directory / (test + '.log')) if 'passed' in x)
            row[test] = {'passed': bool(check['passed']), 'assertions': number(check['assertions'])}
        assert 'inference_apply_smoke_ok=true' in (directory / 'inference-apply.log').read_text()
        schedules = read(directory / 'schedules/results.json')['report']
        row['inferenceApplyUndoPassed'] = True
        row['scheduleBrowserPassed'] = all(bool(r['passed']) for r in schedules)
        versions.append(row)
    save('compatibility-aggregates.json', {'candidateSha256': hashlib.sha256((args.matrix / 'library.tar.gz').read_bytes()).hexdigest(), 'versions': versions})
if args.cpu_before or args.cpu_after:
    comparison = {}
    for phase, directory in [('before', args.cpu_before), ('after', args.cpu_after)]:
        if directory is None:
            continue
        visits = []
        for row in read(directory / 'aggregates.json')['results']:
            profile = read(directory / ('profile-' + str(int(row['run'])) + '.json'))
            nodes = {node['id']: node for node in profile['nodes']}
            library_ms = 0
            for sample, delta in zip(profile['samples'], profile['timeDeltas']):
                url = nodes[sample]['callFrame'].get('url', '')
                if '/apps/library/' in url or '/custom_apps/library/' in url:
                    library_ms += number(delta) / 1000
            visits.append({'run': int(row['run']), 'libraryCpuMs': library_ms, 'longTaskMs': number(row['longTaskMs'])})
        comparison[phase] = {'visits': visits, 'medianLibraryCpuMs': statistics.median(r['libraryCpuMs'] for r in visits),
                             'medianLongTaskMs': statistics.median(r['longTaskMs'] for r in visits)}
    save('cpu-comparison.json', comparison)
print('Exported aggregate allowlists; raw evidence remains local.')
