import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpayment',
  templateUrl: './adminpayment.component.html',
  styleUrls: ['./adminpayment.component.css']
})
export class AdminpaymentComponent implements OnInit{
  payment:any[]=[];
 time=new Date()
day=this.time.getDate();
    constructor(private http:HttpClient){}
    ngOnInit(): void {
      this.http.get('http://localhost:3000/admin/getpaymentdetails')
      .subscribe((res:any)=>{
        this.payment=res.payment;
        console.log(this.payment)
      },(err:any)=>{
        console.log("error occured" , err)
      })
    }
}
