import { Injectable } from '@angular/core';

import { PoTableColumn, PoTableDetail, PoTagType } from '@po-ui/ng-components';
//import { BuscadorFontesComponent } from './buscador-fontes.component';

@Injectable({
  providedIn: 'root'
})
export class BuscadorFontesService {

  //constructor(private bf: BuscadorFontesComponent){}

  getColumns(): Array<PoTableColumn> {
    const chamadaDePrograma: PoTableDetail = {
      columns: [
        { property: 'nr_seq_ped' }
      ],
      typeHeader: 'none'
    };
    const linhasEncontradas: PoTableDetail = {
      columns: [
        { property: 'nr_seq_ped' }
      ],
      typeHeader: 'none'
    };

    return [
      { property: 'nome', label: 'Nome'},
      { property: 'descricao', label: 'Descrição'},      
      { property: 'caminhoPrograma', label: 'link',type: 'link'},
      //{ property: 'chamadaDePrograma', label: 'Programas Chamados', type: PoTagType.Success, action: this.bf.openChamadaDePrograma.bind(this)}
    ];
  }

  getColumnsModal(): Array<PoTableColumn> {
    return [
          { property: 'linha' }
    ];
  }
}
