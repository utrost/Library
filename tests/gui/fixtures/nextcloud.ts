import { expect, type Page } from '@playwright/test'

export function requiredEnvironment(name: string): string {
  const value = process.env[name]?.trim()
  if (!value) throw new Error(`${name} is required; run GUI tests only against an explicit disposable instance`)
  return value
}

export function requiredPositiveIntegerEnvironment(name: string): number {
  const raw = requiredEnvironment(name)
  const value = Number(raw)
  if (!Number.isSafeInteger(value) || value < 1) {
    throw new Error(`${name} must be a positive integer, received ${JSON.stringify(raw)}`)
  }
  return value
}

export async function login(page: Page): Promise<void> {
  const user = requiredEnvironment('PW_USER')
  const password = requiredEnvironment('PW_PASSWORD')

  const response = await page.goto('/login')
  expect(response?.ok(), `login page returned ${response?.status()}`).toBeTruthy()

  await page.locator('#user').fill(user)
  await page.locator('#password').fill(password)
  await Promise.all([
    page.waitForURL((url) => !url.pathname.endsWith('/login')),
    page.locator('button[type="submit"]').click(),
  ])
  await page.waitForLoadState('networkidle')
}

export type BrowserFailureCollector = {
  assertNone: () => void
  assertNoneOrExactSetAndClear: (allowed: RegExp[]) => void
}

export function collectBrowserFailures(page: Page): BrowserFailureCollector {
  const failures: string[] = []
  const record = (failure: string) => failures.push(failure)
  page.on('pageerror', (error) => record(`pageerror: ${error.message}`))
  page.on('console', (message) => {
    if (message.type() === 'error') record(`console: ${message.text()}`)
  })

  return {
    assertNone: () => expect(failures, failures.join('\n')).toEqual([]),
    assertNoneOrExactSetAndClear: (allowed) => {
      if (failures.length > 0) {
        expect(failures, failures.join('\n')).toHaveLength(allowed.length)
        for (const pattern of allowed) {
          expect(failures.filter((failure) => pattern.test(failure)), failures.join('\n')).toHaveLength(1)
        }
      }
      failures.splice(0, failures.length)
    },
  }
}

export function assertKnownNextcloudLoginFailuresAndClear(failures: BrowserFailureCollector): void {
  failures.assertNoneOrExactSetAndClear([
    /^console: Failed to load resource: the server responded with a status of 404 \(Not Found\)$/,
    /^console: \[ERROR\] core: Failed to load user status \{app: core, uid: [^,}\s]+, level: 2, error: AxiosError: Request failed with status code 404[\s\S]*\}$/,
  ])
}

export async function openLibrary(page: Page): Promise<void> {
  const response = await page.goto('/apps/library/?limit=100')
  expect(response?.ok(), `Library returned ${response?.status()}`).toBeTruthy()
  await expect(page.locator('#library-vue-root[data-v-app]')).toBeAttached()
  await expect(page.locator('#library-catalogue')).toBeVisible()
  await expect(page.locator('#library-catalogue')).toHaveAttribute('aria-busy', 'false')
}
