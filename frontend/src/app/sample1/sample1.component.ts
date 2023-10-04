import { Component, OnInit } from '@angular/core';
import { Onenrollservice } from '../service/buy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoggedinService } from '../service/loggedin.service';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit  {

  title:string='Javascript';
  userToken: string='';
  user: any;
  
  onEnroll(){
    const enroll=new Onenrollservice();
    enroll.onEnroll(this.title);
  }
  

  constructor(
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private logservice:LoggedinService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const userToken = params['userToken'];  
      console.log('User Token:', userToken);
      // Retrieve the cookie value from the userToken parameter
      const cookieValue = JSON.parse(userToken);
  
      // Access the user credentials from the cookie value
      const token = cookieValue.token;
      const sessionIndicator = cookieValue.sessionIndicator;
      const sessionend=cookieValue.sessionEnd;
      // Display the user credentials
      console.log('Token:', token);
      console.log('Session Indicator:', sessionIndicator);
      console.log('Session End:', sessionend);

      const currentTime = new Date().getTime();
    const remainingTime = sessionend - currentTime;

    // Set a timer to call the logout method when the session expires
    setTimeout(() => {
      this.logservice.logout();
      this.router.navigate(['login']);
    }, remainingTime);
    });
  }

}


