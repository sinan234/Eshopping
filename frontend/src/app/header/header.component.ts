import { Component,EventEmitter,Output } from '@angular/core';
import { LoggedinService } from '../service/loggedin.service';
import { ApiService } from '../service/api.service';
import { SearchService } from '../service/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(public auth:LoggedinService, private search: SearchService, private router: Router){}
   searchValue:string='';

  //  changeSearchValue(eventData:Event){
  //    this.searchValue=(<HTMLInputElement>eventData.target).value;
  //  }

   @Output()
   Searchtextchanged: EventEmitter<string>=new EventEmitter<string>();

   onSearchtextchanged(){
    this.Searchtextchanged.emit(this.searchValue);
    this.search.setSearchValue(this.searchValue);
   
   }
   login(){
    this.auth.login();
    
   }
   logout(){
    this.auth.logout();
    this.router.navigate(['/home']);
   }
}
























 