import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';

test.describe('OrangeHRM - Add Employee Tests', () => {

    // test('Tambah employee baru', async ({ page }) => {
    //     const loginPage = new LoginPage(page);
    //     const pimPage = new PIMPage(page);

    //     await loginPage.goto();
    //     await loginPage.login('Admin', 'admin123');
    //     await expect(page).toHaveURL(/dashboard/, { timeout: 15000 });

    //     const employeeId = String(Date.now()).slice(-6);

    //     await pimPage.gotoAddEmployee();
    //     await pimPage.addEmployee('Susi', 'Susanto', employeeId);

    //     await expect(pimPage.successToast).toBeVisible({ timeout: 10000 });
    //     await expect(page).toHaveURL(/viewPersonalDetails/);
    // });

    test('Gagal tambah employee tanpa First Name', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const pimPage = new PIMPage(page);

        await loginPage.goto();
        await loginPage.login('Admin', 'admin123');
        await expect(page).toHaveURL(/dashboard/, { timeout: 15000 });

        const employeeId = String(Date.now()).slice(-6);

        await pimPage.gotoAddEmployee();
        await pimPage.addEmployee('', 'Ade', employeeId);

        await expect(pimPage.requiredError.first()).toBeVisible();
        await expect(pimPage.requiredError.first()).toHaveText('Required');
        await expect(page).toHaveURL(/addEmployee/);
    });
});
