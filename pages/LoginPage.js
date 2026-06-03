export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.errorMsg = page.locator('.oxd-alert-content-text');
        this.requiredError = page.locator('.oxd-input-field-error-message');
        this.dashnoardHeader = page.getByRole('heading', { name: 'Dashboard' });
    }

    async goto() {
        await this.page.goto('/web/index.php/auth/login');
    }
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }
}