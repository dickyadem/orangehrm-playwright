export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.userDropdown = page.locator('.oxd-userdropdown-tab');
        this.logoutMenuItem = page.getByRole('menuitem', { name: 'Logout' });
    }

    async logout() {
        await this.userDropdown.click();
        await this.logoutMenuItem.click();
    }
}
