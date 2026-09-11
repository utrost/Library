export function releaseFrontendFiles(version) {
  const assetVersion = version.replace(/[^a-zA-Z0-9]+/g, '-')
  return [
    'css/style.css',
    `css/library-vue-${assetVersion}.css`,
    'js/library-detail.js',
    `js/library-main-${assetVersion}.mjs`,
    'js/library-shell.js',
    'js/scan-progress.js',
  ]
}
