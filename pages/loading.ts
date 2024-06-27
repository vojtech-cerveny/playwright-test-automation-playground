import { Locator, Page, expect } from "@playwright/test";

export class LoadingPage {
  readonly page: Page;

  readonly necoNeco: Locator;
  readonly neboNecoTakoveho: Locator;

  constructor(page: Page) {
    this.page = page;

    this.necoNeco = page.locator("nejakyTvujLokator")
    this.neboNecoTakoveho = page.getByText("Neco takoveho")
  }

  async visit() {
    await this.page.goto("/loading.html");
  }
}