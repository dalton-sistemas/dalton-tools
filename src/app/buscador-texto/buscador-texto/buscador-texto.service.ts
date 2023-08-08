import { Injectable } from '@angular/core';
import { PoTableColumn, PoTableDetail } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class BuscadorTextoService {

  constructor() { }

  
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
      { property: 'caminhoPrograma', label: 'link',type: 'link'}      
    ];
  }

  getColumnsModal(): Array<PoTableColumn> {
    return [
          { property: 'linha' }
    ];
  }
}
