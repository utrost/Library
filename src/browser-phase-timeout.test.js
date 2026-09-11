import { describe, expect, it, vi } from 'vitest'
import { runWithPhaseTimeout } from '../scripts/browser-phase-timeout.mjs'

describe('legacy browser gate phase timeout', () => {
  it.each(['inspect-core', 'inspect-forms', 'inspect-geometry'])('rejects a pending %s subprobe with the named fail-closed error', async (phase) => {
    const callbacks = []
    const setTimer = vi.fn((callback) => { callbacks.push(callback); return 17 })
    const clearTimer = vi.fn()
    const result = runWithPhaseTimeout(() => new Promise(() => {}), {
      timeoutMs: 30000,
      phase,
      setTimer,
      clearTimer,
    })

    callbacks[0]()
    await expect(result).rejects.toMatchObject({ name: 'legacy_gate_phase_timeout', phase })
    expect(setTimer).toHaveBeenCalledWith(expect.any(Function), 30000)
  })

  it('clears the timeout when the phase settles', async () => {
    const clearTimer = vi.fn()
    await expect(runWithPhaseTimeout(() => Promise.resolve('ok'), {
      timeoutMs: 30000,
      phase: 'keyboard',
      setTimer: () => 23,
      clearTimer,
    })).resolves.toBe('ok')
    expect(clearTimer).toHaveBeenCalledWith(23)
  })
})
