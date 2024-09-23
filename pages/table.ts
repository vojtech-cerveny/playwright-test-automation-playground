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
    this.awesomnessLVLunicorn = page.getByText("Jednorožec").locator("..").locator('td[data-table="lvl-awesomeness"]')
    //this.awesomnessLVLunicorn = page.locator("body > div > table > tbody > tr:nth-child(7) > td:nth-child(3)")
    this.awesomnessLVLorangutan = page.getByText("Orangutan").locator("..").locator('td[data-table="lvl-awesomeness"]')
    this.softnessOfTheFoxFur = page.getByText("Liška").locator("..").locator('td[data-table="softness"]') 
    this.whaleSize = page.getByText("Velryba").locator("..").locator('td[data-table="size"]')
  }

  async visit() {
    await this.page.goto("/table.html");
  }
}
