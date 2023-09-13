import { Component,ElementRef,ViewChild } from '@angular/core';
import { SearchService } from './service/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private searchService: SearchService) {}

  title = 'test';

  searchtext:string='';
  
  onsearchtextchange(data:string){
      this.searchtext=data;
      this.searchService.setSearchValue(this.searchtext);
     
  }

  @ViewChild('dob') dateofbirth?: ElementRef;
  @ViewChild('age') agenew?: ElementRef;

  calculateage(){
    let birthyear=new Date(this.dateofbirth?.nativeElement.value).getFullYear();
    let curryear=new Date().getFullYear();
    let age=curryear-birthyear;
    console.log(age)
    // this.agenew?.nativeElement.value=age;
  }
}
