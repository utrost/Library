export class DetailCandidateUnavailableError extends Error {
  constructor(attempts) {
    super('no_accessible_real_detail_candidate')
    this.name = 'DetailCandidateUnavailableError'
    this.code = 'no_accessible_real_detail_candidate'
    this.attempts = attempts
  }
}

export async function selectAuthenticatedDetailCandidate(candidates, { origin, preflight, navigate }) {
  const base = new URL(origin)
  const unique = [...new Set(Array.isArray(candidates) ? candidates : [])]
  const attempts = []
  for (const candidate of unique) {
    if (typeof candidate !== 'string' || !candidate.startsWith('/') || candidate.startsWith('//')
      || candidate.includes('%') || candidate.includes('?') || candidate.includes('#')) continue
    const match = /^\/apps\/library\/items\/([1-9]\d*)$/.exec(candidate)
    if (!match) continue
    const id = Number(match[1])
    if (!Number.isSafeInteger(id) || String(id) !== match[1] || [910001, 910002, 910003].includes(id)) continue
    const url = new URL(candidate, base)
    if (url.origin !== base.origin || url.pathname !== candidate) continue
    const proof = await preflight(url.href)
    attempts.push({ path: url.pathname, status: Number(proof?.status || 0), browserContext: proof?.browserContext === true })
    if (proof?.browserContext !== true || Number(proof.status) !== 200) continue
    const page = await navigate(url.href)
    if (Number(page?.status) === 200 && page?.detailPage === true) {
      return { url: url.href, status: 200, attempts }
    }
  }
  throw new DetailCandidateUnavailableError(attempts)
}
