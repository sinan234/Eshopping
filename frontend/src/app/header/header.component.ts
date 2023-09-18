import { Component,EventEmitter,Output } from '@angular/core';
import { LoggedinService } from '../service/loggedin.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private auth:LoggedinService){}
   searchValue:string='';

  //  changeSearchValue(eventData:Event){
  //    this.searchValue=(<HTMLInputElement>eventData.target).value;
  //  }

   @Output()
   Searchtextchanged: EventEmitter<string>=new EventEmitter<string>();

   onSearchtextchanged(){
    this.Searchtextchanged.emit(this.searchValue);
   
   }
   login(){
    this.auth.login();
    
   }
   logout(){
    this.auth.logout();
   }
}
























 