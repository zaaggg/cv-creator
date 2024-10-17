import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/models/account.model';

@Component({
  selector: 'create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.css']
})
export class CreateAccComponent implements OnInit {
  invalidEmail ="";
  constructor(public shared : SharedService,private router : Router,private http: HttpClient) { }

  AccountAdded : Account = {
    idAccount: 0,
    firstName: "" ,
    lastName: "" ,
    email: "",
    password: ""
  }

  createAccount(){
    this.shared.addAccount(this.AccountAdded)
    .subscribe({
      next: (x) => {
        if(x==true){
        this.router.navigate(["/login"]);
        }else{
          this.invalidEmail = "Email Already Exists";
        }
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  ngOnInit(): void {
    const btn = document.getElementById('btn');
    btn?.addEventListener('click', function onClick() {
      window.location.href = './login';
    });
  }

}
