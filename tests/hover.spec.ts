import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("hover", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.hoverPage.visit();
  });

  test("on the hover page are 3 animal cards", async ({ page }) => {
    await expect(pages.hoverPage.animalCard).toHaveCount(3);
  });

  test("when hover on cat card it shows right title", async ({ page }) => {
    await pages.hoverPage.catCard.hover();
    await expect(pages.hoverPage.catCardTitle).toBeVisible();
  });
  test("when hover on cat card it shows right text", async ({ page }) => {
    await pages.hoverPage.catCard.hover();
    await expect(pages.hoverPage.catCardText).toBeVisible();
  });
  test("when hover on dog card it shows right title", async ({ page }) => {
    await pages.hoverPage.dogCard.hover();
    await expect(pages.hoverPage.dogCardTitle).toBeVisible();
  });
  test("when hover on dog card it shows right text", async ({ page }) => {
    await pages.hoverPage.dogCard.hover();
    await expect(pages.hoverPage.dogCardText).toBeVisible();
  });

  test("when hover on unicorn card it shows right title", async ({ page }) => {
    await pages.hoverPage.unicornCard.hover();
    await expect(pages.hoverPage.unicornCardTitle).toBeVisible();
  });
  test("when hover on unicorn card it shows right text", async ({ page }) => {
    await pages.hoverPage.unicornCard.hover();
    await expect(pages.hoverPage.unicornCardText).toBeVisible();
  });




  



 
});