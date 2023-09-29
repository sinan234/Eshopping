import { NgModule } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
// import { Productguard } from './service/productguard.service';
import { SignupComponent } from './signup/signup.component';
import { LoggedinService } from './service/loggedin.service';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { Sample1Component } from './sample1/sample1.component';
import { AuthGuard } from './service/auth.guard';
import { TestComponent } from './test/test.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenvalidationService } from './service/tokenvalidation.service';

const appRoute:Routes=[
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'', component: BodyComponent}
,  {path:'home', component: BodyComponent},
  {path:'about', component: AboutComponent},
  {path:'products', component: ProductComponent , canActivate:[AuthGuard]},
  // {path:'products/:id', component: ProductdetailsComponent, canActivate:[Productguard]},
  {path:'products/:id', component: ProductdetailsComponent},
  {path:'contact', component: ContactComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'special' , component:TestComponent, canActivate:[AuthGuard]},
  {path:'wishlist', component:WishlistComponent ,  canActivate:[AuthGuard] },
  {path: "login/sample" , component: Sample1Component},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
