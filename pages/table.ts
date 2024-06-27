import { Locator, Page, expect } from "@playwright/test";

export class TablePage {
  readonly page: Page;

  readonly table: Locator;
  readonly tableRows: Locator;
  readonly awesomnessLVLunicorn: Locator;
  readonly awesomnessLVLorangutan: Locator;
  readonly softnessOfTheFoxFur: Locator;
  readonly whaleSize: Locator;


  constructor(page: Page) {
    this.page = page;

    this.table = page.getByRole("table")
    this.tableRows = page.locator('[scope="row"]')
    this.awesomnessLVLunicorn = page.locator("body > div > table > tbody > tr:nth-child(7) > td:nth-child(3)")
    this.awesomnessLVLorangutan = page.locator("body > div > table > tbody > tr:nth-child(3) > td:nth-child(3)")
    this.softnessOfTheFoxFur = page.locator("body > div > table > tbody > tr:nth-child(5) > td:nth-child(5)") 
    this.whaleSize = page.locator("body > div > table > tbody > tr:nth-child(4) > td:nth-child(4)")
  }

  async visit() {
    await this.page.goto("/table.html");
  }
}