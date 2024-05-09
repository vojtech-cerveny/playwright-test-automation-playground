import { Locator, Page, expect } from "@playwright/test";

export class CatsPage {
  readonly page: Page;
  readonly navigationBar: string;
  readonly header: Locator;

  readonly addCatButton: Locator;
  readonly removeCaButton: Locator;
  readonly apocalypseButton: Locator;

  readonly catCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = "nav";
    this.header = page.getByRole("heading", { name: "Tlačítka" });

    // OH! Fill this! Check the HTML and fill the selectors. Use whatever selector you want.
    this.addCatButton;
    this.removeCaButton;
    this.apocalypseButton;
    this.catCards;
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
