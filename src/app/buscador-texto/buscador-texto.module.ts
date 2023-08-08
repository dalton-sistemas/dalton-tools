import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscadorTextoRoutingModule } from './buscador-texto-routing.module';
import { BuscadorTextoComponent } from './buscador-texto/buscador-texto.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BuscadorTextoComponent
  ],
  imports: [
    CommonModule,
    BuscadorTextoRoutingModule,
    SharedModule
  ]
})
export class BuscadorTextoModule { }
