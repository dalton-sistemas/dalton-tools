import { Injectable } from '@angular/core';

import { PoTableColumn, PoTableDetail } from '@po-ui/ng-components';

@Injectable()
export class NotasSintelService {
  getColumns(): Array<PoTableColumn> {
    const airfareDetail: PoTableDetail = {
      columns: [
        { property: 'nr_seq_ped',label: 'Seq' },
        { property: 'it_codigo',label: 'Item' },
        { property: 'cod_refer',label: 'Refer' },
        { property: 'qt_faturada', label: 'Quantidade' },
        { property: 'un_fatur',label: 'Un Fat' },
        { property: 'it_codigo',label: 'Quantidade Un Fatur' },
        { property: 'nr_pedcli',label: 'Ped Cli' },
        { property: 'nat_operacao',label: 'Nat oper' }
      ],
      typeHeader: 'top'
    };

    return [
      { property: 'cod_estabel', label: 'Estab'},
      { property: 'serie', label: 'Serie'},    
      { property: 'nr_nota_fis', label: 'Nota Fiscal'},
      { property: 'dt_emis_nota', label: 'Emissão' },
      { property: 'nat_operacao', label: 'Nat Oper'},
      { property: 'nome_ab_cli', label: 'Cliente'},
      { property: 'val_sit_nfe',   label: 'Situação NF-e'},
      { property: 'val_tip_emissao',   label: 'Tipo Emissão'},
      { property: 'val_iecfoat',   label: 'IECFOAT'},
      { property: 'cod_protoc',   label: 'Protocolo'},    
      { property: 'item_nota_fiscal', label: 'Items', type: 'detail', detail: airfareDetail },
      { property: 'search', visible: false},
      { property: 'i_status', label: 'Status', type: 'subtitle',
        subtitles: [
          { value: 1, color: 'color-01', label: 'Totvs',content: 'T'},
          { value: 2, color: 'color-02', label: 'Totvs-Sintel',content: 'T-S'},
          { value: 3, color: 'color-03', label: 'Sintel',content: 'S'}          
        ]
      }
    ];
  }
}
