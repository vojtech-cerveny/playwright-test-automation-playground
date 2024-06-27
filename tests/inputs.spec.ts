import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";
import { InputsPage } from "../pages/inputs";

test.describe("Inputs", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.visit("/inputs.html");
  });

   
    test.only("Veryfing that 379364981 shows Super secret je super správně. ", async ({ page }) => {
        await pages.inputsPage.inputSecretPassword.fill("379364981")
        await pages.inputsPage.checkNumber.click()
        await expect(pages.inputsPage.feedbackText).toHaveText("Super secret je super správně."); 
    });

    test("Veryfing that 123456 shows Super secret je super špatně. ", async ({ page }) => {
        await pages.inputsPage.inputSecretPassword.fill("379364981")
        await pages.inputsPage.checkNumber.click()
        await expect(pages.inputsPage.feedbackText).toHaveText("Super secret je super špatně."); 
    });

    test.only("Finding and using current password.", async ({ page }) => {
      const inputValue = await pages.inputsPage.secretValue.inputValue();
      await pages.inputsPage.inputSecretPassword.fill(inputValue);
      await pages.inputsPage.checkNumber.click();
      await expect(pages.inputsPage.feedbackText).toHaveText("Super secret je super správně."); 
  });

   

});