import { Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  searchtext:string='';
  
  onsearchtextchange(data:string){
      this.searchtext=data;
      console.log(this.searchtext)
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
