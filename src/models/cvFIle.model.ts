import { Account } from "./account.model";

export interface CvFile {
  idCvFile: number;
  photoData: string;
  pdfData: string;
  accountId: Account;
}
