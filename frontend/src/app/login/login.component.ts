import { HttpClient } from '@angular/common/http';
import { Component, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoggedinService } from '../service/loggedin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http:HttpClient,private service:LoggedinService, private router:Router, private route:ActivatedRoute, private cookie:CookieService){}
  email:string='';
  password:string='';
  msg:string='User already exists';
  logindisplay:boolean=false;
  
 clicked(){
  this.logindisplay=false;
 }

sub(){
  setTimeout(() => {  
    this.logindisplay=false;
  },2000);
}

 onsubmit(form: NgForm) {
  this.sub();
  if (this.email.length === 0 || this.password.length === 0) {
    this.msg = 'All fields are required';
    this.logindisplay = true;
    return;
  }

  console.log("onsubmit method called");
  console.log(form.value);

  const user = { email: this.email, password: this.password };
  if(this.email.length==0 || this.password.length==0 ){
    this.msg='All fields are required';
    this.logindisplay=true;
    return;
  }
  this.logindisplay = true;

  this.http.post('http://localhost:3000/login', user)
    .subscribe(
      (response: any) => {
        console.log(response);
        this.msg = response.message;
        localStorage.setItem('token', response.token);
        
        if(response){
          
          setTimeout(() => {
              this.router.navigate(['sample'],{relativeTo:this.route});
          },3000);
        }
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
