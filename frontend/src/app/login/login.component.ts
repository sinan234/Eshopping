import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http:HttpClient){}
  email:string='';
  password:string='';
  msg:string='';
  logindisplay:boolean=false;
  
 clicked(){
  this.logindisplay=false;
 }


 onsubmit(form: NgForm) {
  if (this.email.length === 0 || this.password.length === 0) {
    this.msg = 'All fields are required';
    this.logindisplay = true;
    return;
  }

  console.log("onsubmit method called");
  console.log(form.value);

  const user = { email: this.email, password: this.password };
  this.logindisplay = true;

  this.http.post('http://localhost:3000/login', user)
    .subscribe(
      (response: any) => {
        console.log(response);
        this.msg = response.message;
        form.reset();
        console.log(this.msg);
      },
      (error: any) => {
        console.log("login failed");
        console.log(error);
        if (error.error && error.error.message) {
          this.msg = error.error.message;
        } else {
          this.msg = 'Unknown error occurred';
        }
      }
    );
}

}
