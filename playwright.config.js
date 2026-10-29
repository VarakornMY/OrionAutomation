import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests/ui',
    timeout: 30000,
    fullyParallel: true,
    workers: 2,
    reporter: 'list',
    outputDir: 'test-results',
    use: {
        baseURL: process.env.UI_BASE_URL || 'http://127.0.0.1:4173',
        channel: 'chrome',
        ...(process.platform === 'win32' ? { launchOptions: { executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' } } : {}),
        headless: true,
        screenshot: 'only-on-failure',
    },
    projects: [
        { name: 'desktop', use: { viewport: { width: 1440, height: 1000 } } },
        { name: 'mobile', use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
        { name: 'tablet', use: { viewport: { width: 768, height: 1024 }, hasTouch: true } },
    ],
});
