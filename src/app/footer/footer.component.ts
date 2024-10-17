import { Component, OnInit } from '@angular/core';
import { __extends } from 'tslib';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Router } from '@angular/router';
import { ContactUs } from 'src/models/contactUs.model';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: '.footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(public shared : SharedService,private router : Router,private http: HttpClient) {}
  Contact : ContactUs = {
    idContactUs: 0,
    name:"",
    email:"",
    description:""
  }

  showSuccessfulAlert: boolean = false;
  showfailedAlert: boolean = false;
  public sendEmail(e: Event) {
    this.shared.addContactUs(this.Contact)
    .subscribe({
      next: (x) => {
        console.log(x);
      },
      error: (response) => {
        console.log(response);
      }
    })
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    emailjs.sendForm('service_4zzaebi', 'template_6fa3oe9',e.target as HTMLFormElement,'ej8hk_8b1Fv8H37E-' )
    .then(() => {
      this.showSuccessfulAlert= true;
      setTimeout(() => {
        this.showSuccessfulAlert= false;
        form.reset();
      }, 1500);

    }, (error) => {
      this.showfailedAlert=true;
      setTimeout(() => {
        this.showfailedAlert= false;
      }, 1500);

      console.log('Error sending email:', error);
    });
}
  ngOnInit(): void {

  }

}
