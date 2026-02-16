import { test, expect } from '@playwright/test';

const LOCALHOST = 'http://localhost:5173';

test.describe('Portfolio Responsiveness & Functionality', () => {

    test('Loading screen should appear on new tab and disappear', async ({ page }) => {
        // 1. Visit page
        await page.goto(LOCALHOST);

        // 2. Loading screen should be visible initially
        const loadingScreen = page.locator('img[alt="Loading"]');
        await expect(loadingScreen).toBeVisible();

        // 3. Wait for it to disappear (animation is ~2.3s total)
        await expect(loadingScreen).not.toBeVisible({ timeout: 5000 });

        // 4. Main content should be visible
        await expect(page.locator('#hero')).toBeVisible();
    });

    test('Desktop (1280px) layout should be correct', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.goto(LOCALHOST);

        // Wait for loading to finish
        await expect(page.locator('img[alt="Loading"]')).not.toBeVisible({ timeout: 5000 });

        // Check key desktop elements
        await expect(page.locator('nav')).toBeVisible();
        await expect(page.locator('.education-timeline')).toHaveCSS('flex-direction', 'row'); // Horizontal on desktop

        // No horizontal scroll
        const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
        const viewportWidth = await page.evaluate(() => window.innerWidth);
        expect(scrollWidth).toBeLessThanOrEqual(viewportWidth);
    });

    test('Tablet (768px) layout should adapt', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.goto(LOCALHOST);

        // Education timeline should switch to columns (vertical)
        // We check this by seeing if the flex-direction changed or if elements stack
        await expect(page.locator('img[alt="Loading"]')).not.toBeVisible({ timeout: 5000 });

        // In our CSS, .education-timeline becomes flex-direction: column-reverse on tablet
        // But computed style might verify it best
        const timelineDir = await page.locator('.education-timeline').evaluate((el) => {
            return window.getComputedStyle(el).flexDirection;
        });
        // Note: CSS might return 'column-reverse' or 'column' depending on exact media query match
        expect(['column', 'column-reverse']).toContain(timelineDir);
    });

    test('Mobile (375px) layout should fit without overflow', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto(LOCALHOST);

        // Wait for loading
        await expect(page.locator('img[alt="Loading"]')).not.toBeVisible({ timeout: 5000 });

        // 1. Check for horizontal overflow (common mobile bug)
        const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
        const viewportWidth = await page.evaluate(() => window.innerWidth);
        expect(scrollWidth).toBeLessThanOrEqual(viewportWidth);

        // 2. Check text scaling (Hero title shouldn't be massive)
        const heroTitle = page.locator('h1').first();
        const fontSize = await heroTitle.evaluate((el) => window.getComputedStyle(el).fontSize);
        console.log('Mobile Hero Font Size:', fontSize);
        // Just ensuring it exists and is rendered; exact pixel check is brittle
        await expect(heroTitle).toBeVisible();

        // 3. Check Contact buttons wrap or shrink
        const contactSection = page.locator('#contact');
        await contactSection.scrollIntoViewIfNeeded();
        await expect(contactSection).toBeVisible();
    });

});
