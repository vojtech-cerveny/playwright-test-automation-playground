import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("loading", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.loadingPage.visit();
  });

  test("template for you", async ({ page }) => {
    //pises kod sem :)
  });

  test("After clicking on button loading animation shows", async ({ page }) => {
    await pages.loadingPage.showMeTheSecret.click();
    await expect(pages.loadingPage.loadingAnimation).toBeVisible();
  });

  test("After clicking on button and after animation true true shows", async ({ page }) => {
    await pages.loadingPage.showMeTheSecret.click();
    await expect(pages.loadingPage.loadingAnimation).toBeVisible();
    await expect(pages.loadingPage.trueTrue).toBeVisible({timeout:20000});
  });

  test("After clicking 2 times on button and after animation true true shows only once", async ({ page }) => {
    await pages.loadingPage.showMeTheSecret.click({clickCount:2});
    await expect(pages.loadingPage.loadingAnimation).toBeVisible();
    await expect(pages.loadingPage.trueTrue).toHaveCount(1, {timeout:20000});
  });
  
  test("After clicking 10 times on button and after animation true true shows only once", async ({ page }) => {
    await pages.loadingPage.showMeTheSecret.click({clickCount:10});
    await expect(pages.loadingPage.loadingAnimation).toBeVisible();
    await expect(pages.loadingPage.trueTrue).toHaveCount(1, {timeout:20000});
  });




  



 
});