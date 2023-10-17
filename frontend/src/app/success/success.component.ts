import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productservice } from '../service/products.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  amount:any;
  paymentId:any;
  date: Date = new Date();
 day=this.date.getDate();
 month=this.date.getMonth();
 products:any;
 newp:any;
 filteredproducts:any;
  year=this.date.getFullYear();

  constructor(private router:Router,private service:Productservice, private route:ActivatedRoute, private http:HttpClient) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
       this.amount = params['amount'];
        this.paymentId = params['paymentId'];
    });
    this.http.get(`http://localhost:3000/getOrderedProducts?paymentId=${this.paymentId}`)
    .subscribe((res)=>{
      this.products=Object.values(res);
      this.newp=Object.values(this.products[0]);
      console.log("newp",this.newp);
      this.filteredproducts= this.service.product.filter((item)=> {
       return  this.newp.some((element:any) => {
          return item.Product_ID==element.productId;
        }); 
      })
      console.log(this.filteredproducts);
        
    }, (err)=>{
      console.log("error in getting products");
      console.log(err);
    }
    );
  }
}
