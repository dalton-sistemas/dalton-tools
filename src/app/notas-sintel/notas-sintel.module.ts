import { NgModule } from '@angular/core';

import { PoTableModule } from '@po-ui/ng-components';

import { NotasSintelRoutingModule } from './notas-sintel-routing.module';
import { NotasSintelListComponent } from './notas-sintel-list/notas-sintel-list.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NotasSintelListComponent
  ],
  imports: [
    NotasSintelRoutingModule,    
    SharedModule,
  ],
  exports:[
    PoTableModule
  ]
})
export class NotasSintelModule { }
