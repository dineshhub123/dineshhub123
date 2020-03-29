import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {
  
  constructor(el:ElementRef) { 
  el.nativeElement.style.color="red";

}
}