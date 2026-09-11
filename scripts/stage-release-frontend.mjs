import { existsSync, readdirSync, rmSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { MAX_PACKAGE_FRONTEND_BYTES } from './runtime-budget.mjs'
import { releaseFrontendFiles } from './release-frontend-manifest.mjs'

const [stage, version] = process.argv.slice(2)
if (!stage || !version) throw new Error('Usage: stage-release-frontend.mjs STAGE VERSION')
const allowed = new Set(releaseFrontendFiles(version))
for (const directory of ['js', 'css']) {
  for (const name of readdirSync(join(stage, directory))) {
    const relative = `${directory}/${name}`
    if (!allowed.has(relative)) rmSync(join(stage, relative), { recursive: true, force: true })
  }
}
const missing = [...allowed].filter((name) => !existsSync(join(stage, name)))
if (missing.length) throw new Error(`Missing release frontend assets: ${missing.join(', ')}`)
const bytes = [...allowed].reduce((total, name) => total + statSync(join(stage, name)).size, 0)
if (bytes > MAX_PACKAGE_FRONTEND_BYTES) throw new Error(`Package frontend budget exceeded: ${bytes}/${MAX_PACKAGE_FRONTEND_BYTES}`)
console.log(`package_frontend_bytes=${bytes}`)
console.log(`package_frontend_files=${allowed.size}`)
