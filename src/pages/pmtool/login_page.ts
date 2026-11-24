import { Page, Locator, test } from "@playwright/test";
import { DashboardPage } from "./dashboard_page.ts";
import { LostPasswordPage } from "./lost_password_page.ts";

export class LoginPage {
  private readonly page: Page;
  private readonly url = "http://tredgate.com/pmtool/"; // ? Použijeme jen na prvním PO (LoginPage), odkud budeme PM tool spouštět
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly passwordForgottenButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator('[type="submit"]');
    this.passwordForgottenButton = page.locator("#forget_password");
  }

  // Při vytváření metod doporučím přístup začít s atomickými (malými) metodami s jedním krokem a pak vytvářet sdružující metody
  // Například: typeUsername - jeden krok, login - sdružení více kroků
  // Atomické metody používáme, když danou funkcionalitu testujeme a sdružující metody například pro preconditions jiných testů

  async open() {
    await this.page.goto(this.url);
    return this;
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
    return this;
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
    return this;
  }

  async clickLoginButton() {
    await this.loginButton.click();
    return new DashboardPage(this.page);
  }

  async login(username: string, password: string) {
    await test.step("Login to Pmtool", async () => {
      await this.fillUsername(username);
      await this.fillPassword(password);
      await this.clickLoginButton();
    });
    
    return new DashboardPage(this.page);
  }

  async clickPasswordForgotten() {
    await this.passwordForgottenButton.click();
    return new LostPasswordPage(this.page);
  }
}
