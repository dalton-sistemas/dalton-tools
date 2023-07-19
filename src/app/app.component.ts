import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home' },
    { label: 'Notas Sintel', link: '/notas-sintel' },
    { label: 'Buscador de Fontes', link: '/buscador-fontes' },
    { label: 'Dicionário Totvs', link: '/dicionario-totvs' }
  ];

  private onClick() {
  }

}
