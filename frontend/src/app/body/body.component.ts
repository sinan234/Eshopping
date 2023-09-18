import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  constructor(private router: Router) { }

    button:string='Click here';
    buttonClicked: boolean = false;
    
    @Input() search:string='';
     
    searchn:string='';
     
   onvalue(data:string){
      this.searchn=data;
      console.log(this.searchn)
    }

    // click() {
    //   this.router.navigate(['products'], { queryParams: { search: this.searchn } });
    //   console.log("clicked");
    // }
    
    hi:boolean=false
    hiClicked(){
        this.hi=true;
        console.log(this.hi)
    }
  }