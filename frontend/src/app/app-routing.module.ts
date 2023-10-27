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
import { LoaderComponent } from './loader/loader.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { OrdersComponent } from './orders/orders.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {path:'', component: BodyComponent}
  { path: 'home', component: BodyComponent },
  { path: 'about', component: AboutComponent },
  // {
  //   path: 'login/products',
  //   component: ProductComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     { path: 'buy/:id', component: ProductdetailsComponent },
  //     { path: 'details/:id', component: DetailsComponent }
  //   ]
  // }
  // ,
  {
    path: 'login/products',
    component: ProductComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login/products/buy/:id', component: ProductdetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'login/cart',
    component: ProductdetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login/wishlist',
    component: WishlistComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login/sample', component: Sample1Component },
  { path: 'loader', component: LoaderComponent },
  { path: 'test', component: Sample1Component },
  {
    path: 'login/cart/checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login/products/details/:id',
    component: DetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login/orders',
    component: OrdersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login/products/buy/:id/checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login/products/buy/checkout/success',
    component: SuccessComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
