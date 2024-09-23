import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Table", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.visit("/table.html");
  });

   
    test("Verifying that Unicorn Awesomeness LVL is always 999", async ({ page }) => {
        await expect(pages.tablePage.awesomnessLVLunicorn).toHaveText("999"); 
    });


    test("Verifying that Orangutan Awesomeness LVL is between 30-40", async ({ page }) => {
        expect(parseInt(await pages.tablePage.awesomnessLVLorangutan.textContent())).toBeGreaterThanOrEqual(30);
        expect(parseInt(await pages.tablePage.awesomnessLVLorangutan.textContent())).toBeLessThanOrEqual(40)
    });

    test("Verifying that the softness of the fox fur is between 40-50", async ({ page }) => {
          expect(parseInt(await pages.tablePage.softnessOfTheFoxFur.textContent())).toBeGreaterThanOrEqual(40);
          expect(parseInt(await pages.tablePage.softnessOfTheFoxFur.textContent())).toBeLessThanOrEqual(50)
      });
    

    test("Verifying that size of Whale is  LVL is OBROVITÁNSKÁ", async ({ page }) => {
        await expect(pages.tablePage.whaleSize).toHaveText("OBROVITÁNSKÁ"); 
    });

    test("Verifying that number of rows is 7", async ({ page }) => {
        await expect(pages.tablePage.tableRows).toHaveCount(7); 
    });

});