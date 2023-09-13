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
import { RouterModule, Routes } from '@angular/router';

const appRoute:Routes=[
  {path:'home', component: BodyComponent},
  {path:'About', component: Sample1Component},
  {path:'Products', component: ProductComponent},
  {path:'Contact', component: ProductComponent}
]

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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
