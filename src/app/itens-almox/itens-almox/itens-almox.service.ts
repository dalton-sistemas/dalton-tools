import { Injectable } from '@angular/core';
import { PoTableColumn, PoTableDetail } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class ItensAlmoxService {

  constructor() { }

  getColumns(): Array<PoTableColumn> {
    const airfareDetail: PoTableDetail = {
      columns: [
        { property: 'cod_estabel',label: 'Estabelecimento' },
        { property: 'qtidade_atu',label: 'Quantidade' }
      ],
      typeHeader: 'top'
    };

    return [
      { property: 'it_codigo', label: 'item'},
      { property: 'desc_item', label: 'Descrição' },    
      { property: 'fm_codigo', label: 'Família'},      
      { property: 'tt_saldo_estoq', label: 'Items', type: 'detail', detail: airfareDetail },
    ];
  }
}
