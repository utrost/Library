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

`uv run --with pytest bash scripts/check.sh` passed: 1,052 Python checks, PHP runtime checks, 598 Vitest checks in 50 files, production asset build and module closure, whitespace validation and Markdown links. The unsigned rehearsal package also passed module and package audits; it is not the signed release candidate.

## Release gates

- [x] Full local source checks.
- [ ] Hosted CI on the final merged commit.
- [ ] Human H03-01–26 acceptance and manual accessibility review.
- [ ] Final signed archive, detached App Store signature, checksum, SBOM and provenance.
- [ ] Exact signed archive: NC33/34/35 fresh and populated 0.2.0-beta.3 upgrade matrices, interruption recovery and PostgreSQL validation.
- [ ] Developer NC34 installed smoke, integrity, catalogue count and performance median.
- [ ] GitHub tag/prerelease, public asset verification, App Store prerelease listing and installation.
