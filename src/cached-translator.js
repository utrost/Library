// Page-local, bounded reuse of static labels after Nextcloud has translated/sanitized them.
// Substitutions/options always use the original translator; locale changes invalidate reuse.
export function createCachedTranslator(translate, context = () => '', limit = 256) {
  const cache = new Map()
  let previousContext
  return (...args) => {
    if (args.length !== 2 || args.some(value => typeof value !== 'string')) return translate(...args)
    const currentContext = context()
    if (currentContext !== previousContext) { cache.clear(); previousContext = currentContext }
    const key = JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)
    const result = translate(...args)
    if (cache.size >= limit) cache.delete(cache.keys().next().value)
    cache.set(key, result)
    return result
  }
}
