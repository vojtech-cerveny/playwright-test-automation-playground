import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";
import { TIMEOUT } from "dns";
import { setTimeout } from "timers";

test.describe("FindFox", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.findFoxPage.visit();
  });

  test("click on fox picture", async ({ page }) => {
  await pages.findFoxPage.foxpicturebutton.
  click({timeout:30000});
  await expect(pages.findFoxPage.textBelowImage).toHaveText("Gratuluji! Tvůj úkol je splněn! Vychutnej si ohňostroj s 🦊")
  });

  



 
});