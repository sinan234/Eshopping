import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productservice } from '../service/products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit, OnChanges {
  productid:any;
  productprice:number=0;
  product:any;
  msg:string="";
  token:any;
  no:number=1;
  length:any;
  display:boolean=false;
  products:any;
  filteredObjects:any;
  empty:boolean=false;
  totalamount:number=0;
  aftership:any;
  constructor(private service:Productservice , private activatedroute:ActivatedRoute, private http:HttpClient) { }
  
  ngOnChanges(): void {
    this.calculateTotal();
  }
  
 
  decrement(item: any) {
    
    if (!item.itemcount) {
      item.itemcount = 1;
    } else {
      item.itemcount = parseInt(item.itemcount) + 1;
      this.calculateTotal();

    }
  }
  
  increment(item: any) {
    
    if (item.itemcount && item.itemcount > 0) {
      item.itemcount = parseInt(item.itemcount) - 1;
      this.calculateTotal();


    }
  }
   
 calculateTotal(){
  this.totalamount=0;
  for(let prod of this.filteredObjects){
    this.totalamount+=prod.Price*prod.itemcount;
    this.aftership=this.totalamount+50;
  }
 }

  getCartProducts(){
    this.http.get('http://localhost:3000/getCart').subscribe((res: any) => {

    console.log("products get from server");
    console.log(res);
    this.products = Object.values(res);
    this.length=this.products.length;
    console.log(this.length);
    this.filteredObjects = this.service.product.filter((product: any) => {
      return this.products.some((newproduct:any) => {
        return product.Product_ID === parseInt(newproduct.product_id);
      });
    });

    if(this.length==0){
        this.empty=true;
    }
    this.calculateTotal();
    console.log(this.filteredObjects);

    
  }, (error: any) => {
    console.log("error occurred");
    console.log(error);
  });

  }
 
  remove(id:number){
    console.log("remove button clicked")
    this.http.delete('http://localhost:3000/removeCart/'+id).subscribe((res: any) => {
      console.log('product deleted from cart');
      console.log(res)
      this.getCartProducts();
      this.calculateTotal();
   } ,(error: any) => {
      console.log('error occured');
      console.log(error);
   });
  }



   ngOnInit(){
    // this.productid=this.activatedroute.snapshot.paramMap.get('id');
    // this.product=this.service.product.find(x=> x.Product_ID==this.productid)
    // this.products=this.service.product;
    // console.log(this.product)
    this.getCartProducts();
  }
clicked(){
  this.display=false;
}
  
 
}




