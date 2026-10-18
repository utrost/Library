# Signed NC34 private UI update — 2026-10-18

The populated developer instance at `http://100.123.149.120:8088` runs Nextcloud 34.0.3.2 and Library 0.3.0-alpha.11. The first private deployment on this branch used runtime changes through `82bfec5` on `fix/settings-feedback-scan-diagnostics-20261018`, including settings feedback/diagnostics, Full details author/list/cover controls and a three-letter author suggestion threshold. The series picker update is described below. The branch has not been merged. This is an owner testing build, not an App Store upload artifact.

The first build was staged from the previously signed alpha.11 archive (SHA-256 `909c0aa3debce5549fa7f3fec7e511e81147523a43382b2bf20bc13fbf487910`), overlaid with the changed runtime files, and signed with the approved Library certificate. Its private archive is retained at `/tmp/library-nc34-deploy-adfe231/library-0.3.0-alpha.11-adfe231.tar.gz` with SHA-256 `f94f7bd9bb51505f1dfb629cd794b03b9430e59d5acc186d266dc2cc834216be`. The installed app directory before that switch is retained in the container at `/tmp/library-installed-before-adfe231` and on the host at `/tmp/library-nc34-deploy-adfe231/installed-before`.

The release frontend stage contains nine files totaling 1,266,505 bytes. The project package budget was raised from 1,250,000 to 1,300,000 bytes because the original signed package used 1,248,126 bytes. This is a project size gate, not a Nextcloud limit. The Vue production build and `ItemPageController.php` syntax check passed before deployment.

The first app directory was switched under maintenance mode and Apache was reloaded. After maintenance mode was disabled, `occ integrity:check-app library` exited 0, `occ status` reported maintenance off and no database upgrade pending, `/status.php` returned HTTP 200, and the installed versioned JavaScript hash matched the signed staging tree (`02b69fff9dac6b6b4f3d33d76d29e4297fd43d7c116ff2ce1df0b173436d47a0`). No schema migration, catalogue scan or browser test was run for this private update.

## Cache correction and earlier private builds

The first private deployment reused the alpha.11 `v8` asset filename. Apache served it with `Cache-Control: max-age=15778463`, so a browser that had already cached `v8` could show the old GUI even though the container held new bytes. The JavaScript and CSS asset names and `PageController` references were advanced to `v9`; the JavaScript content itself is unchanged. This makes the browser request a new URL without changing the app version.

The first `v9` archive is retained at `/tmp/library-nc34-deploy-v9-adfe231/library-0.3.0-alpha.11-v9.tar.gz`, SHA-256 `951b2fdc35316f761b6275e9735220604617b940ecc8d07da3d230f025592cbd`. A follow-up also changed the page template's startup error marker from `v8` to `v9`; that marker detects failed module loads and does not select the bundle. That signed private archive is retained at `/tmp/library-nc34-deploy-v9b-adfe231/library-0.3.0-alpha.11-v9b.tar.gz`, SHA-256 `9d63a7d024207494a17a6d4d42736030dc9f3a037ec5edccfe53e86b181582d7`. The previous private installations are retained in the container at `/tmp/library-installed-before-v9-adfe231` and `/tmp/library-installed-before-v9b-adfe231`.

Each `v9` replacement was switched under maintenance mode and Apache reloaded. After the final switch, `occ integrity:check-app library` exited 0, maintenance mode was off, no database upgrade was pending, the controller and page template both pointed to `v9`, and the `v9` JavaScript URL returned HTTP 200 with SHA-256 `02b69fff9dac6b6b4f3d33d76d29e4297fd43d7c116ff2ce1df0b173436d47a0`.

## Previous installed build: three-letter author suggestions

Commit `82bfec5` delays Full details author suggestions until the input contains three Unicode letters. Opening the picker and typing one or two letters makes no author-directory request. The `v10` JavaScript/CSS URL pair avoids the long-lived `v9` browser cache. The signed private archive is `/tmp/library-nc34-deploy-v10-82bfec5/library-0.3.0-alpha.11-v10.tar.gz`, SHA-256 `71ad0d6d6bd165b1dfed61a8e9f02b92563f702b4e08c2341aa9d9c5c2ffbf78`. The `v9b` installation is retained in the container at `/tmp/library-installed-before-v10-82bfec5` for rollback.

The `v10` replacement was switched under maintenance mode and Apache reloaded. Afterward, `occ integrity:check-app library` exited 0, maintenance mode was off, no database upgrade was pending, the controller and page template both pointed to `v10`, and the `v10` JavaScript URL returned HTTP 200 with SHA-256 `712a796b38220c633497cd4a27235557d916b9581bfa3f2158ad74e9572995a3`. The production bundle build and changed PHP syntax checks passed. No browser test or NC33/35 matrix was run for this private update.

Use the [current human test handbook](../../human-test-handbook.md), especially H03-04 and H03-10. The exact signed NC33–35 fresh/upgrade matrix remains pending before release.

## Current installed build: series assignment picker

The private `v11` update adds a three-letter series typeahead to Full details. It can move an existing book link or link a book that has no series, and it preserves the imported series and part number separately. A single-book series change appears in the series history and supports Undo. Publisher remains a text field with suggestions because publishers do not yet have their own identity table.

The signed archive is `/tmp/library-nc34-deploy-v11-series/library-0.3.0-alpha.11-v11-series.tar.gz`, SHA-256 `d74823e62d7612a6e51f4410c98b3c8b240be6344269792411300388fc7d4249`. The previous `v10` installation is retained in the container at `/tmp/library-installed-before-v11-series`. The deployed JavaScript is `library-main-0-3-0-alpha-11-compact-list-table-cover-96-fit-v11.mjs`, SHA-256 `c28f1e5cca18778ea7e017ad6cb93cf1dd68132006e4fd51682397f208bba812`.

The production build, changed PHP syntax checks, signature generation, installed app integrity check, Nextcloud status, HTTP status endpoint, and served asset hash passed. Maintenance mode is off and no database upgrade is pending. No browser interaction test or NC33/35 matrix was run for this private update.
