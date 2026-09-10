import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

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

mkdirSync(jsDir, { recursive: true })
mkdirSync(cssDir, { recursive: true })

for (const file of readdirSync(jsDir)) {
  if (/^library-.*\.chunk\.mjs(\.map)?$/.test(file)) {
    rmSync(join(jsDir, file), { force: true })
  }
}

const assets = readdirSync(buildDir)
for (const file of assets) {
  if (file === 'library-main.mjs' || file === 'library-main.mjs.map') {
    cpSync(join(buildDir, file), join(jsDir, file))
  } else if (file === 'library-vue.css' || file === 'library-vue.css.map') {
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

console.log('copied_nextcloud_vue_assets=true')
