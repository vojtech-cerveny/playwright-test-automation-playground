
import { expect, test } from "@playwright/test";
import { AllPages } from "../pages/allpages";



test.describe("modal", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.modalPage.visit();
  });

  test("modal window is opened by button", async () => {
    await pages.modalPage.odhalMiTajemstvi.click();
    await expect(pages.modalPage.modalWindow).toBeVisible();
  });

  test("modal window is closed by button Skryj tajemství o jednorožci", async () => {
    await pages.modalPage.odhalMiTajemstvi.click();
    await pages.modalPage.buttonSkryj.click()
    await expect(pages.modalPage.modalWindow).not.toBeVisible();

  });

  test("modal window is closed by corner cross", async () => {
    await pages.modalPage.odhalMiTajemstvi.click();
    await pages.modalPage.cross.click()
    await expect(pages.modalPage.modalWindow).not.toBeVisible();
  });

  test("modal window is closed by grey mask behind modal window", async () => {
    await pages.modalPage.odhalMiTajemstvi.click();
    await pages.modalPage.greyMask.click()
    await expect(pages.modalPage.modalWindow).not.toBeVisible();
  });

  test("Verify that text contain the word Škarpa", async () => {
    await pages.modalPage.odhalMiTajemstvi.click();
    await expect(pages.modalPage.modalWindow).toHaveText(/Škarpa/);
  });
    
  });

  





  



 