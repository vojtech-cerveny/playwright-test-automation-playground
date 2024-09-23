import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Cats", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.catsPage.visit();
  });


    test("button pridej kocku add one card with cat", async ({page}) => {
      await pages.catsPage.addCatButton.click();
      await expect(pages.catsPage.catCards).toBeVisible()
    });

    test("button pridej kocku adds more cat cards", async ({page}) => {
      await pages.catsPage.addCatButton.click({clickCount:4});
      await expect(pages.catsPage.catCards).toHaveCount(4);
    });

    test("button odeber kocku removes one cat card", async ({page}) => {
      await pages.catsPage.addCatButton.click({clickCount:2});
      await pages.catsPage.removeCatButton.click();
      await expect(pages.catsPage.catCards).toHaveCount(1);
    });

    test("button Apokalypsa! removes all cats", async ({page}) => {
      await pages.catsPage.addCatButton.click({clickCount:4});
      await pages.catsPage.apocalypseButton.click();
      await expect(pages.catsPage.catCards).toHaveCount(0);
    });

    test("counter reacts when button Pridej kocku is clicked", async ({page}) => {
      await pages.catsPage.addCatButton.click();
      await expect(pages.catsPage.counter).toHaveText("1");
    });

    test("counter reacts when button Pridej kocku is clicked two times", async ({page}) => {
      await pages.catsPage.addCatButton.click({clickCount:2});
      await expect(pages.catsPage.counter).toHaveText("2");
    });


    test("counter reacts when button Odeber kocku is clicked", async ({page}) => {
      await pages.catsPage.addCatButton.click({clickCount:2});
      await pages.catsPage.removeCatButton.click();
      await expect(pages.catsPage.counter).toHaveText("1");
    });

    test("counter reacts when button Apokalypsa! is clicked", async ({page}) => {
      await pages.catsPage.addCatButton.click({clickCount:4});
      await pages.catsPage.apocalypseButton.click();
      await expect(pages.catsPage.counter).toHaveText("0");;
    });
  
   test("button Pridej kocku can add 20 cats", async ({page}) => {
      await pages.catsPage.addCatButton.click({clickCount:20});
      await expect(pages.catsPage.catCards).toHaveCount(20);
    });

    test("button Odeber kočku is active only when at least one cat card is visible", async ({page}) => {
      await pages.catsPage.addCatButton.click();
      await expect(pages.catsPage.removeCatButton).not.toHaveClass(/disabled/);
    });

    test("button Odeber kočku is not active when no cat card is visible", async ({page}) => {
      await expect(pages.catsPage.catCards).toHaveCount(0);
      await expect(pages.catsPage.removeCatButton).toHaveClass(/disabled/);
    });

    test("button Apokalypsa! is active only when at least one cat card is visible", async ({page}) => {
      await pages.catsPage.addCatButton.click();
      await expect(pages.catsPage.apocalypseButton).not.toHaveClass(/disabled/);
    });

    test("button Apokalypsa! is not active when no cat card is visible", async ({page}) => {
      await expect(pages.catsPage.catCards).toHaveCount(0);
      await expect(pages.catsPage.apocalypseButton).toHaveClass(/disabled/);
    });

  
});
