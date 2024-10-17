import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from 'src/models/account.model';
import { AdminAddress } from 'src/models/adminAddress.model.';
import { AdminEmail } from 'src/models/adminEmail.model';
import { AdminPhoneNumber } from 'src/models/adminPhoneNumber.model';
import { ContactUs } from 'src/models/contactUs.model';
import { CvFile } from 'src/models/cvFIle.model';
import { Language } from 'src/models/language.model';
import { Skill } from 'src/models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseApiUrl : string = environment.baseApiUrl;
  constructor(private http : HttpClient,private router : Router) { }
  AccountConnected : Account = {
    idAccount: 0,
    firstName: "" ,
    lastName: "" ,
    email: "",
    password: ""
  }
  IsCreated : boolean = false;
  Emails : String[] =[];
  PhoneNumbers : String[] =[];
  downloadPDF(): void {
    // Call the API to download the PDF file
    this.DownloadPdf(this.AccountConnected.idAccount)
      .subscribe((pdfData: string) => {
        const pdfBlob = new Blob([pdfData], { type: 'application/pdf' });

        const downloadUrl = URL.createObjectURL(pdfBlob);

        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'document.pdf';

        link.style.display = 'none'; // Hide the anchor element

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(downloadUrl);
      });
  }
  loGout(){
    this.AccountConnected  = {
      idAccount: 0,
      firstName: "" ,
      lastName: "" ,
      email: "",
      password: ""
    }
  }

  addSkill(skill: Skill ) : Observable<Skill> {
    return this.http.post<Skill>(this.baseApiUrl + '/Skill/add', skill);
  }

  addLanguage(language: Language ) : Observable<Language> {
    return this.http.post<Language>(this.baseApiUrl + '/Language/add', language);
  }


  testAccountConnected(email: string, password: string ) : Observable<boolean> {
    return this.http.get<boolean>(this.baseApiUrl + '/testLogin/'+email+'/'+password);
  }

  isCreated(id : number) : Observable<boolean> {
    return this.http.get<boolean>(this.baseApiUrl + '/isCreated/'+id);
  }

  DownloadPdf(id : number) : Observable<string> {
    return this.http.get<string>(this.baseApiUrl + '/PdfData/'+id);
  }

  getAccountConnected(email: string, password: string ) : Observable<Account> {
    return this.http.get<Account>(this.baseApiUrl + '/Login/'+email+'/'+password);
  }

  addAccount(account: Account ) : Observable<boolean> {
    return this.http.post<boolean>(this.baseApiUrl + '/Account/add', account);
  }

  getAllPhoneNumbers() : Observable<string[]> {
    return this.http.get<string[]>(this.baseApiUrl + '/PhoneNumbers');
  }

  getAllEmails() : Observable<string[]> {
    return this.http.get<string[]>(this.baseApiUrl + '/AdminEmails');
  }

  getAllTitles() : Observable<string[]> {
    return this.http.get<string[]>(this.baseApiUrl + '/CvStyle/Titles');
  }




  getAllDescriptions() : Observable<string[]> {
    return this.http.get<string[]>(this.baseApiUrl + '/CvStyle/Descriptions');
  }

  getAllImages() : Observable<string[]> {
    return this.http.get<string[]>(this.baseApiUrl + '/CvStyle/Images');
  }

  getAdminEmails() : Observable<AdminEmail[]> {
    return this.http.get<AdminEmail[]>(this.baseApiUrl + '/CvStyle/Images');
  }

  getAdminPhoneNumbers() : Observable<AdminPhoneNumber[]> {
    return this.http.get<AdminPhoneNumber[]>(this.baseApiUrl + '/CvStyle/Images');
  }

  getAdminAddresses() : Observable<AdminAddress[]> {
    return this.http.get<AdminAddress[]>(this.baseApiUrl + '/CvStyle/Images');
  }

  getAllCvs(account : number) : Observable<string[]> {
    return this.http.get<string[]>(this.baseApiUrl + '/AllCvs/'+account);
  }

  getCvs(account : number, skillTitle : string) : Observable<string[]> {
    return this.http.get<string[]>(this.baseApiUrl + '/Cvs/'+account+'/'+skillTitle);
  }

  addContactUs(ContactUs: ContactUs ) : Observable<ContactUs> {
    return this.http.post<ContactUs>(this.baseApiUrl + '/ContactUs/add', ContactUs);
  }

  addCv(cvFile: CvFile ) : Observable<CvFile> {
    return this.http.post<CvFile>(this.baseApiUrl + '/CvFile/add', cvFile);
  }




}

