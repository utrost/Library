# Focused completion check: #206, #212, #225, #227 and #230

2026-11-13. This record covers the source changes following signed developer
checkpoint 0.4.0-alpha.8. It does not certify a new release or imply deployment
to the developer catalogue. All mutating checks used disposable accounts and
synthetic books. No external metadata provider call was made by the fixtures.

| Area | Focused result |
| --- | --- |
| #206 bulk setup | Provider-specific fields, explicit choice without a preferred provider, missing-key guidance and cover opt-in verified on desktop/mobile. Backend rejects empty, duplicate, forged, unsupported and over-limit selections before job creation. Selected IDs remain fixed across pagination and opening setup sends no provider request. |
| #212 language | One-book and batch review expose saved, proposed and original provider values. Known and regional forms use the existing normalizer; unknown codes remain evidence only. Conflicting candidate/edition languages are excluded from the strong-match shortcut. Selective Apply, filter update and later-manual-edit-safe Undo passed disposable fixtures. |
| #225 Home/health | Health counts now include unreviewed duplicate pairs and stalled jobs, with exact review links. A committed manual edit queues a new background snapshot. Home's populated-catalogue five-call median was 94 ms (one 461 ms outlier); the exact background refresh took 23.1 s without blocking Home. Desktop/mobile loading, failure and Retry passed. |
| #227 Unified Search | Disposable NC34 browser checks passed owned-book and canonical-author links to the current editor/profile, account isolation, bounded multi-page results, mobile layout, and Text enabled/disabled. Populated-catalogue indexed book pages measured roughly 220–300 ms; sampled CLI book results were inaccessible under the probe context, so no claim is made for a populated browser result. |
| #230 documentation | Roadmap and scope ledger now describe installed alpha.8 rather than alpha.7; the handbook links the signed-package record and separates new source behavior from the installed checkpoint. Public documentation scan found no private account, infrastructure or catalogue references in changed files. |

Only affected checks were run: three component files (seven Vitest assertions),
the metadata and Home/permission PHP integration fixtures, five focused Playwright
cases across desktop/mobile and Text on/off, the translation inventory, eleven
documentation assertions, PHP syntax for changed classes, and the app asset build.
The JS runtime bundle measured 922,079 bytes. The full test suite, full CI and
release gate were deliberately not run. Manual assistive-technology acceptance,
live-provider behavior and the NC33–35 release matrix remain separate 0.4 gates.
