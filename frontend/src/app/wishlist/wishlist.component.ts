import { Component ,OnInit} from '@angular/core';
import { Productservice } from '../service/products.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  constructor(private productservice:Productservice){}
  wishlist:any;
  ngOnInit(){
    this.wishlist=this.productservice.product;
    console.log(this.wishlist);
  }
 
}
