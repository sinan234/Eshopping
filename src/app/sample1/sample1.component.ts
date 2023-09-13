import { Component } from '@angular/core';
import { Onenrollservice } from '../service/buy.service';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component {

  title:string='Javascript'
  
  onEnroll(){
    const enroll=new Onenrollservice();
    enroll.onEnroll(this.title);
  }
}
