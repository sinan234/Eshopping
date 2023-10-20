import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  products:any[]=[];
  search:string=''
constructor(private http:HttpClient, private router:Router, private toastr:ToastrService){

}
getProduct(){
  this.http.get('http://localhost:3000/admin/getproducts')
  .subscribe((res:any)=>{
    this.products=res
    console.log(this.products)
  }, (err:any)=>{
    console.log("error from server", err)
  })
}
ngOnInit(): void {
  this.getProduct();
  console.log(this.search)
}

delete(id:any){
  console.log(id)
  confirm("Are you sure you want to delete the product")
  const productid=id;
  this.http.delete('http://localhost:3000/admin/removeproduct', {body:{productid}})
  .subscribe((res:any)=>{
    console.log(res)
    this.getProduct()
  }, (err:any)=>{
    console.log("error occured", err)
  })
}
logout(){
  this.toastr.success("Logout successful");
  localStorage.removeItem('admintoken')
  this.router.navigate(['admin','login'])
}

edit(id:any){
  const Product_Id=id
  confirm("Are you sure you want to edit the product");
  this.router.navigate(['admin', 'login', 'home', 'editproducts'],
  {queryParams: {Product_Id} })
}
}
