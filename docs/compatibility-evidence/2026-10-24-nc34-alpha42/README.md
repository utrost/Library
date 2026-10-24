# Alpha.42 developer NC34 checkpoint

Signed alpha.42 from merged [PR #163](https://github.com/utrost/Library/pull/163) is installed on developer Nextcloud 34.0.3.2. Its merged source commit is `b4cb8d1c3d1d4e733ff62d10aeea2ab9a54e1ad7`; archive `library-0.3.0-alpha.42.tar.gz` has SHA-256 `da3471f7e36c44897f637c41b8ac14ed9bb5f3e4e9592008372d6b4bf42d54b8`. All required source, security and fresh-install GUI checks passed. The signed archive passed signature, SBOM, provenance, module-closure and size audits.

The installed app passes integrity checks; maintenance mode is off and no database upgrade is pending. The owner catalogue stayed at **107,717 rows** before and after installation. A rollback copy of alpha.41 is at `/tmp/library-before-alpha42-20261024T103000Z`. Alpha.42 has no migration. The unchanged-file scan smoke passed without changing source files or catalogue rows. The installed sidebar smoke passed; the basic browser smoke mounted the app, opened and closed the sidebar and reported zero console errors.

The aggregate installed package smoke stopped on its download check: the first alphabetic catalogue entry returned WebDAV 503. Nextcloud's log reports that this source file no longer exists at its indexed path. The same archive passed the download check in disposable fresh-install CI. This is a fixture limitation of the owner's current catalogue, not evidence that a live source was deleted by the release.

Read-only median HTTP timings from two samples on this shared developer instance:

| Journey | Before alpha.42 | Installed alpha.42 |
| --- | ---: | ---: |
| Catalogue, 100 books | 16,924 ms | 38 ms |
| Date added sort | 8,589 ms | 36 ms |
| Word search | 12,672 ms | 1,874 ms |
| EPUB filter | 11,436 ms | 86 ms |
| Review conflicts | 583 ms | 27 ms |
| Home HTML | 29,664 ms | 50 ms |
| Shelves HTML | 36,661 ms | 32 ms |
| Settings HTML | 1,786 ms | 1,649 ms |
| Book detail | 96 ms | 53 ms |

The exact unfiltered catalogue count remains separate and may take about nine seconds; the visible page no longer waits for it. An installed catalogue smoke returned the first page in 281 ms and page two in 292 ms, but two search variants exceeded its strict one-second result budget (1,192 and 2,314 ms). Browser feedback for two sort changes appeared in 23–26 ms. Follow-up measurement found Publication date, Series, Recently opened and Format sorting still took roughly 12–21 seconds on this library. Alpha.43 targets these query plans. This checkpoint does not establish a universal subsecond result time.

Human acceptance and the signed NC33–35 release matrix remain separate 0.3 App Store gates.
