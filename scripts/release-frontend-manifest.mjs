import { readFileSync } from 'node:fs'

const controller = readFileSync(new URL('../lib/Controller/PageController.php', import.meta.url), 'utf8')

function wiredAsset(constant) {
  const match = controller.match(new RegExp(`${constant}\\s*=\\s*'([^']+)'`))
  if (!match) throw new Error(`Could not read ${constant} from PageController.php`)
  return match[1]
}

export function releaseFrontendFiles(_version) {
  const scriptAsset = wiredAsset('VUE_SCRIPT_ASSET')
  const styleAsset = wiredAsset('VUE_STYLE_ASSET')
  return [
    'css/style.css',
    `css/${styleAsset}.css`,
    'js/library-detail.js',
    `js/${scriptAsset}.mjs`,
    'js/library-shell.js',
    'js/scan-progress.js',
    'js/settings-operations.js',
    'js/settings-folder-picker-dialog.js',
  ]
}
