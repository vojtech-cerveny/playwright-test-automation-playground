import { Locator, Page, expect } from "@playwright/test";

export class SelectorsPage {
  readonly page: Page;

  readonly elementByData: Locator;
  readonly elementIdZapletka: Locator;
  readonly elementInteresting: Locator;
  readonly elementPicture: Locator;
  readonly elementIdZapletkaXPath: Locator;
  readonly elementInterestingXPath: Locator;
  readonly paragraph: Locator;
  readonly like: Locator;
  readonly likeCounter: Locator;

  constructor(page: Page) {
    this.page = page;

    this.elementByData = page.getByTestId("selector-by-dataQA");
    this.elementIdZapletka = page.locator("#zapletka");
    this.elementInteresting = page.locator(".this-is-interesting-paragraph");
    this.elementPicture = page.locator("img");
    this.paragraph = page.locator("p");
    this.like = page.getByText("Dej like!");
    this.likeCounter = page.locator("#lvlAwesome");
  }

  async visit() {
    await this.page.goto("/selectors.html");
  }
}
