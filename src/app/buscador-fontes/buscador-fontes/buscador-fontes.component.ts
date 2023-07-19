import { Component, OnInit, ViewChild } from '@angular/core';
import { PoDialogService, PoTableColumn, PoTableAction, PoModalComponent, PoTableDetail, PoTagType, PoListViewAction } from '@po-ui/ng-components';
import { BuscadorFontesService } from './buscador-fontes.service';
import { HttpRequisitionService } from 'src/app/http/http-requisition.service';
import { throwError, timeout } from 'rxjs';

@Component({
  selector: 'app-buscador-fontes',
  templateUrl: './buscador-fontes.component.html',
  styleUrls: ['./buscador-fontes.component.scss'],   
  providers: [BuscadorFontesService,HttpRequisitionService, PoDialogService]
})
export class BuscadorFontesComponent implements OnInit  {  
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;  
  @ViewChild('detailsModal', { static: true }) detailsModalElement!: PoModalComponent;

  constructor(private colunas: BuscadorFontesService,
              private http: HttpRequisitionService){
  }
 
  columns: Array<PoTableColumn> = this.colunas.getColumns();  
  columnsModal: Array<PoTableColumn> = this.colunas.getColumnsModal();
  data: Array<any> = [];  
  initialWindown: boolean = true;

  pasta: string = "";
  arquivo: string = "";
  texto: string = "";
  buscaProcedure: boolean = false;
  chamadaDePrograma!: Array<string>;
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
      
      const url = "http://10.1.4.245:8290/desenv-tuper/resources/buscaEmCascata";

      let body:any = {
        "pasta": this.pasta,
        "arquivo": this.arquivo,
        "textoBuscado": this.texto,
        "buscaProcedure": this.buscaProcedure
      }

      this.http.post(url,body,"",
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
