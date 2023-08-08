import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoTableColumn, PoDialogService, PoDatepickerRange,
  PoDatepickerRangeComponent  } from '@po-ui/ng-components';

import { NotasSintelService } from './notas-sintel.service';
import { HttpRequisitionService } from 'src/app/http/http-requisition.service';

@Component({
  selector: 'app-notas-sintel-list',
  templateUrl: './notas-sintel-list.component.html',
  styleUrls: ['./notas-sintel-list.component.scss'],  
  providers: [NotasSintelService, PoDialogService, HttpRequisitionService]
})

export class NotasSintelListComponent implements AfterViewInit, OnInit {

  datepickerRange: PoDatepickerRange = {
    start: new Date(),
    end: new Date()
  };

  columns: Array<PoTableColumn> = this.colunas.getColumns();
  columnsDefault: Array<PoTableColumn> = [];
  detail: any;
  total:string = "0";
  initialColumns: Array<any> = [];
  dataNotas: Array<any> = [];  
  event: string | undefined;
  
  loading:boolean = false;
  loadingText:string = 'Buscando Notas';

  date: string = this.formatDate(new Date());

  constructor(private _http: HttpClient,
              private colunas: NotasSintelService, 
              private http: HttpRequisitionService) {     
  }

  ngOnInit(){
    this.buscaNotas(this.date,this.date);           
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date: Date) {
    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join('-')
    );
  }

  
  onClickBuscar(){
    console.log(this.datepickerRange);
    
    this.buscaNotas(this.datepickerRange.start,this.datepickerRange.end); 

  }
  changeEvent(event: string){
    this.event = event;      
  }
  

  ngAfterViewInit(): void {
    this.columnsDefault = this.columns;    

  }

  isUndelivered(row:any, index: number) {
    return row.status !== 'delivered';
  }
  
  buscaNotas(data_ini:any, data_fim:any){

    this.loading = true;

    console.log(data_ini,data_fim);
    let url = '/notasMercedes?data_ini=' + this.date + '&data_fim=' + this.date;  
    
    if(data_ini != ''){
      url = '/notasMercedes?data_ini=' + data_ini + '&data_fim=' + data_fim;        
    }

    return this.http.get(1,url,"","",20000,
      (request:any) => {
        this.loading = false;
        this.dataNotas = request.items[0]['ds_notas']['nota_fiscal'];  
        this.total = this.dataNotas.length.toString();

        console.log(this.dataNotas);
      },
      (error:any) => {
        this.loading = false;
        console.log(error);
      });

  }
  
  collapseAll() {
    this.dataNotas.forEach((item, index) => {
      if (item.item_nota_fiscal) {
        this.onCollapseDetail();
      }
    });
  }

  expandAll() {
    this.total = "0";
    this.dataNotas.forEach((item, index) => {
      if (item.item_nota_fiscal) {
        this.onExpandDetail();
      }
    });
  }

  onCollapseDetail() {
    //this.totalExpanded -= "1";
    //this.totalExpanded = this.totalExpanded < 0 ? 0 : this.totalExpanded;
  }

  onExpandDetail() {
    this.total += 1;
  }




}
