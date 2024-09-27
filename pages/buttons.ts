import { Locator, Page, expect } from "@playwright/test";

export class ButtonPage {
  readonly page: Page;
  readonly navigationBar: string;  
  readonly header: Locator;

  readonly buttonById: Locator;
  readonly buttonByName: Locator;
  readonly buttonByClass: Locator;
  readonly buttonByText: Locator;
  readonly buttonByXPath: Locator;
  readonly buttonByPartialText: Locator;
  readonly buttonByDataQA: Locator;

  readonly buttonOutsideDiv: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Tlačítka" });

    
    this.buttonById = page.locator("#button1");
    this.buttonByName = page.locator('[name="clickingOnMe"]');
    this.buttonByClass = page.locator('.click-click-click');
    this.buttonByText = page.getByText("This is THE button");
    this.buttonByXPath = page.locator("xpath=//html/body/div/div[2]/p/button");
    this.buttonByPartialText = page.getByText("link");
    this.buttonByDataQA = page.getByTestId("customAttribute-button");
    this.buttonOutsideDiv = page.getByText("Button mimo");
  }

  async visit() {
    await this.page.goto("/selectorsButtons.html");
  }

  async expectToAllButtonsAreClicked() {
    // this.header.waitFor({ state: "visible" });
    const buttons = this.page.getByRole("button");

    for (const button of await buttons.all()) {
      await expect.soft(button).toHaveClass("btn-success", { timeout: 100 });
    }
  }
}
