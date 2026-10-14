# Alpha.7 large author operation verification

Candidate: `0.3.0-alpha.7` development source. This is not the signed App Store archive.

## Scope

The 503-book fixture exercises a whole-author merge and conditional Undo through the durable task queue. It checks that queueing leaves author links unchanged, that a stale worker claim can be reclaimed, that both operations commit all 503 links, that a changed preview causes no partial merge, that queued tasks can be cancelled, and that another account cannot read or cancel the tasks. The fixture account and files are removed after each run.

Run with `NC_CONTAINER=<container> node scripts/smoke-author-large-merge.mjs` after deploying the candidate to an owned test instance. The test creates 501 copies of a small real EPUB in addition to the two source fixture books. Timings cover the service call in the container, not file creation, HTTP latency or a production workload.

## Results

| Nextcloud | Database | 503-book merge and Undo | Preview | Queue | Merge | Undo |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| 33.0.9 | SQLite, fresh | Pass | 6.27 ms | 7.07 ms | 140.97 ms | 145.36 ms |
| 34.0.4 | SQLite, fresh | Pass | 4.07 ms | 4.73 ms | 117.73 ms | 138.29 ms |
| 35.0.0 | SQLite, fresh | Pass | 4.32 ms | 5.62 ms | 123.02 ms | 144.71 ms |
| 34.0.3 | MariaDB, populated developer upgrade | Pass | 12.62 ms | 14.28 ms | 274.42 ms | 319.50 ms |

The repository gate passed: 1,046 Python tests, 532 Vitest tests, translation inventory (1,045 keys), the production build, module closure and Markdown links. On fresh NC34, the queued task and its cancellation appeared correctly in Chromium and Firefox. The first browser run failed because the test reused one already-cancelled synthetic task for both browsers; the fixture was corrected to create a task per browser and the full two-browser run passed. Its screenshots are in the local evidence directory `/tmp/library-alpha7/task-ui/`.

The populated developer NC34 upgrade from alpha.6 to alpha.7 succeeded. The new timed job is registered. Its 503-book isolated account passed the same merge, undo, recovery, cancellation, conflict and account isolation checks on MariaDB. Queued task display and cancellation passed in Chromium and Firefox on the upgraded instance. The existing small author assignment integration passed 23 assertions, and Chromium and Firefox passed merge, reassignment, conditional Undo, canonical catalogue name, homonym and mobile-fit flows. After cleanup the developer catalogue still had 107,717 books, with zero author fixture accounts and zero task rows.

All three disposable instances were removed after the run. Browser screenshots for the upgraded instance are in `/tmp/library-alpha7/developer-task-ui/` and `/tmp/library-alpha7/developer-assignments/`. The complete signed-package NC33–35 fresh/upgrade matrix remains a release requirement.
