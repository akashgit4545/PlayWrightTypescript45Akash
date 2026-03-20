import { expect, Locator, test } from '@playwright/test';

test('Login to OrangeHRM', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForLoadState('networkidle');
    const companyBranding = page.getByAltText('company-branding');
    await expect(companyBranding).toBeVisible();

    const username: Locator = page.locator('input[name="username"]');
    const password: Locator = page.locator('input[name="password"]');
    const loginButton: Locator = page.locator('button[type="submit"]');

    await username.fill('Admin');
    await password.fill('admin123');
    await loginButton.click();

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    console.log('Login successful, dashboard page loaded.');
});

test('Invalid Login to OrangeHRM', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForLoadState('networkidle');
    const companyBranding = page.getByAltText('company-branding');
    await expect(companyBranding).toBeVisible();

    const username: Locator = page.locator('input[name="username"]');
    const password: Locator = page.locator('input[name="password"]');
    const loginButton: Locator = page.locator('button[type="submit"]');
    const errorMessage: Locator = page.getByText('Invalid credentials');
    
    await username.fill('Admin');
    await password.fill('admin1');
    await loginButton.click();
    
    await expect(errorMessage).toBeVisible({ timeout: 10000 });
    await expect(errorMessage).toHaveText('Invalid credentials');
});