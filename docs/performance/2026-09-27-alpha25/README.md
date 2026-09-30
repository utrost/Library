# Alpha.25: author-field recovery and full scheduled-scan acceptance

Developer Nextcloud **34.0.3**, app **0.2.0-alpha.25**, 27 September 2026. The initial catalogue contains **84,261 publications** in seven enabled roots. The large root had never completed a full scan: its source contains **100,558 EPUB/PDF files** versus 77,121 previously catalogued entries, so this run also discovers additional books. The full scheduled scan **completed and passed** the terminal acceptance checks. The catalogue now contains **107,707 publications**.

## Author-field recovery

Extracted author values still use the existing limits: 32 ordered names, 255 Unicode characters/name, and 1,024 characters in the combined display. Commas remain part of a name; no automatic splitting or truncation is added.

When a source author field cannot be validated, Library omits that field from the scanner candidate and creates a safe `metadata_authors_invalid` Review diagnostic. Valid title/language/publisher/other metadata can still refresh. A previously accepted canonical author field and its index remain intact; user corrections stay protected. Rejected authors do not become empty reset candidates. Correcting source metadata clears the warning on rescan. Manual edits and corrected-metadata imports keep strict author validation.

The real previously reported failure has **71 author entries**, exceeding the supported count. The real scan has now converted it to the expected field-level warning and retained both valid source fields checked against private before-state hashes. It had no catalogue item before recovery; the scan created one while leaving its source file unchanged. No source book names or author values are exported here.

Metadata pipeline **v6** makes the acceptance scan re-extract older metadata. This is a full metadata-refresh workload, not an unchanged-file benchmark.

## Verification already completed

- 36 focused author checks, including Unicode/control/length/list/display limits and strict manual validation.
- 32 real Files/scanner integration assertions, including preservation of accepted author facets, user corrections, valid scanner candidates, unchanged fixture source bytes and recovery after source corrections.
- 36 scheduled incremental assertions: added files, deleted files, updated embedded metadata and OPF sidecars, unchanged-file skips, user corrections, overlap prevention, stale-worker recovery, disable behavior and account cleanup.
- Chromium and Firefox passed real-catalogue cursor navigation, selection controls, viewport covers and mobile width while the full scan was running and again after completion against the 107,707-item catalogue; zero page errors.
- Local gate passed before deployment and again after completion: 1,041 Python tests, 518 frontend tests/34 files, 518 parser parity vectors, PHP runtime programs, frontend build/budget and documentation links.

[Fixture and browser aggregate evidence](fixture-verification.json). Private source values, logs and screenshots remain in `/tmp`.

## Full scheduled run — PASS

| Measurement | Result |
| --- | ---: |
| Enabled roots completed | 7 / 7 |
| Publication files processed / metadata extractions | 107,717 |
| Catalogue before → after | 84,261 → 107,707 |
| Newly discovered publication files | 23,448 |
| New source index records, including sidecars | 46,552 |
| Missing files / path changes / root failures | 0 / 0 / 0 |
| Full refresh duration | 4 h 12 min 47 s |
| Average publication files/second | 7.102 |
| Native PHP peak / observed process high-water memory | 65.3 MiB / 132.6 MiB |
| Metadata warnings | 799 |

The registered Nextcloud worker reports success. All seven completion markers advanced. The daily interval remains 86,400 seconds, with the next run due in the future. All 160,154 pre-existing source identity/version markers and all three user-edited records match their before-state digests. Fixture users and browser tokens are removed; maintenance mode is off and no database upgrade is pending.

The 799 warnings comprise **786 archive warnings**, **3 author-field Review warnings** (all exceeding the 32-author limit), and **10 other extraction failures**. The originally reported 71-author case retained both valid source fields checked and became a catalogue item. These source/metadata issues remain for Review; successful job completion does not mean every publication imported without a warning. Ten extraction failures have no catalogue item. The existing catalogue gained 23,446 items; discovered-file counts and catalogue-item counts are separate measures.

This pipeline-v6 refresh skipped no fingerprints: 84,269 files had unchanged file identity/version observations but still needed metadata extraction. It is not a timing prediction for an ordinary unchanged-file scan. The earlier estimate based on the partial catalogue understated the source library; future full-scan estimates should use source-file counts first.

[Numeric and boolean aggregate evidence](full-scan-verification.json). Raw progress, hashes, book identities, logs and screenshots remain private in `/tmp`.


The existing daily schedule was advanced to be due once. Its interval was retained. No scan was directly queued or executed by the observer: the existing host Cron entry invoked Nextcloud's background worker, the registered scheduler dispatched the all-root job, and a fresh Nextcloud worker executed it.

Before scheduling, the idle five-hour-old worker was stopped gracefully so the restarted host worker would load the deployed PHP classes. No reserved job was active at that point. Host Cron runs the existing worker helper every five minutes. The old core `lastcron` value is not a reliable activity indicator for `occ background-job:worker`; queue/history and native `job_runs` are the execution evidence used here.

The observer checks all seven root completion markers, root errors, scan counters, actual Nextcloud worker activity, the unchanged daily interval and next due time, and before/after digests of **160,154 pre-existing source identity/version records** plus three user-edited catalogue records. Source digests cover Nextcloud file ID, ETag, mtime and size; they are not cryptographic hashes of every publication's contents. The source digest is scoped to index records created before preparation; newly discovered source records are counted separately and are expected to grow the catalogue. The scoped digest has the same count and SHA as the original unfiltered before-state. Fixture checks additionally hash their source bytes.

Nextcloud removes a queued one-shot job when it starts, so a ten-second poll may miss the queue argument. Scheduled dispatch is proven by the scheduler's changed `last_job_id` matching the new all-root history row; native worker execution is observed separately. The observer does not advance the scanner through progress requests.

## Reproduce

Run from the repository root with Docker access. This advances an **already enabled** account schedule; it refuses to enable a disabled schedule or overlap an active scan:

```bash
NC_USER=uwe EVIDENCE_DIR=/tmp/library-full-scheduled-acceptance \
  node scripts/performance/full-scheduled-scan.mjs

# Resume observation using its saved before-state; does not change the schedule again.
RESUME=1 NC_USER=uwe EVIDENCE_DIR=/tmp/library-full-scheduled-acceptance \
  node scripts/performance/full-scheduled-scan.mjs
```

The native worker-statistics adapter targets NC34. The observation timeout defaults to three hours (`MAX_SECONDS`); it does not cancel a running scan. This metadata-refresh acceptance run uses `MAX_SECONDS=21600` to allow six hours of observation. Store raw results privately and export only numeric/boolean aggregate allowlists. PostgreSQL, concurrent production capacity and the final NC33–35 release archive remain separate acceptance work. This run verifies one real scheduled scan over more than 100k publications; it does not measure concurrent-user capacity.
