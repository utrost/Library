/** Fail before authentication or fixture creation when a retired UI replay is run. */
export function historicalSmoke(name) {
  if (process.env.LIBRARY_RUN_HISTORICAL_SMOKE === '1') return
  throw new Error(`${name} targets a historical Library interface and is not a current acceptance gate. See docs/playwright-journeys.md#older-standalone-diagnostics for replacements and remaining gaps. Set LIBRARY_RUN_HISTORICAL_SMOKE=1 only when deliberately reproducing that older interface.`)
}
