import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminAuthGuard } from './service/adminauth.guard';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';

const routes: Routes = [
  { path: 'admin/login', component: AdminloginComponent },
  {
    path: 'admin/login/home',
    component: AdminhomeComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'admin/login/home/addproduct',
    component: AddproductComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'admin/login/home/editproducts',
    component: EditproductsComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'admin/login/home/paymentdetails',
    component: AdminpaymentComponent,
    canActivate: [AdminAuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminAuthGuard],
})
export class AdminRoutingModule {}
