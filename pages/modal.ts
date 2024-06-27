import { Locator, Page, expect } from "@playwright/test";

export class ModalPage {
  readonly page: Page;

  readonly necoNeco: Locator;
  readonly odhalMiTajemstvi: Locator;
  readonly modalWindow: Locator;
  readonly buttonSkryj: Locator;
  readonly cross: Locator;
  readonly greyMask: Locator;

  constructor(page: Page) {
    this.page = page;

    this.necoNeco = page.locator("nejakyTvujLokator")
    this.odhalMiTajemstvi = page.getByText("Odhal mi tajemství!")
    this.modalWindow = page.locator(".modal-content")
    this.buttonSkryj = page.getByRole('button',{name: 'Skryj tajemství o jednorožci'})
    this.cross = page.locator(".close")
    this.greyMask = page.locator(".modal-dialog")
  }

  async visit() {
    await this.page.goto("/modal.html");
  }
}