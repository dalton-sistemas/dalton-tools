import { NgModule } from '@angular/core';
import { ItensAlmoxRoutingModule } from './itens-almox-routing.module';
import { ItensAlmoxComponent } from './itens-almox/itens-almox.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ItensAlmoxComponent
  ],
  imports: [
    ItensAlmoxRoutingModule,
    SharedModule
  ]
})
export class ItensAlmoxModule { }
