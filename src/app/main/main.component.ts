import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public shared : SharedService) {
  }
  getpage(){
    window.location.href = './cv-style';
  }
  ngOnInit(): void {
    Aos.init();
    this.shared.getAllEmails().subscribe({
      next :(a)=> {
        this.shared.Emails=a;
      }
    })
    this.shared.getAllPhoneNumbers().subscribe({
      next :(a)=> {
        this.shared.PhoneNumbers=a;
        console.log(a);
      }
    })
  }
}
