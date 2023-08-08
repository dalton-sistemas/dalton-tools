
import { Component, OnInit, ViewChild } from '@angular/core';
import { PoDialogService, PoTableColumn, PoTableAction, PoModalComponent, PoTableDetail, PoTagType, PoListViewAction } from '@po-ui/ng-components';
import { HttpRequisitionService } from 'src/app/http/http-requisition.service';
import { throwError, timeout } from 'rxjs';
import { BuscadorTextoService } from './buscador-texto.service';

@Component({
  selector: 'app-buscador-texto',
  templateUrl: './buscador-texto.component.html',
  styleUrls: ['./buscador-texto.component.scss'],
  providers: [BuscadorTextoService,HttpRequisitionService, PoDialogService]
})

export class BuscadorTextoComponent implements OnInit  {  

  constructor(private colunas: BuscadorTextoService,
              private http: HttpRequisitionService){
  }
 
  columns: Array<PoTableColumn> = this.colunas.getColumns();  
  columnsModal: Array<PoTableColumn> = this.colunas.getColumnsModal();
  data: Array<any> = [];  
  initialWindown: boolean = true;

  pasta: string = "";
  extencao: string = "";
  texto: string = "";
  linhasEncontradas!: Array<string>;
  tab: string = '0';
  loading: boolean = false;
  loadingText: string = "Buscando Fontes";
  fontesEncontrados: string = "0";
   
  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Abrir',
      action: this.newTab.bind(this),
      icon: 'po-icon-export'
    }
  ];

  ngOnInit(){
  }

  retornaSplitStringByIndex(item:any, value:any,index:any) {
    return item.split(index)[value];
  }

  returnSubstringByIndexOfAtFinal(item:any, index:any,plusValue:any) {
    return item.substring(item.indexOf('-') + 1 + plusValue);
  }
  buscaProcedures(item:any){
    let retorno: boolean = false;
    
    if(item.includes('PI-')){
        retorno = true;
    } 
    return retorno
  }

  hasProcedure(items:any){
    let retorno: boolean = false;
    for(let i = 0; i < items.length; i){
      if(items[i].includes('PI-')){
        retorno = true;
      } 
    }
    return retorno;
  }

  newTab(item:any){
    window.open(item.caminhoPrograma, '_blank');
  }  

  onClickBuscar(){

      this.data = [];
      this.fontesEncontrados = "0";

      this.loading = true;
      
      const url = "/buscaTexto?textoBuscado=" + this.texto;

      this.http.get(2,url,"","",400000,
      (request:any) => {
        this.loading = false;        
        this.initialWindown = false;
        this.data = request.programas;
        this.fontesEncontrados = this.data.length.toString();
      },
      (error:any) => {        
        this.loading = false;        
        this.initialWindown = false;
      });


      
  }


}
