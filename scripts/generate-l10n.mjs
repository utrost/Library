import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const root = path.resolve(import.meta.dirname, '..')
const checkOnly = process.argv.includes('--check')

for (const locale of ['en', 'de', 'ar']) {
  const jsonPath = path.join(root, 'l10n', `${locale}.json`)
  const jsPath = path.join(root, 'l10n', `${locale}.js`)
  const catalogue = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
  const generated = `OC.L10N.register(\n    "library",\n    ${JSON.stringify(catalogue.translations, null, 4).replaceAll('\n', '\n    ')},\n    ${JSON.stringify(catalogue.pluralForm)}\n);\n`
  if (checkOnly && (!fs.existsSync(jsPath) || fs.readFileSync(jsPath, 'utf8') !== generated)) {
    throw new Error(`generated_catalogue_mismatch:${locale}`)
  }
  if (!checkOnly) fs.writeFileSync(jsPath, generated)
}

process.stdout.write(`${checkOnly ? 'generated_catalogues_current' : 'generated_catalogues_written'}=true locales=en,de,ar\n`)
