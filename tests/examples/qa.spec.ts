import { test, expect } from "@playwright/test";

test.use({ userAgent: "Playwright" });

test.describe("QA page", () => {
  // 👇👇👇 FILL YOUR NAME HERE TO RUN THE TESTS into ""
  // const yourName = "Peter Parker"; // 👈👈👈 Like this
  const yourName = "Raduška";
  const timeout = 4000;
  test.beforeEach(async ({ page }) => {
    await page.goto("https://are-you-ready.ostrava.digital");
  });

  test("check your QA status test", async ({ page }) => {
    // it can take a while to fill inputs
    test.setTimeout(60000);

    // login
    await page.getByLabel("Name").fill(yourName);
    await page.getByRole("button", { name: "Sign in" }).click();

    // check your stats
    await page.locator("#input1").check();
    await page.waitForTimeout(timeout);
    await page.locator("#input2").check();
    await page.waitForTimeout(timeout);
    await page.locator("#input3").check();
    await page.waitForTimeout(timeout);
    await page.locator("#input4").check();
    await page.waitForTimeout(timeout);
    await page.locator("#input5").check();
    await page.waitForTimeout(timeout);
    await page.locator("#input6").check();

    // check the result

    // 😅 Hehe, you need to run test to see the result :)
    await expect(
      page.getByText(
        atob("WW91IGFyZSBvbiB0aGUgcmlnaHQgcGF0aCB0byBiZSB0aGUgYmVzdCBRQSE=")
      )
    ).toBeVisible();

    await page.waitForTimeout(500);
    await page.locator("#scrollLol").scrollIntoViewIfNeeded();
    await expect(page.getByAltText("Thumb up")).toBeVisible();
    await page.waitForTimeout(timeout * 2);
  });
});
