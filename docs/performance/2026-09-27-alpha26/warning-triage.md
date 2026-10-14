# Alpha.26 warning triage

Read-only investigation of all **799 current warnings** on developer NC34, 27 September 2026. Matched all 13 safe diagnostic IDs to their server-side exceptions. Inspected source headers, extracted scalar lengths and author counts, and independently checked all 50 real-library EPUB archives. No source books, canonical metadata, root settings or scan schedules were changed. Private paths, source values and exception logs remain in `/tmp`.

## Findings

| Category | Count | Impact | Cause / action |
| --- | ---: | --- | --- |
| Synthetic shelf archive warnings | 736 | Catalogue items exist; benchmark noise in Review | 9 EPUB + 727 CBZ files in the 5,000-EPUB / 2,000-CBZ benchmark shelves. Keep synthetic datasets separate from normal library scans. Three header samples per shelf checked; every synthetic archive was not independently validated. |
| Real EPUB archive warnings | 50 | Filename/sidecar fallback items exist; embedded EPUB metadata cannot be read by the current reader | PHP ZIP errors: 30 truncated, 14 multidisk, 5 not-ZIP, 1 inconsistent. Investigate compatibility/recovery for the 14 with independently readable EPUB metadata; review/redownload the others. |
| Real author-field warnings | 3 | Items and other metadata retained; complete source author fields rejected | Author counts 36, 46 and 71 exceed the app's 32-name limit. The 71-name list also has 1,225 combined characters, exceeding 1,024. These can be legitimate large contributor lists; they are not proof of corrupt books. |
| Real PDF import failures | 10 | **No catalogue item** | App lets oversized metadata reach bounded database columns: 9 subtitle overflows, 1 title overflow. Fix scanner field validation/isolation first. |

Thus **736 warnings are synthetic shelf noise**, and **63 affect the real library**. Archive and author warnings still have catalogue items. The ten missing PDFs are confirmed app robustness failures, not unreadable PDFs: their streams have PDF headers and metadata extraction succeeds. Their database insert fails with `Data too long for column`.

## PDF failures: first implementation priority

The title is 920 Unicode characters. Rejected subtitles span 632–1,529 characters. Both database columns allow 512 characters. All ten oversized values come from **OPF sidecars** selected by metadata precedence, confirmed by re-extraction. The failure belongs at the final scanner candidate boundary, rather than being a PDF parser failure. The PDF parser also maps `/Subject` to subtitle, so the same guard should cover embedded values as well.

Validate **all bounded scalar fields** before persistence. Handle an oversized field alone: preserve previously accepted values; for a new book use an accepted filename title where needed, retain other valid fields, and expose the full rejected proposal in bounded Review/provenance storage. Keep manual edits/imports strictly validated. Do not silently truncate source metadata or relabel a database overflow as a corrupt publication. Add fixtures for Unicode lengths, sidecar overrides, new/existing items, manual corrections and recovery after source correction.

A later explicit mapping choice could move verbose subject/abstract values into description where appropriate. Field isolation fixes the import failure without automatically changing metadata semantics.

## EPUB compatibility and recovery

All 50 fail the current PHP `ZipArchive` open, confirmed directly with read-only access. An independent Python ZIP reader opens **16**. It successfully reads and parses `META-INF/container.xml` and the referenced OPF metadata in **14**, all from PHP's multidisk group. The other two open their directory but fail required metadata reads. Thirty-four cannot be opened by the independent reader either.

A successful OPF read is **not** validation of every archive member or assurance the book can be read end to end. Nevertheless, labeling all 50 simply corrupt overstates the evidence. Record the ZIP failure reason and distinguish unsupported layout from truncation/malformed data. Consider a bounded compatible metadata fallback or an explicit repair workflow for the 14 candidates; preserve original source files and resource limits. No repair or new Python runtime dependency was added by this investigation.

## Author capacity

All three rejected fields exceed 32 ordered names; the per-name maximum is only 20–23 characters. One list also exceeds combined display storage. Existing field isolation works: these books remain available with other valid metadata. Large anthologies/contributor lists expose an app policy limitation rather than automatically requiring a source-file correction.

Supporting them fully requires reviewing the ordered-name limit, the 1,024-character creators display field, facet work, exports and manual validation together. Preserve author identities and order; do not split commas or drop contributors merely to clear a warning.

## Repeat-scan cost: second implementation priority

`MetadataFastPathDecision` only skips records previously marked `indexed`; warnings remain `metadata_error`. `shouldMarkProcessed` also refuses to store successful input fingerprints when a warning exists. All **799** issues were therefore re-extracted in the latest daily scan, while 106,918 other books skipped extraction. The 50 real problematic EPUBs alone total **1.08 GB**, currently streamed into temporary archive copies each retry.

Cache **deterministic, completed-with-warning** results by source/sidecar fingerprint and extractor revision while retaining visible Review diagnostics. Changed source/sidecars, changed parser revision and explicit Retry must trigger extraction. Transient I/O/database failures and books without successful catalogue persistence need separate retry/backoff handling; they must not become permanently skipped failures. Preserve warning state during observation updates, since `upsertFile` currently clears it before the fast-path decision. Keep retained-warning counts distinct from actual retry counts in scan evidence.

## Suggested order

1. Field-level handling of oversized scanner metadata: recover the ten PDFs and prevent similar failures in other bounded columns.
2. Retain and cache deterministic warnings, with explicit retry and change detection.
3. Separate synthetic benchmark roots from routine scans/Review.
4. Add precise archive diagnostics and evaluate the 14 compatibility/recovery candidates.
5. Review support for large legitimate author lists.

[Numeric and boolean evidence](warning-triage.json). [Indexing measurements and full scheduled acceptance](README.md).
