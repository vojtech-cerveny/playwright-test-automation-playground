import { Locator, Page, expect } from "@playwright/test";

export class FindFoxPage {
  readonly page: Page;

  readonly necoNeco: Locator;
  readonly foxpicturebutton: Locator;
  readonly textBelowImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.foxpicturebutton = page.getByText("🦊");
    this.textBelowImage = page.getByText("Gratuluji! Tvůj úkol je splněn! Vychutnej si ohňostroj s 🦊")
  }

  async visit() {
    await this.page.goto("/findfox.html");
  }
}