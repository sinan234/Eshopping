import { Component,Input, EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Input() text:string=''
  
  // @Output()
  // emitsearch :EventEmitter <string>=new EventEmitter<string>();
  onsubmit(inputEl:HTMLInputElement){
    // this.emitsearch.emit(this.text);
    this.text=inputEl.value;
    console.log(this.text)
  }
}
