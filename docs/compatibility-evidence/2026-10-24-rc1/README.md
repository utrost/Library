# Library 0.3.0-rc.1 certification

Status: source preparation, local checks and disposable screenshot capture complete. Exact signed-package certification, human acceptance, public GitHub prerelease and Nextcloud App Store submission remain pending until their checks pass.

The prior signed alpha.43 remains installed on developer NC34. This record must identify the final signed RC archive by checksum before it is deployed or published.

## Disposable screenshot fixture

- Forty Project Gutenberg English EPUBs from the filenames documented in [Gutenberg example books](../../gutenberg-example-books.md).
- Deterministic fixture archive SHA-256: `1d23e69505f4928689e22be13a452ec45c898de40d3d91ab263097e715e11e1a`.
- Isolated Nextcloud 34.0.4 account: 40 indexed, zero metadata errors; author and series backfills completed before capture.
- Five 1440 × 1000 App Store images refreshed and visually inspected. [Capture provenance](../../images/first-library/README.md) records the source and reproduction steps.
- An initial capture failed because a concurrent SQLite write locked the disposable database. A repeat after the lock cleared completed successfully; this is not evidence of a persistent app error.

## Local source gate

`uv run --with pytest bash scripts/check.sh` passed after the schema correction: 1,053 Python checks, PHP runtime checks, 598 Vitest checks in 50 files, production asset build and module closure, whitespace validation and Markdown links. The unsigned rehearsal package also passed module and package audits; it is not the signed release candidate.

## PostgreSQL schema rehearsal

The first disposable NC34/PostgreSQL fresh install indexed all 40 Gutenberg books but physical-schema parity found the alpha.40 `workflow_sort_rank` column and `library_items_usr_wfrank_title` index missing from `appinfo/database.xml`. The existing migration had created both physically. The declaration and a local regression check were added; no new migration was needed. Repeating the fresh install passed with 40 indexed books and no schema errors. A populated upgrade from signed 0.2.0-beta.3 also passed, retaining all 40 books and a user-corrected description through upgrade and rescan. These runs used a source-equivalent unsigned rehearsal archive and must be repeated with the final signed archive.

## Release gates

- [x] Full local source checks.
- [ ] Hosted CI on the final merged commit.
- [ ] Human H03-01–26 acceptance and manual accessibility review.
- [ ] Final signed archive, detached App Store signature, checksum, SBOM and provenance.
- [ ] Exact signed archive: NC33/34/35 fresh and populated 0.2.0-beta.3 upgrade matrices, interruption recovery and PostgreSQL validation.
- [ ] Developer NC34 installed smoke, integrity, catalogue count and performance median.
- [ ] GitHub tag/prerelease, public asset verification, App Store prerelease listing and installation.
