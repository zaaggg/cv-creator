import { Account } from "./account.model";

export interface Language {
  idLanguage: number;
  languageTitle: string;
  account: Account;
}
