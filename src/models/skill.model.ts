import { Account } from "./account.model";

export interface Skill {
  idSkill: number;
  skillTitle: string;
  account: Account;
}
