import { describe, expect, it } from 'vitest'
import { unwrapCdpEvaluateResponse } from '../scripts/cdp-evaluate-response.mjs'

describe('CDP Runtime.evaluate response unwrap', () => {
  it('returns an explicit by-value result', () => {
    expect(unwrapCdpEvaluateResponse({ result: { type: 'object', value: { ok: true } } }, { phase: 'keyboard-setup' })).toEqual({ ok: true })
  })

  it.each([
    [{ exceptionDetails: { text: 'Uncaught', exception: { className: 'ReferenceError', description: 'ReferenceError: missingHelper is not defined\n at secret page' } } }, 'ReferenceError'],
    [{ error: { code: -32000, message: 'Cannot evaluate' } }, 'CdpError'],
    [{ result: { type: 'undefined' } }, 'MissingResult'],
    [{}, 'MissingResult'],
  ])('rejects exception, protocol error, and missing-result responses', (response, errorClass) => {
    expect(() => unwrapCdpEvaluateResponse(response, { phase: 'keyboard-setup' })).toThrow(errorClass)
  })

  it('keeps diagnostics bounded and excludes sensitive response payloads', () => {
    const response = {
      expression: 'SECRET_EXPRESSION', page: 'SECRET_PAGE', requesttoken: 'SECRET_TOKEN', text: 'SECRET_TEXT', url: 'https://secret.invalid/private',
      exceptionDetails: { text: 'SECRET_TEXT', exception: { className: 'TypeError', description: `TypeError: failed at https://secret.invalid/private requesttoken=SECRET_TOKEN\n${'x'.repeat(500)}` } },
    }
    let message = ''
    try { unwrapCdpEvaluateResponse(response, { method: 'Runtime.evaluate', phase: 'keyboard-setup' }) } catch (error) { message = error.message }
    expect(message).toContain('method=Runtime.evaluate phase=keyboard-setup class=TypeError message=TypeError: failed at [redacted-url] requesttoken=[redacted]')
    expect(message).not.toMatch(/SECRET_EXPRESSION|SECRET_PAGE|SECRET_TOKEN|SECRET_TEXT|secret\.invalid|x{20}/)
    expect(message.length).toBeLessThan(400)
  })
})
