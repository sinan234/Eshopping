import { NgModule } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { Productguard } from './service/productguard.service';

const appRoute:Routes=[
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'', component: BodyComponent}
,  {path:'home', component: BodyComponent},
  {path:'about', component: AboutComponent},
  {path:'products', component: ProductComponent},
  {path:'products/:id', component: ProductdetailsComponent, canActivate:[Productguard]},
  {path:'contact', component: ContactComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
  providers: [Productguard]
})
export class AppRoutingModule { }
