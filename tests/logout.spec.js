import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('OrangeHRM - Logout Tests', () => {

    test('Logout setelah login berhasil', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.goto();
        await loginPage.login('Admin', 'admin123');
        await expect(page).toHaveURL(/dashboard/, { timeout: 15000 });

        await dashboardPage.logout();
        await expect(page).toHaveURL(/auth\/login/);
        await expect(loginPage.loginBtn).toBeVisible();
    });
});
