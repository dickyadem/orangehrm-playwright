import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('OrangeHRM - Login Tests', () => {

    test('Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('Admin', 'admin123');
        await expect(page).toHaveURL(/dashboard/, { timeout: 15000 });
        await expect(loginPage.dashnoardHeader).toBeVisible();
    });

    test('Login gagal dengan password salah', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('Admin', 'wrongpassword');
        await expect(loginPage.errorMsg).toBeVisible({ timeout: 10000 });
        await expect(loginPage.errorMsg).toHaveText('Invalid credentials');
    });

    test('Login gagal dengan username kosong', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('', 'admin123');
        await expect(loginPage.requiredError).toBeVisible();
        await expect(loginPage.requiredError).toHaveText('Required');
    });

    test('Login gagal dengan semua field kosong', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('', '');
        await expect(loginPage.requiredError).toHaveCount(2);
        await expect(loginPage.requiredError.first()).toHaveText('Required');
    });
});