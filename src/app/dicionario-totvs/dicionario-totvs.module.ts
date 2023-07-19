import { NgModule } from '@angular/core';
import { DicionarioTotvsRoutingModule } from './dicionario-totvs-routing.module';
import { DicionarioTotvsComponent } from './dicionario-totvs/dicionario-totvs.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DicionarioTotvsComponent
  ],
  imports: [    
    DicionarioTotvsRoutingModule,
    SharedModule
  ]
})
export class DicionarioTotvsModule { }
