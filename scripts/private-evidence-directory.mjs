import { lstatSync, mkdirSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

export function createEvidenceDirectory(prefix, parentPath = process.env.EVIDENCE_DIR) {
  if (!/^[a-z0-9-]+$/i.test(prefix)) throw new Error('Invalid evidence directory prefix')
  const parent = parentPath ? resolve(parentPath) : tmpdir()
  if (parentPath) {
    mkdirSync(parent, { recursive: true, mode: 0o700 })
    if (lstatSync(parent).isSymbolicLink()) throw new Error('Evidence parent must be a real directory')
  }
  const directory = mkdtempSync(join(parent, `${prefix}-`))
  console.log(`evidence_dir=${directory}`)
  return directory
}
