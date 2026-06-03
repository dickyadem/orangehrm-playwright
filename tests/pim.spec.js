import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';

test.describe('OrangeHRM - PIM Tests', () => {

    test('Tampilkan Employee List', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const pimPage = new PIMPage(page);

        await loginPage.goto();
        await loginPage.login('Admin', 'admin123');
        await expect(page).toHaveURL(/dashboard/, { timeout: 15000 });

        await pimPage.gotoEmployeeList();
        await expect(page).toHaveURL(/pim\/viewEmployeeList/);
        await expect(pimPage.heading).toBeVisible();
        await expect(pimPage.table).toBeVisible();
        await expect(pimPage.records.first()).toBeVisible();
    });
});
