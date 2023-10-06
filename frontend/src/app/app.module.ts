import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { TestComponent } from './test/test.component';
import { SampleDirective } from './customdirective/sample.directive';
import { ClickeventDirective } from './customdirective/clickevent.directive';
import { HighlightDirective } from './customdirective/highlight.directive';
import { IfcaseDirective } from './customdirective/ifcase.directive';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ButtonstyleDirective } from './customdirective/buttonstyle.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './service/auth.guard';
import { TokenvalidationService } from './service/tokenvalidation.service';
import { CookieService } from 'ngx-cookie-service';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    BodyComponent,
         ProductComponent,
         FilterComponent,
         TestComponent,
         SampleDirective,
         ClickeventDirective,
         HighlightDirective,
         IfcaseDirective,
         Sample1Component,
         Sample2Component,
         ContactComponent,
         AboutComponent,
         ProductdetailsComponent,
         SignupComponent,
         LoginComponent,
         WishlistComponent,
         ButtonstyleDirective,
         LoaderComponent,
         FooterComponent,
         DetailsComponent
         
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenvalidationService,
    multi: true
  },CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
