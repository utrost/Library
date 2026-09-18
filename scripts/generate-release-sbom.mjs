#!/usr/bin/env node
import { createHash } from 'node:crypto'
import { mkdtempSync, readFileSync, rmSync, statSync, writeFileSync, readdirSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, relative, basename } from 'node:path'
import { execFileSync } from 'node:child_process'

const [archivePath, version, outDirArg] = process.argv.slice(2)
if (!archivePath || !version) {
  console.error('usage: generate-release-sbom.mjs <archive.tar.gz> <version> [dist-dir]')
  process.exit(2)
}
const outDir = outDirArg || 'dist'

function sha256File(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex')
}

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    const st = statSync(path)
    if (st.isDirectory()) out.push(...walk(path))
    else if (st.isFile()) out.push(path)
  }
  return out.sort()
}

function safeId(input) {
  return input.replace(/[^A-Za-z0-9.-]/g, '-').replace(/-+/g, '-')
}

const tmp = mkdtempSync(join(tmpdir(), 'library-sbom-'))
try {
  execFileSync('tar', ['-xzf', archivePath, '-C', tmp], { stdio: 'ignore' })
  const files = walk(join(tmp, 'library'))
  const archiveSha = sha256File(archivePath)
  const packageLock = JSON.parse(readFileSync('package-lock.json', 'utf8'))
  const packages = []
  const relationships = []
  const docId = 'SPDXRef-DOCUMENT'
  const appId = 'SPDXRef-Package-library-release'
  packages.push({
    name: 'library-release-archive',
    SPDXID: appId,
    versionInfo: version,
    downloadLocation: 'NOASSERTION',
    filesAnalyzed: true,
    checksums: [{ algorithm: 'SHA256', checksumValue: archiveSha }],
    licenseConcluded: 'NOASSERTION',
    licenseDeclared: 'NOASSERTION',
    copyrightText: 'NOASSERTION',
  })

  for (const path of files) {
    const rel = relative(tmp, path).replaceAll('\\\\', '/')
    const id = `SPDXRef-File-${safeId(rel)}`
    packages.push({
      name: rel,
      SPDXID: id,
      downloadLocation: 'NOASSERTION',
      filesAnalyzed: false,
      checksums: [{ algorithm: 'SHA256', checksumValue: sha256File(path) }],
      licenseConcluded: 'NOASSERTION',
      licenseDeclared: 'NOASSERTION',
      copyrightText: 'NOASSERTION',
      PackageChecksum: sha256File(path),
    })
    relationships.push({ spdxElementId: appId, relationshipType: 'CONTAINS', relatedSpdxElement: id })
  }

  const rootPackage = packageLock.packages?.[''] || {}
  for (const [lockPath, meta] of Object.entries(packageLock.packages || {})) {
    if (!lockPath.startsWith('node_modules/') || !meta.version) continue
    const name = meta.name || lockPath.slice('node_modules/'.length)
    const depId = `SPDXRef-NPM-${safeId(name)}-${safeId(meta.version)}`
    packages.push({
      name: `npm:${name}`,
      SPDXID: depId,
      versionInfo: meta.version,
      downloadLocation: meta.resolved || 'NOASSERTION',
      filesAnalyzed: false,
      checksums: meta.integrity ? [{ algorithm: 'SHA512', checksumValue: meta.integrity }] : [],
      licenseConcluded: meta.license || 'NOASSERTION',
      licenseDeclared: meta.license || 'NOASSERTION',
      copyrightText: 'NOASSERTION',
      supplier: 'NOASSERTION',
      PackageChecksum: meta.integrity || 'NOASSERTION',
    })
    relationships.push({ spdxElementId: appId, relationshipType: 'BUILD_DEPENDENCY_OF', relatedSpdxElement: depId })
  }

  const sbom = {
    spdxVersion: 'SPDX-2.3',
    dataLicense: 'CC0-1.0',
    SPDXID: docId,
    name: `library-${version}-release-sbom`,
    documentNamespace: `https://github.com/utrost/Library/sbom/library-${version}-${archiveSha}`,
    creationInfo: {
      created: new Date(0).toISOString(),
      creators: ['Tool: scripts/generate-release-sbom.mjs'],
    },
    packages,
    relationships,
    documentDescribes: [appId],
  }
  const sbomPath = join(outDir, `library-${version}.spdx.json`)
  writeFileSync(sbomPath, JSON.stringify(sbom, null, 2) + '\n')

  let gitCommit = 'unknown'
  try { gitCommit = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim() } catch {}
  const provenance = {
    _type: 'https://slsa.dev/provenance/v1',
    subject: [{ name: basename(archivePath), digest: { sha256: archiveSha } }],
    predicateType: 'https://slsa.dev/provenance/v1',
    predicate: {
      buildDefinition: {
        buildType: 'https://github.com/utrost/Library/scripts/package-release.sh',
        externalParameters: { version, signed: false },
        resolvedDependencies: [
          { uri: 'git+https://github.com/utrost/Library', digest: { gitCommit } },
          { uri: 'package-lock.json', digest: { sha256: sha256File('package-lock.json') } },
          { uri: sbomPath, digest: { sha256: sha256File(sbomPath) } },
        ],
      },
      runDetails: {
        builder: { id: 'scripts/package-release.sh' },
        metadata: { invocationId: gitCommit, startedOn: new Date(0).toISOString(), finishedOn: new Date(0).toISOString() },
      },
    },
  }
  writeFileSync(join(outDir, `library-${version}.provenance.json`), JSON.stringify(provenance, null, 2) + '\n')
  console.log(`release_sbom_path=${sbomPath}`)
  console.log(`release_provenance_path=${join(outDir, `library-${version}.provenance.json`)}`)
} finally {
  rmSync(tmp, { recursive: true, force: true })
}
