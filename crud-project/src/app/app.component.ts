import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Nome da tag do componente
  templateUrl: 'app.component.html'
})
export class AppComponent {
  project = 'crud-project'; //Objeto que pode ser implementado em um mustache no html.
}
