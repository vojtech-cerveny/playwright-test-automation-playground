import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";
import { TIMEOUT } from "dns";
import { setTimeout } from "timers";

test.describe("Selectors", () => {
    let pages: AllPages;

    test.beforeEach(async ({ page }) => {
        pages = new AllPages(page);
        await pages.selectorsPage.visit();
    });


    test("find data-qa element", async ({ page }) => {
        await pages.selectorsPage.elementByData;
        await expect(pages.selectorsPage.elementByData).toBeVisible();
    });

    test("find id zapletka element", async ({ page }) => {
        await pages.selectorsPage.elementIdZapletka;
        await expect(pages.selectorsPage.elementIdZapletka).toBeVisible();
    });

    test("find elements with this-is-interesting-paragraph class", async ({ page }) => {
        await pages.selectorsPage.elementInteresting;
        await expect(pages.selectorsPage.elementInteresting).toBeVisible();
    });

    test("find picture elements", async ({ page }) => {
        await pages.selectorsPage.elementPicture;
        await expect(pages.selectorsPage.elementPicture).toBeVisible();
    });

    test("count paragraphs", async ({ page }) => {
        await pages.selectorsPage.paragraph;
        await expect(pages.selectorsPage.paragraph).toHaveCount(16)
    });

    test("the counter displays the number corresponding to the number of clicks on the button Dej like!", async ({ page }) => {
        await pages.selectorsPage.like.click({clickCount:4});
        await expect(pages.selectorsPage.likeCounter).toHaveText("4")
    });






});