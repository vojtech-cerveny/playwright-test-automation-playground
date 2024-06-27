import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("hover", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.hoverPage.visit();
  });

  test("template for you", async ({ page }) => {
    //pises kod sem :)
  });

  test("on the hover page are 3 animal cards", async ({ page }) => {
    await expect(pages.hoverPage.animalCard).toHaveCount(3);
  });

  test("when hover on cat card it shows right title", async ({ page }) => {
    await pages.hoverPage.catCard.hover();
    await expect(pages.hoverPage.catCardTitle).toHaveText("Kočka")
  });
  test("when hover on cat card it shows right text", async ({ page }) => {
    await pages.hoverPage.catCard.hover();
    await expect(pages.hoverPage.catCardText).toHaveText("A jaké krásné očička má!")
  });






  



 
});