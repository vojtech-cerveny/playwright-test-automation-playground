import { Locator, Page, expect } from "@playwright/test";

export class HoverPage {
  readonly page: Page;

  readonly necoNeco: Locator;
  readonly animalCard: Locator;
  readonly catCard: Locator;
  readonly dogCard: Locator;
  readonly unicornCard: Locator;
  readonly catCardTitle: Locator;
  readonly catCardText: Locator;
  readonly dogCardTitle: Locator;
  readonly dogCardText: Locator;
  readonly unicornCardTitle: Locator;
  readonly unicornCardText: Locator;

  constructor(page: Page) {
    this.page = page;

    this.animalCard = page.locator(".card-img-top")
    this.catCard = page.getByAltText("Kočka")
    this.dogCard = page.getByAltText("Pes")
    this.unicornCard = page.getByAltText("Jednorožec")
    this.catCardTitle = page.getByText("Kočka")
    this.catCardText = page.getByText("A jaké krásné očička má!")
    this.dogCardTitle = page.getByText("Pes")
    this.dogCardText = page.getByText("A jak je heboučký!")
    this.unicornCardTitle = page.getByText("Jednorožec")
    this.unicornCardText = page.getByText("A jak je husťácký!")
    
    
  }

  async visit() {
    await this.page.goto("/hover.html");
  }
}