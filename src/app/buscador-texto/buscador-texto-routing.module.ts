import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorTextoComponent } from './buscador-texto/buscador-texto.component';

const routes: Routes = [  
  { path: '', component: BuscadorTextoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscadorTextoRoutingModule { }
