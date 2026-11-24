import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test("Tag test", { tag: "@mujTag" }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
});

test("Without Tag Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
});

test.describe("Suite with Tag", { tag: "@mujTag" }, () => {
  test("Tagged test inside describe", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test("Tagged test inside describe 2", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
  });
});

test.describe("Suite without Tag", () => {
  test(
    "Describe without tag, test with tag",
    { tag: "@mujTag" },
    async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.open();
    },
  );
});
