import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 60000,
    fullyParallel: false,
    workers: 1,
    retries: 1,
    reporter: 'html',
    use: {
        baseURL: 'https://opensource-demo.orangehrmlive.com',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [{
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
    },
    ],

});
