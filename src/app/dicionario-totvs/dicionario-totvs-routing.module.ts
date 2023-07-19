import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DicionarioTotvsComponent } from './dicionario-totvs/dicionario-totvs.component';

const routes: Routes = [
  { path: '', component: DicionarioTotvsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DicionarioTotvsRoutingModule { }
