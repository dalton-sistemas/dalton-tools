import { NgModule } from '@angular/core';

import { RpwValidacoesRoutingModule } from './rpw-validacoes-routing.module';
import { RpwValidacoesComponent } from './rpw-validacoes.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RpwValidacoesComponent
  ],
  imports: [
    RpwValidacoesRoutingModule,
    SharedModule
  ]
})
export class RpwValidacoesModule { }
