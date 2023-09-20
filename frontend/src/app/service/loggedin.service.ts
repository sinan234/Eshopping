import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedinService {

  constructor() { }

  loggedin:boolean=false;
  login(){
    this.loggedin=true;
  }
  logout(){ 
    this.loggedin=false;
  }

  IsAuth(){
    
    return this.loggedin;
  }
}
