import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'
import { MAX_RUNTIME_BYTES, MAX_RUNTIME_CHUNKS } from './runtime-budget.mjs'

const buildDir = 'build/vue'
const jsDir = 'js'
const cssDir = 'css'
const packageVersion = JSON.parse(readFileSync('package.json', 'utf8')).version
const versionedJsAssetName = `library-main-${packageVersion.replace(/[^a-zA-Z0-9]+/g, '-')}.mjs`
const versionedCssAssetName = `library-vue-${packageVersion.replace(/[^a-zA-Z0-9]+/g, '-')}.css`
rmSync(buildDir, { recursive: true, force: true })

const vite = spawnSync('vite', ['--mode', 'production', 'build'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
})

if (vite.status !== 0) {
  process.exit(vite.status ?? 1)
}

// Third-party preserved comments can contain space-before-tab indentation that
// makes git's release-asset hygiene check fail. Normalizing comment indentation
// does not change executable tokens and keeps generated diffs deterministic.
const builtEntry = join(buildDir, 'library-main.mjs')
writeFileSync(builtEntry, readFileSync(builtEntry, 'utf8').replace(/^ +\t/gm, '\t'))

mkdirSync(jsDir, { recursive: true })
mkdirSync(cssDir, { recursive: true })

for (const file of readdirSync(jsDir)) {
  if (/^library-.*\.chunk\.mjs(\.map)?$/.test(file) || file.endsWith('.map')) {
    rmSync(join(jsDir, file), { force: true })
  }
}

const assets = readdirSync(buildDir)
for (const file of assets) {
  if (file === 'library-main.mjs') {
    cpSync(join(buildDir, file), join(jsDir, file))
  } else if (file === 'library-vue.css') {
    cpSync(join(buildDir, file), join(cssDir, file))
  } else if (/^library-.*\.chunk\.mjs(\.map)?$/.test(file)) {
    cpSync(join(buildDir, file), join(jsDir, file))
  }
}

copyFileSync('src/detail-star.js', join(jsDir, 'library-detail.js'))

const cssAsset = join(cssDir, 'library-vue.css')
if (!existsSync(cssAsset)) {
  writeFileSync(cssAsset, '/* No Vue component CSS emitted for this build. */\n')
}
copyFileSync(join(jsDir, 'library-main.mjs'), join(jsDir, versionedJsAssetName))
copyFileSync(cssAsset, join(cssDir, versionedCssAssetName))

const required = [join(jsDir, 'library-main.mjs'), join(jsDir, 'library-detail.js'), join(jsDir, versionedJsAssetName), cssAsset, join(cssDir, versionedCssAssetName)]
for (const file of required) {
  if (!existsSync(file)) {
    console.error(`Missing expected build asset: ${file}`)
    process.exit(1)
  }
}

const runtimeChunks = readdirSync(jsDir).filter((file) => /^library-.*\.chunk\.mjs$/.test(file)).sort()
const runtimeFiles = [versionedJsAssetName, ...runtimeChunks]
const runtimeBytes = runtimeFiles.reduce((total, file) => total + readFileSync(join(jsDir, file)).byteLength, 0)
if (runtimeChunks.length > MAX_RUNTIME_CHUNKS || runtimeBytes > MAX_RUNTIME_BYTES) {
  console.error(`Bundle budget exceeded: chunks=${runtimeChunks.length}/${MAX_RUNTIME_CHUNKS} bytes=${runtimeBytes}/${MAX_RUNTIME_BYTES}`)
  process.exit(1)
}
const closure = spawnSync(process.execPath, ['scripts/validate-module-closure.mjs', '--directory', jsDir, '--entry', versionedJsAssetName, '--reject-orphans'], { stdio: 'inherit' })
if (closure.status !== 0) process.exit(closure.status ?? 1)

console.log('copied_nextcloud_vue_assets=true')
console.log(`runtime_chunk_count=${runtimeChunks.length}`)
console.log(`runtime_bundle_bytes=${runtimeBytes}`)
