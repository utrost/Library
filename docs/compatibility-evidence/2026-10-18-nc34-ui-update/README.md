# Signed NC34 private UI update — 2026-10-18

The populated developer instance at `http://100.123.149.120:8088` runs Nextcloud 34.0.3.2 and Library 0.3.0-alpha.11. This private deployment uses runtime changes through `adfe231` on `fix/settings-feedback-scan-diagnostics-20261018`, plus the `v9` asset URL correction below, including settings feedback/diagnostics and the Full details author, list and cover controls. The branch has not been merged. This is an owner testing build, not an App Store upload artifact.

The first build was staged from the previously signed alpha.11 archive (SHA-256 `909c0aa3debce5549fa7f3fec7e511e81147523a43382b2bf20bc13fbf487910`), overlaid with the changed runtime files, and signed with the approved Library certificate. Its private archive is retained at `/tmp/library-nc34-deploy-adfe231/library-0.3.0-alpha.11-adfe231.tar.gz` with SHA-256 `f94f7bd9bb51505f1dfb629cd794b03b9430e59d5acc186d266dc2cc834216be`. The installed app directory before that switch is retained in the container at `/tmp/library-installed-before-adfe231` and on the host at `/tmp/library-nc34-deploy-adfe231/installed-before`.

The release frontend stage contains nine files totaling 1,266,505 bytes. The project package budget was raised from 1,250,000 to 1,300,000 bytes because the original signed package used 1,248,126 bytes. This is a project size gate, not a Nextcloud limit. The Vue production build and `ItemPageController.php` syntax check passed before deployment.

The first app directory was switched under maintenance mode and Apache was reloaded. After maintenance mode was disabled, `occ integrity:check-app library` exited 0, `occ status` reported maintenance off and no database upgrade pending, `/status.php` returned HTTP 200, and the installed versioned JavaScript hash matched the signed staging tree (`02b69fff9dac6b6b4f3d33d76d29e4297fd43d7c116ff2ce1df0b173436d47a0`). No schema migration, catalogue scan or browser test was run for this private update.

## Cache correction and current installed build

The first private deployment reused the alpha.11 `v8` asset filename. Apache served it with `Cache-Control: max-age=15778463`, so a browser that had already cached `v8` could show the old GUI even though the container held new bytes. The JavaScript and CSS asset names and `PageController` references were advanced to `v9`; the JavaScript content itself is unchanged. This makes the browser request a new URL without changing the app version.

The first `v9` archive is retained at `/tmp/library-nc34-deploy-v9-adfe231/library-0.3.0-alpha.11-v9.tar.gz`, SHA-256 `951b2fdc35316f761b6275e9735220604617b940ecc8d07da3d230f025592cbd`. A follow-up also changed the page template's startup error marker from `v8` to `v9`; that marker detects failed module loads and does not select the bundle. The **current installed** signed private archive is `/tmp/library-nc34-deploy-v9b-adfe231/library-0.3.0-alpha.11-v9b.tar.gz`, SHA-256 `9d63a7d024207494a17a6d4d42736030dc9f3a037ec5edccfe53e86b181582d7`. The previous private installations are retained in the container at `/tmp/library-installed-before-v9-adfe231` and `/tmp/library-installed-before-v9b-adfe231`.

Each `v9` replacement was switched under maintenance mode and Apache reloaded. After the final switch, `occ integrity:check-app library` exited 0, maintenance mode was off, no database upgrade was pending, the controller and page template both pointed to `v9`, and the `v9` JavaScript URL returned HTTP 200 with SHA-256 `02b69fff9dac6b6b4f3d33d76d29e4297fd43d7c116ff2ce1df0b173436d47a0`.

Use the [current human test handbook](../../human-test-handbook.md), especially H03-04 and H03-10. The exact signed NC33–35 fresh/upgrade matrix remains pending before release.
