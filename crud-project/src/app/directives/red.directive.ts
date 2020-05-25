import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]' //nome do atributo adicionado em uma tag html
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b' //Cor que será adicionado na tag que tiver o atributo appRed
  }

}
