import { Injectable } from '@angular/core';
import { PoTableColumn, PoTableDetail } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class DicionarioTotvsService {

  constructor() { }

  getColumnsField(): Array<PoTableColumn> {
    return [
      { property: '_Field_Name', label: 'Campo'},
      { property: '_Label', label: 'Nome'},            
      { property: '_Data_Type', label: 'Tipo'},      
      { property: '_Format', label: 'Formato'},      
      { property: '_Mandatory', label: 'Mandatório'} 
    ];
  }

  getColumnsIndex(): Array<PoTableColumn> {
    return [
      { property: '_Index_Name', label: 'Nome'},
      { property: '_Active', label: 'Ativo'},            
      { property: '_Unique', label: 'Único'},  
      { property: '_Idx_CRC', label: 'CRC'},      
      { property: '_idx_num', label: 'Num'}
    ];
  }
  
  getColumnsFieldIndex(): Array<PoTableColumn> {
    return [
      { property: 'tt_field[0]._Field_Name', label: 'Campo'},
      { property: 'tt_field[0]._Label', label: 'Nome'},            
      { property: 'tt_field[0]._Data_Type', label: 'Tipo'},      
      { property: 'tt_field[0]._Format', label: 'Formato'},      
      { property: 'tt_field[0]._Mandatory', label: 'Mandatório'} 
    ];
  }
  getColumnsTrigger(): Array<PoTableColumn> {
    return [
      { property: '_Event', label: 'Evento'},
      { property: '_Proc_Name', label: 'Caminho'},            
      { property: '_Trig_Crc', label: 'CRC'} 
    ];
  }

}
