import { NgModule } from '@angular/core';
import { BuscadorFontesRoutingModule } from './buscador-fontes-routing.module';
import { BuscadorFontesComponent } from './buscador-fontes/buscador-fontes.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BuscadorFontesComponent
  ],
  imports: [
    BuscadorFontesRoutingModule,
    SharedModule
  ]
})
export class BuscadorFontesModule { }
