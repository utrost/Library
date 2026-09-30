# Alpha.27: metadata recovery and warning caching

Deployed **0.2.0-alpha.27** to developer **Nextcloud 34.0.3**, 27 September 2026. [Aggregate evidence](verification.json). [Original warning investigation](../2026-09-27-alpha26/warning-triage.md).

## Real library results

All **ten previously missing PDFs** now have catalogue entries: **107,717 items** in total. Oversized title/subtitle values came from OPF sidecars. Valid fields are imported, existing accepted values and manual corrections are preserved, and rejected proposals remain available in Review. Values are not silently truncated. Unsafe source-reset controls are disabled with hover explanations.

| Targeted pass | Files | Extractions | Cached warnings | Duration |
| --- | ---: | ---: | ---: | ---: |
| Recover missing PDFs | 10 | 10 | 0 | 1.064 s |
| Prime warning cache | 799 | 789 | 10 | 94.266 s |
| Repeat unchanged warnings | 799 | 0 | 799 | 6.814 s |

The repeated warning pass is approximately **14 times faster**. This measures the warning subset, not the entire library scan. The preceding alpha.26 whole-library ordinary scan took 50 minutes; no new full-library scan is claimed here. Peak PHP memory for the two 799-file passes was **30 MiB**.

All **799 issues remain visible**: 786 archive warnings (736 synthetic and 50 real), three author-limit warnings and ten bounded-field warnings. No warning file is missing its catalogue item. All 206,706 source-file ID/ETag/mtime/size observations and all three manually corrected records matched before/after. Fixture tests additionally verify unchanged source bytes.

## Behaviour and limits

- Validate scanner scalar fields against their actual database limits. Reject only invalid fields; preserve other metadata and prior accepted values. A new invalid title uses a bounded filename fallback.
- Retain complete valid UTF-8 rejected proposals up to 8 KiB per field, subject to the 60,000-byte proposal JSON limit. Larger proposals remain in the original source; affected field names are still recorded for Review.
- Cache only recognized deterministic archive/author/field warnings after successful catalogue persistence and stable source fingerprints. Keep the same Review warning and diagnostic ID.
- Source or sidecar changes, path changes, extraction revision changes, missing catalogue entries and explicit Retry invalidate the cache. Transient extraction/SQL/I/O failures are not cached.
- Pipeline v7 can adopt unchanged indexed v6 records only after validating saved source proposals. This avoids forcing a metadata extraction of the entire existing library.
- Persist `cachedWarningSkips` in scan history. Migration 46 adds its integer column; all 24 XML table field sets match the replayed migration schema.

Archive repair and larger author capacity remain separate work. This release does not modify original publications, sidecars, root configuration or schedules.

## Verification

The local gate passed: 1,041 Python tests, 519 frontend tests and 518 parser parity vectors, plus PHP runtime checks. Dedicated integration checks passed: warning caching/recovery (25 assertions), author validation (32), scanner indexes (28), schedules (36) and performance regressions (45). Scalar boundary tests passed 38 assertions.

Playwright passed in Chromium and Firefox on developer NC34: catalogue pagination, lazy covers, selection, mobile fit and recovered-item detail/Review controls. Full rejected values remain readable; unsafe reset controls are disabled; no page errors were observed. Raw screenshots and metadata evidence are kept privately outside the repository.

The latest complete 33–35 browser matrix remains [alpha.23](../2026-09-27-alpha23/README.md). This slice does not claim a new 33–35 matrix or PostgreSQL runtime verification.

## Repeat cheaply

The targeted helper updates scanner state and catalogue metadata, without writing source books. It refuses to run while the account has a queued/running app scan. Use `prime` once after upgrading, then `cached` for the repeat measurement. `recover` selects extraction failures and is intended for diagnosis/recovery.

```sh
docker cp scripts/performance/warning-cache.php nextcloud:/tmp/library-warning-cache.php
docker exec -u www-data -e NC_USER=uwe nextcloud php /tmp/library-warning-cache.php prime > /tmp/library-warning-prime.jsonl 2> /tmp/library-warning-prime-private.log
docker exec -u www-data -e NC_USER=uwe nextcloud php /tmp/library-warning-cache.php cached > /tmp/library-warning-cached.jsonl 2> /tmp/library-warning-cached-private.log
docker exec nextcloud rm -f /tmp/library-warning-cache.php
EVIDENCE_DIR=/tmp/library-warning-browser node scripts/smoke-warning-recovery.mjs
EVIDENCE_DIR=/tmp/library-catalogue-browser node scripts/smoke-performance-fixes.mjs
```

Keep stderr, screenshots and browser HTML private. Export only explicit numeric/boolean aggregate fields, as in this report. Browser helpers create and remove temporary authentication tokens.
