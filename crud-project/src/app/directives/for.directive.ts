import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]' //nome do atributo adicionado em uma tag html
})
export class ForDirective implements OnInit { //OnInit - termo de inicialização da diretiva


  @Input('myForEm') numbers: number[];

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {
  }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }

}
