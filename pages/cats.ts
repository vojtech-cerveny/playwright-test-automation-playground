import { Locator, Page, expect } from "@playwright/test";

export class CatsPage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;

  readonly addCatButton: Locator;
  readonly removeCatButton: Locator;
  readonly apocalypseButton: Locator;

  readonly catCards: Locator;
  readonly counter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Tlačítka" });

    // OH! Fill this! Check the HTML and fill the selectors. Use whatever selector you want.
    this.addCatButton = page.locator("#addItem");
    this.removeCatButton = page.locator("#removeItem");
    this.apocalypseButton = page.locator("#removeAll");
    this.catCards = page.getByAltText("Kočka");
    this.counter = page.locator("#counter");
  }

  async visit() {
    await this.page.goto("/adding.html");
  }

  // or you can use expext(pages.catPage.catCards).toHaveCount(3)
  // or different number
  getCountOfCatCards = async () => {
    return await this.catCards.count();
  };
}
