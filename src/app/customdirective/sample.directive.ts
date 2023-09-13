import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective implements OnInit{

  constructor(private element:ElementRef , private renderer:Renderer2) {

   }

   ngOnInit() {
      this.renderer.setStyle(this.element.nativeElement , 'backgroundColor' ,'#FFFF00	')     
   }

}
