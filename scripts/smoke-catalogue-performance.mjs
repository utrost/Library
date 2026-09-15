import { execFileSync } from 'node:child_process'
import { performance } from 'node:perf_hooks'

const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const tokenName = `library-catalogue-performance-${Date.now()}`
const fastBudgetSeconds = Number(process.env.LIBRARY_CATALOGUE_FAST_BUDGET_SECONDS || '1.0')
const measureHydration = process.env.LIBRARY_CATALOGUE_MEASURE_HYDRATE === '1'

if (!Number.isFinite(fastBudgetSeconds) || fastBudgetSeconds <= 0) {
  throw new Error('LIBRARY_CATALOGUE_FAST_BUDGET_SECONDS must be a positive number')
}

function occ(args) {
  return execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

function parseToken(output) {
  for (const pattern of [/app password is:\s*(\S+)/i, /app password:\s*\n\s*(\S+)/i, /password is:\s*(\S+)/i, /:\s*(\S+)\s*$/im]) {
    const match = output.match(pattern)
    if (match) return match[1]
  }
  return output.split(/\r?\n/).map((line) => line.trim()).filter(Boolean).at(-1)?.split(/\s+/).at(-1)
}

function tokenIds(output) {
  return output.split(/\r?\n/)
    .filter((line) => line.includes(tokenName))
    .map((line) => line.match(/\|\s*(\d+)\s*\|/)?.[1])
    .filter(Boolean)
}

function metric(name, value) {
  console.log(`${name}=${value}`)
}

async function timeCatalogue(label, path, token, enforceBudget) {
  const url = new URL(path, upstream)
  if (enforceBudget && url.searchParams.get('hydrate') === '1') {
    throw new Error(`${label} fast path must not use hydrate=1`)
  }
  const started = performance.now()
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`,
    },
  })
  const elapsedSeconds = (performance.now() - started) / 1000
  const payload = await response.json().catch(() => null)
  metric(`${label}_http_status`, response.status)
  metric(`${label}_elapsed_seconds`, elapsedSeconds.toFixed(3))
  metric(`${label}_facets_deferred`, payload?.facetsDeferred === true)
  if (response.status !== 200 || payload === null) throw new Error(`${label} returned an invalid catalogue response`)
  if (enforceBudget && payload.facetsDeferred !== true) throw new Error(`${label} recomputed deferred catalogue data`)
  if (enforceBudget && elapsedSeconds > fastBudgetSeconds) {
    throw new Error(`${label} exceeded ${fastBudgetSeconds.toFixed(3)}s budget`)
  }
}

let token = ''
let smokePassed = false
try {
  metric('catalogue_fast_budget_seconds', fastBudgetSeconds.toFixed(3))
  token = parseToken(occ(['user:add-app-password', '--no-interaction', '--name', tokenName, user])) || ''
  if (!token) throw new Error('temporary app password was not created')

  await timeCatalogue('catalogue_unfiltered_fast', '/apps/library/catalogue?limit=25', token, true)
  await timeCatalogue('catalogue_subject_photolab_fast', '/apps/library/catalogue?subject=photolab&limit=25', token, true)
  if (measureHydration) {
    await timeCatalogue('catalogue_hydrate_comparison', '/apps/library/catalogue?hydrate=1&limit=25', token, false)
  }
  smokePassed = true
} catch (error) {
  metric('catalogue_performance_error', JSON.stringify(error instanceof Error ? error.message : String(error)))
  process.exitCode = 1
} finally {
  let remaining = -1
  try {
    for (const id of tokenIds(occ(['user:auth-tokens:list', user]))) {
      try { occ(['user:auth-tokens:delete', user, id]) } catch {}
    }
    remaining = tokenIds(occ(['user:auth-tokens:list', user])).length
  } catch {
    process.exitCode = 1
  }
  metric('catalogue_temp_token_remaining', remaining)
  if (remaining !== 0) process.exitCode = 1
  metric('catalogue_performance_smoke_ok', smokePassed && remaining === 0)
}
