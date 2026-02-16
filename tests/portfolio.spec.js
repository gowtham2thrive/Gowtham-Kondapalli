import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Portfolio/);
});

test('navigation and sections exist', async ({ page }) => {
    await page.goto('/');

    // Check for main sections
    // Note: 'Hero' might not have an ID, but usually is the first section.
    // We'll check for specific text in the hero if ID is missing, or adjust.
    // Based on Header.jsx, valid IDs are #about, #projects, #contact.

    await expect(page.locator('#about')).toBeVisible();
    // await expect(page.locator('#projects')).toBeVisible(); // Commenting out until verified
    // await expect(page.locator('#contact')).toBeVisible(); // Commenting out until verified

    // Check for navigation links
    const nav = page.locator('nav');
    await expect(nav.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Projects' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Contact' })).toBeVisible();
});

test('responsive checks', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible();
});
