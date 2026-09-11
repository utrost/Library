const diagnosticLimit = 240

function safeDiagnosticPart(value, fallback) {
  const firstLine = String(value || fallback).split(/\r?\n/, 1)[0]
  return firstLine
    .replace(/(?:https?|file):\/\/\S+/gi, '[redacted-url]')
    .replace(/(requesttoken|token|password|authorization)\s*[:=]\s*\S+/gi, '$1=[redacted]')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .slice(0, diagnosticLimit)
}

export function unwrapCdpEvaluateResponse(response, { method = 'Runtime.evaluate', phase = 'evaluate' } = {}) {
  const prefix = `cdp_evaluate_failed method=${safeDiagnosticPart(method, 'Runtime.evaluate')} phase=${safeDiagnosticPart(phase, 'evaluate')}`
  if (response?.error) {
    const errorClass = response.error.data ? 'CdpProtocolError' : 'CdpError'
    throw new Error(`${prefix} class=${errorClass} message=${safeDiagnosticPart(response.error.message, 'protocol error')}`)
  }
  if (response?.exceptionDetails) {
    const exception = response.exceptionDetails.exception
    const errorClass = safeDiagnosticPart(exception?.className || exception?.subtype || 'RuntimeException', 'RuntimeException')
    const description = exception?.description || exception?.value || response.exceptionDetails.text || 'evaluation exception'
    throw new Error(`${prefix} class=${errorClass} message=${safeDiagnosticPart(description, 'evaluation exception')}`)
  }
  const remoteObject = response?.result
  if (!remoteObject || !Object.prototype.hasOwnProperty.call(remoteObject, 'value')) {
    throw new Error(`${prefix} class=MissingResult message=evaluation returned no by-value result`)
  }
  return remoteObject.value
}
