import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import { LoggedinService } from '../service/loggedin.service';
import { ApiService } from '../service/api.service';
import { SearchService } from '../service/search.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderidentifierService } from '../service/headeridentifier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  show:any;
  constructor(private headerid: HeaderidentifierService ,public auth:LoggedinService, private search: SearchService, private router: Router, private toastr:ToastrService){}
   searchValue:string='';
   
   ngOnInit(): void {
       this.show=this.headerid.IsProductPage();
       console.log("show",this.show)
   }
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
    this.router.navigate(['/login']);
    this.toastr.success('Logged out successfully');
   }
}
























 