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

  onsubmit(form:NgForm){
    console.log("onsubmit method called");
    console.log(form.value);  
    console.log(this.email);
    const user={email:this.email, password:this.password};
    this.logindisplay=true;
    this.http.post('http://localhost:3000/login', user)
  .subscribe(
    (response: any) => {
      console.log("login successful");
      console.log(response);
      this.msg="Login Successful";
    },
    (error: any) => {
      console.log("login failed");
      console.log(error);
      this.msg="Login Failed";

    }
  );
  }
}
