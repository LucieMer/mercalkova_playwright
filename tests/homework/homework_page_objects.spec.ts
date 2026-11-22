import { test } from "@playwright/test";
import { EshopHomepage } from "../../src/pages/tredgate-eshop/eshop_homepage.ts";
import { RegisterPage } from "../../src/pages/tredgate-eshop/register_page.ts";

test("HW Page Objects: Eshop - registration", async ({ page }) => {
  const eshopHomepage = new EshopHomepage(page);
  const registerPage = new RegisterPage(page);

  await eshopHomepage.open();
  await eshopHomepage.clickMyAccount();
  await eshopHomepage.clickRegister();

  await registerPage.fillFirstName("Jana");
  await registerPage.fillLastName("Tester");
  await registerPage.fillEmail("jana.tester@example.com");
  await registerPage.fillTelephone("1234567890");
  await registerPage.fillPassword("password123");
  await registerPage.fillPasswordConfirm("password123");
  await registerPage.clickContinue();
});
