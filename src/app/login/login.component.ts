import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public shared : SharedService,private router : Router,private http: HttpClient) { }
  errorMessage : string = "";
  loginEmail : string = "";
  loginPassword : string = "";
  login(){
    this.shared.testAccountConnected(this.loginEmail,this.loginPassword)
    .subscribe({
      next: (x) => {
        if(x==true){
          this.shared.getAccountConnected(this.loginEmail,this.loginPassword).
          subscribe({
            next: (account) => {
              this.shared.AccountConnected=account;
              this.shared.isCreated(this.shared.AccountConnected.idAccount).subscribe({
                next: (x) => {
                  this.shared.IsCreated=x;
                }, error : (err) => {
                  console.log(err)
                }
              })
              this.router.navigate(['/main']);
              console.log(this.shared.AccountConnected);
          },
          error: (response) => {
            console.log(response);
          }
        })
        }else{
          this.errorMessage="email or password is incorrect"
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
      window.location.href = './create-acc';
    });
  }

}
