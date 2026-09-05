import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

const buildDir = 'build/vue'
const jsDir = 'js'
const cssDir = 'css'

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

const required = [join(jsDir, 'library-main.mjs'), join(cssDir, 'library-vue.css')]
for (const file of required) {
  if (!existsSync(file)) {
    console.error(`Missing expected build asset: ${file}`)
    process.exit(1)
  }
}

console.log('copied_nextcloud_vue_assets=true')
