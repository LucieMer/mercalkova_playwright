import { Page, Locator } from "@playwright/test";

export class EshopHomepage {
  private readonly page: Page;
  private readonly myAccountButton: Locator;
  private readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountButton = page.locator("#top-links a i.fa-user");
    this.registerButton = page.locator(
      ".dropdown-menu a[href='https://tredgate.com/eshop/index.php?route=account/register']",
    );
  }

  async open() {
    await this.page.goto("https://tredgate.com/eshop/");
  }

  async clickMyAccount() {
    await this.myAccountButton.click();
  }

  async clickRegister() {
    await this.page
      .locator(
        ".dropdown-menu a[href='https://tredgate.com/eshop/index.php?route=account/register']",
      )
      .click();
  }
}
