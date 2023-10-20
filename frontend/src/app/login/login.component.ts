import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoggedinService } from '../service/loggedin.service';
import { ToastrService } from 'ngx-toastr';
import axios from 'axios';
import { UsernameService } from '../service/username.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private name:UsernameService,
    private service: LoggedinService,
    private router: Router,
    private route: ActivatedRoute,
    private cookie: CookieService,
  ) {}

  email: string = '';
  password: string = '';
  loader: boolean = false;
  username:string=''
  msg: string = 'User already exists';
  logindisplay: boolean = false;

  clicked() {
    this.logindisplay = false;
  }

  sub() {
    setTimeout(() => {
      this.logindisplay = false;
    }, 2000);
  }

  sessiontime(cookie: any) {
    const sessionend= cookie.sessionEnd;
    const currentTime = new Date().getTime();
    const remainingTime = sessionend - currentTime;
    setTimeout(() => {
      this.service.logout();
      this.toastr.warning("Session ended, Please login to continue")
      this.router.navigate(['login']);
    },remainingTime);
  }
  onsubmit(form: NgForm) {
    this.sub();
    if (this.email.length === 0 || this.password.length === 0) {
      this.msg = 'All fields are required';
      this.logindisplay = true;
      return;
    }

    console.log('onsubmit method called');
    console.log(form.value);

    const user = { email: this.email, password: this.password };
    if (this.email.length == 0 || this.password.length == 0) {
      this.msg = 'All fields are required';
      this.logindisplay = true;
      return;
    }

    this.http.post('http://localhost:3000/login', user).subscribe(
      (response: any) => {
        console.log(response);
      if(response.message=='Authentication successful'){
        this.toastr.success('Login successful');
        this.username=response.name

        console.log("USER NAME",this.username);
        this.name.setUserName(this.username);

      }
       else{ 
        this.logindisplay = true;
        this.msg = response.message;
       }
        localStorage.setItem('token', response.cookie.token);
        
        if (response) {
          console.log('Received cookie:', response.cookie);
          this.sessiontime(response.cookie);
          setTimeout(() => {
            this.router.navigate(['products'], {
              relativeTo: this.route,
              // queryParams: { userToken: JSON.stringify(response.cookie) },
            });
          }, 3000);
        }
        form.reset();
        console.log(this.msg);
      },
      (error: any) => {
        console.log('login failed');
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
