import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productservice } from '../service/products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit, DoCheck {
  productid:any;
  productprice:number=0;
  itemcount:number=1;
  product:any;
  msg:string="";
  display:boolean=false;
  products:any;
  constructor(private service:Productservice , private activatedroute:ActivatedRoute, private http:HttpClient) { }
  
  ngDoCheck(): void {
    this.productprice=this.itemcount*this.product.Price;
  }
   
   ngOnInit(){
    this.productid=this.activatedroute.snapshot.paramMap.get('id');
    this.product=this.service.product.find(x=> x.Product_ID==this.productid)
    this.products=this.service.product;
    console.log(this.product)
  }
  clicked(){
    this.display=false;
  }


  wishlist() {
    console.log("wishlist button clicked");
    this.display = true;
    const wishlist = {
      product_name: this.product.Name,
      product_available: this.product.availbale,
      product_price: this.product.Price,
      product_image: this.product.Thumbnail,
      product_id: this.product.Product_ID
    };
    this.http.post('http://localhost:3000/create_wishlist', wishlist).subscribe((res: any) => {
      console.log("product added successfully");
      console.log(res);
      this.msg = res.message;
    }, (error: any) => {
      console.log("error occurred");
      console.log(error);
      this.msg = error.error.message; // Update the error message in the frontend
    });
    console.log("added to wishlist");
  }
}




