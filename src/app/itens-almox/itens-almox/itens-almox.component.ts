import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpRequisitionService } from 'src/app/http/http-requisition.service';
import { ItensAlmoxService } from './itens-almox.service';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-itens-almox',
  templateUrl: './itens-almox.component.html',
  styleUrls: ['./itens-almox.component.scss']
})
export class ItensAlmoxComponent {
  
  constructor(private http: HttpRequisitionService,
              private colunas: ItensAlmoxService){}
  
  loading: boolean = false;
  loadingText: string = "Buscando Fontes";
  itensEncontrados: string = "0";  
  initialWindown: boolean = true;
  
  item:string = "";
  descricao_item: string = "";
  familia: string = "";
  descricao_fam: string = "";
  
  data: Array<any> = [];  
  
  columns: Array<PoTableColumn> = this.colunas.getColumns();

  validaCampos(campo: string){
    if(campo == "item"){          
      this.descricao_item = "";
      this.familia = "";
      this.descricao_fam = "";
    }else if(campo == "item-desc"){ 
      this.item = "";
      this.familia = "";
      this.descricao_fam = "";
    }else if(campo == "familia"){ 
      this.item = "";
      this.descricao_item = "";
      this.descricao_fam = "";
    }else if(campo == "familia-desc"){ 
      this.item = "";
      this.descricao_item = "";
      this.familia = "";
    }
  }
  
  onClickBuscar(): void {
    
    this.data = [];
    this.itensEncontrados = "0";
    this.loading = true;    
    const url = "/buscaItensAlmox?item=" + this.item + "&descricao_item=" + this.descricao_item + "&familia=" + this.familia + "&descricao_fam=" + this.descricao_fam;

    console.log(url);

    this.http.get(1,url,"","",200000,
    (request:any) => {
      this.loading = false;        
      this.initialWindown = false;
      this.data = request.items[0].ds_item_almox.tt_itens_almox;
      console.log(this.data);
      this.itensEncontrados = this.data.length.toString();
    },
    (error:any) => {        
      this.loading = false;              
    });
    
  }



}
