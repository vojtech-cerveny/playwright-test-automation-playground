import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly necoNeco: Locator;
  readonly LoginButton: Locator;
  readonly UsernameInput: Locator;
  readonly PasswordInput: Locator;
  readonly LoggedParagraph: Locator;
  readonly errorFeedback: Locator;
  readonly allertSuccess: Locator;

  constructor(page: Page) {
    this.page = page;

    this.necoNeco = page.locator("nejakyTvujLokator")
    this.LoginButton = page.getByText("Log in!")
    this.UsernameInput = page.locator("#login-username")
    this.PasswordInput = page.locator("#login-password")
    this.LoggedParagraph = page.getByText("LOGGED!")
    this.errorFeedback = page.locator("div.alert-danger")
    this.allertSuccess = page.locator("div.alert-success")
    
  }

  async visit() {
    await this.page.goto("/login.html");
  }
}