export class PIMPage {
    constructor(page) {
        this.page = page;
        this.pimMenu = page.getByRole('link', { name: 'PIM' });

        // Employee List
        this.employeeListTab = page.getByRole('link', { name: 'Employee List' });
        this.heading = page.getByRole('heading', { name: 'Employee Information' });
        this.table = page.locator('.oxd-table');
        this.records = page.locator('.oxd-table-card');

        // Add Employee
        this.addEmployeeTab = page.getByRole('link', { name: 'Add Employee' });
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
        this.employeeIdInput = page.locator('.oxd-input-group')
            .filter({ hasText: 'Employee Id' })
            .getByRole('textbox');
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        this.successToast = page.locator('.oxd-toast');
        this.requiredError = page.locator('.oxd-input-field-error-message');
    }

    async gotoEmployeeList() {
        await this.pimMenu.click();
        await this.employeeListTab.click();
    }

    async gotoAddEmployee() {
        await this.pimMenu.click();
        await this.addEmployeeTab.click();
    }

    async addEmployee(firstName, lastName, employeeId) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        if (employeeId) {
            await this.employeeIdInput.fill(employeeId);
        }
        await this.saveBtn.click();
    }
}
