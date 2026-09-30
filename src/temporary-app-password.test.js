// @vitest-environment node
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { execFileSync } from 'node:child_process'
import { createTemporaryAppPassword } from '../scripts/temporary-app-password.mjs'

vi.mock('node:child_process', () => ({ execFileSync: vi.fn() }))
beforeEach(() => vi.resetAllMocks())
describe('temporary smoke credential helper', () => {
  it('uses the normal command and returns its output without printing it', () => {
    execFileSync.mockReturnValue('app password:\nfixture-token\n')
    expect(createTemporaryAppPassword('fixture', 'alice', 'smoke')).toContain('fixture-token')
    expect(execFileSync).toHaveBeenCalledTimes(1)
    expect(execFileSync.mock.calls[0][1]).toContain('user:add-app-password')
    expect(execFileSync.mock.calls[0][2].stdio).toEqual(['ignore', 'pipe', 'pipe'])
  })
  it('only falls back for the known missing-option defect', () => {
    execFileSync.mockImplementationOnce(() => { throw Object.assign(new Error('CLI failed'), { stderr: 'The "login-name" option does not exist.' }) }).mockReturnValue('app password:\nfixture-token\n')
    expect(createTemporaryAppPassword('fixture', "alice'; exit;", 'smoke')).toContain('fixture-token')
    const args = execFileSync.mock.calls[1][1]
    expect(args).toContain('-r')
    expect(args.at(-1)).toContain('generateToken')
    expect(args.at(-1)).not.toContain("alice'; exit;")
  })
  it('propagates unrelated command failures without creating another token', () => {
    const error = Object.assign(new Error('unknown account'), { stderr: 'Account does not exist' })
    execFileSync.mockImplementation(() => { throw error })
    expect(() => createTemporaryAppPassword('fixture', 'missing', 'smoke')).toThrow(error)
    expect(execFileSync).toHaveBeenCalledTimes(1)
  })
})
