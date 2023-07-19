import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorFontesComponent } from '../buscador-fontes/buscador-fontes/buscador-fontes.component';

const routes: Routes = [
    { path: '', component: BuscadorFontesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscadorFontesRoutingModule { }
