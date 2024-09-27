import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Login", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.visit("/login.html");
  });

  test("template for you", async ({ page }) => {
    //pises kod sem :)
  });

  test("login with valid data", async ({page}) => {
    await pages.loginPage.UsernameInput.fill("czechitas");
    await pages.loginPage.PasswordInput.fill("budoucnost");
    await pages.loginPage.LoginButton.click();
    await expect(pages.loginPage.LoggedParagraph).toBeVisible();
  });

  
  test("toast Přihlášení proběhlo v pořádku after success login", async ({page}) => {
    await pages.loginPage.UsernameInput.fill("czechitas");
    await pages.loginPage.PasswordInput.fill("budoucnost");
    await pages.loginPage.LoginButton.click();
    await expect(pages.loginPage.allertSuccess).toHaveText("Přihlášení proběhlo v pořádku");
  });

  test("login with invalid password", async ({page}) => {
    await pages.loginPage.UsernameInput.fill("czechitas");
    await pages.loginPage.PasswordInput.fill("minulost");
    await pages.loginPage.LoginButton.click();
    await expect(pages.loginPage.errorFeedback).toHaveText("Špatné heslo!");
  });
});
