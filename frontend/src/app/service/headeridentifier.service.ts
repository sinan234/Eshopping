import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderidentifierService {
 
  constructor() { }
  IsProductPage(){
    if (window.location.pathname == '/login/products') {
      return true;
    }
    return false;
  }
  
}
