import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir } from 'node:fs/promises';
import { getAllPosts } from '../../src/data/blogPosts.js';

const routes = [
    '/', '/ai-automation', '/ai-chatbot', '/website', '/marketing',
    '/website-portfolio', '/sumika', '/hotzilla', '/benjy-cafe', '/blog',
    ...getAllPosts().map(post => `/blog/${post.slug}`), '/about-us', '/privacy-policy',
    '/terms-and-conditions', '/auth', '/profile', '/admin', '/admin/blog',
    '/not-a-page', '/blog/not-an-article',
];
const tabletRoutes = ['/', '/website', '/blog', '/website-portfolio', '/privacy-policy'];
const auditRoutes = ['/', '/website', '/blog', '/blog/ai-chatbots-for-small-business-2026', '/privacy-policy', '/admin'];

test.beforeEach(async ({ page }) => {
    // No third-party telemetry is needed to verify our local UI.
    await page.route('**/www.googletagmanager.com/**', route => route.abort());
});

for (const route of routes) {
    test(`responsive page ${route}`, async ({ page }, testInfo) => {
        test.skip(testInfo.project.name === 'tablet' && !tabletRoutes.includes(route));
        const errors = [];
        const apiCalls = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('request', request => { if (new URL(request.url()).pathname.startsWith('/api/')) apiCalls.push(request.url()); });
        await page.goto(route, { waitUntil: 'domcontentloaded' });
        if (route === '/profile') {
            await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
        } else if (!['/sumika', '/hotzilla', '/benjy-cafe'].includes(route)) {
            await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
            await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
        } else {
            await expect(page.locator('.project-preview__frame')).toBeVisible();
        }
        const bounds = await page.evaluate(() => ({ width: document.documentElement.clientWidth, content: document.documentElement.scrollWidth }));
        expect(bounds.content, `horizontal overflow on ${route}`).toBeLessThanOrEqual(bounds.width + 1);
        expect(errors).toEqual([]);
        expect(apiCalls, 'the static site must not call the deferred backend').toEqual([]);
        if (auditRoutes.includes(route)) {
            const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
            expect(result.violations.map(item => ({ id: item.id, nodes: item.nodes.map(node => node.target) }))).toEqual([]);
        }
        if (['/', '/website', '/blog', '/blog/ai-chatbots-for-small-business-2026', '/privacy-policy', '/website-portfolio'].includes(route)) {
            await mkdir('artifacts/ui-review', { recursive: true });
            const name = route === '/' ? 'home' : route.replaceAll('/', '-').slice(1);
            await page.screenshot({ path: `artifacts/ui-review/${testInfo.project.name}-${name}.png` });
        }
    });
}

test('navigation works with keyboard and closes after route changes', async ({ page }, testInfo) => {
    await page.goto('/');
    if (testInfo.project.name === 'desktop') {
        const toggle = page.getByRole('button', { name: 'Services', exact: true });
        await toggle.focus();
        await page.keyboard.press('Enter');
        await expect(toggle).toHaveAttribute('aria-expanded', 'true');
        await page.keyboard.press('Escape');
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        await expect(toggle).toBeFocused();
        await toggle.click();
        await page.getByRole('link', { name: /AI chatbots Make every customer/ }).click();
        await expect(page).toHaveURL('/ai-chatbot');
    } else {
        await page.getByRole('button', { name: 'Open navigation menu' }).click();
        await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
        await page.keyboard.press('Escape');
        await expect(page.getByRole('button', { name: 'Open navigation menu' })).toBeFocused();
        await page.getByRole('button', { name: 'Open navigation menu' }).click();
        await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Business automation' }).click();
        await expect(page).toHaveURL('/ai-automation');
        await expect(page.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false');
        expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden');
    }
});

test('home workflow selection and questions work', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Operations', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Operations', exact: true })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('heading', { name: 'Your tools connect' })).toBeVisible();
    await page.getByText('How much does a project cost?', { exact: true }).click();
    await expect(page.getByRole('link', { name: 'compare automation options' })).toBeVisible();
});

test('blog filtering and article contents support navigation', async ({ page }) => {
    await page.goto('/blog');
    await page.getByRole('button', { name: 'AI Chatbots', exact: true }).click();
    await expect(page.getByRole('button', { name: 'AI Chatbots', exact: true })).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: 'All', exact: true }).click();
    await page.goto('/blog/ai-chatbots-for-small-business-2026');
    const contents = page.getByRole('navigation', { name: 'Article contents' });
    if (!(await contents.isVisible())) {
        await page.getByText('In this article', { exact: true }).click();
    }
    await expect(contents).toBeVisible();
    const firstLink = contents.getByRole('link').first();
    const href = await firstLink.getAttribute('href');
    await firstLink.click();
    await expect(page).toHaveURL(new RegExp(`${href}$`));
});
