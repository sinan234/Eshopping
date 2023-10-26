import { Component, OnInit } from '@angular/core';
import { Onenrollservice } from '../service/buy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoggedinService } from '../service/loggedin.service';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs';
import { filter } from 'rxjs';
import { FormGroup, FormControl,Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit  {

  title:string='Javascript';
  userToken: string='';
  user: any;
  sub:any;
  onEnroll(){
    const enroll=new Onenrollservice();
    enroll.onEnroll(this.title);
  }


  constructor(
   
  ) {}


  signupForm:any;
  ngOnInit(): void {
      this.signupForm=new FormGroup({
         'fname': new FormControl(null,[Validators.required,Validators.minLength(3)]),
         'lname': new FormControl(null,[Validators.required,Validators.minLength(3)]),
      });

    // const myObservable = Observable.create((observer:any) => {
    //   let count = 0;
    
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //     if(count==4){
    //       observer.complete();
    //     }
    //     if(count>5){
    //       observer.error(new Error("Count greater than 5"))
    //     }
    //   });
    //   }, 1000);

    // this.sub=myObservable.pipe(filter((data:any)=>
    // {return data >0;})).subscribe((data:any)=>{
    //   console.log(data)
    // },(err:any)=>{
    //   console.log("error occured" , err)
    // },()=>{
    //   console.log("completed")
    // })



  }
  onsubmit(){
    console.log(this.signupForm.value);
  }
}


