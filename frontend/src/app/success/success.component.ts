import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  amount:any;
  paymentId:any;
  constructor(private router:Router, private route:ActivatedRoute, private http:HttpClient) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
       this.amount = params['amount'];
        this.paymentId = params['paymentId'];
    });
  }
}
