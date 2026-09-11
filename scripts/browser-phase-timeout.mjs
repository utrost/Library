export function runWithPhaseTimeout(action, {
  timeoutMs,
  phase,
  setTimer = setTimeout,
  clearTimer = clearTimeout,
} = {}) {
  if (!Number.isSafeInteger(timeoutMs) || timeoutMs < 1 || typeof phase !== 'string' || !phase) {
    throw new Error('invalid_legacy_gate_phase_timeout')
  }
  let timer
  const timeout = new Promise((resolve, reject) => {
    timer = setTimer(() => {
      const error = new Error(`legacy_gate_phase_timeout:${phase}`)
      error.name = 'legacy_gate_phase_timeout'
      error.phase = phase
      reject(error)
    }, timeoutMs)
  })
  return Promise.race([Promise.resolve().then(action), timeout]).finally(() => clearTimer(timer))
}
