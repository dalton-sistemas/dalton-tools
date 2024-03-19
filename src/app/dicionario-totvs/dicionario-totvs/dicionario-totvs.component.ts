import { Component } from '@angular/core';
import { HttpRequisitionService } from 'src/app/http/http-requisition.service';
import { DicionarioTotvsService } from '../dicionario-totvs.service';
import { PoTableColumn,PoSelectOption,PoInfoOrientation  } from '@po-ui/ng-components';


@Component({
  selector: 'app-dicionario-totvs',
  templateUrl: './dicionario-totvs.component.html',
  styleUrls: ['./dicionario-totvs.component.scss'],  
  providers: [DicionarioTotvsService, HttpRequisitionService]
})
export class DicionarioTotvsComponent {

  initialWindown: boolean = true;

  tab:string = '1';
  tabFilha:string = '1';
  tabela:string = '';
  nomeTabela:string = '';
  bancoTabela:string = '';
  orientation: PoInfoOrientation = PoInfoOrientation.Horizontal;

  loading:boolean = false;
  loadingText:string = 'Loading!';
  
  camposTabela:any;

  columnsField: Array<PoTableColumn> = this.colunas.getColumnsField();  
  columnsIndex: Array<PoTableColumn> = this.colunas.getColumnsIndex();  
  columnsFieldIndex: Array<PoTableColumn> = this.colunas.getColumnsFieldIndex();  
  columnsTrigger: Array<PoTableColumn> = this.colunas.getColumnsTrigger();  
  dataField: Array<any> = [];  
  dataIndex: Array<any> = [];  
  dataTrigger: Array<any> = [];  

  constructor(private colunas: DicionarioTotvsService, 
              private http: HttpRequisitionService) { }

  ngOnInit() {
  }

  onClickBuscarTabela(){    
   
    this.loading = true;    
    this.loadingText = 'Buscando Tabela ' + this.tabela;

    const url = "/buscaTabelasDicionario?tabela=" + this.tabela;
    
    this.camposTabela = "";
    this.nomeTabela = "";
    this.bancoTabela = "";
    this.dataField = [];

    this.http.get(1,url,"","",20000,
      (request:any) => {
        console.log(request);
        this.initialWindown = false;
        this.loading = false;        
        this.camposTabela = request.items[0].tt_file[0];
        this.nomeTabela = request.items[0].tt_file[0]['_File-Name'] + " - " + request.items[0].tt_file[0]._Desc;
        this.bancoTabela = request.items[0].tt_file[0]['db-name'];      
        this.dataField = request.items[1].tt_field;
        this.dataIndex = request.items[2].ds_index.tt_index;
        this.dataTrigger = request.items[3].tt_trigger;
      },
      (error:any) => {
        this.loading = false;
        this.initialWindown = false;
      });    

  }

  isUndelivered(row:any, index: number) {
    return row.status !== 'delivered';
  }

  getFields(row:any):any{
    console.log(row);
    return row;
  }

}
