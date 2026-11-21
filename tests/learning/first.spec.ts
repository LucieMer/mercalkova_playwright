import { test } from "@playwright/test";
import { PmToolLoginPage } from "../../pages/PmToolLoginPage";

const username = process.env.PMTOOL_USERNAME;
const password = process.env.PMTOOL_PASSWORD;

test("signs in to PM Tool", async ({ page }) => {
  if (!username || !password) {
    test.skip(
      true,
      "Set PMTOOL_USERNAME and PMTOOL_PASSWORD to run this test.",
    );
    return;
  }

  const loginPage = new PmToolLoginPage(page);
  await loginPage.open();
  await loginPage.login(username, password);
  await loginPage.expectAuthenticated();
});
