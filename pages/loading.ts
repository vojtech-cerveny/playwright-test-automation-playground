import { Locator, Page, expect } from "@playwright/test";

export class LoadingPage {
  readonly page: Page;

  readonly necoNeco: Locator;
  readonly showMeTheSecret: Locator;
  readonly loadingAnimation: Locator;
  readonly trueTrue: Locator; 


  constructor(page: Page) {
    this.page = page;

    this.necoNeco = page.locator("nejakyTvujLokator")
    this.showMeTheSecret= page.getByText("Show me the secret!")
    this.loadingAnimation = page.locator("#loading-spinner")
    this.trueTrue = page.locator(".qa-secret")
  }

  async visit() {
    await this.page.goto("/loading.html");
  }
}