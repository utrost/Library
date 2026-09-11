import { execFileSync } from 'node:child_process'
import { createRequire } from 'node:module'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { posix, relative, resolve, sep } from 'node:path'
import { MAX_ARCHIVE_READ_BUFFER } from './runtime-budget.mjs'

function fail(message) {
  console.error(message)
  process.exit(1)
}

const require = createRequire(import.meta.url)
try {
  require.resolve('@babel/parser')
} catch {
  fail('Release module validation requires the development dependency @babel/parser. Run `npm ci` in the repository, then retry.')
}
const { parse } = await import('@babel/parser')

function options(argv) {
  const parsed = { rejectOrphans: false }
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--reject-orphans') parsed.rejectOrphans = true
    else if (['--directory', '--archive', '--entry'].includes(arg)) parsed[arg.slice(2)] = argv[++index]
    else fail(`Unknown argument: ${arg}`)
  }
  if ((!parsed.directory && !parsed.archive) || (parsed.directory && parsed.archive) || !parsed.entry) {
    fail('Usage: validate-module-closure.mjs (--directory DIR | --archive TAR.GZ) --entry ENTRY [--reject-orphans]')
  }
  return parsed
}

const args = options(process.argv.slice(2))
const archiveNames = args.archive
  ? new Set(execFileSync('tar', ['-tzf', args.archive], { encoding: 'utf8', maxBuffer: MAX_ARCHIVE_READ_BUFFER }).trim().split('\n').filter(Boolean))
  : null

function normalizeRelative(path) {
  const normalized = posix.normalize(path.replaceAll('\\', '/'))
  if (normalized === '..' || normalized.startsWith('../') || posix.isAbsolute(normalized)) fail(`Module import escapes root: ${path}`)
  return normalized
}

function readModule(name) {
  if (args.archive) {
    if (!archiveNames.has(name)) fail(`Missing module dependency in archive: ${name}`)
    return execFileSync('tar', ['-xOzf', args.archive, name], { encoding: 'utf8', maxBuffer: MAX_ARCHIVE_READ_BUFFER })
  }
  const root = resolve(args.directory)
  const path = resolve(root, name)
  if (path !== root && !path.startsWith(root + sep)) fail(`Module path escapes directory: ${name}`)
  if (!existsSync(path) || !statSync(path).isFile()) fail(`Missing module dependency: ${name}`)
  return readFileSync(path, 'utf8')
}

function literalSpecifier(node, moduleName) {
  if (node?.type === 'StringLiteral') return node.value
  if (node?.type === 'TemplateLiteral' && node.expressions.length === 0) return node.quasis[0].value.cooked
  fail(`Cannot validate non-literal dynamic import in module: ${moduleName}`)
}

function imports(source, moduleName) {
  const found = new Set()
  let ast
  try {
    ast = parse(source, { sourceType: 'module' })
  } catch (error) {
    fail(`Could not parse module ${moduleName}: ${error.message}`)
  }

  const visit = (node) => {
    if (!node || typeof node !== 'object') return
    if (['ImportDeclaration', 'ExportNamedDeclaration', 'ExportAllDeclaration'].includes(node.type) && node.source) {
      const specifier = node.source.value
      if (!specifier.startsWith('.')) fail(`Unsupported browser module specifier in ${moduleName}: ${specifier}`)
      found.add(specifier)
    } else if (node.type === 'CallExpression' && node.callee?.type === 'Import') {
      const specifier = literalSpecifier(node.arguments[0], moduleName)
      if (!specifier?.startsWith('.')) fail(`Unsupported browser module specifier in ${moduleName}: ${specifier}`)
      found.add(specifier)
    } else if (node.type === 'ImportExpression') {
      const specifier = literalSpecifier(node.source, moduleName)
      if (!specifier?.startsWith('.')) fail(`Unsupported browser module specifier in ${moduleName}: ${specifier}`)
      found.add(specifier)
    }
    for (const [key, value] of Object.entries(node)) {
      if (key !== 'loc' && key !== 'start' && key !== 'end') {
        if (Array.isArray(value)) value.forEach(visit)
        else visit(value)
      }
    }
  }
  visit(ast)
  return found
}

const entry = normalizeRelative(args.entry)
const pending = [entry]
const closure = new Set()
while (pending.length > 0) {
  const current = pending.pop()
  if (closure.has(current)) continue
  const source = readModule(current)
  closure.add(current)
  for (const specifier of imports(source, current)) {
    const target = normalizeRelative(posix.join(posix.dirname(current), specifier))
    if (!closure.has(target)) pending.push(target)
  }
}

if (args.rejectOrphans) {
  let candidates
  if (args.archive) {
    const modulePrefix = `${posix.dirname(entry)}/`
    candidates = [...archiveNames].filter((name) => name.startsWith(modulePrefix) && name.endsWith('.chunk.mjs'))
  } else {
    const root = resolve(args.directory)
    const moduleRoot = resolve(root, posix.dirname(entry))
    const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((item) => {
      const path = resolve(directory, item.name)
      if (item.isDirectory()) return walk(path)
      return item.isFile() && item.name.endsWith('.chunk.mjs')
        ? [relative(root, path).split(sep).join('/')]
        : []
    })
    candidates = walk(moduleRoot)
  }
  const orphans = candidates.filter((name) => !closure.has(name)).sort()
  if (orphans.length > 0) fail(`Orphan runtime chunks: ${orphans.join(', ')}`)
}

console.log('module_closure_ok=true')
console.log(`module_closure_count=${closure.size}`)
console.log(`module_closure_files=${[...closure].sort().join(',')}`)
