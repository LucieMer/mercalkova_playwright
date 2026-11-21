import { expect, type Page } from "@playwright/test";

export class PmToolLoginPage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto("/");
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.locator("#username").fill(username);
    await this.page.locator("#password").fill(password);
    await this.page.locator('[type="submit"]').click();
  }

  async expectAuthenticated(): Promise<void> {
    await expect(this.page.locator("#username")).toBeHidden();
  }
}
