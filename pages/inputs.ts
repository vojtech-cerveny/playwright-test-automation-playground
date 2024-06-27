import { Locator, Page, expect } from "@playwright/test";

export class InputsPage {
  readonly page: Page;

  readonly necoNeco: Locator;
  readonly secretValue: Locator;
  readonly inputSecretPassword: Locator;
  readonly checkNumber: Locator;
  readonly feedbackText: Locator;

  constructor(page: Page) {
    this.page = page;

    this.necoNeco = page.locator("nejakyTvujLokator")
    this.secretValue = page.locator("#secretPassword")
    this.inputSecretPassword = page.locator("#secretNumberInput")
    this.checkNumber = page.locator("#checkSecretNumber")
    this.feedbackText = page.locator("#passwordHelpBlock")
    
  }

  async visit() {
    await this.page.goto("/inputs.html");
  }
}