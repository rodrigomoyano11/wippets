import { PlaywrightTestConfig, devices } from '@playwright/test'

const PORT = process.env.PORT || 3000
const baseURL = `http://localhost:${PORT}`

const config: PlaywrightTestConfig = {
  timeout: 30 * 1000,
  retries: 2,
  testDir: './e2e',
  outputDir: './e2e/test-results',
  webServer: {
    command: 'pnpm run dev',
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL,
    trace: 'retry-with-trace',
  },
  projects: [
    { name: 'Desktop Chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'Desktop Firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'Desktop Safari', use: { ...devices['Desktop Safari'] } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
  ],
}

export default config
