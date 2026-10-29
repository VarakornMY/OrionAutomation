import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir } from 'node:fs/promises';
import { getAllPosts } from '../../src/data/blogPosts.js';

const routes = [
    '/', '/ai-automation', '/ai-chatbot', '/website', '/marketing',
    '/blog',
    ...getAllPosts().map(post => `/blog/${post.slug}`), '/about-us', '/privacy-policy',
    '/terms-and-conditions', '/auth', '/profile', '/admin', '/admin/blog',
    '/not-a-page', '/blog/not-an-article',
];
const tabletRoutes = ['/', '/website', '/blog', '/privacy-policy'];
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
        } else {
            await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
            await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
        }
        const bounds = await page.evaluate(() => ({ width: document.documentElement.clientWidth, content: document.documentElement.scrollWidth }));
        expect(bounds.content, `horizontal overflow on ${route}`).toBeLessThanOrEqual(bounds.width + 1);
        expect(errors).toEqual([]);
        expect(apiCalls, 'the static site must not call the deferred backend').toEqual([]);
        if (auditRoutes.includes(route)) {
            const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
            expect(result.violations.map(item => ({ id: item.id, nodes: item.nodes.map(node => node.target) }))).toEqual([]);
        }
        if (['/', '/website', '/blog', '/blog/ai-chatbots-for-small-business-2026', '/privacy-policy'].includes(route)) {
            await mkdir('artifacts/ui-review', { recursive: true });
            const name = route === '/' ? 'home' : route.replaceAll('/', '-').slice(1);
            await page.screenshot({ path: `artifacts/ui-review/${testInfo.project.name}-${name}.png` });
        }
    });
}

test('removed restaurant demos have no public routes or promotion', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link').filter({ hasText: /sumi.?ka|hotzilla|benjy/i })).toHaveCount(0);
    await expect(page.locator('a[href*="website-portfolio"], a[href*="sumika"], a[href*="SUMI-KA"], a[href*="hotzilla"], a[href*="HOTZILLA"], a[href*="benjy-cafe"]')).toHaveCount(0);
    await expect(page.locator('img[src*="sumika"], img[src*="SUMI-KA"], img[src*="hotzilla"], img[src*="HOTZILLA"], img[src*="benjy-cafe"]')).toHaveCount(0);

    for (const route of ['/website-portfolio', '/sumika', '/hotzilla', '/benjy-cafe', '/SUMI-KA/index.html', '/HOTZILLA/index.html', '/benjy-cafe/index.html']) {
        await page.goto(route, { waitUntil: 'domcontentloaded' });
        await expect(page.getByRole('heading', { level: 1, name: 'Page not found' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Back to home', exact: true })).toBeVisible();
        await expect(page.locator('iframe')).toHaveCount(0);
    }
});

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
        await page.locator('.services-popover').getByRole('link', { name: 'AI chatbots', exact: true }).click();
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

test('service selection and questions work with keyboard', async ({ page }) => {
    await page.goto('/');
    const websites = page.getByRole('button', { name: 'Websites', exact: true });
    await websites.focus();
    await page.keyboard.press('Enter');
    await expect(websites).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#service-panel-0').getByRole('link', { name: 'Website packages' })).toBeVisible();
    await page.getByRole('button', { name: 'Automation', exact: true }).click();
    await expect(websites).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#service-panel-1').getByRole('link', { name: 'Automation packages' })).toBeVisible();
    await page.getByText('How much does a project cost?', { exact: true }).click();
    await expect(page.locator('.question-answer').getByRole('link', { name: 'automation packages' })).toBeVisible();
});

test('interaction motion respects reduced-motion preferences', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.getByRole('button', { name: 'Websites', exact: true }).click();
    await expect(page.locator('#service-panel-0').getByRole('link', { name: 'Website packages' })).toBeVisible();
    const transition = await page.locator('#service-panel-0').evaluate(element => parseFloat(getComputedStyle(element).transitionDuration));
    expect(transition).toBeLessThanOrEqual(.001);
    await expect(page.locator('.studio-logo-stage img')).toHaveCSS('transform', 'none');
    await expect(page.locator('.studio-hero p')).toHaveCount(0);
    await expect(page.locator('.eyebrow, .page-description, .section-description')).toHaveCount(0);
});

test('company artwork is used and package navigation reaches the right section', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('.site-header .brand-logo');
    await expect(logo).toHaveAttribute('src', '/brand/orion-logo.jpg');
    await expect(logo).toBeVisible();
    await expect.poll(() => logo.evaluate(image => image.naturalWidth)).toBe(500);
    await page.locator('.site-footer').getByRole('link', { name: 'Website packages', exact: true }).click();
    await expect(page).toHaveURL('/website#website-pricing');
    await expect.poll(() => page.locator('#website-pricing').evaluate(section => Math.round(section.getBoundingClientRect().top))).toBeLessThan(180);
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
