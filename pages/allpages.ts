import { Page } from "@playwright/test";
import { ButtonPage } from "./buttons";
import { LoginPage } from "./login";
import { SelectorsPage} from "./selectors";
import { CatsPage } from "./cats";
import { FindFoxPage} from "./findfox";
import { HoverPage} from "./hover";
import { TablePage} from "./table";
import { InputsPage} from "./inputs";
import { ModalPage} from "./modal";
import {LoadingPage} from "./loading";


export class AllPages {
  readonly buttonPage: ButtonPage;
  readonly loginPage: LoginPage;
  readonly selectorsPage: SelectorsPage;
  readonly catsPage: CatsPage;
  readonly page: Page;
  readonly findFoxPage: FindFoxPage;
  readonly hoverPage: HoverPage;
  readonly tablePage: TablePage;
  readonly inputsPage: InputsPage;
  readonly modalPage: ModalPage;
  readonly loadingPage: LoadingPage;

  constructor(page: Page) {
    this.page = page;
    this.buttonPage = new ButtonPage(page);
    this.loginPage = new LoginPage(page);
    this.selectorsPage = new SelectorsPage(page);
    this.catsPage = new CatsPage(page);
    this.tablePage = new TablePage(page);
    this.findFoxPage = new FindFoxPage(page);
    this.hoverPage = new HoverPage(page);
    this.inputsPage = new InputsPage(page);
    this.modalPage = new ModalPage(page);
    this.loadingPage = new LoadingPage(page);
  }

  async visit(url: string) {
    await this.page.goto(url);
  }
}
