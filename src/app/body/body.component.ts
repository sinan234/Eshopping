import { Component,Input } from '@angular/core';
 
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
    button:string='Click here';
    buttonClicked: boolean = false;
    
    @Input() search:string='';
     
    searchn:string='';
     
   onvalue(data:string){
      this.searchn=data;
      console.log(this.searchn)
    }
    
    hi:boolean=false
    hiClicked(){
        this.hi=true;
        console.log(this.hi)
    }
  }