import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productservice } from '../service/products.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productid:any;
  product:any;
  products:any;
  constructor(private service:Productservice , private activatedroute:ActivatedRoute) { }
   
   
   ngOnInit(){
    this.productid=this.activatedroute.snapshot.paramMap.get('id');
    this.product=this.service.product.find(x=> x.Product_ID==this.productid)
    this.products=this.service.product;
    console.log(this.products)
  }

}




