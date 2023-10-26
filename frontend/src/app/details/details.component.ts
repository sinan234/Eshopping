import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productservice } from '../service/products.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  productid:any;
  product:any;
  display:boolean=false;
  token:any;
  msg:string="";
    constructor(private activatedroute:ActivatedRoute, private service:Productservice, private http:HttpClient) { }
    
    ngOnInit(): void {
      this.productid=this.activatedroute.snapshot.paramMap.get('id');
      this.product=this.service.product.find(x=> x.Product_ID==this.productid)
      console.log(this.product)
    }
    clicked(){
      this.display=false;
    } 
    wishlist() {
      this.token=localStorage.getItem('token');
      console.log("wishlist button clicked");
      this.display = true;
      const wishlist = {
        product_name: this.product.Name,
        product_available: this.product.availbale,
        product_price: this.product.Price,
        product_image: this.product.Thumbnail,
        product_id: this.product.Product_ID
      };
      const headers = {
        'Authorization': 'Bearer ' + this.token
      };
      this.http.post('http://localhost:3000/create_wishlist', wishlist,{headers}).subscribe((res: any) => {
        console.log("product added successfully");
        console.log(res);
        // this.msg = res.message;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1500
        })
      }, (error: any) => {
        console.log("error occurred");
        console.log(error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.message,
          showConfirmButton: false,
          timer: 1500
        })
        // this.msg = error.error.message;
      });
      console.log("added to wishlist");
    }

    addCart(){
      const cart={product_id:this.product.Product_ID}
      this.http.post('http://localhost:3000/addToCart', cart )
      .subscribe((res:any)=>{
        console.log("added to cart");
        console.log(res);
        // this.msg=res.message;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1500
        })
        // this.display=true;
      },(error:any)=>{
        // this.display=true;
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.message,
          showConfirmButton: false,
          timer: 1500
        })
        // this.msg=error.error.message;
        console.log("error occurred");  
      })}
  }
